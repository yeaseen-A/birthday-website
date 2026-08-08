import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MusicToggle({
  isMuted,
  onToggle,
}: {
  isMuted: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="glass-panel fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-star-light"
    >
      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </motion.button>
  );
}
