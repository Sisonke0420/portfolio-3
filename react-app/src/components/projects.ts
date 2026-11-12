import modularIdentityImage from '../assets/Images/0d2eeed4-8e54-4d5f-8394-f5e6c3280559.webp';
import textureTypographyImage from '../assets/Images/4799207a-d610-441a-bc74-e4edb7ed227b.webp';
import awardsPosterImage from '../assets/Images/99efc472-09d3-4a03-acbb-d9f7c7615ab7.webp';
import noSmokingImage from '../assets/Images/01a15b08-b66a-7fbe-819c-e0ad405f3b3f.webp';
import paintedPortraitImage from '../assets/Images/04a0ec95-7447-4893-a697-cf3f58b3bb51.webp';
import inkTextureImage from '../assets/Images/5b80e615-dfbc-4c9e-826b-13588fc8aba7.webp';
import architecturalPortraitImage from '../assets/Images/8c981edd-32ad-4674-a947-67f8f80858f1.webp';
import flightPathImage from '../assets/Images/cosmos_14191520.webp';
import geometricPortraitImage from '../assets/Images/geometric-instagram-453-portrait-1080x1350.png';
import geometricSquareImage from '../assets/Images/geometric-instagram-854-square-1080x1080.png';
import geometricStudyImage from '../assets/Images/geometric-instagram-872-square-1080x1080.png';
import geometricArchitectureImage from '../assets/Images/geometric-instagram-905-portrait-1080x1350.png';
import motion147 from '../assets/Images/geometric-instagram-147-portrait-1080x1350.mp4';
import motion251 from '../assets/Images/geometric-instagram-251-story-1080x1920.mp4';
import motion300 from '../assets/Images/geometric-instagram-300-portrait-1080x1350.mp4';
import motion601 from '../assets/Images/geometric-instagram-601-portrait-1080x1350.mp4';
import motion854 from '../assets/Images/geometric-instagram-854-story-1080x1920.mp4';
import motion774 from '../assets/Images/geometric-x-774-portrait-720x900.mp4';
import portfolioFilm from '../assets/Images/portfolio video.mp4';
import { getRouteHref } from './pageConfig';

export type ProjectMedia = {
  type: 'image' | 'video';
  src: string;
  alt: string;
};

export type Project = {
  number: string;
  title: string;
  category: string;
  className: string;
  mark: string;
  description: string;
  summary: string;
  detail: string;
  funNote: string;
  annotation: string;
  moods: ProjectMood[];
  image?: string;
  imageAlt?: string;
  containImage?: boolean;
  video?: string;
  gallery?: ProjectMedia[];
  externalUrl?: string;
  previewTheme?: 'storefront' | 'rescue';
  previewKicker?: string;
  previewTitle?: string;
  previewDescription?: string;
};

export type ProjectMood = 'clear' | 'loud' | 'useful';

export const projectMoods: { id: ProjectMood; label: string; prompt: string }[] = [
  { id: 'clear', label: 'Make it clearer', prompt: 'For ideas that need a little more focus.' },
  { id: 'loud', label: 'Make it louder', prompt: 'For work that is happy to be noticed.' },
  { id: 'useful', label: 'Make it work', prompt: 'For thoughtful systems, pages, and details.' },
];

