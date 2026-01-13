import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(2);

  // 5 total testimonials
  const testimonials = [
    {
      text: "Legendary Bash transformed our online presence. We went from getting sporadic leads to a consistent flow of qualified meetings.",
      name: "Sarah Jenkins", role: "CEO, TechStart", avatar: "S"
    },
    {
      text: "Professional, strategic, and results-focused. Bash built a whole ecosystem for our brand. Highly recommended.",
      name: "Marcus Thorne", role: "Founder, Elevate Fitness", avatar: "M"
    },
    {
      text: "The ROI we've seen in just 3 months is incredible. Finally a marketing partner that understands data.",
      name: "Elena Rodriguez", role: "CMO, Nova Retail", avatar: "E"
    },
    {
      text: "My personal brand exploded after working with Bash. The strategy was clear and execution flawless.",
      name: "David Chen", role: "Author & Coach", avatar: "D"
    },
    {
      text: "Stopped wasting money on bad ads. Now every dollar brings back three. Best investment we made this year.",
      name: "Jessica Alverez", role: "Director, GreenLife", avatar: "J"
    }
  ];

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      setItemsPerScreen(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, itemsPerScreen]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Safe index logic for circular display
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsPerScreen; i++) {
      const index = (activeIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="section testimonials-section">
      <div className="container">
        <h2 className="section-title text-center" style={{ marginBottom: '60px' }}>What Clients Say</h2>

        <div className="testimonials-slider">
          {getVisibleTestimonials().map((item, i) => (
            <div key={`${activeIndex}-${i}`} className="testimonial-card animate-slide-in">
              <div className="quote-icon">"</div>
              <p className="quote-text">{item.text}</p>
              <div className="client-info">
                <div className="client-avatar">{item.avatar}</div>
                <div>
                  <p className="client-name">{item.name}</p>
                  <p className="client-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-controls">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background-color: var(--bg-tertiary);
          overflow: hidden;
        }

        .testimonials-slider {
          display: flex;
          gap: 30px;
          transition: transform 0.5s ease;
        }

        .testimonial-card {
          flex: 1;
          background: var(--bg-primary);
          padding: 40px;
          border-radius: 24px;
          border: 1px solid var(--border-subtle);
          position: relative;
          min-height: 250px;
          animation: slideInRight 0.5s ease-out;
        }
        
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .quote-icon {
          font-family: serif;
          font-size: 4rem;
          color: var(--accent-primary);
          opacity: 0.3;
          line-height: 1;
          position: absolute;
          top: 20px;
          left: 30px;
        }

        .quote-text {
          font-size: 1.1rem;
          color: var(--text-main);
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
          padding-top: 20px;
        }

        .client-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .client-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: var(--accent-primary);
          border: 1px solid var(--border-light);
        }

        .client-name {
          font-weight: 700;
          color: var(--text-main);
          margin: 0;
          font-size: 1rem;
        }

        .client-role {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
        }
        
        .slider-controls {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 30px;
        }
        
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: var(--border-light);
            border: none;
            cursor: pointer;
            padding: 0;
            transition: all 0.3s;
        }
        
        .dot.active {
            background: var(--accent-primary);
            width: 30px;
            border-radius: 99px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
