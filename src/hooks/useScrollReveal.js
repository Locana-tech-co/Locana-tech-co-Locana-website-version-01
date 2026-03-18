import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    const scan = () => document.querySelectorAll('.rv:not(.in)').forEach((el) => obs.observe(el));
    scan();
    const interval = setInterval(scan, 300);
    const timeout  = setTimeout(() => clearInterval(interval), 2500);
    return () => { clearInterval(interval); clearTimeout(timeout); obs.disconnect(); };
  }, []);
}
