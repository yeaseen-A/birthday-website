import { motion } from 'framer-motion';
import { Music } from 'lucide-react';
import { SONG_CONTENT } from '@/data/content';
import AudioPlayer from '@/components/ui/AudioPlayer';

export default function SongMemory() {
  return (
    <div className="text-center">
      <motion.div
        className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-moon-glow/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        <Music className="text-moon-glow" size={28} />
      </motion.div>

      <motion.h2
        className="text-shadow-glow mt-6 text-4xl text-moon-glow"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {SONG_CONTENT.heading}
      </motion.h2>

      <motion.p
        className="mt-1 text-xl text-star-light/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {SONG_CONTENT.songTitle} — {SONG_CONTENT.songArtist}
      </motion.p>

      <motion.p
        className="mx-auto mt-4 max-w-md text-2xl leading-relaxed text-star-light/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {SONG_CONTENT.body}
      </motion.p>

      <motion.div
        className="mx-auto mt-8 max-w-md"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      >
        <AudioPlayer src={SONG_CONTENT.audioSrc} label={SONG_CONTENT.songTitle} />
      </motion.div>
    </div>
  );
}
