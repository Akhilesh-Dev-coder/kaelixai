import React, { useState } from 'react';
import CtaFog from './CtaFog';

const PROJECT_TYPES = ['AI Video', 'CGI Campaign', 'Concept Art', 'Web Graphics'];
const BUDGETS = ['<₹5 Lakhs', '₹5L - ₹15L', '₹15L - ₹30L', '₹30L+'];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: '₹5L - ₹15L',
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
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          message: '',
          budget: '₹5L - ₹15L',
          projectTypes: []
        });
      }, 6000);
    }, 1500);
  };

  return (
    <section className="section cta-section" id="contact">
      <CtaFog />
      
      <div className="cta-container reveal">
        <div className="cta-card glass">
          
          {/* Left Column: Info Pane */}
          <div className="cta-info-pane">
            <div className="eyebrow" style={{ alignSelf: 'flex-start', marginBottom: '20px' }}>Get In Touch</div>
            <h2 className="cta-pane-title">
              Let's create<br />something<br /><span className="glow-text">impossible.</span>
            </h2>
            <p className="cta-pane-desc">
              Have a vision that borders on science fiction? Let’s translate it into cinematic frames.
            </p>
            
            <div className="cta-status-badge">
              <span className="pulse-dot"></span>
              <span>Open for Q3 / Q4 projects</span>
            </div>
            
            <div className="cta-quick-contacts">
              <div className="contact-item">
                <span className="item-label">General Inquiry</span>
                <a href="mailto:hello@kaelix.ai" className="item-value">hello@kaelix.ai</a>
              </div>
              <div className="contact-item">
                <span className="item-label">Location</span>
                <span className="item-value">Bengaluru · Mumbai, India</span>
              </div>
            </div>
            
            <div className="cta-socials">
              <a href="#" className="social-link" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Column: Interactive Form */}
          <div className="cta-form-pane">
            {submitted ? (
              <div className="cta-success-card">
                <div className="success-icon-wrap">
                  <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
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
                
                {/* Name & Email Group */}
                <div className="form-row-two">
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
                
                {/* Project Types Selection */}
                <div className="form-group-section">
                  <span className="group-title">What are we building?</span>
                  <div className="selection-pills">
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
                
                {/* Budget Selection */}
                <div className="form-group-section">
                  <span className="group-title">Project Scale (INR)</span>
                  <div className="budget-selection-grid">
                    {BUDGETS.map((budget) => {
                      const isActive = formData.budget === budget;
                      return (
                        <button 
                          key={budget}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, budget }))}
                          className={`budget-pill-btn ${isActive ? 'active' : ''}`}
                        >
                          {budget}
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                {/* Message Group */}
                <div className="floating-group textarea-group">
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
                <button type="submit" className="cta-submit-btn" disabled={loading}>
                  {loading ? (
                    <span className="loader-span">Establishing link...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
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
