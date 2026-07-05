import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Check if touch device - do not run cursor on mobile touch interfaces
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let gx = mx;
    let gy = my;
    let animationFrameId = null;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
    };

    const updateGlow = () => {
      gx += (mx - gx) * 0.12;
      gy += (my - gy) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.left = `${gx}px`;
        glowRef.current.style.top = `${gy}px`;
      }

      animationFrameId = requestAnimationFrame(updateGlow);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isHoverable = target.closest('a, button, .proj-card, .tool-chip, .service-card');
      if (isHoverable && glowRef.current) {
        glowRef.current.style.width = '500px';
        glowRef.current.style.height = '500px';
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (!target) return;

      const isHoverable = target.closest('a, button, .proj-card, .tool-chip, .service-card');
      if (isHoverable && glowRef.current) {
        glowRef.current.style.width = '340px';
        glowRef.current.style.height = '340px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Start logic loop
    updateGlow();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef}></div>
      <div id="cursor-glow" ref={glowRef}></div>
    </>
  );
}
