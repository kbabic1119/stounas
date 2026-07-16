import polishedBlackGranite from '../components/polished_black_granite.jpg';
import viscountWhiteGranite from '../components/viscount_white.jpg';
import auroraRedGranite from '../components/aurora_red_granite.jpg';
import viscountWhiteNewGranite from '../components/viscount_white_new.jpg';
import indianAurora2Granite from '../components/indian_aurora_2.jpg';
import { siteConfig } from './siteConfig';

export const headerTranslations = {
  LT: {
    about: 'Apie mus',
    services: 'Paslaugos',
    quality: 'Kokybė',
    contact: 'Kontaktai',
    products: 'Produktai',
    callUs: 'Skambinti',
  },
  EN: {
    about: 'About Us',
    services: 'Services',
    quality: 'Quality',
    contact: 'Contacts',
    products: 'Products',
    callUs: 'Call Now',
  },
  RU: {
    about: 'О нас',
    services: 'Услуги',
    quality: 'Качество',
    contact: 'Контакты',
    products: 'Продукция',
    callUs: 'Позвонить',
  }
};

export const heroTranslations = {
  LT: {
    granite: 'GRANITAS.',
    quality: 'KOKYBĖ. PATIKIMUMAS.',
    sub: 'Didmeninė granito prekyba, pjovimas ir poliravimas visoje Lietuvoje.',
    feature1: 'DIDMENINĖ GRANITO PREKYBA',
    feature2: 'PJOVIMAS IR POLIRAVIMAS',
    feature3: 'AUKŠTA KOKYBĖ',
    feature4: 'PATIKIMAS PARTNERIS',
    pill1_lbl: 'ASORTIMENTAS',
    pill1: 'POPULIARIAUSI PASIRINKIMAI',
    pill2_lbl: 'KREIPTIS / DARBŲ',
    pill2: 'TIKSLUMAS IR ATIDUMAS',
    pill3_lbl: 'PRISTATYMAS',
    pill3: 'GREITAS PRISTATYMAS',
    pill4_lbl: 'APDIRBIMAS',
    pill4: 'PILNAI POLIRUOTAS',
    pill5_lbl: 'MATMENYS',
    pill5: '255cm x 105cm x 3cm',
    cta: 'SUSISIEKITE SU MUMIS',
  },
  EN: {
    granite: 'GRANITE.',
    quality: 'QUALITY. RELIABILITY.',
    sub: 'Wholesale granite supply, cutting and polishing services across Lithuania.',
    feature1: 'WHOLESALE GRANITE',
    feature2: 'CUTTING & POLISHING',
    feature3: 'PREMIUM QUALITY',
    feature4: 'TRUSTED PARTNER',
    pill1_lbl: 'SELECTION',
    pill1: 'MOST POPULAR CHOICES',
    pill2_lbl: 'PROCESS / ACCURACY',
    pill2: 'PRECISION & ATTENTION',
    pill3_lbl: 'DELIVERY',
    pill3: 'FAST DELIVERY',
    pill4_lbl: 'FINISHING',
    pill4: 'FULLY POLISHED',
    pill5_lbl: 'DIMENSIONS',
    pill5: '255cm x 105cm x 3cm',
    cta: 'CONTACT US',
  },
  RU: {
    granite: 'ГРАНИТ.',
    quality: 'КАЧЕСТВО. НАДЕЖНОСТЬ.',
    sub: 'Оптовая торговля гранитом, резка и полировка по всей Литве.',
    feature1: 'ОПТОВАЯ ТОРГОВЛЯ ГРАНИТОМ',
    feature2: 'РЕЗКА И ПОЛИРОВКА',
    feature3: 'ВЫСОКОЕ КАЧЕСТВО',
    feature4: 'НАДЕЖНЫЙ ПАРТНЕР',
    pill1_lbl: 'АССОРТИМЕНТ',
    pill1: 'ПОПУЛЯРНЫЕ ВАРИАНТЫ',
    pill2_lbl: 'ПРОЦЕСС / СЛУЖБА',
    pill2: 'ТОЧНОСТЬ И ВНИМАНИЕ',
    pill3_lbl: 'ДОСТАВКА',
    pill3: 'БЫСТРАЯ ДОСТАВКА',
    pill4_lbl: 'ОБРАБОТКА',
    pill4: 'ПОЛНОСТЬЮ ПОЛИРОВАННЫЙ',
    pill5_lbl: 'РАЗМЕРЫ',
    pill5: '255cm x 105cm x 3cm',
    cta: 'СВЯЗАТЬСЯ С НАМИ',
  }
};

