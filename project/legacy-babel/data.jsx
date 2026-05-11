// Topswim — content + i18n + palettes

const PALETTES = {
  midnight: { // deep water blue + cream + boei oranje
    name: "Midnight Water",
    ink:"#0a1f3d", paper:"#ffffff", paper2:"#f5f3ee",
    accent:"#0a1f3d", water:"#13345e",
  },
  dawn: { // ijsblauw + zonsopgang oranje
    name: "Dawn",
    ink:"#102a3f", paper:"#f6efe5", paper2:"#e6e7e3",
    accent:"#102a3f", water:"#7fb3c7",
  },
  buoy: { // marine + felgeel
    name: "Buoy",
    ink:"#08172a", paper:"#f1ead7", paper2:"#e9e2cd",
    accent:"#08172a", water:"#0d3a55",
  },
};

function applyPalette(name){
  const p = PALETTES[name] || PALETTES.midnight;
  const r = document.documentElement.style;
  r.setProperty("--ink", p.ink);
  r.setProperty("--paper", p.paper);
  r.setProperty("--paper-2", p.paper2);
  r.setProperty("--accent", p.accent);
  r.setProperty("--water", p.water);
  r.setProperty("--hairline", p.ink + "2e");
  r.setProperty("--muted", p.ink + "9d");
  r.setProperty("--line", p.ink);
}

// Schedule
const DAYS = [
  {
    key: "mon",
    day_nl: "Maandag",   day_en: "Monday",
    spot: "KNSM-Eiland",
    sub: "Oostelijk Havengebied",
    coords: "52.3711° N · 4.9542° E",
    start: "25 MEI 2026",
    start_en: "MAY 25 2026",
    distance: "~1.2 km loop",
    depth: "3.6 m gem.",
    waterTemp: "16°C verwacht",
    note_nl: "Brede instap, beschut bij oostenwind.",
    note_en: "Wide entry, sheltered in easterly wind.",
  },
  {
    key: "wed",
    day_nl: "Woensdag", day_en: "Wednesday",
    spot: "Steigereiland",
    sub: "IJburg",
    coords: "52.3589° N · 4.9990° E",
    start: "27 MEI 2026",
    start_en: "MAY 27 2026",
    distance: "~1.5 km open",
    depth: "4.2 m gem.",
    waterTemp: "16°C verwacht",
    note_nl: "Strakke boeienlijn, ideaal voor navigatie.",
    note_en: "Tight buoy line, ideal for navigation drills.",
  },
  {
    key: "thu",
    day_nl: "Donderdag", day_en: "Thursday",
    spot: "Sloterplas",
    sub: "Amsterdam West",
    coords: "52.3631° N · 4.8316° E",
    start: "28 MEI 2026",
    start_en: "MAY 28 2026",
    distance: "~2.0 km rond",
    depth: "20 m max.",
    waterTemp: "15°C verwacht",
    note_nl: "Diepste plas, racetempo en intervallen.",
    note_en: "Deepest lake — race pace & intervals.",
  },
];

