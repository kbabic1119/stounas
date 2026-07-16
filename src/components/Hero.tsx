import React, { useState } from 'react';
import { ArrowRight, Mountain, ShieldCheck, Handshake, Layers, Target, Truck, MapPin, Ruler, X } from 'lucide-react';
import backgroundImage from './bg_compressed.jpg';
import Logo from './Logo';
import { heroTranslations, heroModalTranslations, graniteSpecimens as baseSpecimens } from '../data/translations';

interface HeroProps {
  currentLang: 'LT' | 'EN' | 'RU';
  onContactClick: () => void;
  onSelectSpecimen?: (text: string) => void;
}

export default function Hero({ currentLang, onContactClick, onSelectSpecimen }: HeroProps) {
  const t = heroTranslations[currentLang];
  const modalT = heroModalTranslations[currentLang];

  const [selectedSpecimen, setSelectedSpecimen] = useState<any | null>(null);

  const graniteSpecimens = baseSpecimens.map(spec => ({
    id: spec.id,
    name: spec.name[currentLang],
    origin: spec.origin[currentLang],
    density: spec.density,
    frostResistance: spec.frostResistance[currentLang],
    image: spec.image,
    desc: spec.desc[currentLang],
  }));

  const handleSpecimenClick = (id: string) => {
    const spec = graniteSpecimens.find(s => s.id === id);
    if (spec) setSelectedSpecimen(spec);
  };

  return (
    <section className="relative min-h-[105vh] bg-transparent flex flex-col justify-center overflow-hidden pt-24 pb-16">
      
      {/* Background enhancements on top of fixed app background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Brand green glow accents */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(112,179,36,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(112,179,36,0.03),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content Structure */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-10 animate-fade-in">
            {/* Super premium typography with "Blended" effect */}
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl xl:text-8xl font-sans font-black tracking-tight leading-[0.9] uppercase">
                <span className="block bg-clip-text text-transparent bg-cover bg-center drop-shadow-sm" style={{ backgroundImage: `url(${backgroundImage}), url('https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800')` }}>
                  {t.granite}
                </span>
                <span className="block mt-4 text-4xl sm:text-5xl xl:text-6xl font-black text-brand-primary leading-tight text-white drop-shadow-[0_2px_10px_rgba(112,179,36,0.3)]">
                  {t.quality}
                </span>
              </h1>
              
              <div className="h-[4px] w-32 bg-brand-primary rounded-full" />
            </div>

            {/* Subcaption */}
            <p className="font-sans font-extrabold text-xl sm:text-2xl max-w-2xl leading-relaxed bg-gradient-to-r from-brand-primary to-white bg-clip-text text-transparent">
              {t.sub}
            </p>

            {/* Middle Highlight Icons Row (exactly matching the image layout) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {/* Box 1 */}
              <div className="group flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 cursor-pointer">
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  {/* Peaks SVG */}
                  <svg className="w-10 h-10 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    <polygon points="12,17 17,21 7,21" fill="currentColor" opacity="0.15" />
                  </svg>
                </div>
                <div className="space-y-1 w-full">
                  <h3 className="text-[11px] font-sans font-black tracking-wider text-zinc-200 uppercase leading-snug">
                    {t.feature1}
                  </h3>
                  <div className="h-0.5 w-10 bg-brand-primary/30 group-hover:w-full transition-all duration-300 mx-auto sm:mx-0" />
                </div>
              </div>

              {/* Box 2 */}
              <div className="group flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 cursor-pointer">
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  {/* Cutting & Polishing icon element */}
                  <svg className="w-10 h-10 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2A7 7 0 005 9v11a1 1 0 001 1h12a1 1 0 001-1V9a7 7 0 00-7-7z" />
                    <path strokeLinecap="round" d="M12 6v6M10 8h4" />
                    <path d="M3 21h18" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
                <div className="space-y-1 w-full">
                  <h3 className="text-[11px] font-sans font-black tracking-wider text-zinc-200 uppercase leading-snug">
                    {t.feature2}
                  </h3>
                  <div className="h-0.5 w-10 bg-brand-primary/30 group-hover:w-full transition-all duration-300 mx-auto sm:mx-0" />
                </div>
              </div>

              {/* Box 3 */}
              <div className="group flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 cursor-pointer">
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  <ShieldCheck size={40} className="text-brand-primary" strokeWidth={1.5} />
                </div>
                <div className="space-y-1 w-full">
                  <h3 className="text-[11px] font-sans font-black tracking-wider text-zinc-200 uppercase leading-snug">
                    {t.feature3}
                  </h3>
                  <div className="h-0.5 w-10 bg-brand-primary/30 group-hover:w-full transition-all duration-300 mx-auto sm:mx-0" />
                </div>
              </div>

              {/* Box 4 */}
              <div className="group flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 cursor-pointer">
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  <Handshake size={40} className="text-brand-primary" strokeWidth={1.5} />
                </div>
                <div className="space-y-1 w-full">
                  <h3 className="text-[11px] font-sans font-black tracking-wider text-zinc-200 uppercase leading-snug">
                    {t.feature4}
                  </h3>
                  <div className="h-0.5 w-10 bg-brand-primary/30 group-hover:w-full transition-all duration-300 mx-auto sm:mx-0" />
                </div>
              </div>

            </div>

            {/* Bottom Glass Pill Overlay (as shown in image) */}
            <div className="pt-6">
              <div className="glass-panel rounded-3xl md:rounded-full p-4 md:p-1.5 border border-white/5 shadow-2xl flex flex-col md:grid md:grid-cols-5 items-stretch gap-4 md:gap-0 w-full">
                
                {/* Pill segment 1 */}
                <div className="flex items-center space-x-2 px-3 md:px-2 lg:px-4 py-2 hover:bg-white/5 rounded-xl md:rounded-full md:border-r border-zinc-800/80 last:border-r-0 transition-colors">
                  <Layers size={18} className="text-brand-primary flex-shrink-0" />
                  <div className="text-left min-w-0">
                    <div className="text-[9px] lg:text-[10px] font-mono tracking-wider text-brand-gray font-bold line-clamp-1">{t.pill1_lbl}</div>
                    <div className="text-[10px] lg:text-[11px] xl:text-xs font-sans font-extrabold text-white tracking-wide uppercase line-clamp-2 leading-tight">{t.pill1}</div>
                  </div>
                </div>

                {/* Pill segment 2 */}
                <div className="flex items-center space-x-2 px-3 md:px-2 lg:px-4 py-2 hover:bg-white/5 rounded-xl md:rounded-full md:border-r border-zinc-800/80 last:border-r-0 transition-colors">
                  <Target size={18} className="text-brand-primary flex-shrink-0" />
                  <div className="text-left min-w-0">
                    <div className="text-[9px] lg:text-[10px] font-mono tracking-wider text-brand-gray font-bold line-clamp-1">{t.pill2_lbl}</div>
                    <div className="text-[10px] lg:text-[11px] xl:text-xs font-sans font-extrabold text-white tracking-wide uppercase line-clamp-2 leading-tight">{t.pill2}</div>
                  </div>
                </div>

                {/* Pill segment 3 */}
                <div className="flex items-center space-x-2 px-3 md:px-2 lg:px-4 py-2 hover:bg-white/5 rounded-xl md:rounded-full md:border-r border-zinc-800/80 last:border-r-0 transition-colors">
                  <Truck size={18} className="text-brand-primary flex-shrink-0" />
                  <div className="text-left min-w-0">
                    <div className="text-[9px] lg:text-[10px] font-mono tracking-wider text-brand-gray font-bold line-clamp-1">{t.pill3_lbl}</div>
                    <div className="text-[10px] lg:text-[11px] xl:text-xs font-sans font-extrabold text-white tracking-wide uppercase line-clamp-2 leading-tight">{t.pill3}</div>
                  </div>
                </div>

                {/* Pill segment 4 */}
                <div className="flex items-center space-x-2 px-3 md:px-2 lg:px-4 py-2 hover:bg-white/5 rounded-xl md:rounded-full md:border-r border-zinc-800/80 last:border-r-0 transition-colors">
                  <MapPin size={18} className="text-brand-primary flex-shrink-0" />
                  <div className="text-left min-w-0">
                    <div className="text-[9px] lg:text-[10px] font-mono tracking-wider text-brand-gray font-bold line-clamp-1">{t.pill4_lbl}</div>
                    <div className="text-[10px] lg:text-[11px] xl:text-xs font-sans font-extrabold text-white tracking-wide uppercase line-clamp-2 leading-tight">{t.pill4}</div>
                  </div>
                </div>

                {/* Pill segment 5 */}
                <div className="flex items-center space-x-2 px-3 md:px-2 lg:px-4 py-2 hover:bg-white/5 rounded-xl md:rounded-full md:border-r border-zinc-800/80 last:border-r-0 transition-colors">
                  <Ruler size={18} className="text-brand-primary flex-shrink-0" />
                  <div className="text-left min-w-0">
                    <div className="text-[9px] lg:text-[10px] font-mono tracking-wider text-brand-gray font-bold line-clamp-1">{t.pill5_lbl}</div>
                    <div className="text-[10px] lg:text-[11px] xl:text-xs font-sans font-extrabold text-white tracking-wide uppercase line-clamp-2 leading-tight">{t.pill5}</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Hero Image Column representing the mock image setup exactly */}
          <div className="lg:col-span-12 xl:col-span-5 relative w-full flex flex-col items-center justify-center min-h-[450px] lg:min-h-[550px] animate-fade-in order-last xl:order-none">
            
            {/* Unified wrapper container for both mobile & desktop */}
            <div className="relative w-full max-w-[450px] h-[400px] mx-auto my-8 xl:my-0">
              
              {/* Logo on top - Symmetrically on the top edge of the bounding box */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <Logo className="w-16 h-16 filter drop-shadow-[0_4px_12px_rgba(112,179,36,0.3)]" />
              </div>

              {/* Dark Stone wall textured outline bounding box */}
              <div className="w-full h-full border border-white/5 rounded-3xl bg-neutral-900/40 backdrop-blur-sm shadow-inner p-6 flex items-center justify-center overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale opacity-15"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800')` }}
                />
                
                {/* Natural forest sky environment layer behind granite slab mockup */}
                <div className="absolute bottom-0 inset-x-0 h-[65%] bg-gradient-to-t from-emerald-950/20 via-neutral-900/60 to-transparent z-0" />
                <div className="absolute bottom-4 left-6 right-6 top-8 rounded-2xl overflow-hidden bg-zinc-950/40 border border-zinc-800 flex items-center justify-center">
                  
                  {/* Visual Representation of granite stone display */}
                  <div className="absolute inset-0 bg-center bg-cover transition-transform duration-[8s] hover:scale-105" 
                       style={{ backgroundImage: `url('https://images.unsplash.com/photo-1594498653385-d527250c8fc0?auto=format&fit=crop&q=80&w=800')` }} 
                  />
                  
                  {/* Slabs Showcase Graphic Elements */}
                  <div className="absolute inset-0 flex items-end justify-center p-6 space-x-4 bg-gradient-to-t from-neutral-950 via-transparent to-transparent">
                    
                    {/* Polish black granite specimen slab (representing the image detail) */}
                    <div 
                      onClick={() => handleSpecimenClick('black')}
                      className="relative w-[32%] h-[65%] bg-neutral-900 border-l border-t border-zinc-700/60 rounded-t-lg shadow-2xl flex flex-col justify-end overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300 group/slab cursor-pointer"
                    >
                      <img 
                        src={graniteSpecimens.find(s => s.id === 'black')?.image} 
                        alt="Polished black granite"
                        className="absolute inset-0 w-full h-full object-cover group-hover/slab:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-900/40 to-zinc-700/10" />
                      <div className="relative text-center space-y-2 z-10 py-4 px-1">
                        <div className="w-1.5 h-1.5 mx-auto bg-brand-primary rounded-full shadow-[0_0_8px_rgba(112,179,36,0.6)]" />
                        <div className="text-[7px] font-serif text-white/80 tracking-widest font-bold drop-shadow-md uppercase truncate">
                          {graniteSpecimens.find(s => s.id === 'black')?.name}
                        </div>
                      </div>
                    </div>

                    {/* High quality light speckled gray granite specimen */}
                    <div 
                      onClick={() => handleSpecimenClick('gray')}
                      className="relative w-[36%] h-[78%] bg-zinc-800 border-l border-t border-zinc-600/60 rounded-t-xl shadow-2xl flex flex-col justify-between overflow-hidden transform -translate-y-2 hover:-translate-y-4 transition-transform duration-300 group/slab-main cursor-pointer"
                    >
                      <img 
                        src={graniteSpecimens.find(s => s.id === 'gray')?.image} 
                        alt="Speckled gray granite"
                        className="absolute inset-0 w-full h-full object-cover group-hover/slab-main:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
                      <div className="relative flex justify-between items-center px-2 z-10 pt-2">
                        <div className="w-3 h-3 bg-brand-primary rounded-full flex items-center justify-center text-[6px] font-black text-white shadow-lg">★</div>
                      </div>
                      <div className="relative text-center py-4 z-10 px-1">
                        <div className="text-[7px] font-sans text-brand-primary tracking-widest font-black uppercase drop-shadow-md truncate">
                          {graniteSpecimens.find(s => s.id === 'gray')?.name}
                        </div>
                        <div className="text-[6px] font-mono text-zinc-300 tracking-wider">PREMIUM CO</div>
                      </div>
                    </div>

                    {/* Dark grey wave modern style slab */}
                    <div 
                      onClick={() => handleSpecimenClick('aurora')}
                      className="relative w-[28%] h-[60%] bg-zinc-900 border-r border-t border-zinc-700/60 rounded-tr-3xl rounded-tl-sm shadow-2xl flex flex-col justify-end overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-300 group/slab-dark cursor-pointer"
                    >
                      <img 
                        src={graniteSpecimens.find(s => s.id === 'aurora')?.image} 
                        alt="Dark charcoal granite"
                        className="absolute inset-0 w-full h-full object-cover group-hover/slab-dark:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tl from-neutral-900/90 to-transparent" />
                      <div className="relative text-center py-2 z-10 px-1">
                        <div className="text-[7px] font-serif text-white/70 tracking-widest font-bold uppercase truncate">
                          {graniteSpecimens.find(s => s.id === 'aurora')?.name}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Lit candle box overlay for warmth realism - Positioned top-right */}
                  <div className="absolute top-4 right-4 z-10 flex items-center space-x-2 bg-black/75 px-3 py-1.5 rounded-full border border-white/10 text-[9px] font-semibold text-zinc-300">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping" />
                    <span className="font-mono text-[9px] text-amber-500">INDIVIDUALŪS UŽSAKYMAI</span>
                  </div>

                </div>
              </div>

              {/* Bottom Green CTA Button floating centered on the bottom edge */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 w-full flex justify-center">
                <button
                  onClick={onContactClick}
                  className="group flex items-center space-x-3 bg-brand-primary hover:bg-brand-primary-dark text-black font-extrabold px-6 py-4.5 rounded-2xl shadow-[0_4px_20px_rgba(112,179,36,0.35)] transition-all duration-300 transform active:scale-95 text-sm uppercase tracking-wider w-full max-w-xs justify-center"
                >
                  <span>{t.cta}</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Modal detail drawer */}
      {selectedSpecimen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-all duration-300 animate-fade-in">
          <div className="bg-brand-dark border border-white/10 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-scale-up">
            
            {/* Close button - High-contrast styling for clear visibility over bright images */}
            <button 
              onClick={() => setSelectedSpecimen(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white hover:scale-105 border border-white/20 transition-all cursor-pointer z-50 shadow-lg"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image side */}
              <div className="h-64 md:h-auto relative overflow-hidden bg-zinc-900">
                <img 
                  src={selectedSpecimen.image} 
                  alt={selectedSpecimen.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-brand-dark" />
              </div>

              {/* Text side */}
              <div className="p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-brand-primary uppercase font-bold">
                      // {modalT.graniteSpecimen}
                    </span>
                    <h3 className="text-2xl font-display font-black text-white uppercase leading-tight">
                      {selectedSpecimen.name}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {selectedSpecimen.desc}
                  </p>

                  <div className="border-t border-white/5 pt-4 space-y-2.5 text-xs font-sans">
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-medium">{modalT.origin}:</span>
                      <span className="text-zinc-200 font-bold">{selectedSpecimen.origin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-medium">{modalT.density}:</span>
                      <span className="text-zinc-200 font-bold">{selectedSpecimen.density}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500 font-medium">{modalT.frost}:</span>
                      <span className="text-zinc-200 font-bold">{selectedSpecimen.frostResistance}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedSpecimen(null);
                    // Pre-fill notes & scroll using state update if hook is present
                    const prefill = {
                      LT: `Sveiki, noriu pasiteirauti dėl „${selectedSpecimen.name}“ granito panaudojimo mano projekte.`,
                      EN: `Hello, I would like to inquire about using "${selectedSpecimen.name}" granite in my project.`,
                      RU: `Здравствуйте, меня интересует гранит «${selectedSpecimen.name}» для моего проекта.`,
                    }[currentLang];
                    
                    if (onSelectSpecimen) {
                      onSelectSpecimen(prefill);
                    }
                  }}
                  className="w-full bg-brand-primary hover:bg-brand-primary-dark text-black font-black py-3 rounded-xl transition-all duration-200 uppercase tracking-wider text-xs cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>{modalT.cta}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
