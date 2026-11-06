import { createContext, useCallback, useContext, useEffect, useMemo, useRef, type ReactNode } from 'react';

type SoundEffect = 'click' | 'primary';
type InteractionSoundsContextValue = {
  playEffect: (effect: SoundEffect) => void;
};

const InteractionSoundsContext = createContext<InteractionSoundsContextValue | null>(null);

function useInteractionSounds() {
  const context = useContext(InteractionSoundsContext);
  if (!context) throw new Error('useInteractionSounds must be used inside InteractionSoundsProvider');
  return context;
}

function InteractionSoundsProvider({ children }: { children: ReactNode }) {
  const audioContext = useRef<AudioContext | null>(null);

  const playAudioEffect = useCallback((effect: SoundEffect) => {
    if (typeof window.AudioContext === 'undefined') return;

    const existingContext = audioContext.current;
    const context = existingContext && existingContext.state !== 'closed'
      ? existingContext
      : new AudioContext();
    audioContext.current = context;
    if (context.state === 'suspended') void context.resume();

    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const time = context.currentTime;
    oscillator.type = 'sine';
    const isPrimary = effect === 'primary';
    oscillator.frequency.setValueAtTime(isPrimary ? 740 : 520, time);
    oscillator.frequency.exponentialRampToValueAtTime(isPrimary ? 980 : 680, time + 0.045);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.035, time + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.075);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(time);
    oscillator.stop(time + 0.08);
  }, []);

  const playEffect = useCallback((effect: SoundEffect) => {
    playAudioEffect(effect);
  }, [playAudioEffect]);

  useEffect(() => {
    function resumeAudio() {
      if (audioContext.current?.state === 'suspended') {
        void audioContext.current.resume();
      }
    }

    function playInteractionSound(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const control = target.closest('a, button');
      if (!control || control.hasAttribute('disabled')) return;
      playAudioEffect(control.matches('.button, .project-mood-filter.active') ? 'primary' : 'click');
    }

    document.addEventListener('pointerdown', resumeAudio);
    document.addEventListener('keydown', resumeAudio);
    document.addEventListener('click', playInteractionSound);
    return () => {
      document.removeEventListener('pointerdown', resumeAudio);
      document.removeEventListener('keydown', resumeAudio);
      document.removeEventListener('click', playInteractionSound);
    };
  }, [playAudioEffect]);

  const contextValue = useMemo(
    () => ({ playEffect }),
    [playEffect],
  );

  return <InteractionSoundsContext.Provider value={contextValue}>{children}</InteractionSoundsContext.Provider>;
}

export { InteractionSoundsProvider, useInteractionSounds };
