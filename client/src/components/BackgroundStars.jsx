import React, { useEffect, useRef } from 'react';

export default function BackgroundStars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars = [];
    let animationFrameId = null;

    const resizeStars = () => {
      canvas.width = window.innerWidth;
      // Use document element height to cover entire page height
      canvas.height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
      
      stars = [];
      const count = window.innerWidth < 768 ? 70 : 160;
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.3 + 0.2,
          s: Math.random() * 0.4 + 0.05,
          o: Math.random() * 0.6 + 0.2,
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.001;
      
      stars.forEach((st) => {
        const flicker = 0.5 + 0.5 * Math.sin(t * st.s * 3 + st.x);
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${st.o * flicker})`;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(drawStars);
    };

    // Initial setup
    resizeStars();
    drawStars();

    // Resize listener (re-create stars to fit new height/width)
    window.addEventListener('resize', resizeStars);

    // Watch for document height changes (e.g., when components load or show/hide)
    const resizeObserver = new ResizeObserver(() => {
      resizeStars();
    });
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener('resize', resizeStars);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="bg-stars" ref={canvasRef}></canvas>;
}
