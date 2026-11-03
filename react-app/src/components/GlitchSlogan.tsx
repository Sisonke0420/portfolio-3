import { useEffect, useState } from 'react';

type GlitchSloganProps = {
  messages: string[];
  className?: string;
  interval?: number;
};

function GlitchSlogan({ messages, className = '', interval = 6500 }: GlitchSloganProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (messages.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let finishGlitchTimer: number;
    const rotationTimer = window.setInterval(() => {
      setIsGlitching(true);
      setActiveIndex((index) => (index + 1) % messages.length);
      finishGlitchTimer = window.setTimeout(() => setIsGlitching(false), 420);
    }, interval);

    return () => {
      window.clearInterval(rotationTimer);
      window.clearTimeout(finishGlitchTimer);
    };
  }, [interval, messages.length]);

  const message = messages[activeIndex] ?? messages[0] ?? '';

  return (
    <span
      className={`glitch-slogan${isGlitching ? ' is-glitching' : ''}${className ? ` ${className}` : ''}`}
      data-text={message}
      aria-live="off"
    >
      {message}
    </span>
  );
}

export default GlitchSlogan;
