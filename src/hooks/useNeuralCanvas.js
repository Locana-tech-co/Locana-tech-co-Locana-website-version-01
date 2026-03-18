import { useEffect } from 'react';

export function useNeuralCanvas(ref, sectionId, { nodeCount = 75, speed = 0.38, linkDist = 170, glowR = 6.5, sparks = false } = {}) {
  useEffect(() => {
    if (!ref.current) return;
    const section = document.getElementById(sectionId);
    if (!section) return;

    const ctx = ref.current.getContext('2d');
    let W, H, nodes = [], sparksArr = [], raf, active = true;

    const resize  = () => { W = ref.current.width = section.offsetWidth; H = ref.current.height = section.offsetHeight; };
    const mkNodes = () => { nodes = Array.from({ length: nodeCount }, () => ({ x: Math.random()*W, y: Math.random()*H, vx: (Math.random()-.5)*speed, vy: (Math.random()-.5)*speed, r: Math.random()*2+.5, ph: Math.random()*Math.PI*2, ps: .015+Math.random()*.02 })); };

    const drawSparks = () => {
      sparksArr = sparksArr.filter((s) => s.life > 0);
      sparksArr.forEach((s) => {
        s.t = Math.min(s.t+s.spd, 1); s.life = 1-s.t;
        const px = s.ax+(s.bx-s.ax)*s.t, py = s.ay+(s.by-s.ay)*s.t;
        const g = ctx.createRadialGradient(px,py,0,px,py,10);
        g.addColorStop(0, `rgba(255,185,210,${s.life*.9})`); g.addColorStop(1, 'rgba(196,120,138,0)');
        ctx.beginPath(); ctx.arc(px,py,10, 0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
        ctx.beginPath(); ctx.arc(px,py,2.2,0,Math.PI*2); ctx.fillStyle=`rgba(255,225,238,${s.life})`; ctx.fill();
      });
    };

    const frame = () => {
      if (!active) return;
      ctx.clearRect(0,0,W,H);
      nodes.forEach((n) => { n.x+=n.vx; n.y+=n.vy; n.ph+=n.ps; if(n.x<0||n.x>W)n.vx*=-1; if(n.y<0||n.y>H)n.vy*=-1; });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i+1; j < nodes.length; j++) {
          const a=nodes[i], b=nodes[j], d=Math.hypot(a.x-b.x, a.y-b.y);
          if (d >= linkDist) continue;
          if (sparks && Math.random() < .0005 && d < 82) {
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.strokeStyle='rgba(196,120,138,.85)'; ctx.lineWidth=1.1; ctx.stroke();
            sparksArr.push({ ax:a.x, ay:a.y, bx:b.x, by:b.y, t:0, spd:.032+Math.random()*.05, life:1 });
          } else {
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.strokeStyle=`rgba(196,120,138,${(1-d/linkDist)*.32})`; ctx.lineWidth=.65; ctx.stroke();
          }
        }
      }

      if (sparks) drawSparks();

      nodes.forEach((n) => {
        const p=.5+.5*Math.sin(n.ph), g=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r*glowR);
        g.addColorStop(0, `rgba(196,120,138,${.15*p})`); g.addColorStop(1, 'rgba(196,120,138,0)');
        ctx.beginPath(); ctx.arc(n.x,n.y,n.r*glowR,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
        ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2); ctx.fillStyle=`rgba(220,148,168,${.55+.45*p})`; ctx.fill();
      });
      raf = requestAnimationFrame(frame);
    };

    const onResize = () => { resize(); mkNodes(); };
    resize(); mkNodes(); frame();
    window.addEventListener('resize', onResize);
    return () => { active = false; cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, [nodeCount, speed, linkDist, glowR, sparks, sectionId]); // eslint-disable-line
}
