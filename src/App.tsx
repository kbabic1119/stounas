/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ServicesPage from './pages/ServicesPage';
import QualityPage from './pages/QualityPage';
import ContactPage from './pages/ContactPage';
import backgroundImage from './components/bg_compressed.jpg';

export default function App() {
  const [currentLang, setLang] = useState<'LT' | 'EN' | 'RU'>('LT');

  return (
    <Router>
      <div className="bg-neutral-950 min-h-screen text-zinc-100 font-sans selection:bg-brand-primary selection:text-brand-dark antialiased flex flex-col relative overflow-x-hidden">
        
        {/* App-wide fixed background image for consistent styling */}
        <div className="fixed inset-0 z-0 select-none pointer-events-none">
          <img 
            src={backgroundImage}
            alt="Cemetery landscape background"
            className="absolute inset-0 w-full h-full object-cover object-bottom"
          />
          {/* Exact gradient overlays from Hero section to guarantee identical visual look and readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/45 to-neutral-950/35 xl:from-neutral-950/80 xl:via-transparent xl:to-neutral-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-[0.01] bg-[url('https://www.transparenttextures.com/patterns/granite.png')]" />
        </div>

        {/* Top Header */}
        <Header 
          currentLang={currentLang} 
          setLang={setLang} 
        />

        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home currentLang={currentLang} />} />
            <Route path="/apie-mus" element={<AboutUs currentLang={currentLang} />} />
            <Route path="/paslaugos" element={<ServicesPage currentLang={currentLang} />} />
            <Route path="/kokybe" element={<QualityPage currentLang={currentLang} />} />
            <Route path="/kontaktai" element={<ContactPage currentLang={currentLang} />} />
          </Routes>
        </main>

        {/* Corporate compliant Footer block */}
        <Footer currentLang={currentLang} />
      </div>
    </Router>
  );
}

