import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import cinematic generated assets
import aurumWatchesImg from '../assets/aurum_watches.png';
import voltaEvImg from '../assets/volta_ev.png';
import noirAtelierImg from '../assets/noir_atelier.png';
import haloAudioImg from '../assets/halo_audio.png';
import echoesOfMarsImg from '../assets/echoes_of_mars.png';
import nyxProtocolImg from '../assets/nyx_protocol.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { cat: 'Luxury Brand', title: 'Aurum Watches — Timeless', tools: 'Runway · Kling · ElevenLabs', img: aurumWatchesImg, c1: '#241333', c2: '#0a0510' },
  { cat: 'Automotive', title: 'Volta EV — Silent Velocity', tools: 'Veo · Luma · Flux', img: voltaEvImg, c1: '#1c1030', c2: '#07040d' },
  { cat: 'Fashion', title: 'Noir Atelier — SS26', tools: 'Midjourney · Runway', img: noirAtelierImg, c1: '#2a1440', c2: '#0a0512' },
  { cat: 'Product Launch', title: 'Halo Audio — First Listen', tools: 'Kling · ElevenLabs', img: haloAudioImg, c1: '#20112e', c2: '#08050c' },
  { cat: 'Cinematic AI', title: 'Echoes of Mars', tools: 'Veo · OpenAI · Flux', img: echoesOfMarsImg, c1: '#2e1548', c2: '#0b0512' },
  { cat: 'Gaming', title: 'Nyx Protocol — Reveal Trailer', tools: 'Runway · Luma', img: nyxProtocolImg, c1: '#1a0f2b', c2: '#08040c' },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const playOverlayRef = useRef(null);
  const bgRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate normalized coordinates (-0.5 to 0.5)
    const xc = (x / rect.width) - 0.5;
    const yc = (y / rect.height) - 0.5;

    // Rotate card (3D Tilt) - max 8 degrees
    const rotateX = yc * -8;
    const rotateY = xc * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.012, 1.012, 1.012)`;

    // Parallax background shift
    if (bgRef.current) {
      const bgX = xc * -10;
      const bgY = yc * -10;
      bgRef.current.style.transform = `scale(1.08) translate3d(${bgX}px, ${bgY}px, 0)`;
    }

    // Update local mouse glow
    if (glowRef.current) {
      const gx = x - 140; // 140 is half of 280px width
      const gy = y - 140;
      glowRef.current.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
    }

    // Update floating play button
    if (playOverlayRef.current) {
      const px = x - 28; // 28 is half of 56px width
      const py = y - 28;
      playOverlayRef.current.style.transform = `translate3d(${px}px, ${py}px, 0) scale(1)`;
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (!cardRef.current) return;
    const card = cardRef.current;
    // Reset transitions smoothly
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

    if (bgRef.current) {
      bgRef.current.style.transform = `scale(1) translate3d(0, 0, 0)`;
    }

    if (playOverlayRef.current) {
      playOverlayRef.current.style.transform = `translate3d(50%, 50%, 0) scale(0)`;
    }
  };

  const isWide = index === 0 || index === 3 || index === 5;
  const cardClass = `proj-card bento-card ${isWide ? 'bento-wide' : 'bento-normal'}`;

  return (
    <div 
      className={cardClass}
      ref={cardRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="proj-video" 
        ref={bgRef}
        style={{ 
          backgroundImage: `url(${project.img})`,
          '--vc1': project.c1, 
          '--vc2': project.c2 
        }}
      >
        <div className="proj-video-drift"></div>
      </div>
      <div className="proj-glow" ref={glowRef}></div>
      
      {/* Floating play cursor badge */}
      <div className="proj-play-overlay" ref={playOverlayRef}>
        <div className="play-button-circle">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path fill="currentColor" d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      
      <div className="proj-scrim"></div>
      <div className="proj-info">
        <div className="proj-cat">{project.cat}</div>
        <div className="proj-title">{project.title}</div>
        <div className="proj-tools-wrap">
          {project.tools.split(' · ').map((tool, tIdx) => (
            <span key={tIdx} className="tool-tag">{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ctx = gsap.context(() => {
      // Reveal each card in the bento grid with a staggered fade up
      gsap.fromTo('.proj-card', 
        { 
          opacity: 0, 
          y: 40,
          scale: 0.98
        }, 
        {
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.bento-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    }, section);

    return () => ctx.revert(); // clean up GSAP triggers
  }, []);

  return (
    <section className="section" id="work" ref={sectionRef}>
      <div className="showcase-header">
        <div>
          <div className="eyebrow reveal">Selected Work</div>
          <h2 className="big-title reveal" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>
            Every frame,<br />generated from imagination.
          </h2>
        </div>
        <p className="sub reveal">
          A cinematic archive of campaigns built entirely with generative AI — from concept to final grade.
        </p>
      </div>
      
      <div className="bento-grid-wrap">
        <div className="bento-grid">
          {projects.map((p, index) => (
            <ProjectCard key={index} index={index} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
