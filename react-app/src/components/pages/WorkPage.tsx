import Callout from '../Callout';
import ProjectGrid from '../ProjectGrid';

function WorkPage() {
  return (
    <section className="inner-page page-shell work-page">
      <p className="eyebrow"><span className="eyebrow-line" /> Portfolio · 2022—2026</p>
      <div className="work-heading">
        <h1 className="page-title">Ideas, shaped<br />with <span className="serif-word">intention.</span></h1>
        <p>Visual identity, editorial design, typography, and motion—developed with a clear point of view and purpose.</p>
      </div>
      <p className="work-introduction">
        This selection spans visual identity, editorial design, posters, and
        moving image. Each project begins with a defined idea and is developed
        to communicate clearly with its intended audience.
      </p>
      <ProjectGrid />
      <div className="work-closing-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> Commission enquiries</p>
        <p>
          The portfolio ranges from individual poster designs to broader visual
          systems. For commission enquiries and collaboration opportunities,
          please get in touch.
        </p>
      </div>
      <Callout />
    </section>
  );
}

export default WorkPage;
