import { Shield, Sparkles, Gem, Award, Wrench } from 'lucide-react';
import { aboutTranslations } from '../data/translations';

interface AboutProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function About({ currentLang }: AboutProps) {
  const t = aboutTranslations[currentLang];

  return (
    <section id="apie-mus" className="py-24 bg-transparent text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(112,179,36,0.06),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-brand-primary block uppercase">
              // {t.headline}
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white leading-tight uppercase">
              {t.title}
            </h2>
            <div className="h-[2px] w-16 bg-brand-primary rounded-full" />
            
            <p className="text-zinc-300 font-sans text-base leading-relaxed">
              {t.p1}
            </p>
            <p className="text-zinc-400 font-sans text-sm leading-relaxed">
              {t.p2}
            </p>

            {/* Metrics stat grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="bg-brand-dark/40 border border-white/5 rounded-2xl p-4 text-center hover:border-brand-primary/25 transition-colors">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary">{t.stat1_num}</div>
                <div className="text-[10px] font-mono font-bold text-zinc-400 tracking-wider uppercase mt-1">{t.stat1_txt}</div>
              </div>
              <div className="bg-brand-dark/40 border border-white/5 rounded-2xl p-4 text-center hover:border-brand-primary/25 transition-colors">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary">{t.stat2_num}</div>
                <div className="text-[10px] font-mono font-bold text-zinc-400 tracking-wider uppercase mt-1">{t.stat2_txt}</div>
              </div>
              <div className="bg-brand-dark/40 border border-white/5 rounded-2xl p-4 text-center hover:border-brand-primary/25 transition-colors">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary">{t.stat3_num}</div>
                <div className="text-[10px] font-mono font-bold text-zinc-400 tracking-wider uppercase mt-1">{t.stat3_txt}</div>
              </div>
              <div className="bg-brand-dark/40 border border-white/5 rounded-2xl p-4 text-center hover:border-brand-primary/25 transition-colors">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-brand-primary">{t.stat4_num}</div>
                <div className="text-[10px] font-mono font-bold text-zinc-400 tracking-wider uppercase mt-1">{t.stat4_txt}</div>
              </div>
            </div>
          </div>

          {/* Right Cards Showcase Column */}
          <div className="space-y-6">
            
            {/* Value 1 card */}
            <div className="flex bg-gradient-to-r from-brand-dark-lighter to-zinc-900 border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-brand-primary/30 transition-all duration-300">
              <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-brand-primary/10 to-transparent filter blur-md" />
              <div className="mr-5 flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Gem size={22} />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-lg text-zinc-100 group-hover:text-brand-primary transition-colors">
                  {t.val1_title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {t.val1_desc}
                </p>
              </div>
            </div>

            {/* Value 2 card */}
            <div className="flex bg-gradient-to-r from-brand-dark-lighter to-zinc-900 border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-brand-primary/30 transition-all duration-300">
              <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-brand-primary/10 to-transparent filter blur-md" />
              <div className="mr-5 flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Award size={22} />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-lg text-zinc-100 group-hover:text-brand-primary transition-colors">
                  {t.val2_title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {t.val2_desc}
                </p>
              </div>
            </div>

            {/* Value 3 card */}
            <div className="flex bg-gradient-to-r from-brand-dark-lighter to-zinc-900 border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-brand-primary/30 transition-all duration-300">
              <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-brand-primary/10 to-transparent filter blur-md" />
              <div className="mr-5 flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Wrench size={22} />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-sans font-bold text-lg text-zinc-100 group-hover:text-brand-primary transition-colors">
                  {t.val3_title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {t.val3_desc}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
