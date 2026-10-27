import ArrowIcon from './ArrowIcon';
import ProjectImage from './ProjectImage';
import { getDesignApproachHref } from './designApproaches';
import projects, { getProjectHref } from './projects';
import { getRouteHref } from './pageConfig';

type ProjectGridProps = {
  limit?: number;
};

function ProjectGrid({ limit }: ProjectGridProps) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="project-grid">
      {visibleProjects.map((project) => {
        const approachHref = getDesignApproachHref(project);
        return (
          <article className={approachHref ? 'project-card has-secret-approach' : 'project-card'} key={project.number}>
            <div className={`project-art ${project.image || project.video ? 'project-art-image-slide' : project.className}`}>
              {project.video ? (
                <a className="project-art-video-link" href={getProjectHref(project)} aria-label={`View project: ${project.title}`}>
                  <video
                    className="project-art-video"
                    src={project.video}
                    aria-hidden="true"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  />
                </a>
              ) : project.image ? (
                <ProjectImage
                  src={project.image}
                  alt={project.imageAlt ?? `${project.title} project artwork`}
                  contained={project.containImage}
                  href={getProjectHref(project)}
                />
              ) : (
                <>
                  <span className="project-art-mark">
                    {project.mark.split('\n').map((line) => <span key={line}>{line}</span>)}
                  </span>
                  <span className="project-art-description">{project.description}</span>
                  <span className="project-art-number">{project.number}</span>
                </>
              )}
              {approachHref && (
                <a
                  className="project-secret-hint"
                  href={getRouteHref(approachHref)}
                  aria-label={`Discover the hidden design approach for ${project.title}`}
                >
                  <span>There’s a design note hidden here</span><ArrowIcon diagonal />
                </a>
              )}
            </div>
            <div className="project-meta">
              <div>
                <h3><a href={getProjectHref(project)}>{project.title}</a></h3>
                <p>{project.category}</p>
              </div>
              <a
                className="project-arrow"
                href={getProjectHref(project)}
                aria-label={`Read the ${project.title} case study`}
              >
                <ArrowIcon diagonal />
              </a>
            </div>
            <p className="project-summary">{project.summary}</p>
            {approachHref && (
              <a className="project-secret-link" href={getRouteHref(approachHref)}>
                Explore a design approach <ArrowIcon diagonal />
              </a>
            )}
          </article>
        );
      })}
    </div>
  );
}

export default ProjectGrid;
