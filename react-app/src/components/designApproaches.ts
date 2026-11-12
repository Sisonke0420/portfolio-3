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
      findProject('dutch-design-awards'),
      findProject('texture-typography'),
    ],
  },
  {
    slug: 'bold-editorial-signal',
    project: findProject('public-space-signal'),
    title: 'A clear signal, no megaphone required.',
    introduction: 'A public-space message has to make sense at a glance. This study looks at the moment a person encounters a sign, using the image itself to create a direct point of contact.',
    approach: 'Keep the frame focused on the encounter. The sign gives the image its subject, while the person and surrounding space add context without competing with the message.',
    principles: [
      { title: 'Make the encounter legible', description: 'Keep the relationship between the person, the sign, and the message easy to read.' },
      { title: 'Use context with care', description: 'Let the setting make the image feel real without adding noise around its central idea.' },
      { title: 'Find the moment', description: 'A specific interaction gives a familiar visual message a more human point of view.' },
    ],
    gallery: [
      findProject('public-space-signal'),
      findProject('dutch-design-awards'),
      findProject('painted-portrait-study'),
    ],
  },
  {
    slug: 'image-in-motion',
    project: findProject('geometric-motion-studies'),
    title: 'A visual system, in motion.',
    introduction: 'A visual idea should hold together as it moves between formats. These studies test a consistent graphic language across portrait, square, and story-sized compositions.',
    approach: 'A clear grid and repeated visual cues create continuity. Cropping, scale, and pacing can then change from frame to frame without losing the thread.',
    principles: [
      { title: 'Build a repeatable frame', description: 'A grid gives each format a shared structure without locking every composition into the same shape.' },
      { title: 'Keep the visual cues close', description: 'Repeated marks and overlays help the work feel connected as the images change.' },
      { title: 'Let the format set the pace', description: 'Square, portrait, and story layouts each have their own rhythm. Work with it, not against it.' },
    ],
    gallery: [
      findProject('geometric-motion-studies'),
      findProject('texture-typography'),
      findProject('flight-path'),
    ],
  },
];

export function getDesignApproachHref(project: Project): string | undefined {
  const approach = designApproaches.find((item) => item.project.number === project.number);
  return approach ? `/studio-notes/${approach.slug}/` : undefined;
}
