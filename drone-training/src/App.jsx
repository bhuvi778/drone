import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TrainingPrograms from './components/TrainingPrograms';
import Drones from './components/Drones';
import Certifications from './components/Certifications';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => handleSmoothScroll(anchor));
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', (e) => handleSmoothScroll(anchor));
      });
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <TrainingPrograms />
      <Drones />
      <Certifications />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;