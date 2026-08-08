import { motion } from 'framer-motion';
import HandwrittenTitle from './HandwrittenTitle';
import Button from '@/components/ui/Button';
import { HOME_CONTENT } from '@/data/content';

export default function HomeScreen({ onBegin }: { onBegin: () => void }) {
  return (
    <motion.div
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      transition={{ duration: 1.2 }}
    >
      <HandwrittenTitle text={HOME_CONTENT.title} />

      <motion.p
        className="mt-6 max-w-md whitespace-pre-line text-2xl leading-relaxed text-star-light/80 sm:text-3xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 1 }}
      >
        {HOME_CONTENT.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.6, duration: 0.8 }}
        className="mt-10"
      >
        <Button onClick={onBegin}>{HOME_CONTENT.beginLabel}</Button>
      </motion.div>
    </motion.div>
  );
}
