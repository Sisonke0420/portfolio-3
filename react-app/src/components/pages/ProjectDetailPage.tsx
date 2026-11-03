import ArrowIcon from '../ArrowIcon';
import { GlitchHeading } from '../GlitchHeading';
import ProjectImage from '../ProjectImage';
import { getRouteHref } from '../pageConfig';
import projects, { getProjectHref, type Project } from '../projects';

type ProjectDetailPageProps = {
  project: Project;
};

function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const projectIndex = projects.findIndex((item) => item.number === project.number);
  const nextProject = projects[(projectIndex + 1) % projects.length];

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
            autoPlay
            controls
            loop
            muted
            playsInline
            preload="auto"
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
      <div className="project-detail-copy">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> Project overview</p>
          <GlitchHeading as="h2">The thinking behind the pixels.</GlitchHeading>
        </div>
        <div>
          <p>{project.summary}</p>
          <p>{project.detail}</p>
          <p className="project-detail-category"><strong>Discipline</strong>{project.category}</p>
        </div>
      </div>
      <div className="project-detail-next">
        <span>Continue exploring</span>
        <a href={getProjectHref(nextProject)}>
          {nextProject.title}<ArrowIcon diagonal />
        </a>
      </div>
    </section>
  );
}

export default ProjectDetailPage;
