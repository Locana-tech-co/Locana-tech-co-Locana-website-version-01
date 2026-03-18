import React, { useState, useCallback } from 'react';
import { Loader } from './components/Loader';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { Integration } from './components/Integration';
import { Products } from './components/Products';
import { Research } from './components/Research';
import { Team } from './components/Team';
import { Careers } from './components/Careers';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const [dark, setDark] = useState(true);
  useScrollReveal();

  const toggleTheme = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
      return next;
    });
  }, []);

  return (
    <>
      <Loader />
      <Cursor />
      <button id="thm" type="button" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
        {dark ? '☀️' : '🌙'}
      </button>
      <Navbar />
      <main>
        <Hero /><Marquee /><Services /><Integration /><Products />
        <Research /><Team /><Careers /><Process /><Pricing /><Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
