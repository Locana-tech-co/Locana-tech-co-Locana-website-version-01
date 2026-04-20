import { useEffect } from 'react';

// DiagonalScrollFade — elements fade + slide in diagonally on scroll
export function useDiagonalReveal(containerRef, selector = '.dr') {
  useEffect(() => {
    if (!containerRef.current) return;
    const els = containerRef.current.querySelectorAll(selector);

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('dr-in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [selector]);
}