export const heroModalTranslations = {
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
};

export const graniteSpecimens = [
  {
    id: 'black',
    name: {
      LT: 'Absolute Black',
      EN: 'Absolute Black',
      RU: 'Absolute Black',
    },
    origin: {
      LT: 'Indija (Khammam, Telangana)',
      EN: 'India (Khammam, Telangana)',
      RU: 'Индия (Кхаммам, Телангана)',
    },
    density: '2970 kg/m³',
    frostResistance: {
      LT: 'F100 (Aukščiausia klasė)',
      EN: 'F100 (Highest class)',
      RU: 'F100 (Высший класс)',
    },
    image: polishedBlackGranite,
    desc: {
      LT: 'Giliai juodas, vienalytis Indiškas granitas su itin smulkia kristaline struktūra. Vienas populiariausių akmenų pasaulyje architektūrinei apdailai, fasadams, interjerui ir išorės dangoms dėl išskirtinio atsparumo ir elegancijos.',
      EN: 'Deep black, uniform Indian granite with an ultra-fine crystalline structure. One of the most popular stones worldwide for architectural cladding, facades, flooring, and interior/exterior applications due to its exceptional durability and elegant appearance.',
      RU: 'Глубокий черный однородный индийский гранит с ультрамелкой кристаллической структурой. Один из самых популярных камней в мире для архитектурной облицовки, фасадов, напольных покрытий и интерьерных решений благодаря исключительной прочности и элегантности.',
    }
  },
  {
    id: 'gray',
    name: {
      LT: 'Kuppam Green',
      EN: 'Kuppam Green',
      RU: 'Kuppam Green',
    },
    origin: {
      LT: 'Indija (Kupamas, Andhra Pradešas)',
      EN: 'India (Kuppam, Andhra Pradesh)',
      RU: 'Индия (Куппам, Андхра-Прадеш)',
    },
    density: '2620 kg/m³',
    frostResistance: {
      LT: 'F100 (Aukščiausia klasė)',
      EN: 'F100 (Highest class)',
      RU: 'F100 (Высший класс)',
    },
    image: viscountWhiteGranite,
    desc: {
      LT: 'Šviesus žalsvas ir pilkas natūralus granitas su išraiškingais, bangų formos tamsiais raštais. Kiekviena plokštė turi unikalų raštą, suteikiantį architektūriniam projektui išskirtinį ir modernų estetinį vaizdą.',
      EN: 'Light greenish-gray natural granite characterized by elegant, wavy dark patterns. Each slab features a unique flow, giving any architectural or interior project a highly distinct and modern aesthetic.',
      RU: 'Светло-зеленоватый и серый натуральный гранит с выразительными волнообразными темными узорами. Каждый слэб уникален, придавая любому архитектурному или интерьерному проекту современный и эстетичный вид.',
    }
  },
  {
    id: 'aurora',
    name: {
      LT: 'Indian Aurora',
      EN: 'Indian Aurora',
      RU: 'Indian Aurora',
    },
    origin: {
      LT: 'Indija',
      EN: 'India',
      RU: 'Индия',
    },
    density: '2980 kg/m³',
    frostResistance: {
      LT: 'F100 (Aukščiausia klasė)',
      EN: 'F100 (Highest class)',
      RU: 'F100 (Высший класс)',
    },
    image: auroraRedGranite,
    desc: {
      LT: 'Prabangus raudonai rudas banguotas granitas su dinamiškomis juodomis mineralinėmis gyslomis. Šis akmuo suteikia bet kuriam projektui išskirtinės šilumos ir elegancijos, o dėl didelio tankio yra ypatingai ilgaamžis.',
      EN: 'Premium red-brown wavy granite with dynamic black mineral veins. This stone brings exceptional warmth and elegance to any project, and its high density makes it highly durable against extreme weather.',
      RU: 'Роскошный красно-коричневый волнистый гранит с динамичными черными минеральными прожилками. Придает любому проекту теплоту и элегантность, а благодаря высокой плотности отличается долговечностью.',
    }
  },
  {
    id: 'viscount',
    name: {
      LT: 'Viscount White',
      EN: 'Viscount White',
      RU: 'Viscount White',
    },
    origin: {
      LT: 'Indija',
      EN: 'India',
      RU: 'Индия',
    },
    density: '2660 kg/m³',
    frostResistance: {
      LT: 'F100 (Aukščiausia klasė)',
      EN: 'F100 (Highest class)',
      RU: 'F100 (Высший класс)',
    },
    image: viscountWhiteNewGranite,
    desc: {
      LT: 'Elegantiškas baltai pilkas granitas su dramatiškais tamsiais gyslų raštais, primenančiais natūralų kalnų peizažą. Itin išraiškingas akmuo, suteikiantis prabangos ir unikalumo bet kuriam projektui. Kiekviena plokštė — tai gamtos meno kūrinys.',
      EN: 'Elegant white-grey granite with dramatic dark veining patterns resembling natural mountain landscapes. An exceptionally expressive stone that brings luxury and uniqueness to any project. Each slab is a work of art by nature.',
      RU: 'Элегантный бело-серый гранит с драматичными темными прожилками, напоминающими природный горный пейзаж. Исключительно выразительный камень, придающий роскошь и уникальность любому проекту. Каждая плита — произведение искусства природы.',
    }
  }
];

