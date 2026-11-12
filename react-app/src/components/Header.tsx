import { useEffect, useState } from 'react';
import { getRouteHref, type Page } from './pageConfig';
import Wordmark from './Wordmark';
import GlitchSlogan from './GlitchSlogan';

type HeaderProps = {
  currentPage: Page;
  pages: { id: Page; label: string }[];
  darkMode: boolean;
  onToggleTheme: () => void;
};

function Header({ currentPage, pages, darkMode, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false);
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <header className={menuOpen ? 'site-header menu-open' : 'site-header'}>
      <Wordmark href={getRouteHref('/')} />
      <nav
        id="main-navigation"
        className={menuOpen ? 'main-nav is-open' : 'main-nav'}
        aria-label="Main navigation"
      >
        <p className="nav-signature">{'{seriously.creative}'}</p>
        {pages.map((page) => (
          <a
            key={page.id}
            href={getRouteHref(page.id === 'home' ? '/' : `/${page.id}/`)}
            className={currentPage === page.id ? 'nav-link active' : 'nav-link'}
            aria-current={currentPage === page.id ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {page.label}
          </a>
        ))}
        <button
          className="theme-toggle nav-theme-toggle"
          type="button"
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          aria-pressed={darkMode}
          onClick={onToggleTheme}
        >
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </nav>
      <a className="header-availability" href={getRouteHref('/contact/')}>
        <span className="availability-dot" />
        <GlitchSlogan
          className="header-slogan"
          messages={['Open for creative projects', 'Good ideas welcome', 'Ready for the next interesting thing']}
        />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
      </button>
    </header>
  );
}

export default Header;
