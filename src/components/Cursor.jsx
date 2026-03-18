import React, { useEffect, useRef } from 'react';

export function Cursor() {
  const dot = useRef(null), ring = useRef(null);
  useEffect(() => {
    if (!dot.current || !ring.current) return;
    let m={x:0,y:0}, r={x:0,y:0}, raf, alive=true;
    const set  = (el,x,y) => { el.style.left=`x`+'px'; el.style.top=`y`+'px'; el.style.left=`${x}px`; el.style.top=`${y}px`;};
    const move = (e) => { m.x=e.clientX; m.y=e.clientY; set(dot.current, m.x, m.y); };
    const tick = () => {
      if (!alive) return;
      r.x += (m.x-r.x)*.11; r.y += (m.y-r.y)*.11;
      if (ring.current) set(ring.current, r.x, r.y);
      raf = requestAnimationFrame(tick);
    };
    const on  = () => document.body.classList.add('ch');
    const off = () => document.body.classList.remove('ch');
    const els = document.querySelectorAll('a,button,.svc-r,.tm,.prod-c,.pr-c,.proc-s,.job-row,.t-icon');
    els.forEach((el) => { el.addEventListener('mouseenter', on); el.addEventListener('mouseleave', off); });
    document.addEventListener('mousemove', move);
    tick();
    return () => {
      alive = false; cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', move);
      els.forEach((el) => { el.removeEventListener('mouseenter', on); el.removeEventListener('mouseleave', off); });
      document.body.classList.remove('ch');
    };
  }, []);
  return <><div id="cur" ref={dot} aria-hidden="true" /><div id="cur-r" ref={ring} aria-hidden="true" /></>;
}
