import { useState } from 'react';
import ArrowIcon from './ArrowIcon';
import ProjectImage from './ProjectImage';
import { getDesignApproachHref } from './designApproaches';
import { getRouteHref } from './pageConfig';
import projects, { getProjectHref } from './projects';

function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const activeApproachHref = getDesignApproachHref(activeProject);

  function showPrevious() {
    // Wrap around so the carousel remains navigable at either end of the project list.
    setActiveIndex((currentIndex) => (currentIndex - 1 + projects.length) % projects.length);
  }

  function showNext() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % projects.length);
  }

  return (
    <div className="project-carousel" role="region" aria-roledescription="carousel" aria-label="Selected projects" data-scroll-reveal>
      <div className="project-carousel-viewport" aria-live="polite">
        <article
          className={activeApproachHref
            ? 'project-card project-carousel-slide has-secret-approach'
            : 'project-card project-carousel-slide'}
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeIndex + 1} of ${projects.length}`}
          key={activeProject.number}
        >
          <div className={`project-art ${activeProject.image || activeProject.video ? 'project-art-image-slide' : activeProject.className}`}>
            {activeProject.video ? (
              <video
                className="project-art-video"
                src={activeProject.video}
                aria-label={`${activeProject.title} video`}
                autoPlay
                controls
                loop
                muted
                playsInline
                preload="auto"
              />
            ) : activeProject.image ? (
              <ProjectImage
                src={activeProject.image}
                alt={activeProject.imageAlt ?? `${activeProject.title} project artwork`}
                contained={activeProject.containImage}
              />
            ) : (
              <>
                <span className="project-art-mark">
                  {activeProject.mark.split('\n').map((line) => <span key={line}>{line}</span>)}
                </span>
                <span className="project-art-description">{activeProject.description}</span>
                <span className="project-art-number">{activeProject.number}</span>
              </>
            )}
            {activeApproachHref && (
              <a
                className="project-secret-hint"
                href={getRouteHref(activeApproachHref)}
                aria-label={`Discover the hidden design approach for ${activeProject.title}`}
              >
                <span>There’s a design note hidden here</span><ArrowIcon diagonal />
              </a>
            )}
          </div>
          <div className="project-meta">
            <div>
              <h3><a href={getProjectHref(activeProject)}>{activeProject.title}</a></h3>
              <p>{activeProject.category}</p>
            </div>
            <a
              className="project-arrow"
              href={getProjectHref(activeProject)}
              aria-label={`Read the ${activeProject.title} case study`}
            >
              <ArrowIcon diagonal />
            </a>
          </div>
          {activeApproachHref && (
            <a
              className="project-secret-link"
              href={getRouteHref(activeApproachHref)}
            >
              Explore a design approach <ArrowIcon diagonal />
            </a>
          )}
        </article>
      </div>
      <div className="project-carousel-controls">
        <div className="project-carousel-dots" aria-label="Choose a project">
          {projects.map((project, index) => (
            <button
              aria-label={`Show project ${index + 1}: ${project.title}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              className={activeIndex === index ? 'carousel-dot active' : 'carousel-dot'}
              key={project.number}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
        <div className="project-carousel-buttons">
          <button className="carousel-arrow" type="button" onClick={showPrevious} aria-label="Previous project">
            <ArrowIcon diagonal />
          </button>
          <button className="carousel-arrow carousel-arrow-next" type="button" onClick={showNext} aria-label="Next project">
            <ArrowIcon diagonal />
          </button>
        </div>
        <span className="carousel-count">{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

export default ProjectCarousel;
