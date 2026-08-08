import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ShootingStar {
  id: number;
  top: number;
  left: number;
}

/** Spawns a single shooting star every so often, at a random position. */
export default function ShootingStars() {
  const [star, setStar] = useState<ShootingStar | null>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const spawn = () => {
      setStar({
        id: Date.now(),
        top: Math.random() * 40,
        left: Math.random() * 60,
      });
      // Clear it after the animation, then wait a while before the next one
      timeout = setTimeout(() => {
        setStar(null);
        timeout = setTimeout(spawn, 6000 + Math.random() * 9000);
      }, 1400);
    };

    timeout = setTimeout(spawn, 3000 + Math.random() * 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <AnimatePresence>
        {star && (
          <motion.span
            key={star.id}
            className="absolute h-[2px] w-[120px] rounded-full bg-gradient-to-r from-transparent via-star-light to-transparent"
            style={{ top: `${star.top}%`, left: `${star.left}%`, rotate: '35deg' }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: 340, y: 220, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
