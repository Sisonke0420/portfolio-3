import { useEffect, useRef } from 'react';
import ArrowIcon from '../ArrowIcon';
import ProjectCarousel from '../ProjectCarousel';
import { getRouteHref } from '../pageConfig';
import heroProjectImage from '../../assets/Images/8fc0be87-b9c6-4a60-8965-7c83bd61072a.webp';

function FeaturedWork() {
  return (
    <section className="featured-section page-shell">
      <div className="section-heading">
        <div data-scroll-reveal>
          <p className="eyebrow"><span className="eyebrow-line" /> Selected projects</p>
          <h2>A few things<br />I’ve put into <span className="serif-word">the world.</span></h2>
        </div>
        <a className="text-link" href={getRouteHref('/work/')} data-scroll-reveal>See all projects <ArrowIcon /></a>
      </div>
      <ProjectCarousel />
    </section>
  );
}

function HomePage() {
  const homePageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const homePage = homePageRef.current;
    if (!homePage || !('IntersectionObserver' in window)) return;

    const targets = homePage.querySelectorAll<HTMLElement>('[data-scroll-reveal]');
    if (targets.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

    homePage.classList.add('has-scroll-reveal');
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page" ref={homePageRef}>
      <section className="hero page-shell">
        <div className="hero-copy" data-scroll-reveal>
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
        <div className="hero-video" data-scroll-reveal>
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
        <div className="hero-index" data-scroll-reveal><span>01</span><span className="index-rule" /><span>04</span></div>
      </section>

      <section className="intro-strip">
        <div className="page-shell intro-inner">
          <p data-scroll-reveal>Good work starts with <em>good questions.</em></p>
          <a href={getRouteHref('/about/')} className="round-link" aria-label="Learn about Sisonke Miya" data-scroll-reveal>
            <ArrowIcon diagonal />
          </a>
        </div>
      </section>
      <FeaturedWork />
    </div>
  );
}

export default HomePage;
