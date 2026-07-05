import React, { useEffect, useRef } from 'react';

export default function CtaFog() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let fogBlobs = [];
    let animationFrameId = null;

    const resizeFog = () => {
      // Fit to container's offset size
      canvas.width = canvas.offsetWidth || window.innerWidth;
      canvas.height = canvas.offsetHeight || 400;
    };

    const initFog = () => {
      resizeFog();
      fogBlobs = Array.from({ length: 5 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 200 + Math.random() * 220,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const drawFog = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      fogBlobs.forEach((b) => {
        b.x += b.dx;
        b.y += b.dy;
        
        // Bounce off canvas boundaries
        if (b.x < -b.r || b.x > canvas.width + b.r) b.dx *= -1;
        if (b.y < -b.r || b.y > canvas.height + b.r) b.dy *= -1;
        
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, 'rgba(139, 92, 246, 0.16)');
        g.addColorStop(1, 'rgba(139, 92, 246, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(drawFog);
    };

    initFog();
    drawFog();

    window.addEventListener('resize', resizeFog);

    return () => {
      window.removeEventListener('resize', resizeFog);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="fog-canvas" ref={canvasRef}></canvas>;
}
