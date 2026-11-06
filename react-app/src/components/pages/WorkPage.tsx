import Callout from '../Callout';
import { GlitchHeading } from '../GlitchHeading';
import GlitchSlogan from '../GlitchSlogan';
import ProjectGrid from '../ProjectGrid';

function WorkPage() {
  return (
    <section className="inner-page page-shell work-page">
      <p className="eyebrow"><span className="eyebrow-line" /> <GlitchSlogan messages={['Portfolio · 2022—2026', 'Proof of curiosity · 2022—2026', 'A selection of solved puzzles']} /></p>
      <div className="work-heading">
        <GlitchHeading as="h1" className="page-title">Ideas, shaped<br />with <span className="serif-word">a point to make.</span></GlitchHeading>
        <p>Visual identity and editorial design, shaped around a clear idea, an audience, and the details that make a system hold together.</p>
      </div>
      <p className="work-introduction">
        This selection focuses on visual identity, typography, editorial, and
        art direction. I bring the same clarity to web and mobile products;
        this portfolio currently shows the visual side of that practice.
      </p>
      <ProjectGrid />
      <div className="work-closing-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> Start with the brief</p>
        <p>
          From a single visual asset to a connected digital product, start
          with what it needs to do, who it is for, and when it needs to launch.
        </p>
      </div>
      <Callout />
    </section>
  );
}

export default WorkPage;
