import { motion } from 'framer-motion';

/**
 * Simulates the title being written by hand: each character fades and
 * settles into place in sequence, in the handwritten Caveat face.
 */
export default function HandwrittenTitle({ text }: { text: string }) {
  const characters = Array.from(text);

  return (
    <h1
      aria-label={text}
      className="text-shadow-glow flex flex-wrap justify-center text-5xl font-semibold text-star-light sm:text-7xl"
    >
      {characters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden="true"
          initial={{ opacity: 0, y: 14, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            delay: 0.9 + i * 0.06,
            duration: 0.5,
            ease: 'easeOut',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </h1>
  );
}
