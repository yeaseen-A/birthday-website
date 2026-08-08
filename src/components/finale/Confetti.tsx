import { useMemo } from 'react';
import { motion } from 'framer-motion';

const COLORS = ['#ffe9b3', '#ffc9d6', '#fef9e7', '#ffb4c6'];

interface Piece {
  id: number;
  left: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

function generatePieces(count: number): Piece[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    color: COLORS[id % COLORS.length],
    size: Math.random() * 6 + 5,
    duration: Math.random() * 2 + 3,
    delay: Math.random() * 0.8,
    rotation: Math.random() * 360,
  }));
}

/** A single gentle confetti burst — only ever shown once, at the finale. */
export default function Confetti() {
  const pieces = useMemo(() => generatePieces(70), []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((piece) => (
        <motion.span
          key={piece.id}
          className="absolute top-[-5%] rounded-sm"
          style={{
            left: `${piece.left}%`,
            width: piece.size,
            height: piece.size * 0.4,
            backgroundColor: piece.color,
          }}
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{ y: '110vh', opacity: [1, 1, 0], rotate: piece.rotation }}
          transition={{ duration: piece.duration, delay: piece.delay, ease: 'easeIn' }}
        />
      ))}
    </div>
  );
}
