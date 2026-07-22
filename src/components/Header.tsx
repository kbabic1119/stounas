import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { headerTranslations } from '../data/translations';
import { siteConfig } from '../data/siteConfig';

interface HeaderProps {
  currentLang: 'LT' | 'EN' | 'RU';
  setLang: (lang: 'LT' | 'EN' | 'RU') => void;
}

export default function Header({ currentLang, setLang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const t = headerTranslations[currentLang];

  const menuItems = [
    { id: 'apie-mus', label: t.about, path: '/apie-mus' },
    { id: 'produktai', label: t.products, path: '/produktai' },
    { id: 'paslaugos', label: t.services, path: '/paslaugos' },
    { id: 'kokybe', label: t.quality, path: '/kokybe' },
    { id: 'kontaktai', label: t.contact, path: '/kontaktai' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo element matching the provided image */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <Logo className="w-12 h-12 transition-transform duration-300 group-hover:scale-105" />
            
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-1.5 leading-none">
                <span className="font-sans font-extrabold text-2xl tracking-wide text-white uppercase">MB</span>
                <span className="font-sans font-black text-2xl tracking-wide text-brand-primary uppercase">STOUNAS</span>
              </div>
              <div className="text-[9px] font-mono tracking-[0.25em] mt-1 font-extrabold bg-gradient-to-r from-white to-brand-primary bg-clip-text text-transparent">
                — GRANITAS IR PASLAUGOS —
              </div>
            </div>
          </Link>

          {/* Navigation links - Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item, index) => (
              <React.Fragment key={item.id}>
                {index > 0 && <span className="text-zinc-700 font-light text-xs px-1">|</span>}
                <Link
                  to={item.path}
                  className={`px-3 py-1.5 text-sm font-extrabold uppercase tracking-wider transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-brand-primary' 
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </React.Fragment>
            ))}
          </nav>

          {/* Right utility items: Language switcher and Phone Call */}
          <div className="hidden md:flex items-center space-x-4">

            {/* Language Switcher Row */}
            <div className="flex items-center space-x-2 bg-brand-dark-lighter border border-white/5 px-2.5 py-1.5 rounded-full text-xs font-bold font-mono">
              {(['LT', 'EN', 'RU'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLang(lang)}
                  className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                    currentLang === lang
                      ? 'text-brand-primary'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Premium CTA Phone Button */}
            <a 
              href={`tel:${siteConfig.phone}`} 
              className="flex items-center space-x-2 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase hover:shadow-[0_0_15px_rgba(112,179,36,0.4)] transition-all duration-300"
            >
              <Phone size={14} className="animate-pulse" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-brand-dark-lighter border border-white/5 text-zinc-300 hover:text-white"
              aria-label="Atidaryti meniu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden fixed inset-x-0 top-[73px] bg-brand-dark border-b border-white/10 shadow-2xl transition-all duration-300 transform ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`block w-full text-left px-4 py-3 text-base font-extrabold uppercase tracking-wider border-l-4 ${
                isActive(item.path)
                  ? 'bg-brand-primary/5 text-brand-primary border-brand-primary'
                  : 'text-zinc-300 hover:text-white border-transparent hover:bg-white/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="pt-4 px-4 border-t border-white/5 flex flex-col space-y-4">
            {/* Language Switcher Mobile Row */}
            <div className="flex justify-center space-x-3 py-1 bg-brand-dark-lighter border border-white/5 rounded-xl">
              {(['LT', 'EN', 'RU'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLang(lang)}
                  className={`px-4 py-2 rounded-lg font-mono text-xs font-black tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    currentLang === lang
                      ? 'bg-brand-primary text-brand-dark shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <a 
              href={`tel:${siteConfig.phone}`} 
              className="flex items-center justify-center space-x-2 w-full bg-brand-primary text-brand-dark font-black py-3 rounded-xl tracking-wider uppercase text-sm shadow-md"
            >
              <Phone size={16} />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
