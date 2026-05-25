import React, { useState } from 'react';
import { ArrowRight, Mountain, ShieldCheck, Handshake, Layers, Target, Truck, MapPin, X } from 'lucide-react';
import backgroundImage from './bg_compressed.jpg';
import polishedBlackGranite from './polished_black_granite.png';
import speckledGrayGranite from './speckled_gray_granite.png';
import auroraRedGranite from './aurora_red_granite.png';
import Logo from './Logo';

interface HeroProps {
  currentLang: 'LT' | 'EN' | 'RU';
  onContactClick: () => void;
  onSelectSpecimen?: (text: string) => void;
}

export default function Hero({ currentLang, onContactClick, onSelectSpecimen }: HeroProps) {
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

  const [selectedSpecimen, setSelectedSpecimen] = useState<any | null>(null);

  const modalT = {
    LT: {
      graniteSpecimen: 'GRANITO PAVYZDYS',
      origin: 'Kilmė',
      density: 'Tankis',
      frost: 'Atsparumas šalčiui',
      cta: 'Teirautis dėl šio akmens',
    },
    EN: {
      graniteSpecimen: 'GRANITE SPECIMEN',
      origin: 'Origin',
      density: 'Density',
      frost: 'Frost Resistance',
      cta: 'Inquire About This Stone',
    },
    RU: {
      graniteSpecimen: 'ОБРАЗЕЦ ГРАНИТА',
      origin: 'Происхождение',
      density: 'Плотность',
      frost: 'Морозостойкость',
      cta: 'Узнать подробнее',
    }
  }[currentLang];

  const graniteSpecimens = [
    {
      id: 'black',
      name: {
        LT: 'Poliruotas juodas granitas',
        EN: 'Polished Black Granite',
        RU: 'Полированный черный гранит',
      }[currentLang],
      origin: {
        LT: 'Švedija (Diabazas)',
        EN: 'Sweden (Diabase)',
        RU: 'Швеция (Диабаз)',
      }[currentLang],
      density: '3050 kg/m³',
      frostResistance: 'F100 (Aukščiausia klasė)',
      image: polishedBlackGranite,
      desc: {
        LT: 'Aukščiausios klasės giliai juodas akmuo su smulkia mineraline struktūra. Ypač populiarus prabangiems paminklams, graviravimui ir dengiamosioms plokštėms.',
        EN: 'Premium-grade deep black stone with a fine mineral structure. Highly popular for high-end monuments, laser engraving, and cover slabs.',
        RU: 'Камень премиум-класса глубокого черного цвета с мелкой минеральной структурой. Очень популярен для элитных памятников, лазерной гравировки и облицовки.',
      }[currentLang]
    },
    {
      id: 'gray',
      name: {
        LT: 'Pilkas taškuotas granitas',
        EN: 'Speckled Gray Granite',
        RU: 'Серый пятнистый гранит',
      }[currentLang],
      origin: {
        LT: 'Suomija (Kuru)',
        EN: 'Finland (Kuru)',
        RU: 'Финляндия (Куру)',
      }[currentLang],
      density: '2680 kg/m³',
      frostResistance: 'F100 (Aukšta)',
      image: speckledGrayGranite,
      desc: {
        LT: 'Klasikinis šiaurietiškas šviesiai pilkas granitas su tamsiais mineralų intarpais. Pasižymi ypatingu atsparumu atmosferos poveikiui, puikiai tinka pamatų apdailai.',
        EN: 'Classic Nordic light gray granite with dark mineral inclusions. Excellent weather resistance, perfect for foundation coverings and borders.',
        RU: 'Классический скандинавский светло-серый гранит с темными вкраплениями. Обладает высокой устойчивостью к атмосферным воздействиям.',
      }[currentLang]
    },
    {
      id: 'aurora',
      name: {
        LT: 'Aurora raudonas granitas',
        EN: 'Aurora Red Granite',
        RU: 'Аврора красный гранит',
      }[currentLang],
      origin: {
        LT: 'Suomija / Norvegija',
        EN: 'Finland / Norway',
        RU: 'Финляндия / Норвегия',
      }[currentLang],
      density: '2720 kg/m³',
      frostResistance: 'F100 (Aukšta)',
      image: auroraRedGranite,
      desc: {
        LT: 'Išskirtinis raudonai rudas banguotas granitas su juodomis mineralų venomis. Kiekviena plokštė turi unikalų, nepakartojamą gamtos raštą.',
        EN: 'Unique red-brown wavy granite with black mineral veins. Every slab has a unique, non-repetitive natural pattern.',
        RU: 'Уникальный красно-коричневый волнистый гранит с черными прожилками. Каждая плита имеет неповторимый природный рисунок.',
      }[currentLang]
    }
  ];

  const handleSpecimenClick = (id: string) => {
    const spec = graniteSpecimens.find(s => s.id === id);
    if (spec) setSelectedSpecimen(spec);
  };

  return (
    <section className="relative min-h-[105vh] bg-neutral-950 flex flex-col justify-center overflow-hidden pt-24 pb-16">
      
      {/* Full-bleed serene atmospheric cemetery background layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* User provided background image - Focused on green grass and gray granite gravestones */}
        <img 
          src={backgroundImage}
          alt="Serene cemetery landscape with granite gravestones"
          className="absolute top-0 left-0 w-full h-[100vh] xl:h-full object-cover object-bottom transition-opacity duration-1000"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback only if the main image fails to resolve
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542662565-7e4b66bae529?auto=format&fit=crop&q=80&w=2000';
          }}
        />

        {/* Minimal Overlays - High visibility approach */}
        {/* Darker gradients on mobile to help text pop, subtle vignetting on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/45 to-neutral-950/35 xl:from-neutral-950/80 xl:via-transparent xl:to-neutral-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent" />
        
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
          <div className="lg:col-span-12 xl:col-span-5 relative w-full flex flex-col items-center justify-center min-h-[450px] lg:min-h-[550px] animate-fade-in order-last xl:order-none pt-12 xl:pt-0">
            
            {/* Logo on top - ONLY for mobile (hidden on xl) */}
            <div className="xl:hidden flex justify-center mb-6">
              <Logo className="w-16 h-16 filter drop-shadow-[0_4px_12px_rgba(112,179,36,0.3)]" />
            </div>

            {/* Dark Stone wall textured outline bounding box */}
            <div className="relative xl:absolute xl:inset-0 w-full h-[400px] xl:h-full border border-white/5 rounded-3xl bg-neutral-900/40 backdrop-blur-sm shadow-inner p-6 flex items-center justify-center overflow-hidden">
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
                  <div 
                    onClick={() => handleSpecimenClick('black')}
                    className="relative w-[32%] h-[65%] bg-neutral-900 border-l border-t border-zinc-700/60 rounded-t-lg shadow-2xl flex flex-col justify-end overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300 group/slab cursor-pointer"
                  >
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
                  <div 
                    onClick={() => handleSpecimenClick('gray')}
                    className="relative w-[36%] h-[78%] bg-zinc-800 border-l border-t border-zinc-600/60 rounded-t-xl shadow-2xl flex flex-col justify-between overflow-hidden transform -translate-y-2 hover:-translate-y-4 transition-transform duration-300 group/slab-main cursor-pointer"
                  >
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
                  <div 
                    onClick={() => handleSpecimenClick('aurora')}
                    className="relative w-[28%] h-[60%] bg-zinc-900 border-r border-t border-zinc-700/60 rounded-tr-3xl rounded-tl-sm shadow-2xl flex flex-col justify-end overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-300 group/slab-dark cursor-pointer"
                  >
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

                {/* Floating 3D Logo Shield on the right side over-laying monuments - Hidden on mobile */}
                <div className="hidden xl:block absolute top-8 right-8 z-10 w-24 h-24 transform hover:scale-110 hover:rotate-3 transition-all duration-300 drop-shadow-[0_4px_15px_rgba(112,179,36,0.35)]">
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

            {/* Bottom-right Green CTA Button floating matching image layout - Centered on mobile */}
            <div className="mt-8 xl:mt-0 xl:absolute xl:right-0 xl:bottom-4 z-20 w-full xl:w-auto flex justify-center xl:block">
              <button
                onClick={onContactClick}
                className="group flex items-center space-x-3 bg-brand-primary hover:bg-brand-primary-dark text-black font-extrabold px-6 py-4.5 rounded-2xl shadow-[0_4px_20px_rgba(112,179,36,0.35)] transition-all duration-300 transform active:scale-95 text-sm uppercase tracking-wider w-full max-w-xs justify-center xl:w-auto xl:max-w-none"
              >
                <span>{t.cta}</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1.5" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Modal detail drawer */}
      {selectedSpecimen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-all duration-300 animate-fade-in">
          <div className="bg-brand-dark border border-white/10 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-scale-up">
            
            {/* Close button */}
            <button 
              onClick={() => setSelectedSpecimen(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer z-20"
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
