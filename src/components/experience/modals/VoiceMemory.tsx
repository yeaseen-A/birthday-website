import { motion } from 'framer-motion';
import { VOICE_CONTENT } from '@/data/content';
import AudioPlayer from '@/components/ui/AudioPlayer';

export default function VoiceMemory() {
  return (
    <div className="text-center">
      <motion.h2
        className="text-shadow-glow text-4xl text-moon-glow"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {VOICE_CONTENT.heading}
      </motion.h2>
      <motion.p
        className="mx-auto mt-4 max-w-md text-2xl leading-relaxed text-star-light/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {VOICE_CONTENT.body}
      </motion.p>
      <motion.div
        className="mx-auto mt-8 max-w-md"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <AudioPlayer src={VOICE_CONTENT.audioSrc} />
      </motion.div>
    </div>
  );
}
