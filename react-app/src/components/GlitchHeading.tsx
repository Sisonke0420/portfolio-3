import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

type HeadingContextValue = {
  registerHeading: (id: string) => () => void;
  replacements: Record<string, string>;
  activeHeadingId: string | null;
};

const HeadingGlitchContext = createContext<HeadingContextValue | null>(null);

const alternateSlogans = [
  'Seriously creative.',
  'Make good things matter.',
  'A little less ordinary.',
  'Ideas with excellent shoes.',
  'Good taste. Better questions.',
  'More feeling, fewer defaults.',
  'Make the useful unforgettable.',
  'Creative, with side quests.',
];

type GlitchHeadingProviderProps = {
  children: ReactNode;
};

export function GlitchHeadingProvider({ children }: GlitchHeadingProviderProps) {
  const headingIds = useRef(new Set<string>());
  const previousSloganIndex = useRef(-1);
  const [replacements, setReplacements] = useState<Record<string, string>>({});
  const [activeHeadingId, setActiveHeadingId] = useState<string | null>(null);

  const registerHeading = useCallback((id: string) => {
    headingIds.current.add(id);
    return () => headingIds.current.delete(id);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let activeTimeout: number | undefined;

    function glitchHeading() {
      const headings = [...headingIds.current];
      if (headings.length === 0) return;

      const headingId = headings[Math.floor(Math.random() * headings.length)];
      let sloganIndex = Math.floor(Math.random() * alternateSlogans.length);
      if (sloganIndex === previousSloganIndex.current) {
        sloganIndex = (sloganIndex + 1) % alternateSlogans.length;
      }
      previousSloganIndex.current = sloganIndex;
      setReplacements((current) => ({
        ...current,
        [headingId]: alternateSlogans[sloganIndex],
      }));
      setActiveHeadingId(headingId);
      window.clearTimeout(activeTimeout);
      activeTimeout = window.setTimeout(() => setActiveHeadingId(null), 420);
    }

    const initialTimer = window.setTimeout(glitchHeading, 1800);
    const interval = window.setInterval(glitchHeading, 5200);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(interval);
      window.clearTimeout(activeTimeout);
    };
  }, []);

  const contextValue = useMemo(
    () => ({ registerHeading, replacements, activeHeadingId }),
    [registerHeading, replacements, activeHeadingId],
  );

  return (
    <HeadingGlitchContext.Provider value={contextValue}>
      {children}
    </HeadingGlitchContext.Provider>
  );
}

type GlitchHeadingProps = {
  as: 'h1' | 'h2';
  children: ReactNode;
  className?: string;
  id?: string;
};

export function GlitchHeading({ as: Heading, children, className = '', id }: GlitchHeadingProps) {
  const context = useContext(HeadingGlitchContext);
  if (!context) throw new Error('GlitchHeading must be rendered inside GlitchHeadingProvider');
  const generatedId = useId();
  const headingId = id ?? generatedId;
  const replacement = context.replacements[headingId];

  useEffect(() => context.registerHeading(headingId), [context.registerHeading, headingId]);

  return (
    <Heading
      className={`${className}${context.activeHeadingId === headingId ? ' heading-glitch-active' : ''}`.trim()}
      id={id}
    >
      {replacement ?? children}
    </Heading>
  );
}
