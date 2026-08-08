import { motion } from 'framer-motion';
import { WELCOME_CONTENT } from '@/data/content';

export default function WelcomeMemory() {
  return (
    <div className="text-center">
      <motion.h2
        className="text-shadow-glow text-4xl text-moon-glow sm:text-5xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {WELCOME_CONTENT.heading}
      </motion.h2>
      <motion.p
        className="mx-auto mt-6 max-w-md whitespace-pre-line text-2xl leading-relaxed text-star-light/90"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {WELCOME_CONTENT.body}
      </motion.p>
    </div>
  );
}
