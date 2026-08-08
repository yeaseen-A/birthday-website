interface CloudSpec {
  top: string;
  scale: number;
  opacity: number;
  duration: string;
  delay: string;
}

const CLOUDS: CloudSpec[] = [
  { top: '12%', scale: 1.4, opacity: 0.05, duration: '110s', delay: '0s' },
  { top: '35%', scale: 1, opacity: 0.04, duration: '140s', delay: '-40s' },
  { top: '60%', scale: 1.8, opacity: 0.035, duration: '160s', delay: '-90s' },
  { top: '78%', scale: 1.1, opacity: 0.045, duration: '130s', delay: '-20s' },
];

/** Very slow, very faint drifting cloud shapes — pure atmosphere, no detail needed. */
export default function Clouds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {CLOUDS.map((cloud, i) => (
        <div
          key={i}
          className="absolute animate-drift"
          style={{
            top: cloud.top,
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
          }}
        >
          <div
            className="h-24 w-80 rounded-full bg-white blur-3xl"
            style={{ opacity: cloud.opacity, transform: `scale(${cloud.scale})` }}
          />
        </div>
      ))}
    </div>
  );
}