// i18n
const T = {
  nav: {
    nl: ["Cursussen", "Locaties", "Coach", "FAQ"],
    en: ["Courses", "Locations", "Coach", "FAQ"],
  },
  cta: {
    nl: { signup: "Aanmelden", learn: "Hoe werkt het", contact: "Stel je vraag" },
    en: { signup: "Sign up",   learn: "How it works",  contact: "Ask a question" },
  },
  hero: {
    nl: {
      eyebrow: "Open Water Coaching · Amsterdam · Seizoen 2026",
      title: ["Vind", "het ", "ritme", "van", "het", "water."],
      lede: "Zes weken open water training met coach Michiel — drie locaties, video-analyse, en een groep die je vooruit duwt.",
      stat: ["6 trainingen", "3 locaties", "video-analyse", "vanaf €185"],
      seriesStart: "Start eind mei 2026",
    },
    en: {
      eyebrow: "Open Water Coaching · Amsterdam · 2026 Season",
      title: ["Find", "the ", "rhythm", "of", "the", "water."],
      lede: "Six weeks of open-water training with coach Michiel — three locations, video analysis, and a group that pushes you forward.",
      stat: ["6 sessions", "3 locations", "video analysis", "from €185"],
      seriesStart: "Starts late May 2026",
    },
  },
  courses: {
    nl: {
      title: "Twee series. Eén stap dieper.",
      basisName: "Basiscursus",
      basisTag: "INSTAP · 6 × 1U",
      basisLede: "De fundering. Navigatie, veiligheid, materiaal, en techniek-verbetering — afgesloten met video-analyse. Ook geschikt voor triatleten en city swim-deelnemers.",
      basisFeats: [
        "6 trainingen van 1 uur",
        "Navigatie & sighting",
        "Veiligheid & open water mindset",
        "Materiaalcheck (wetsuit, bril)",
        "Video-analyse op locatie",
        "Triatlon- & city swim-ready",
      ],
      hbfsName: "HBFS",
      hbfsFull: "Harder · Better · Faster · Stronger",
      hbfsTag: "VERVOLG · GEVORDERD",
      hbfsLede: "Voor wie de basis al heeft. Endurance bouwen, racetactiek slijpen, en leren versnellen wanneer het er toe doet — pelotons, boei-inhalingen, en sprint-finishes.",
      hbfsFeats: [
        "Endurance-blokken",
        "Racetactiek & boei-inhalingen",
        "Pelotonszwemmen",
        "Sprint-finishes onder druk",
        "Pace-werk met FTP",
        "Wedstrijdvoorbereiding",
      ],
      from: "Vanaf",
      ondemand: "Op aanvraag",
      enroll: "Schrijf je in",
      compare: "Vergelijk de series",
    },
    en: {
      title: "Two series. One step deeper.",
      basisName: "Foundation",
      basisTag: "ENTRY · 6 × 1H",
      basisLede: "The base layer. Navigation, safety, gear, and technique — closed off with video analysis. Also suited to triathletes and city-swim participants.",
      basisFeats: [
        "6 one-hour sessions",
        "Navigation & sighting",
        "Safety & open-water mindset",
        "Gear check (wetsuit, goggles)",
        "On-site video analysis",
        "Triathlon & city-swim ready",
      ],
      hbfsName: "HBFS",
      hbfsFull: "Harder · Better · Faster · Stronger",
      hbfsTag: "ADVANCED",
      hbfsLede: "For swimmers who have the base. Build endurance, sharpen race tactics, and learn to surge when it matters — pelotons, buoy passes, and sprint finishes.",
      hbfsFeats: [
        "Endurance blocks",
        "Race tactics & buoy passes",
        "Peloton swimming",
        "Sprint finishes under pressure",
        "Pace work with FTP",
        "Race preparation",
      ],
      from: "From",
      ondemand: "On request",
      enroll: "Enroll",
      compare: "Compare the series",
    },
  },
  schedule: {
    nl: {
      title: "Drie avonden. Drie wateren.",
      lede: "Eén tijd, drie plassen. Je mag tot twee keer wisselen van dag of locatie binnen je cursus.",
      time: "19:00 — 20:00",
      switch: "2× wisselen toegestaan",
      pickDay: "Kies je avond",
    },
    en: {
      title: "Three evenings. Three waters.",
      lede: "One time, three lakes. You can switch day or location up to twice within your course.",
      time: "19:00 — 20:00",
      switch: "2 swaps allowed",
      pickDay: "Pick your evening",
    },
  },
  whoFor: {
    nl: {
      title: "Voor wie?",
      items: [
        { k:"01", t:"Eerste open water", b:"Je hebt baantjes gezwommen en wil de stap naar buiten maken. Wij coachen vanaf de eerste sighting." },
        { k:"02", t:"Triatleten", b:"Specifiek werk aan zwemstart, navigatie en uit het pak komen — alles wat in het zwembad ontbreekt." },
        { k:"03", t:"City swim & charity", b:"Amsterdam City Swim, Swim to Fight Cancer — bouw vertrouwen voor je doel-evenement." },
        { k:"04", t:"Race-ready zwemmers", b:"HBFS bouwt op de basis met endurance, tactiek en versnellingen. Voor wie sneller wil." },
      ],
    },
    en: {
      title: "Who is it for?",
      items: [
        { k:"01", t:"First-time open water", b:"You've swum laps and want to step outside. We coach from the very first sighting." },
        { k:"02", t:"Triathletes", b:"Race-specific work — starts, sighting, exiting the wetsuit — everything the pool can't teach." },
        { k:"03", t:"City swim & charity", b:"Amsterdam City Swim, Swim to Fight Cancer — build the confidence to finish strong." },
        { k:"04", t:"Race-ready swimmers", b:"HBFS layers endurance, tactics and surges on top of the base. For when you want faster." },
      ],
    },
  },
  whatYouGet: {
    nl: {
      title: "Wat zit er in",
      items: [
        { k:"01", t:"Coach in het water", b:"Michiel zwemt mee, niet langs de kant. Direct feedback op tempo, ademhaling en sighting." },
        { k:"02", t:"Video-analyse", b:"GoPro vanaf de oever én onderwater. Frame-voor-frame doornemen na de training." },
        { k:"03", t:"Veiligheid eerst", b:"Reddingsboei, EHBO en briefing voor elke sessie. Open water gaat over voorbereiding." },
        { k:"04", t:"Materiaal-check", b:"Wetsuit zit niet lekker? Bril beslaat? Laat het oplossen voor je een kilometer in zit." },
        { k:"05", t:"Trainingsschema", b:"Tussen de sessies krijg je werk mee — solo of in het zwembad — om door te bouwen." },
        { k:"06", t:"Whatsapp groep", b:"Vragen, lift-deal naar de plas, of last-minute wissels — alles loopt via één lijn." },
      ],
    },
    en: {
      title: "What you get",
      items: [
        { k:"01", t:"Coach in the water", b:"Michiel swims with you, not from the shore. Live feedback on pace, breathing, sighting." },
        { k:"02", t:"Video analysis", b:"GoPro from shore and underwater. Frame-by-frame review after each session." },
        { k:"03", t:"Safety first", b:"Rescue buoy, first-aid, briefing every session. Open water is preparation." },
        { k:"04", t:"Gear check", b:"Wetsuit fitting off? Goggles fogging? Fix it before you log a kilometer." },
        { k:"05", t:"Take-home work", b:"Between sessions you get drills — solo or pool — to keep building." },
        { k:"06", t:"WhatsApp group", b:"Questions, carpooling, last-minute swaps — one line for everything." },
      ],
    },
  },
  coach: {
    nl: {
      label: "DE COACH",
      name: "Michiel",
      title: "10 jaar open water. Eén missie.",
      bio: [
        "Ik coach Topswim sinds 2016. Wat begon met een handvol triatleten op het KNSM-Eiland is uitgegroeid tot drie avonden in de week — en honderden zwemmers die hun eerste plas, eerste race, of eerste 5K hebben afgetikt.",
        "Mijn aanpak: zwem mee, kijk goed, en geef feedback waar het verschil maakt. Geen lange theorie aan de kant. Het water is de docent — ik vertaal alleen.",
      ],
      stats: [
        { v:"500+", l:"zwemmers gecoacht" },
        { v:"10", l:"seizoenen" },
        { v:"3", l:"plassen" },
        { v:"0", l:"saaie sessies" },
      ],
    },
    en: {
      label: "THE COACH",
      name: "Michiel",
      title: "Ten years of open water. One mission.",
      bio: [
        "I've coached Topswim since 2016. What started with a handful of triathletes off KNSM-island has grown into three evenings a week — and hundreds of swimmers who finished their first lake, first race, or first 5K.",
        "My approach: swim alongside, watch closely, and give feedback where it actually matters. No long talks on the bank. The water is the teacher — I just translate.",
      ],
      stats: [
        { v:"500+", l:"swimmers coached" },
        { v:"10",   l:"seasons" },
        { v:"3",    l:"lakes" },
        { v:"0",    l:"boring sessions" },
      ],
    },
  },
  testimonials: {
    nl: [
      { q:"Eerste keer open water, en ik zwom drie weken later mijn city swim uit. De groep maakt dit.", n:"Eline V.", r:"City Swim 2025" },
      { q:"Eindelijk iemand die in het water zegt wat er fout gaat in plaats van na afloop. Game changer voor mijn triatlon.", n:"Bas T.", r:"Triatleet" },
      { q:"HBFS slijpt je. Ik zwom 1:32/100 op de plas — nu 1:24. Met meer plezier dan ooit.", n:"Iris P.", r:"5K open water" },
      { q:"De video-analyse liet me iets zien wat geen coach in 15 jaar zwembad eruit had gehaald.", n:"Pim K.", r:"Masters" },
    ],
    en: [
      { q:"First time in open water — three weeks later I finished the city swim. The group makes it.", n:"Eline V.", r:"City Swim 2025" },
      { q:"Finally a coach who tells me what's going wrong while I'm in the water, not after. Game changer.", n:"Bas T.", r:"Triathlete" },
      { q:"HBFS sharpens you. I went from 1:32/100 to 1:24 — and had more fun doing it.", n:"Iris P.", r:"5K open water" },
      { q:"Video analysis showed me something no pool coach found in 15 years.", n:"Pim K.", r:"Masters" },
    ],
  },
  faq: {
    nl: [
      { q:"Heb ik ervaring nodig?", a:"Niet voor open water. Wel: comfortabel 500m kunnen zwemmen in een zwembad, en geen paniek bij diep water." },
      { q:"Wat moet ik meenemen?", a:"Wetsuit (verplicht t/m juni), open water bril, evt. zwemboei. Geen wetsuit? We helpen met huur of advies." },
      { q:"Wat als het onweert?", a:"Veiligheid eerst — bij onweer, bliksem of slechte zicht zeggen we af. We schuiven door of geven krediet." },
      { q:"Kan ik wisselen van dag?", a:"Ja, maximaal 2× per cursus. Geef het door in de WhatsApp en je staat op de andere lijst." },
      { q:"Krijg ik geld terug bij blessure?", a:"Bij langdurige blessure schuiven we je door naar het volgende blok of de winterserie. We praten erover." },
      { q:"Komt HBFS na elk Basisblok?", a:"Niet automatisch — HBFS draait twee keer per seizoen, met een instaptest. Vraag Michiel om mee te kijken." },
    ],
    en: [
      { q:"Do I need experience?", a:"Not for open water. But: comfortable swimming 500m in a pool, and no panic in deep water." },
      { q:"What do I bring?", a:"Wetsuit (required through June), open-water goggles, optional swim buoy. No wetsuit? We help with rental or advice." },
      { q:"What if there's lightning?", a:"Safety first — we cancel for thunder, lightning or poor visibility. We reschedule or credit you." },
      { q:"Can I swap days?", a:"Yes, up to 2× per course. Drop it in WhatsApp and you'll be on the other list." },
      { q:"Refund for injury?", a:"For long-term injury we move you to the next block or the winter series. We'll figure it out." },
      { q:"Does HBFS follow every Foundation block?", a:"Not automatically — HBFS runs twice per season with an entry test. Ask Michiel to take a look." },
    ],
  },
  signup: {
    nl: {
      open: "Schrijf je in",
      close: "Sluiten",
      step: "Stap",
      of: "van",
      next: "Volgende",
      back: "Terug",
      submit: "Bevestig aanmelding",
      done: "Je bent aangemeld",
      doneSub: "Welkom in het seizoen 2026. Michiel neemt binnen 24 uur contact op met praktische details.",
      doneClose: "Sluiten",
      steps: [
        { t:"Welke serie?", s:"Begin bij de basis of stap door naar HBFS." },
        { t:"Welke avond?", s:"Eén tijd, drie plassen. Wisselen mag later." },
        { t:"Vertel ons over jezelf", s:"Zodat Michiel weet wie hij verwelkomt." },
        { t:"Bevestig & aanmelden", s:"Check, en je staat op de lijst." },
      ],
      nameLbl:"Naam", emailLbl:"E-mail", phoneLbl:"Telefoon", levelLbl:"Niveau",
      levels:["Eerste open water","Wat ervaring","Triatleet","Race-ready (HBFS)"],
      goalsLbl:"Doel (optioneel)", goalsPh:"Bv. Amsterdam City Swim, Ironman 70.3, sneller worden…",
      reviewSerie:"Serie", reviewDay:"Avond", reviewLoc:"Locatie", reviewStart:"Start",
      total:"Totaal", consent:"Ik ga akkoord met de voorwaarden en aansprakelijkheidsverklaring.",
    },
    en: {
      open: "Sign up",
      close: "Close",
      step: "Step",
      of: "of",
      next: "Next",
      back: "Back",
      submit: "Confirm sign-up",
      done: "You're signed up",
      doneSub: "Welcome to the 2026 season. Michiel will reach out within 24 hours with the details.",
      doneClose: "Close",
      steps: [
        { t:"Which series?", s:"Start at the foundation or step into HBFS." },
        { t:"Which evening?", s:"One time, three lakes. Swaps allowed later." },
        { t:"Tell us about you", s:"So Michiel knows who he's welcoming." },
        { t:"Review & confirm", s:"Look it over, and you're on the list." },
      ],
      nameLbl:"Name", emailLbl:"Email", phoneLbl:"Phone", levelLbl:"Level",
      levels:["First-time open water","Some experience","Triathlete","Race-ready (HBFS)"],
      goalsLbl:"Goal (optional)", goalsPh:"E.g. Amsterdam City Swim, Ironman 70.3, get faster…",
      reviewSerie:"Series", reviewDay:"Evening", reviewLoc:"Location", reviewStart:"Start",
      total:"Total", consent:"I agree to the terms and the liability waiver.",
    },
  },
  footer: {
    nl: { tag:"Open water seizoen 2026.", contact:"Contact", made:"Topswim — Amsterdam · KvK 12345678" },
    en: { tag:"Open water season 2026.", contact:"Contact", made:"Topswim — Amsterdam · KvK 12345678" },
  },
};

Object.assign(window, { PALETTES, applyPalette, DAYS, T });
