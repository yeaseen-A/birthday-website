import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface MoonProps {
  progress: number; // 0..1
  isComplete: boolean;
  onOpen: () => void;
}

export default function Moon({ progress, isComplete, onOpen }: MoonProps) {
  const glowOpacity = 0.15 + progress * 0.55;
  const coreOpacity = 0.55 + progress * 0.45;

  return (
    <div className="absolute right-[6%] top-[7%] z-50 sm:right-[8%] sm:top-[6%]">
      <motion.button
        type="button"
        onClick={isComplete ? onOpen : undefined}
        aria-label={isComplete ? 'Open the moon' : 'The moon is still gathering light'}
        disabled={!isComplete}
        whileHover={isComplete ? { scale: 1.06 } : undefined}
        whileTap={isComplete ? { scale: 0.97 } : undefined}
        className={cn(
          'relative flex items-center justify-center rounded-full p-6 sm:p-8',
          isComplete ? 'cursor-pointer' : 'cursor-default'
        )}
      >
        <div
          className="absolute inset-0 rounded-full blur-2xl transition-opacity duration-1000"
          style={{
            backgroundColor: 'rgba(255, 233, 179, 1)',
            opacity: glowOpacity,
          }}
        />
        <div
          className={cn(
            'relative h-16 w-16 rounded-full bg-moon-core transition-opacity duration-1000 sm:h-24 sm:w-24',
            isComplete && 'animate-pulse-glow'
          )}
          style={{ opacity: coreOpacity }}
        />
      </motion.button>

      {isComplete && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-lg text-moon-glow"
        >
          Tap the moon
        </motion.p>
      )}
    </div>
  );
}
