import { motion } from 'framer-motion';
import { WISH_CONTENT } from '@/data/content';

export default function WishMemory() {
  return (
    <div className="flex flex-col items-center justify-center py-6 text-center">
      <motion.h2
        className="text-shadow-glow text-4xl text-moon-glow sm:text-5xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {WISH_CONTENT.heading}
      </motion.h2>

      <motion.p
        className="mx-auto mt-8 max-w-lg whitespace-pre-line text-3xl leading-relaxed text-star-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      >
        {WISH_CONTENT.body}
      </motion.p>
    </div>
  );
}
