import React, { useState } from 'react';
import CtaFog from './CtaFog';

const PROJECT_TYPES = ['AI Video', 'Product Ads', 'Fashion Campaign', 'Brand Content'];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectTypes: []
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTypeToggle = (type) => {
    setFormData(prev => {
      const exists = prev.projectTypes.includes(type);
      return {
        ...prev,
        projectTypes: exists 
          ? prev.projectTypes.filter(t => t !== type)
          : [...prev.projectTypes, type]
      };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const emailTo = "kaelixaistudio@gmail.com";
    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
    const projectTypesStr = formData.projectTypes.length > 0 ? formData.projectTypes.join(", ") : "Not Specified";
    
    const bodyText = `Name: ${formData.name}
Email: ${formData.email}
What we are building: ${projectTypesStr}

Project Details:
${formData.message}`;

    const body = encodeURIComponent(bodyText);
    
    // Redirect to native mail client pre-filled
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    // Display drawing checkmark success state after a short delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
        projectTypes: []
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    }, 800);
  };

  return (
    <section className="section cta-section" id="contact">
      <CtaFog />
      
      <div className="cta-container reveal">
        <div className="cta-card glass">
          
          {/* Left Column: Info Pane */}
          <div className="cta-info-pane">
            <div className="eyebrow" style={{ alignSelf: 'flex-start', marginBottom: '20px' }}>GET IN TOUCH</div>
            <h2 className="cta-pane-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: '1.2', color: '#fff', marginBottom: '20px' }}>
              Let's build something your audience will never forget.
            </h2>
            <p className="cta-pane-desc" style={{ color: 'var(--text2)', marginBottom: '24px', lineHeight: '1.6' }}>
              Every day your brand looks average, a customer is choosing someone else. Let's fix that.
            </p>
            
            <div className="cta-status-badge" style={{ marginBottom: '32px' }}>
              <span className="pulse-dot" style={{ backgroundColor: '#22c55e' }}></span>
              <span>Open for New Projects</span>
            </div>
            
            <div className="cta-quick-contacts" style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
              <div className="contact-item">
                <span className="item-label" style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.1em', display: 'block', marginBottom: '4px' }}>General Inquiry</span>
                <a href="mailto:kaelixaistudio@gmail.com" className="item-value" style={{ fontSize: '16px', color: '#fff', textDecoration: 'none', fontWeight: '500' }}>kaelixaistudio@gmail.com</a>
                <span style={{ fontSize: '12px', color: 'var(--text2)', display: 'block', marginTop: '4px' }}>We respond within 24 hours. Always.</span>
              </div>
              <div className="contact-item">
                <span className="item-label" style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.1em', display: 'block', marginBottom: '4px' }}>Phone / WhatsApp</span>
                <a href="https://wa.me/919847047264" target="_blank" rel="noopener noreferrer" className="item-value" style={{ fontSize: '16px', color: '#fff', textDecoration: 'none', fontWeight: '500' }}>+91 98470 47264</a>
              </div>
              <div className="contact-item">
                <span className="item-label" style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.1em', display: 'block', marginBottom: '4px' }}>Location</span>
                <span className="item-value" style={{ fontSize: '16px', color: '#fff', fontWeight: '500' }}>Ernakulam, Kerala · Available Worldwide</span>
              </div>
            </div>
            
            <div className="cta-socials" style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>Follow Us</span>
              <a 
                href="https://www.instagram.com/kaelix.ai/reels/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                aria-label="Instagram" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid var(--border)', 
                  color: '#fff', 
                  transition: 'all 0.3s ease' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent)';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Column: Interactive Form */}
          <div className="cta-form-pane">
            {submitted ? (
              <div className="cta-success-card">
                <div className="success-icon-wrap" style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
                  <svg viewBox="0 0 52 52" width="60" height="60">
                    <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
                </div>
                <h3 className="success-title">Transmission Received</h3>
                <p className="success-message">
                  Your project metrics have been logged in our system. A creative producer will establish contact within 24 standard hours.
                </p>
                <div className="success-line"></div>
              </div>
            ) : (
              <form className="cta-full-form" onSubmit={handleSubmit}>
                
                {/* Project Types Selection */}
                <div className="form-group-section" style={{ marginBottom: '32px' }}>
                  <span className="group-title" style={{ display: 'block', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '16px' }}>WHAT ARE WE BUILDING?</span>
                  <div className="selection-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {PROJECT_TYPES.map((type) => {
                      const isActive = formData.projectTypes.includes(type);
                      return (
                        <button 
                          key={type}
                          type="button"
                          onClick={() => handleTypeToggle(type)}
                          className={`pill-btn ${isActive ? 'active' : ''}`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Group */}
                <div className="form-row-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                  <div className="floating-group">
                    <input 
                      type="text" 
                      name="name"
                      id="form-name"
                      required
                      placeholder=" "
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                    <label htmlFor="form-name" className="floating-label">Full Name</label>
                  </div>
                  
                  <div className="floating-group">
                    <input 
                      type="email" 
                      name="email"
                      id="form-email"
                      required
                      placeholder=" "
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                    />
                    <label htmlFor="form-email" className="floating-label">Email Address</label>
                  </div>
                </div>
                
                {/* Message Group */}
                <div className="floating-group textarea-group" style={{ marginBottom: '32px' }}>
                  <textarea 
                    name="message"
                    id="form-message"
                    required
                    placeholder=" "
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                  ></textarea>
                  <label htmlFor="form-message" className="floating-label">Tell us about your project</label>
                </div>
                
                {/* Submit button */}
                <button type="submit" className="cta-submit-btn" disabled={loading} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                  {loading ? (
                    <span className="loader-span">Establishing link...</span>
                  ) : (
                    <>
                      <span>SUBMIT REQUEST</span>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </>
                  )}
                </button>
                
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
