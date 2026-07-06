import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import GrainOverlay from './components/GrainOverlay';
import BackgroundStars from './components/BackgroundStars';
import BackgroundGrid from './components/BackgroundGrid';
import Navbar from './components/Navbar';
import HeroSphere from './components/HeroSphere';
import VideoVault from './components/VideoVault';
import ServicesGrid from './components/ServicesGrid';
import ProcessTrack from './components/ProcessTrack';
import StatsGrid from './components/StatsGrid';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [showreelTrigger, setShowreelTrigger] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <CustomCursor />
      <GrainOverlay />
      <BackgroundStars />
      <BackgroundGrid />

      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="section hero" id="home">
          <HeroSphere />
          <div className="hero-content">
            <div className="hero-tag">AI Video Generation Agency</div>
            <div className="hero-logo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="/images/Kaelix Logo-02.svg" alt="KAELIX.AI" style={{ height: 'clamp(52px, 8vw, 100px)', width: 'auto', display: 'block', margin: '10px 0 20px' }} />
            </div>
            <div className="hero-headline">We create impossible visuals using artificial intelligence.</div>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary">Start Your Project</a>
              <a href="#work" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); setShowreelTrigger(true); }}>Watch Showreel</a>
            </div>
          </div>
          <div className="scroll-hint">
            <span>Scroll</span>
            <span className="scroll-line"></span>
          </div>
        </section>

        {/* WORKS PORTFOLIO SECTION */}
        <VideoVault showreelTrigger={showreelTrigger} onShowreelClose={() => setShowreelTrigger(false)} />

        {/* SERVICES / CAPABILITIES SECTION */}
        <ServicesGrid />

        {/* PROCESS TRACK SECTION */}
        <ProcessTrack />

        {/* STATS SECTION */}
        <StatsGrid />

        {/* TESTIMONIALS SECTION */}
        <Testimonials />

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* CONTACT / CTA SECTION */}
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
