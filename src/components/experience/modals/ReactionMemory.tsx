import { motion } from 'framer-motion';
import { REACTION_CONTENT } from '@/data/content';

export default function ReactionMemory() {
  return (
    <div className="text-center">
      <motion.h2
        className="text-shadow-glow text-4xl text-moon-glow"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {REACTION_CONTENT.heading}
      </motion.h2>

      <motion.p
        className="mx-auto mt-4 max-w-md text-2xl leading-relaxed text-star-light/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.7 }}
      >
        {REACTION_CONTENT.body}
      </motion.p>

      <motion.div
        className="mx-auto mt-8 overflow-hidden rounded-2xl border border-star-light/15 shadow-lg shadow-black/40"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <video
          src={REACTION_CONTENT.videoSrc}
          controls
          playsInline
          className="w-full bg-black"
        />
      </motion.div>
    </div>
  );
}
