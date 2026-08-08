import { useEffect, useRef, useState } from 'react';
import { BACKGROUND_MUSIC_SRC } from '@/data/content';

const START_VOLUME = 0.2;

/**
 * Owns a single <audio> element for the whole session so music keeps
 * playing uninterrupted as she moves between memories. `start()` should
 * be called from a real user gesture (the Begin button) to satisfy
 * browser autoplay policies.
 */
export function useBackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const audio = new Audio(BACKGROUND_MUSIC_SRC);
    audio.loop = true;
    audio.volume = START_VOLUME;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const start = () => {
    if (hasStarted) return;
    audioRef.current?.play().catch(() => {
      // Autoplay can still be blocked in rare cases; the music toggle
      // lets her start it manually if so.
    });
    setHasStarted(true);
  };

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      if (audioRef.current) audioRef.current.muted = next;
      return next;
    });
  };

  return { start, isMuted, toggleMute, hasStarted };
}
