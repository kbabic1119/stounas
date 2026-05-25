import polishedBlackGranite from '../components/polished_black_granite.png';
import speckledGrayGranite from '../components/speckled_gray_granite.png';
import auroraRedGranite from '../components/aurora_red_granite.png';

export const headerTranslations = {
  LT: {
    about: 'Apie mus',
    services: 'Paslaugos',
    quality: 'Kokybė',
    contact: 'Kontaktai',
    callUs: 'Skambinti',
  },
  EN: {
    about: 'About Us',
    services: 'Services',
    quality: 'Quality',
    contact: 'Contacts',
    callUs: 'Call Now',
  },
  RU: {
    about: 'О нас',
    services: 'Услуги',
    quality: 'Качество',
    contact: 'Контакты',
    callUs: 'Позвонить',
  }
};

export const heroTranslations = {
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
      LT: 'Poliruotas juodas granitas',
      EN: 'Polished Black Granite',
      RU: 'Полированный черный гранит',
    },
    origin: {
      LT: 'Švedija (Diabazas)',
      EN: 'Sweden (Diabase)',
      RU: 'Швеция (Диабаз)',
    },
    density: '3050 kg/m³',
    frostResistance: {
      LT: 'F100 (Aukščiausia klasė)',
      EN: 'F100 (Highest class)',
      RU: 'F100 (Высший класс)',
    },
    image: polishedBlackGranite,
    desc: {
      LT: 'Aukščiausios klasės giliai juodas akmuo su smulkia mineraline struktūra. Ypač populiarus prabangiems paminklams, graviravimui ir dengiamosioms plokštėms.',
      EN: 'Premium-grade deep black stone with a fine mineral structure. Highly popular for high-end monuments, laser engraving, and cover slabs.',
      RU: 'Камень премиум-класса глубокого черного цвета с мелкой минеральной структурой. Очень популярен для элитных памятников, лазерной гравировки и облицовки.',
    }
  },
  {
    id: 'gray',
    name: {
      LT: 'Pilkas taškuotas granitas',
      EN: 'Speckled Gray Granite',
      RU: 'Серый пятнистый гранит',
    },
    origin: {
      LT: 'Suomija (Kuru)',
      EN: 'Finland (Kuru)',
      RU: 'Финляндия (Куру)',
    },
    density: '2680 kg/m³',
    frostResistance: {
      LT: 'F100 (Aukšta)',
      EN: 'F100 (High)',
      RU: 'F100 (Высокая)',
    },
    image: speckledGrayGranite,
    desc: {
      LT: 'Klasikinis šiaurietiškas šviesiai pilkas granitas su tamsiais mineralų intarpais. Pasižymi ypatingu atsparumu atmosferos poveikiui, puikiai tinka pamatų apdailai.',
      EN: 'Classic Nordic light gray granite with dark mineral inclusions. Excellent weather resistance, perfect for foundation coverings and borders.',
      RU: 'Классический скандинавский светло-серый гранит с темными вкраплениями. Обладает высокой устойчивостью к атмосферным воздействиям.',
    }
  },
  {
    id: 'aurora',
    name: {
      LT: 'Aurora raudonas granitas',
      EN: 'Aurora Red Granite',
      RU: 'Аврора красный гранит',
    },
    origin: {
      LT: 'Suomija / Norvegija',
      EN: 'Finland / Norway',
      RU: 'Финляндия / Норвегия',
    },
    density: '2720 kg/m³',
    frostResistance: {
      LT: 'F100 (Aukšta)',
      EN: 'F100 (High)',
      RU: 'F100 (Высокая)',
    },
    image: auroraRedGranite,
    desc: {
      LT: 'Išskirtinis raudonai rudas banguotas granitas su juodomis mineralų venomis. Kiekviena plokštė turi unikalų, nepakartojamą gamtos raštą.',
      EN: 'Unique red-brown wavy granite with black mineral veins. Every slab has a unique, non-repetitive natural pattern.',
      RU: 'Уникальный красно-коричневый волнистый гранит с черными прожилками. Каждая плита имеет неповторимый природный рисунок.',
    }
  }
];