export const aboutTranslations = {
  LT: {
    headline: 'APIE MB STOUNAS',
    title: 'Aukščiausios kokybės granitas ir profesionalus meistriškumas',
    p1: 'MB „Stounas" yra patikimas Jūsų partneris didmeninėje granito prekyboje, pjovimo ir poliravimo paslaugose visoje Lietuvoje. Sukaupę didžiulę patirtį, deriname modernią akmens apdirbimo technologiją su autentišku meistriškumu.',
    p2: 'Tiesiogiai iš didžiausių Indijos karjerų importuojame aukščiausios klasės akmenį. Mūsų misija – tiekti ilgaamžius, aukštos kokybės granito gaminius, kurie atlaiko laiko išbandymus ir atšiaurias klimato sąlygas.',
    stat1_num: '10+',
    stat1_txt: 'Metų patirtis',
    stat2_num: '800+',
    stat2_txt: 'Patenkintų klientų',
    stat3_num: '100%',
    stat3_txt: 'Kokybės garantija',
    stat4_num: '24/7',
    stat4_txt: 'Profesionali pagalba',
    val1_title: 'Ilgaamžis patvarumas',
    val1_desc: 'Naudojame tik aukštos kokybės natūralų granitą, vertinamą dėl savo tvirtumo, atsparumo aplinkos poveikiui ir ilgaamžiškumo.',
    val2_title: 'Kruopštus apdirbimas',
    val2_desc: 'Kiekvienas gaminys ruošiamas atsakingai ir preciziškai, užtikrinant kokybę bei estetišką galutinį rezultatą.',
    val3_title: 'Tikslus pjovimas',
    val3_desc: 'Naudojame modernią pjovimo įrangą, užtikrinančią tikslias matmenų tolerancijas ir tobulą paviršiaus apdailą kiekvienam užsakymui.',
  },
  EN: {
    headline: 'ABOUT MB STOUNAS',
    title: 'Premium Quality Granite and Professional Craftsmanship',
    p1: 'MB "Stounas" is your reliable partner in wholesale granite sales, cutting, and polishing services throughout Lithuania. With years of experience, we combine state-of-the-art stone processing technologies with authentic stone masonry.',
    p2: 'We import top-grade blocks directly from Indian quarries. Our mission is to supply durable, high-quality granite products that withstand seasonal extremes and the test of time.',
    stat1_num: '10+',
    stat1_txt: 'Years of Experience',
    stat2_num: '800+',
    stat2_txt: 'Satisfied Clients',
    stat3_num: '100%',
    stat3_txt: 'Quality Warranty',
    stat4_num: '24/7',
    stat4_txt: 'Professional Support',
    val1_title: 'Long-term durability',
    val1_desc: 'We use only high-quality natural granite, valued for its strength, environmental resistance, and longevity.',
    val2_title: 'Meticulous workmanship',
    val2_desc: 'Each product is prepared responsibly and precisely, ensuring quality and an aesthetic final result.',
    val3_title: 'Precision Cutting',
    val3_desc: 'We use modern cutting equipment ensuring tight dimensional tolerances and a perfect surface finish on every order.',
  },
  RU: {
    headline: 'О MB STOUNAS',
    title: 'Высококачественный гранит и профессиональное мастерство',
    p1: 'MB "Stounas" — ваш надежный партнер в сфере оптовой продажи гранита, резки и полировки по всей Литве. Мы совмещаем современные технологии камнеобработки и традиционное мастерство.',
    p2: 'Мы поставляем гранитные блоки напрямую из крупнейших карьеров Индии. Наша цель — предоставлять долговечную, высококачественную гранитную продукцию, выдерживающую любые климатические условия.',
    stat1_num: '10+',
    stat1_txt: 'Лет Опыта',
    stat2_num: '800+',
    stat2_txt: 'Довольных клиентов',
    stat3_num: '100%',
    stat3_txt: 'Гарантия Качества',
    stat4_num: '24/7',
    stat4_txt: 'Персональная помощь',
    val1_title: 'Долговечность',
    val1_desc: 'Мы используем только высококачественный натуральный гранит, ценящийся за свою прочность, устойчивость к воздействию окружающей среды и долговечность.',
    val2_title: 'Тщательная обработка',
    val2_desc: 'Каждое изделие подготавливается ответственно и с высокой точностью, обеспечивая качество и эстетичный результат.',
    val3_title: 'Точная резка',
    val3_desc: 'Используем современное оборудование для резки, обеспечивая точные допуски размеров и идеальную отделку поверхности для каждого заказа.',
  }
};

