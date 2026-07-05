import React from 'react';

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="about-grid">
        <div className="about-portrait reveal">
          <div className="portrait-grid"></div>
          <div className="portrait-glow-orb"></div>
          <div className="portrait-overlay"></div>
          <div className="portrait-badge">KAELIX / EST. 2026</div>
        </div>
        <div className="about-text">
          <div className="eyebrow reveal">About Kaelix</div>
          <h2 className="big-title reveal" style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}>
            Storytellers first.<br />Engineers by necessity.
          </h2>
          <p className="reveal">
            KAELIX.AI was founded on a simple belief: the next generation of visual storytelling wouldn't be filmed — it would be generated. We build the workflows, prompt architectures, and creative direction that turn raw AI models into finished, broadcast-grade films.
          </p>
          <p className="reveal">
            Our mission is to give brands access to visuals once reserved for the biggest production budgets on earth — at the speed of thought. Our vision is a future where imagination is the only production constraint.
          </p>
        </div>
      </div>
    </section>
  );
}
