import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // Reset all revealed elements on route change so they animate fresh
    document.querySelectorAll('.rv.in').forEach((el) => el.classList.remove('in'));
    document.querySelectorAll('.dr.dr-in').forEach((el) => el.classList.remove('dr-in'));
    document.querySelectorAll('.tm-reveal.in').forEach((el) => el.classList.remove('in'));

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.08 }
    );

    // Scan immediately and keep scanning for dynamically rendered elements
    const scan = () => {
      document.querySelectorAll('.rv:not(.in)').forEach((el) => obs.observe(el));
      document.querySelectorAll('.tm-reveal:not(.in)').forEach((el) => obs.observe(el));
    };

    // Small delay to let the new page render first
    const t1 = setTimeout(scan, 50);
    const interval = setInterval(scan, 300);
    const t2 = setTimeout(() => clearInterval(interval), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(interval);
      obs.disconnect();
    };
  }, [location.pathname]);
}