export const aboutTranslations = {
  LT: {
    headline: 'APIE MB STOUNAS',
    title: 'Aukščiausios kokybės granitas ir profesionalus meistriškumas',
    p1: 'MB „Stounas“ yra patikimas Jūsų partneris didmeninėje granito prekyboje ir kapaviečių projektavimo bei įrengimo paslaugose visoje Lietuvoje. Sukaupę didžiulę patirtį, deriname modernią akmens apdirbimo technologiją su autentišku meistriškumu.',
    p2: 'Tiesiogiai iš didžiausių Indijos karjerų importuojame aukščiausios klasės akmenį. Mūsų misija – įamžinti atminimą ilgaamžiais gaminiais, kurie atlaiko laiko išbandymus ir atšiaurias klimato sąlygas.',
    stat1_num: '10+',
    stat1_txt: 'Metų patirtis',
    stat2_num: '800+',
    stat2_txt: 'Įrengta kapaviečių',
    stat3_num: '100%',
    stat3_txt: 'Kokybės garantija',
    stat4_num: '24/7',
    stat4_txt: 'Profesionali pagalba',
    val1_title: 'Ilgaamžis patvarumas',
    val1_desc: 'Naudojame tik aukštos kokybės natūralų granitą, vertinamą dėl savo tvirtumo, atsparumo aplinkos poveikiui ir ilgaamžiškumo.',
    val2_title: 'Kruopštus apdirbimas',
    val2_desc: 'Kiekvienas gaminys ruošiamas atsakingai ir preciziškai, užtikrinant kokybę bei estetišką galutinį rezultatą.',
    val3_title: 'Sklandus montavimas',
    val3_desc: 'Ruošiame armuotus betoninius pamatus, apsaugančius paminklus nuo nusėdimo, pakrypimo ar įtrūkimų bėgant metams.',
  },
  EN: {
    headline: 'ABOUT MB STOUNAS',
    title: 'Premium Quality Granite and Professional Craftsmanship',
    p1: 'MB "Stounas" is your reliable partner in wholesale granite sales, grave design, and installation services throughout Lithuania. With years of experience, we combine state-of-the-art stone processing technologies with authentic stone masonry.',
    p2: 'We import top-grade blocks directly from Indian quarries. Our mission is to preserve memories through durable products that withstand seasonal extremes and the test of time.',
    stat1_num: '10+',
    stat1_txt: 'Years of Experience',
    stat2_num: '800+',
    stat2_txt: 'Completed Sites',
    stat3_num: '100%',
    stat3_txt: 'Quality Warranty',
    stat4_num: '24/7',
    stat4_txt: 'Professional Support',
    val1_title: 'Long-term durability',
    val1_desc: 'We use only high-quality natural granite, valued for its strength, environmental resistance, and longevity.',
    val2_title: 'Meticulous workmanship',
    val2_desc: 'Each product is prepared responsibly and precisely, ensuring quality and an aesthetic final result.',
    val3_title: 'Reinforced Foundations',
    val3_desc: 'We construct thick, reinforced concrete basements preventing tombstone sinking or ground shifting over decades.',
  },
  RU: {
    headline: 'О MB STOUNAS',
    title: 'Высококачественный гранит и профессиональное мастерство',
    p1: 'MB "Stounas" — ваш надежный партнер в сфере оптовой продажи гранита, индивидуального проектирования и благоустройства могил по всей Литве. Мы совмещаем современные технологии и традиционное мастерство.',
    p2: 'Мы поставляем гранитные блоки напрямую из крупнейших карьеров Индии. Наша цель — увековечить память усопших надежными изделиями, выдерживающими любые климатические условия.',
    stat1_num: '10+',
    stat1_txt: 'Лет Опыта',
    stat2_num: '800+',
    stat2_txt: 'Обустроенных могил',
    stat3_num: '100%',
    stat3_txt: 'Гарантия Качества',
    stat4_num: '24/7',
    stat4_txt: 'Персональная помощь',
    val1_title: 'Долговечность',
    val1_desc: 'Мы используем только высококачественный натуральный гранит, ценящийся за свою прочность, устойчивость к воздействию окружающей среды и долговечность.',
    val2_title: 'Тщательная обработка',
    val2_desc: 'Каждое изделие подготавливается ответственно и с высокой точностью, обеспечивая качество и эстетичный результат.',
    val3_title: 'Усиленный фундамент',
    val3_desc: 'Создаем прочные армированные фундаменты, предотвращающие крен и усадку памятника со временем.',
  }
};

