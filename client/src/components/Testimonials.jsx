import React from 'react';

const testimonialsList = [
  {
    quote: "KAELIX didn't just make us a video — they made us a world we didn't know we could afford to build.",
    author: "Mira Chen",
    role: "CMO, Aurum Watches"
  },
  {
    quote: "The turnaround was absurd. Three concepts, fully rendered, in the time our old agency took to storyboard one.",
    author: "Julian Ortiz",
    role: "Founder, Volta EV"
  },
  {
    quote: "It felt less like hiring a vendor and more like plugging into a creative operating system.",
    author: "Sofia Nakamura",
    role: "Brand Director, Noir Atelier"
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
              <div className="testi-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <div className="testi-quote">"{t.quote}"</div>
            </div>
            <div className="testi-author">
              <b>{t.author}</b> — {t.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
