import { getRouteHref } from './pageConfig';

function Footer() {
  return (
    <footer className="site-footer page-shell">
      <a className="wordmark" href={getRouteHref('/')}>
        sm<span className="wordmark-dot">.</span>
      </a>
      <p>Independent design and development · Johannesburg</p>
      <span>© 2026 Sisonke Miya</span>
    </footer>
  );
}

export default Footer;
