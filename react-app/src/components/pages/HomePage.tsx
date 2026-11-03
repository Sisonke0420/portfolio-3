import { useEffect, useState } from 'react';
import ArrowIcon from '../ArrowIcon';
import ProjectCarousel from '../ProjectCarousel';
import { getRouteHref } from '../pageConfig';
import heroProjectImage from '../../assets/Images/8fc0be87-b9c6-4a60-8965-7c83bd61072a.webp';

const microcopy = [
  'Available worldwide (yes, even your time zone).',
  'Currently making the internet slightly tidier.',
  'Good ideas welcome. Vague briefs can be rescued.',
  'Based in Johannesburg. Mentally rearranging type.',
];

const briefPrompts = [
  'Make a bakery identity for people who think sourdough has a personality.',
  'Design a calm app for a very uncalm houseplant.',
  'Give a tiny museum a brand too big for its gift shop.',
  'Create a bookshop identity for people who buy books faster than they read them.',
  'Make a neighborhood café feel like the best-kept secret everyone knows.',
];

function FeaturedWork() {
  return (
    <section className="featured-section page-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> Selected projects</p>
          <h2>Selected work<br /><span className="serif-word">with intent (and snacks).</span></h2>
        </div>
        <a className="text-link" href={getRouteHref('/work/')}>View all projects <ArrowIcon /></a>
      </div>
      <ProjectCarousel />
    </section>
  );
}

function HomePage() {
  const [microcopyIndex, setMicrocopyIndex] = useState(0);
  const [briefIndex, setBriefIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setMicrocopyIndex((index) => (index + 1) % microcopy.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, []);

  function shuffleBrief() {
    setBriefIndex((currentIndex) => {
      const nextIndex = Math.floor(Math.random() * briefPrompts.length);
      return nextIndex === currentIndex ? (nextIndex + 1) % briefPrompts.length : nextIndex;
    });
  }

  return (
    <div className="home-page">
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Designer &amp; developer</p>
          <h1>
            Thoughtful<br />
            design for a<br />
            <span className="accent-word">changing</span> world<span className="accent-period">.</span>
          </h1>
          <p className="hero-description">
            I help ambitious people turn big ideas into clear identities and
            digital experiences. Considered art direction, accessible code, and
            no buttons that only look clickable.
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
          <p className="hero-microcopy">{microcopy[microcopyIndex]}</p>
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
          <p>Effective design begins with <em>asking better questions.</em></p>
          <a href={getRouteHref('/about/')} className="round-link" aria-label="Learn about Sisonke Miya’s design approach">
            <ArrowIcon diagonal />
          </a>
        </div>
      </section>
      <section className="home-practice page-shell">
        <div className="home-practice-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> A process, not a series of guesses</p>
          <h2>From the first sketch<br /><span className="serif-word">to the last tiny detail.</span></h2>
          <p>
            Good work takes clear thinking and a healthy respect for the details.
            I shape the concept, build its visual language, and see it through
            to a finished experience (including the bits most people never notice).
          </p>
        </div>
        <div className="home-practice-grid">
          <article>
            <p className="discipline-number">01 / ASK THE USEFUL QUESTIONS</p>
            <h3>Work out what actually matters.</h3>
            <p>
              Who is it for? What should it do? And no, “make it pop” is not a
              complete brief. A clear starting point makes the next decisions
              much easier.
            </p>
          </article>
          <article>
            <p className="discipline-number">02 / GIVE IT A POINT OF VIEW</p>
            <h3>Make the identity recognisable.</h3>
            <p>
              Type, imagery, and color become a visual system with personality.
              Consistent, not copy-pasted into a personality vacuum.
            </p>
          </article>
          <article>
            <p className="discipline-number">03 / MAKE IT WORK IN REAL LIFE</p>
            <h3>Build the thing people actually use.</h3>
            <p>
              Accessible interactions and careful front-end work mean it looks
              good, works on your phone, and doesn’t make anyone fight a menu.
            </p>
          </article>
        </div>
      </section>
      <section className="home-belief">
        <div className="page-shell home-belief-inner">
          <p className="eyebrow"><span className="eyebrow-line" /> Pretty is nice. Useful is nicer.</p>
          <h2>Make it memorable.<br /><span className="serif-word">Make it make sense.</span></h2>
          <div className="home-belief-copy">
            <p>
              Design should do more than look good in a screenshot. It should
              make ideas easier to understand, help a brand stick in someone’s
              mind, and make the next step obvious.
            </p>
            <p>
              I think about the whole experience: how it reads, how it behaves
              on a small screen, and whether that button does what it says.
              Distinctive, inclusive, and refreshingly predictable.
            </p>
            <a className="text-link" href={getRouteHref('/about/')}>Explore my approach <ArrowIcon /></a>
          </div>
        </div>
      </section>
      <FeaturedWork />
      <section className="brief-playground page-shell" aria-labelledby="brief-playground-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> A tiny creative detour</p>
        <div className="brief-playground-content">
          <div>
            <h2 id="brief-playground-heading">Need a brief?<br /><span className="serif-word">Here’s a weird one.</span></h2>
            <p className="brief-prompt" aria-live="polite">{briefPrompts[briefIndex]}</p>
          </div>
          <button className="button button-dark brief-shuffle" type="button" onClick={shuffleBrief}>
            Spin the brief <span aria-hidden="true">↻</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
