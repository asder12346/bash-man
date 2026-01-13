import React from 'react';

const About = () => {
  return (
    <section className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper reveal fade-left">
            {/* Placeholder for Founder Image - Using a stylized div for now */}
            <div className="founder-placeholder">
              <div className="placeholder-content">LB</div>
            </div>
          </div>

          <div className="about-content reveal fade-right">
            <h2 className="section-title">Meet <span className="text-accent-gradient">Bash Rabiu</span></h2>
            <div className="section-line"></div>

            <p className="about-text">
              Bash Rabiu is an elite digital marketer with a mission to help ambitious brands stand out, scale aggressively, and dominate their respective markets.
            </p>
            <p className="about-text">
              With a deep focus on high-performance digital strategy, Bash doesn’t just chase clicks — he architect <strong>conversion ecosystems that turn attention into long-term revenue</strong>.
            </p>
            <p className="about-text">
              Every campaign is built on raw data, psychological triggers, and relentless optimization to ensure measurable, compound growth.
            </p>

            <ul className="about-highlights">
              <li className="reveal zoom-in" style={{ transitionDelay: '0.1s' }}>🚀 Data-driven approach</li>
              <li className="reveal zoom-in" style={{ transitionDelay: '0.2s' }}>💎 Conversion-first mindset</li>
              <li className="reveal zoom-in" style={{ transitionDelay: '0.3s' }}>🤝 Clear communication & transparency</li>
              <li className="reveal zoom-in" style={{ transitionDelay: '0.4s' }}>📈 Growth-focused execution</li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-secondary);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-image-wrapper {
          position: relative;
        }

        .founder-placeholder {
          width: 100%;
          aspect-ratio: 1;
          background: #1a1a1a;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-light);
          position: relative;
          overflow: hidden;
        }
        
        .founder-placeholder::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05), transparent);
        }

        .placeholder-content {
          font-family: var(--font-display);
          font-size: 5rem;
          font-weight: 800;
          color: var(--bg-primary);
          text-shadow: -1px -1px 0 rgba(255,255,255,0.1), 1px 1px 0 rgba(255,255,255,0.05);
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .section-line {
          width: 60px;
          height: 4px;
          background: var(--accent-primary);
          margin-bottom: 30px;
        }

        .about-text {
          margin-bottom: 20px;
          font-size: 1.1rem;
        }

        .about-text strong {
          color: var(--text-main);
        }

        .about-highlights {
          margin-top: 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .about-highlights li {
          font-weight: 500;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
