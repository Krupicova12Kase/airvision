export type Lang = "cs" | "en";

export const t = {
  nav: {
    about: { cs: "O projektu", en: "About" },
    technology: { cs: "Technologie", en: "Technology" },
    results: { cs: "Výsledky", en: "Results" },
    team: { cs: "Tým", en: "Team" },
    collaboration: { cs: "Spolupráce a povolení", en: "Collaboration & Permits" },
    contact: { cs: "Kontakt", en: "Contact" },
  },
  hero: {
    subtitle: {
      cs: "Monitorování zdravotního stavu městských alejí",
      en: "Monitoring Urban Tree-Lined Avenue Health",
    },
    description: {
      cs: "Využíváme drony vlastní konstrukce s NDVI analýzou pro přesné hodnocení zdraví alejí v Hradci Králové.",
      en: "Using custom-built drones with NDVI analysis for precise health assessment of tree-lined avenues in Hradec Králové.",
    },
    cta: { cs: "Zjistit více", en: "Learn More" },
  },
  about: {
    title: { cs: "O projektu", en: "About the Project" },
    p1: {
      cs: "Projekt AirVision se zabývá monitorováním zdravotního stavu alejí ve městěch. Pomocí dronu vlastní konstrukce snímáme městskou zeleň v RGB a NIR spektru, z čehož následně vypočítáváme NDVI index zdraví vegetace.",
      en: "The AirVision project monitors the health of tree-lined avenues in cities. Using a custom-built drone, we capture urban greenery in RGB and NIR spectra, from which we calculate the NDVI vegetation health index.",
    },
    p2: {
      cs: "Oproti satelitním snímkům dosahujeme mnohonásobně vyššího rozlišení – pixely na centimetr oproti metrům na pixel. To nám umožňuje identifikovat problémy jednotlivých stromů, které by ze satelitu nebyly viditelné.",
      en: "Compared to satellite images, we achieve significantly higher resolution — pixels per centimeter versus meters per pixel. This allows us to identify issues with individual trees that would be invisible from satellite imagery.",
    },
    p3: {
      cs: "Projekt vzniká v rámci soutěže Tvořivá klávesnice na Prvním soukromém jazykovém gymnáziu v Hradci Králové a jeho část byla prezentována na mezinárodním summitu Climate Detectives pořádaném Evropskou vesmírnou agenturou (ESA) v Itálii.",
      en: "The project was created as part of the Tvořivá klávesnice competition at the First Private Language Gymnasium in Hradec Králové and part of it was presented at the international Climate Detectives summit organized by the European Space Agency (ESA) in Italy.",
    },
  },
  ndvi: {
    title: { cs: "Co je NDVI?", en: "What is NDVI?" },
    description: {
      cs: "Normalizovaný diferenční vegetační index (NDVI) je ověřená metoda pro určení zdravotního stavu vegetace. Vypočítává se ze dvou spekter – blízkého infračerveného (NIR) a červeného (RED) záření podle vzorce:",
      en: "The Normalized Difference Vegetation Index (NDVI) is a proven method for determining vegetation health. It is calculated from two spectra — near-infrared (NIR) and red (RED) radiation using the formula:",
    },
  },
  tech: {
    title: { cs: "Technologie", en: "Technology" },
    drone: {
      title: { cs: "Dron vlastní konstrukce", en: "Custom-Built Drone" },
      desc: {
        cs: "7palcový automatický dron na platformě ArduPilot s hmotností pouhých 2 kg – výrazně bezpečnější než komerční řešení vážící 10–15 kg. Využívá Mission Planner pro opakovatelné trasování.",
        en: "7-inch automatic drone on the ArduPilot platform weighing only 2 kg — significantly safer than commercial solutions weighing 10–15 kg. Uses Mission Planner for repeatable route planning.",
      },
    },
    cameras: {
      title: { cs: "Duální kamerový systém", en: "Dual Camera System" },
      desc: {
        cs: "Raspberry Pi Camera 3 pro RGB a Camera 3 NoIR pro NIR spektrum, připojené k Raspberry Pi Zero. Systém v reálném čase počítá NDVI syntézu.",
        en: "Raspberry Pi Camera 3 for RGB and Camera 3 NoIR for NIR spectrum, connected to Raspberry Pi Zero. The system calculates NDVI synthesis in real-time.",
      },
    },
    software: {
      title: { cs: "Softwarové řešení", en: "Software Stack" },
      desc: {
        cs: "Mission Planner pro automatické řízení, Raspberry Pi Connect pro náhled a snímkování, Copernicus Browser pro satelitní porovnání a Autodesk Fusion pro 3D modelování.",
        en: "Mission Planner for automatic control, Raspberry Pi Connect for preview and imaging, Copernicus Browser for satellite comparison, and Autodesk Fusion for 3D modeling.",
      },
    },
    weather: {
      title: { cs: "Meteorologická data", en: "Meteorological Data" },
      desc: {
        cs: "Školní meteostanice od roku 2021 zaznamenává data každých 5 minut a sdílí je s institucemi v Německu, USA a Velké Británii. Za kontinuální sdílení dat získala zlatou medaili z USA.",
        en: "School weather station has been recording data every 5 minutes since 2021, sharing with institutions in Germany, USA, and UK. Received a gold medal from USA for continuous data sharing.",
      },
    },
  },
  results: {
    title: { cs: "Výsledky", en: "Results" },
    summary: {
      cs: "Monitorování Jiráskových sadů ukázalo, že naše metoda je to správné řešení pro městské aleje.",
      en: "Monitoring of Jiráskovy sady park showed that our method is the right solution for urban tree-lined avenues.",
    },
    items: [
      {
        title: { cs: "Celkový stav", en: "Overall Condition" },
        desc: {
          cs: "Velmi obstojný stav bez nutnosti zásahu. Traviny s možností menšího stresování.",
          en: "Very satisfactory condition with no intervention needed. Minor stress possible in grasses.",
        },
      },
      {
        title: { cs: "Choré stromy", en: "Diseased Trees" },
        desc: {
          cs: "Traviny ve vynikajícím stavu, ale pravděpodobná choroba stromu identifikována díky NDVI.",
          en: "Grasses in excellent condition, but probable tree disease identified through NDVI.",
        },
      },
      {
        title: { cs: "Stresované koruny", en: "Stressed Canopies" },
        desc: {
          cs: "Nestresované traviny a nižší části, ale stresované koruny stromů bez známého důvodu.",
          en: "Unstressed grasses and lower sections, but stressed tree canopies without known cause.",
        },
      },
    ],
  },
  advantages: {
    title: { cs: "Výhody našeho řešení", en: "Our Advantages" },
    items: [
      {
        title: { cs: "Bezpečnost", en: "Safety" },
        desc: {
          cs: "Dron o hmotnosti 2 kg oproti 10–15 kg u komerčních řešení. Vestavěný FTS umožňuje řízené přistání místo pádu. Malé vrtule nepoškozují zeleň ani neovlivňují snímkování. Není nutné uzavírat zónu snímkování.",
          en: "A 2 kg drone versus 10–15 kg commercial solutions. Built-in FTS enables controlled landing instead of a crash. Small rotors don't damage greenery or affect imaging. No need to close off the monitoring zone.",
        },
      },
      {
        title: { cs: "Rozlišení", en: "Resolution" },
        desc: {
          cs: "Až 100× přesnější než satelitní snímkování – řády pixelů na 1 cm² oproti metrům na pixel u satelitů. Lze sledovat nejen každý strom zvlášť, ale i jednotlivé větve.",
          en: "Up to 100× more precise than satellite imaging — pixels per cm² compared to meters per pixel from satellites. We can monitor not just individual trees, but even single branches.",
        },
      },
      {
        title: { cs: "Náklady", en: "Cost" },
        desc: {
          cs: "Cca 50 tisíc Kč oproti půl milionu u komerčního snímkování. Nízké provozní náklady zpřístupňují službu i menším zadavatelům.",
          en: "Approximately 50,000 CZK compared to ~500,000 CZK for commercial imaging. Low operating costs make the service accessible even to smaller clients.",
        },
      },
      {
        title: { cs: "Modularita", en: "Modularity" },
        desc: {
          cs: "Výměnné objektivy, snímače, rotory i baterie. Dron lze přizpůsobit přesně potřebám konkrétního monitorování – to u komerčních dronů není možné.",
          en: "Interchangeable lenses, sensors, rotors, and batteries. The drone can be tailored precisely to specific monitoring needs — something commercial drones cannot offer.",
        },
      },
      {
        title: { cs: "NDVI v reálném čase", en: "Real-Time NDVI" },
        desc: {
          cs: "Palubní počítač generuje NDVI snímky přímo za letu. Operátor okamžitě vidí výsledky a může snímek zopakovat – u komerčních dronů se NDVI zpracovává až dodatečně.",
          en: "On-board computer generates NDVI images during flight. The operator sees results instantly and can retake images — commercial drones process NDVI only after landing.",
        },
      },
      {
        title: { cs: "Snímkování na vyžádání", en: "On-Demand Monitoring" },
        desc: {
          cs: "Monitorování lze realizovat v době skutečné potřeby, nikoliv pouze při přeletu satelitu. Trasu letu lze naprogramovat tak, aby byla vždy totožná pro porovnání v čase.",
          en: "Monitoring can be performed when actually needed, not only during satellite flyovers. Flight paths can be programmed identically for consistent time-series comparison.",
        },
      },
    ],
  },
  team: {
    title: { cs: "Tým", en: "Team" },
    members: [
      {
        name: "Maxmilian Kunc",
        initials: "MK",
        role: { cs: "Autor projektu, student 2.F", en: "Project Author, 2.F student" },
      },
      {
        name: "Jacob Tebbens",
        initials: "JT",
        role: { cs: "Autor projektu, student 2.F", en: "Project Author, 2.F student" },
      },
      {
        name: "Lukáš Zimčík",
        initials: "LZ",
        role: { cs: "Autor projektu, student 2.F", en: "Project Author, 2.F student" },
      },
      {
        name: "Mgr. Blanka Žitná",
        initials: "BŽ",
        role: { cs: "Vedoucí práce", en: "Supervisor" },
      },
      {
        name: "Martin Žitný",
        initials: "MŽ",
        role: { cs: "Odborný konzultant", en: "Technical Consultant" },
      },
    ],
  },
  collaboration: {
    title: { cs: "Spolupráce a povolení", en: "Collaboration & Permits" },
    items: [
      {
        cs: "Odbor městské ekologie města Hradce Králové",
        en: "Department of Urban Ecology, City of Hradec Králové",
        url: "https://www.hradeckralove.org/odbor-mestske-ekologie/ms-38569/p1=38588",
      },
      {
        cs: "Povolení ÚCL",
        en: "Civil Aviation Authority permit",
        url: "https://www.caa.cz/",
      },
      {
        cs: "Evropská vesmírná agentura (ESA)",
        en: "European Space Agency (ESA)",
        url: "https://www.esa.int/",
      },
    ],
  },
  contact: {
    title: { cs: "Kontakt", en: "Contact" },
    supervisorLabel: { cs: "Vedoucí práce", en: "Supervisor" },
    supervisorName: "Mgr. Blanka Žitná",
    email: "zitna.blanka@1sjg.cz",
  },
  footer: {
    school: "1. soukromé jazykové gymnázium Hradec Králové",
    rights: { cs: "Všechna práva vyhrazena.", en: "All rights reserved." },
  },
};
