import { createContext, useCallback, useContext, useEffect, useMemo, useRef, type ReactNode } from 'react';

type SoundEffect = 'click' | 'primary' | 'splash';
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
  const splashSoundPlayed = useRef(false);

  const playAudioEffect = useCallback((effect: SoundEffect) => {
    if (typeof window.AudioContext === 'undefined') return;

    const existingContext = audioContext.current;
    const context = existingContext && existingContext.state !== 'closed'
      ? existingContext
      : new AudioContext();
    audioContext.current = context;
    if (context.state === 'suspended') void context.resume();

    if (effect === 'splash') {
      const resonances = [
        { frequency: 82.4, volume: 0.045, decay: 6 },
        { frequency: 110, volume: 0.038, decay: 5 },
        { frequency: 164.8, volume: 0.026, decay: 4 },
        { frequency: 220.4, volume: 0.016, decay: 3 },
        { frequency: 293.7, volume: 0.009, decay: 2.3 },
      ];
      const start = context.currentTime;

      resonances.forEach(({ frequency, volume, decay }) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency * 1.04, start);
        oscillator.frequency.exponentialRampToValueAtTime(frequency, start + 0.48);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(volume, start + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + decay);
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start(start);
        oscillator.stop(start + decay + 0.02);
      });
      return;
    }

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
    if (splashSoundPlayed.current) return;
    splashSoundPlayed.current = true;
    playAudioEffect('splash');
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
