import ArrowIcon from '../ArrowIcon';
import ProjectCarousel from '../ProjectCarousel';
import { getRouteHref } from '../pageConfig';
import heroProjectImage from '../../assets/Images/8fc0be87-b9c6-4a60-8965-7c83bd61072a.webp';

function FeaturedWork() {
  return (
    <section className="featured-section page-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> Selected projects</p>
          <h2>A few things<br />I’ve put into <span className="serif-word">the world.</span></h2>
        </div>
        <a className="text-link" href={getRouteHref('/work/')}>See all projects <ArrowIcon /></a>
      </div>
      <ProjectCarousel />
    </section>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Graphic designer &amp; developer</p>
          <h1>
            Thoughtful<br />
            design for a<br />
            <span className="accent-word">changing</span> world<span className="accent-period">.</span>
          </h1>
          <p className="hero-description">
            I’m Sisonke, a graphic designer and developer bringing ideas to life
            through thoughtful visual identities, clear design systems, and
            responsive digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={getRouteHref('/work/')}>
              Explore my work <ArrowIcon />
            </a>
            <a className="text-link" href={getRouteHref('/about/')}>A little about me</a>
          </div>
          <div className="hero-note">
            <span className="note-spark">✳</span>
            <span>Based in Johannesburg, GP<br />Working everywhere</span>
          </div>
        </div>
        <div className="hero-video">
          <video
            className="hero-video-player"
            poster={heroProjectImage}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Portfolio hero video coming soon"
          />
          <div className="hero-video-placeholder">
            <span className="hero-video-kicker">Sisonke Miya · Showreel</span>
            <span className="hero-video-message">Video coming soon</span>
          </div>
        </div>
        <div className="hero-index"><span>01</span><span className="index-rule" /><span>04</span></div>
      </section>

      <section className="intro-strip">
        <div className="page-shell intro-inner">
          <p>Good work starts with <em>good questions.</em></p>
          <a href={getRouteHref('/about/')} className="round-link" aria-label="Learn about Sisonke Miya">
            <ArrowIcon diagonal />
          </a>
        </div>
      </section>
      <section className="home-practice page-shell">
        <div className="home-practice-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> A thoughtful process</p>
          <h2>Good ideas deserve<br /><span className="serif-word">careful making.</span></h2>
          <p>
            Every project is a chance to make something clear, useful, and
            memorable. I bring design and development together to carry an idea
            from its first sketch to its final screen.
          </p>
        </div>
        <div className="home-practice-grid">
          <article>
            <p className="discipline-number">01 / FIND THE FOCUS</p>
            <h3>Start with what matters.</h3>
            <p>
              We get to the heart of the idea, the people it needs to reach, and
              the story it should tell. A clear direction gives every design
              decision a reason.
            </p>
          </article>
          <article>
            <p className="discipline-number">02 / SHAPE THE STORY</p>
            <h3>Make it recognisable.</h3>
            <p>
              Thoughtful type, color, and composition turn that direction into a
              visual identity with character—one that feels consistent wherever
              it meets its audience.
            </p>
          </article>
          <article>
            <p className="discipline-number">03 / BRING IT TO LIFE</p>
            <h3>Build for real people.</h3>
            <p>
              On screen, the details matter just as much. Responsive layouts,
              accessible interactions, and careful development help the idea
              work beautifully in use.
            </p>
          </article>
        </div>
      </section>
      <section className="home-belief">
        <div className="page-shell home-belief-inner">
          <p className="eyebrow"><span className="eyebrow-line" /> The details make the difference</p>
          <h2>Design should feel good<br />and <span className="serif-word">work hard.</span></h2>
          <div className="home-belief-copy">
            <p>
              A strong visual idea can do more than catch someone’s eye. It can
              make information easier to understand, help a brand feel familiar,
              and give people a clear next step.
            </p>
            <p>
              That’s why I think about the full experience: how a layout reads,
              how it adapts to a smaller screen, and how each interaction feels.
              The result should be expressive, accessible, and made to last.
            </p>
            <a className="text-link" href={getRouteHref('/about/')}>More about my approach <ArrowIcon /></a>
          </div>
        </div>
      </section>
      <FeaturedWork />
    </div>
  );
}

export default HomePage;
