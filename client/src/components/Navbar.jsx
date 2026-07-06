import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <img src="/images/Kaelix Logo-02.svg" alt="KAELIX.AI" style={{ height: '24px', width: 'auto', display: 'block' }} />
        </div>
        
        {/* Desktop Menu */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#work">Works</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">Book a Call</a>
        
        {/* Hamburger / Toggle */}
        <button 
          className={`nav-toggle ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu} 
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Nav Backdrop Overlay */}
      <div 
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#work" onClick={() => setMobileMenuOpen(false)}>Works</a>
        <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
        <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        <a 
          href="#contact" 
          className="btn btn-primary" 
          style={{ padding: '14px 28px', marginTop: '20px', width: '100%', justifyContent: 'center' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          Book a Call
        </a>
      </div>
    </>
  );
}
