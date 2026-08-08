import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'ghost';
}

export default function Button({ className, variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        'rounded-full px-8 py-3 text-2xl tracking-wide transition-shadow duration-300',
        variant === 'primary' &&
          'bg-moon-glow/90 text-night-950 shadow-[0_0_25px_rgba(255,233,179,0.45)] hover:shadow-[0_0_40px_rgba(255,233,179,0.65)]',
        variant === 'ghost' &&
          'glass-panel text-star-light hover:border-star-light/40',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}