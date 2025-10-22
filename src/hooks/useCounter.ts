import { useEffect, useState } from 'react';

interface UseCounterOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
}

export function useCounter(
  isInView: boolean,
  { end, duration = 2000, start = 0, decimals = 0 }: UseCounterOptions
): number {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = start + (end - start) * easeOut;
      setCount(Number(currentCount.toFixed(decimals)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration, start, decimals]);

  return count;
}

