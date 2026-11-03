import { getRouteHref } from './pageConfig';
import Wordmark from './Wordmark';

function Footer() {
  return (
    <footer className="site-footer page-shell">
      <Wordmark href={getRouteHref('/')} />
      <p>Design and development · Johannesburg (with Wi-Fi)</p>
      <span>© 2026 Sisonke Miya</span>
    </footer>
  );
}

export default Footer;
