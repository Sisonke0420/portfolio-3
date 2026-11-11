import Callout from '../Callout';
import { GlitchHeading } from '../GlitchHeading';
import GlitchSlogan from '../GlitchSlogan';
import ProjectGrid from '../ProjectGrid';

const webProjects = [
  {
    title: 'E-commerce website',
    category: 'Web development · E-commerce',
    url: 'https://website-e-commerce-git-v4-sisonke1.vercel.app/',
  },
  {
    title: 'Free State Animal Rescue',
    category: 'Web development · Non-profit',
    url: 'https://freestateanimalrescue-r8s66pxof-sisonke1.vercel.app/home.html',
  },
];

function WorkPage() {
  return (
    <section className="inner-page page-shell work-page">
      <p className="eyebrow"><span className="eyebrow-line" /> <GlitchSlogan messages={['Portfolio · 2022—2026', 'Proof of curiosity · 2022—2026', 'A selection of solved puzzles']} /></p>
      <div className="work-heading">
        <GlitchHeading as="h1" className="page-title">Ideas, shaped<br />with <span className="serif-word">a point to make.</span></GlitchHeading>
        <p>Visual identity and editorial design, shaped around a clear idea, an audience, and the details that make a system hold together.</p>
      </div>
      <p className="work-introduction">
        This selection focuses on visual identity, typography, editorial, and
        art direction. I bring the same clarity to web and mobile products;
        this portfolio currently shows the visual side of that practice.
      </p>
      <ProjectGrid />
      <section aria-labelledby="web-projects-heading" style={{ marginTop: 72 }}>
        <p className="eyebrow"><span className="eyebrow-line" /> Web &amp; digital</p>
        <h2 id="web-projects-heading" style={{ margin: '0 0 28px', fontSize: 'clamp(34px, 4vw, 48px)', fontWeight: 500, letterSpacing: '-.06em' }}>
          Built for the browser.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: 24 }}>
          {webProjects.map((project) => (
            <article key={project.url} style={{ minWidth: 0 }}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} (opens in a new tab)`}
                style={{ display: 'block', overflow: 'hidden', aspectRatio: '16 / 10', borderRadius: 12, border: '1px solid var(--line)', background: 'var(--panel)' }}
              >
                <iframe
                  src={project.url}
                  title={`${project.title} live preview`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ display: 'block', width: '100%', height: '100%', border: 0, pointerEvents: 'none' }}
                />
              </a>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 16, paddingTop: 14 }}>
                <div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 500 }}>{project.title}</h3>
                  <p style={{ margin: 0, color: 'var(--muted)', fontSize: 10 }}>{project.category}</p>
                </div>
                <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">
                  Visit project <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="work-closing-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> Start with the brief</p>
        <p>
          From a single visual asset to a connected digital product, start
          with what it needs to do, who it is for, and when it needs to launch.
        </p>
      </div>
      <Callout />
    </section>
  );
}

export default WorkPage;
