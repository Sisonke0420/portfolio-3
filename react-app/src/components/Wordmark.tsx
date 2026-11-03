import type { MouseEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

type WordmarkProps = {
  href: string;
  className?: string;
};

function Wordmark({ href, className = '' }: WordmarkProps) {
  const [secretRevealed, setSecretRevealed] = useState(false);
  const clickCount = useRef(0);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const homePath = new URL(href, window.location.origin).pathname;
    if (window.location.pathname !== homePath) return;

    event.preventDefault();
    clickCount.current += 1;
    window.clearTimeout(resetTimer.current);

    if (clickCount.current >= 5) {
      clickCount.current = 0;
      setSecretRevealed(true);
      return;
    }

    resetTimer.current = window.setTimeout(() => {
      clickCount.current = 0;
    }, 1800);
  }

  return (
    <span className="wordmark-wrap">
      <a
        className={`wordmark ${className}`.trim()}
        href={href}
        aria-label="Sisonke Miya home"
        title="There may be a tiny secret here"
        onClick={handleClick}
      >
        sm<span className="wordmark-dot">.</span>
      </a>
      {secretRevealed && (
        <span className="wordmark-secret" role="status">
          You found the tiny secret. Excellent clicking.
        </span>
      )}
    </span>
  );
}

export default Wordmark;
