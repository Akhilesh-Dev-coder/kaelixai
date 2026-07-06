import React, { useRef } from 'react';

const servicesList = [
  {
    title: 'AI Commercial Videos',
    desc: 'Your brand deserves a commercial that actually looks like a commercial. We create high-end video ads with cinematic visuals, real-feeling characters, and professional direction, the kind of quality that used to cost a fortune. Now it doesn\'t have to.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4M10 8l5 3-5 3V8z" fill="rgba(139, 92, 246, 0.2)" />
      </svg>
    )
  },
  {
    title: 'AI Product Ads',
    desc: 'People scroll past hundreds of ads every day. Yours won\'t be one of them. We build product ads so visually sharp and unexpected that your audience stops, watches, and remembers, exactly what a great ad is supposed to do.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" />
        <path d="M3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    )
  },
  {
    title: 'AI Fashion Campaigns',
    desc: 'Your collection deserves to be seen the right way. Whether you run a clothing label, a boutique, or a fashion studio, we create campaign visuals that make people stop, look twice, and remember your brand. No big production budget needed. Just your vision, and we\'ll bring it to life in a way that actually sells.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    title: 'AI Cinematic Films',
    desc: 'Some brands have a story worth telling properly. We take your idea from script to final cut, with real narrative, sound design, and visuals that feel like cinema. For the brands that want more than just another ad.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
        <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
      </svg>
    )
  },
  {
    title: 'AI UGC Videos',
    desc: 'The content your audience already trusts, done right. We produce natural, platform-ready videos that feel like real people talking about your brand, because that\'s exactly what converts. Built for Reels, TikToks, and YouTube without a single shoot day.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    )
  },
  {
    title: 'AI Image Generation',
    desc: 'Every brand needs visuals that look like they mean business. We create high-resolution images, product shots, hero creatives, and social media assets, all built around your brand, ready to use, and impossible to scroll past.',
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
    desc: 'Movement done right makes your brand unforgettable. From logo animations to full motion toolkits, we design graphics that bring energy and consistency to everything your brand puts out, across every screen and platform.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    )
  },
  {
    title: 'AI Brand Content',
    desc: 'Posting consistently is hard. Looking good while doing it is harder. We build and manage your brand\'s visual content so that every post, every campaign, and every platform tells the same story, one that people actually connect with.',
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
        The only AI studio<br />your brand will ever need.
      </h2>
      <div className="services-grid reveal" id="services-grid">
        {servicesList.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
