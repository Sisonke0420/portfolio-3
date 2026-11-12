import { useEffect, useState } from 'react';
import ArrowIcon from './ArrowIcon';
import ProjectImage from './ProjectImage';
import { getDesignApproachHref } from './designApproaches';
import { getRouteHref } from './pageConfig';
import projects, { getProjectHref } from './projects';

function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [noteOpen, setNoteOpen] = useState(false);
  const activeProject = projects[activeIndex];
  const activeApproachHref = getDesignApproachHref(activeProject);
  const projectHref = getProjectHref(activeProject);
  const externalLinkProps = activeProject.externalUrl
    ? { target: '_blank', rel: 'noopener noreferrer', title: 'Opens in a new tab' }
    : {};

  useEffect(() => setNoteOpen(false), [activeIndex]);

  function showPrevious() {
    // Wrap around so the carousel remains navigable at either end of the project list.
    setActiveIndex((currentIndex) => (currentIndex - 1 + projects.length) % projects.length);
  }

  function showNext() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % projects.length);
  }

  return (
    <div
      className="project-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected projects"
    >
      <div className="project-carousel-viewport" aria-live="off">
        <article
          className={`project-card project-carousel-slide${activeApproachHref ? ' has-secret-approach' : ''}${noteOpen ? ' is-note-open' : ''}`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeIndex + 1} of ${projects.length}`}
          key={activeProject.number}
        >
          <div className={`project-art ${activeProject.image || activeProject.video ? 'project-art-image-slide' : activeProject.className}`}>
            {activeProject.image ? (
              <ProjectImage
                src={activeProject.image}
                alt={activeProject.imageAlt ?? `${activeProject.title} project artwork`}
                contained={activeProject.containImage}
                href={getProjectHref(activeProject)}
              />
            ) : activeProject.externalUrl ? (
              <a
                className={`project-website-preview project-website-preview-${activeProject.previewTheme ?? 'storefront'}`}
                href={projectHref}
                {...externalLinkProps}
                aria-label={`Open ${activeProject.title} (opens in a new tab)`}
              >
                <span className="website-preview-topline">
                  <span>{activeProject.previewKicker}</span>
                  <span className="website-preview-window" aria-hidden="true"><i /><i /><i /></span>
                </span>
                <span className="website-preview-copy">
                  <span className="website-preview-mark">{activeProject.previewTheme === 'rescue' ? 'FS /' : 'ONLINE STORE'}</span>
                  <strong>{activeProject.previewTitle}</strong>
                  <span className="website-preview-description">{activeProject.previewDescription}</span>
                  <span className="website-preview-action">Visit live site <ArrowIcon diagonal /></span>
                </span>
                <span className="website-preview-decoration" aria-hidden="true" />
              </a>
            ) : activeProject.video ? (
              <a className="project-art-video-link project-video-teaser" href={getProjectHref(activeProject)} aria-label={`View project: ${activeProject.title}`}>
                <span>Moving image</span>
                <strong>{activeProject.title}</strong>
                <span className="project-video-teaser-action">Play in case study <ArrowIcon diagonal /></span>
              </a>
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
                <span>View the design rationale</span><ArrowIcon diagonal />
              </a>
            )}
            <span className="project-annotation" aria-label={`Studio annotation: ${activeProject.annotation}`}>
              <span aria-hidden="true">↗</span> {activeProject.annotation}
            </span>
          </div>
          <div className="project-meta">
            <div>
              <h3><a href={projectHref} {...externalLinkProps}>{activeProject.title}</a></h3>
              <p>{activeProject.category}</p>
            </div>
            <a
              className="project-arrow"
              href={projectHref}
              {...externalLinkProps}
              aria-label={activeProject.externalUrl
                ? `Visit the ${activeProject.title} website (opens in a new tab)`
                : `Read the ${activeProject.title} case study`}
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
          <p className="project-summary">{activeProject.summary}</p>
          <button
            className="project-note-toggle"
            type="button"
            aria-expanded={noteOpen}
            aria-controls="carousel-project-note"
            onClick={() => setNoteOpen((open) => !open)}
          >
            {noteOpen ? 'Hide the tiny process note' : 'A tiny process note'}
          </button>
          <p className="project-fun-note" id="carousel-project-note">{activeProject.funNote}</p>
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
