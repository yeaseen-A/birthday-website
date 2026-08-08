import { useCallback, useEffect, useState } from 'react';
import type { MemoryId } from '@/types/memory';

const STORAGE_KEY = 'birthday-site-progress';

function loadInitial(): MemoryId[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as MemoryId[]) : [];
  } catch {
    return [];
  }
}

/** Tracks which of the 9 memories have been opened, so the moon can react. */
export function useProgress(total: number) {
  const [completed, setCompleted] = useState<MemoryId[]>(loadInitial);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }, [completed]);

  const markComplete = useCallback((id: MemoryId) => {
    setCompleted((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const count = completed.length;
  const progress = total > 0 ? count / total : 0;
  const isComplete = count >= total;

  return { completed, markComplete, count, progress, isComplete };
}
