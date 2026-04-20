import React, { useEffect, useRef } from 'react';

// ── AmbientFX ─────────────────────────────────────────────────────────────────
// Subtle ambient blobs + grain texture
export function AmbientFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    let W, H, raf, alive = true;

    // ── Ambient blobs (very subtle) ───────────────────────────────────────────
    const blobs = [
      { x: 0.15, y: 0.25, r: 0.38, hue: 330, speed: 0.00018, phase: 0 },
      { x: 0.80, y: 0.15, r: 0.32, hue: 220, speed: 0.00022, phase: 1.2 },
      { x: 0.50, y: 0.75, r: 0.42, hue: 280, speed: 0.00015, phase: 2.4 },
    ];

    const resize = () => {
      W = cvs.width  = window.innerWidth;
      H = cvs.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const frame = (t) => {
      if (!alive) return;
      ctx.clearRect(0, 0, W, H);

      // ── Draw ambient blobs ─────────────────────────────────────────────────
      blobs.forEach((b) => {
        const pulse = 0.85 + 0.15 * Math.sin(t * b.speed * 1000 + b.phase);
        const bx = b.x * W + Math.sin(t * b.speed * 700 + b.phase) * W * 0.06;
        const by = b.y * H + Math.cos(t * b.speed * 900 + b.phase) * H * 0.05;
        const br = b.r * Math.min(W, H) * pulse;

        const g = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        g.addColorStop(0,   `hsla(${b.hue}, 55%, 45%, 0.04)`);
        g.addColorStop(0.5, `hsla(${b.hue}, 45%, 35%, 0.02)`);
        g.addColorStop(1,   `hsla(${b.hue}, 40%, 25%, 0)`);
        ctx.beginPath();
        ctx.arc(bx, by, br, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => { alive = false; cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <>
      {/* Ambient blobs canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'fixed', inset: 0, zIndex: 0,
          pointerEvents: 'none',
          mixBlendMode: 'screen',
          opacity: 0.35,
        }}
      />

      {/* SpectraNoise — animated SVG grain overlay */}
      <div aria-hidden="true" className="spectra-noise" />

      {/* Noise overlay — subtle static texture */}
      <div aria-hidden="true" className="noise-overlay" />
    </>
  );
}
