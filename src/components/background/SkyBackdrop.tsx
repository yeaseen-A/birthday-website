import StarField from './StarField';
import Clouds from './Clouds';
import ShootingStars from './ShootingStars';

/**
 * The night sky itself: gradient + ambient stars + clouds + shooting
 * stars. Rendered once in App.tsx and kept mounted for the whole
 * session so the sky never "resets" between screens.
 */
export default function SkyBackdrop() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-night-950 via-night-900 to-night-700">
      <StarField />
      <Clouds />
      <ShootingStars />
    </div>
  );
}
