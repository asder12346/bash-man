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
          <div className="process-step reveal zoom-in hover-glow" style={{ transitionDelay: '0.1s' }}>
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>Discovery</h3>
              <p>Understand your brand, goals, audience, and challenges.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="process-step reveal zoom-in hover-glow" style={{ transitionDelay: '0.2s' }}>
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>Strategy</h3>
              <p>Create a custom marketing plan tailored to your business.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="process-step reveal zoom-in hover-glow" style={{ transitionDelay: '0.3s' }}>
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>Execution</h3>
              <p>Launch, test, optimize, and scale campaigns.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="process-step reveal zoom-in hover-glow" style={{ transitionDelay: '0.4s' }}>
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
        }

        .process-steps {
          display: flex;
          justify-content: space-between;
          position: relative;
        }

        .process-step {
          position: relative;
          z-index: 1;
          flex: 1;
          text-align: center;
          padding: 32px 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid transparent;
          border-radius: 20px;
          margin: 0 10px;
          transition: all 0.4s ease;
        }

        .process-step:hover {
          background: rgba(16, 185, 129, 0.05);
          border-color: rgba(16, 185, 129, 0.2);
        }

        .process-step:hover .step-number {
          background: var(--accent-primary);
          color: var(--text-dark);
          transform: scale(1.1);
          box-shadow: 0 0 20px var(--accent-glow);
        }

        .step-number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 2px solid var(--accent-primary);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-family: var(--font-display);
          margin: 0 auto 24px;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .step-content h3 {
          font-size: 1.25rem;
          margin-bottom: 12px;
        }

        .step-content p {
          font-size: 0.95rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .process-steps {
            flex-direction: column;
            gap: 40px;
          }
          
          /* Remove horizontal line */
          .process-steps::before {
              display: none;
          }
          
          /* Add vertical line */
           .process-steps::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 2px;
            background: var(--border-light);
            z-index: 0;
            transform: translateX(-50%);
            display: block;
        }

          .step-number {
            margin: 0 auto 16px;
            background: var(--bg-secondary);
            position: relative;
            z-index: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
