export const scrollLock = (() => {
  let n = 0;
  return {
    lock:   () => { if (++n === 1) document.body.style.overflow = 'hidden'; },
    unlock: () => { if (--n <= 0) { n = 0; document.body.style.overflow = ''; } },
  };
})();
