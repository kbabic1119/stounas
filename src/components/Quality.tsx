import React from 'react';
import { ShieldCheck, CheckSquare, Sparkles, Flame, Snowflake, Clock } from 'lucide-react';

interface QualityProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function Quality({ currentLang }: QualityProps) {
  const t = {
    LT: {
      headline: 'AUKŠČIAUSIŲ KOKYBĖS STANDARTŲ GARANTIJA',
      title: 'Apie akmens kokybę mes nekalbame – mes ją sertifikuojame',
      sub: 'Paminklas kapavietėje statomas dešimtmečiams. Todėl kiekvienam užsakymui priskiriame unikalų gamybos pasą ir naudojame tik sertifikuotą natūralų granitą.',
      cert1_title: 'Sertifikuota kilmė',
      cert1_desc: 'Visi mūsų blokai turi saugios kilmės deklaraciją iš didžiausių Skandinavijos karjerų.',
      cert2_title: 'Maksimalus atsparumas atšilimui',
      cert2_desc: 'Granitas tirtas dėl 50 šaldymo-atšildymo ciklų pavojaus Šiaurės Europos sąlygomis.',
      cert3_title: 'Atsparumas samanoms ir pelėsiams',
      cert3_desc: 'Itin kruopštus deimantinis poliravimas užpildo mikroporas, kad neaugtų joks aplinkos grybelis.',
      cert4_title: 'Amžina atspalvio garantija',
      cert4_desc: 'Taurusis natūralus akmuo, kuris neblunka tiesioginėje saulėje ir nekeičia atspalvio nuo pramoninio smogo.',
      comp_title: 'Kodėl MB Stounas kokybė yra pranašesnė?',
      comp_us: 'MB STOUNAS STANDARTAS',
      comp_others: 'PIGIOS IMITACIJOS ATVEJAI',
      us_list: [
        'Tikras Švediškas, Suomiškas, Norvegiškas natūralus akmuo.',
        'Sustiprinto liejimo pamatas su armatūros tinklais.',
        'Raidžių graviravimas atliekamas giliuoju, ilgaamžiu mechaniniu frezavimu.',
        'Profiliuotas sandarinimas deimantinėmis sandarinimo juostomis.'
      ],
      others_list: [
        'Presuoto akmens dulkės, pigus dirbtinis kompozitas iš trečiųjų šalių.',
        'Plonas, nearmuotas cementas, kuris sutrūkinėja per pirmąją žiemą.',
        'Paviršinis, nekokybiškas graviravimas, kuris nusidėvi po kelerių metų.',
        'Paprastas silikonas arba prastos kokybės klijai, pagelstantys ir subyrantys.'
      ]
    },
    EN: {
      headline: 'SUPREME QUALITY STANDARDS WARRANTY',
      title: 'We Do Not Just Talk Quality – We Certify It',
      sub: 'Cemetery monuments are built to last generations. Therefore we assign a unique manufacturing passport and use only certified, pure natural granite.',
      cert1_title: 'Certified Origin',
      cert1_desc: 'All blocks contain a documented geo-origin passport from Europe\'s leading quarries.',
      cert2_title: 'Ultimate Frost Protection',
      cert2_desc: 'Granite is stress-tested against 50 thermal expansion freeze cycles under Arctic conditions.',
      cert3_title: 'Moss & Algae Prevention',
      cert3_desc: 'High-end diamond polishing seals microscopic stone open-pores, preventing vegetative growth.',
      cert4_title: 'Immortal Color Hue',
      cert4_desc: 'Pure, mineral-rich stone that is impervious to UV discoloration and heavy industrial smoke.',
      comp_title: 'Why MB Stounas Quality Outperforms the Rest?',
      comp_us: 'MB STOUNAS STANDARDS',
      comp_others: 'CHEAP COUNTERPARTS',
      us_list: [
        '100% Genuine Nordic premium natural granite blocks.',
        'Extremity reinforced concrete grids to ensure vertical stability.',
        'Mechanical CNC deep milling for permanent font carving.',
        'Faceted diamond-cut weather-tight joints preventing moisture leaks.'
      ],
      others_list: [
        'Synthetic composite powder materials prone to splitting.',
        'Thin non-reinforced mortar blocks shifting after one season.',
        'Shallow surface ink sprays wearing off from heavy rain.',
        'Poor silicon sealing joints disintegrating from sub-zero frost.'
      ]
    },
    RU: {
      headline: 'ГАРАНТИЯ ВЫСШИХ СТАНДАРТОВ КАЧЕСТВА',
      title: 'Мы не просто говорим о качестве — мы сертифицируем его',
      sub: 'Памятник на могиле устанавливается на десятилетия. Поэтому на каждое изделие мы предоставляем паспорт качества и используем только сертифицированный натуральный гранит.',
      cert1_title: 'Сертифицированное происхождение',
      cert1_desc: 'Все материалы поставляются непосредственно из лучших европейских карьеров Скандинавии.',
      cert2_title: 'Сверхвысокая морозостойкость',
      cert2_desc: 'Тестирование камня на 50 суровых циклов замерзания в условиях северного климата.',
      cert3_title: 'Защита от мха и плесени',
      cert3_desc: 'Алмазная полировка до зеркального блеска запечатывает поры акрила.',
      cert4_title: 'Пожизненный цвет',
      cert4_desc: 'Природный гранит, не выгорающий под солнцем и устойчивый к агрессивной городской среде.',
      comp_title: 'В чем превосходство качества MB Stounas?',
      comp_us: 'СТАНДАРТЫ MB STOUNAS',
      comp_others: 'ДЁШЕВЫЕ ИМИТАЦИИ',
      us_list: [
        '100% натуральный скандинавский гранит.',
        'Монолитный армированный фундамент с запасом прочности.',
        'Глубокая механическая гравировка букв на станках с ЧПУ.',
        'Шовная мастика премиум-класса против влажности.'
      ],
      others_list: [
        'Китайский дешевый композит из прессованной крошки.',
        'Плоский тонкий слой застывшего цемента без арматуры.',
        'Поверхностное дешевое напыление краски, смывающееся за сезон.',
        'Обычный силикон, разрушающийся при первых морозах.'
      ]
    }
  }[currentLang];

  return (
    <section id="kokybe" className="py-24 bg-neutral-950 text-white relative">
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

            {/* Others column */}
            <div className="p-8 space-y-6 bg-red-950/[0.04] md:bg-transparent">
              <div className="flex items-center space-x-3 text-red-500 mb-4">
                <span className="text-red-500">✕</span>
                <span className="font-sans font-black tracking-wider text-sm uppercase">{t.comp_others}</span>
              </div>
              <ul className="space-y-4">
                {t.others_list.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-red-500/60 mr-3 text-sm flex-shrink-0">✕</span>
                    <span className="text-zinc-500 text-xs sm:text-sm font-medium">{item}</span>
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
