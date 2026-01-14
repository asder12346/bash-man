import React, { useState } from 'react';
import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! I will get back to you shortly.');
  };

  const contactImg = "/profile.png";

  return (
    <section id="contact" className="section contact-section">
      <div className="container grid-2">
        {/* Left Side: Visual & Socials */}
        <div className="contact-info-left reveal fade-left">
          <div className="contact-image-wrapper hover-glow">
            <img src={contactImg} alt="Contact Legendary Bash" className="contact-img" />
            <div className="contact-overlay"></div>
          </div>

          <div className="social-links reveal fade-up" style={{ transitionDelay: '0.3s' }}>
            <h4 className="social-title">Follow the Journey</h4>
            <div className="social-icons">
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Youtube size={20} /></a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-right reveal fade-right" style={{ animationDelay: '0.2s' }}>
          <div className="form-header">
            <h2 className="section-title">Ready to <span className="text-accent-gradient">Start?</span></h2>
            <p className="form-subtitle">Fill out the form below and let's discuss how we can scale your brand to the next level.</p>
          </div>

          <form className="main-form" onSubmit={handleSubmit}>
            <div className="form-group reveal fade-up" style={{ transitionDelay: '0.1s' }}>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group reveal fade-up" style={{ transitionDelay: '0.2s' }}>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group reveal fade-up" style={{ transitionDelay: '0.3s' }}>
              <label>Business Name</label>
              <input
                type="text"
                placeholder="Your Brand Name"
                value={formData.business}
                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
              />
            </div>
            <div className="form-group reveal fade-up" style={{ transitionDelay: '0.4s' }}>
              <label>How can I help?</label>
              <textarea
                rows={4}
                placeholder="Tell me about your goals..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full reveal zoom-in" style={{ transitionDelay: '0.5s' }}>Send Message</button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-primary);
          padding-bottom: 120px;
        }

        .contact-info-left {
          display: flex;
          flex-direction: column;
          gap: 40px;
          height: 100%;
        }

        .contact-image-wrapper {
          position: relative;
          border-radius: 40px;
          overflow: hidden;
          flex: 1;
          border: 1px solid var(--border-light);
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
          aspect-ratio: 0.85;
        }

        .contact-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .social-links {
          padding-left: 10px;
        }

        .social-title {
          font-family: var(--font-body);
          font-size: 0.85rem;
          margin-bottom: 20px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
        }

        .social-icons {
          display: flex;
          gap: 16px;
        }

        .social-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: var(--text-main);
        }

        .social-icon:hover {
          background: var(--accent-primary);
          transform: translateY(-5px);
          border-color: var(--accent-primary);
        }

        /* Form Styles */
        .form-header {
          margin-bottom: 40px;
        }

        .form-subtitle {
          color: var(--text-muted);
          margin-top: 12px;
          font-size: 1.1rem;
        }

        .main-form {
          display: grid;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main);
          padding-left: 4px;
        }

        .form-group input, 
        .form-group textarea {
          padding: 16px 24px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          color: var(--text-main);
          font-family: inherit;
          transition: all 0.3s;
          font-size: 1rem;
        }

        .form-group input:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          background: var(--bg-primary);
          box-shadow: 0 0 0 4px var(--accent-glow);
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .contact-info-left {
            max-width: 600px;
            margin: 0 auto 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
