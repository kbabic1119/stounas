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
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import QualityPage from './pages/QualityPage';
import ContactPage from './pages/ContactPage';

const backgrounds = [
  'bg_user_quarry2.jpg',
  'bg_user_quarry3.jpg',
  'bg_quarry.jpg',
  'bg_hands.jpg',
  'bg_warehouse.jpg',
  'bg_user_warehouse2.jpg',
];

export default function App() {
  const [currentLang, setLang] = useState<'LT' | 'EN' | 'RU'>('LT');
  const [bgIndex, setBgIndex] = useState(0);

  return (
    <Router>
      <div className="bg-neutral-950 min-h-screen text-zinc-100 font-sans selection:bg-brand-primary selection:text-brand-dark antialiased flex flex-col relative overflow-x-hidden">
        
        {/* App-wide fixed background — covers viewport only = no quality loss */}
        <div className="fixed inset-0 z-0 select-none pointer-events-none">
          {/* Background image — slightly oversized for subtle parallax movement */}
          <img
            src={`${import.meta.env.BASE_URL}${backgrounds[bgIndex]}`}
            alt=""
            className="fixed inset-x-0 top-1/2 -translate-y-1/2 w-full h-[110vh] object-cover transition-opacity duration-700"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/60 via-zinc-900/50 to-neutral-950/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(112,179,36,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(112,179,36,0.04),transparent_50%)]" />
          
          {/* Granite crystalline texture */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/granite.png')]" />
          
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-transparent" />
        </div>

        {/* Top Header */}
        <Header 
          currentLang={currentLang} 
          setLang={setLang}
          bgIndex={bgIndex}
          setBgIndex={setBgIndex}
          totalBackgrounds={backgrounds.length}
        />

        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home currentLang={currentLang} />} />
            <Route path="/apie-mus" element={<AboutUs currentLang={currentLang} />} />
            <Route path="/produktai" element={<ProductsPage currentLang={currentLang} />} />
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

