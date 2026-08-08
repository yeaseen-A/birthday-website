import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HOW_WE_MET_CONTENT } from '@/data/content';
import { cn } from '@/utils/cn';

const AUTO_ADVANCE_MS = 4000;

/**
 * A slow, crossfading photo gallery — distinct from the swipe gallery
 * in FunnyMemory and the card carousel in ReasonsMemory. Advances on
 * its own, but she can also tap a dot to jump to a specific photo.
 */
function PhotoGallery({ photos }: { photos: typeof HOW_WE_MET_CONTENT.photos }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="w-full max-w-[240px] shrink-0">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-star-light/15 shadow-lg shadow-black/40">
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={photos[index].src}
            alt={photos[index].alt}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      {photos.length > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show photo ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                i === index ? 'w-5 bg-moon-glow' : 'w-1.5 bg-star-light/30'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function HowWeMetMemory() {
  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <PhotoGallery photos={HOW_WE_MET_CONTENT.photos} />
      </motion.div>

      <div>
        <motion.h2
          className="text-shadow-glow text-4xl text-moon-glow"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {HOW_WE_MET_CONTENT.heading}
        </motion.h2>
        <motion.p
          className="mt-4 whitespace-pre-line text-2xl leading-relaxed text-star-light/90"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {HOW_WE_MET_CONTENT.body}
        </motion.p>
      </div>
    </div>
  );
}