// Project detail routes are derived from titles so links and prerendered paths stay consistent.
export function getProjectSlug(project: Project): string {
  return project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getProjectHref(project: Project): string {
  if (project.externalUrl) return project.externalUrl;
  return getRouteHref(`/work/${getProjectSlug(project)}/`);
}

const motionGallery: ProjectMedia[] = [
  { type: 'image', src: geometricPortraitImage, alt: 'Geometric image and motion study with layered interface markings' },
  { type: 'image', src: geometricSquareImage, alt: 'Square-format geometric graphic study' },
  { type: 'image', src: geometricStudyImage, alt: 'Square monochrome geometric study' },
  { type: 'image', src: geometricArchitectureImage, alt: 'Geometric image study over an architectural scene' },
  { type: 'video', src: motion147, alt: 'Geometric motion study 147' },
  { type: 'video', src: motion251, alt: 'Geometric motion study 251' },
  { type: 'video', src: motion300, alt: 'Geometric motion study 300' },
  { type: 'video', src: motion601, alt: 'Geometric motion study 601' },
  { type: 'video', src: motion854, alt: 'Geometric motion study 854' },
  { type: 'video', src: motion774, alt: 'Geometric motion study 774' },
];

const projects: Project[] = [
  {
    number: '01',
    title: 'Modular Identity',
    category: 'Graphic design · Typography',
    className: '',
    mark: '',
    description: '',
    summary: 'A deep-blue typographic identity study built from modular forms, precise rules, and a visible construction grid.',
    detail: 'Oversized letterforms and a considered grid give this identity its structure. Fine labels and alignment marks bring the making of the system into the finished composition.',
    funNote: 'The grid is part of the cast.',
    annotation: 'The grid is part of the cast.',
    moods: ['clear', 'useful'],
    image: modularIdentityImage,
    imageAlt: 'Blue modular letterform identity with a geometric grid',
    containImage: true,
  },
  {
    number: '02',
    title: 'Texture Typography',
    category: 'Typography · Identity',
    className: '',
    mark: '',
    description: '',
    summary: 'A custom wordmark paired with its construction grid, making the details of the letterforms part of the presentation.',
    detail: 'The contrast between the finished lettering and its measured construction makes spacing, proportion, and rhythm easy to see.',
    funNote: 'Every letter has a personal-space preference.',
    annotation: 'Kerning, in its natural habitat.',
    moods: ['clear', 'useful'],
    image: textureTypographyImage,
    imageAlt: 'Black texture wordmark above a typographic construction grid',
    containImage: true,
  },
  {
    number: '03',
    title: 'Dutch Design Awards',
    category: 'Poster design · Art direction',
    className: '',
    mark: '',
    description: '',
    summary: 'A high-contrast geometric poster set into its architectural surroundings.',
    detail: 'The strong black-and-cream composition uses a small hit of orange to focus attention, while its angular forms echo the lines of the building.',
    funNote: 'Architecture: unexpectedly on brand.',
    annotation: 'A graphic signal in the city.',
    moods: ['loud', 'useful'],
    image: awardsPosterImage,
    imageAlt: 'Geometric Dutch Design Awards poster displayed on a building',
    containImage: true,
  },
  {
    number: '04',
    title: 'Painted Portrait Study',
    category: 'Image-making · Portrait',
    className: '',
    mark: '',
    description: '',
    summary: 'A close-up portrait study built from expressive yellow and slate-grey painted textures.',
    detail: 'Bold color and rough, layered brushwork turn a familiar portrait format into a tactile, high-contrast image.',
    funNote: 'Subtle was not the assignment.',
    annotation: 'A portrait with a little more texture.',
    moods: ['loud'],
    image: paintedPortraitImage,
    imageAlt: 'Expressive yellow and grey painted portrait',
  },
  {
    number: '05',
    title: 'Built Environment',
    category: 'Photography · Architecture',
    className: '',
    mark: '',
    description: '',
    summary: 'A black-and-white architectural portrait that uses a quiet figure and strong geometry to set the scale.',
    detail: 'The diagonal stairways and repeated lines make the building the lead character, while the figure gives the composition a human point of reference.',
    funNote: 'The stairs are going places.',
    annotation: 'A study in lines, light, and scale.',
    moods: ['clear', 'useful'],
    image: architecturalPortraitImage,
    imageAlt: 'Black-and-white portrait of a figure on a geometric stairway',
    containImage: true,
  },
  {
    number: '06',
    title: 'Flight Path',
    category: 'Photography · Architecture',
    className: '',
    mark: '',
    description: '',
    summary: 'A view straight up through a circular building, with a plane crossing the open sky at its center.',
    detail: 'Repeating balconies frame the sky as a precise circle. A small plane creates a focal point and a moment of movement in the otherwise still architecture.',
    funNote: 'Excellent timing from the sky.',
    annotation: 'A little perspective, with a flight path.',
    moods: ['clear', 'loud'],
    image: flightPathImage,
    imageAlt: 'Circular architecture framing a plane against a blue sky',
    containImage: true,
  },
  {
    number: '07',
    title: 'Public-space Signal',
    category: 'Campaign · Photography',
    className: '',
    mark: '',
    description: '',
    summary: 'A candid moment in front of a no-smoking sign, where the image and its message meet head-on.',
    detail: 'The direct encounter between a person and a public sign gives this frame its visual tension and an immediate sense of place.',
    funNote: 'The sign has made its point.',
    annotation: 'A message, met in the wild.',
    moods: ['loud', 'useful'],
    image: noSmokingImage,
    imageAlt: 'Person facing a large no-smoking sign in a public space',
    containImage: true,
  },
  {
    number: '08',
    title: 'Ink / Particle Study',
    category: 'Image-making · Texture',
    className: '',
    mark: '',
    description: '',
    summary: 'A high-impact red pigment study that turns an abstract texture into a visual focal point.',
    detail: 'Suspended droplets and larger ink forms create a loose rhythm across a transparent field, making the asset useful as a standalone image or a compositional layer.',
    funNote: 'A little color goes a long way.',
    annotation: 'Texture with a splash of drama.',
    moods: ['loud'],
    image: inkTextureImage,
    imageAlt: 'Red ink droplets and pigment splashes on a transparent background',
    containImage: true,
  },
  {
    number: '09',
    title: 'Geometric Motion Studies',
    category: 'Image-making · Motion design',
    className: '',
    mark: '',
    description: '',
    summary: 'A collection of geometric image and motion experiments, moving between portrait, architecture, and abstract form.',
    detail: 'The series tests how grids, graphic overlays, and shifting image crops behave across square, portrait, and story-sized formats.',
    funNote: 'Same visual language. A few different directions.',
    annotation: 'A system in motion.',
    moods: ['loud', 'useful'],
    image: geometricPortraitImage,
    imageAlt: 'Geometric image and motion study with layered interface markings',
    gallery: motionGallery,
  },
  {
    number: '10',
    title: 'Portfolio Film',
    category: 'Moving image · Editing',
    className: '',
    mark: '',
    description: '',
    summary: 'A short-form portfolio film bringing selected visual work together in a moving-image format.',
    detail: 'The film plays silently on a loop, with controls available to pause or adjust playback.',
    funNote: 'A portfolio, with a play button.',
    annotation: 'Work, in motion.',
    moods: ['loud', 'useful'],
    video: portfolioFilm,
  },
  {
    number: '11',
    title: 'E-commerce Website',
    category: 'Web design · E-commerce',
    className: '',
    mark: '',
    description: '',
    summary: 'A live e-commerce website bringing a digital storefront to life.',
    detail: 'Explore the live storefront and its shopping experience.',
    funNote: 'A good place to browse.',
    annotation: 'A storefront, live on the web.',
    moods: ['clear', 'useful'],
    externalUrl: 'https://website-e-commerce-git-v4-sisonke1.vercel.app/',
    previewTheme: 'storefront',
    previewKicker: 'WEB DESIGN / E-COMMERCE',
    previewTitle: 'E-commerce Website',
    previewDescription: 'A digital storefront, designed for the browsing experience.',
  },
  {
    number: '12',
    title: 'Free State Animal Rescue',
    category: 'Web design · Non-profit',
    className: '',
    mark: '',
    description: '',
    summary: 'A welcoming website for an animal rescue focused on care, fostering, and responsible adoption.',
    detail: 'The site introduces the organisation, explains how people can help, and makes it easy to find stories and contact the team.',
    funNote: 'Good people doing good things for animals.',
    annotation: 'Care, connection, and new beginnings.',
    moods: ['clear', 'useful'],
    externalUrl: 'https://fsar.vercel.app/',
    previewTheme: 'rescue',
    previewKicker: 'FREE STATE / ANIMAL RESCUE',
    previewTitle: 'Every animal deserves a safe place to thrive.',
    previewDescription: 'Rescue, rehabilitation, fostering, and responsible adoption.',
  },
];

export default projects;
