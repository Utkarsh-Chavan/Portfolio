import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Exploring from './components/Exploring';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('ALL');
  const [selectedDomain, setSelectedDomain] = useState('INTELLIGENCE');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectDomain = (domainId) => {
    setSelectedDomain(domainId);
    setActiveCategoryFilter(domainId);
  };

  return (
    <div className="min-h-screen bg-bg text-primary font-sans selection:bg-accent selection:text-bg transition-colors duration-300">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent text-bg font-mono text-xs rounded-md shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero />
        <About />
        <Capabilities 
          selectedDomain={selectedDomain} 
          setSelectedDomain={handleSelectDomain} 
        />
        <Journey />
        <Projects 
          activeCategoryFilter={activeCategoryFilter} 
          setActiveCategoryFilter={setActiveCategoryFilter} 
        />
        <Achievements />
        <Exploring />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
