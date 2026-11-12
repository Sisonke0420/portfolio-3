import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import DesignApproachPage from './components/pages/DesignApproachPage';
import HomePage from './components/pages/HomePage';
import ProjectDetailPage from './components/pages/ProjectDetailPage';
import WorkPage from './components/pages/WorkPage';
import CustomCursor from './components/CustomCursor';
import { GlitchHeadingProvider } from './components/GlitchHeading';
import { InteractionSoundsProvider } from './components/InteractionSounds';
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
  const [darkMode, setDarkMode] = useState(true);
  const selectedProject = projects.find(
    (project) => !project.externalUrl && getProjectSlug(project) === projectSlug,
  );
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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const site = document.querySelector<HTMLElement>('.site');
    if (!site) return;

    const textSelector = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'button', 'label',
      'li', 'blockquote', 'figcaption', 'legend', 'summary', 'dt', 'dd',
      'th', 'td', 'caption', 'small', 'strong', 'em', 'span',
    ].join(', ');
    const textTargets = [...site.querySelectorAll<HTMLElement>(textSelector)]
      .filter((target) => {
        const hasDirectText = [...target.childNodes].some(
          (node) => node.nodeType === Node.TEXT_NODE && Boolean(node.textContent?.trim()),
        );
        return hasDirectText;
      });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute('data-text-scroll', 'visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

    textTargets.forEach((target, index) => {
      target.setAttribute('data-text-scroll', 'pending');
      target.style.setProperty('--text-scroll-delay', `${(index % 5) * 35}ms`);
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
      textTargets.forEach((target) => {
        target.removeAttribute('data-text-scroll');
        target.style.removeProperty('--text-scroll-delay');
      });
    };
  }, [currentPage, projectSlug]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (themeColor) themeColor.content = darkMode ? '#171916' : '#f5f3ed';
  }, [darkMode]);

  function toggleTheme() {
    const nextDarkMode = !darkMode;
    setDarkMode(nextDarkMode);
    window.localStorage.setItem('portfolio-theme', nextDarkMode ? 'dark' : 'light');
  }

  return (
    <InteractionSoundsProvider>
      {splashState !== 'hidden' && (
        <div
          className={`splash-screen${darkMode ? ' theme-dark' : ''}${splashState === 'exiting' ? ' is-exiting' : ''}`}
          role="region"
          aria-label="Portfolio introduction"
        >
          <div className="splash-content">
            <p className="splash-kicker">A small pause before the pixels</p>
            <span
              className="splash-wordmark"
              data-text="{seriously.creative}"
              aria-label="{seriously.creative}"
            >
              <span aria-hidden="true">{'{seriously'}<span>.</span>{'creative}'}</span>
            </span>
            <div className="splash-progress"><span /></div>
            <p className="splash-caption">Good ideas. Fewer unnecessary things.</p>
          </div>
          <span className="splash-location">Johannesburg · South Africa</span>
        </div>
      )}
      <div className={darkMode ? 'site theme-dark' : 'site'}>
        <Header
          currentPage={currentPage}
          pages={pages}
          darkMode={darkMode}
          onToggleTheme={toggleTheme}
        />
        <div className="header-spacer" aria-hidden="true" />
        <GlitchHeadingProvider>
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
        </GlitchHeadingProvider>
        <Footer />
      </div>
      <CustomCursor darkMode={darkMode} />
    </InteractionSoundsProvider>
  );
}

export default App;
