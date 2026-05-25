import React from 'react';
import { Layers, Construction, Ruler, Check } from 'lucide-react';
import { servicesTranslations, detailedServicesList } from '../data/translations';

interface ServicesProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function Services({ currentLang }: ServicesProps) {
  const t = servicesTranslations[currentLang];

  const services = [
    { icon: <Layers size={32} />, title: t.serv1_title, desc: t.serv1_desc },
    { icon: <Construction size={32} />, title: t.serv2_title, desc: t.serv2_desc },
    { icon: <Ruler size={32} />, title: t.serv4_title, desc: t.serv4_desc },
  ];

  const steps = [
    { num: '01', name: t.step1_name, desc: t.step1_desc },
    { num: '02', name: t.step2_name, desc: t.step2_desc },
    { num: '03', name: t.step3_name, desc: t.step3_desc },
    { num: '04', name: t.step4_name, desc: t.step4_desc },
  ];

  return (
    <section id="paslaugos" className="py-24 bg-[#141617] text-white relative">
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-brand-primary block uppercase">
            // {t.headline}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white leading-tight uppercase">
            {t.title}
          </h2>
          <div className="h-[2px] w-20 bg-brand-primary mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="bg-brand-dark border border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:border-brand-primary/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full filter blur-xl transition-opacity group-hover:opacity-100" />
              
              <div className="flex items-start">
                <div className="text-brand-primary mr-6 bg-brand-dark-lighter p-4 rounded-2xl border border-white/5 group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300">
                  {s.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-sans text-zinc-100 group-hover:text-brand-primary transition-colors uppercase">
                    {s.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Services Grid */}
        <div className="border-t border-white/5 pt-20 mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-brand-primary block uppercase">
              // {t.detailed_title}
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {detailedServicesList.map((item, idx) => (
              <div 
                key={idx}
                className="bg-brand-dark border border-white/5 p-5 rounded-2xl flex items-center space-x-4 hover:border-brand-primary/30 hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(112,179,36,0.03)] transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-300 flex-shrink-0">
                  <Check size={16} />
                </div>
                <span className="text-zinc-200 text-sm font-semibold tracking-wide group-hover:text-white transition-colors">
                  {item[currentLang]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps Block */}
        <div className="border-t border-white/5 pt-20">
          <div className="text-center mb-12">
            <h3 className="text-xl font-mono tracking-widest text-brand-gray font-bold uppercase">
              {t.step_title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((st, i) => (
              <div key={i} className="relative group">
                {/* Connector Line for big screens */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 right-[-50%] h-[1px] bg-zinc-800 group-hover:bg-brand-primary/50 transition-colors z-0" />
                )}
                
                <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                  {/* Number bubble */}
                  <div className="w-16 h-16 rounded-2xl bg-brand-dark-lighter border border-white/5 flex items-center justify-center text-brand-primary font-display font-extrabold text-lg group-hover:bg-brand-primary group-hover:text-brand-dark shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300">
                    {st.num}
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="font-sans font-bold text-base text-zinc-100 group-hover:text-brand-primary transition-colors uppercase">
                      {st.name}
                    </h4>
                    <p className="text-zinc-400 text-xs leading-relaxed max-w-xs">
                      {st.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
