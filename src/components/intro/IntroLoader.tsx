'use client';

import styles from './IntroLoader.module.scss';

const LOADING_STEPS = [
  'Loading world',
  'Spawning coins',
  'Ready!',
] as const;

interface IntroLoaderProps {
  stepIndex: 0 | 1 | 2;
}

export const IntroLoader = ({ stepIndex }: IntroLoaderProps) => {
  const currentStep = LOADING_STEPS[stepIndex];
  const progress = (stepIndex + 1) * 33.33;
  const showDots = stepIndex < 2;

  return (
    <div className={styles.loader}>
      <div className={styles.card}>
        <div className={styles.title}>WORLD 1-1</div>
        
        <div className={styles.stats}>
          <span className={styles.stat}>PLAYER × 3</span>
          <span className={styles.stat}>🪙 × {Math.floor(progress)}</span>
        </div>
        
        <div className={styles.message}>
          {currentStep}{showDots && '...'}
        </div>
      </div>
    </div>
  );
};