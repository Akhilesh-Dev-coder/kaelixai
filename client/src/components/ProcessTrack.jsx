import React from 'react';

const steps = [
  { title: 'Strategy', desc: 'Defining brand voice, audience, and the visual world the film will live in.' },
  { title: 'Script', desc: 'Turning strategy into a shot-by-shot narrative built for AI generation.' },
  { title: 'Prompt Engineering', desc: 'Crafting the precise language that steers each model toward the shot.' },
  { title: 'AI Generation', desc: 'Producing footage across multiple models for coverage and choice.' },
  { title: 'Editing', desc: 'Grading, sound design, and assembly into a finished cinematic piece.' },
  { title: 'Delivery', desc: 'Exporting every format your campaign needs, on schedule.' },
];

export default function ProcessTrack() {
  return (
    <section className="section" id="process">
      <div className="eyebrow reveal">Process</div>
      <h2 className="big-title reveal" style={{ fontSize: 'clamp(32px, 5vw, 64px)', marginBottom: '20px' }}>
        From brief to broadcast.
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
