import React, { useState, useEffect } from 'react';
import { scrollLock } from '../utils/scrollLock';

export function Loader() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    scrollLock.lock();
    const hide = () => { setHidden(true); scrollLock.unlock(); };
    Promise.race([
      document.fonts?.ready ?? Promise.resolve(),
      new Promise((r) => setTimeout(r, 1400)),
    ]).then(hide).catch(hide);
  }, []);
  return (
    <div id="loader" className={hidden ? 'done' : ''} aria-label="Loading" aria-live="polite">
      <div className="atom">
        <div className="atom-core" />
        <div className="orbit" /><div className="orbit" /><div className="orbit" />
      </div>
      <span className="loader-name">Locana</span>
    </div>
  );
}
