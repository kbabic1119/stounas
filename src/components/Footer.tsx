import React from 'react';
import Logo from './Logo';
import { footerTranslations } from '../data/translations';

interface FooterProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function Footer({ currentLang }: FooterProps) {
  const currentYear = 2026;

  const t = footerTranslations[currentLang];

  const handleScrollToId = (id: string, offset = 80) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-white/5 pt-16 pb-8 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Logo Brand Box */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo className="w-10 h-10 transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1 leading-none">
                  <span className="font-sans font-black text-xl tracking-wider text-white uppercase">MB</span>
                  <span className="font-sans font-black text-xl tracking-wider text-brand-primary uppercase">STOUNAS</span>
                </div>
                <div className="text-[7px] font-mono tracking-[0.2em] text-brand-gray mt-0.5 font-bold uppercase">
                  Granito gamyba
                </div>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              {t.desc}
            </p>
          </div>

          {/* Site Menu Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans font-extrabold text-sm tracking-wider uppercase text-zinc-200">
              {t.links_title}
            </h4>
            <ul className="space-y-2.5 text-zinc-500 font-bold uppercase text-[11px] tracking-wider">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-brand-primary transition-colors cursor-pointer">
                  {t.home}
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToId('apie-mus')} className="hover:text-brand-primary transition-colors cursor-pointer">
                  {t.about}
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToId('paslaugos')} className="hover:text-brand-primary transition-colors cursor-pointer">
                  {t.services}
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToId('kokybe')} className="hover:text-brand-primary transition-colors cursor-pointer">
                  {t.quality}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Compliance Columns */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans font-extrabold text-sm tracking-wider uppercase text-zinc-200">
              {t.legal_title}
            </h4>
            <ul className="space-y-2 text-zinc-400 text-xs font-semibold">
              <li className="hover:text-white transition-colors cursor-pointer">{t.policy}</li>
              <li className="hover:text-white transition-colors cursor-pointer">{t.rules}</li>
              <li className="text-zinc-500 pt-2 font-mono text-[11px] block">{t.license}</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-white/5 pt-8 text-center text-zinc-600 text-[10px] space-y-2 font-medium">
          <div>
            © {currentYear} MB Stounas. {t.rights}
          </div>
          <div className="font-mono opacity-40">
            LOCALE KEY: LT-EU-2026 // GENERATION PROTOCOL V4
          </div>
        </div>

      </div>
    </footer>
  );
}
