import React from 'react';
import { ShieldCheck, CheckSquare, Sparkles, Flame, Snowflake, Clock } from 'lucide-react';
import { qualityTranslations } from '../data/translations';

interface QualityProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function Quality({ currentLang }: QualityProps) {
  const t = qualityTranslations[currentLang];

  return (
    <section id="kokybe" className="py-24 bg-transparent text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(112,179,36,0.04),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-brand-primary block uppercase">
              // {t.headline}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white leading-tight uppercase">
              {t.title}
            </h2>
            <div className="h-[2px] w-16 bg-brand-primary rounded-full" />
          </div>
          <div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {t.sub}
            </p>
          </div>
        </div>

        {/* Feature Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          
          <div className="bg-brand-dark-lighter border border-white/5 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-sans font-extrabold text-base text-zinc-100 uppercase">{t.cert1_title}</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">{t.cert1_desc}</p>
          </div>

          <div className="bg-brand-dark-lighter border border-white/5 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500">
              <Snowflake size={20} />
            </div>
            <h3 className="font-sans font-extrabold text-base text-zinc-100 uppercase">{t.cert2_title}</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">{t.cert2_desc}</p>
          </div>

          <div className="bg-brand-dark-lighter border border-white/5 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
              <Sparkles size={20} />
            </div>
            <h3 className="font-sans font-extrabold text-base text-zinc-100 uppercase">{t.cert3_title}</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">{t.cert3_desc}</p>
          </div>

          <div className="bg-brand-dark-lighter border border-white/5 p-6 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <Clock size={20} />
            </div>
            <h3 className="font-sans font-extrabold text-base text-zinc-100 uppercase">{t.cert4_title}</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">{t.cert4_desc}</p>
          </div>

        </div>

        {/* Direct Comparison Board */}
        <div className="bg-brand-dark border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 border-b border-white/5 bg-gradient-to-r from-zinc-950 to-brand-dark">
            <h3 className="text-lg font-mono tracking-wider font-bold text-center uppercase text-zinc-300">
              {t.comp_title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* US standard column */}
            <div className="p-8 space-y-6 md:border-r border-white/5">
              <div className="flex items-center space-x-3 text-brand-primary mb-4">
                <ShieldCheck size={24} />
                <span className="font-sans font-black tracking-wider text-sm uppercase">{t.comp_us}</span>
              </div>
              <ul className="space-y-4">
                {t.us_list.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-brand-primary mr-3 text-base flex-shrink-0">✓</span>
                    <span className="text-zinc-200 text-xs sm:text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Others column (re-styled to Priorities) */}
            <div className="p-8 space-y-6 bg-brand-primary/[0.01] md:bg-transparent">
              <div className="flex items-center space-x-3 text-brand-primary mb-4">
                <Sparkles size={24} />
                <span className="font-sans font-black tracking-wider text-sm uppercase">{t.comp_others}</span>
              </div>
              <ul className="space-y-4">
                {t.others_list.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-brand-primary/80 mr-3 text-base flex-shrink-0">—</span>
                    <span className="text-zinc-200 text-xs sm:text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
