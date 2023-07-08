import { useEffect } from 'react';

// Utilities
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Types
import type { ReactNode } from 'react';

type SlideProps = {
  children: ReactNode;
  threshold?: number;
  delay?: number;
  duration?: number;
}

const SlideUpWhenVisible = (props: SlideProps) => {
  const {
    children,
    threshold = 0.35,
    delay = 0,
    duration = 0.4
  } = props;

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      transition={{ delay, duration }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpWhenVisible;
