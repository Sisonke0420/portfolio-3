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
          <p>I work with people and teams to clarify the message, audience, and intended outcome before choosing a visual direction. From research and early concepts through design and implementation, each stage is shaped by clear communication, accessibility, and attention to craft.</p>
          <p>From typography and image-making to interface structure and interaction, every choice should support the idea and make the experience easier to understand. The aim is work that feels distinctive, performs its job across real contexts, and doesn’t need a user manual.</p>
        </div>
        <div>
          <GlitchHeading as="h2">Capabilities</GlitchHeading>
          <ul className="skill-list">
            <li>Visual identity and editorial design <span>Strategy, typography, art direction</span></li>
            <li>Web and mobile products <span>Interface design and development</span></li>
            <li>Audio and moving image <span>Sound design, audio production, video editing</span></li>
            <li>Application systems <span>Front-end, back-end, and API integration</span></li>
          </ul>
        </div>
      </div>
      <section className="about-collaboration">
        <p className="eyebrow"><span className="eyebrow-line" /> A considered collaboration</p>
        <GlitchHeading as="h2">Listen carefully.<br /><span className="serif-word">Then make it make sense.</span></GlitchHeading>
        <p>
          A good collaboration starts with clear communication and shared
          objectives. I ask focused questions, agree on what success looks
          like, and share work at useful decision points—so feedback has
          context and design choices have a reason beyond “it looked cool at
          1 a.m.”
        </p>
        <p>
          Ideas are presented, tested, and refined as the work develops.
          There’s room to experiment, but clarity, usability, accessibility,
          and the actual brief still get the final say.
        </p>
      </section>
      <section className="about-disciplines" aria-labelledby="disciplines-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> Areas of practice</p>
        <GlitchHeading as="h2" id="disciplines-heading">Make it distinctive.<br /><span className="serif-word">Make it work.</span></GlitchHeading>
        <div className="discipline-grid">
          <article className="discipline-card">
            <p className="discipline-number">01 / VISUAL IDENTITY &amp; EDITORIAL</p>
            <h3>Give the idea a recognisable visual language.</h3>
            <p>I develop distinctive visual identities that give a brand a clear point of view and a consistent way to communicate. Strategy, audience, and context shape the system, so it can flex across touchpoints without becoming generic—or falling apart when the logo gets smaller.</p>
            <ul>
              <li>Identity concepts, logo families, and practical brand guidelines</li>
              <li>Typographic systems, color palettes, and flexible layout principles</li>
              <li>Art direction, image selection, and campaign-ready visual assets</li>
              <li>Production-conscious design for print, social, and digital channels</li>
            </ul>
          </article>
          <article className="discipline-card">
            <p className="discipline-number">02 / WEB &amp; MOBILE PRODUCTS</p>
            <h3>Build clear digital experiences, screen by screen.</h3>
            <p>I translate product requirements and visual direction into responsive, accessible experiences. I pay attention to structure, interaction states, and small-screen details that help interfaces feel considered—not simply squeezed down to fit.</p>
            <ul>
              <li>Semantic front-end development with HTML, modern CSS, and JavaScript</li>
              <li>Reusable, typed interface components with React and TypeScript</li>
              <li>Responsive web products and mobile applications for Android and iOS</li>
              <li>Keyboard-friendly interactions, accessibility checks, and cross-browser testing</li>
            </ul>
          </article>
          <article className="discipline-card">
            <p className="discipline-number">03 / AUDIO &amp; MOVING IMAGE</p>
            <h3>Shape how an idea sounds and moves.</h3>
            <p>I create and refine audio and moving-image work to support the same visual direction. From sound design and editing to video post-production, each piece is shaped for its audience, format, and purpose.</p>
            <ul>
              <li>Sound design, recording, and audio editing</li>
              <li>Music production and multitrack editing</li>
              <li>Video editing and post-production</li>
              <li>Audio and motion assets for digital projects</li>
            </ul>
          </article>
          <article className="discipline-card">
            <p className="discipline-number">04 / APPLICATION SYSTEMS</p>
            <h3>Connect useful interfaces to dependable services.</h3>
            <p>I’m expanding my back-end practice by building application routes and connecting them to APIs and MongoDB. This work develops my understanding of how data is requested, validated, and returned to the interface.</p>
            <ul>
              <li>Front-end and back-end application structure</li>
              <li>REST API integration</li>
              <li>Node.js and Express routes</li>
              <li>MongoDB data workflows</li>
            </ul>
          </article>
        </div>
      </section>
      {/* Keep process and tools separate from the development skills listed above. */}
      <section className="developer-practice" aria-labelledby="developer-practice-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> Development practice</p>
        <GlitchHeading as="h2" id="developer-practice-heading">Thoughtful development<br /><span className="serif-word">minus the guesswork.</span></GlitchHeading>
        <p className="developer-practice-intro">
          A polished digital product needs more than a good first impression.
          It should work reliably, adapt to real screens, and make sense to the
          next person who opens the code. I plan, build, and test with
          performance, accessibility, and maintainability in mind.
        </p>
        <div className="developer-practice-grid">
          <article>
            <p className="discipline-number">01 / PLAN</p>
            <h3>Shape the product before the build.</h3>
            <p>I translate project goals, content, and audience needs into a practical structure before implementation begins. Clear information architecture and user flows make the product easier to navigate, while responsive behavior, keyboard access, and accessibility are considered from the outset.</p>
          </article>
          <article>
            <p className="discipline-number">02 / BUILD</p>
            <h3>Engineer for the screens people actually use.</h3>
            <p>I use semantic HTML, CSS, JavaScript, React, and TypeScript to build reusable interfaces with clear component boundaries. The same attention goes to loading, empty, and interactive states as to the polished first screen—because people do occasionally click things.</p>
          </article>
          <article>
            <p className="discipline-number">03 / REFINE</p>
            <h3>Refine every detail. Validate every state.</h3>
            <p>I review layouts and interaction states at different viewport sizes and in multiple browsers, then fix issues that affect clarity, accessibility, and performance. Testing is part of the build—not a ceremonial lap after the deadline.</p>
          </article>
          <article>
            <p className="discipline-number">04 / BACKEND</p>
            <h3>Connect the interface to dependable services.</h3>
            <p>I’m expanding my back-end practice with Node.js and Express, connecting application routes to REST APIs and MongoDB. This builds my understanding of how data is requested, validated, and returned to the interface—not just how the button looks.</p>
          </article>
          <article>
            <p className="discipline-number">05 / AI + EMERGING TECH</p>
            <h3>Apply emerging technology with discernment.</h3>
            <p>I use AI and emerging technology selectively for research support, early exploration, and repetitive tasks. Generated output is checked for relevance and accuracy, then edited against the brief; the tool can suggest, but creative judgment stays with a person.</p>
          </article>
        </div>
      </section>
      <section className="about-tools" aria-labelledby="tools-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> Tools and technologies</p>
        <GlitchHeading as="h2" id="tools-heading">A considered toolkit<br /><span className="serif-word">for thoughtful digital work.</span></GlitchHeading>
        <ul className="tool-list">
          <li><span>DaVinci Resolve</span><span>Video editing and post-production</span></li>
          <li><span>FL Studio</span><span>Beat-making and music production</span></li>
          <li><span>Ableton Live</span><span>Music production and live performance</span></li>
          <li><span>Cubase</span><span>Multitrack, MIDI, and film scoring</span></li>
          <li><span>Reaper + Audacity</span><span>Audio recording and editing</span></li>
          <li><span>Affinity</span><span>Layout and graphic design</span></li>
          <li><span>Canva</span><span>Visual content production</span></li>
          <li><span>Figma</span><span>Interface design and prototyping</span></li>
          <li><span>React + TypeScript</span><span>Typed, reusable interfaces</span></li>
          <li><span>HTML + CSS + JavaScript</span><span>Responsive front-end development</span></li>
          <li><span>React Native + Expo</span><span>Cross-platform Android and iOS apps</span></li>
          <li><span>Kotlin + Android Studio</span><span>Native Android development</span></li>
          <li><span>Xcode</span><span>iOS development and testing</span></li>
          <li><span>Node.js + Express</span><span>Server-side development</span></li>
          <li><span>REST APIs</span><span>Application service integration</span></li>
          <li><span>MongoDB</span><span>Document database development</span></li>
          <li><span>Vite + npm</span><span>Front-end build tooling</span></li>
          <li><span>Visual Studio Code</span><span>Code editing and debugging</span></li>
          <li><span>Playwright</span><span>Automated browser testing</span></li>
          <li><span>axe DevTools + Lighthouse</span><span>Accessibility and performance audits</span></li>
          <li><span>AI + emerging technology</span><span>Research and creative exploration</span></li>
          <li><span>Git + GitHub</span><span>Version control and collaboration</span></li>
          <li><span>GitHub Pages + Actions</span><span>Automated site deployment</span></li>
          <li><span>Browser DevTools</span><span>Responsive debugging and diagnostics</span></li>
        </ul>
      </section>
      <Callout />
    </section>
  );
}

export default AboutPage;
