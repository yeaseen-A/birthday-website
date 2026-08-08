import { motion } from 'framer-motion';
import { FUTURE_CONTENT } from '@/data/content';

export default function FutureMemory() {
  return (
    <div className="text-center">
      <motion.h2
        className="text-shadow-glow text-4xl text-moon-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {FUTURE_CONTENT.heading}
      </motion.h2>

      <div className="mx-auto mt-6 max-w-md space-y-6">
        {FUTURE_CONTENT.paragraphs.map((paragraph, i) => (
          <motion.p
            key={i}
            className="text-2xl leading-relaxed text-star-light/90"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.9, duration: 1 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
