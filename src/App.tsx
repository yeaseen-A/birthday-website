import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SkyBackdrop from '@/components/background/SkyBackdrop';
import HomeScreen from '@/components/home/HomeScreen';
import NightSky from '@/components/experience/NightSky';
import MoonFinale from '@/components/finale/MoonFinale';
import MusicToggle from '@/components/ui/MusicToggle';
import { useBackgroundMusic } from '@/hooks/useBackgroundMusic';
import { useProgress } from '@/hooks/useProgress';
import { MEMORY_DEFINITIONS } from '@/data/content';
import type { Screen } from '@/types/memory';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const music = useBackgroundMusic();
  const { completed, markComplete, count, progress, isComplete } = useProgress(
    MEMORY_DEFINITIONS.length
  );

  const handleBegin = () => {
    music.start();
    setScreen('sky');
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <SkyBackdrop />

      <AnimatePresence mode="wait">
        {screen === 'home' && <HomeScreen key="home" onBegin={handleBegin} />}

        {screen === 'sky' && (
          <NightSky
            key="sky"
            completed={completed}
            onMemoryOpened={markComplete}
            count={count}
            progress={progress}
            isComplete={isComplete}
            onOpenMoon={() => setScreen('finale')}
          />
        )}

        {screen === 'finale' && <MoonFinale key="finale" />}
      </AnimatePresence>

      {screen !== 'home' && <MusicToggle isMuted={music.isMuted} onToggle={music.toggleMute} />}
    </div>
  );
}
