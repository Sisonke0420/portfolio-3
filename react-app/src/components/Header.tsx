import { useEffect, useState } from 'react';
import { getRouteHref, type Page } from './pageConfig';

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
      <a className="wordmark" href={getRouteHref('/')} aria-label="Sisonke Miya home">
        sm<span className="wordmark-dot">.</span>
      </a>
      <nav
        id="main-navigation"
        className={menuOpen ? 'main-nav is-open' : 'main-nav'}
        aria-label="Main navigation"
      >
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
      </nav>
      <a className="header-availability" href={getRouteHref('/contact/')}>
        <span className="availability-dot" />
        Available for select projects
      </a>
      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span aria-hidden="true">{darkMode ? '☀' : '☾'}</span>
        <span className="theme-toggle-label">{darkMode ? 'Light' : 'Dark'}</span>
      </button>
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
