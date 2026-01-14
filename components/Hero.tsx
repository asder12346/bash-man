import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  // Official portrait provided by the user
  const personImage = "/profile.png";

  return (
    <section className="hero">
      {/* Background Glows */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      <div className="container">
        {/* Upper Metadata */}
        <div className="hero-top-meta reveal fade-up">
          <div className="medal-badge">
            <span className="medal-year">2026</span>
            <span className="medal-text">Guinness world record holder</span>
        </div>

        <div className="hero-grid">
          {/* Left: Headline & Actions */}
          <div className="hero-left">
            <h1 className="hero-title reveal fade-left">
              Hi I'm <span className="text-lime">Bash</span> <br />
              <span className="italic-serif">Digital Strategist</span>
            </h1>

            <div className="hero-availability reveal fade-up" style={{ transitionDelay: '0.2s' }}>
              <span className="status-dot animate-pulse"></span>
              Available for new partnerships
            </div>

            <div className="hero-trust-compact reveal fade-up" style={{ transitionDelay: '0.3s' }}>
              <div className="avatar-group">
                <img src="https://i.pravatar.cc/100?u=1" alt="Avatar" />
                <img src="https://i.pravatar.cc/100?u=2" alt="Avatar" />
                <img src="https://i.pravatar.cc/100?u=3" alt="Avatar" />
              </div>
                <p>Trusted by 300+ scale-ups <br /> across 15+ industries.<br />Learn from the best—he is a <strong>Guinness world record holder</strong>.</p>
            </div>
          </div>

          {/* Middle: Person Cutout */}
          <div className="hero-middle reveal zoom-in">
            <div className="person-wrapper">
              <div className="person-glow"></div>
              <img src={personImage} alt="Bash Rabiu" className="person-img" />
            </div>
          </div>

          {/* Right: Subtext & CTA */}
          <div className="hero-right">
            <div className="hero-description reveal fade-right">
              <p>
                Passionate about crafting high-performance
                <span className="text-main"> conversion systems</span> that accelerate
                brand growth with speed and precision.
              </p>
            </div>

            <div className="hero-cta-wrapper reveal fade-up" style={{ transitionDelay: '0.4s' }}>
              <a href="#contact" className="btn btn-primary btn-pill">
                Get in Touch <ArrowUpRight size={18} style={{ marginLeft: '8px' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Logistics */}
        <div className="hero-bottom-marquee reveal fade-up" style={{ transitionDelay: '0.6s' }}>
          <div className="client-logos">
            <span>FocalPoint</span>
            <span>Screentime</span>
            <span>Segment</span>
            <span>Shutterframe</span>
            <span>Lightspeed</span>
          </div>
        </div>
      </div>

      <style>{`
                .hero {
                    position: relative;
                    min-height: 100vh;
                    padding-top: var(--header-height);
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    background: var(--bg-primary);
                }

                .bg-glow {
                    position: absolute;
                    width: 600px;
                    height: 600px;
                    border-radius: 50%;
                    filter: blur(120px);
                    z-index: 0;
                    opacity: 0.4;
                    pointer-events: none;
                }

                .bg-glow-1 {
                    top: -10%;
                    right: -10%;
                    background: var(--accent-primary);
                }

                .bg-glow-2 {
                    bottom: -10%;
                    left: -10%;
                    background: var(--accent-primary);
                    opacity: 0.2;
                }

                .hero .container {
                    position: relative;
                    z-index: 2;
                }

                .hero-top-meta {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 40px;
                }

                .medal-badge {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 16px;
                    border-radius: 100px;
                    border: 1px solid var(--border-light);
                    font-size: 0.85rem;
                    font-weight: 600;
                    background: rgba(255, 255, 255, 0.5);
                    backdrop-filter: blur(4px);
                }

                .medal-year {
                    background: var(--text-main);
                    color: white;
                    padding: 2px 8px;
                    border-radius: 50px;
                    font-size: 0.75rem;
                }

                .hero-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr 1fr;
                    align-items: center;
                    gap: 20px;
                }

                .hero-title {
                    font-size: 4.5rem;
                    line-height: 1;
                    margin-bottom: 30px;
                    white-space: nowrap;
                }

                .hero-availability {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 10px 20px;
                    background: white;
                    border: 1px solid var(--border-light);
                    border-radius: 100px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
                    margin-bottom: 40px;
                }

                .status-dot {
                    width: 8px;
                    height: 8px;
                    background: #a3ff33;
                    border-radius: 50%;
                    box-shadow: 0 0 10px var(--accent-primary);
                }

                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.5); opacity: 0.5; }
                    100% { transform: scale(1); opacity: 1; }
                }

                .animate-pulse {
                    animation: pulse 2s infinite;
                }

                .hero-trust-compact {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .avatar-group {
                    display: flex;
                }

                .avatar-group img {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    border: 2px solid white;
                    margin-left: -12px;
                }

                .avatar-group img:first-child { margin-left: 0; }

                .hero-trust-compact p {
                    font-size: 0.85rem;
                    line-height: 1.4;
                    color: var(--text-muted);
                }

                .person-wrapper {
                    position: relative;
                    width: 100%;
                    height: 500px;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                }

                .person-glow {
                    position: absolute;
                    bottom: 10%;
                    width: 300px;
                    height: 300px;
                    background: var(--accent-primary);
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.3;
                    z-index: -1;
                }

                .person-img {
                    height: 110%;
                    width: auto;
                    object-fit: contain;
                    border-radius: 0 0 500px 500px;
                    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
                }

                .hero-description {
                    font-size: 1.15rem;
                    color: var(--text-muted);
                    line-height: 1.5;
                    margin-bottom: 30px;
                }

                .hero-cta-wrapper {
                    display: flex;
                    justify-content: flex-start;
                }

                .hero-bottom-marquee {
                    margin-top: 80px;
                    border-top: 1px solid var(--border-subtle);
                    padding-top: 40px;
                }

                .client-logos {
                    display: flex;
                    justify-content: space-between;
                    opacity: 0.3;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    font-size: 0.8rem;
                }

                @media (max-width: 1200px) {
                    .hero-title { font-size: 3.5rem; }
                    .hero-grid { grid-template-columns: 1fr 1fr; }
                    .hero-right { grid-column: span 2; display: flex; align-items: center; justify-content: space-between; gap: 40px; margin-top: 40px; }
                    .hero-description { margin-bottom: 0; max-width: 500px; }
                }

                @media (max-width: 768px) {
                    .hero-grid { grid-template-columns: 1fr; text-align: center; }
                    .hero-left { display: flex; flex-direction: column; align-items: center; }
                    .hero-title { font-size: 3rem; white-space: normal; }
                    .hero-right { flex-direction: column; text-align: center; }
                    .hero-cta-wrapper { justify-content: center; }
                    .person-wrapper { height: 400px; }
                    .client-logos { flex-wrap: wrap; justify-content: center; gap: 30px; }
                }
            `}</style>
    </section>
  );
};

export default Hero;
