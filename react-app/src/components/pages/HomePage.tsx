import { useState } from 'react';
import ArrowIcon from '../ArrowIcon';
import { GlitchHeading } from '../GlitchHeading';
import GlitchSlogan from '../GlitchSlogan';
import ProjectCarousel from '../ProjectCarousel';
import { getRouteHref } from '../pageConfig';
import heroProjectImage from '../../assets/Images/8fc0be87-b9c6-4a60-8965-7c83bd61072a.webp';

const briefProjects = ['a neighborhood café', 'a tiny culture festival', 'a clever new app', 'a very ambitious bookshop', 'a community art space'];
const briefAudiences = ['curious first-timers', 'people with very full calendars', 'the happily hard-to-impress', 'locals who know all the shortcuts'];
const briefMoods = ['warm and a little unexpected', 'bold enough to be remembered', 'calm, clear, and quietly confident', 'like a Sunday with absolutely no emails'];
const briefTwists = ['with a tiny hint of mischief', 'without adding another app', 'that still works on a very small screen', 'using one color less than expected'];
const briefFirstMoves = [
  'Start with one confident typeface and let it do some heavy lifting.',
  'Find the small detail people will want to point out to a friend.',
  'Make the most useful action the easiest thing to find.',
  'Give the visual system one rule worth breaking (occasionally).',
];

type CreativeDirection = {
  prompt: string;
  firstMove: string;
};

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
  const [project, setProject] = useState(briefProjects[0]);
  const [audience, setAudience] = useState(briefAudiences[0]);
  const [mood, setMood] = useState(briefMoods[0]);
  const [twist, setTwist] = useState(briefTwists[0]);
  const [creativeDirection, setCreativeDirection] = useState<CreativeDirection | null>(null);
  const [copyStatus, setCopyStatus] = useState('');

  function createDirection() {
    setCreativeDirection({
      prompt: `Give ${project}, made for ${audience}, a look and feel that is ${mood} — and make it work ${twist}.`,
      firstMove: briefFirstMoves[Math.floor(Math.random() * briefFirstMoves.length)],
    });
    setCopyStatus('');
  }

  function surpriseMe() {
    const surpriseProject = briefProjects[Math.floor(Math.random() * briefProjects.length)];
    const surpriseAudience = briefAudiences[Math.floor(Math.random() * briefAudiences.length)];
    const surpriseMood = briefMoods[Math.floor(Math.random() * briefMoods.length)];
    const surpriseTwist = briefTwists[Math.floor(Math.random() * briefTwists.length)];
    setProject(surpriseProject);
    setAudience(surpriseAudience);
    setMood(surpriseMood);
    setTwist(surpriseTwist);
    setCreativeDirection({
      prompt: `Give ${surpriseProject}, made for ${surpriseAudience}, a look and feel that is ${surpriseMood} — and make it work ${surpriseTwist}.`,
      firstMove: briefFirstMoves[Math.floor(Math.random() * briefFirstMoves.length)],
    });
    setCopyStatus('');
  }

  async function copyDirection() {
    if (!creativeDirection) return;
    try {
      await navigator.clipboard.writeText(`${creativeDirection.prompt}\nFirst move: ${creativeDirection.firstMove}`);
      setCopyStatus('Copied. Your notes app feels seen.');
    } catch {
      setCopyStatus('Could not copy automatically. You can select the direction and copy it manually.');
    }
  }

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
            I create visual identities and editorial design, then bring that
            thinking into web and mobile products. Distinctive design, careful
            code, and interactions that do what they say.
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

      <section className="home-practice page-shell">
        <div className="home-practice-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> A clear process, from idea to execution</p>
          <GlitchHeading as="h2">From the first sketch<br /><span className="serif-word">to the last tiny detail.</span></GlitchHeading>
          <p>
            I take a brief from research and concept through design,
            production, and implementation—keeping each discipline in service
            of the same idea.
          </p>
        </div>
        <div className="home-practice-grid">
          <article>
            <p className="discipline-number">01 / ASK THE USEFUL QUESTIONS</p>
            <h3>Work out what actually matters.</h3>
            <p>
              Who is it for, and what should it help them do? A useful brief
              gives every design and development decision a clearer purpose.
            </p>
          </article>
          <article>
            <p className="discipline-number">02 / GIVE IT A POINT OF VIEW</p>
            <h3>Make the identity recognisable.</h3>
            <p>
              Type, imagery, and color form a recognizable system that feels
              consistent across touchpoints without losing its personality.
            </p>
          </article>
          <article>
            <p className="discipline-number">03 / MAKE IT WORK IN REAL LIFE</p>
            <h3>Build the thing people actually use.</h3>
            <p>
              Accessible, responsive implementation helps the experience work
              across devices—with fewer surprises and no menu-related drama.
            </p>
          </article>
        </div>
      </section>
      <section className="home-belief">
        <div className="page-shell home-belief-inner">
          <p className="eyebrow"><span className="eyebrow-line" /> Distinctive by design. Useful by default.</p>
          <GlitchHeading as="h2">Make it memorable.<br /><span className="serif-word">Make it make sense.</span></GlitchHeading>
          <div className="home-belief-copy">
            <p>
              Design should do more than look good in a screenshot. It should
              make ideas easier to understand, help a brand stick in someone’s
              mind, and make the next step obvious.
            </p>
            <p>
              I think about the whole experience: how it reads, how it behaves
              on a small screen, and whether each interaction does what it
              promises. Distinctive, inclusive, and refreshingly predictable.
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
            <p className="brief-prompt">Pick a project, set the mood, add one unreasonable constraint. Suddenly, that’s a brief.</p>
            <p className="brief-counter"><span>01</span> Pick your ingredients <span>02</span> Get a direction <span>03</span> Pretend it was the plan all along</p>
          </div>
          <form
            className="brief-builder"
            onSubmit={(event) => {
              event.preventDefault();
              createDirection();
            }}
          >
            <label>
              What are we making?
              <select value={project} onChange={(event) => setProject(event.target.value)}>
                {briefProjects.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
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
              Build my brief <span aria-hidden="true">↗</span>
            </button>
            <button className="brief-surprise" type="button" onClick={surpriseMe}>
              Surprise me with everything <span aria-hidden="true">↻</span>
            </button>
          </form>
        </div>
        {creativeDirection && (
          <div className="brief-result" aria-live="polite">
            <p className="brief-result-label"><span className="eyebrow-line" /> Your suspiciously good starting point</p>
            <p className="brief-generated-direction">{creativeDirection.prompt}</p>
            <p className="brief-first-move"><strong>First move:</strong> {creativeDirection.firstMove}</p>
            <div className="brief-result-actions">
              <button className="text-link brief-copy" type="button" onClick={copyDirection}>
                Copy this direction <span aria-hidden="true">↗</span>
              </button>
              <a className="text-link" href={getRouteHref('/contact/')}>Turn it into a real brief <ArrowIcon /></a>
              <span className="brief-copy-status" role="status">{copyStatus}</span>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default HomePage;
