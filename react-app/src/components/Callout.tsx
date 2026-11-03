import ArrowIcon from './ArrowIcon';
import { getRouteHref } from './pageConfig';

function Callout() {
  return (
    <aside className="callout">
      <div>
        <p className="eyebrow">For promising ideas and useful conversations</p>
        <h2>Have a project?<br /><span className="serif-word">Let’s untangle it.</span></h2>
      </div>
      <a className="round-link round-link-light" href={getRouteHref('/contact/')} aria-label="Discuss a project">
        <ArrowIcon diagonal />
      </a>
    </aside>
  );
}

export default Callout;
