import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">Bash Rabiu</span>
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
          <a href="#results" onClick={() => setMobileMenuOpen(false)}>Results</a>
          <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Book Strategy Call</a>
        </nav>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          z-index: 1000;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          background: transparent;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-subtle);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--text-main);
          letter-spacing: -0.02em;
        }

        .logo-icon {
          color: var(--text-main);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a:not(.btn) {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:not(.btn):hover {
          color: var(--text-main);
        }

        .mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-light);
          color: var(--text-main);
          font-size: 1.25rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .mobile-toggle:hover {
            background: var(--accent-primary);
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: var(--header-height);
            left: 0;
            right: 0;
            background: var(--bg-primary);
            flex-direction: column;
            padding: 40px;
            gap: 20px;
            border-bottom: 1px solid var(--border-subtle);
            transform: translateY(-150%);
            transition: transform 0.3s ease;
          }
          
          .nav-links.open {
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
