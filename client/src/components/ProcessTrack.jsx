import React from 'react';

const steps = [
  { title: 'Strategy', desc: 'One call. Your brand, audience, and goal - mapped and ready.' },
  { title: 'Script', desc: 'Shot-by-shot, written for AI. You approve before we touch anything.' },
  { title: 'Creative Direction', desc: 'Style, mood, color every visual decision locked before production.' },
  { title: 'AI Production', desc: 'Multiple AI models running at once. Weeks of work, done in days.' },
  { title: 'Editing', desc: 'Graded, sound-designed, and timed until it feels premium.' },
  { title: 'Delivery', desc: 'Every format. Every platform. Launch-ready from day one.' },
];

export default function ProcessTrack() {
  return (
    <section className="section" id="process">
      <div className="eyebrow reveal">Process</div>
      <h2 className="big-title reveal" style={{ fontSize: 'clamp(32px, 5vw, 64px)', marginBottom: '20px' }}>
        From idea to live campaign in days, not months.
      </h2>
      <p className="sub reveal" style={{ marginBottom: '20px' }}>
        Six deliberate stages, engineered for speed without sacrificing craft.
      </p>
      
      <div className="process-track" id="process-track">
        {steps.map((step, i) => {
          const formattedNum = String(i + 1).padStart(2, '0');
          return (
            <div key={i} className="process-step reveal">
              <div className="process-num">{formattedNum}</div>
              <div>
                <div className="process-title">{step.title}</div>
                <div className="process-desc">{step.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
