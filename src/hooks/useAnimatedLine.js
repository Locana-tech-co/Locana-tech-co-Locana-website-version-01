import { useEffect } from 'react';

// Animated Line — SVG path draws itself when scrolled into view
export function useAnimatedLine(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const paths = ref.current.querySelectorAll('.anim-path');
    paths.forEach((path) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray  = len;
      path.style.strokeDashoffset = len;
    });

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          paths.forEach((path, i) => {
            path.style.transition = `stroke-dashoffset 1.8s cubic-bezier(.16,1,.3,1) ${i * 0.2}s`;
            path.style.strokeDashoffset = '0';
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
}