export const servicesTranslations = {
  LT: {
    headline: 'PASLAUGOS IR DARBŲ EIGA',
    title: 'Profesionalūs granito sprendimai nuo tiekimo iki apdailos',
    detailed_title: 'MŪSŲ TEIKIAMOS PASLAUGOS',
    serv1_title: 'Didmeninis / Mažmeninis Tiekimas',
    serv1_desc: 'Tiekiame aukštos kokybės granito plokštes akmens apdirbimo dirbtuvėms, statybos įmonėms bei privatiems klientams visoje Lietuvoje palankiomis sąlygomis.',
    serv2_title: 'Individualus Pjovimas ir Matmenys',
    serv2_desc: 'Pjaustome granito plokštes pagal individualius kliento užsakymus: tikslūs matmenys, lygūs pjūviai ir paruoštos briaunos kiekvienam projektui.',
    serv3_title: '3D vizualizacijos',
    serv3_desc: 'Prieš pradedant darbus, sukuriame tikroviškus 3D maketus, kad užsakovas matytų realų būsimą rezultatą ir pasirinktų geriausią akmens derinį.',
    serv4_title: 'Akmens pjovimas & Graviravimas',
    serv4_desc: 'Kompiuterizuotas raidžių, portretų bei dekoratyvinių elementų iškalimas gilaus graviravimo lazeriu būdu.',
    step_title: 'MŪSŲ DARBŲ PROCESAS',
    step1_name: 'Nemokama konsultacija',
    step1_desc: 'Išklausome norus, įvertiname projekto reikalavimus bei paruošiame preliminarų biudžetą.',
    step2_name: 'Projektavimas ir Derinimas',
    step2_desc: 'Aptariame pjovimo ir apdailos sprendimus, atliekame reikalingus išmatavimus bei padedame parinkti tinkamiausią granito spalvą ir dizainą.',
    step3_name: 'Apdorojimas & Gamyba',
    step3_desc: 'Tikslus pjovimas ir poliravimas naudojant modernią įrangą, atitinkančią aukščiausius kokybės standartus.',
    step4_name: 'Pristatymas & Pridavimas',
    step4_desc: 'Pristatome gatavus gaminius laiku ir atsiskaitome tik už pabaigtą kokybišką rezultatą.',
  },
  EN: {
    headline: 'SERVICES & WORKFLOW',
    title: 'Professional Granite Solutions From Supply to Finish',
    detailed_title: 'OUR PROVIDED SERVICES',
    serv1_title: 'Wholesale & Retail Supply',
    serv1_desc: 'We supply high-quality granite slabs to stonemason workshops, construction companies, and private clients across Lithuania under favorable conditions.',
    serv2_title: 'Custom Cutting & Sizing',
    serv2_desc: 'We cut granite slabs to individual client specifications: precise dimensions, clean cuts, and prepared edges for every project.',
    serv3_title: 'Photorealistic 3D Drafts',
    serv3_desc: 'Prior to production, we build lifelike 3D mockups. This allows clients to preview the result and confidently pick granite color matching.',
    serv4_title: 'Laser Engraving & Inscriptions',
    serv4_desc: 'Computerized laser and sandblast carving of lettering, decorative elements, and relief work with deeply indented stone protection coatings.',
    step_title: 'OUR STREAMLINED PROCESS',
    step1_name: 'Free Consultation',
    step1_desc: 'We carefully discuss your ideas, evaluate project requirements, and outline estimated budget ranges.',
    step2_name: 'Design & Matching',
    step2_desc: 'We discuss cutting and finishing solutions, take the necessary measurements, and help you choose the most suitable granite color and design.',
    step3_name: 'Processing & Production',
    step3_desc: 'Precision cutting and polishing using modern equipment meeting the highest quality standards.',
    step4_name: 'Delivery & Handover',
    step4_desc: 'We deliver finished products on time and only settle payment upon a completed, quality-approved result.',
  },
  RU: {
    headline: 'УСЛУГИ И ЭТАПЫ РАБОТ',
    title: 'Профессиональные гранитные решения от поставки до отделки',
    detailed_title: 'ПРЕДОСТАВЛЯЕМЫЕ УСЛУГИ',
    serv1_title: 'Оптовые и розничные поставки',
    serv1_desc: 'Мы поставляем высококачественные гранитные плиты камнеобрабатывающим мастерским, строительным компаниям и частным клиентам по всей Литве на выгодных условиях.',
    serv2_title: 'Индивидуальная резка и подгонка размеров',
    serv2_desc: 'Режем гранитные плиты по индивидуальным заказам клиента: точные размеры, чистые срезы и подготовленные кромки для любого проекта.',
    serv3_title: '3D Визуализация',
    serv3_desc: 'Создаем трехмерную модель будущего изделия, чтобы вы могли оценить сочетание камня и дизайн до начала производства.',
    serv4_title: 'Резка & Компьютерная гравировка',
    serv4_desc: 'Сверхточная гравировка букв, декоративных элементов и рельефов на камне профессиональным пескоструйным и лазерным оборудованием.',
    step_title: 'НАШ РАБОЧИЙ ПРОЦЕСС',
    step1_name: 'Бесплатная Консультация',
    step1_desc: 'Согласуем пожелания, оцениваем требования проекта и подбираем ценовой диапазон.',
    step2_name: 'Проектирование и согласование',
    step2_desc: 'Обсуждаем варианты резки и отделки, проводим необходимые замеры и помогаем выбрать наиболее подходящий цвет и дизайн гранита.',
    step3_name: 'Обработка и Производство',
    step3_desc: 'Точная резка и полировка с использованием современного оборудования, соответствующего высочайшим стандартам качества.',
    step4_name: 'Доставка и Сдача',
    step4_desc: 'Доставляем готовые изделия в срок и принимаем оплату только после завершения и одобрения результата.',
  }
};

