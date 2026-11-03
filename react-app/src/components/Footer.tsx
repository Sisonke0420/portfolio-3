import { getRouteHref } from './pageConfig';
import Wordmark from './Wordmark';
import { SoundToggle } from './InteractionSounds';

function Footer() {
  return (
    <footer className="site-footer page-shell">
      <Wordmark href={getRouteHref('/')} />
      <p>Design and development · Johannesburg (with Wi-Fi)</p>
      <SoundToggle />
      <span>© 2026 Sisonke Miya</span>
    </footer>
  );
}

export default Footer;
