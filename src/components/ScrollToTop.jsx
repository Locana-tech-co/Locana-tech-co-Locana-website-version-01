import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the page to render then scroll to the hash target
      const id = hash.replace('#', '');
      const attempt = (tries = 0) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (tries < 10) {
          setTimeout(() => attempt(tries + 1), 100);
        }
      };
      attempt();
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}
