import ArrowIcon from '../ArrowIcon';
import ProjectImage from '../ProjectImage';
import { getRouteHref } from '../pageConfig';
import { getProjectHref } from '../projects';
import type { DesignApproach } from '../designApproaches';

type DesignApproachPageProps = {
  approach: DesignApproach;
};

function DesignApproachPage({ approach }: DesignApproachPageProps) {
  return (
    <article className="inner-page page-shell approach-page">
      <a className="text-link project-back-link" href={getProjectHref(approach.project)}>
        <ArrowIcon diagonal /> Back to {approach.project.title}
      </a>
      <p className="eyebrow"><span className="eyebrow-line" /> Studio notes · {approach.project.category}</p>
      <header className="approach-heading">
        <p className="approach-overline">A different way to look at the work</p>
        <h1 className="page-title">{approach.title}</h1>
        <p className="large-copy">{approach.introduction}</p>
      </header>

      <div className="approach-gallery">
        {approach.gallery.map((project, index) => (
          <figure className={index === 0 ? 'approach-figure approach-figure-featured' : 'approach-figure'} key={project.number}>
            {project.image ? (
              <ProjectImage
                src={project.image}
                alt={project.imageAlt ?? `${project.title} design study`}
                contained={project.containImage}
              />
            ) : project.video ? (
              <video
                className="approach-video"
                src={project.video}
                aria-label={`${project.title} video`}
                controls
                loop
                muted
                playsInline
                preload="metadata"
              />
            ) : null}
            <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{project.title}</figcaption>
          </figure>
        ))}
      </div>

      <section className="approach-explanation">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> The thinking</p>
          <h2>{approach.project.title}, re-framed.</h2>
        </div>
        <p>{approach.approach}</p>
      </section>

      <section className="approach-principles" aria-label="Design principles">
        {approach.principles.map((principle, index) => (
          <article className="approach-principle" key={principle.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </section>

      <p className="approach-takeaway">
        These principles are starting points, not fixed rules. Their value is
        in helping each decision support the message, the medium, and the
        people the work is for.
      </p>

      <div className="project-detail-next">
        <span>Back to the portfolio</span>
        <a href={getRouteHref('/work/')}>
          Explore selected work<ArrowIcon diagonal />
        </a>
      </div>
    </article>
  );
}

export default DesignApproachPage;
