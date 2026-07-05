import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statsList = [
  { target: '150+', label: 'Projects Delivered' },
  { target: '20M+', label: 'Views Generated' },
  { target: '30+', label: 'Global Clients' },
  { target: '99%', label: 'Client Satisfaction' }
];

function StatCard({ target, label }) {
  const numRef = useRef(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const num = parseFloat(target);
    const suffix = target.replace(/[0-9.]/g, '');

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          let obj = { v: 0 };
          gsap.to(obj, {
            v: num,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => {
              if (el) {
                el.textContent = (num % 1 === 0 ? Math.floor(obj.v) : obj.v.toFixed(1)) + suffix;
              }
            }
          });
        }
      });
    }, el);

    return () => ctx.revert();
  }, [target]);

  return (
    <div className="stat-card glass reveal">
      <div className="stat-num" ref={numRef}>0</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatsGrid() {
  return (
    <section className="section" style={{ minHeight: '70vh' }}>
      <div className="stats-grid" id="stats-grid">
        {statsList.map((stat, index) => (
          <StatCard key={index} target={stat.target} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
