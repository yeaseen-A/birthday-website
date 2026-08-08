import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Star from './Star';
import MemoryModal from './MemoryModal';
import Moon from '@/components/background/Moon';
import ProgressIndicator from '@/components/ui/ProgressIndicator';
import { MEMORY_DEFINITIONS } from '@/data/content';
import type { MemoryId } from '@/types/memory';

export default function NightSky({
  completed,
  onMemoryOpened,
  count,
  progress,
  isComplete,
  onOpenMoon,
}: {
  completed: MemoryId[];
  onMemoryOpened: (id: MemoryId) => void;
  count: number;
  progress: number;
  isComplete: boolean;
  onOpenMoon: () => void;
}) {
  const [activeId, setActiveId] = useState<MemoryId | null>(null);

  const handleOpen = (id: MemoryId) => {
    setActiveId(id);
    onMemoryOpened(id);
  };

  return (
    <motion.div
      className="relative min-h-screen w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      transition={{ duration: 1 }}
    >
      <ProgressIndicator count={count} total={MEMORY_DEFINITIONS.length} />
      <Moon progress={progress} isComplete={isComplete} onOpen={onOpenMoon} />

      <div className="relative h-screen w-full">
        {MEMORY_DEFINITIONS.map((memory) => (
          <Star
            key={memory.id}
            memory={memory}
            isComplete={completed.includes(memory.id)}
            onOpen={handleOpen}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeId && <MemoryModal key={activeId} id={activeId} onClose={() => setActiveId(null)} />}
      </AnimatePresence>
    </motion.div>
  );
}
