import React from 'react';

const Hero = () => {
  // A professional brand image representing a high-end digital marketer
  const brandImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80";
  const bgImage = "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1920&q=80";

  return (
    <section className="hero">
      <div className="hero-bg-overlay" style={{ backgroundImage: `url(${bgImage})` }}></div>

      <div className="container grid-2">
        <div className="hero-content-left animate-fade-in">
          <span className="hero-badge">Elite Digital Strategist</span>
          <h1 className="hero-title">
            I am <span className="text-accent-gradient">Bash Rabiu</span>. <br />
            Scale Your Brand with <span className="text-accent-gradient">Legendary</span> Speed.
          </h1>

          <p className="hero-subtitle">
            Data-driven marketing architecture designed to turn attention into high-ticket revenue. No fluff. Just ROI.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Work With Me</a>
            <a href="#results" className="btn btn-secondary">View Case Studies</a>
          </div>

          <div className="hero-trust">
            <p>Trusted by elite brands across the globe</p>
            <div className="trust-icons">
              <span className="trust-item"><span className="check-icon">✓</span> 7+ Figure Managed Spend</span>
              <span className="trust-item"><span className="check-icon">✓</span> 300% Avg ROAS</span>
            </div>
          </div>
        </div>

        <div className="hero-image-right animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="image-container hover-glow">
            <img src={brandImage} alt="Bash Rabiu - Digital Marketer" className="hero-img" />
            <div className="image-accent"></div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding: calc(var(--header-height) + 40px) 0 80px;
          overflow: hidden;
          background-color: var(--bg-primary);
        }

        .hero-bg-overlay {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            opacity: 0.15;
            z-index: 0;
            pointer-events: none;
        }

        .hero .container {
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 50px;
          color: var(--accent-primary);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 4rem;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 40px;
          max-width: 600px;
          line-height: 1.6;
          color: var(--text-muted);
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
        }

        .hero-trust {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .hero-trust p {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          font-weight: 600;
        }

        .trust-icons {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: var(--text-main);
          font-size: 0.95rem;
        }

        .check-icon {
          color: var(--accent-primary);
          font-weight: 800;
        }

        .hero-image-right {
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6);
          border: 1px solid var(--border-light);
          aspect-ratio: 0.85;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .image-accent {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 200px;
          height: 200px;
          background: var(--accent-primary);
          filter: blur(80px);
          opacity: 0.2;
          z-index: -1;
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3rem;
          }
          .grid-2 {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 60px;
          }
          .hero-content-left {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions {
            justify-content: center;
          }
          .trust-icons {
            justify-content: center;
          }
          .hero-image-right {
            max-width: 500px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
