import { useMemo } from 'react';

interface AmbientStar {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

function generateStars(count: number): AmbientStar[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 1.6 + 0.6,
    duration: Math.random() * 2.5 + 2.2,
    delay: Math.random() * 4,
  }));
}

/**
 * Purely decorative background stars — distinct from the 9 clickable
 * memory stars rendered on top in NightSky.tsx.
 */
export default function StarField({ count = 140 }: { count?: number }) {
  const stars = useMemo(() => generateStars(count), [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-star-light animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
