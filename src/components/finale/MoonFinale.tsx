import { motion } from 'framer-motion';
import Confetti from './Confetti';
import { FINALE_CONTENT } from '@/data/content';

export default function MoonFinale() {
  const paragraphs = FINALE_CONTENT.body.split('\n\n').filter(Boolean);

  return (
    <motion.div
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-y-auto px-6 py-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      <Confetti />

      <motion.div
        className="mx-auto max-w-lg space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {paragraphs.map((paragraph, i) => (
          <motion.p
            key={i}
            className="text-2xl leading-relaxed text-star-light sm:text-3xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 1.1, duration: 1.1 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>

      <motion.p
        className="text-shadow-glow mt-14 text-5xl text-moon-glow sm:text-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 + paragraphs.length * 1.1 + 0.6, duration: 1.6 }}
      >
        {FINALE_CONTENT.closing}
      </motion.p>
    </motion.div>
  );
}