export const qualityTranslations = {
  LT: {
    headline: 'AUKŠČIAUSIŲ KOKYBĖS STANDARTŲ GARANTIJA',
    title: 'Apie akmens kokybę mes nekalbame – mes ją suteikiame',
    sub: 'granito plokštės gaminamos ilgametei eksploatacijai. Todėl kiekvienam projektui parenkame aukštos kokybės natūralų granitą, užtikrinantį ilgaamžiškumą, atsparumą aplinkos poveikiui ir lengvą priežiūrą.',
    cert1_title: 'AUKŠTA KOKYBĖ',
    cert1_desc: 'Naudojame kruopščiai atrinktą natūralų Indišką granitą, pasižymintį ilgaamžiškumu ir atsparumu aplinkos poveikiui.',
    cert2_title: 'Maksimalus atsparumas atšilimui',
    cert2_desc: 'Granitas tirtas dėl 50 šaldymo-atšildymo ciklų pavojaus Šiaurės Europos sąlygomis.',
    cert3_title: 'Atsparumas samanoms ir pelėsiams',
    cert3_desc: 'Itin kruopštus deimantinis poliravimas užpildo mikroporas, kad neaugtų joks aplinkos grybelis.',
    cert4_title: 'Amžina atspalvio garantija',
    cert4_desc: 'Taurusis natūralus akmuo, kuris neblunka tiesioginėje saulėje ir nekeičia atspalvio nuo pramoninio smogo.',
    comp_title: 'Mūsų vertybės ir standartai',
    comp_us: 'Kodėl renkasi MB Stounas',
    comp_others: 'Mūsų prioritetai',
    us_list: [
      'Ilgaamžės granito medžiagos',
      'Patyrę meistrai ir kruopštus apdirbimas',
      'Konsultacija bei matavimai vietoje',
      'Individualus dizaino pritaikymas',
      'Atsakingas požiūris į kiekvieną projektą'
    ],
    others_list: [
      'Kokybiškos medžiagos',
      'Tvirti montavimo sprendimai',
      'Ilgaamžis rezultatas',
      'Estetika ir tvarka',
      'Patikimas aptarnavimas'
    ]
  },
  EN: {
    headline: 'SUPREME QUALITY STANDARDS WARRANTY',
    title: 'We Do Not Just Talk Quality – We Provide It',
    sub: 'Granite slabs are made for long-term operation. Therefore, we select high-quality natural granite for each project, ensuring durability, resistance to environmental impact, and easy maintenance.',
    cert1_title: 'PREMIUM QUALITY',
    cert1_desc: 'We use carefully selected natural Indian granite, characterized by durability and resistance to environmental impact.',
    cert2_title: 'Ultimate Frost Protection',
    cert2_desc: 'Granite is stress-tested against 50 thermal expansion freeze cycles under Arctic conditions.',
    cert3_title: 'Moss & Algae Prevention',
    cert3_desc: 'High-end diamond polishing seals microscopic stone open-pores, preventing vegetative growth.',
    cert4_title: 'Immortal Color Hue',
    cert4_desc: 'Pure, mineral-rich stone that is impervious to UV discoloration and heavy industrial smoke.',
    comp_title: 'Our Values & Standards',
    comp_us: 'Why Choose MB Stounas',
    comp_others: 'Our Priorities',
    us_list: [
      'Durable granite materials',
      'Experienced craftsmen and meticulous processing',
      'On-site consultation and measurements',
      'Custom design adaptation',
      'Responsible approach to every project'
    ],
    others_list: [
      'Quality materials',
      'Robust installation solutions',
      'Long-lasting results',
      'Aesthetics and neatness',
      'Reliable service'
    ]
  },
  RU: {
    headline: 'ГАРАНТИЯ ВЫСШИХ СТАНДАНТОВ КАЧЕСТВА',
    title: 'О качестве камня мы не говорим – мы его предоставляем',
    sub: 'Гранитные плиты производятся для долговечной эксплуатации. Поэтому для каждого проекта мы подбираем высококачественный натуральный гранит, обеспечивающий долговечность, устойчивость к воздействию окружающей среды и простоту ухода.',
    cert1_title: 'ВЫСОКОЕ КАЧЕСТВО',
    cert1_desc: 'Мы используем тщательно отобранный натуральный индийский гранит, отличающийся долговечностью и устойчивостью к воздействию окружающей среды.',
    cert2_title: 'Сверхвысокая морозостойкость',
    cert2_desc: 'Тестирование камня на 50 суровых циклов замерзания в условиях северного климата.',
    cert3_title: 'Защита от мха и плесени',
    cert3_desc: 'Алмазная полировка до зеркального блеска запечатывает поры акрила.',
    cert4_title: 'Пожизненный цвет',
    cert4_desc: 'Природный гранит, не выгорающий под солнцем и устойчивый к агрессивной городской среде.',
    comp_title: 'Наши ценности и стандарты',
    comp_us: 'Почему выбирают MB Stounas',
    comp_others: 'Наши приоритеты',
    us_list: [
      'Долговечные гранитные материалы',
      'Опытные мастера и тщательная обработка',
      'Консультация и замеры на месте',
      'Индивидуальная адаптация дизайна',
      'Ответственный подход к каждому проекту'
    ],
    others_list: [
      'Качественные материалы',
      'Прочные монтажные решения',
      'Долговечный результат',
      'Эстетика и порядок',
      'Надежное обслуживание'
    ]
  }
};

