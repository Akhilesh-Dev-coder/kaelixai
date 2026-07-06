import React from 'react';

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="about-grid">
        <div className="about-portrait reveal">
          <img 
            src="/images/user.png" 
            alt="Aaditya A Raj" 
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} 
          />
          <div className="portrait-grid" style={{ zIndex: 1 }}></div>
          <div className="portrait-overlay" style={{ zIndex: 2 }}></div>
          <div className="portrait-badge" style={{ zIndex: 3 }}>AADITYA A RAJ / FOUNDER</div>
        </div>
        <div className="about-text">
          <div className="eyebrow reveal">ABOUT KAELIX.AI</div>
          <h2 className="big-title reveal" style={{ fontSize: 'clamp(30px, 4vw, 52px)', lineHeight: 1.2 }}>
            We exist because great brands deserve better than average content.
          </h2>
          <div className="reveal" style={{ color: 'var(--text2)', marginTop: '24px', fontSize: '15px', lineHeight: '1.7' }}>
            <p style={{ marginBottom: '16px' }}>
              Most agencies look good on the outside.<br />
              Inside it's slow, expensive, and nobody really owns your vision.<br />
              <strong>KAELIX was built to fix exactly that.</strong>
            </p>
            <p style={{ marginBottom: '16px' }}>
              Four years producing brand content across Qatar, Kuwait, and India. Real brands. Real pressure. Real results. <br />
              But the same wall kept appearing — <br />
              Great ideas. Slow production. Massive budgets. Average output. <br />
              Then AI changed everything.
            </p>
            <p style={{ marginBottom: '16px' }}>
              What if real marketing strategy met cinematic AI production?<br />
              That's KAELIX. Built from frustration. Driven by obsession.
            </p>
          </div>
          
          <div className="reveal" style={{ marginTop: '32px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
            <div style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 'bold', color: '#fff' }}>Aaditya A Raj</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Founder & Creative Director, KAELIX.AI</div>
          </div>

          <p className="reveal" style={{ fontStyle: 'italic', marginTop: '24px', color: 'var(--accent)', fontSize: '15px' }}>
            "We think like marketers. We produce like studios. We move like startups."
          </p>

          <div className="reveal" style={{ marginTop: '32px' }}>
            <a href="#contact" className="btn btn-primary">Start Your Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}
