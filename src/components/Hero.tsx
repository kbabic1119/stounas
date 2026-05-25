import React from 'react';
import { ArrowRight, Mountain, ShieldCheck, Handshake, Layers, Target, Truck, MapPin } from 'lucide-react';
import backgroundImage from './Gemini_Generated_Image_bwrlxcbwrlxcbwrl.png';
import polishedBlackGranite from './polished_black_granite.png';
import speckledGrayGranite from './speckled_gray_granite.png';
import auroraRedGranite from './aurora_red_granite.png';

interface HeroProps {
  currentLang: 'LT' | 'EN' | 'RU';
  onContactClick: () => void;
}

export default function Hero({ currentLang, onContactClick }: HeroProps) {
  const t = {
    LT: {
      granite: 'GRANITAS.',
      quality: 'KOKYBĖ. PATIKIMUMAS.',
      sub: 'Didmeninė granito prekyba ir kapaviečių įrengimai visoje Lietuvoje.',
      feature1: 'DIDMENINĖ GRANITO PREKYBA',
      feature2: 'KAPAVIEČIŲ ĮRENGIMAS',
      feature3: 'AUKŠTA KOKYBĖ',
      feature4: 'PATIKIMAS PARTNERIS',
      pill1: 'PLATUS ASORTIMENTAS',
      pill2: 'TIKSLUMAS IR ATIDUMAS',
      pill3: 'GREITAS PRISTATYMAS',
      pill4: 'VISOS LIETUVOS APTYRITIS',
      cta: 'SUSISIEKITE SU MUMIS',
    },
    EN: {
      granite: 'GRANITE.',
      quality: 'QUALITY. RELIABILITY.',
      sub: 'Wholesale granite supply and cemetery installation services across Lithuania.',
      feature1: 'WHOLESALE GRANITE',
      feature2: 'CEMETERY INSTALLATION',
      feature3: 'PREMIUM QUALITY',
      feature4: 'TRUSTED PARTNER',
      pill1: 'WIDE VARIETY',
      pill2: 'PRECISION & ATTENTION',
      pill3: 'FAST DELIVERY',
      pill4: 'ALL LITHUANIA COVERAGE',
      cta: 'CONTACT US',
    },
    RU: {
      granite: 'ГРАНИТ.',
      quality: 'КАЧЕСТВО. НАДЕЖНОСТЬ.',
      sub: 'Оптовая торговля гранитом и обустройство могил по всей Литве.',
      feature1: 'ОПТОВАЯ ТОРГОВЛЯ ГРАНИТОМ',
      feature2: 'ОБУСТРОЙСТВО МОГИЛ',
      feature3: 'ВЫСОКОЕ КАЧЕСТВО',
      feature4: 'НАДЕЖНЫЙ ПАРТНЕР',
      pill1: 'ШИРОКИЙ АССОРТИМЕНТ',
      pill2: 'ТОЧНОСТЬ И ВНИМАНИЕ',
      pill3: 'БЫСТРАЯ ДОСТАВКА',
      pill4: 'ОБСЛУЖИВАНИЕ ПО ВСЕЙ ЛИТВЕ',
      cta: 'СВЯЗАТЬСЯ С НАМИ',
    }
  }[currentLang];

  return (
    <section className="relative min-h-[105vh] bg-neutral-950 flex flex-col justify-center overflow-hidden pt-24 pb-16">
      
      {/* Full-bleed serene atmospheric cemetery background layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* User provided background image - Focused on green grass and gray granite gravestones */}
        <img 
          src={backgroundImage}
          alt="Serene cemetery landscape with granite gravestones"
          className="absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-1000"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback only if the main image fails to resolve
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542662565-7e4b66bae529?auto=format&fit=crop&q=80&w=2000';
          }}
        />

        {/* Minimal Overlays - High visibility approach */}
        {/* Very subtle vignetting to help text pop without darkening the main scene */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-transparent to-transparent" />
        
        {/* Ambient brand glow - removed to keep colors natural as requested */}
        
        {/* Granite crystalline overlay - extremely minimal */}
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/granite.png')]" />
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
                  {/* Cemetery element / Tombstone svg matching image style */}
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
              <div className="glass-panel rounded-2xl md:rounded-full p-4 md:p-1.5 border border-white/5 shadow-2xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-1.5 w-full">
                
                {/* Pill segment 1 */}
                <div className="flex items-center space-x-3 px-4 py-2 hover:bg-white/5 rounded-xl md:rounded-full transition-colors flex-1">
                  <Layers size={20} className="text-brand-primary flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-[10px] font-mono tracking-wider text-brand-gray font-bold line-clamp-1">ASORTIMENTAS</div>
                    <div className="text-xs font-sans font-extrabold text-white tracking-wide uppercase line-clamp-1">{t.pill1}</div>
                  </div>
                </div>

                <div className="hidden md:block w-px h-8 bg-zinc-800 self-center" />

                {/* Pill segment 2 */}
                <div className="flex items-center space-x-3 px-4 py-2 hover:bg-white/5 rounded-xl md:rounded-full transition-colors flex-1">
                  <Target size={20} className="text-brand-primary flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-[10px] font-mono tracking-wider text-brand-gray font-bold line-clamp-1">KREIPTIS / DARBŲ</div>
                    <div className="text-xs font-sans font-extrabold text-white tracking-wide uppercase line-clamp-1">{t.pill2}</div>
                  </div>
                </div>

                <div className="hidden md:block w-px h-8 bg-zinc-800 self-center" />

                {/* Pill segment 3 */}
                <div className="flex items-center space-x-3 px-4 py-2 hover:bg-white/5 rounded-xl md:rounded-full transition-colors flex-1">
                  <Truck size={20} className="text-brand-primary flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-[10px] font-mono tracking-wider text-brand-gray font-bold line-clamp-1">PRISTATYMAS</div>
                    <div className="text-xs font-sans font-extrabold text-white tracking-wide uppercase line-clamp-1">{t.pill3}</div>
                  </div>
                </div>

                <div className="hidden md:block w-px h-8 bg-zinc-800 self-center" />

                {/* Pill segment 4 */}
                <div className="flex items-center space-x-3 px-4 py-2 hover:bg-white/5 rounded-xl md:rounded-full transition-colors flex-1">
                  <MapPin size={20} className="text-brand-primary flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-[10px] font-mono tracking-wider text-brand-gray font-bold line-clamp-1">APIMTIS</div>
                    <div className="text-xs font-sans font-extrabold text-white tracking-wide uppercase line-clamp-1">{t.pill4}</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Hero Image Column representing the mock image setup exactly */}
          <div className="lg:col-span-12 xl:col-span-5 relative w-full flex flex-col items-center justify-center min-h-[450px] lg:min-h-[550px] animate-fade-in order-last xl:order-none">
            
            {/* Dark Stone wall textured outline bounding box */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl bg-neutral-900/40 backdrop-blur-sm shadow-inner p-6 flex items-center justify-center overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale opacity-15"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800')` }}
              />
              
              {/* Natural forest sky environment layer behind tombstone mockup */}
              <div className="absolute bottom-0 inset-x-0 h-[65%] bg-gradient-to-t from-emerald-950/20 via-neutral-900/60 to-transparent z-0" />
              <div className="absolute bottom-4 left-6 right-6 top-8 rounded-2xl overflow-hidden bg-zinc-950/40 border border-zinc-800 flex items-center justify-center">
                
                {/* Visual Representation of Cemetery setting (tombstones, gravel garden) */}
                <div className="absolute inset-0 bg-center bg-cover transition-transform duration-[8s] hover:scale-105" 
                     style={{ backgroundImage: `url('https://images.unsplash.com/photo-1594498653385-d527250c8fc0?auto=format&fit=crop&q=80&w=800')` }} 
                />
                
                {/* Slabs / Tombstone Showcase Graphic Elements */}
                <div className="absolute inset-0 flex items-end justify-center p-6 space-x-4 bg-gradient-to-t from-neutral-950 via-transparent to-transparent">
                  
                  {/* Polish black granite specimen tombstone (representing the image detail) */}
                  <div className="relative w-[32%] h-[65%] bg-neutral-900 border-l border-t border-zinc-700/60 rounded-t-lg shadow-2xl flex flex-col justify-end overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300 group/slab">
                    <img 
                      src={polishedBlackGranite} 
                      alt="Polished black granite"
                      className="absolute inset-0 w-full h-full object-cover group-hover/slab:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-900/40 to-zinc-700/10" />
                    <div className="relative text-center space-y-2 z-10 py-4">
                      <div className="w-1.5 h-1.5 mx-auto bg-brand-primary rounded-full shadow-[0_0_8px_rgba(112,179,36,0.6)]" />
                      <div className="text-[7px] font-serif text-white/80 tracking-widest font-bold drop-shadow-md">STEDILIS</div>
                    </div>
                  </div>

                  {/* High quality light speckled gray granite specimen */}
                  <div className="relative w-[36%] h-[78%] bg-zinc-800 border-l border-t border-zinc-600/60 rounded-t-xl shadow-2xl flex flex-col justify-between overflow-hidden transform -translate-y-2 hover:-translate-y-4 transition-transform duration-300 group/slab-main">
                    <img 
                      src={speckledGrayGranite} 
                      alt="Speckled gray granite"
                      className="absolute inset-0 w-full h-full object-cover group-hover/slab-main:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
                    <div className="relative flex justify-between items-center px-2 z-10 pt-2">
                      <div className="w-3 h-3 bg-brand-primary rounded-full flex items-center justify-center text-[6px] font-black text-white shadow-lg">★</div>
                    </div>
                    <div className="relative text-center py-4 z-10">
                      <div className="text-[8px] font-sans text-brand-primary tracking-widest font-black uppercase drop-shadow-md">MB STOUNAS</div>
                      <div className="text-[6px] font-mono text-zinc-300 tracking-wider">PREMIUM CO</div>
                    </div>
                  </div>

                  {/* Dark grey wave modern style tombstone */}
                  <div className="relative w-[28%] h-[60%] bg-zinc-900 border-r border-t border-zinc-700/60 rounded-tr-3xl rounded-tl-sm shadow-2xl flex flex-col justify-end overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-300 group/slab-dark">
                    <img 
                      src={auroraRedGranite} 
                      alt="Dark charcoal granite"
                      className="absolute inset-0 w-full h-full object-cover group-hover/slab-dark:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-neutral-900/90 to-transparent" />
                    <div className="relative text-center py-2 z-10">
                      <div className="text-[7px] font-serif text-white/70 tracking-widest font-bold">AURORA</div>
                    </div>
                  </div>

                </div>

                {/* Floating 3D Logo Shield on the right side over-laying monuments */}
                <div className="absolute top-8 right-8 z-10 w-24 h-24 transform hover:scale-110 hover:rotate-3 transition-all duration-300 drop-shadow-[0_4px_15px_rgba(112,179,36,0.35)]">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Outer Hexagon frame */}
                    <polygon points="50,5 95,30 95,70 50,95 5,70 5,30" fill="#131516" stroke="#70b324" strokeWidth="4" />
                    <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.1" />

                    {/* Slabs */}
                    <polygon points="50,25 75,35 50,45 25,35" fill="#e5e7eb" />
                    <polygon points="50,45 75,35 75,41 50,51" fill="#9ca3af" />
                    <polygon points="50,45 25,35 25,41 50,51" fill="#f3f4f6" />

                    <polygon points="50,47 75,57 50,67 25,57" fill="#a3e635" />
                    <polygon points="50,67 75,57 75,62 50,72" fill="#70b324" />
                    <polygon points="50,67 25,57 25,62 50,72" fill="#84cc16" />

                    <polygon points="50,68 75,76 50,84 25,76" fill="#4b5563" />
                  </svg>
                </div>

                {/* Lit candle box overlay for warmth realism */}
                <div className="absolute bottom-6 right-6 z-10 flex items-center space-x-2 bg-black/75 px-3 py-1.5 rounded-full border border-white/10 text-[9px] font-semibold text-zinc-300">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping" />
                  <span className="font-mono text-[9px] text-amber-500">INDIVIDUALŪS UŽSAKYMAI</span>
                </div>

              </div>
            </div>

            {/* Bottom-right Green CTA Button floating matching image layout */}
            <div className="absolute right-0 bottom-4 z-20">
              <button
                onClick={onContactClick}
                className="group flex items-center space-x-3 bg-brand-primary hover:bg-brand-primary-dark text-black font-extrabold px-6 py-4.5 rounded-2xl shadow-[0_4px_20px_rgba(112,179,36,0.35)] transition-all duration-300 transform active:scale-95 text-sm uppercase tracking-wider"
              >
                <span>{t.cta}</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