export const contactTranslations = {
  LT: {
    headline: 'SUSISIEKITE SU MUMIS',
    title: 'Aptarkime Jūsų projektą jau šiandien',
    sub: 'Užpildykite kontaktinę formą arba kreipkitės nurodytais kontaktais tiesiogiai. Mūsų specialistai susisieks per 2 darbo valandas.',
    name_lbl: 'Jūsų vardas / Įmonė',
    phone_lbl: 'Telefono numeris',
    email_lbl: 'El. pašto adresas',
    msg_lbl: 'Papildomi projekto reikalavimai ar pasirinkimai',
    send_btn: 'Siųsti užklausą',
    sendingBtn: 'Užklausos siuntimas...',
    success_title: 'Sėkmingai išsiųsta!',
    success_desc: 'Dėkojame už kreipimąsi. MB „Stounas“ vadybininkas jau analizuoja Jūsų užklausą ir netrukus paskambins nurodytu telefonu.',
    error_title: 'Klaida išsiunčiant',
    error_desc: 'Prašome užpildyti privalomus laukelius (Vardą bei Telefoną).',
    info_title: 'MŪSŲ KONTAKTAI',
    address_lbl: 'Biuro & Gamybos adresas',
    address_val: 'Pramonės g. 14, LT-11111 Vilnius, Lietuva',
    work_lbl: 'Darbo laikas',
    work_val1: 'I - V: 08:00 - 18:00',
    work_val2: 'VI: 09:00 - 15:00 (Pagal išankstinį susitarimą)',
    phone_lbl_title: 'Skambinkite mums',
    email_lbl_title: 'Rašykite el. paštu',
    map_guide: 'APTARNAUJAME VISOJE LIETUVOJE',
    map_desc: 'Mūsų meistrai nemokamai atvyksta išmatuoti į bet kurį šalies kampelį, pasirūpindami visomis logistikos procedūromis.'
  },
  EN: {
    headline: 'CONTACT US',
    title: 'Discuss Your Project Today',
    sub: 'Fill up the contact prompt form or reach out directly. Our stone masonry experts respond within 2 business hours.',
    name_lbl: 'Your Name / Company',
    phone_lbl: 'Phone Number',
    email_lbl: 'Email Address',
    msg_lbl: 'Additional Requirements or Budget Notes',
    send_btn: 'Send Inquiry',
    sendingBtn: 'Sending Inquiry...',
    success_title: 'Inquiry Sent Successfully!',
    success_desc: 'Thank you for reaching out. An expert from MB Stounas is already analyzing your estimate and will contact you shortly.',
    error_title: 'Validation Failed',
    error_desc: 'Please fill up the mandatory Name and Phone parameters.',
    info_title: 'CONTACT DETAILS',
    address_lbl: 'Office & Quarry Depot Address',
    address_val: 'Pramones str. 14, LT-11111 Vilnius, Lithuania',
    work_lbl: 'Working Hours',
    work_val1: 'Mon - Fri: 08:00 - 18:00',
    work_val2: 'Sat: 09:00 - 15:00 (Prior arrangement necessary)',
    phone_lbl_title: 'Phone',
    email_lbl_title: 'Email support',
    map_guide: 'NATIONWIDE SERVICE AREA',
    map_desc: 'Our specialists provide complimentary surveys and dimensions taking anywhere in Lithuania, arranging complete shipping.'
  },
  RU: {
    headline: 'СВЯЗАТЬСЯ С НАМИ',
    title: 'Обсудим ваш проект сегодня',
    sub: 'Заполните форму обратной связи или позвоните напрямую. Менеджеры подготовят предложение в течение 2 рабочих часов.',
    name_lbl: 'Ваше имя / Компания',
    phone_lbl: 'Номер телефона',
    email_lbl: 'Эл. почта',
    msg_lbl: 'Параметры памятника или пожелания к проекту',
    send_btn: 'Отправить запрос',
    sendingBtn: 'Отправка запроса...',
    success_title: 'Успешно отправлено!',
    success_desc: 'Спасибо за ваше обращение. Специалисты MB "Stounas" уже обрабатывают вашу смету и свяжутся с вами в ближайшее время.',
    error_title: 'Ошибка отправки',
    error_desc: 'Пожалуйста, заполните имя и телефон.',
    info_title: 'КОНТАКТНАЯ ИНФОРМАЦИЯ',
    address_lbl: 'Адрес офиса и производства',
    address_val: 'Pramonės g. 14, LT-11111 Вильнюс, Литва',
    work_lbl: 'Время работы',
    work_val1: 'Пн - Пт: 08:00 - 18:00',
    work_val2: 'Сб: 09:00 - 15:00 (По предварительной договоренности)',
    phone_lbl_title: 'Телефон',
    email_lbl_title: 'Эл. почта',
    map_guide: 'ОБСЛУЖИВАЕМ ПО ВСЕЙ ЛИТВЕ',
    map_desc: 'Наши мастера бесплатно приедут для замеров в любую точку страны, взяв на себя все заботы по логистике.'
  }
};

