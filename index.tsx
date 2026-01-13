import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Components (Imports will be active as I create them)
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import About from './components/About';
import ProblemSolution from './components/ProblemSolution';
import LearnSection from './components/LearnSection';
import Services from './components/Services';
import Process from './components/Process';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <About />
        <ProblemSolution />
        <LearnSection />
        <SocialProof />
        <Process />
        <Results />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}