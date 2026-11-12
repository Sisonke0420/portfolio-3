import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = path.join(appRoot, 'dist');
const siteUrlValue = process.env.SITE_URL;
let siteUrl;

if (siteUrlValue) {
  try {
    siteUrl = new URL(siteUrlValue);
  } catch {
    throw new Error('SITE_URL must be a valid HTTPS URL.');
  }

  if (siteUrl.protocol !== 'https:') {
    throw new Error('SITE_URL must use HTTPS.');
  }

  if (!siteUrl.pathname.endsWith('/')) {
    siteUrl.pathname += '/';
  }
}

const server = await createServer({
  root: appRoot,
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true },
});

try {
  const [{ render }, { default: projects, getProjectSlug }, { designApproaches }] = await Promise.all([
    server.ssrLoadModule('/src/entry-server.tsx'),
    server.ssrLoadModule('/src/components/projects.ts'),
    server.ssrLoadModule('/src/components/designApproaches.ts'),
  ]);
  const shell = await readFile(path.join(outputRoot, 'index.html'), 'utf8');
  const manifest = JSON.parse(
    await readFile(path.join(outputRoot, 'manifest.json'), 'utf8'),
  );
  const assetBase = siteUrl?.pathname ?? '/';
  // Vite output may reference assets by source path or base-prefixed path; map both to built files.
  const assetUrls = new Map(
    Object.values(manifest)
      .filter((entry) => entry.src && entry.file)
      .flatMap((entry) => {
        const source = `/${entry.src.replaceAll('\\', '/')}`;
        return [
          [source, `${assetBase}${entry.file}`],
          [`${assetBase}${source.slice(1)}`, `${assetBase}${entry.file}`],
        ];
      }),
  );
  const routes = [
    {
      path: '/',
      title: 'Sisonke Miya — Graphic Designer & Developer',
      description: 'Thoughtful visual identities, graphic design, and accessible digital experiences by Sisonke Miya.',
    },
    {
      path: '/about/',
      title: 'About — Sisonke Miya',
      description: 'Meet Sisonke Miya, a graphic designer and developer focused on visual storytelling and accessible digital experiences.',
    },
    {
      path: '/work/',
      title: 'Selected Work — Sisonke Miya',
      description: 'Explore selected graphic design, typography, editorial, art direction, and video projects by Sisonke Miya.',
    },
    {
      path: '/contact/',
      title: 'Contact — Sisonke Miya',
      description: 'Get in touch with Sisonke Miya about graphic design, brand identity, and digital experience projects.',
    },
    ...projects.filter((project) => !project.externalUrl).map((project) => ({
      path: `/work/${getProjectSlug(project)}/`,
      title: `${project.title} — Sisonke Miya`,
      description: project.summary,
    })),
    ...designApproaches.map((approach) => ({
      path: `/studio-notes/${approach.slug}/`,
      title: `${approach.title} — Studio Notes by Sisonke Miya`,
      description: approach.introduction,
    })),
  ];
  const escapeHtml = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
  const replaceMeta = (html, pattern, name, content) => {
    const tag = `<meta ${name} content="${escapeHtml(content)}" />`;
    return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
  };

  for (const route of routes) {
    // Generate a complete HTML document per route so pages work before client-side hydration.
    let html = shell.replace(
      '<div id="root"></div>',
      `<div id="root">${render(route.path)}</div>`,
    );

    for (const [source, built] of assetUrls) {
      html = html.replaceAll(source, built);
    }

    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
    html = replaceMeta(html, /<meta name="description" content="[^"]*"\s*\/>/, 'name="description"', route.description);
    html = replaceMeta(html, /<meta property="og:title" content="[^"]*"\s*\/>/, 'property="og:title"', route.title);
    html = replaceMeta(html, /<meta property="og:description" content="[^"]*"\s*\/>/, 'property="og:description"', route.description);
    html = replaceMeta(html, /<meta name="twitter:title" content="[^"]*"\s*\/>/, 'name="twitter:title"', route.title);
    html = replaceMeta(html, /<meta name="twitter:description" content="[^"]*"\s*\/>/, 'name="twitter:description"', route.description);

    if (siteUrl) {
      const canonicalUrl = new URL(route.path.slice(1), siteUrl).href;
      const imageUrl = new URL('portfolio-preview.svg', siteUrl).href;
      html = replaceMeta(html, /<meta property="og:image" content="[^"]*"\s*\/>/, 'property="og:image"', imageUrl);
      html = replaceMeta(html, /<meta name="twitter:image" content="[^"]*"\s*\/>/, 'name="twitter:image"', imageUrl);
      html = replaceMeta(html, /<meta property="og:url" content="[^"]*"\s*\/>/, 'property="og:url"', canonicalUrl);
      html = html.replace('</head>', `    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />\n  </head>`);
    }

    const destination = route.path === '/'
      ? path.join(outputRoot, 'index.html')
      : path.join(outputRoot, route.path, 'index.html');
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, html);
  }

  if (siteUrl) {
    const sitemap = routes
      .map((route) => `  <url><loc>${escapeHtml(new URL(route.path.slice(1), siteUrl).href)}</loc></url>`)
      .join('\n');
    await writeFile(
      path.join(outputRoot, 'sitemap.xml'),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap}\n</urlset>\n`,
    );
    await writeFile(
      path.join(outputRoot, 'robots.txt'),
      `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', siteUrl).href}\n`,
    );
  }
} finally {
  await server.close();
}
