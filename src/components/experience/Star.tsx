import { motion } from 'framer-motion';
import type { MemoryDefinition } from '@/types/memory';
import { cn } from '@/utils/cn';

interface StarProps {
  memory: MemoryDefinition;
  isComplete: boolean;
  onOpen: (id: MemoryDefinition['id']) => void;
}

/**
 * One of the 9 memory stars. Unlabeled until hovered, per the brief —
 * discovery is part of the experience. Shares a layoutId with its
 * modal so opening it reads as the camera pushing in toward the star.
 */
export default function Star({ memory, isComplete, onOpen }: StarProps) {
  return (
    <motion.button
      type="button"
      layoutId={`star-shell-${memory.id}`}
      onClick={() => onOpen(memory.id)}
      aria-label={memory.label}
      className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer touch-manipulation p-4"
      style={{ top: memory.position.top, left: memory.position.left }}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Glow halo */}
      <motion.span
        className={cn(
          'absolute inset-0 m-auto h-10 w-10 rounded-full blur-md transition-opacity duration-500',
          isComplete ? 'bg-moon-glow opacity-70' : 'bg-star-light opacity-30 group-hover:opacity-70'
        )}
      />
      {/* Star core */}
      <span
        className={cn(
          'relative block h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:scale-150',
          isComplete ? 'bg-moon-glow' : 'bg-star-light animate-twinkle'
        )}
      />
      {/* Label, revealed on hover/focus only */}
      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-lg text-star-light opacity-0 transition-opacity duration-300 group-hover:opacity-90 group-focus-visible:opacity-90">
        {memory.label}
      </span>
    </motion.button>
  );
}
