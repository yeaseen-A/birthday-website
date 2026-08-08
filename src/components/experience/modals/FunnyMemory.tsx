import { useState } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FUNNY_CONTENT } from '@/data/content';

const SWIPE_THRESHOLD = 60;

export default function FunnyMemory() {
  const { photos } = FUNNY_CONTENT;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (delta: number) => {
    setDirection(delta);
    setIndex((prev) => Math.min(Math.max(prev + delta, 0), photos.length - 1));
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) go(1);
    else if (info.offset.x > SWIPE_THRESHOLD) go(-1);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-80 w-full max-w-sm overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={index}
            src={photos[index].src}
            alt={photos[index].alt}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={onDragEnd}
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -80 }}
            transition={{ duration: 0.4 }}
            className="h-full w-full cursor-grab touch-pan-y object-cover active:cursor-grabbing"
          />
        </AnimatePresence>
      </div>

      {/* Desktop controls */}
      <div className="mt-6 hidden items-center gap-6 sm:flex">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label="Previous photo"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-star-light/10 text-star-light disabled:opacity-30"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={index === photos.length - 1}
          aria-label="Next photo"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-star-light/10 text-star-light disabled:opacity-30"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Mobile hint */}
      <p className="mt-4 text-lg text-star-light/50 sm:hidden">Swipe →</p>
    </div>
  );
}
