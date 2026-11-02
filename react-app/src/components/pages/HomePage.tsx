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
          <h2>Selected work<br /><span className="serif-word">with intention.</span></h2>
        </div>
        <a className="text-link" href={getRouteHref('/work/')}>View all projects <ArrowIcon /></a>
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
          <p className="eyebrow"><span className="eyebrow-line" /> Independent designer &amp; developer</p>
          <h1>
            Thoughtful<br />
            design for a<br />
            <span className="accent-word">changing</span> world<span className="accent-period">.</span>
          </h1>
          <p className="hero-description">
            I partner with ambitious people to shape clear brand identities and
            digital experiences, bringing considered art direction together
            with accessible, detail-led development.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href={getRouteHref('/work/')}>
              View selected work <ArrowIcon />
            </a>
            <a className="text-link" href={getRouteHref('/about/')}>About the practice</a>
          </div>
          <div className="hero-note">
            <span className="note-spark">✳</span>
            <span>Johannesburg, South Africa<br />Available worldwide</span>
          </div>
        </div>
        <figure className="hero-artwork">
          <img
            className="hero-artwork-image"
            src={heroProjectImage}
            alt="Portrait overlaid with white geometric shapes on a blue background"
          />
          <div className="hero-artwork-topline" aria-hidden="true">
            <span>Selected visual / 04</span>
            <span>SM<span className="wordmark-dot">.</span></span>
          </div>
          <figcaption className="hero-artwork-caption">
            <span className="hero-artwork-number">04</span>
            <span className="hero-artwork-title">
              <strong>Portrait Art Direction</strong>
              <small>Art direction · Portrait</small>
            </span>
            <span className="hero-artwork-spark" aria-hidden="true">✳</span>
          </figcaption>
        </figure>
        <div className="hero-index"><span>01</span><span className="index-rule" /><span>04</span></div>
      </section>

      <section className="intro-strip">
        <div className="page-shell intro-inner">
          <p>Effective design begins with <em>clear objectives.</em></p>
          <a href={getRouteHref('/about/')} className="round-link" aria-label="Learn about Sisonke Miya’s design approach">
            <ArrowIcon diagonal />
          </a>
        </div>
      </section>
      <section className="home-practice page-shell">
        <div className="home-practice-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> From concept to craft</p>
          <h2>From the first question<br /><span className="serif-word">to the final detail.</span></h2>
          <p>
            Effective design is the result of clear thinking and considered
            execution. I develop the concept, establish its visual language,
            and carry it through to a cohesive final experience.
          </p>
        </div>
        <div className="home-practice-grid">
          <article>
            <p className="discipline-number">01 / FIND THE ESSENTIAL</p>
            <h3>Establish a clear direction.</h3>
            <p>
              We define the audience, objectives, and opportunity. A shared
              foundation gives the work focus and direction.
            </p>
          </article>
          <article>
            <p className="discipline-number">02 / BUILD A VISUAL LANGUAGE</p>
            <h3>Develop a distinctive visual language.</h3>
            <p>
              Typography, imagery, and color come together in a distinctive
              system, designed to remain consistent across applications.
            </p>
          </article>
          <article>
            <p className="discipline-number">03 / IMPLEMENT WITH CARE</p>
            <h3>Deliver a refined digital experience.</h3>
            <p>
              Accessible interactions and considered front-end development
              make the finished experience intuitive and reliable.
            </p>
          </article>
        </div>
      </section>
      <section className="home-belief">
        <div className="page-shell home-belief-inner">
          <p className="eyebrow"><span className="eyebrow-line" /> Design with purpose</p>
          <h2>Design with clarity.<br /><span className="serif-word">Built to perform.</span></h2>
          <div className="home-belief-copy">
            <p>
              Design should do more than attract attention. It should clarify
              complex ideas, build recognition, and help people take the next
              step with confidence.
            </p>
            <p>
              I consider the complete experience: how a message reads, how a
              layout adapts, and how each interaction responds. The result is
              designed to be distinctive, inclusive, and enduring.
            </p>
            <a className="text-link" href={getRouteHref('/about/')}>Explore my approach <ArrowIcon /></a>
          </div>
        </div>
      </section>
      <FeaturedWork />
    </div>
  );
}

export default HomePage;
