import Callout from '../Callout';
import ProjectGrid from '../ProjectGrid';

function WorkPage() {
  return (
    <section className="inner-page page-shell work-page">
      <p className="eyebrow"><span className="eyebrow-line" /> Portfolio · 2022—2026</p>
      <div className="work-heading">
        <h1 className="page-title">Ideas, shaped<br />with <span className="serif-word">a point to make.</span></h1>
        <p>Visual identity, editorial design, typography, and motion—with a clear point of view and a reason for being.</p>
      </div>
      <p className="work-introduction">
        This selection spans visual identity, editorial design, posters, and
        moving image. Each project starts with an idea and gets shaped into
        something clear, useful, and hopefully more memorable than another
        open browser tab.
      </p>
      <ProjectGrid />
      <div className="work-closing-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> Commission enquiries</p>
        <p>
          From one-off posters to broader visual systems, the work takes
          different shapes. Have a project in mind? Tell me what it needs to
          do, who it’s for, and when it needs to exist.
        </p>
      </div>
      <Callout />
    </section>
  );
}

export default WorkPage;
