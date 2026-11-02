import ArrowIcon from './ArrowIcon';
import { getRouteHref } from './pageConfig';

function Callout() {
  return (
    <aside className="callout">
      <div>
        <p className="eyebrow">For new projects and collaborations</p>
        <h2>Let’s discuss your<br /><span className="serif-word">next project.</span></h2>
      </div>
      <a className="round-link round-link-light" href={getRouteHref('/contact/')} aria-label="Discuss a project">
        <ArrowIcon diagonal />
      </a>
    </aside>
  );
}

export default Callout;
