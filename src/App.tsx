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

export default function App() {
  const [currentLang, setLang] = useState<'LT' | 'EN' | 'RU'>('LT');

  return (
    <Router>
      <div className="bg-neutral-950 min-h-screen text-zinc-100 font-sans selection:bg-brand-primary selection:text-brand-dark antialiased flex flex-col">
        {/* Top Header */}
        <Header 
          currentLang={currentLang} 
          setLang={setLang} 
        />

        <main className="flex-grow">
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

