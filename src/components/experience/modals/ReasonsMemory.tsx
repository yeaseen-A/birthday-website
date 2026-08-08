import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { REASONS_CONTENT } from '@/data/content';

export default function ReasonsMemory() {
  const { reasons, heading } = REASONS_CONTENT;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (delta: number) => {
    setDirection(delta);
    setIndex((prev) => Math.min(Math.max(prev + delta, 0), reasons.length - 1));
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-shadow-glow text-4xl text-moon-glow">{heading}</h2>
      <p className="mt-2 text-lg text-star-light/60">
        Reason {index + 1} of {reasons.length}
      </p>

      <div className="relative mt-8 h-56 w-full max-w-sm overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="glass-panel absolute inset-0 flex items-center justify-center rounded-2xl p-8 shadow-[0_0_30px_rgba(255,233,179,0.15)]"
          >
            <p className="text-2xl leading-relaxed text-star-light">{reasons[index]}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-6">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label="Previous reason"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-star-light/10 text-star-light disabled:opacity-30"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={index === reasons.length - 1}
          className="rounded-full bg-moon-glow px-6 py-2 text-xl text-night-950 disabled:opacity-30"
        >
          Next
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={index === reasons.length - 1}
          aria-label="Next reason"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-star-light/10 text-star-light disabled:opacity-30"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