export const servicesTranslations = {
  LT: {
    headline: 'PASLAUGOS IR DARBŲ EIGA',
    title: 'Profesionalūs kapaviečių sprendimai nuo A iki Z',
    detailed_title: 'MŪSŲ TEIKIAMOS PASLAUGOS',
    serv1_title: 'Didmeninis/Mažmeninis Tiekimas',
    serv1_desc: 'Tiekiame aukštos kokybės granito plokštes akmens apdirbimo dirbtuvėms, paminklų salonams bei privatiems klientams visoje Lietuvoje palankiomis sąlygomis.',
    serv2_title: 'Kapaviečių įrengimas',
    serv2_desc: 'Pilnas kapo sutvarkymas: pamatų liejimas, paminklų montavimas, skaldos užpylimas arba uždengimas plokštėmis, apželdinimas bei priežiūra.',
    serv3_title: '3D vizualizacijos',
    serv3_desc: 'Prieš pradedant darbus, sukuriame tikroviškus kapavietės 3D maketus, kad užsakovas matytų realų būsimą rezultatą ir pasirinktų geriausią akmens derinį.',
    serv4_title: 'Akmens pjovimas & Graviravimas',
    serv4_desc: 'Kompiuterizuotas raidžių, portretų bei šventųjų paveikslų iškalimas gilaus graviravimo lazeriu būdu paveldo išsaugojimui.',
    step_title: 'MŪSŲ DARBŲ PROCESAS',
    step1_name: 'Nemokama konsultacija',
    step1_desc: 'Išklausome norus, įvertiname kapavietės vietą bei paruošiame preliminarų biudžetą.',
    step2_name: 'Projektavimas ir Derinimas',
    step2_desc: 'Susitinkame vietoje, atliekame reikalingus išmatavimus, aptariame kapavietės sprendimus bei padedame parinkti tinkamiausią granito spalvą ir dizainą.',
    step3_name: 'Betonavimas & Pamatas',
    step3_desc: 'Liejame tvirtą armuotą gelžbetonį, atitinkantį visus statybos mechaninius reikalavimus.',
    step4_name: 'Montavimas & Pridavimas',
    step4_desc: 'Sumontuojame paminklus bei priedus, išlyginame aplinką ir atsiskaitome tik už pabaigtą kokybišką rezultatą.',
  },
  EN: {
    headline: 'SERVICES & WORKFLOW',
    title: 'Professional Grave Setup From Draft to Care',
    detailed_title: 'OUR PROVIDED SERVICES',
    serv1_title: 'Wholesale & Retail Supply',
    serv1_desc: 'We supply high-quality granite slabs to stonemason workshops, monument salons, and private clients across Lithuania under favorable conditions.',
    serv2_title: 'Comprehensive Installation',
    serv2_desc: 'Full cemetery arrangement: concrete basements pouring, headstone setups, gravel fillings, top slab coverings, and restoration works.',
    serv3_title: 'Photorealistic 3D Drafts',
    serv3_desc: 'Prior to site work, we build lifelike 3D mockups. This allows clients to preview the landscape and confidently pick granite color matching.',
    serv4_title: 'Laser Engraving & Inscriptions',
    serv4_desc: 'Computerized laser and sandblast carving of fonts, crosses, and relief portraits with deeply indented stone protection coatings.',
    step_title: 'OUR STREAMLINED PROCESS',
    step1_name: 'Free Consultation',
    step1_desc: 'We carefully discuss your ideas, evaluate site topography, and outline estimated budget ranges.',
    step2_name: 'Design & Matching',
    step2_desc: 'We meet on site, take the necessary measurements, discuss grave solutions, and help you choose the most suitable granite color and design.',
    step3_name: 'Reinforced Concrete Foundation',
    step3_desc: 'We pour steel-mesh reinforced premium concrete to safely anchor heavy granite works.',
    step4_name: 'Flawless Setup',
    step4_desc: 'We meticulously install monuments, level and clean the surrounding area for your final approval.',
  },
  RU: {
    headline: 'УСЛУГИ И ЭТАПЫ РАБОТ',
    title: 'Профессиональные решения для могил от А до Я',
    detailed_title: 'ПРЕДОСТАВЛЯЕМЫЕ УСЛУГИ',
    serv1_title: 'Оптовые и розничные поставки',
    serv1_desc: 'Мы поставляем высококачественные гранитные плиты камнеобрабатывающим мастерским, салонам памятников и частным клиентам по всей Литве на выгодных условиях.',
    serv2_title: 'Обустройство под ключ',
    serv2_desc: 'Весь комплекс работ: заливка фундаментов, установка памятников, засыпка щебнем, укладка гранитных плит, озеленение.',
    serv3_title: '3D Визуализация',
    serv3_desc: 'Создаем трехмерную модель будущей могилы, чтобы вы могли увидеть сочетание камня и оценить дизайн до начала работ.',
    serv4_title: 'Резерка & Компьютерная гравировка',
    serv4_desc: 'Сверхточная гравировка букв, эпитафий и портретов на камне профессиональным пескоструйным и лазерным оборудованием.',
    step_title: 'НАШ РАБОЧИЙ ПРОЦЕСС',
    step1_name: 'Бесплатная Консультация',
    step1_desc: 'Согласуем пожелания, оцениваем рельеф участка и подбираем ценовой диапазон.',
    step2_name: 'Проектирование и согласование',
    step2_desc: 'Встречаемся на месте, проводим необходимые замеры, обсуждаем варианты благоустройства и помогаем выбрать наиболее подходящий цвет и дизайн гранита.',
    step3_name: 'Заливка фундамента',
    step3_desc: 'Заливаем надежный армированный бетонный цоколь с гидроизоляцией.',
    step4_name: 'Монтаж и Сдача',
    step4_desc: 'Монтируем памятник, гранитные ограды, убираем территорию и сдаем работу.',
  }
};

