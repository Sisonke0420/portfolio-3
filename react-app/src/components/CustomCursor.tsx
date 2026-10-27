import { useEffect, useRef, useState } from 'react';

const TAIL_LENGTH = 5;

type CustomCursorProps = {
  darkMode: boolean;
};

function CustomCursor({ darkMode }: CustomCursorProps) {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const tailRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    document.body.classList.add('has-custom-cursor');

    let pointerX = 0;
    let pointerY = 0;
    let isInitialized = false;
    let animationFrame: number | null = null;
    const tail = Array.from({ length: TAIL_LENGTH }, () => ({ x: 0, y: 0 }));

    function animateTail() {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pointerX - 18}px, ${pointerY - 18}px, 0)`;
      }

      let remainingDistance = 0;
      tail.forEach((point, index) => {
        const target = index === 0 ? { x: pointerX, y: pointerY } : tail[index - 1];
        point.x += (target.x - point.x) * 0.28;
        point.y += (target.y - point.y) * 0.28;
        remainingDistance = Math.max(remainingDistance, Math.abs(target.x - point.x), Math.abs(target.y - point.y));
        tailRefs.current[index]?.style.setProperty(
          'transform',
          `translate3d(${point.x - 7}px, ${point.y - 7}px, 0)`,
        );
      });

      if (remainingDistance > 0.5) {
        animationFrame = window.requestAnimationFrame(animateTail);
      } else {
        animationFrame = null;
      }
    }

    function handlePointerMove(event: PointerEvent) {
      pointerX = event.clientX;
      pointerY = event.clientY;
      const hoveredElement = document.elementFromPoint(pointerX, pointerY);
      document.body.classList.toggle('cursor-over-card', Boolean(hoveredElement?.closest([
        '.project-card',
        '.about-card',
        '.discipline-card',
        '.tool-list li',
        '.contact-card',
        '.approach-principle',
      ].join(', '))));

      if (!isInitialized) {
        tail.forEach((point) => {
          point.x = pointerX;
          point.y = pointerY;
        });
        isInitialized = true;
        setIsVisible(true);
      }

      if (animationFrame === null) animationFrame = window.requestAnimationFrame(animateTail);
    }

    function handlePointerLeave() {
      isInitialized = false;
      setIsVisible(false);
      document.body.classList.remove('cursor-over-card');
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    }

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('blur', handlePointerLeave);
    document.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('blur', handlePointerLeave);
      document.removeEventListener('mouseleave', handlePointerLeave);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
      document.body.classList.remove('has-custom-cursor');
      document.body.classList.remove('cursor-over-card');
    };
  }, []);

  return (
    <span
      className={`custom-cursor${darkMode ? ' theme-dark' : ''}${isVisible ? ' is-visible' : ''}`}
      aria-hidden="true"
    >
      {Array.from({ length: TAIL_LENGTH }, (_, index) => (
        <span
          className="custom-cursor-tail"
          key={index}
          ref={(element) => { tailRefs.current[index] = element; }}
          style={{
            width: `${15 - index * 2}px`,
            height: `${15 - index * 2}px`,
            opacity: `${0.65 - index * 0.1}`,
          }}
        />
      ))}
      <span className="custom-cursor-head" ref={cursorRef} />
    </span>
  );
}

export default CustomCursor;
