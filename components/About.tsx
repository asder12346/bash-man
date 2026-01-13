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
          gap: 80px;
          align-items: center;
        }

        .about-image-wrapper {
          position: relative;
        }

        .founder-placeholder {
          width: 100%;
          aspect-ratio: 0.85;
          background: var(--bg-primary);
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-light);
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
        }
        
        .placeholder-content {
          font-family: var(--font-serif);
          font-size: 5rem;
          font-weight: 800;
          font-style: italic;
          color: var(--accent-primary);
          opacity: 0.5;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 24px;
        }

        .section-line {
          width: 60px;
          height: 3px;
          background: var(--accent-primary);
          margin-bottom: 32px;
        }

        .about-text {
          margin-bottom: 24px;
          font-size: 1.15rem;
          line-height: 1.6;
        }

        .about-highlights {
          margin-top: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .about-highlights li {
          font-weight: 600;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-image-wrapper {
            max-width: 500px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
