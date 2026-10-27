import Callout from '../Callout';
import portraitImage from '../../assets/Images/Image of me.jpg';

function AboutPage() {
  return (
    <section className="inner-page page-shell about-page">
      <p className="eyebrow"><span className="eyebrow-line" /> A bit about me</p>
      <div className="about-layout">
        <div>
          <h1 className="page-title">Curious by nature.<br /><span className="serif-word">Creative</span> by design.</h1>
          <p className="large-copy">
            I’m Sisonke Miya, a graphic designer and developer who connects
            visual storytelling with thoughtful technology. I shape ideas into
            distinctive identities and bring them to life as polished,
            accessible digital experiences. I care about the whole experience:
            the story a brand tells, the way an interface feels, and the
            technology that makes it work.
          </p>
          <p className="about-ai-copy">
            I’m also curious about how AI and emerging technologies can support
            creative work. I explore them as tools for research, experimentation,
            and new ways to interact—while keeping human judgment, clear
            purpose, and responsible use at the center.
          </p>
        </div>
        <div className="about-card">
          <img className="about-portrait" src={portraitImage} alt="Portrait of Sisonke Miya" />
          <p>Sisonke Miya<br /><span>Graphic designer &amp; developer</span></p>
        </div>
      </div>
      <div className="about-details">
        <div>
          <h2>My approach</h2>
          <p>I partner with people and teams to understand what they need to say, who they need to reach, and what success looks like. Then I move from research and early concepts to considered visuals and carefully built experiences—keeping clarity, accessibility, and craft in focus at every step.</p>
          <p>Every choice has a purpose, from the first typeface study to the structure behind a page. I aim to make work that feels distinctive without getting in the way of the message or the people it is for.</p>
        </div>
        <div>
          <h2>Core capabilities</h2>
          <ul className="skill-list">
            <li>Brand and visual identity <span>01</span></li>
            <li>Typography and layout <span>02</span></li>
            <li>Responsive interface design <span>03</span></li>
            <li>Front-end development <span>04</span></li>
          </ul>
        </div>
      </div>
      <section className="about-collaboration">
        <p className="eyebrow"><span className="eyebrow-line" /> A good way to work together</p>
        <h2>Listen closely.<br /><span className="serif-word">Make with intention.</span></h2>
        <p>
          I value a thoughtful, open process: make space for the right
          questions, share work early enough to learn from it, and keep the
          reason behind each decision in view. That makes room for ideas to
          develop without losing sight of what the work needs to do.
        </p>
        <p>
          I believe the best outcomes come from curiosity and care: being willing
          to test an idea, notice what is not working, and keep refining until
          the design feels both considered and clear.
        </p>
      </section>
      <section className="about-disciplines" aria-labelledby="disciplines-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> How I bring ideas to life</p>
        <h2 id="disciplines-heading">Design with intention.<br /><span className="serif-word">Build with care.</span></h2>
        <div className="discipline-grid">
          <article className="discipline-card">
            <p className="discipline-number">01 / GRAPHIC DESIGN</p>
            <h3>Make the message memorable.</h3>
            <p>I create distinctive visual languages that help brands communicate with clarity and consistency, from the first impression to the smallest detail.</p>
            <ul>
              <li>Brand identity and logo systems</li>
              <li>Typography, color, and layout</li>
              <li>Art direction and campaign visuals</li>
              <li>Print and digital design assets</li>
            </ul>
          </article>
          <article className="discipline-card">
            <p className="discipline-number">02 / DEVELOPMENT</p>
            <h3>Turn thoughtful design into usable experiences.</h3>
            <p>Development is more than writing code. It means understanding the people using a product, choosing a clear structure, and making sure the finished experience is reliable, inclusive, and easy to use.</p>
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
        <p className="eyebrow"><span className="eyebrow-line" /> The work behind the interface</p>
        <h2 id="developer-practice-heading">Good development happens<br /><span className="serif-word">before and after the code.</span></h2>
        <p className="developer-practice-intro">
          A polished website is the result of many considered decisions—not just how it looks,
          but how it behaves, how it adapts, and how easy it is to maintain. I carry the design
          intent through each step, from the first layout to the final browser check.
        </p>
        <div className="developer-practice-grid">
          <article>
            <p className="discipline-number">01 / PLAN</p>
            <h3>Start with people and purpose.</h3>
            <p>I turn goals and content into clear page structure and user flows. I think about readable hierarchy, keyboard navigation, and accessibility from the start—not as a last-minute add-on.</p>
          </article>
          <article>
            <p className="discipline-number">02 / BUILD</p>
            <h3>Make it responsive and maintainable.</h3>
            <p>I use semantic HTML, CSS, JavaScript, React, and TypeScript to build reusable interface pieces. Thoughtful component structure keeps a site consistent and makes future updates easier.</p>
          </article>
          <article>
            <p className="discipline-number">03 / REFINE</p>
            <h3>Test the details in real browsers.</h3>
            <p>I check layouts across screen sizes, exercise interactions, and use browser developer tools to find and fix issues. Iteration helps improve usability, accessibility, and performance before launch.</p>
          </article>
          <article>
            <p className="discipline-number">04 / BACKEND</p>
            <h3>Connect the interface to useful services.</h3>
            <p>I’m growing my backend development practice with Node.js and Express, building REST APIs, and learning how to model and query application data with MongoDB. Understanding these pieces helps me think beyond the screen and consider how a complete product works.</p>
          </article>
          <article>
            <p className="discipline-number">05 / AI + EMERGING TECH</p>
            <h3>Explore new tools with intention.</h3>
            <p>I’m interested in how AI can help expand early exploration, speed up repetitive tasks, and inspire new creative directions. I treat its output as a starting point to question and refine, not a substitute for original thinking, careful review, or the needs of the people using the work.</p>
          </article>
        </div>
      </section>
      <section className="about-tools" aria-labelledby="tools-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> A few favorites in my toolkit</p>
        <h2 id="tools-heading">The tools behind<br /><span className="serif-word">the work.</span></h2>
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
