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
        <p>Identity, image-making, motion, and digital experiences—each built around a clear idea and a point of view.</p>
      </div>
      <p className="work-introduction">
        Browse identity and typography, image studies, photography, motion,
        and web projects. Open a case study to see the thinking, or visit a
        live website to experience the finished work.
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
