export default function ProgressIndicator({ count, total }: { count: number; total: number }) {
  return (
    <div className="glass-panel fixed left-6 top-6 z-50 rounded-full px-5 py-2 text-xl text-star-light/90">
      {count} / {total} memories found
    </div>
  );
}
