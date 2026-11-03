import Callout from '../Callout';
import { GlitchHeading } from '../GlitchHeading';
import GlitchSlogan from '../GlitchSlogan';
import portraitImage from '../../assets/Images/Image of me.jpg';

function AboutPage() {
  return (
    <section className="inner-page page-shell about-page">
      <p className="eyebrow"><span className="eyebrow-line" /> <GlitchSlogan messages={['About the practice', 'A little method, some madness', 'Curiosity, with a checklist']} /></p>
      <div className="about-layout">
        <div>
          <GlitchHeading as="h1" className="page-title">Curious by nature.<br /><span className="serif-word">Fussy about details.</span></GlitchHeading>
          <p className="large-copy">
            I’m Sisonke Miya, a graphic designer and developer
            based in Johannesburg. I bring visual storytelling and digital
            craft together to make distinctive identities and accessible
            experiences. I care about the big idea, the tiny details, and the
            fact that the tiny details have a habit of becoming the big idea.
          </p>
          <p className="about-ai-copy">
            I explore AI and emerging technology as tools for research and
            experimentation. Useful assistants; terrible substitutes for
            judgment, purpose, or checking the work before it goes out.
          </p>
        </div>
        <div className="about-card">
          <img className="about-portrait" src={portraitImage} alt="Portrait of Sisonke Miya" />
          <p>Sisonke Miya<br /><span>Graphic designer &amp; developer</span></p>
        </div>
      </div>
      <div className="about-details">
        <div>
          <GlitchHeading as="h2">Approach</GlitchHeading>
          <p>I work with people and teams to clarify the message, audience, and intended outcome. Then it’s research, concepts, visual design, and implementation—with clarity, accessibility, and craft in the room at every stage.</p>
          <p>From typography to interface structure, each choice should earn its place. The aim: work that feels distinctive, does its job, and doesn’t need a user manual.</p>
        </div>
        <div>
          <GlitchHeading as="h2">Capabilities</GlitchHeading>
          <ul className="skill-list">
            <li>Brand strategy and visual identity <span>01</span></li>
            <li>Typography and editorial design <span>02</span></li>
            <li>Responsive digital experiences <span>03</span></li>
            <li>Front-end implementation <span>04</span></li>
          </ul>
        </div>
      </div>
      <section className="about-collaboration">
        <p className="eyebrow"><span className="eyebrow-line" /> A considered collaboration</p>
        <GlitchHeading as="h2">Listen carefully.<br /><span className="serif-word">Then make it make sense.</span></GlitchHeading>
        <p>
          A good collaboration starts with clear communication and shared
          objectives. I ask the useful questions, share work at the right
          moments, and make sure design decisions have a reason beyond “it
          looked cool at 1 a.m.”
        </p>
        <p>
          Ideas get tested and refined as we go. There’s room to experiment,
          but clarity, usability, and the actual brief still get the final say.
        </p>
      </section>
      <section className="about-disciplines" aria-labelledby="disciplines-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> Areas of practice</p>
        <GlitchHeading as="h2" id="disciplines-heading">Make it distinctive.<br /><span className="serif-word">Make it work.</span></GlitchHeading>
        <div className="discipline-grid">
          <article className="discipline-card">
            <p className="discipline-number">01 / GRAPHIC DESIGN</p>
            <h3>Give the brand a recognisable face.</h3>
            <p>I build visual languages that help brands communicate clearly and consistently—without looking like they downloaded the same template.</p>
            <ul>
              <li>Brand identity and logo systems</li>
              <li>Typography, color, and layout</li>
              <li>Art direction and campaign visuals</li>
              <li>Print and digital design assets</li>
            </ul>
          </article>
          <article className="discipline-card">
            <p className="discipline-number">02 / DEVELOPMENT</p>
            <h3>Turn the design into a usable website.</h3>
            <p>I build responsive, accessible interfaces around the people using them. The design survives contact with an actual browser. Imagine that.</p>
            <ul>
              <li>Semantic HTML, modern CSS, and JavaScript</li>
              <li>Interactive, typed interfaces with React and TypeScript</li>
              <li>Responsive layouts and reusable components</li>
              <li>Accessibility, debugging, and cross-browser testing</li>
            </ul>
          </article>
        </div>
      </section>
      {/* Keep process and tools separate from the development skills listed above. */}
      <section className="developer-practice" aria-labelledby="developer-practice-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> Development practice</p>
        <GlitchHeading as="h2" id="developer-practice-heading">Thoughtful development<br /><span className="serif-word">minus the guesswork.</span></GlitchHeading>
        <p className="developer-practice-intro">
          A polished website needs more than a good first impression. It should
          work reliably, adapt to real screens, and make sense to the next
          person who opens the code. I plan, build, and test with all three in
          mind.
        </p>
        <div className="developer-practice-grid">
          <article>
            <p className="discipline-number">01 / PLAN</p>
            <h3>Plan before opening 37 tabs.</h3>
            <p>I turn goals and content into clear page structures and user flows, with hierarchy, keyboard navigation, and accessibility considered from the start.</p>
          </article>
          <article>
            <p className="discipline-number">02 / BUILD</p>
            <h3>Build it to work beyond my laptop.</h3>
            <p>I use semantic HTML, CSS, JavaScript, React, and TypeScript to create reusable interfaces that stay consistent and are not a nightmare to update.</p>
          </article>
          <article>
            <p className="discipline-number">03 / REFINE</p>
            <h3>Test it. Then test the “obvious” bit.</h3>
            <p>I check layouts and interactions across screen sizes and browsers, then refine usability, accessibility, and performance. The obvious bit is usually where the bug is.</p>
          </article>
          <article>
            <p className="discipline-number">04 / BACKEND</p>
            <h3>Learn what happens behind the screen.</h3>
            <p>I’m expanding my backend practice with Node.js, Express, REST APIs, and MongoDB. There is, it turns out, quite a lot happening after you click the button.</p>
          </article>
          <article>
            <p className="discipline-number">05 / AI + EMERGING TECH</p>
            <h3>Use new tools. Keep a human in the loop.</h3>
            <p>I explore how AI can support research, reduce repetitive work, and open up creative directions. Its output still gets questioned, reviewed, and edited by a person with the brief in front of them.</p>
          </article>
        </div>
      </section>
      <section className="about-tools" aria-labelledby="tools-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> Tools and technologies</p>
        <GlitchHeading as="h2" id="tools-heading">Tools of the trade<br /><span className="serif-word">(and occasional tabs).</span></GlitchHeading>
        <ul className="tool-list">
          <li><span>DaVinci Resolve</span><span>Video editing</span></li>
          <li><span>Affinity</span><span>Graphic design</span></li>
          <li><span>Canva</span><span>Visual content</span></li>
          <li><span>Figma</span><span>Interface design</span></li>
          <li><span>React + TypeScript</span><span>Interactive interfaces</span></li>
          <li><span>HTML + CSS + JavaScript</span><span>Front-end foundations</span></li>
          <li><span>Node.js + Express</span><span>Backend foundations</span></li>
          <li><span>REST APIs</span><span>Service integration</span></li>
          <li><span>MongoDB</span><span>Document database</span></li>
          <li><span>AI + emerging technology</span><span>Exploration and experimentation</span></li>
          <li><span>Git + GitHub</span><span>Version control</span></li>
          <li><span>Browser DevTools</span><span>Debugging and testing</span></li>
        </ul>
      </section>
      <Callout />
    </section>
  );
}

export default AboutPage;
