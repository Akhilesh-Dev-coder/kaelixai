import React, { useRef } from 'react';

const servicesList = [
  {
    title: 'AI Commercial Videos',
    desc: 'High-end commercial videos with cinematic lighting, photorealistic characters, and advanced art direction for premium brands.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4M10 8l5 3-5 3V8z" fill="rgba(139, 92, 246, 0.2)" />
      </svg>
    )
  },
  {
    title: 'AI Product Ads',
    desc: 'Attention-grabbing advertising spots that put your products in fantastical, impossible environments at the speed of thought.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
        <path d="M3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    )
  },
  {
    title: 'AI Fashion Campaigns',
    desc: 'Avant-garde visual lookbooks and cinematic runaways created using generative models for next-gen fashion lines.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    title: 'AI Cinematic Films',
    desc: 'Full-scale storytelling with script-to-screen production, orchestral audio design, and custom visual effects orchestration.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
        <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
      </svg>
    )
  },
  {
    title: 'AI UGC Videos',
    desc: 'Highly relatable, conversion-oriented content created with high-fidelity digital avatars and natural voice synthesizer models.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    )
  },
  {
    title: 'AI Image Generation',
    desc: 'Ultra-high resolution brand assets, key visuals, concept designs, and social media media packages.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    )
  },
  {
    title: 'AI Motion Graphics',
    desc: 'Dynamic titles, stylized brand logos, and generative particle systems tailored to your brand guidelines.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    )
  },
  {
    title: 'AI Brand Content',
    desc: 'Continuous visual storytelling and brand worlds scaled across platforms for modern digital footprints.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  }
];

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mx', `${x}px`);
    cardRef.current.style.setProperty('--my', `${y}px`);
  };

  const formattedNum = String(index + 1).padStart(2, '0');

  return (
    <div 
      className="service-card" 
      ref={cardRef} 
      onMouseMove={handleMouseMove}
    >
      <div className="service-header">
        <div className="service-icon">{service.icon}</div>
        <div className="service-num">{formattedNum}</div>
      </div>
      <div className="service-content">
        <div className="service-title">{service.title}</div>
        <div className="service-desc">{service.desc}</div>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="section" id="services">
      <div className="eyebrow reveal">Capabilities</div>
      <h2 className="big-title reveal" style={{ fontSize: 'clamp(32px, 5vw, 64px)', marginBottom: '56px', maxWidth: '760px' }}>
        A full creative<br />studio, powered by AI.
      </h2>
      <div className="services-grid reveal" id="services-grid">
        {servicesList.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
