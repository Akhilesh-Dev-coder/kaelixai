import React from 'react';

const testimonialsList = [
  {
    quote: "Our Diwali ad looked better than anything we'd ever put out. KAELIX delivered fast and nailed it first try.",
    author: "Muhammed Shebeer",
    role: "Co-Founder, Feloc Peanut Butter",
    link: "https://www.feloc.in/",
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', fontFamily: 'system-ui, sans-serif' }}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <circle cx="12" cy="8" r="4" />
          <circle cx="12" cy="16" r="4" />
          <path d="M8 8a4 4 0 018 0v8a4 4 0 01-8 0z" opacity="0.3" />
        </svg>
        <span style={{ fontWeight: '800', letterSpacing: '0.1em', fontSize: '12px', color: '#fff' }}>FELOC</span>
      </div>
    )
  },
  {
    quote: "Everyone loves it. Great job. Can't wait to see the other videos.",
    author: "Imraan Assim",
    role: "Eternal Virtue Marketing",
    link: "https://eternalvirtue.org/",
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a78bfa', fontFamily: 'serif' }}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span style={{ fontWeight: '400', letterSpacing: '0.15em', fontSize: '11px', color: '#fff', textTransform: 'uppercase' }}>EV MKTG</span>
      </div>
    )
  },
  {
    quote: "It looks terrific — great job!",
    author: "Riyas",
    role: "Bombae Social",
    link: "https://www.bombaesocial.ca/",
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ec4899', fontFamily: 'system-ui, sans-serif' }}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 2.224.727 4.28 1.96 5.96L2.04 21.96a.5.5 0 00.6.6l4-1.92c1.68 1.233 3.736 1.96 5.96 1.96 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
        <span style={{ fontWeight: '900', letterSpacing: '0.05em', fontSize: '12px', color: '#fff' }}>BOMBAE</span>
      </div>
    )
  },
  {
    quote: "The roof looked so real I couldn't tell it was AI. That's exactly what we wanted.",
    author: "Ansif",
    role: "Creative Head, Luxume Roofing",
    link: "https://www.luxume.in/",
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontFamily: 'system-ui, sans-serif' }}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12l9-9 9 9M5 10v10h14V10" />
        </svg>
        <span style={{ fontWeight: '800', letterSpacing: '0.1em', fontSize: '12px', color: '#fff' }}>LUXUME</span>
      </div>
    )
  }
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="eyebrow reveal">Client Words</div>
      <h2 className="big-title reveal" style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: '50px' }}>
        Trusted by ambitious brands.
      </h2>
      <div className="testi-wrap" id="testi-wrap">
        {testimonialsList.map((t, index) => (
          <div key={index} className="testi-card reveal">
            <div className="quote-mark">”</div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div className="testi-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                {t.logo}
              </div>
              <div className="testi-quote">"{t.quote}"</div>
            </div>
            <div className="testi-author" style={{ marginTop: '24px' }}>
              <b>{t.author}</b> —{' '}
              <a 
                href={t.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--accent)', textDecoration: 'none' }}
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                {t.role}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
