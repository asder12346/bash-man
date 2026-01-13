import React from 'react';

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">My Expertise</h2>
                    <p className="section-subtitle">Everything you need to dominate your market.</p>
                </div>

                <div className="services-grid grid-3">
                    {/* Service 1 */}
                    <div className="service-card">
                        <div className="service-icon-wrapper">
                            <span className="service-icon">⚡</span>
                        </div>
                        <h3>Digital Marketing Strategy</h3>
                        <ul className="service-list">
                            <li>Market research & competitor analysis</li>
                            <li>Customer journey mapping</li>
                            <li>Growth roadmap planning</li>
                        </ul>
                    </div>

                    {/* Service 2 */}
                    <div className="service-card">
                        <div className="service-icon-wrapper">
                            <span className="service-icon">🎯</span>
                        </div>
                        <h3>Paid Advertising</h3>
                        <ul className="service-list">
                            <li>Meta, Google, TikTok Ads</li>
                            <li>Campaign setup & optimization</li>
                            <li>Creative testing & scaling</li>
                        </ul>
                    </div>

                    {/* Service 3 */}
                    <div className="service-card">
                        <div className="service-icon-wrapper">
                            <span className="service-icon">🌪️</span>
                        </div>
                        <h3>Funnel Optimization</h3>
                        <ul className="service-list">
                            <li>High-converting Landing Pages</li>
                            <li>Sales Funnel Architecture</li>
                            <li>Email & Automation Flows</li>
                        </ul>
                    </div>

                    {/* Service 4 */}
                    <div className="service-card">
                        <div className="service-icon-wrapper">
                            <span className="service-icon">🔥</span>
                        </div>
                        <h3>Brand & Content Strategy</h3>
                        <ul className="service-list">
                            <li>Personal Brand Growth</li>
                            <li>Social Media Strategy</li>
                            <li>Content that sells (not just engages)</li>
                        </ul>
                    </div>

                    {/* Service 5 */}
                    <div className="service-card">
                        <div className="service-icon-wrapper">
                            <span className="service-icon">💡</span>
                        </div>
                        <h3>Consulting & Coaching</h3>
                        <ul className="service-list">
                            <li>1-on-1 Strategy Sessions</li>
                            <li>Marketing Audits</li>
                            <li>Growth Optimization Guidance</li>
                        </ul>
                    </div>

                    {/* Service 6 - Placeholder/Bonus */}
                    <div className="service-card highlight-card">
                        <div className="service-icon-wrapper">
                            <span className="service-icon">🚀</span>
                        </div>
                        <h3>Custom Growth Systems</h3>
                        <p className="highlight-text">Need something specific? Let's build a custom plan for your unique goals.</p>
                        <a href="#contact" className="text-link">Let's talk -&gt;</a>
                    </div>
                </div>
            </div>

            <style>{`
        .services-section {
          background-color: var(--bg-primary);
        }
        
        .section-header {
            margin-bottom: 60px;
            text-align: center;
        }

        .service-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          padding: 32px;
          border-radius: 24px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          border-color: var(--accent-primary);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
        }

        .service-icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .service-icon {
          font-size: 1.8rem;
        }

        .service-card h3 {
          font-size: 1.25rem;
          margin-bottom: 16px;
        }

        .service-list {
          list-style: none;
          padding: 0;
        }

        .service-list li {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 8px;
          padding-left: 14px;
          position: relative;
        }

        .service-list li::before {
          content: '•';
          color: var(--accent-primary);
          position: absolute;
          left: 0;
        }

        /* Highlight Card Specifics */
        .highlight-card {
          border: 1px solid var(--accent-primary);
          background: rgba(16, 185, 129, 0.05);
        }
        
        .highlight-text {
            margin-bottom: 16px;
        }
        
        .text-link {
            color: var(--accent-primary);
            font-weight: 600;
        }
      `}</style>
        </section>
    );
};

export default Services;
