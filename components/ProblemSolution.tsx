import React from 'react';

const ProblemSolution = () => {
  // Services images from Unsplash
  const services = [
    {
      icon: "🚀",
      title: "Paid Advertising",
      desc: "Expertly managed Meta, Google, and TikTok ads designed to drive high-intent traffic and maximize ROAS.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: "📈",
      title: "SEO & Growth",
      desc: "Long-term organic strategies that rank your brand on page one and keep the traffic flowing consistently.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: "📱",
      title: "Social Media Management",
      desc: "Strategic content and community management that builds brand authority and fosters deep audience engagement.",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: "💌",
      title: "Email Marketing",
      desc: "Automated funnels and high-converting campaigns that nurture leads and increase customer lifetime value.",
      img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: "✍️",
      title: "Content & Copywriting",
      desc: "Persuasive copy and scroll-stopping visuals that tell your brand story and compel users to take action.",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: "🎯",
      title: "Conversion Optimization",
      desc: "Data-driven UI/UX improvements and funnel tweaks to ensure more of your visitors become paying customers.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <>
      {/* My Services Section */}
      <section id="services" className="section problem-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">My <span className="text-accent-gradient">Expertise</span> & Services</h2>
            <p className="section-subtitle">Full-stack digital marketing solutions designed to scale your brand profitably.</p>
          </div>

          <div className="problems-grid grid-3">
            {services.map((service, index) => (
              <div key={index} className={`problem-card hover-glow reveal fade-up`} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="card-image" style={{ backgroundImage: `url(${service.img})` }}>
                  <div className="image-overlay"></div>
                </div>
                <div className="card-content">
                  <span className="problem-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions/CTA Section */}
      <section className="section solution-section">
        <div className="container">
          <div className="solution-content text-center">
            <h2 className="section-title">Ready to <span className="text-accent-gradient">Scale Your Brand?</span></h2>
            <p className="solution-intro">
              I don't just run ads — I build systems that generate <strong>predictable revenue</strong> and sustainable growth.
            </p>

            <div className="cta-wrapper">
              <a href="#contact" className="btn btn-primary">Work With Me</a>
            </div>

            <div className="solution-footer">
              <p className="impact-statement">Let's turn your vision into a high-performing digital ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .problem-section {
          background-color: var(--bg-primary);
        }

        .section-header {
          margin-bottom: 80px;
          text-align: center;
        }

        .section-subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 16px auto 0;
          color: var(--text-muted);
        }

        .problem-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          transition: all 0.4s ease;
        }

        .problem-card:hover {
            transform: translateY(-10px);
            border-color: var(--accent-primary);
            box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .card-image {
            height: 160px;
            background-size: cover;
            background-position: center;
            position: relative;
        }

        .image-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, transparent, var(--bg-primary));
        }

        .card-content {
            padding: 32px;
            position: relative;
            flex: 1;
        }

        .problem-icon {
          font-size: 1.5rem;
          position: absolute;
          top: -24px; 
          left: 32px;
          background: var(--accent-primary);
          border-radius: 50%;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          color: var(--text-dark);
          box-shadow: 0 4px 15px var(--accent-glow);
        }

        .problem-card h3 {
          font-size: 1.4rem;
          margin-bottom: 12px;
          margin-top: 8px;
        }

        .problem-card p {
            font-size: 0.95rem;
            line-height: 1.6;
        }

        /* Solution Styles */
        .solution-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .solution-intro {
          font-size: 1.6rem;
          margin-bottom: 40px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          color: var(--text-main);
        }

        .cta-wrapper {
            margin-bottom: 40px;
        }

        .impact-statement {
          font-size: 1.75rem;
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: -0.01em;
        }

        @media (max-width: 768px) {
            .card-content { padding: 24px; }
            .problem-icon { left: 24px; }
        }
      `}</style>
    </>
  );
};

export default ProblemSolution;
