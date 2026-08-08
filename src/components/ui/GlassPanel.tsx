import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export default function GlassPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('glass-panel rounded-3xl shadow-2xl shadow-black/40', className)}>
      {children}
    </div>
  );
}
