import ArrowIcon from './ArrowIcon';
import { GlitchHeading } from './GlitchHeading';
import GlitchSlogan from './GlitchSlogan';
import { getRouteHref } from './pageConfig';

function Callout() {
  return (
    <aside className="callout">
      <div>
        <p className="eyebrow"><GlitchSlogan messages={['For promising ideas and useful conversations', 'For plans with potential', 'For the thing you keep thinking about']} /></p>
        <GlitchHeading as="h2">Have a project?<br /><span className="serif-word">Let’s untangle it.</span></GlitchHeading>
      </div>
      <a className="round-link round-link-light" href={getRouteHref('/contact/')} aria-label="Discuss a project">
        <ArrowIcon diagonal />
      </a>
    </aside>
  );
}

export default Callout;
