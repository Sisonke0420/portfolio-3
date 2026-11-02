import Callout from '../Callout';
import portraitImage from '../../assets/Images/Image of me.jpg';

function AboutPage() {
  return (
    <section className="inner-page page-shell about-page">
      <p className="eyebrow"><span className="eyebrow-line" /> About the practice</p>
      <div className="about-layout">
        <div>
          <h1 className="page-title">Design-minded.<br /><span className="serif-word">Detail-driven.</span></h1>
          <p className="large-copy">
            I’m Sisonke Miya, an independent graphic designer and developer
            based in Johannesburg. My practice brings visual storytelling and
            digital craft together to create distinctive identities and
            accessible experiences, with close attention to the message, the
            interaction, and the details that connect them.
          </p>
          <p className="about-ai-copy">
            I also explore how AI and emerging technologies can support research
            and creative experimentation. They are tools within the process—not
            substitutes for human judgment, a clear purpose, or responsible
            design.
          </p>
        </div>
        <div className="about-card">
          <img className="about-portrait" src={portraitImage} alt="Portrait of Sisonke Miya" />
          <p>Sisonke Miya<br /><span>Graphic designer &amp; developer</span></p>
        </div>
      </div>
      <div className="about-details">
        <div>
          <h2>Approach</h2>
          <p>I work with people and teams to define the message, audience, and intended outcome. From research and concept development to visual design and implementation, I keep clarity, accessibility, and craft central to each decision.</p>
          <p>From typography to interface structure, each choice supports the wider idea. The aim is work that is distinctive, useful, and clear to the people it serves.</p>
        </div>
        <div>
          <h2>Capabilities</h2>
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
        <h2>Listen carefully.<br /><span className="serif-word">Create with purpose.</span></h2>
        <p>
          A strong collaboration starts with clear communication and shared
          objectives. I ask the right questions, share work at meaningful
          milestones, and connect design decisions to the project’s goals.
        </p>
        <p>
          Ideas are tested and refined throughout the process, balancing
          experimentation with a consistent focus on clarity, usability, and
          the intended outcome.
        </p>
      </section>
      <section className="about-disciplines" aria-labelledby="disciplines-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> Areas of practice</p>
        <h2 id="disciplines-heading">Design with purpose.<br /><span className="serif-word">Develop with precision.</span></h2>
        <div className="discipline-grid">
          <article className="discipline-card">
            <p className="discipline-number">01 / GRAPHIC DESIGN</p>
            <h3>Build a distinctive visual identity.</h3>
            <p>I develop coherent visual languages that help brands communicate with clarity and consistency across every touchpoint.</p>
            <ul>
              <li>Brand identity and logo systems</li>
              <li>Typography, color, and layout</li>
              <li>Art direction and campaign visuals</li>
              <li>Print and digital design assets</li>
            </ul>
          </article>
          <article className="discipline-card">
            <p className="discipline-number">02 / DEVELOPMENT</p>
            <h3>Translate design into accessible experiences.</h3>
            <p>I build responsive, reliable interfaces around the needs of the people using them, carrying design intent through to implementation.</p>
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
        <h2 id="developer-practice-heading">Considered development<br /><span className="serif-word">at every stage.</span></h2>
        <p className="developer-practice-intro">
          A polished website depends on more than appearance. It must behave
          reliably, adapt to different contexts, and remain maintainable. I
          carry design intent through planning, implementation, and testing.
        </p>
        <div className="developer-practice-grid">
          <article>
            <p className="discipline-number">01 / PLAN</p>
            <h3>Define the structure and user flows.</h3>
            <p>I translate goals and content into clear page structures and user flows, considering hierarchy, keyboard navigation, and accessibility from the outset.</p>
          </article>
          <article>
            <p className="discipline-number">02 / BUILD</p>
            <h3>Build for responsive, reliable use.</h3>
            <p>I use semantic HTML, CSS, JavaScript, React, and TypeScript to create reusable interfaces that remain consistent and straightforward to maintain.</p>
          </article>
          <article>
            <p className="discipline-number">03 / REFINE</p>
            <h3>Validate and refine the experience.</h3>
            <p>I test layouts and interactions across screen sizes and browsers, then refine the details to improve usability, accessibility, and performance.</p>
          </article>
          <article>
            <p className="discipline-number">04 / BACKEND</p>
            <h3>Develop a broader technical foundation.</h3>
            <p>I’m expanding my backend practice with Node.js and Express, REST APIs, and MongoDB. This ongoing learning helps me understand how interfaces connect to the services and data behind a product.</p>
          </article>
          <article>
            <p className="discipline-number">05 / AI + EMERGING TECH</p>
            <h3>Evaluate emerging tools responsibly.</h3>
            <p>I explore how AI can support early research, reduce repetitive work, and broaden creative exploration. Its output remains subject to human review and refinement, guided by the project’s purpose and the needs of its audience.</p>
          </article>
        </div>
      </section>
      <section className="about-tools" aria-labelledby="tools-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> Tools and technologies</p>
        <h2 id="tools-heading">A considered<br /><span className="serif-word">technical toolkit.</span></h2>
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
