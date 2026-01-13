import React from 'react';

const Process = () => {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">My Proven 4-Step Process</h2>
          <p className="section-subtitle">A systematic approach to predictable growth.</p>
        </div>

        <div className="process-steps">
          {/* Step 1 */}
          <div className="process-step reveal zoom-in" style={{ transitionDelay: '0.1s' }}>
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>Discovery</h3>
              <p>Understand your brand, goals, audience, and challenges.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="process-step reveal zoom-in" style={{ transitionDelay: '0.2s' }}>
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>Strategy</h3>
              <p>Create a custom marketing plan tailored to your business.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="process-step reveal zoom-in" style={{ transitionDelay: '0.3s' }}>
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>Execution</h3>
              <p>Launch, test, optimize, and scale campaigns.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="process-step reveal zoom-in" style={{ transitionDelay: '0.4s' }}>
            <div className="step-number">04</div>
            <div className="step-content">
              <h3>Growth</h3>
              <p>Track performance, refine strategy, and maximize ROI.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .process-section {
          background-color: var(--bg-secondary);
        }
        
        .section-header {
            margin-bottom: 80px;
            text-align: center;
        }

        .process-steps {
          display: flex;
          justify-content: space-between;
          gap: 30px;
        }

        .process-step {
          position: relative;
          z-index: 1;
          flex: 1;
          text-align: left;
          padding: 48px 32px;
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: 32px;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .process-step:hover {
          transform: translateY(-10px);
          border-color: var(--accent-primary);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
        }

        .step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          background: var(--bg-secondary);
          color: var(--text-main);
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 1.25rem;
          border-radius: 50%;
          margin-bottom: 24px;
          border: 1px solid var(--border-subtle);
          transition: all 0.3s ease;
        }

        .process-step:hover .step-number {
          background: var(--accent-primary);
          transform: scale(1.1);
          border-color: var(--accent-primary);
        }

        .step-content h3 {
          font-size: 1.5rem;
          margin-bottom: 12px;
          color: var(--text-main);
          letter-spacing: -0.01em;
        }

        .step-content p {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .process-steps {
            flex-direction: column;
            gap: 40px;
          }
          .process-step { max-width: 600px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
};

export default Process;