export const footerTranslations = {
  LT: {
    desc: 'Sertifikuoto natūralaus iš Indijos kalnų importuoto granito gamyba, tiesioginis didmeninis tiekimas, pjovimas ir poliravimas visoje Lietuvoje.',
    links_title: 'Meniu Nuorodos',
    home: 'Pradžia',
    about: 'Apie mus',
    products: 'Produktai',
    services: 'Paslaugos',
    quality: 'Kokybė',
    legal_title: 'Saugumas & Teisinė info',
    policy: 'Privatumo politika',
    rules: 'Naudojimo taisyklės',
    license: 'Verslo pažymos Nr. MB-843219',
    rights: 'Visos teisės saugomos. Šis tinklalapis yra apsaugotas Lietuvos Respublikos autorių teisių įstatymo.',
  },
  EN: {
    desc: 'Manufacturing of certified natural granite imported from Indian mountains, direct wholesale deliveries, precision cutting and polishing services throughout Lithuania.',
    links_title: 'Quick Navigation',
    home: 'Home',
    about: 'About Us',
    products: 'Products',
    services: 'Services',
    quality: 'Quality Warranty',
    legal_title: 'Legal & Compliance',
    policy: 'Privacy Policy',
    rules: 'Terms of Use',
    license: 'Business ID: MB-843219',
    rights: 'All rights reserved. Replications without legal consent are strictly prohibited by active IP legislation.',
  },
  RU: {
    desc: 'Производство сертифицированного натурального гранита, импортируемого из индийских гор, прямые оптовые поставки, точная резка и полировка по всей территории Литвы.',
    links_title: 'Карта сайта',
    home: 'Главная',
    about: 'О нас',
    products: 'Продукция',
    services: 'Услуги',
    quality: 'Карантия качества',
    legal_title: 'Правовая информация',
    policy: 'Политика конфиденциальности',
    rules: 'Правила пользования',
    license: 'Идентификационный код: MB-843219',
    rights: 'Все права защищены. Любое копирование материалов преследуется по закону Литовской Республики.',
  }
};

