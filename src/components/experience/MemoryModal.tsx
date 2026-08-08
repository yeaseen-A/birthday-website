import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { MemoryId } from '@/types/memory';

import WelcomeMemory from './modals/WelcomeMemory';
import HowWeMetMemory from './modals/HowWeMetMemory';
import VoiceMemory from './modals/VoiceMemory';
import ReactionMemory from './modals/ReactionMemory';
import ReasonsMemory from './modals/ReasonsMemory';
import FunnyMemory from './modals/FunnyMemory';
import FutureMemory from './modals/FutureMemory';
import SongMemory from './modals/SongMemory';
import WishMemory from './modals/WishMemory';

const CONTENT_BY_ID: Record<MemoryId, () => JSX.Element> = {
  welcome: WelcomeMemory,
  'how-we-met': HowWeMetMemory,
  voice: VoiceMemory,
  reaction: ReactionMemory,
  reasons: ReasonsMemory,
  funny: FunnyMemory,
  future: FutureMemory,
  song: SongMemory,
  wish: WishMemory,
};

export default function MemoryModal({
  id,
  onClose,
}: {
  id: MemoryId;
  onClose: () => void;
}) {
  const Content = CONTENT_BY_ID[id];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-night-950/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Panel — shares layoutId with the star that opened it, so this
          reads as the camera pushing in toward that point in the sky */}
      <motion.div
        layoutId={`star-shell-${id}`}
        className="glass-panel relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-[2rem]"
        transition={{ type: 'spring', damping: 26, stiffness: 220 }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-night-950/50 text-star-light hover:bg-night-950/80"
        >
          <X size={18} />
        </button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="overflow-y-auto px-6 py-10 sm:px-10 sm:py-12"
        >
          <Content />
        </motion.div>
      </motion.div>
    </div>
  );
}
