import React, { useState } from 'react';

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = "https://wa.me/919847047264?text=Hi%20KAELIX.AI%2C%20I%20would%20like%20to%20know%20more%20about%20starting%20an%20AI%20video%20project%20with%20you%20guys!";

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        pointerEvents: 'none' // Let hover trigger only on interactive children
      }}
    >
      {/* Interactive Tooltip Badge */}
      <div 
        style={{
          background: 'rgba(3, 3, 5, 0.85)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '8px 16px',
          color: '#fff',
          fontSize: '13px',
          fontWeight: '500',
          fontFamily: 'system-ui, sans-serif',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0) scale(1)' : 'translateX(10px) scale(0.95)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap'
        }}
      >
        Chat on WhatsApp
      </div>

      {/* Floating Action Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#22c55e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: hovered 
            ? '0 0 25px rgba(34, 197, 94, 0.6), 0 10px 20px rgba(0,0,0,0.3)' 
            : '0 0 15px rgba(34, 197, 94, 0.3), 0 6px 12px rgba(0,0,0,0.2)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'auto',
          transform: hovered ? 'scale(1.1) rotate(12deg)' : 'scale(1)'
        }}
        aria-label="Contact us on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="30" 
          height="30" 
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.025 14.07 1 11.996 1 6.556 1 2.133 5.37 2.13 10.8a9.691 9.691 0 001.488 5.176l-.999 3.652 3.738-.974zm11.305-6.109c-.274-.137-1.62-.8-1.874-.893-.254-.094-.44-.137-.625.137-.186.274-.717.893-.88 1.076-.162.184-.325.205-.6.069-.274-.137-1.157-.426-2.204-1.36-1.135-.893-1.536-1.884-1.758-2.268-.221-.383-.024-.59.172-.782.176-.173.383-.44.575-.66.19-.22.254-.367.38-.61.127-.245.064-.46-.03-.643-.094-.184-.625-1.503-.856-2.057-.225-.538-.49-.463-.672-.473l-.574-.012c-.22-.008-.577.082-.88.411-.303.33-1.158 1.13-1.158 2.756 0 1.626 1.183 3.197 1.347 3.416.164.22 2.328 3.551 5.639 4.978 2.784 1.205 3.35 1.01 3.996.95 1.024-.095 2.146-.617 2.45-1.493.303-.876.303-1.626.213-1.78-.09-.153-.325-.245-.6-.382z"/>
        </svg>
      </a>
    </div>
  );
}