export const qualityTranslations = {
  LT: {
    headline: 'AUKŠČIAUSIŲ KOKYBĖS STANDARTŲ GARANTIJA',
    title: 'Apie akmens kokybę mes nekalbame – mes ją suteikiame',
    sub: 'Paminklas kapavietėje statomas dešimtmečiams. Todėl kiekvienam užsakymui priskiriame unikalų gamybos pasą ir naudojame tik sertifikuotą natūralų granitą.',
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
      'Kokybiškas montavimas pagal Lietuvos klimatą',
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
    sub: 'Cemetery monuments are built to last generations. Therefore we assign a unique manufacturing passport and use only certified, pure natural granite.',
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
      'Quality installation tailored to the Lithuanian climate',
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
    sub: 'Памятник на могиле устанавливается на десятилетия. Поэтому на каждое изделие мы предоставляем паспорт качества и используем только сертифицированный натуральный гранит.',
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
      'Качественный монтаж с учетом литовского климата',
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
    desc: 'Sertifikuoto natūralaus iš Indijos kalnų importuoto granito gamyba, tiesioginis didmeninis tiekimas bei kapaviečių projektavimo-apdailos darbai visoje Lietuvoje.',
    links_title: 'Meniu Nuorodos',
    home: 'Pradžia',
    about: 'Apie mus',
    services: 'Paslaugos',
    quality: 'Kokybė',
    legal_title: 'Saugumas & Teisinė info',
    policy: 'Privatumo politika',
    rules: 'Naudojimo taisyklės',
    license: 'Verslo pažymos Nr. MB-843219',
    rights: 'Visos teisės saugomos. Šis tinklalapis yra apsaugotas Lietuvos Respublikos autorių teisių įstatymo.',
  },
  EN: {
    desc: 'Manufacturing of certified natural granite imported from Indian mountains, direct wholesale deliveries, and graveyard landscape masonry setups throughout Lithuania.',
    links_title: 'Quick Navigation',
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    quality: 'Quality Warranty',
    legal_title: 'Legal & Compliance',
    policy: 'Privacy Policy',
    rules: 'Terms of Use',
    license: 'Business ID: MB-843219',
    rights: 'All rights reserved. Replications without legal consent are strictly prohibited by active IP legislation.',
  },
  RU: {
    desc: 'Производство сертифицированного натурального гранита, импортируемого из индийских гор, прямые оптовые поставки и благоустройство могил по всей территории Литвы.',
    links_title: 'Карта сайта',
    home: 'Главная',
    about: 'О нас',
    services: 'Услуги',
    quality: 'Карантия качества',
    legal_title: 'Правовая информация',
    policy: 'Политика конфиденциальности',
    rules: 'Правила пользования',
    license: 'Идентификационный код: MB-843219',
    rights: 'Все права защищены. Любое копирование материалов преследуется по закону Литовской Республики.',
  }
};

export const detailedServicesList = [
  {
    LT: 'Gaminame paminklus',
    EN: 'Monument Manufacturing',
    RU: 'Изготовление памятников'
  },
  {
    LT: 'Kapų dengimas plokštėmis',
    EN: 'Grave Covering with Slabs',
    RU: 'Покрытие могил плитами'
  },
  {
    LT: 'Paminklo montavimas',
    EN: 'Monument Installation',
    RU: 'Установка памятников'
  },
  {
    LT: 'Plokštės kapams',
    EN: 'Grave Slabs',
    RU: 'Плиты для могил'
  },
  {
    LT: 'Kapaviečių įrengimas',
    EN: 'Cemetery Arrangement',
    RU: 'Обустройство могил'
  },
  {
    LT: 'Kapų tvorelės',
    EN: 'Grave Fences',
    RU: 'Ограды для могил'
  },
  {
    LT: 'Paminklų restauravimas',
    EN: 'Monument Restoration',
    RU: 'Реставрация памятников'
  },
  {
    LT: 'Kapų dekoravimas skaldele',
    EN: 'Grave Decoration with Gravel',
    RU: 'Декорирование могил щебнем'
  },
  {
    LT: 'Pamatų apdaila',
    EN: 'Foundation Decoration',
    RU: 'Отделка фундамента'
  },
  {
    LT: 'Paminklų statymas',
    EN: 'Monument Erection',
    RU: 'Монтаж надгробий'
  },
  {
    LT: 'Granitinės plokštės',
    EN: 'Granite Slabs',
    RU: 'Гранитные плиты'
  },
  {
    LT: 'Skaldos užpylimas',
    EN: 'Gravel Filling',
    RU: 'Засыпка щебнем'
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
  }
];

