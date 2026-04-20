import React, { useEffect, useRef } from 'react';

export function Cursor() {
  const dot      = useRef(null);
  const ring     = useRef(null);
  const canvas   = useRef(null);

  useEffect(() => {
    if (!dot.current || !ring.current || !canvas.current) return;

    // ── Canvas setup ──────────────────────────────────────────────────────────
    const cvs = canvas.current;
    const ctx = cvs.getContext('2d');
    let W = window.innerWidth, H = window.innerHeight;
    cvs.width = W; cvs.height = H;

    const resize = () => {
      W = window.innerWidth; H = window.innerHeight;
      cvs.width = W; cvs.height = H;
    };
    window.addEventListener('resize', resize);

    // ── State ─────────────────────────────────────────────────────────────────
    let mx = W / 2, my = H / 2;
    let rx = mx, ry = my;
    let alive = true;
    let raf;
    const petals = [];

    // ── Petal particle (interactive flower) ──────────────────────────────────
    function spawnPetals(x, y, count = 6) {
      for (let i = 0; i < count; i++) {
        const angle  = (Math.PI * 2 / count) * i + Math.random() * 0.4;
        const speed  = 0.8 + Math.random() * 1.4;
        const size   = 3 + Math.random() * 5;
        const hue    = 340 + Math.random() * 30; // rose/pink range
        petals.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          size,
          life: 1,
          decay: 0.022 + Math.random() * 0.018,
          hue,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.12,
        });
      }
    }

    // ── Cursor position helpers ───────────────────────────────────────────────
    const setPos = (el, x, y) => { el.style.left = `${x}px`; el.style.top = `${y}px`; };

    let lastSpawn = 0;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      setPos(dot.current, mx, my);

      // Spawn petals as cursor moves (throttled)
      const now = Date.now();
      if (now - lastSpawn > 60) {
        spawnPetals(mx, my, 3);
        lastSpawn = now;
      }
    };

    // Burst on click
    const onClick = (e) => { spawnPetals(e.clientX, e.clientY, 12); };

    // ── Cursor hover enlarge ──────────────────────────────────────────────────
    const onEnter = () => document.body.classList.add('ch');
    const onLeave = () => document.body.classList.remove('ch');

    const attachHover = () => {
      document.querySelectorAll('a,button,.svc-r,.tm,.cs-card,.pr-c,.proc-s,.job-row,.t-icon')
        .forEach((el) => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave); });
    };
    attachHover();

    // ── Animation loop ────────────────────────────────────────────────────────
    const tick = () => {
      if (!alive) return;

      // Smooth ring follow
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      if (ring.current) setPos(ring.current, rx, ry);

      // Draw petals
      ctx.clearRect(0, 0, W, H);

      for (let i = petals.length - 1; i >= 0; i--) {
        const p = petals[i];
        p.x  += p.vx;
        p.y  += p.vy;
        p.vy += 0.04; // gravity
        p.vx *= 0.97; // drag
        p.life -= p.decay;
        p.rotation += p.rotSpeed;

        if (p.life <= 0) { petals.splice(i, 1); continue; }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.life * 0.85;

        // Draw petal shape (ellipse rotated)
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.5, p.size, 0, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(0, -p.size * 0.3, 0, 0, 0, p.size);
        grad.addColorStop(0, `hsla(${p.hue}, 80%, 85%, 1)`);
        grad.addColorStop(1, `hsla(${p.hue}, 60%, 55%, 0)`);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.restore();
      }

      raf = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('click', onClick);
    tick();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('click', onClick);
      window.removeEventListener('resize', resize);
      document.body.classList.remove('ch');
    };
  }, []);

  return (
    <>
      {/* Flower petal canvas — sits above everything, pointer-events none */}
      <canvas
        ref={canvas}
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0, zIndex: 9000,
          pointerEvents: 'none',
        }}
      />
      <div id="cur"   ref={dot}  aria-hidden="true" />
      <div id="cur-r" ref={ring} aria-hidden="true" />
    </>
  );
}
