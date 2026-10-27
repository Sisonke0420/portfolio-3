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
      <FeaturedWork />
    </div>
  );
}

export default HomePage;
