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

  return (
    <article className={`project-card${approachHref ? ' has-secret-approach' : ''}${noteOpen ? ' is-note-open' : ''}`}>
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
            <span>See the thinking behind it</span><ArrowIcon diagonal />
          </a>
        )}
        <span className="project-annotation" aria-label={`Studio annotation: ${project.annotation}`}>
          <span aria-hidden="true">↗</span> {project.annotation}
        </span>
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
