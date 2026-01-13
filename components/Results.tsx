import React, { useState, useEffect, useRef } from 'react';

// Animation Hook/Component for numbers
const MovingNumber = ({ value, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Extract numeric part for animation
  const numericValue = parseInt(value.replace(/[^0-9-]/g, ''));
  const isNegative = value.includes('-');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        const nextCount = Math.floor((progress / duration) * numericValue);
        setCount(nextCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, numericValue, duration]);

  return (
    <span ref={elementRef}>
      {isNegative ? '-' : ''}{value.includes('+') ? '+' : ''}{count}{suffix || value.replace(/[0-9-+\s]/g, '')}
    </span>
  );
};

const Results = () => {
  return (
    <section id="results" className="section results-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Real Results</h2>
          <p className="section-subtitle">Consistent growth, month after month.</p>
        </div>

        <div className="metrics-grid grid-3">
          <div className="metric-card hover-glow">
            <div className="metric-value">
              <MovingNumber value="3x" />
            </div>
            <p className="metric-label">Average ROAS</p>
            <p className="metric-desc">Tripling return on ad spend for e-commerce clients.</p>
          </div>
          <div className="metric-card hover-glow">
            <div className="metric-value">
              <MovingNumber value="+120" suffix="%" />
            </div>
            <p className="metric-label">Revenue Growth</p>
            <p className="metric-desc">Average year-over-year revenue increase.</p>
          </div>
          <div className="metric-card hover-glow">
            <div className="metric-value">
              <MovingNumber value="-40" suffix="%" />
            </div>
            <p className="metric-label">CPA Reduction</p>
            <p className="metric-desc">Lowering cost per acquisition through better targeting.</p>
          </div>
        </div>
      </div>

      <style>{`
        .results-section {
          background-color: var(--bg-primary);
          padding-bottom: 80px;
        }

        .metric-card {
          text-align: center;
          padding: 40px;
          border-radius: 20px;
          border: 1px solid var(--border-subtle);
          background: rgba(255, 255, 255, 0.02);
          transition: transform 0.3s;
        }

        .metric-value {
          font-family: var(--font-display);
          font-size: 4rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 10px;
          background: linear-gradient(135deg, var(--accent-primary) 0%, #34d399 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .metric-label {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 8px;
        }

        .metric-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
};

export default Results;