export const productsTranslations = {
  LT: {
    headline: 'ASORTIMENTAS',
    title: 'Mūsų Granito Asortimentas',
    sub: 'Aukščiausios kokybės natūralus granitas iš Indijos karjerų. Kiekvienas akmuo kruopščiai atrinktas ir profesionaliai apdorotas.',
    clickForDetails: 'Spustelėkite plačiau →',
  },
  EN: {
    headline: 'SELECTION',
    title: 'Our Granite Selection',
    sub: 'Premium quality natural granite from Indian quarries. Each stone is carefully selected and professionally processed.',
    clickForDetails: 'Click for details →',
  },
  RU: {
    headline: 'АССОРТИМЕНТ',
    title: 'Наш ассортимент гранита',
    sub: 'Натуральный гранит высшего качества из индийских карьеров. Каждый камень тщательно отобран и профессионально обработан.',
    clickForDetails: 'Нажмите для подробностей →',
  }
};

export const detailedServicesList = [
  {
    LT: 'Granitinių plokščių tiekimas',
    EN: 'Granite Slab Supply',
    RU: 'Поставка гранитных плит'
  },
  {
    LT: 'Individualus pjovimas pagal matmenis',
    EN: 'Custom Cutting to Size',
    RU: 'Индивидуальная резка по размерам'
  },
  {
    LT: 'Paviršiaus poliravimas',
    EN: 'Surface Polishing',
    RU: 'Полировка поверхности'
  },
  {
    LT: 'Briaunų apdirbimas',
    EN: 'Edge Profiling',
    RU: 'Обработка кромок'
  },
  {
    LT: 'Didmeniniai užsakymai',
    EN: 'Wholesale Orders',
    RU: 'Оптовые заказы'
  },
  {
    LT: 'Pristatymas visoje Lietuvoje',
    EN: 'Nationwide Delivery',
    RU: 'Доставка по всей Литве'
  },
  {
    LT: 'Lazerinė graviūra',
    EN: 'Laser Engraving',
    RU: 'Лазерная гравировка'
  },
  {
    LT: 'Raidžių kalimas',
    EN: 'Letter Carving',
    RU: 'Гравировка букв'
  },
  {
    LT: 'Portretų kalimas',
    EN: 'Portrait Carving',
    RU: 'Гравировка портретов'
  },
  {
    LT: 'Granito pavyzdžių atranka',
    EN: 'Sample Selection',
    RU: 'Подбор образцов камня'
  },
  {
    LT: 'Granitinės plokštės',
    EN: 'Granite Slabs',
    RU: 'Гранитные плиты'
  },
  {
    LT: '3D vizualizacijos',
    EN: '3D Visualisation',
    RU: '3D Визуализация'
  }
];

