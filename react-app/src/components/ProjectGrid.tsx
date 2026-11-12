import { useState } from 'react';
import ArrowIcon from './ArrowIcon';
import ProjectImage from './ProjectImage';
import { getDesignApproachHref } from './designApproaches';
import projects, { getProjectHref, projectMoods, type Project, type ProjectMood } from './projects';
import { getRouteHref } from './pageConfig';

type ProjectGridProps = {
  limit?: number;
};

function ProjectCard({ project }: { project: Project }) {
  const [noteOpen, setNoteOpen] = useState(false);
  const approachHref = getDesignApproachHref(project);
  const noteId = `project-note-${project.number}`;
  const projectHref = getProjectHref(project);
  const externalLinkProps = project.externalUrl
    ? { target: '_blank', rel: 'noopener noreferrer', title: 'Opens in a new tab' }
    : {};

  return (
    <article className={`project-card${approachHref ? ' has-secret-approach' : ''}${noteOpen ? ' is-note-open' : ''}`}>
      <div className={`project-art ${project.image || project.video ? 'project-art-image-slide' : project.className}`}>
        {project.image ? (
          <ProjectImage
            src={project.image}
            alt={project.imageAlt ?? `${project.title} project artwork`}
            contained={project.containImage}
            href={getProjectHref(project)}
          />
        ) : project.externalUrl ? (
          <a
            className={`project-website-preview project-website-preview-${project.previewTheme ?? 'storefront'}`}
            href={projectHref}
            {...externalLinkProps}
            aria-label={`Open ${project.title} (opens in a new tab)`}
          >
            <span className="website-preview-topline">
              <span>{project.previewKicker}</span>
              <span className="website-preview-window" aria-hidden="true"><i /><i /><i /></span>
            </span>
            <span className="website-preview-copy">
              <span className="website-preview-mark">{project.previewTheme === 'rescue' ? 'FS /' : 'ONLINE STORE'}</span>
              <strong>{project.previewTitle}</strong>
              <span className="website-preview-description">{project.previewDescription}</span>
              <span className="website-preview-action">Visit live site <ArrowIcon diagonal /></span>
            </span>
            <span className="website-preview-decoration" aria-hidden="true" />
          </a>
        ) : project.video ? (
          <a className="project-art-video-link project-video-teaser" href={getProjectHref(project)} aria-label={`View project: ${project.title}`}>
            <span>Moving image</span>
            <strong>{project.title}</strong>
            <span className="project-video-teaser-action">Play in case study <ArrowIcon diagonal /></span>
          </a>
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
            <span>See the thinking behind it</span><ArrowIcon diagonal />
          </a>
        )}
        <span className="project-annotation" aria-label={`Studio annotation: ${project.annotation}`}>
          <span aria-hidden="true">↗</span> {project.annotation}
        </span>
      </div>
      <div className="project-meta">
        <div>
          <h3><a href={projectHref} {...externalLinkProps}>{project.title}</a></h3>
          <p>{project.category}</p>
        </div>
        <a
          className="project-arrow"
          href={projectHref}
          {...externalLinkProps}
          aria-label={project.externalUrl ? `Visit the ${project.title} website (opens in a new tab)` : `Read the ${project.title} case study`}
        >
          <ArrowIcon diagonal />
        </a>
      </div>
      <p className="project-summary">{project.summary}</p>
      <button
        className="project-note-toggle"
        type="button"
        aria-expanded={noteOpen}
        aria-controls={noteId}
        onClick={() => setNoteOpen((open) => !open)}
      >
        {noteOpen ? 'Hide the tiny process note' : 'A tiny process note'}
      </button>
      <p className="project-fun-note" id={noteId}>{project.funNote}</p>
      {approachHref && (
        <a className="project-secret-link" href={getRouteHref(approachHref)}>
          See how the idea came together <ArrowIcon diagonal />
        </a>
      )}
    </article>
  );
}

function ProjectGrid({ limit }: ProjectGridProps) {
  const [activeMood, setActiveMood] = useState<ProjectMood | null>(null);
  const moodProjects = activeMood
    ? projects.filter((project) => project.moods.includes(activeMood))
    : projects;
  const visibleProjects = limit ? moodProjects.slice(0, limit) : moodProjects;

  return (
    <div className="project-browser">
      <div className="project-mood-browser" role="group" aria-label="Browse projects by mood">
        <div>
          <p className="eyebrow">Pick a feeling</p>
          <span className="project-mood-hint">The portfolio can take it.</span>
        </div>
        <div className="project-mood-filters">
          <button
            type="button"
            className={activeMood === null ? 'project-mood-filter active' : 'project-mood-filter'}
            aria-pressed={activeMood === null}
            onClick={() => setActiveMood(null)}
          >
            All the things
          </button>
          {projectMoods.map((mood) => (
            <button
              type="button"
              className={activeMood === mood.id ? 'project-mood-filter active' : 'project-mood-filter'}
              aria-pressed={activeMood === mood.id}
              key={mood.id}
              onClick={() => setActiveMood(mood.id)}
              title={mood.prompt}
            >
              {mood.label}
            </button>
          ))}
        </div>
        <p className="project-mood-count" aria-live="polite">
          {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'} in this little pile
        </p>
      </div>
      <div className="project-grid" key={activeMood ?? 'all'}>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectGrid;
