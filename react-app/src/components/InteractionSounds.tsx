import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

type InteractionSoundsContextValue = {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
};

const InteractionSoundsContext = createContext<InteractionSoundsContextValue | null>(null);

function InteractionSoundsProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const audioContext = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (!enabled) return undefined;

    function playInteractionSound(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element) || target.closest('.sound-toggle')) return;
      const control = target.closest('a, button');
      if (!control || control.hasAttribute('disabled')) return;
      if (typeof window.AudioContext === 'undefined') return;

      const context = audioContext.current ?? new AudioContext();
      audioContext.current = context;
      if (context.state === 'suspended') void context.resume();

      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const isPrimary = control.matches('.button, .project-mood-filter.active');
      const time = context.currentTime;

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(isPrimary ? 740 : 520, time);
      oscillator.frequency.exponentialRampToValueAtTime(isPrimary ? 980 : 680, time + 0.045);
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.exponentialRampToValueAtTime(0.035, time + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.075);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(time);
      oscillator.stop(time + 0.08);
    }

    document.addEventListener('click', playInteractionSound);
    return () => document.removeEventListener('click', playInteractionSound);
  }, [enabled]);

  useEffect(() => () => {
    if (audioContext.current && audioContext.current.state !== 'closed') {
      void audioContext.current.close();
    }
  }, []);

  return (
    <InteractionSoundsContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </InteractionSoundsContext.Provider>
  );
}

function SoundToggle() {
  const context = useContext(InteractionSoundsContext);
  if (!context) throw new Error('SoundToggle must be rendered inside InteractionSoundsProvider');

  return (
    <button
      className="sound-toggle"
      type="button"
      aria-pressed={context.enabled}
      onClick={() => context.setEnabled(!context.enabled)}
    >
      <span className="sound-toggle-icon" aria-hidden="true">{context.enabled ? '♫' : '♪̸'}</span>
      Sounds {context.enabled ? 'on' : 'off'}
    </button>
  );
}

export { InteractionSoundsProvider, SoundToggle };
