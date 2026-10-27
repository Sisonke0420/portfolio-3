import Callout from '../Callout';
import ProjectGrid from '../ProjectGrid';

function WorkPage() {
  return (
    <section className="inner-page page-shell work-page">
      <p className="eyebrow"><span className="eyebrow-line" /> Selected work · 2022—2026</p>
      <div className="work-heading">
        <h1 className="page-title">Work that makes<br />you <span className="serif-word">look twice.</span></h1>
        <p>A collection of visual explorations, graphic design, editorial layouts, and moving-image work.</p>
      </div>
      <p className="work-introduction">
        Each project starts with a different question. Some explore how a
        letterform can become a system; others use image, color, or sequence to
        give an idea its voice. Browse the collection to see how those choices
        take shape across formats.
      </p>
      <ProjectGrid />
      <div className="work-closing-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> Looking for a particular direction?</p>
        <p>
          The projects here range from a single poster to a broader visual
          language. If something sparks an idea for your own project, I’d be
          glad to hear what you’re thinking.
        </p>
      </div>
      <Callout />
    </section>
  );
}

export default WorkPage;
