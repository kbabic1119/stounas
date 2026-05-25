import React from 'react';
import { Layers, Construction, FileSpreadsheet, Eye, ClipboardCheck, Ruler } from 'lucide-react';

interface ServicesProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function Services({ currentLang }: ServicesProps) {
  const t = {
    LT: {
      headline: 'PASLAUGOS IR DARBŲ EIGA',
      title: 'Profesionalūs kapaviečių sprendimai nuo A iki Z',
      serv1_title: 'Didmeninis tiekimas',
      serv1_desc: 'Tiekiame granito blokus, pusgaminius, monumentus bei dengiamąsias plokštes akmens apdirbimo dirbtuvėms bei paminklų salonams visoje Lietuvoje palankiomis sąlygomis.',
      serv2_title: 'Kapaviečių įrengimas',
      serv2_desc: 'Pilnas kapo sutvarkymas: pamatų liejimas, paminklų montavimas, skaldos užpylimas arba uždengimas plokštėmis, apželdinimas bei priežiūra.',
      serv3_title: '3D vizualizacijos',
      serv3_desc: 'Prieš pradedant darbus, sukuriame tikroviškus kapavietės 3D maketus, kad užsakovas matytų realų būsimą rezultatą ir pasirinktų geriausią akmens derinį.',
      serv4_title: 'Akmens pjovimas & Graviravimas',
      serv4_desc: 'Kompiuterizuotas raidžių, portretų bei šventųjų paveikslų iškalimas gilaus graviravimo lazeriu būdu paveldo išsaugojimui.',
      step_title: 'MŪSŲ DARBŲ PROCESAS',
      step1_name: 'Nemokama konsultacija',
      step1_desc: 'Išklausome norus, įvertiname kapavietės vietą bei paruošiame preliminarų biudžetą.',
      step2_name: '3D Projektas & Derinimas',
      step2_desc: 'Vizualizuojame projektą trimačiame plane, parenkame granito tekstūras bei atspalvius.',
      step3_name: 'Betonavimas & Pamatas',
      step3_desc: 'Liejame tvirtą armuotą gelžbetonį, atitinkantį visus statybos mechaninius reikalavimus.',
      step4_name: 'Montavimas & Pridavimas',
      step4_desc: 'Sumontuojame paminklus bei priedus, išlyginame aplinką ir atsiskaitome tik už pabaigtą kokybišką rezultatą.',
    },
    EN: {
      headline: 'SERVICES & WORKFLOW',
      title: 'Professional Grave Setup From Draft to Care',
      serv1_title: 'Wholesale Sourcing',
      serv1_desc: 'We supply high-grade granite blocks, semi-finished slabs, monuments, and covering panels to stonemason workshops and retail salons across Lithuania.',
      serv2_title: 'Comprehensive Installation',
      serv2_desc: 'Full cemetery arrangement: concrete basements pouring, headstone setups, gravel fillings, top slab coverings, and restoration works.',
      serv3_title: 'Photorealistic 3D Drafts',
      serv3_desc: 'Prior to site work, we build lifelike 3D mockups. This allows clients to preview the landscape and confidently pick granite color matching.',
      serv4_title: 'Laser Engraving & Inscriptions',
      serv4_desc: 'Computerized laser and sandblast carving of fonts, crosses, and relief portraits with deeply indented stone protection coatings.',
      step_title: 'OUR STREAMLINED PROCESS',
      step1_name: 'Free Consultation',
      step1_desc: 'We carefully discuss your ideas, evaluate site topography, and outline estimated budget ranges.',
      step2_name: '3D Design & Match',
      step2_desc: 'We render the draft in a accurate 3D plane, picking granite grades and border styles with you.',
      step3_name: 'Reinforced Concrete Foundation',
      step3_desc: 'We pour steel-mesh reinforced premium concrete to safely anchor heavy granite works.',
      step4_name: 'Flawless Setup',
      step4_desc: 'We meticulously install monuments, level and clean the surrounding area for your final approval.',
    },
    RU: {
      headline: 'УСЛУГИ И ЭТАПЫ РАБОТ',
      title: 'Профессиональные решения для могил от А до Я',
      serv1_title: 'Оптовые поставки',
      serv1_desc: 'Поставка гранитных блоков, заготовок, готовых памятников и плит для камнерезных цехов и ритуальных салонов Литвы.',
      serv2_title: 'Обустройство под ключ',
      serv2_desc: 'Весь комплекс работ: заливка фундаментов, установка памятников, засыпка щебнем, укладка гранитных плит, озеленение.',
      serv3_title: '3D Визуализация',
      serv3_desc: 'Создаем трехмерную модель будущей могилы, чтобы вы могли увидеть сочетание камня и оценить дизайн до начала работ.',
      serv4_title: 'Резерка & Компьютерная гравировка',
      serv4_desc: 'Сверхточная гравировка букв, эпитафий и портретов на камне профессиональным пескоструйным и лазерным оборудованием.',
      step_title: 'НАШ РАБОЧИЙ ПРОЦЕСС',
      step1_name: 'Бесплатная Консультация',
      step1_desc: 'Согласуем пожелания, оцениваем рельеф участка и подбираем ценовой диапазон.',
      step2_name: '3D Дизайн-Проект',
      step2_desc: 'Создаем эскиз с выбранным гранитом и декоративными элементами.',
      step3_name: 'Заливка фундамента',
      step3_desc: 'Заливаем надежный армированный бетонный цоколь с гидроизоляцией.',
      step4_name: 'Монтаж и Сдача',
      step4_desc: 'Монтируем памятник, гранитные ограды, убираем территорию и сдаем работу.',
    }
  }[currentLang];

  const services = [
    { icon: <Layers size={32} />, title: t.serv1_title, desc: t.serv1_desc },
    { icon: <Construction size={32} />, title: t.serv2_title, desc: t.serv2_desc },
    { icon: <Eye size={32} />, title: t.serv3_title, desc: t.serv3_desc },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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
