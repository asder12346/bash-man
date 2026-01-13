import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Column 1: Brand Info */}
        <div className="footer-column brand-col">
          <span className="footer-logo">⚡ Bash Rabiu</span>
          <p className="footer-tagline">
            Helping brands turn attention into predictable revenue through data-driven digital marketing and elite strategy.
          </p>
          <div className="footer-social-icons">
            <a href="#" className="footer-social-link"><Twitter size={18} /></a>
            <a href="#" className="footer-social-link"><Linkedin size={18} /></a>
            <a href="#" className="footer-social-link"><Instagram size={18} /></a>
            <a href="#" className="footer-social-link"><Youtube size={18} /></a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-column">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-list">
            <li><a href="#services">Services</a></li>
            <li><a href="#learn">Mentorship</a></li>
            <li><a href="#results">Real Results</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-column">
          <h4 className="footer-title">Expertise</h4>
          <ul className="footer-list">
            <li><a href="#services">Paid Advertising</a></li>
            <li><a href="#services">SEO & Growth</a></li>
            <li><a href="#services">Email Marketing</a></li>
            <li><a href="#services">Copywriting</a></li>
          </ul>
        </div>

        {/* Column 4: Growth */}
        <div className="footer-column">
          <h4 className="footer-title">Ready to scale?</h4>
          <p className="footer-cta-text">Book your free 30-minute strategy call today and start winning.</p>
          <a href="#contact" className="footer-cta-button">Book Call</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p className="copyright">© 2026 Legendary Bash. Designed with focus.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          padding-top: 100px;
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-subtle);
          color: var(--text-muted);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 60px;
          margin-bottom: 80px;
        }

        .footer-logo {
          color: var(--text-main);
          font-family: var(--font-body);
          font-size: 1.25rem;
          font-weight: 800;
          display: block;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .footer-tagline {
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 32px;
          color: var(--text-muted);
        }

        .footer-social-icons {
          display: flex;
          gap: 16px;
        }

        .footer-social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          transition: all 0.3s ease;
        }

        .footer-social-link:hover {
          background: var(--accent-primary);
          transform: translateY(-3px);
          border-color: var(--accent-primary);
        }

        .footer-title {
          color: var(--text-main);
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 24px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .footer-list {
          display: grid;
          gap: 12px;
        }

        .footer-list a {
          transition: color 0.3s;
          font-size: 0.95rem;
        }

        .footer-list a:hover {
          color: var(--text-main);
        }

        .footer-cta-text {
          margin-bottom: 24px;
          font-size: 1rem;
          line-height: 1.6;
        }

        .footer-cta-button {
          display: inline-block;
          font-weight: 700;
          color: var(--text-main);
          border-bottom: 2px solid var(--accent-primary);
          padding-bottom: 4px;
          transition: all 0.3s;
        }

        .footer-cta-button:hover {
          letter-spacing: 0.05em;
        }

        .footer-bottom {
          padding: 40px 0;
          border-top: 1px solid var(--border-subtle);
          font-size: 0.85rem;
        }

        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bottom-links {
          display: flex;
          gap: 40px;
        }

        .bottom-links a:hover {
          color: var(--text-main);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .bottom-content {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          .bottom-links {
            justify-content: center;
            gap: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
