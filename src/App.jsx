import React, { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loader } from './components/Loader';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { AmbientFX } from './components/AmbientFX';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { AllCaseStudiesPage } from './pages/AllCaseStudiesPage';
import { Company } from './pages/Company';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { CaseStudyBikeRental } from './pages/CaseStudyBikeRental';
import { useScrollReveal } from './hooks/useScrollReveal';

function AppInner() {
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
      <AmbientFX />
      <Loader />
      <Cursor />
      <button id="thm" type="button" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
        {dark ? '☀️' : '🌙'}
      </button>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"                        element={<Home />} />
        <Route path="/services"               element={<ServicesPage />} />
        <Route path="/work"                   element={<WorkPage />} />
        <Route path="/work/case-studies"      element={<AllCaseStudiesPage />} />
        <Route path="/work/bike-rental"       element={<CaseStudyBikeRental />} />
        <Route path="/company"                element={<Company />} />
        <Route path="/pricing"                element={<PricingPage />} />
        <Route path="/contact"                element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}

export default App;
