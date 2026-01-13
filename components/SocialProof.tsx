import React from 'react';

const SocialProof = () => {
  // Duplicating the list to create seamless infinite scroll
  const brands = [
    { name: "VERTEX", color: "#6366f1" },
    { name: "NEXUS", color: "#ec4899" },
    { name: "HORIZON", color: "#f59e0b" },
    { name: "ELEVATE", color: "#10b981" },
    { name: "QUANTUM", color: "#3b82f6" },
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands]; // Enough for wide screens

  return (
    <section className="social-proof-section">
      <div className="container">
        <p className="proof-label">Trusted by fast-growing startups & brands</p>

        <div className="marquee-wrapper">
          <div className="marquee-content">
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="brand-item" style={{ color: brand.color }}>
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .social-proof-section {
          padding: 40px 0;
          border-bottom: 1px solid var(--border-subtle);
          background: linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary));
          overflow: hidden;
        }

        .proof-label {
          text-align: center;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 30px;
          opacity: 0.6;
        }

        .marquee-wrapper {
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-content {
          display: flex;
          gap: 80px;
          animation: scroll 30s linear infinite;
          width: fit-content;
          padding-left: 40px; /* Offset start */
        }
        
        /* Pause on hover for interaction */
        .marquee-wrapper:hover .marquee-content {
            animation-play-state: paused;
        }

        .brand-item {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.8rem;
          letter-spacing: -0.05em;
          white-space: nowrap;
          opacity: 0.8;
          transition: opacity 0.3s;
        }
        
        .brand-item:hover {
            opacity: 1;
            filter: brightness(1.2);
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
