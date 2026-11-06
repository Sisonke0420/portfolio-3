import { getRouteHref } from './pageConfig';
import Wordmark from './Wordmark';

function Footer() {
  return (
    <footer className="site-footer page-shell">
      <Wordmark href={getRouteHref('/')} />
      <p>Visual identity · Editorial design · Digital products</p>
      <span>© 2026 Sisonke Miya</span>
    </footer>
  );
}

export default Footer;
