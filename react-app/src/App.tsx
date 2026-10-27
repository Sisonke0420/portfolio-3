import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import DesignApproachPage from './components/pages/DesignApproachPage';
import HomePage from './components/pages/HomePage';
import ProjectDetailPage from './components/pages/ProjectDetailPage';
import WorkPage from './components/pages/WorkPage';
import { pages, type Page } from './components/pageConfig';
import projects, { getProjectSlug } from './components/projects';
import { designApproaches } from './components/designApproaches';
import './App.css';

type AppProps = {
  initialPath?: string;
};

function getLocation(pathname: string): { page: Page; projectSlug?: string } {
  const basePath = import.meta.env.BASE_URL;
  // Strip Vite's deployment prefix so routes resolve the same on root and subpath hosting.
  const routePath = basePath !== '/' && pathname.startsWith(basePath)
    ? `/${pathname.slice(basePath.length)}`
    : pathname;
  const [, section, projectSlug] = routePath.split('/');
  if (section === 'studio-notes') {
    return { page: 'approach', projectSlug };
  }
  const page = pages.find((item) => item.id === section)?.id ?? 'home';
  return { page, projectSlug: page === 'work' ? projectSlug : undefined };
}

function App({ initialPath }: AppProps) {
  const startingLocation = getLocation(
    initialPath ?? (typeof window === 'undefined' ? '/' : window.location.pathname),
  );
  const [splashState, setSplashState] = useState<'visible' | 'exiting' | 'hidden'>('visible');
  const [currentPage, setCurrentPage] = useState<Page>(startingLocation.page);
  const [projectSlug, setProjectSlug] = useState(startingLocation.projectSlug);
  const [darkMode, setDarkMode] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const selectedProject = projects.find((project) => getProjectSlug(project) === projectSlug);
  const selectedApproach = designApproaches.find((approach) => approach.slug === projectSlug);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSplashState('hidden');
      return;
    }

    const exitTimer = window.setTimeout(() => setSplashState('exiting'), 1200);
    const removeTimer = window.setTimeout(() => setSplashState('hidden'), 1750);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    // Keep client-side back/forward navigation in sync with the route derived from the URL.
    const syncLocation = () => {
      const location = getLocation(window.location.pathname);
      setCurrentPage(location.page);
      setProjectSlug(location.projectSlug);
    };

    window.addEventListener('popstate', syncLocation);
    return () => window.removeEventListener('popstate', syncLocation);
  }, []);

  useEffect(() => {
    // Read the saved preference after hydration before persisting state, avoiding an initial overwrite.
    setDarkMode(window.localStorage.getItem('portfolio-theme') === 'dark');
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    window.localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode, themeReady]);

  return (
    <>
      {splashState !== 'hidden' && (
        <div
          className={`splash-screen${darkMode ? ' theme-dark' : ''}${splashState === 'exiting' ? ' is-exiting' : ''}`}
          aria-hidden="true"
        >
          <div className="splash-content">
            <p className="splash-kicker">Independent creative practice</p>
            <span className="splash-wordmark">sm<span>.</span></span>
            <div className="splash-progress"><span /></div>
            <p className="splash-caption">Thoughtful design for a changing world</p>
          </div>
          <span className="splash-location">Johannesburg · South Africa</span>
        </div>
      )}
      <div className={darkMode ? 'site theme-dark' : 'site'}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header
          currentPage={currentPage}
          pages={pages}
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode((isDarkMode) => !isDarkMode)}
        />
        <div className="header-spacer" aria-hidden="true" />
        <main id="main-content" key={currentPage} tabIndex={-1}>
          {currentPage === 'approach' && selectedApproach ? (
            <DesignApproachPage approach={selectedApproach} />
          ) : selectedProject ? (
            <ProjectDetailPage project={selectedProject} />
          ) : (
            <>
              {currentPage === 'home' && <HomePage />}
              {currentPage === 'about' && <AboutPage />}
              {currentPage === 'work' && <WorkPage />}
              {currentPage === 'contact' && <ContactPage />}
            </>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
