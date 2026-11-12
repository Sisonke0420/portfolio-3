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
            I’m Sisonke Miya, a graphic designer and developer based in
            Johannesburg. I create distinctive visual identities and editorial
            design, and build accessible web and mobile experiences.
          </p>
          <p className="about-ai-copy">
            I use AI for research and exploration, not as a substitute for
            judgment, purpose, or checking the work.
          </p>
        </div>
        <div className="about-card">
          <img className="about-portrait" src={portraitImage} alt="Portrait of Sisonke Miya" loading="lazy" decoding="async" />
          <p>Sisonke Miya<br /><span>Graphic designer &amp; developer</span></p>
        </div>
      </div>
      <div className="about-details">
        <div>
          <GlitchHeading as="h2">Approach</GlitchHeading>
          <p>I clarify the audience and goal first, then choose the right mix of design and technology to make the idea clear, useful, and distinctive.</p>
        </div>
        <div>
          <GlitchHeading as="h2">Primary focus</GlitchHeading>
          <ul className="skill-list">
            <li>Visual identity and editorial design <span>Strategy, typography, art direction</span></li>
            <li>Web and mobile products <span>Interface design and development</span></li>
          </ul>
          <p className="about-secondary-services">
            Also available for selected audio, moving-image, and application
            systems work.
          </p>
        </div>
      </div>
      <section className="about-tools" aria-labelledby="tools-heading">
        <p className="eyebrow"><span className="eyebrow-line" /> Tools in practice</p>
        <GlitchHeading as="h2" id="tools-heading">A considered toolkit<br /><span className="serif-word">for visual and digital work.</span></GlitchHeading>
        <ul className="tool-list">
          <li><span>Affinity</span><span>Layout and graphic design</span></li>
          <li><span>Figma</span><span>Interface design and prototyping</span></li>
          <li><span>React + TypeScript</span><span>Reusable digital interfaces</span></li>
          <li><span>HTML + CSS + JavaScript</span><span>Responsive front-end development</span></li>
          <li><span>React Native + Expo</span><span>Cross-platform mobile apps</span></li>
          <li><span>Node.js + Express</span><span>Application routes and APIs</span></li>
          <li><span>MongoDB</span><span>Document database workflows</span></li>
          <li><span>Git + GitHub</span><span>Version control and collaboration</span></li>
        </ul>
      </section>
      <Callout />
    </section>
  );
}

export default AboutPage;
