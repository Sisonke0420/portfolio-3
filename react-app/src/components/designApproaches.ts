import projects, { getProjectSlug, type Project } from './projects';

export type DesignApproach = {
  slug: string;
  project: Project;
  title: string;
  introduction: string;
  approach: string;
  principles: { title: string; description: string }[];
  gallery: Project[];
};

function findProject(slug: string): Project {
  const project = projects.find((item) => getProjectSlug(item) === slug);
  if (!project) throw new Error(`Design approach references missing project: ${slug}`);
  return project;
}

export const designApproaches: DesignApproach[] = [
  {
    slug: 'grid-as-language',
    project: findProject('modular-identity'),
    title: 'The grid as a visual language.',
    introduction: 'A modular identity can remain expressive while retaining structure. This study uses the grid as an active part of the visual language.',
    approach: 'A simple unit provides the foundation. Scale, repetition, and cropping then create a family of compositions that remain coherent while allowing each application to feel distinct.',
    principles: [
      { title: 'Establish a core unit', description: 'A shared module creates a consistent relationship between letterforms and layouts.' },
      { title: 'Reveal the structure', description: 'Construction lines and technical labels make the underlying system part of the visual narrative.' },
      { title: 'Apply contrast with purpose', description: 'Oversized forms and fine rules establish hierarchy without unnecessary visual clutter.' },
    ],
    gallery: [
      findProject('modular-identity'),
      findProject('grid-type-experiment'),
      findProject('texture-typography'),
    ],
  },
  {
    slug: 'bold-editorial-signal',
    project: findProject('design-practice-poster'),
    title: 'Establishing a clear visual signal.',
    introduction: 'A poster has limited time to communicate. This approach focuses the composition on one clear message, using scale and color to make it legible and memorable.',
    approach: 'The headline becomes the primary visual element. A compact palette and generous negative space keep the message direct, while a considered graphic detail adds character.',
    principles: [
      { title: 'Prioritize the message', description: 'Give the most important words the strongest scale and clearest position.' },
      { title: 'Restrict the palette', description: 'A focused set of colors makes the composition more cohesive and recognizable.' },
      { title: 'Introduce visual tension', description: 'Offset alignments and a considered visual detail add movement to a restrained layout.' },
    ],
    gallery: [
      findProject('design-practice-poster'),
      findProject('takadanobaba-poster'),
      findProject('theatre-poster-series'),
    ],
  },
  {
    slug: 'editorial-rhythm',
    project: findProject('editorial-spread'),
    title: 'Creating rhythm across the page.',
    introduction: 'Effective editorial design guides the reader while allowing each page to retain its own character. This approach balances a consistent structure with moments of visual contrast.',
    approach: 'A repeatable typographic hierarchy provides the foundation. Image scale, color, and spacing can then vary to move the reader between quieter details and more expressive compositions.',
    principles: [
      { title: 'Consider the sequence', description: 'Design each page in relation to the pages around it, as well as on its own.' },
      { title: 'Use typography to guide', description: 'Consistent typographic levels help readers scan, pause, and navigate the content.' },
      { title: 'Vary the visual pace', description: 'A full-page image can provide a considered pause between denser passages.' },
    ],
    gallery: [
      findProject('editorial-spread'),
      findProject('yellow-editorial'),
      findProject('art-book-stack'),
    ],
  },
];

export function getDesignApproachHref(project: Project): string | undefined {
  const approach = designApproaches.find((item) => item.project.number === project.number);
  return approach ? `/studio-notes/${approach.slug}/` : undefined;
}
