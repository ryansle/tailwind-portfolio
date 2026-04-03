import { useEffect } from 'react';

// Utilities
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Types
import type { ReactNode } from 'react';

type SlideProps = {
  children: ReactNode;
  threshold?: number;
  delay?: number;
  duration?: number;
  distance?: number;
}

const SlideUpWhenVisible = (props: SlideProps) => {
  const {
    children,
    threshold = 0.35,
    delay = 0,
    duration = 0.48,
    distance = 24,
  } = props;

  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

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
      transition={{
        delay,
        duration: shouldReduceMotion ? 0.18 : duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : distance },
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpWhenVisible;
