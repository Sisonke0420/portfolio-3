import { useState } from 'react';
import ArrowIcon from '../ArrowIcon';
import { GlitchHeading } from '../GlitchHeading';
import GlitchSlogan from '../GlitchSlogan';
import ProjectCarousel from '../ProjectCarousel';
import { getRouteHref } from '../pageConfig';
import heroProjectImage from '../../assets/Images/8fc0be87-b9c6-4a60-8965-7c83bd61072a.webp';

const briefAudiences = ['curious first-timers', 'people with very full calendars', 'the happily hard-to-impress'];
const briefMoods = ['warm and a little unexpected', 'bold enough to be remembered', 'calm, clear, and quietly confident'];
const briefTwists = ['with a tiny hint of mischief', 'without adding another app', 'that still works on a very small screen'];

function FeaturedWork() {
  return (
    <section className="featured-section page-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-line" /> Selected projects</p>
          <GlitchHeading as="h2">Selected work<br /><span className="serif-word">with intent (and snacks).</span></GlitchHeading>
        </div>
        <a className="text-link" href={getRouteHref('/work/')}>View all projects <ArrowIcon /></a>
      </div>
      <ProjectCarousel />
    </section>
  );
}

function HomePage() {
  const [audience, setAudience] = useState(briefAudiences[0]);
  const [mood, setMood] = useState(briefMoods[0]);
  const [twist, setTwist] = useState(briefTwists[0]);
  const [creativeDirection, setCreativeDirection] = useState('');

  return (
    <div className="home-page">
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Designer &amp; developer</p>
          <GlitchHeading as="h1">
            Thoughtful<br />
            design for a<br />
            <span className="accent-word">changing</span> world<span className="accent-period">.</span>
          </GlitchHeading>
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
          <GlitchSlogan
            className="hero-microcopy"
            messages={[
              'Available worldwide (yes, even your time zone).',
              'Currently making the internet slightly tidier.',
              'Good ideas welcome. Vague briefs can be rescued.',
              'Based in Johannesburg. Mentally rearranging type.',
            ]}
            interval={7000}
          />
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
          <GlitchHeading as="h2">From the first sketch<br /><span className="serif-word">to the last tiny detail.</span></GlitchHeading>
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
          <GlitchHeading as="h2">Make it memorable.<br /><span className="serif-word">Make it make sense.</span></GlitchHeading>
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
          <div className="brief-builder-intro">
            <GlitchHeading as="h2" id="brief-playground-heading">A brief, but make it<br /><span className="serif-word">a little more you.</span></GlitchHeading>
            <p className="brief-prompt">Three tiny choices. One suspiciously usable starting point.</p>
          </div>
          <form
            className="brief-builder"
            onSubmit={(event) => {
              event.preventDefault();
              setCreativeDirection(`Create something ${mood} for ${audience}, ${twist}.`);
            }}
          >
            <label>
              Who is it for?
              <select value={audience} onChange={(event) => setAudience(event.target.value)}>
                {briefAudiences.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>
              What should it feel like?
              <select value={mood} onChange={(event) => setMood(event.target.value)}>
                {briefMoods.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>
              Add a small constraint
              <select value={twist} onChange={(event) => setTwist(event.target.value)}>
                {briefTwists.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <button className="button button-dark brief-shuffle" type="submit">
              Find a direction <span aria-hidden="true">↗</span>
            </button>
            <p className="brief-generated-direction" aria-live="polite">{creativeDirection}</p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
