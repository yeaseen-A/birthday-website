import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

const BAR_COUNT = 24;

export default function AudioPlayer({ src, label }: { src: string; label?: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration);
    };
    const onEnd = () => setIsPlaying(false);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('ended', onEnd);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('ended', onEnd);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="glass-panel flex w-full items-center gap-4 rounded-2xl px-5 py-4">
      <audio ref={audioRef} src={src} preload="metadata" />
      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? 'Pause' : 'Play'}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-moon-glow text-night-950"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
      </button>

      <div className="flex h-10 flex-1 items-center gap-[3px]">
        {Array.from({ length: BAR_COUNT }).map((_, i) => {
          const active = i / BAR_COUNT < progress;
          return (
            <motion.span
              key={i}
              className={cn('w-1 flex-1 rounded-full', active ? 'bg-moon-glow' : 'bg-star-light/25')}
              animate={
                isPlaying
                  ? { height: [`${20 + (i % 5) * 8}%`, `${60 + (i % 7) * 5}%`, `${20 + (i % 5) * 8}%`] }
                  : { height: '30%' }
              }
              transition={{ duration: 1 + (i % 4) * 0.2, repeat: isPlaying ? Infinity : 0, ease: 'easeInOut' }}
            />
          );
        })}
      </div>

      {label && <span className="hidden shrink-0 text-lg text-star-light/70 sm:block">{label}</span>}
    </div>
  );
}
