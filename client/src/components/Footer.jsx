import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/Kaelix Logo-02.svg" alt="KAELIX.AI" style={{ height: '24px', width: 'auto', display: 'block' }} />
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Studio</h4>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://www.instagram.com/kaelix.ai/reels/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://wa.me/919847047264" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:kaelixaistudio@gmail.com">kaelixaistudio@gmail.com</a>
            <a href="https://wa.me/919847047264" target="_blank" rel="noopener noreferrer">+91 98470 47264</a>
            <span style={{ fontSize: '12px', color: 'var(--text2)', marginTop: '8px', display: 'block' }}>Ernakulam, Kerala</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 KAELIX.AI — All rights reserved.</span>
        
      </div>
    </footer>
  );
}
