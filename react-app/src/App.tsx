import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import CustomCursor from './components/CustomCursor';
import { GlitchHeadingProvider } from './components/GlitchHeading';
import { InteractionSoundsProvider } from './components/InteractionSounds';
import { pages, type Page } from './components/pageConfig';
import projects, { getProjectSlug } from './components/projects';
import { designApproaches } from './components/designApproaches';
import './App.css';

const HomePage = lazy(() => import('./components/pages/HomePage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const WorkPage = lazy(() => import('./components/pages/WorkPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));
const ProjectDetailPage = lazy(() => import('./components/pages/ProjectDetailPage'));
const DesignApproachPage = lazy(() => import('./components/pages/DesignApproachPage'));

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
  const manualTheme = useRef(false);
  const themeTimer = useRef<number | null>(null);
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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const site = document.querySelector<HTMLElement>('.site');
    if (!site) return;

    const textSelector = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'li', 'blockquote', 'figcaption', 'legend', 'summary', 'dt', 'dd',
      'th', 'td', 'caption', 'small', 'strong', 'em',
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
      manualTheme.current = true;
      setDarkMode(savedTheme === 'dark');
      return;
    }

    function updateTheme() {
      if (themeTimer.current !== null) window.clearTimeout(themeTimer.current);
      const now = new Date();
      const hour = now.getHours();
      setDarkMode(hour >= 18 || hour < 6);

      const nextTransition = new Date(now);
      if (hour < 6) {
        nextTransition.setHours(6, 0, 0, 0);
      } else if (hour < 18) {
        nextTransition.setHours(18, 0, 0, 0);
      } else {
        nextTransition.setDate(nextTransition.getDate() + 1);
        nextTransition.setHours(6, 0, 0, 0);
      }

      if (!manualTheme.current) {
        themeTimer.current = window.setTimeout(updateTheme, nextTransition.getTime() - now.getTime());
      }
    }

    function updateThemeWhenVisible() {
      if (document.visibilityState === 'visible' && !manualTheme.current) updateTheme();
    }

    updateTheme();
    document.addEventListener('visibilitychange', updateThemeWhenVisible);

    return () => {
      if (themeTimer.current !== null) window.clearTimeout(themeTimer.current);
      document.removeEventListener('visibilitychange', updateThemeWhenVisible);
    };
  }, []);

  function toggleTheme() {
    const nextDarkMode = !darkMode;
    manualTheme.current = true;
    if (themeTimer.current !== null) window.clearTimeout(themeTimer.current);
    setDarkMode(nextDarkMode);
    window.localStorage.setItem('portfolio-theme', nextDarkMode ? 'dark' : 'light');
  }

  let pageContent;

  if (currentPage === 'approach' && selectedApproach) {
    pageContent = <DesignApproachPage approach={selectedApproach} />;
  } else if (selectedProject) {
    pageContent = <ProjectDetailPage project={selectedProject} />;
  } else if (currentPage === 'home') {
    pageContent = <HomePage />;
  } else if (currentPage === 'about') {
    pageContent = <AboutPage />;
  } else if (currentPage === 'work') {
    pageContent = <WorkPage />;
  } else if (currentPage === 'contact') {
    pageContent = <ContactPage />;
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
            <span className="splash-wordmark">{'{seriously'}<span>.</span>{'creative}'}</span>
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
          <Suspense fallback={<div className="page-loading" aria-busy="true" aria-live="polite" />}>
            <main id="main-content" key={currentPage} tabIndex={-1}>
              {pageContent}
            </main>
          </Suspense>
        </GlitchHeadingProvider>
        <Footer />
      </div>
      <CustomCursor darkMode={darkMode} />
    </InteractionSoundsProvider>
  );
}

export default App;
