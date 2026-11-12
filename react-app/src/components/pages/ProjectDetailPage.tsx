import ArrowIcon from '../ArrowIcon';
import { GlitchHeading } from '../GlitchHeading';
import ProjectImage from '../ProjectImage';
import { getDesignApproachHref } from '../designApproaches';
import { getRouteHref } from '../pageConfig';
import projects, { getProjectHref, type Project } from '../projects';

type ProjectDetailPageProps = {
  project: Project;
};

function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const projectIndex = projects.findIndex((item) => item.number === project.number);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const approachHref = getDesignApproachHref(project);

  return (
    <section className="inner-page page-shell project-detail-page">
      <a className="text-link project-back-link" href={getRouteHref('/work/')}>
        <ArrowIcon diagonal /> Back to selected work
      </a>
      <p className="eyebrow"><span className="eyebrow-line" /> Case study · {project.number}</p>
      <div className="project-detail-heading">
        <div>
          <GlitchHeading as="h1" className="page-title">{project.title}</GlitchHeading>
          <p className="large-copy">{project.category}</p>
        </div>
        <a className="button button-dark" href={getRouteHref('/contact/')}>
          Discuss a project <ArrowIcon />
        </a>
      </div>
      <div className="project-detail-art">
        {project.video ? (
          <video
            className="project-art-video"
            src={project.video}
            aria-label={`${project.title} video`}
            controls
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          />
        ) : project.image ? (
          <ProjectImage
            src={project.image}
            alt={project.imageAlt ?? `${project.title} project artwork`}
            contained={project.containImage}
          />
        ) : null}
        <p className="project-detail-annotation"><span aria-hidden="true">↗</span> {project.annotation}</p>
      </div>
      {project.gallery && (
        <section className="project-detail-gallery" aria-label={`${project.title} media gallery`}>
          <p className="eyebrow project-detail-gallery-heading">
            <span className="eyebrow-line" /> A closer look
          </p>
          {project.gallery.map((media, index) => (
            <figure className="project-detail-gallery-item" key={media.src}>
              {media.type === 'video' ? (
                <video
                  src={media.src}
                  aria-label={media.alt}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                />
              ) : (
                <img src={media.src} alt={media.alt} loading="lazy" decoding="async" />
              )}
              <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{media.alt}</figcaption>
            </figure>
          ))}
        </section>
      )}
      <div className="project-detail-copy">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> What shaped the work</p>
          <GlitchHeading as="h2">The idea and the design choices.</GlitchHeading>
        </div>
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> Project overview</p>
          <p>{project.summary}</p>
          <p className="eyebrow"><span className="eyebrow-line" /> Design approach</p>
          <p>{project.detail}</p>
          <p className="project-detail-category"><strong>Discipline</strong>{project.category}</p>
        </div>
      </div>
      {approachHref && (
        <a className="project-secret-link project-detail-approach-link" href={getRouteHref(approachHref)}>
          Read the studio notes <ArrowIcon diagonal />
        </a>
      )}
      <div className="project-detail-next">
        <span>Continue exploring</span>
        <a
          href={getProjectHref(nextProject)}
          target={nextProject.externalUrl ? '_blank' : undefined}
          rel={nextProject.externalUrl ? 'noopener noreferrer' : undefined}
        >
          {nextProject.title}<ArrowIcon diagonal />
        </a>
      </div>
    </section>
  );
}

export default ProjectDetailPage;
