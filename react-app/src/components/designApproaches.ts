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
    title: 'The grid: structure with a personality.',
    introduction: 'A modular identity can have structure without looking like it was assembled by spreadsheet. This study makes the grid an active part of the visual language.',
    approach: 'A simple unit provides the foundation. Scale, repetition, and cropping create a family of compositions that hang together while still letting each application do its own thing.',
    principles: [
      { title: 'Establish a core unit', description: 'A shared module creates a consistent relationship between letterforms and layouts.' },
      { title: 'Show your working', description: 'Construction lines and technical labels make the underlying system part of the visual narrative. Yes, the grid can come out from behind the curtain.' },
      { title: 'Use contrast with purpose', description: 'Oversized forms and fine rules establish hierarchy without making every element shout at once.' },
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
    title: 'One clear signal. No megaphone required.',
    introduction: 'A poster has very little time to make its point. This approach gives it one clear message, using scale and color to make it legible and memorable before the viewer keeps walking.',
    approach: 'The headline takes the lead. A compact palette and generous negative space keep the message direct, while a graphic detail adds character without starting a second conversation.',
    principles: [
      { title: 'Let the message lead', description: 'Give the most important words the strongest scale and clearest position. They did come all this way to be read.' },
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
    title: 'A little rhythm goes a long way.',
    introduction: 'Editorial design should guide the reader without making every page feel like it came from the same photocopier. This approach balances a consistent structure with moments of visual contrast.',
    approach: 'A repeatable typographic hierarchy provides the foundation. Image scale, color, and spacing can then vary, giving the reader a change of pace and the layout a reason to exist.',
    principles: [
      { title: 'Think beyond the single page', description: 'Design each page in relation to the pages around it, as well as on its own. It is a spread, not a series of unrelated posters.' },
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
