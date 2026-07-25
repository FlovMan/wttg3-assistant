/**
 * WTTG3 Assistant
 * Welcome to the Game III – site tracker, miners & smart notebook
 */

/* ==========================================================================
   DATABASE (from raw community / chart data)
   ========================================================================== */

const WEBSITES = [
  // —— Always available (Deep Wiki 1) ——
  { name: "Blushing Brides", status: "always", deepWiki: 1, window: null },
  { name: "Cavity Lease", status: "always", deepWiki: 1, time: null },
  { name: "Crisis Calls", status: "always", deepWiki: 1, time: null },
  { name: "Doctor Murder", status: "always", deepWiki: 1, time: null },
  { name: "Dont Waste It", status: "always", deepWiki: 1, time: null },
  { name: "Doughy", status: "always", deepWiki: 1, time: null },
  { name: "Encrave", status: "always", deepWiki: 1, time: null },
  { name: "Forever Friend", status: "always", deepWiki: 1, time: null },
  { name: "Jakobs Sink", status: "always", deepWiki: 1, time: null },
  { name: "LostTapes", status: "always", deepWiki: 1, time: null },
  { name: "Oneless", status: "always", deepWiki: 1, time: null },
  { name: "Prohibited Stockpile", status: "always", deepWiki: 1, time: null },
  { name: "Red Triangle", status: "always", deepWiki: 1, time: null },
  { name: "Ring Ring", status: "always", deepWiki: 1, time: null },
  { name: "Symphoros Chosen", status: "always", deepWiki: 1, time: null },
  { name: "Synapse Decay", status: "always", deepWiki: 1, time: null },
  { name: "Tango Down", status: "always", deepWiki: 1, time: null },
  { name: "Thanks For Visiting!", status: "always", deepWiki: 1, time: null },
  { name: "The Bomb Maker", status: "careful", deepWiki: 1, time: null },
  { name: "The Hole", status: "always", deepWiki: 1, time: null },
  { name: "The Light Within", status: "always", deepWiki: 1, time: null },
  { name: "The Loogaroo", status: "always", deepWiki: 1, time: null },
  { name: "Time Sharing", status: "always", deepWiki: 1, time: null },
  { name: "TRACK06", status: "always", deepWiki: 1, time: null },
  { name: "VoluVision", status: "always", deepWiki: 1, time: null },
  { name: "World Wide Workers", status: "always", deepWiki: 1, time: null },

  // —— Time-limited :00–:14 (Deep Wiki 2) ——
  { name: "FindLove", status: "timed", deepWiki: 2, time: { start: 0, end: 14 } },
  { name: "Forsaken Gifts", status: "timed", deepWiki: 2, time: { start: 0, end: 14 } },
  { name: "Mors N More Market", status: "timed", deepWiki: 2, time: { start: 0, end: 14 } },
  { name: "Order Of Nine", status: "timed", deepWiki: 2, time: { start: 0, end: 14 } },
  { name: "The Prey", status: "timed", deepWiki: 2, time: { start: 0, end: 14 } },

  // —— Time-limited :00–:29 (Deep Wiki 2) ——
  { name: "Blackhat Post", status: "timed", deepWiki: 2, time: { start: 0, end: 29 } },
  { name: "Drug Tickets", status: "timed", deepWiki: 2, time: { start: 0, end: 29 } },
  { name: "Kill For Me", status: "timed", deepWiki: 2, time: { start: 0, end: 29 } },
  { name: "MamaBruguglio", status: "timed", deepWiki: 2, time: { start: 0, end: 29 } },
  { name: "Red Handed", status: "timed", deepWiki: 2, time: { start: 0, end: 29 } },
  { name: "ViaMarisRoute", status: "timed", deepWiki: 2, time: { start: 0, end: 29 } },

  // —— Time-limited :15–:29 (Deep Wiki 2) ——
  { name: "Building A Future", status: "timed", deepWiki: 2, time: { start: 15, end: 29 } },
  { name: "Eat My ♥♥♥♥", status: "timed", deepWiki: 2, time: { start: 15, end: 29 } },
  { name: "Overnight Success", status: "timed", deepWiki: 2, time: { start: 15, end: 29 } },

  // —— Time-limited :30–:44 (Deep Wiki 3) ——
  { name: "Bizarre Propagation", status: "timed", deepWiki: 3, time: { start: 30, end: 44 } },
  { name: "Crystal Guild", status: "timed", deepWiki: 3, time: { start: 30, end: 44 } },
  { name: "I Am Here", status: "timed", deepWiki: 3, time: { start: 30, end: 44 } },
  { name: "Keep Sake", status: "timed", deepWiki: 3, time: { start: 30, end: 44 } },
  { name: "Shelter", status: "timed", deepWiki: 3, time: { start: 30, end: 44 } },
  { name: "You There?", status: "timed", deepWiki: 3, time: { start: 30, end: 44 } },

  // —— Time-limited :30–:59 (Deep Wiki 3) ——
  { name: "Chevron", status: "timed", deepWiki: 3, time: { start: 30, end: 59 } },
  { name: "finalStanding", status: "timed", deepWiki: 3, time: { start: 30, end: 59 } },
  { name: "Lab Monkey", status: "timed", deepWiki: 3, time: { start: 30, end: 59 } },
  { name: "The Grey", status: "timed", deepWiki: 3, time: { start: 30, end: 59 } },

  // —— Time-limited :45–:59 (Deep Wiki 3) ——
  { name: "The Hall", status: "timed", deepWiki: 3, time: { start: 45, end: 59 } },

  // —— Permanently dead ——
  { name: "Abyssal Chat", status: "dead", deepWiki: 3, time: null },
  { name: "Bathroom Cams", status: "dead", deepWiki: 3, time: null },
  { name: "Bone Altar", status: "dead", deepWiki: 3, time: null },
  { name: "Carrion Stage", status: "dead", deepWiki: 3, time: null },
  { name: "Corpses For Sale", status: "dead", deepWiki: 3, time: null },
  { name: "Crimson Bazaar", status: "dead", deepWiki: 3, time: null },
  { name: "Crimson Relay", status: "dead", deepWiki: 3, time: null },
  { name: "Dread Signal", status: "dead", deepWiki: 3, time: null },
  { name: "Drone Spy", status: "dead", deepWiki: 3, time: null },
  { name: "Echo Vault", status: "dead", deepWiki: 3, time: null },
  { name: "Eternal Loop", status: "dead", deepWiki: 3, time: null },
  { name: "Father Donald", status: "dead", deepWiki: 3, time: null },
  { name: "Flicker Stream", status: "dead", deepWiki: 3, time: null },
  { name: "Foot Doctor", status: "dead", deepWiki: 3, time: null },
  { name: "Forgive Me", status: "dead", deepWiki: 3, time: null },
  { name: "Ghost Proxy", status: "dead", deepWiki: 3, time: null },
  { name: "Gloom Archive", status: "dead", deepWiki: 3, time: null },
  { name: "Iron Ledger", status: "dead", deepWiki: 3, time: null },
  { name: "Lost Signals", status: "dead", deepWiki: 3, time: null },
  { name: "Murk Lair", status: "dead", deepWiki: 3, time: null },
  { name: "Mutilation", status: "dead", deepWiki: 3, time: null },
  { name: "My Gut", status: "dead", deepWiki: 3, time: null },
  { name: "Noir Gallery", status: "dead", deepWiki: 3, time: null },
  { name: "Obsidian Trade", status: "dead", deepWiki: 3, time: null },
  { name: "Phantom Lot", status: "dead", deepWiki: 3, time: null },
  { name: "Red Veil", status: "dead", deepWiki: 3, time: null },
  { name: "Rust Network", status: "dead", deepWiki: 3, time: null },
  { name: "Secure Drop", status: "dead", deepWiki: 3, time: null },
  { name: "Shade Broker", status: "dead", deepWiki: 3, time: null },
  { name: "Shadow Cache", status: "dead", deepWiki: 3, time: null },
  { name: "Specter Hub", status: "dead", deepWiki: 3, time: null },
  { name: "The Black Waves", status: "dead", deepWiki: 3, time: null },
  { name: "The End Of NY", status: "dead", deepWiki: 3, time: null },
  { name: "Veiled Eyes", status: "dead", deepWiki: 3, time: null },
  { name: "Void Library", status: "dead", deepWiki: 3, time: null },
  { name: "Wraith Cam", status: "dead", deepWiki: 3, time: null },

  // —— Permanently dead (formerly "probably") ——
  { name: "My Backroom", status: "dead", deepWiki: 3, time: null },
  { name: "Deep Journal", status: "dead", deepWiki: 3, time: null },
  { name: "Hollow Key", status: "dead", deepWiki: 3, time: null },
  { name: "Silent Auction", status: "dead", deepWiki: 3, time: null },
  { name: "The Butcher", status: "dead", deepWiki: 3, time: null },

  // —— FBI seized ——
  { name: "Cryptic Forge", status: "fbi", deepWiki: 3, time: null },
  { name: "Dusk Haven", status: "fbi", deepWiki: 3, time: null },
  { name: "Evidence Locker", status: "fbi", deepWiki: 3, time: null },
  { name: "Hidden Pleasures", status: "fbi", deepWiki: 3, time: null },
  { name: "Iron Mask", status: "fbi", deepWiki: 3, time: null },
  { name: "Is Evil", status: "fbi", deepWiki: 3, time: null },
  { name: "Pale Market", status: "fbi", deepWiki: 3, time: null },
  { name: "Roses Destruction", status: "fbi", deepWiki: 3, time: null },
];

/* Priority board (uptime importance chart) — names match WEBSITES */
const SITE_PRIORITY = {
  max: {
    "00-14": ["FindLove", "Forsaken Gifts", "Mors N More Market", "Order Of Nine", "The Prey"],
    "15-29": ["Building A Future", "Eat My ♥♥♥♥", "Overnight Success"],
    "30-44": ["Bizarre Propagation", "Crystal Guild", "I Am Here", "Keep Sake", "Shelter", "You There?"],
    "45-59": ["The Hall"],
  },
  medium: {
    "00-29": ["Blackhat Post", "Drug Tickets", "Kill For Me", "MamaBruguglio", "Red Handed", "ViaMarisRoute"],
    "30-59": ["Chevron", "finalStanding", "Lab Monkey", "The Grey"],
  },
  low: [
    "Blushing Brides",
    "Cavity Lease",
    "Crisis Calls",
    "Doctor Murder",
    "Dont Waste It",
    "Doughy",
    "Encrave",
    "Forever Friend",
    "Jakobs Sink",
    "LostTapes",
    "Oneless",
    "Prohibited Stockpile",
    "Red Triangle",
    "Ring Ring",
    "Symphoros Chosen",
    "Synapse Decay",
    "Tango Down",
    "Thanks For Visiting!",
    "The Bomb Maker",
    "The Hole",
    "The Light Within",
    "The Loogaroo",
    "Time Sharing",
    "TRACK06",
    "VoluVision",
    "World Wide Workers",
  ],
};

const MINERS = {
  tier1: {
    label: "Tier I",
    costKey: "minerCostTier1",
    computers: [
      { name: "WebTyk", rate: 2.06, access: [384, 768], fail: [120, 220], reset: [240, 300] },
      { name: "UserJyx", rate: 1.8, access: [384, 768], fail: [120, 480], reset: [120, 300] },
      { name: "NetVorn", rate: 1.45, access: [380, 1008], fail: [240, 420], reset: [240, 300] },
      { name: "CloudFuz", rate: 0.88, access: [440, 928], fail: [180, 240], reset: [180, 220] },
      { name: "SysBlip", rate: 0.87, access: [384, 768], fail: [40, 80], reset: [120, 240] },
      { name: "DevQuix", rate: 0.64, access: [408, 744], fail: [110, 220], reset: [60, 90] },
      { name: "IT_Kwez", rate: 0.42, access: [445.6, 884.8], fail: [20, 45], reset: [120, 190] },
      { name: "DataRax", rate: 0.32, access: [368, 752], fail: [45, 70], reset: [30, 210] },
      { name: "WorkZap", rate: 0.31, access: [384, 768], fail: [90, 210], reset: [180, 220] },
      { name: "CodePlix", rate: 0.3, access: [384, 768], fail: [15, 25], reset: [30, 75] },
    ],
  },
  tier2: {
    label: "Tier II",
    costKey: "minerCostTier2",
    computers: [
      { name: "OpsHax", rate: 4.04, access: [1200, 1620], fail: [600, 1200], reset: [300, 420] },
      { name: "SecCrux", rate: 2.73, access: [900, 1320], fail: [180, 240], reset: [340, 380] },
      { name: "GameDrux", rate: 2.57, access: [900, 1320], fail: [360, 600], reset: [300, 420] },
      { name: "PrintYiv", rate: 2.43, access: [845, 1186], fail: [90, 270], reset: [360, 420] },
      { name: "FileNuz", rate: 1.88, access: [900, 1320], fail: [180, 240], reset: [70, 220] },
      { name: "ProdGlin", rate: 1.8, access: [996, 1468], fail: [180, 540], reset: [120, 360] },
      { name: "VM_Wekl", rate: 1.74, access: [900, 1320], fail: [30, 90], reset: [240, 360] },
      { name: "BackSkiv", rate: 1.49, access: [845, 1320], fail: [20, 40], reset: [120, 200] },
      { name: "TestXor", rate: 1.36, access: [900, 1320], fail: [240, 480], reset: [180, 420] },
      { name: "LabBZop", rate: 0.48, access: [988, 1419], fail: [60, 90], reset: [300, 420] },
    ],
  },
  tier3: {
    label: "Tier III",
    costKey: "minerCostTier3",
    computers: [
      { name: "Phoenix", rate: 5.47, access: [1740, 2160], fail: [1200, 1500], reset: [600, 780] },
      { name: "MediaVlu", rate: 3.93, access: [1500, 1620], fail: [300, 420], reset: [540, 560] },
      { name: "QA_Pivz", rate: 3.58, access: [1500, 2100], fail: [420, 660], reset: [300, 600] },
      { name: "HR_Treq", rate: 3.42, access: [1500, 2100], fail: [420, 660], reset: [300, 600] },
      { name: "VPN_Qwer", rate: 3.38, access: [1500, 2100], fail: [420, 660], reset: [480, 600] },
      { name: "SalesMiv", rate: 3.21, access: [1500, 2100], fail: [420, 660], reset: [300, 600] },
      { name: "ChatEzk", rate: 3.17, access: [1500, 2100], fail: [420, 600], reset: [480, 600] },
      { name: "EngZolp", rate: 2.63, access: [1500, 2100], fail: [420, 660], reset: [300, 600] },
      { name: "FinLoxu", rate: null, access: [1500, 2100], fail: [420, 660], reset: [300, 600] },
      { name: "LogJuk", rate: 0.3, access: [2700, 3600], fail: [800, 1600], reset: [480, 600] },
    ],
  },
};

/** Keydecryptors — who decrypts which key indexes (1–8). */
const KEYDECRYPTORS = [
  { name: "Aqely", indexes: [1, 2], messageChance: 100, messagesPerCycle: [0, 2], chatMessages: 10, requiresRep: false, requiredRep: 1 },
  { name: "Belius", indexes: [1, 2], messageChance: 100, messagesPerCycle: [1, 2], chatMessages: 10, requiresRep: false, requiredRep: 1 },
  { name: "Kari", indexes: [1, 2], messageChance: 100, messagesPerCycle: [1, 3], chatMessages: 10, requiresRep: false, requiredRep: 1 },
  { name: "Heratkit", indexes: [3, 4], messageChance: 100, messagesPerCycle: [1, 2], chatMessages: 10, requiresRep: true, requiredRep: 2 },
  { name: "Milkyyberry", indexes: [3, 4], messageChance: 100, messagesPerCycle: [1, 2], chatMessages: 10, requiresRep: true, requiredRep: 2 },
  { name: "Swook", indexes: [3, 4], messageChance: 100, messagesPerCycle: [1, 3], chatMessages: 10, requiresRep: true, requiredRep: 2 },
  { name: "AmeLem", indexes: [5, 6], messageChance: 100, messagesPerCycle: [1, 2], chatMessages: 10, requiresRep: true, requiredRep: 4 },
  { name: "tapsicore", indexes: [5, 6], messageChance: 100, messagesPerCycle: [1, 2], chatMessages: 10, requiresRep: true, requiredRep: 4 },
  { name: "JohnnyGlitch", indexes: [7, 8], messageChance: 100, messagesPerCycle: [1, 2], chatMessages: 10, requiresRep: true, requiredRep: 5 },
  { name: "Jujujump", indexes: [7, 8], messageChance: 100, messagesPerCycle: [1, 2], chatMessages: 10, requiresRep: true, requiredRep: 5 },
];

/* ==========================================================================
   i18n
   ========================================================================== */

const STORAGE_FLAGS = "wttg3_site_flags";
const STORAGE_NOTES = "wttg3_notes";
const STORAGE_WIKI_TABS = "wttg3_wiki_tabs";
const STORAGE_ACTIVE_WIKI = "wttg3_active_wiki";
const STORAGE_LANG = "wttg3_lang";
const STORAGE_BOMB_SPOILER = "wttg3_bomb_spoiler";
const STORAGE_LAYOUT = "wttg3_layout";
const STORAGE_WELCOME = "wttg3_welcome_accepted";
const STORAGE_GALLERY_MODE = "wttg3_gallery_mode";

/* ==========================================================================
   Credits / Steam guide sources
   Used by Welcome overlay + Credits tab.
   Fields: author, url (guide), profileUrl (optional)
   ========================================================================== */

const CREDIT_SOURCES = [
  {
    author: "TwisTonFire",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3767348828",
    profileUrl: "https://steamcommunity.com/id/TwisTonFire",
  },
  {
    author: "MazKnight | Twitch",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3767406609",
    profileUrl: "https://steamcommunity.com/profiles/76561198832123127",
  },
  {
    author: "freddy fart bear",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3767824461",
    profileUrl: "https://steamcommunity.com/profiles/76561198071891705",
  },
  {
    author: "Indeed_Mike",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3766961707",
    profileUrl: "https://steamcommunity.com/profiles/76561199207026344",
  },
  {
    author: "larien90",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3767324870",
    profileUrl: "https://steamcommunity.com/id/larien90",
  },
  {
    author: "Nojembre",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3768000331",
    profileUrl: "https://steamcommunity.com/id/nojembre",
  },
  {
    author: "PeterRock",
    url: "https://wttgiii.peterrock.dev/",
    urlLabel: "WTTG3 Reverse Wiki",
    profileUrl: "https://peterrock.dev/",
  },
];

const WIKI_NAMES = {
  1: "Codex of Silence",
  2: "Toxic Delights",
  3: "The Red Mirror",
};

function wikiName(n) {
  return WIKI_NAMES[n] || `Wiki ${n}`;
}

const I18N = {
  pl: {
    online: "Online",
    trackerTitle: "Tracker stron",
    minersTitle: "Koparki",
    notebookTitle: "Smart notatnik",
    infoTitle: "Instrukcja / Zagrożenia",
    deepWikiAria: "Listy wiki",
    infoAria: "Informacje",
    siteInputLabel: "Lista stron z gry",
    analyzeBtn: "Przeanalizuj strony",
    clearTabBtn: "Wyczyść zakładkę",
    tabHelp: "Jak używać",
    tabFaq: "FAQ",
    tabSensors: "Sensory",
    tabThreats: "Zagrożenia",
    tabDecryptors: "Dekryptorzy",
    tabCredits: "Credits",
    decryptorsIntro:
      "Kto dekryptuje które sloty klucza (1–8). Message chance i chat messages są stałe (100% / 10) — pominięte w tabeli.",
    decryptColName: "Dekryptor",
    decryptColIndexes: "Sloty",
    decryptColMsgs: "Wiad. / cykl",
    decryptColRep: "Wymaga rep",
    decryptColRepLevel: "Rep",
    decryptYes: "Tak",
    decryptNo: "Nie",
    pasteHint: "Tutaj wklejasz listę stron z Deep Wiki",
    welcomeFirstVisit: "----- [Wykryto pierwszą wizytę] -----",
    welcomeHello: "Witaj!",
    welcomeIntro:
      "Ten asystent to narzędzia i ściągawki pomagające w Welcome to the Game III. Instrukcję znajdziesz w zakładce „Jak używać”.",
    welcomeWarningHead: "----- [Ostrzeżenie o treści!] -----",
    welcomeCreditsHead: "----- [Credits / Źródła] -----",
    welcomeAccept: ">> Rozumiem",
    welcomeRemember: ">> Zapamiętaj mnie",
    creditsTitle: "Credits i źródła",
    creditsDisclaimer:
      "Stworzyłem tylko tego asystenta (UI i narzędzia). Nie jestem powiązany z twórcami gry. Dane, notatki i screenshoty pochodzą z publicznych poradników społeczności Steam oraz z WTTG3 Reverse Wiki (PeterRock) — nie tworzyłem ich treści. Tryb Live HTML korzysta z odtworzonych stron z website-visualizer.",
    creditsSourcesHeading: "Źródła:",
    creditsEmpty: "Lista źródeł zostanie wkrótce uzupełniona.",
    creditsGuideLink: "Poradnik",
    creditsProfileLink: "Profil",
    creditsContentWarning:
      "Asystent pokazuje zrzuty i treści wyjęte z Welcome to the Game III. Mogą być niepokojące. Korzystasz na własną odpowiedzialność.",
    creditsUnofficial:
      "Fanowski, nieoficjalny projekt. Welcome to the Game III i powiązane znaki należą do ich właścicieli.",
    sensorsIntro: "Setup 3 motion sensorów przy motelu — kolejność i kierunek mają znaczenie.",
    sensorsDistinguishTitle: "Jak odróżnić Tannera od Lucasa",
    sensorsDistinguishBody: [
      "To setup na 3 motion sensory.",
      "Żeby wiedzieć, kto nadchodzi, słuchaj długości bipania sensorów.",
      "Tanner: bipanie ok. 2 sekundy — wciśnij panic button i zabezpiecz drzwi.",
      "Lucas: ciągłe bipanie 5+ sekund (dla pewności możesz sprawdzić wejście główne).",
    ],
    sensor1Title: "Sensor 1 — prawy słupek motelu",
    sensor1Body: [
      "Pierwszy motion sensor ustaw na prawej stronie końcówki słupka motelu.",
      "Musi być skierowany do wewnątrz, a nie w stronę drogi.",
      "Gdy sensory są na prawym i lewym słupku, patrzą na siebie.",
      "Ten sensor da alert, gdy Tanner nadchodzi z prawej strony (z perspektywy biura to lewa strona).",
    ],
    sensor2Title: "Sensor 2 — lewy słupek motelu",
    sensor2Body: [
      "Drugi motion sensor ustaw na lewej stronie końcówki słupka motelu.",
      "Musi być skierowany do wewnątrz, a nie w stronę drogi.",
      "Gdy sensory są na prawym i lewym słupku, patrzą na siebie.",
      "Ten sensor da alert, gdy Tanner nadchodzi z lewej strony (z perspektywy biura to prawa strona).",
    ],
    sensor3Title: "Sensor 3 — tylne drzwi (Lucas)",
    sensor3Body: [
      "Trzeci motion sensor ustaw na tylnych drzwiach, którymi wchodzi Lucas (te same drzwi widoczne po cutscence Wade’a i chłopaków).",
      "Daje alert, gdy Lucas próbuje otworzyć zamek (lockpicking) tylnych drzwi.",
      "Bipanie trwa dłużej niż przy Tannerze — zwykle 6+ sekund, więc łatwo je odróżnić.",
      "Masz wtedy sporo czasu, żeby zgasić światła i się schować.",
    ],
    sitePlaceholder:
      "{name} — wklej listę ze gry, np.\nChevron - Leaked military mission logs.\nFindLove - You don't have to be alone.",
    notebookPlaceholder:
      "Notatki, kody, klucze…\n4 - cb4f1f4c  (zaszyfrowany)\n4 - 9f09      (zdekryptowany → montaż)",
    emptyTab: "{name}: wklej listę stron i kliknij „Przeanalizuj strony”.",
    unknownSection: "Inne / Nieznane",
    colSite: "Strona",
    colTime: "Okno czasowe",
    colStatus: "Status",
    colProgress: "Postęp",
    flagVisited: "Odwiedzono",
    flagKey: "Znaleziono klucz",
    flagKeyFinder: "Sprawdzono z key finderem",
    flagFile: "Był link do pliku",
    flagShortVisited: "Odw.",
    flagShortKey: "Klucz",
    flagShortKeyFinder: "KF",
    flagShortFile: "Plik",
    activeNow: "Aktywna teraz",
    timeAlways: "Zawsze (24/7)",
    timeDead: "Martwa / zawsze zamknięta",
    timeFbi: "Zajęta przez FBI",
    timeUnknown: "—",
    timeHourly: "co godz. :{start} – :{end}",
    resetBtn: "Reset",
    resetConfirm: "Wyczyścić wszystko (notatki, listy, postęp, layout) i wrócić do ustawień fabrycznych?",
    resizeHint: "Przeciągnij, aby zmienić wysokość",
    matchSummary: "{name}: {matched}/{total}",
    unknownCount: " · nieznane: {n}",
    detectedKeys: "Wykryte klucze:",
    copyKeyHint: "Kliknij, aby skopiować",
    copyKeyDone: "Skopiowano!",
    assemblyTitle: "Montaż zdekryptowanych (1–8)",
    assemblyCount: "{n}/8",
    assemblyEmpty: "—",
    assemblyCopy: "Kopiuj finalny klucz",
    assemblyIncomplete: "Zbierz wszystkie 8 zdekryptowanych kodów",
    assemblyCopied: "Skopiowano finalny klucz!",
    status_always: "Zawsze",
    status_timed: "Czasowa",
    status_careful: "Ostrożnie",
    status_dead: "Martwa",
    status_fbi: "FBI seized",
    status_unknown: "Nieznana",
    minerCostTier1: "od początku",
    minerCostTier2: "75 DOS",
    minerCostTier3: "250 DOS",
    minerAccess: "Access",
    minerFailCd: "Fail CD",
    minerResetCd: "Reset CD",
    minerRateUnknown: "—",
    minerColAccess: "Access window",
    minerColRate: "DOS/min",
    threatsIntro: "Główne zagrożenia — sygnał dźwiękowy i jak się bronić:",
    threatColThreat: "Zagrożenie",
    threatColCue: "Sygnał",
    threatColCounter: "Obrona",
    spoilerLabel: "SPOILER",
    spoilerHidden: "Ukryte zagrożenie — kliknij, jeśli akceptujesz spoilery.",
    spoilerAccept: "Pokaż spoiler",
    spoilerHide: "Ukryj ponownie",
    galleryClose: "Zamknij",
    galleryPrev: "Poprzedni",
    galleryNext: "Następny",
    galleryPage: "Podstrona",
    gallerySiteNote: "Notatka",
    galleryNoImages: "Brak screenshotów — tylko notatka.",
    galleryOpenHint: "Kliknij, aby zobaczyć screenshoty",
    galleryZoomIn: "Przybliż",
    galleryZoomOut: "Oddal",
    galleryZoomReset: "Reset zoom",
    galleryModeShots: "Screenshots",
    galleryModeLive: "Live HTML",
    galleryLiveHint: "Live HTML z dumpu gry (preview). Kwadraty = miejsca na klucz/fetch.",
    galleryLegendPtag: "PTAG — klucz bezpośrednio / po CPTAG",
    galleryLegendCptag: "CPTAG — kliknij najpierw",
    galleryLegendCftag: "CFTAG — klucz lub plik fetch",
    priorityTitle: "Priorytet stron",
    priorityMax: "Max (25% / h)",
    priorityMedium: "Medium (50% / h)",
    priorityLow: "Low (zawsze / 100%)",
    priorityHitHint: "Masz tę stronę na liście",
    help: [
      ["Tracker / zakładki:", "Codex of Silence, Toxic Delights i The Red Mirror to osobne listy. Wyróżnione pole u góry = miejsce na wklejenie. Wklej listę → „Przeanalizuj strony”, potem przełącz zakładkę i wklej kolejną."],
      ["Format wklejania:", "linie „Nazwa - opis” — liczy się tekst przed myślnikiem. Kolejność na liście = kolejność wklejenia."],
      ["Postęp:", "Odw. / Klucz / KF / Plik. Do zrobienia = mocniej podświetlone. Odwiedzona = przygaszona (także na tablicy priorytetów). Klucz = prawie wygaszona."],
      ["Priorytety:", "tablica Max / Medium / Low pod listą. Strony z bieżącej zakładki świecą się na zielono, dopóki nie oznaczysz Odw./Klucz. Klik w nazwę = galeria."],
      ["Screenshoty:", "klik w nazwę strony. Tryb Screenshots = zrzuty z poradników; Live HTML = strony gry (HTML). Start 100%; +/− / Ctrl+scroll / 0. Esc zamyka."],
      ["Okna czasowe:", "strony timed: minuty każdej godziny gry (np. :00–:14). Martwe = zawsze offline."],
      ["Koparki:", "VM Grid Tier I–III: DOS/min + Access window (jak długo masz dostęp po udanym hacku). Fail/Reset CD w podpowiedzi (hover). Wybieraj najwyższe DOS w odblokowanym tierze."],
      ["Notatnik — klucze:", "format „N - kod”. Długi kod = zaszyfrowany. Krótki = zdekryptowany (idzie do montażu)."],
      ["Montaż 1–8:", "zdekryptowane kody w slotach #1–#8 według numeru. Cel: zebrać wszystkie 8, potem „Kopiuj finalny klucz”."],
      ["Sensory / zagrożenia:", "zakładki z setupem 3 sensorów oraz tabelą cue/obrona. Bomb Maker jest pod spoilerem."],
      ["Dekryptorzy:", "zakładka Info — kto dekryptuje sloty 1–2 / 3–4 / 5–6 / 7–8 i jaki required rep."],
      ["Credits:", "zakładka z zastrzeżeniami i linkami do poradników Steam. Ekran powitalny pokazuje się przy każdym wejściu — zaznacz „Zapamiętaj mnie”, żeby go pominąć."],
      ["Język i zapis:", "domyślnie EN; PL/EN w prawym górnym rogu (także na ekranie powitalnym). Notatki, postęp i listy zapisują się lokalnie. Reset czyści postęp."],
      ["Layout:", "przeciągnij uchwyty między panelami (koparki, priorytety, instrukcja), aby zmienić wysokości."],
    ],
    faq: [
      {
        q: "Czy hazard się opłaca?",
        a: "Zwykle nie. To ryzykowny sposób na DOS — nie warto na nim polegać.",
      },
      {
        q: "Czy zawsze nosić metamfetaminę?",
        a: "Tak, ale tylko jedną torebkę.",
      },
      {
        q: "Czy wchodzić wcześnie na The Bomb Maker?",
        a: "Nie. Unikaj aktywacji, dopóki progresja tego nie wymaga.",
      },
      {
        q: "Czy sprawdzać kod źródłowy stron?",
        a: "Tak. Mogą być tam ukryte wskazówki i elementy zagadek.",
      },
      {
        q: "Czy mogę „pauzować” przy komputerze?",
        a: "Nie. Zagrożenia działają także podczas przeglądania — uważaj na otoczenie.",
      },
    ],
    threats: [
      {
        name: "Tanner",
        cue: "Cichy odgłos szurania",
        counter:
          "Zamykaj drzwi, sprawdzaj wizjer przed wyjściem z pokoju motelowego, naciśnij panic button gdy się zbliża",
      },
      {
        name: "Lucas",
        cue: "Odgłos otwierania zamka (lockpicking)",
        counter: "Trzymaj tylne drzwi zamknięte; chowaj się w wózku na pranie lub szafce w łazience",
      },
      {
        name: "Tucker",
        cue: "Muzyka banjo / stara melodia ALBO szelest trawy przy naprawie sieci",
        counter:
          "Gdy gra stara melodia — biegnij do pokoju z asem pik (Ace of Spades) przy klamce. Przy naprawie sieci odczekaj 10+ s i nasłuchuj szelestu liści — jeśli słyszysz, jest OK",
      },
      {
        name: "Cletus",
        cue: "Po prostu cię znajdzie",
        counter: "Zawsze miej <strong>jedną</strong> torebkę metamfetaminy w ekwipunku",
      },
      {
        name: "Noir",
        cue: "Pojawiają się parami; czasem metaliczne skrobanie",
        counter:
          "Zapamiętaj kolejność L→P, latarka, odwróć się i licz. Przy komputerze spójrz w bok i <strong>nie wstawaj</strong> z krzesła (inaczej INSTAKILL)",
      },
      {
        name: "The Kidnapper",
        cue: "Biały van na parkingu",
        counter: "Sprawdzaj ulicę przed wyjściem albo ustaw kamerę",
      },
      {
        name: "The Breather",
        cue: "Spawnuje się przy dead dropie pod mostem",
        counter:
          "Pełna stamina; sprintuj dopiero gdy go zobaczysz i biegnij na chodnik prawego pokoju motelowego",
      },
      {
        name: "The Bomb Maker",
        spoiler: true,
        cue: "Event po wejściu na jego stronę",
        counter:
          "Znajdź bombę i wpisz kod zanim skończy się czas. Kod dostaniesz na CryptChat — zapamiętaj go, potem znajdź bombę",
      },
    ],
  },
  en: {
    online: "Online",
    trackerTitle: "Site Tracker",
    minersTitle: "Miners",
    notebookTitle: "Smart Notebook",
    infoTitle: "Guide / Threats",
    deepWikiAria: "Wiki lists",
    infoAria: "Information",
    siteInputLabel: "Site list from the game",
    analyzeBtn: "Analyze sites",
    clearTabBtn: "Clear tab",
    tabHelp: "How to use",
    tabFaq: "FAQ",
    tabSensors: "Sensors",
    tabThreats: "Threats",
    tabDecryptors: "Decryptors",
    tabCredits: "Credits",
    decryptorsIntro:
      "Who decrypts which key slots (1–8). Message chance and chat messages are constant (100% / 10) — omitted from the table.",
    decryptColName: "Decryptor",
    decryptColIndexes: "Slots",
    decryptColMsgs: "Msgs / cycle",
    decryptColRep: "Needs rep",
    decryptColRepLevel: "Rep",
    decryptYes: "Yes",
    decryptNo: "No",
    pasteHint: "Paste Deep Wiki site lists here",
    welcomeFirstVisit: "----- [First Visit Detected] -----",
    welcomeHello: "Welcome!",
    welcomeIntro:
      "This assistant is a set of guides and tools for Welcome to the Game III. How the tools work is explained under “How to use”.",
    welcomeWarningHead: "----- [Content Warning!] -----",
    welcomeCreditsHead: "----- [Credits / Sources] -----",
    welcomeAccept: ">> I understand",
    welcomeRemember: ">> Remember Me",
    creditsTitle: "Credits & sources",
    creditsDisclaimer:
      "I only built this assistant (UI and tools). I am not affiliated with the game’s creators. Site data, notes, and screenshots come from public Steam community guides and the WTTG3 Reverse Wiki (PeterRock) — I did not author that content. Live HTML mode uses reconstructed pages from the website-visualizer.",
    creditsSourcesHeading: "Sources:",
    creditsEmpty: "Source list will be added shortly.",
    creditsGuideLink: "Guide",
    creditsProfileLink: "Profile",
    creditsContentWarning:
      "This tool shows extracted screenshots and content from Welcome to the Game III. Material may be disturbing. Use at your own discretion.",
    creditsUnofficial:
      "Fan-made, unofficial project. Welcome to the Game III and related marks belong to their respective owners.",
    sensorsIntro: "3 motion sensor motel setup — placement and facing direction matter.",
    sensorsDistinguishTitle: "How to distinguish between Tanner and Lucas",
    sensorsDistinguishBody: [
      "This is a setup for 3 motion sensors.",
      "To know which enemy is approaching, listen to how long the motion sensors beep.",
      "Tanner: beeps for ~2 seconds — click the panic button and secure the door.",
      "Lucas: beeps consistently for 5+ seconds (you can check the front entrance to be sure).",
    ],
    sensor1Title: "Sensor 1 — right motel pole",
    sensor1Body: [
      "First motion sensor goes on the right side of the motel pole end.",
      "Place it inwards, not facing the road.",
      "When both are on the right and left poles, they will look at each other.",
      "This sensor alerts you when Tanner is coming from the right side (left side viewed from the office).",
    ],
    sensor2Title: "Sensor 2 — left motel pole",
    sensor2Body: [
      "Second motion sensor goes on the left side of the motel pole end.",
      "Place it inwards, not facing the road.",
      "When both are on the right and left poles, they will look at each other.",
      "This sensor alerts you when Tanner is coming from the left side (right side viewed from the office).",
    ],
    sensor3Title: "Sensor 3 — backdoor (Lucas)",
    sensor3Body: [
      "Third motion sensor goes on the backdoor where Lucas comes through (the backdoor seen when the Wade and his boys cutscene ends).",
      "Alerts you when Lucas is trying to lockpick the backdoor.",
      "The beeping lasts longer than Tanner — usually 6+ seconds, so you can easily tell them apart.",
      "That gives you plenty of time to turn off lights and hide.",
    ],
    sitePlaceholder:
      "{name} — paste list from the game, e.g.\nChevron - Leaked military mission logs.\nFindLove - You don't have to be alone.",
    notebookPlaceholder:
      "Notes, codes, keys…\n4 - cb4f1f4c  (encrypted)\n4 - 9f09      (decrypted → assembly)",
    emptyTab: "{name}: paste a site list and click “Analyze sites”.",
    unknownSection: "Other / Unknown",
    colSite: "Site",
    colTime: "Time window",
    colStatus: "Status",
    colProgress: "Progress",
    flagVisited: "Visited",
    flagKey: "Key found",
    flagKeyFinder: "Checked with key finder",
    flagFile: "Had a file link",
    flagShortVisited: "Vis.",
    flagShortKey: "Key",
    flagShortKeyFinder: "KF",
    flagShortFile: "File",
    activeNow: "Active now",
    timeAlways: "Always (24/7)",
    timeDead: "Dead / permanently offline",
    timeFbi: "FBI seized",
    timeUnknown: "—",
    timeHourly: "hourly :{start} – :{end}",
    resetBtn: "Reset",
    resetConfirm: "Clear everything (notes, lists, progress, layout) and restore factory defaults?",
    resizeHint: "Drag to resize",
    matchSummary: "{name}: {matched}/{total}",
    unknownCount: " · unknown: {n}",
    detectedKeys: "Detected keys:",
    copyKeyHint: "Click to copy",
    copyKeyDone: "Copied!",
    assemblyTitle: "Decrypted assembly (1–8)",
    assemblyCount: "{n}/8",
    assemblyEmpty: "—",
    assemblyCopy: "Copy final key",
    assemblyIncomplete: "Collect all 8 decrypted codes",
    assemblyCopied: "Final key copied!",
    status_always: "Always",
    status_timed: "Timed",
    status_careful: "Careful",
    status_dead: "Dead",
    status_fbi: "FBI seized",
    status_unknown: "Unknown",
    minerCostTier1: "from the start",
    minerCostTier2: "75 DOS",
    minerCostTier3: "250 DOS",
    minerAccess: "Access",
    minerFailCd: "Fail CD",
    minerResetCd: "Reset CD",
    minerRateUnknown: "—",
    minerColAccess: "Access window",
    minerColRate: "DOS/min",
    threatsIntro: "Main threats — sound cue and how to counter them:",
    threatColThreat: "Threat",
    threatColCue: "Cue",
    threatColCounter: "Counter",
    spoilerLabel: "SPOILER",
    spoilerHidden: "Hidden threat — click if you accept spoilers.",
    spoilerAccept: "Reveal spoiler",
    spoilerHide: "Hide again",
    galleryClose: "Close",
    galleryPrev: "Previous",
    galleryNext: "Next",
    galleryPage: "Page",
    gallerySiteNote: "Note",
    galleryNoImages: "No screenshots — note only.",
    galleryOpenHint: "Click to view screenshots",
    galleryZoomIn: "Zoom in",
    galleryZoomOut: "Zoom out",
    galleryZoomReset: "Reset zoom",
    galleryModeShots: "Screenshots",
    galleryModeLive: "Live HTML",
    galleryLiveHint: "Live HTML from game dump (preview). Colored boxes = key/fetch click spots.",
    galleryLegendPtag: "PTAG — key directly / after CPTAG",
    galleryLegendCptag: "CPTAG — click first",
    galleryLegendCftag: "CFTAG — key or fetch file",
    priorityTitle: "Site priority",
    priorityMax: "Max (25% / h)",
    priorityMedium: "Medium (50% / h)",
    priorityLow: "Low (always / 100%)",
    priorityHitHint: "This site is on your list",
    help: [
      ["Tracker / tabs:", "Codex of Silence, Toxic Delights and The Red Mirror are separate lists. The highlighted box at the top is where you paste. Paste → Analyze, then switch tabs for the next Deep Wiki."],
      ["Paste format:", "lines like “Name - description” — only text before the dash counts. List order = paste order."],
      ["Progress:", "Vis. / Key / KF / File. To-do rows are highlighted. Visited dims the row and the priority chip. Key found nearly extinguishes it."],
      ["Priorities:", "Max / Medium / Low board under the list. Sites on the current tab glow green until marked Visited/Key. Click a name for the gallery."],
      ["Screenshots:", "click a site name. Screenshots mode = guide captures; Live HTML = in-game pages. Starts at 100%; +/− / Ctrl+scroll / 0. Esc closes."],
      ["Time windows:", "timed sites use in-game hour minutes (e.g. :00–:14). Dead sites stay offline."],
      ["Miners:", "VM Grid Tier I–III: DOS/min + Access window (how long you keep access after a successful hack). Fail/Reset CD in the hover tooltip. Pick the highest DOS in your unlocked tier."],
      ["Notebook — keys:", "format “N - code”. Long code = encrypted. Short = decrypted (feeds assembly)."],
      ["Assembly 1–8:", "decrypted codes fill slots #1–#8 by number. Collect all 8, then “Copy final key”."],
      ["Sensors / threats:", "tabs for the 3-sensor setup and cue/counter table. Bomb Maker is behind a spoiler."],
      ["Decryptors:", "Info tab — who decrypts slots 1–2 / 3–4 / 5–6 / 7–8 and required reputation."],
      ["Credits:", "tab with disclaimers and Steam guide links. Welcome screen shows on every visit — check “Remember Me” to skip it next time."],
      ["Language & save:", "English by default; PL/EN switch top-right (also on the welcome screen). Notes, progress and lists persist locally. Reset clears progress."],
      ["Layout:", "drag the handles between panels (miners, priority board, guide) to resize."],
    ],
    faq: [
      {
        q: "Is gambling worth it?",
        a: "Usually not. It's a high-risk way to earn DOS and shouldn't be relied on.",
      },
      {
        q: "Should I always carry meth?",
        a: "Yes, but only one bag.",
      },
      {
        q: "Should I visit The Bomb Maker early?",
        a: "No. Avoid activating him until progression requires it.",
      },
      {
        q: "Do I need to check website source code?",
        a: "Yes. Hidden clues and puzzle pieces can appear there.",
      },
      {
        q: "Can I pause while using the computer?",
        a: "No. Threats continue to exist while you're browsing, so stay aware of your surroundings.",
      },
    ],
    threats: [
      {
        name: "Tanner",
        cue: "Sound of shuffling (it is quiet)",
        counter:
          "Make sure to lock doors, check the peephole when leaving the motel room, hit the panic button when he is about to approach",
      },
      {
        name: "Lucas",
        cue: "Lockpicking sound",
        counter: "Keep the backdoor locked; hide in the laundry trolley or bathroom locker",
      },
      {
        name: "Tucker",
        cue: "Banjo music / old tune OR grass rustling during network repair",
        counter:
          "When the old tune plays, sprint to the motel room that has the Ace of Spades near the door knob. If doing network repair, wait 10+ seconds for leaves rustling — if you hear it, you are good",
      },
      {
        name: "Cletus",
        cue: "He will just find you",
        counter: "Always have <strong>ONE</strong> bag of meth in your inventory",
      },
      {
        name: "Noir",
        cue: "Appear in pairs; sometimes metal scraping sound",
        counter:
          "Know their left-to-right order, then flashlight, turn away, and count. If they appear while you are at the computer, look away for a bit and <strong>DON'T GET UP</strong> from the chair or it will be INSTAKILL",
      },
      {
        name: "The Kidnapper",
        cue: "A white van parked nearby in the parking lot",
        counter: "Check the street before going outside or place a camera to watch",
      },
      {
        name: "The Breather",
        cue: "Spawns near the dead drop location under the bridge",
        counter:
          "Make sure you have full stamina; only sprint when you see him and run to the pavement of the motel room on the right",
      },
      {
        name: "The Bomb Maker",
        spoiler: true,
        cue: "Triggered by visiting his website",
        counter:
          "Find the bomb and enter the code he sends before time runs out. He'll send the code in CryptChat — memorize it, then find the bomb",
      },
    ],
  },
};

let lang = "en";

function t(key, vars) {
  let str = (I18N[lang] && I18N[lang][key]) ?? (I18N.pl[key] ?? key);
  if (vars && typeof str === "string") {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
    }
  }
  return str;
}

function statusLabel(status) {
  return t(`status_${status}`) || status;
}

/** Game keys: "N - code" — short code = decrypted, long = encrypted */
const NUMBERED_KEY_REGEX = /(\d{1,3})\s*([-–—])\s*([A-Za-z0-9][A-Za-z0-9_-]{2,19})\b/g;
const DECRYPTED_CODE_MAX_LEN = 5;

/** Per-tab state: { 1: { input, matchedNames, unknown }, … } */
let activeWiki = 1;
let wikiTabs = {
  1: { input: "", matched: [], unknown: [] },
  2: { input: "", matched: [], unknown: [] },
  3: { input: "", matched: [], unknown: [] },
};
let activeInfoTab = "help";

/* ==========================================================================
   Helpers
   ========================================================================== */

function normalizeName(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[''`]/g, "")
    .replace(/\s+/g, " ")
    .replace(/[♥❤]+/g, "♥");
}

const PRIORITY_LOOKUP = (() => {
  const map = new Map();
  for (const names of Object.values(SITE_PRIORITY.max)) {
    for (const name of names) map.set(normalizeName(name), "max");
  }
  for (const names of Object.values(SITE_PRIORITY.medium)) {
    for (const name of names) map.set(normalizeName(name), "medium");
  }
  for (const name of SITE_PRIORITY.low) {
    map.set(normalizeName(name), "low");
  }
  return map;
})();

function getSitePriorityTier(siteName) {
  return PRIORITY_LOOKUP.get(normalizeName(siteName)) || null;
}

/** Fuzzy-friendly lookup map */
const SITE_INDEX = (() => {
  const map = new Map();
  for (const site of WEBSITES) {
    map.set(normalizeName(site.name), site);
    const stripped = normalizeName(site.name.replace(/[!?.,]/g, ""));
    if (!map.has(stripped)) map.set(stripped, site);
  }
  map.set(normalizeName("Eat My ****"), WEBSITES.find((s) => s.name.startsWith("Eat My")));
  map.set(normalizeName("Eat My Shit"), WEBSITES.find((s) => s.name.startsWith("Eat My")));
  // typo / alternate names
  map.set(normalizeName("Bizzare Propagation"), WEBSITES.find((s) => s.name === "Bizarre Propagation"));
  map.set(normalizeName("Backrooms"), WEBSITES.find((s) => s.name === "My Backroom"));
  map.set(normalizeName("My Backrooms"), WEBSITES.find((s) => s.name === "My Backroom"));
  return map;
})();

function formatTimeWindow(site) {
  if (!site || site.status === "unknown") return t("timeUnknown");
  if (site.status === "dead") return t("timeDead");
  if (site.status === "fbi") return t("timeFbi");
  if (!site.time) return t("timeAlways");
  const pad = (n) => String(n).padStart(2, "0");
  return t("timeHourly", { start: pad(site.time.start), end: pad(site.time.end) });
}

function loadFlags() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_FLAGS) || "{}");
  } catch {
    return {};
  }
}

function saveFlags(flags) {
  localStorage.setItem(STORAGE_FLAGS, JSON.stringify(flags));
}

/** Opening the site gallery (screenshots or Live HTML) counts as visited. */
function markSiteVisitedOnGalleryOpen(siteName) {
  if (!siteName) return false;
  const flags = loadFlags();
  if (!flags[siteName]) flags[siteName] = {};
  if (flags[siteName].visited) return false;
  flags[siteName].visited = true;
  saveFlags(flags);
  return true;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function svgIcon(type) {
  if (type === "visited") {
    return `<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  }
  if (type === "keyfinder") {
    return `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/><path d="M8 11h6M11 8v6"/></svg>`;
  }
  if (type === "file") {
    return `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`;
}

/* ==========================================================================
   Tracker
   ========================================================================== */

function extractSiteName(line) {
  const trimmed = line.trim();
  if (!trimmed) return "";
  const spaced = trimmed.split(/\s+[-–—]\s+/);
  if (spaced.length >= 2) return spaced[0].trim();
  return trimmed;
}

function parsePastedLines(raw) {
  return raw
    .split(/[\n\r]+/)
    .map(extractSiteName)
    .filter((l) => l.length > 0)
    .filter((l) => !/^[-–=]{3,}/.test(l))
    .filter((l) => !/^(site\b|deep wiki|always available|time[- ]?limited|timed websites)/i.test(l));
}

function matchSites(names) {
  const matched = [];
  const unknown = [];
  const seen = new Set();

  for (const raw of names) {
    const key = normalizeName(raw);
    if (seen.has(key)) continue;
    seen.add(key);

    const site = SITE_INDEX.get(key);
    if (site) {
      matched.push({ ...site, inputName: raw });
    } else {
      unknown.push(raw);
    }
  }

  return { matched, unknown };
}

function loadWikiTabs() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_WIKI_TABS) || "null");
    if (!raw) return;
    for (const key of [1, 2, 3]) {
      if (!raw[key]) continue;
      const names = raw[key].matchedNames || [];
      const unknown = raw[key].unknown || [];
      const matched = names
        .map((n) => SITE_INDEX.get(normalizeName(n)))
        .filter(Boolean)
        .map((s) => ({ ...s, inputName: s.name }));
      wikiTabs[key] = {
        input: raw[key].input || "",
        matched,
        unknown,
      };
    }
  } catch {
    /* ignore corrupt storage */
  }
}

function saveWikiTabs() {
  const payload = {};
  for (const key of [1, 2, 3]) {
    const tab = wikiTabs[key];
    payload[key] = {
      input: tab.input,
      matchedNames: tab.matched.map((s) => s.name),
      unknown: tab.unknown,
    };
  }
  localStorage.setItem(STORAGE_WIKI_TABS, JSON.stringify(payload));
  localStorage.setItem(STORAGE_ACTIVE_WIKI, String(activeWiki));
}

function updateTabIndicators() {
  document.querySelectorAll(".wiki-tab").forEach((btn) => {
    const w = Number(btn.dataset.wiki);
    const tab = wikiTabs[w];
    const has = tab.matched.length + tab.unknown.length > 0;
    btn.classList.toggle("has-data", has);
  });
}

const PROGRESS_FLAGS = [
  { flag: "visited", titleKey: "flagVisited", shortKey: "flagShortVisited", icon: "visited" },
  { flag: "key", titleKey: "flagKey", shortKey: "flagShortKey", icon: "key" },
  { flag: "keyfinder", titleKey: "flagKeyFinder", shortKey: "flagShortKeyFinder", icon: "keyfinder" },
  { flag: "file", titleKey: "flagFile", shortKey: "flagShortFile", icon: "file" },
];

function renderCheckCell(siteName, flags, def) {
  const f = flags[siteName] || {};
  const active = f[def.flag] ? "active" : "";
  const title = t(def.titleKey);
  return `<td class="check-cell">
    <button type="button" class="check-btn ${active}" data-site="${escapeHtml(siteName)}" data-flag="${def.flag}" title="${escapeHtml(title)}" aria-label="${escapeHtml(title)}" aria-pressed="${!!f[def.flag]}">${svgIcon(def.icon)}</button>
  </td>`;
}

/* ==========================================================================
   Screenshot / Live HTML gallery
   ========================================================================== */

let SITE_GALLERY = {};
let galleryState = null;
/** @type {"shots"|"live"} */
let galleryMode = "shots";

const GALLERY_ZOOM_MIN = 1;
const GALLERY_ZOOM_MAX = 5;
const GALLERY_ZOOM_STEP = 0.25;

/** Map our DB names → live manifest names when they differ. */
const LIVE_GALLERY_ALIASES = {
  [normalizeName("Dont Waste It")]: normalizeName("Don't Waste It"),
  [normalizeName("Eat My ♥♥♥♥")]: normalizeName("Eat My Shit"),
};

function clampGalleryZoom(z) {
  return Math.min(GALLERY_ZOOM_MAX, Math.max(GALLERY_ZOOM_MIN, Math.round(z * 100) / 100));
}

function resolveGalleryMode() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("gallery");
  if (q === "live" || q === "html") return "live";
  if (q === "shots" || q === "screenshots") return "shots";
  const saved = localStorage.getItem(STORAGE_GALLERY_MODE);
  if (saved === "live" || saved === "shots") return saved;
  return "live";
}

function setGalleryMode(mode, opts = {}) {
  const next = mode === "live" ? "live" : "shots";
  galleryMode = next;
  if (!opts.skipSave) localStorage.setItem(STORAGE_GALLERY_MODE, next);
  document.querySelectorAll("[data-gallery-mode]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.galleryMode === next);
  });
  document.body.classList.toggle("gallery-mode-live", next === "live");
}

function applyGalleryZoom() {
  const img = document.getElementById("gallery-image");
  const frame = document.getElementById("gallery-frame");
  const label = document.querySelector("[data-gallery-zoom-reset]");
  const wrap = document.querySelector(".gallery-image-wrap");
  if (!galleryState) return;

  const z = galleryState.zoom || 1;
  const baseW = wrap ? wrap.clientWidth : 0;
  const widthPx = baseW > 0 ? `${Math.round(baseW * z)}px` : `${z * 100}%`;

  if (galleryState.kind === "live") {
    if (!frame || frame.hidden) return;
    frame.style.width = widthPx;
    frame.style.minHeight = `${Math.round((wrap?.clientHeight || 720) * Math.min(z, 1.25))}px`;
    frame.style.height = z > 1 ? `${Math.round((wrap?.clientHeight || 720) * z)}px` : "100%";
    wrap?.classList.toggle("is-zoomed", z > 1);
  } else {
    if (!img || img.hidden) return;
    img.style.width = widthPx;
    img.style.maxWidth = "none";
    img.style.height = "auto";
    img.classList.toggle("is-zoomed", z > 1);
    wrap?.classList.toggle("is-zoomed", z > 1);
  }
  if (label) label.textContent = `${Math.round(z * 100)}%`;
}

function galleryZoomBy(delta) {
  if (!galleryState || !galleryState.slides.length) return;
  galleryState.zoom = clampGalleryZoom((galleryState.zoom || 1) + delta);
  applyGalleryZoom();
}

function galleryZoomSet(z) {
  if (!galleryState || !galleryState.slides.length) return;
  galleryState.zoom = clampGalleryZoom(z);
  applyGalleryZoom();
  const wrap = document.querySelector(".gallery-image-wrap");
  if (wrap && galleryState.zoom <= 1) {
    wrap.scrollTop = 0;
    wrap.scrollLeft = 0;
  }
}

function syncGalleryZoomLabels() {
  const root = document.getElementById("gallery-lightbox");
  if (!root) return;
  const zin = root.querySelector("[data-gallery-zoom-in]");
  const zout = root.querySelector("[data-gallery-zoom-out]");
  const zreset = root.querySelector("[data-gallery-zoom-reset]");
  if (zin) {
    zin.setAttribute("aria-label", t("galleryZoomIn"));
    zin.title = t("galleryZoomIn");
  }
  if (zout) {
    zout.setAttribute("aria-label", t("galleryZoomOut"));
    zout.title = t("galleryZoomOut");
  }
  if (zreset) {
    zreset.setAttribute("aria-label", t("galleryZoomReset"));
    zreset.title = t("galleryZoomReset");
  }
}

async function loadGalleryManifestFrom(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(String(res.status));
  const data = await res.json();
  const map = {};
  for (const [name, entry] of Object.entries(data)) {
    map[normalizeName(name)] = { name, ...entry };
  }
  return map;
}

async function loadGalleryManifest() {
  try {
    if (galleryMode === "live") {
      SITE_GALLERY = await loadGalleryManifestFrom("assets/sites-live/manifest.json");
    } else {
      SITE_GALLERY = await loadGalleryManifestFrom("assets/sites/manifest.json");
    }
  } catch (err) {
    console.warn("Gallery manifest unavailable:", err);
    SITE_GALLERY = {};
  }
}

async function switchGalleryMode(mode) {
  const wasOpen = galleryState?.siteName || null;
  if (galleryState) closeGallery();
  setGalleryMode(mode);
  await loadGalleryManifest();
  renderCurrentTab();
  renderPriorityBoard();
  if (wasOpen && siteHasGallery(wasOpen)) openGallery(wasOpen);
}

function getGalleryEntry(siteName) {
  const key = normalizeName(siteName);
  if (SITE_GALLERY[key]) return SITE_GALLERY[key];
  if (galleryMode === "live") {
    const alias = LIVE_GALLERY_ALIASES[key];
    if (alias && SITE_GALLERY[alias]) {
      return { ...SITE_GALLERY[alias], name: siteName };
    }
  }
  return null;
}

function siteHasGallery(siteName) {
  const g = getGalleryEntry(siteName);
  if (!g) return false;
  if (g.note) return true;
  return (g.pages || []).some((p) => (p.images || []).length > 0 || !!p.html);
}

function formatPageLabel(pageId) {
  return String(pageId || "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildGallerySlides(entry) {
  const slides = [];
  const pages = [];
  const live = galleryMode === "live" || entry.mode === "live";

  for (const page of entry.pages || []) {
    const pageLabel = page.title || formatPageLabel(page.id);
    if (live && page.html) {
      const startIndex = slides.length;
      slides.push({
        kind: "live",
        html: page.html,
        pageId: page.id,
        pageLabel,
        pageNote: page.note || null,
      });
      pages.push({
        id: page.id,
        label: pageLabel,
        startIndex,
        count: 1,
        note: page.note || null,
      });
      continue;
    }

    const imgs = page.images || [];
    if (!imgs.length) continue;
    const startIndex = slides.length;
    for (const src of imgs) {
      slides.push({
        kind: "image",
        src,
        pageId: page.id,
        pageLabel,
        pageNote: page.note || null,
      });
    }
    pages.push({
      id: page.id,
      label: pageLabel,
      startIndex,
      count: imgs.length,
      note: page.note || null,
    });
  }
  return { slides, pages };
}

function openGallery(siteName) {
  const entry = getGalleryEntry(siteName);
  if (!entry) return;

  const displayName = entry.name || siteName;
  if (markSiteVisitedOnGalleryOpen(displayName)) {
    renderCurrentTab();
    renderPriorityBoard();
  }

  const built = buildGallerySlides(entry);
  galleryState = {
    siteName: entry.name || siteName,
    siteNote: entry.note || null,
    slides: built.slides,
    pages: built.pages,
    index: 0,
    zoom: 1,
    kind: galleryMode === "live" ? "live" : "image",
  };

  const root = document.getElementById("gallery-lightbox");
  root.hidden = false;
  document.body.classList.add("gallery-open");
  document.getElementById("gallery-site-name").textContent =
    galleryState.siteName + (galleryMode === "live" ? " · LIVE" : "");

  const closeBtn = root.querySelector(".gallery-close");
  closeBtn.setAttribute("aria-label", t("galleryClose"));
  closeBtn.title = t("galleryClose");
  root.querySelector("[data-gallery-prev]").setAttribute("aria-label", t("galleryPrev"));
  root.querySelector("[data-gallery-next]").setAttribute("aria-label", t("galleryNext"));
  syncGalleryZoomLabels();

  renderGalleryPageTabs();
  renderGallerySlide();
  closeBtn.focus();
  requestAnimationFrame(() => applyGalleryZoom());
}

function closeGallery() {
  const root = document.getElementById("gallery-lightbox");
  if (!root || root.hidden) return;
  root.hidden = true;
  document.body.classList.remove("gallery-open");
  const img = document.getElementById("gallery-image");
  const frame = document.getElementById("gallery-frame");
  img.removeAttribute("src");
  img.alt = "";
  img.style.width = "";
  img.style.maxWidth = "";
  img.style.height = "";
  img.classList.remove("is-zoomed");
  img.hidden = false;
  if (frame) {
    frame.removeAttribute("src");
    frame.hidden = true;
    frame.style.width = "";
    frame.style.height = "";
  }
  document.getElementById("gallery-pages").innerHTML = "";
  galleryState = null;
}

function galleryStep(delta) {
  if (!galleryState || !galleryState.slides.length) return;
  const n = galleryState.slides.length;
  galleryState.index = (galleryState.index + delta + n) % n;
  galleryState.zoom = 1;
  renderGalleryPageTabs();
  renderGallerySlide();
  requestAnimationFrame(() => applyGalleryZoom());
}

function galleryJumpToPage(pageId) {
  if (!galleryState) return;
  const page = galleryState.pages.find((p) => p.id === pageId);
  if (!page) return;
  galleryState.index = page.startIndex;
  galleryState.zoom = 1;
  renderGalleryPageTabs();
  renderGallerySlide();
  requestAnimationFrame(() => applyGalleryZoom());
}

function renderGalleryPageTabs() {
  const el = document.getElementById("gallery-pages");
  if (!galleryState) {
    el.innerHTML = "";
    return;
  }
  const { pages, slides, index } = galleryState;
  if (pages.length <= 1) {
    el.innerHTML = "";
    el.hidden = true;
    return;
  }
  el.hidden = false;
  const currentPageId = slides[index]?.pageId;
  el.innerHTML = pages
    .map((p) => {
      const active = p.id === currentPageId ? "active" : "";
      const count = p.count > 1 ? ` <span class="gallery-page-count">${p.count}</span>` : "";
      return `<button type="button" class="gallery-page-tab ${active}" role="tab" aria-selected="${p.id === currentPageId}" data-gallery-page="${escapeHtml(p.id)}" title="${escapeHtml(p.label)}">${escapeHtml(p.label)}${count}</button>`;
    })
    .join("");
}

function renderGallerySlide() {
  if (!galleryState) return;
  const { slides, index, siteNote } = galleryState;
  const img = document.getElementById("gallery-image");
  const frame = document.getElementById("gallery-frame");
  const empty = document.getElementById("gallery-empty");
  const pageLabel = document.getElementById("gallery-page-label");
  const notesEl = document.getElementById("gallery-notes");
  const counter = document.getElementById("gallery-counter");
  const prevBtn = document.querySelector("[data-gallery-prev]");
  const nextBtn = document.querySelector("[data-gallery-next]");
  const wrap = document.querySelector(".gallery-image-wrap");

  const noteBits = [];
  if (siteNote) {
    noteBits.push(
      `<div class="gallery-note"><span class="gallery-note-label">${escapeHtml(t("gallerySiteNote"))}</span>${escapeHtml(siteNote)}</div>`
    );
  }
  if (galleryMode === "live") {
    noteBits.push(
      `<div class="gallery-note"><span class="gallery-note-label">LIVE</span>${escapeHtml(t("galleryLiveHint"))}</div>`
    );
    noteBits.push(`<div class="gallery-legend">
      <span class="gal-leg gal-leg-p">${escapeHtml(t("galleryLegendPtag"))}</span>
      <span class="gal-leg gal-leg-cp">${escapeHtml(t("galleryLegendCptag"))}</span>
      <span class="gal-leg gal-leg-cf">${escapeHtml(t("galleryLegendCftag"))}</span>
    </div>`);
  }

  if (!slides.length) {
    img.hidden = true;
    img.removeAttribute("src");
    if (frame) {
      frame.hidden = true;
      frame.removeAttribute("src");
    }
    empty.hidden = false;
    empty.textContent = t("galleryNoImages");
    pageLabel.textContent = "";
    pageLabel.hidden = true;
    counter.textContent = "";
    prevBtn.hidden = true;
    nextBtn.hidden = true;
    document.querySelector(".gallery-zoom")?.setAttribute("hidden", "");
    notesEl.innerHTML = noteBits.join("");
    notesEl.hidden = !noteBits.length;
    return;
  }

  document.querySelector(".gallery-zoom")?.removeAttribute("hidden");

  const slide = slides[index];
  const pageSlides = slides.filter((s) => s.pageId === slide.pageId);
  const pagePos = pageSlides.findIndex((s) => s === slide) + 1;
  galleryState.kind = slide.kind || "image";

  empty.hidden = true;
  if (wrap) {
    wrap.scrollTop = 0;
    wrap.scrollLeft = 0;
  }

  if (slide.kind === "live") {
    img.hidden = true;
    img.removeAttribute("src");
    if (frame) {
      frame.hidden = false;
      if (frame.getAttribute("src") !== slide.html) frame.src = slide.html;
    }
  } else {
    if (frame) {
      frame.hidden = true;
      frame.removeAttribute("src");
    }
    img.hidden = false;
    const srcChanged = img.getAttribute("src") !== slide.src;
    if (srcChanged) {
      galleryState.zoom = 1;
      img.src = slide.src;
    }
    img.alt = `${galleryState.siteName} — ${slide.pageLabel}`;
  }

  pageLabel.hidden = false;
  pageLabel.textContent =
    pageSlides.length > 1
      ? `${slide.pageLabel} · ${pagePos}/${pageSlides.length}`
      : slide.pageLabel;
  counter.textContent = `${index + 1} / ${slides.length}`;
  prevBtn.hidden = slides.length < 2;
  nextBtn.hidden = slides.length < 2;

  if (galleryState.zoom == null) galleryState.zoom = 1;
  const sizeImage = () => applyGalleryZoom();
  if (slide.kind === "live") {
    requestAnimationFrame(sizeImage);
  } else if (img.complete && img.naturalWidth) {
    sizeImage();
  } else {
    img.addEventListener("load", sizeImage, { once: true });
  }
  requestAnimationFrame(sizeImage);

  if (slide.pageNote) {
    noteBits.push(
      `<div class="gallery-note page"><span class="gallery-note-label">${escapeHtml(slide.pageLabel)}</span>${escapeHtml(slide.pageNote)}</div>`
    );
  }
  notesEl.innerHTML = noteBits.join("");
  notesEl.hidden = !noteBits.length;
}

function rowProgressClass(siteName, flags) {
  const f = flags[siteName] || {};
  if (f.key) return "row-keyed";
  if (f.visited) return "row-visited";
  return "row-todo";
}

function rowPriorityClass(siteName) {
  const tier = getSitePriorityTier(siteName);
  if (tier === "max") return "row-priority-max";
  if (tier === "medium") return "row-priority-med";
  return "";
}

function currentMatchedNameSet() {
  const tab = wikiTabs[activeWiki];
  const set = new Set();
  for (const site of tab.matched || []) {
    set.add(normalizeName(site.name));
  }
  return set;
}

function findFlagsForSite(flags, siteName) {
  if (!flags) return {};
  if (flags[siteName]) return flags[siteName];
  const key = normalizeName(siteName);
  for (const [name, f] of Object.entries(flags)) {
    if (normalizeName(name) === key) return f || {};
  }
  return {};
}

function priorityChip(name, hitSet, flags) {
  const f = findFlagsForSite(flags, name);
  const done = !!(f.visited || f.key);
  const hit = !done && hitSet.has(normalizeName(name));
  const canOpen = siteHasGallery(name);
  const cls = [
    "priority-chip",
    hit ? "priority-hit" : "",
    f.key ? "priority-keyed" : done ? "priority-visited" : "",
    canOpen ? "has-gallery" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const title = hit ? t("priorityHitHint") : name;
  if (canOpen) {
    return `<button type="button" class="${cls}" data-priority-site="${escapeHtml(name)}" data-gallery-site="${escapeHtml(name)}" title="${escapeHtml(title)}">${escapeHtml(name)}</button>`;
  }
  return `<span class="${cls}" data-priority-site="${escapeHtml(name)}" title="${escapeHtml(title)}">${escapeHtml(name)}</span>`;
}

function renderPriorityWindowColumns(groups, hitSet, flags) {
  const cols = Object.entries(groups)
    .map(([windowKey, names]) => {
      const label = `:${windowKey.replace("-", " – :")}`;
      const chips = names.map((n) => priorityChip(n, hitSet, flags)).join("");
      return `<div class="priority-col">
        <div class="priority-col-head">${escapeHtml(label)}</div>
        <div class="priority-col-body">${chips}</div>
      </div>`;
    })
    .join("");
  return `<div class="priority-cols">${cols}</div>`;
}

function renderPriorityBoard() {
  const board = document.getElementById("priority-board");
  if (!board) return;
  const hitSet = currentMatchedNameSet();
  const flags = loadFlags();
  const lowChips = SITE_PRIORITY.low.map((n) => priorityChip(n, hitSet, flags)).join("");

  board.innerHTML = `
    <div class="priority-board-head">
      <h3 class="priority-board-title">${escapeHtml(t("priorityTitle"))}</h3>
    </div>
    <div class="priority-section">
      <div class="priority-section-title priority-max">${escapeHtml(t("priorityMax"))}</div>
      ${renderPriorityWindowColumns(SITE_PRIORITY.max, hitSet, flags)}
    </div>
    <div class="priority-section">
      <div class="priority-section-title priority-med">${escapeHtml(t("priorityMedium"))}</div>
      ${renderPriorityWindowColumns(SITE_PRIORITY.medium, hitSet, flags)}
    </div>
    <div class="priority-section">
      <div class="priority-section-title priority-low">${escapeHtml(t("priorityLow"))}</div>
      <div class="priority-low-grid">${lowChips}</div>
    </div>
  `;
}

function renderSiteRows(sites, flags) {
  if (!sites.length) return "";

  const headChecks = PROGRESS_FLAGS.map(
    (d) =>
      `<th class="check-head" title="${escapeHtml(t(d.titleKey))}">${escapeHtml(t(d.shortKey))}</th>`
  ).join("");

  const rows = sites
    .map((site) => {
      const statusClass = `status-${site.status}`;
      const label = statusLabel(site.status);
      const timeText = formatTimeWindow(site);
      const timeClass =
        site.status === "dead" || site.status === "fbi" ? "dead-time" : "";
      const progressCls = rowProgressClass(site.name, flags);
      const priorityCls = rowPriorityClass(site.name);
      const checkCells = PROGRESS_FLAGS.map((d) =>
        renderCheckCell(site.name, flags, d)
      ).join("");
      const hasGal = siteHasGallery(site.name);
      const nameCell = hasGal
        ? `<td class="site-name has-gallery"><button type="button" class="site-gallery-btn" data-gallery-site="${escapeHtml(site.name)}" title="${escapeHtml(t("galleryOpenHint"))}"><span class="site-gallery-icon" aria-hidden="true"></span><span class="site-gallery-label">${escapeHtml(site.name)}</span></button></td>`
        : `<td class="site-name">${escapeHtml(site.name)}</td>`;

      return `<tr class="${progressCls} ${priorityCls}">
        ${nameCell}
        <td class="site-time ${timeClass}">${escapeHtml(timeText)}</td>
        <td class="site-status ${statusClass}">${escapeHtml(label)}</td>
        ${checkCells}
      </tr>`;
    })
    .join("");

  return `<table class="site-table">
    <thead>
      <tr>
        <th>${escapeHtml(t("colSite"))}</th>
        <th>${escapeHtml(t("colTime"))}</th>
        <th>${escapeHtml(t("colStatus"))}</th>
        ${headChecks}
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function renderCurrentTab() {
  const flags = loadFlags();
  const container = document.getElementById("tracker-results");
  const tab = wikiTabs[activeWiki];
  const matched = tab.matched;
  const unknown = tab.unknown.map((name) => ({
    name,
    status: "unknown",
    time: null,
    inputName: name,
  }));

  const parts = [];

  if (matched.length) {
    parts.push(`
      <div class="results-section">
        <div class="results-section-title">
          ${escapeHtml(wikiName(activeWiki))}
          <span class="count">(${matched.length})</span>
        </div>
        ${renderSiteRows(matched, flags)}
      </div>
    `);
  }

  if (unknown.length) {
    parts.push(`
      <div class="results-section unknown">
        <div class="results-section-title">
          ${escapeHtml(t("unknownSection"))}
          <span class="count">(${unknown.length})</span>
        </div>
        ${renderSiteRows(unknown, flags)}
      </div>
    `);
  }

  if (!parts.length) {
    container.innerHTML = `<p class="placeholder">${escapeHtml(t("emptyTab", { name: wikiName(activeWiki) }))}</p>`;
    document.getElementById("match-summary").textContent = "";
  } else {
    container.innerHTML = parts.join("");
    const total = matched.length + unknown.length;
    document.getElementById("match-summary").textContent =
      t("matchSummary", { name: wikiName(activeWiki), matched: matched.length, total }) +
      (unknown.length ? t("unknownCount", { n: unknown.length }) : "");
  }

  renderPriorityBoard();
  updateTabIndicators();
  syncTrackerEmptyState();
}

function switchWiki(wiki) {
  const siteInput = document.getElementById("site-input");
  wikiTabs[activeWiki].input = siteInput.value;

  activeWiki = wiki;
  siteInput.value = wikiTabs[activeWiki].input;
  siteInput.placeholder = t("sitePlaceholder", { name: wikiName(activeWiki) });

  document.querySelectorAll(".wiki-tab").forEach((btn) => {
    const on = Number(btn.dataset.wiki) === activeWiki;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-selected", String(on));
  });

  saveWikiTabs();
  renderCurrentTab();
  syncTrackerEmptyState();
}

function analyze() {
  const siteInput = document.getElementById("site-input");
  const raw = siteInput.value;
  wikiTabs[activeWiki].input = raw;

  const names = parsePastedLines(raw);
  if (!names.length) {
    wikiTabs[activeWiki].matched = [];
    wikiTabs[activeWiki].unknown = [];
    saveWikiTabs();
    renderCurrentTab();
    return;
  }

  const { matched, unknown } = matchSites(names);
  wikiTabs[activeWiki].matched = matched;
  wikiTabs[activeWiki].unknown = unknown;
  saveWikiTabs();
  renderCurrentTab();
}

function clearCurrentTab() {
  wikiTabs[activeWiki] = { input: "", matched: [], unknown: [] };
  document.getElementById("site-input").value = "";
  saveWikiTabs();
  renderCurrentTab();
  syncTrackerEmptyState();
}

/* ==========================================================================
   Miners / Info panels
   ========================================================================== */

function formatSecAsMin(sec) {
  const m = sec / 60;
  if (Math.abs(m - Math.round(m)) < 0.05) return String(Math.round(m));
  const fixed = m.toFixed(1);
  return fixed.endsWith(".0") ? fixed.slice(0, -2) : fixed;
}

function formatMinRange(range) {
  if (!range || range.length < 2) return "—";
  return `${formatSecAsMin(range[0])}–${formatSecAsMin(range[1])} min`;
}

function formatSecRange(range) {
  if (!range || range.length < 2) return "—";
  const a = Number.isInteger(range[0]) ? range[0] : Number(range[0].toFixed(1));
  const b = Number.isInteger(range[1]) ? range[1] : Number(range[1].toFixed(1));
  return `${a}–${b} s`;
}

function minerTooltip(c) {
  const parts = [
    `${t("minerColAccess")}: ${formatMinRange(c.access)} (${formatSecRange(c.access)})`,
    `${t("minerFailCd")}: ${formatMinRange(c.fail)} (${formatSecRange(c.fail)})`,
    `${t("minerResetCd")}: ${formatMinRange(c.reset)} (${formatSecRange(c.reset)})`,
  ];
  return parts.join("\n");
}

function renderMiners() {
  const el = document.getElementById("miners-list");
  if (!el) return;

  const html = Object.values(MINERS)
    .map((tier) => {
      const rows = tier.computers
        .map((c, i) => {
          const top = i < 3 && c.rate != null ? "top" : "";
          const rateText =
            c.rate == null ? t("minerRateUnknown") : `${c.rate.toFixed(2)} DOS/min`;
          return `<div class="miner-row ${top}" title="${escapeHtml(minerTooltip(c))}">
            <span class="miner-name">${escapeHtml(c.name)}</span>
            <span class="miner-access" title="${escapeHtml(t("minerColAccess"))}">${escapeHtml(formatMinRange(c.access))}</span>
            <span class="miner-rate">${escapeHtml(rateText)}</span>
          </div>`;
        })
        .join("");

      return `<div class="tier-block">
        <div class="tier-label">${escapeHtml(tier.label)}<span class="tier-cost">· ${escapeHtml(t(tier.costKey))}</span></div>
        <div class="miner-cols" aria-hidden="true">
          <span></span>
          <span>${escapeHtml(t("minerAccess"))}</span>
          <span>${escapeHtml(t("minerColRate"))}</span>
        </div>
        ${rows}
      </div>`;
    })
    .join("");

  el.innerHTML = html;
}

function renderHelp() {
  const list = document.getElementById("help-list");
  list.innerHTML = t("help")
    .map(
      ([label, text]) =>
        `<li><strong>${escapeHtml(label)}</strong> ${escapeHtml(text)}</li>`
    )
    .join("");
}

function renderFaq() {
  const list = document.getElementById("faq-qa-list");
  list.innerHTML = t("faq")
    .map(
      (item) =>
        `<li class="faq-item"><strong class="faq-q">${escapeHtml(item.q)}</strong><span class="faq-a">${escapeHtml(item.a)}</span></li>`
    )
    .join("");
}

function renderSensors() {
  const el = document.getElementById("sensors-list");
  if (!el) return;

  const sensors = [
    {
      num: 1,
      titleKey: "sensor1Title",
      bodyKey: "sensor1Body",
      image: "assets/motion-sensor-1.png",
    },
    {
      num: 2,
      titleKey: "sensor2Title",
      bodyKey: "sensor2Body",
      image: "assets/motion-sensor-2.png",
    },
    {
      num: 3,
      titleKey: "sensor3Title",
      bodyKey: "sensor3Body",
      image: "assets/motion-sensor-3.png",
    },
  ];

  const distinguish = `<article class="sensor-card sensor-card-tip">
    <h3 class="sensor-title">${escapeHtml(t("sensorsDistinguishTitle"))}</h3>
    <ul class="sensor-steps">
      ${t("sensorsDistinguishBody")
        .map((line) => `<li>${escapeHtml(line)}</li>`)
        .join("")}
    </ul>
  </article>`;

  const cards = sensors
    .map((s) => {
      const steps = t(s.bodyKey)
        .map((line) => `<li>${escapeHtml(line)}</li>`)
        .join("");

      return `<article class="sensor-card">
        <h3 class="sensor-title">${escapeHtml(t(s.titleKey))}</h3>
        <ul class="sensor-steps">${steps}</ul>
        <figure class="sensor-figure">
          <img src="${s.image}" alt="${escapeHtml(t(s.titleKey))}" loading="lazy" />
        </figure>
      </article>`;
    })
    .join("");

  el.innerHTML = `<p class="sensors-intro">${escapeHtml(t("sensorsIntro"))}</p>${distinguish}<div class="sensors-grid">${cards}</div>`;
}

function isBombSpoilerAccepted() {
  return localStorage.getItem(STORAGE_BOMB_SPOILER) === "1";
}

function setBombSpoilerAccepted(accepted) {
  localStorage.setItem(STORAGE_BOMB_SPOILER, accepted ? "1" : "0");
}

function renderThreats() {
  const body = document.getElementById("threats-body");
  const revealed = isBombSpoilerAccepted();

  body.innerHTML = t("threats")
    .map((th) => {
      if (th.spoiler && !revealed) {
        return `<tr class="threat-spoiler-row">
          <td class="threat-name threat-name-hidden">
            <span class="spoiler-badge">${escapeHtml(t("spoilerLabel"))}</span>
          </td>
          <td colspan="2" class="threat-spoiler-cell">
            <span class="spoiler-hint">${escapeHtml(t("spoilerHidden"))}</span>
            <button type="button" class="btn btn-ghost spoiler-reveal-btn" data-spoiler-action="reveal">
              ${escapeHtml(t("spoilerAccept"))}
            </button>
          </td>
        </tr>`;
      }

      const hideBtn = th.spoiler
        ? ` <button type="button" class="spoiler-hide-btn" data-spoiler-action="hide" title="${escapeHtml(t("spoilerHide"))}">[${escapeHtml(t("spoilerHide"))}]</button>`
        : "";

      return `<tr class="${th.spoiler ? "threat-spoiler-revealed" : ""}">
        <td class="threat-name">
          ${escapeHtml(th.name)}
          ${th.spoiler ? `<span class="spoiler-badge">${escapeHtml(t("spoilerLabel"))}</span>` : ""}
          ${hideBtn}
        </td>
        <td>${escapeHtml(th.cue)}</td>
        <td>${th.counter}</td>
      </tr>`;
    })
    .join("");
}

function renderDecryptors() {
  const el = document.getElementById("decryptors-body");
  if (!el) return;

  const rows = KEYDECRYPTORS.map((d) => {
    const indexes = `${d.indexes[0]}–${d.indexes[1]}`;
    const msgs = `${d.messagesPerCycle[0]}–${d.messagesPerCycle[1]}`;
    const repNeed = d.requiresRep ? t("decryptYes") : t("decryptNo");
    const tip = [
      `Message chance: ${d.messageChance}%`,
      `Chat messages: ${d.chatMessages}`,
    ].join(" · ");
    return `<tr title="${escapeHtml(tip)}">
      <td class="decrypt-name">${escapeHtml(d.name)}</td>
      <td class="decrypt-indexes">${escapeHtml(indexes)}</td>
      <td class="decrypt-msgs">${escapeHtml(msgs)}</td>
      <td class="decrypt-rep-need">${escapeHtml(repNeed)}</td>
      <td class="decrypt-rep-level">${d.requiredRep}</td>
    </tr>`;
  }).join("");

  el.innerHTML = `<div class="decryptors-table-wrap">
    <table class="decryptors-table">
      <thead>
        <tr>
          <th>${escapeHtml(t("decryptColName"))}</th>
          <th>${escapeHtml(t("decryptColIndexes"))}</th>
          <th>${escapeHtml(t("decryptColMsgs"))}</th>
          <th>${escapeHtml(t("decryptColRep"))}</th>
          <th>${escapeHtml(t("decryptColRepLevel"))}</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}

function buildCreditsHtml(opts = {}) {
  const { forWelcome = false } = opts;
  const sources = CREDIT_SOURCES.filter((s) => s && (s.url || s.author || s.profileUrl));
  let sourcesHtml;
  if (!sources.length) {
    sourcesHtml = `<p class="credits-empty">${escapeHtml(t("creditsEmpty"))}</p>`;
  } else {
    sourcesHtml = `<ul class="credits-sources">${sources
      .map((s) => {
        const author = s.author
          ? s.profileUrl
            ? `<a class="credits-author" href="${escapeHtml(s.profileUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.author)}</a>`
            : `<span class="credits-author">${escapeHtml(s.author)}</span>`
          : "";
        const links = [];
        if (s.url) {
          links.push(
            `<a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.urlLabel || t("creditsGuideLink"))}</a>`
          );
        }
        if (s.profileUrl) {
          links.push(
            `<a href="${escapeHtml(s.profileUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("creditsProfileLink"))}</a>`
          );
        }
        return `<li><div class="credits-source-name">${author}</div><div class="credits-source-links">${links.join(" · ")}</div></li>`;
      })
      .join("")}</ul>`;
  }

  if (forWelcome) {
    return `
      <p class="credits-block">${escapeHtml(t("creditsDisclaimer"))}</p>
      <p class="credits-block muted">${escapeHtml(t("creditsUnofficial"))}</p>
      <h4 class="credits-subhead">${escapeHtml(t("creditsSourcesHeading"))}</h4>
      ${sourcesHtml}
    `;
  }

  return `
    <h3 class="credits-heading">${escapeHtml(t("creditsTitle"))}</h3>
    <p class="credits-block">${escapeHtml(t("creditsDisclaimer"))}</p>
    <p class="credits-block credits-warn">${escapeHtml(t("creditsContentWarning"))}</p>
    <p class="credits-block muted">${escapeHtml(t("creditsUnofficial"))}</p>
    <h4 class="credits-subhead">${escapeHtml(t("creditsSourcesHeading"))}</h4>
    ${sourcesHtml}
  `;
}

function renderCredits() {
  const body = document.getElementById("credits-body");
  if (body) body.innerHTML = buildCreditsHtml();
  const welcome = document.getElementById("welcome-credits");
  if (welcome) welcome.innerHTML = buildCreditsHtml({ forWelcome: true });
}

function isWelcomeAccepted() {
  return localStorage.getItem(STORAGE_WELCOME) === "1";
}

function acceptWelcome() {
  const remember = document.getElementById("welcome-remember")?.checked;
  if (remember) {
    localStorage.setItem(STORAGE_WELCOME, "1");
  } else {
    localStorage.removeItem(STORAGE_WELCOME);
  }
  const overlay = document.getElementById("welcome-overlay");
  if (overlay) overlay.hidden = true;
  document.body.classList.remove("welcome-locked");
}

function showWelcomeIfNeeded() {
  const overlay = document.getElementById("welcome-overlay");
  if (!overlay) return;
  if (isWelcomeAccepted()) {
    overlay.hidden = true;
    document.body.classList.remove("welcome-locked");
    return;
  }
  overlay.hidden = false;
  document.body.classList.add("welcome-locked");
  const remember = document.getElementById("welcome-remember");
  if (remember) remember.checked = false;
  renderCredits();
  document.getElementById("welcome-accept")?.focus();
}

function syncTrackerEmptyState() {
  const wrap = document.getElementById("tracker-input");
  const input = document.getElementById("site-input");
  if (!wrap || !input) return;
  const empty = !String(input.value || "").trim();
  wrap.classList.toggle("is-empty", empty);
}

function applyStaticI18n() {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.title = t(el.dataset.i18nTitle);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });

  document.getElementById("site-input").placeholder = t("sitePlaceholder", { name: wikiName(activeWiki) });
  document.getElementById("notebook-input").placeholder = t("notebookPlaceholder");

  document.querySelectorAll(".resize-handle").forEach((el) => {
    el.title = t("resizeHint");
  });

  const resetBtn = document.getElementById("reset-btn");
  if (resetBtn) resetBtn.title = t("resetBtn");

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // restore info tab labels after data-i18n overwrite — already handled by data-i18n
  document.querySelectorAll(".info-tab").forEach((btn) => {
    const on = btn.dataset.info === activeInfoTab;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-selected", String(on));
  });
  document.querySelectorAll(".info-pane").forEach((pane) => {
    pane.classList.toggle("active", pane.id === `info-${activeInfoTab}`);
  });
}

function applyLanguage() {
  localStorage.setItem(STORAGE_LANG, lang);
  applyStaticI18n();
  renderHelp();
  renderFaq();
  renderSensors();
  renderThreats();
  renderDecryptors();
  renderCredits();
  renderMiners();
  renderCurrentTab();
  syncNotebook();
  syncTrackerEmptyState();
  if (galleryState) {
    const root = document.getElementById("gallery-lightbox");
    root.querySelector(".gallery-close").setAttribute("aria-label", t("galleryClose"));
    root.querySelector(".gallery-close").title = t("galleryClose");
    root.querySelector("[data-gallery-prev]").setAttribute("aria-label", t("galleryPrev"));
    root.querySelector("[data-gallery-next]").setAttribute("aria-label", t("galleryNext"));
    syncGalleryZoomLabels();
    renderGalleryPageTabs();
    renderGallerySlide();
  }
}

function setLanguage(next) {
  if (next !== "pl" && next !== "en") return;
  lang = next;
  applyLanguage();
}

/* ==========================================================================
   Smart Notebook
   ========================================================================== */

function looksLikeKeyCode(token) {
  if (!/^[A-Za-z0-9][A-Za-z0-9_-]{2,19}$/.test(token)) return false;
  // Short decrypted codes (e.g. 9f09)
  if (token.length <= DECRYPTED_CODE_MAX_LEN) {
    return /^[A-Za-z0-9_-]+$/.test(token);
  }
  if (/\d/.test(token)) return true;
  if (/^[A-Fa-f0-9_-]{6,}$/.test(token)) return true;
  if (/[A-Z]/.test(token) && /[a-z]/.test(token) && token.length >= 8) return true;
  return false;
}

function keyKind(code) {
  return code.length <= DECRYPTED_CODE_MAX_LEN ? "decrypted" : "encrypted";
}

/**
 * Keys in form: "N - code".
 * Returns [{ index, length, num, code, raw, kind }] in text order.
 */
function findKeyMatches(text) {
  const matches = [];
  const numbered = new RegExp(NUMBERED_KEY_REGEX.source, "g");
  let m;
  while ((m = numbered.exec(text)) !== null) {
    const code = m[3];
    if (!looksLikeKeyCode(code)) continue;
    matches.push({
      index: m.index,
      length: m[0].length,
      num: m[1],
      sep: m[2],
      code,
      raw: m[0],
      kind: keyKind(code),
    });
  }
  return matches;
}

function extractKeys(text) {
  const seen = new Set();
  const keys = [];
  for (const match of findKeyMatches(text)) {
    const id = `${match.kind}:${match.num}:${match.code}`;
    if (seen.has(id)) continue;
    seen.add(id);
    keys.push(match);
  }
  keys.sort((a, b) => {
    if (a.kind !== b.kind) return a.kind === "decrypted" ? -1 : 1;
    return Number(a.num) - Number(b.num);
  });
  return keys;
}

/** Slots 1–8 from decrypted keys; last occurrence in text wins. */
function buildDecryptedSlots(text) {
  const slots = { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null };
  for (const match of findKeyMatches(text)) {
    if (match.kind !== "decrypted") continue;
    const n = Number(match.num);
    if (n >= 1 && n <= 8) slots[n] = match.code;
  }
  return slots;
}

function assemblyFinalKey(slots) {
  const parts = [];
  for (let i = 1; i <= 8; i++) {
    if (!slots[i]) return null;
    parts.push(slots[i]);
  }
  return parts.join("");
}

function formatKeyChip(match) {
  const copyValue = `${match.num} - ${match.code}`;
  const kindClass = match.kind === "decrypted" ? "key-chip-decrypted" : "key-chip-encrypted";
  const kindBadge =
    match.kind === "decrypted"
      ? `<span class="key-chip-kind">OK</span>`
      : "";
  const label = `<span class="key-chip-num">#${escapeHtml(match.num)}</span>${kindBadge}<span class="key-chip-code">${escapeHtml(match.code)}</span>`;
  return `<button type="button" class="key-chip key-chip-numbered ${kindClass}" data-copy="${escapeHtml(copyValue)}" title="${escapeHtml(t("copyKeyHint"))}">${label}</button>`;
}

function renderKeyAssembly(text) {
  const el = document.getElementById("key-assembly");
  if (!el) return;

  const slots = buildDecryptedSlots(text);
  let filled = 0;
  const cells = [];
  for (let i = 1; i <= 8; i++) {
    const code = slots[i];
    if (code) filled += 1;
    cells.push(
      code
        ? `<div class="assembly-slot filled" title="#${i}"><span class="assembly-slot-num">#${i}</span><span class="assembly-slot-code">${escapeHtml(code)}</span></div>`
        : `<div class="assembly-slot empty" title="#${i}"><span class="assembly-slot-num">#${i}</span><span class="assembly-slot-code">${escapeHtml(t("assemblyEmpty"))}</span></div>`
    );
  }

  const finalKey = assemblyFinalKey(slots);
  const complete = !!finalKey;
  const copyBtn = complete
    ? `<button type="button" class="btn btn-primary assembly-copy-btn" data-copy-final="${escapeHtml(finalKey)}" title="${escapeHtml(t("assemblyCopy"))}">${escapeHtml(t("assemblyCopy"))}</button>`
    : `<button type="button" class="btn btn-ghost assembly-copy-btn" disabled title="${escapeHtml(t("assemblyIncomplete"))}">${escapeHtml(t("assemblyCopy"))}</button>`;

  el.innerHTML = `
    <div class="assembly-head">
      <span class="assembly-title">${escapeHtml(t("assemblyTitle"))}</span>
      <span class="assembly-count">${escapeHtml(t("assemblyCount", { n: filled }))}</span>
    </div>
    <div class="assembly-slots">${cells.join("")}</div>
    <div class="assembly-actions">${copyBtn}</div>
  `;
}

function copyKeyToClipboard(value, btn) {
  const done = () => {
    btn.classList.add("copied");
    const prev = btn.getAttribute("title");
    btn.setAttribute("title", t("copyKeyDone"));
    setTimeout(() => {
      btn.classList.remove("copied");
      if (prev) btn.setAttribute("title", prev);
    }, 1200);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(value).then(done).catch(() => {
      fallbackCopy(value);
      done();
    });
  } else {
    fallbackCopy(value);
    done();
  }
}

function fallbackCopy(value) {
  const ta = document.createElement("textarea");
  ta.value = value;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } catch {
    /* ignore */
  }
  document.body.removeChild(ta);
}

function highlightNotes(text) {
  const matches = findKeyMatches(text);
  let result = "";
  let last = 0;

  for (const match of matches) {
    result += escapeHtml(text.slice(last, match.index));
    const sep = match.raw.slice(match.num.length, match.raw.length - match.code.length);
    const kindClass = match.kind === "decrypted" ? "key-mark-decrypted" : "key-mark-encrypted";
    result += `<mark class="key-mark key-mark-numbered ${kindClass}"><span class="key-num">${escapeHtml(match.num)}</span><span class="key-sep">${escapeHtml(sep)}</span><span class="key-code">${escapeHtml(match.code)}</span></mark>`;
    last = match.index + match.length;
  }

  result += escapeHtml(text.slice(last));
  if (text.endsWith("\n")) result += "\n";
  return result || " ";
}

function syncNotebook() {
  const input = document.getElementById("notebook-input");
  const highlight = document.getElementById("notebook-highlight");
  const keysEl = document.getElementById("detected-keys");
  if (!input) return;
  const text = input.value;

  highlight.innerHTML = highlightNotes(text);
  highlight.scrollTop = input.scrollTop;
  highlight.scrollLeft = input.scrollLeft;

  const keys = extractKeys(text);
  if (keys.length) {
    keysEl.classList.add("has-keys");
    keysEl.innerHTML =
      `<span class="detected-keys-label">${escapeHtml(t("detectedKeys"))}</span> ` +
      keys.map(formatKeyChip).join("");
  } else {
    keysEl.classList.remove("has-keys");
    keysEl.textContent = "";
  }

  renderKeyAssembly(text);
  localStorage.setItem(STORAGE_NOTES, text);
}

/* ==========================================================================
   Layout resize + factory reset
   ========================================================================== */

function loadLayout() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_LAYOUT) || "{}");
  } catch {
    return {};
  }
}

function saveLayout(layout) {
  localStorage.setItem(STORAGE_LAYOUT, JSON.stringify(layout));
}

function applyLayout() {
  const layout = loadLayout();
  const root = document.documentElement;
  if (layout.minersH) root.style.setProperty("--miners-h", `${layout.minersH}%`);
  if (layout.faqH) root.style.setProperty("--faq-h", `${layout.faqH}px`);
  if (layout.priorityH) root.style.setProperty("--priority-h", `${layout.priorityH}px`);
}

function initResizeHandles() {
  const sidebar = document.querySelector(".sidebar");
  const sidebarHandle = document.getElementById("resize-sidebar");
  const faqHandle = document.getElementById("resize-faq");
  const priorityHandle = document.getElementById("resize-priority");
  const tracker = document.querySelector(".tracker");
  const grid = document.querySelector(".grid");

  function startDrag(onMove) {
    document.body.classList.add("is-resizing");
    const move = (ev) => onMove(ev.clientY);
    const up = () => {
      document.body.classList.remove("is-resizing");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  }

  if (sidebarHandle && sidebar) {
    sidebarHandle.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      const rect = sidebar.getBoundingClientRect();
      startDrag((clientY) => {
        const pct = ((clientY - rect.top) / rect.height) * 100;
        const clamped = Math.min(75, Math.max(15, pct));
        document.documentElement.style.setProperty("--miners-h", `${clamped}%`);
        const layout = loadLayout();
        layout.minersH = Math.round(clamped);
        saveLayout(layout);
      });
    });
  }

  if (faqHandle && grid) {
    faqHandle.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      const gridRect = grid.getBoundingClientRect();
      startDrag((clientY) => {
        const h = gridRect.bottom - clientY;
        const clamped = Math.min(gridRect.height * 0.7, Math.max(140, h));
        document.documentElement.style.setProperty("--faq-h", `${clamped}px`);
        const layout = loadLayout();
        layout.faqH = Math.round(clamped);
        saveLayout(layout);
      });
    });
  }

  if (priorityHandle && tracker) {
    priorityHandle.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      const rect = tracker.getBoundingClientRect();
      startDrag((clientY) => {
        const h = rect.bottom - clientY;
        const clamped = Math.min(rect.height * 0.75, Math.max(140, h));
        document.documentElement.style.setProperty("--priority-h", `${clamped}px`);
        const layout = loadLayout();
        layout.priorityH = Math.round(clamped);
        saveLayout(layout);
      });
    });
  }
}

function factoryReset() {
  if (!confirm(t("resetConfirm"))) return;

  const keys = [
    STORAGE_FLAGS,
    STORAGE_NOTES,
    STORAGE_WIKI_TABS,
    STORAGE_ACTIVE_WIKI,
    STORAGE_BOMB_SPOILER,
    STORAGE_LAYOUT,
  ];
  for (const key of keys) localStorage.removeItem(key);
  // keep language preference

  wikiTabs = {
    1: { input: "", matched: [], unknown: [] },
    2: { input: "", matched: [], unknown: [] },
    3: { input: "", matched: [], unknown: [] },
  };
  activeWiki = 1;
  activeInfoTab = "help";

  document.documentElement.style.removeProperty("--miners-h");
  document.documentElement.style.removeProperty("--faq-h");
  document.documentElement.style.removeProperty("--priority-h");

  const siteInput = document.getElementById("site-input");
  const notebook = document.getElementById("notebook-input");
  if (siteInput) siteInput.value = "";
  if (notebook) notebook.value = "";

  document.querySelectorAll(".wiki-tab").forEach((btn) => {
    const on = Number(btn.dataset.wiki) === 1;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-selected", String(on));
  });

  document.querySelectorAll(".info-tab").forEach((btn) => {
    const on = btn.dataset.info === "help";
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-selected", String(on));
  });
  document.querySelectorAll(".info-pane").forEach((pane) => {
    pane.classList.toggle("active", pane.id === "info-help");
  });

  applyLanguage();
}

/* ==========================================================================
   Clock & events
   ========================================================================== */

function tickClock() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  document.getElementById("clock").textContent =
    `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

function init() {
  const savedLang = localStorage.getItem(STORAGE_LANG);
  lang = savedLang === "pl" ? "pl" : "en";

  tickClock();
  setInterval(tickClock, 1000);
  applyLayout();
  initResizeHandles();

  loadWikiTabs();
  const savedWiki = Number(localStorage.getItem(STORAGE_ACTIVE_WIKI) || "1");
  activeWiki = [1, 2, 3].includes(savedWiki) ? savedWiki : 1;

  const siteInput = document.getElementById("site-input");
  const notebook = document.getElementById("notebook-input");

  siteInput.value = wikiTabs[activeWiki].input;

  document.querySelectorAll(".wiki-tab").forEach((btn) => {
    const on = Number(btn.dataset.wiki) === activeWiki;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-selected", String(on));
    btn.addEventListener("click", () => switchWiki(Number(btn.dataset.wiki)));
  });

  const savedNotes = localStorage.getItem(STORAGE_NOTES);
  if (savedNotes) notebook.value = savedNotes;

  applyLanguage();
  showWelcomeIfNeeded();

  setGalleryMode(resolveGalleryMode(), { skipSave: true });
  loadGalleryManifest().then(() => {
    renderCurrentTab();
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  document.querySelectorAll("[data-gallery-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchGalleryMode(btn.dataset.galleryMode);
    });
  });

  document.getElementById("reset-btn").addEventListener("click", factoryReset);

  document.getElementById("welcome-accept")?.addEventListener("click", acceptWelcome);

  document.getElementById("threats-body").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-spoiler-action]");
    if (!btn) return;
    setBombSpoilerAccepted(btn.dataset.spoilerAction === "reveal");
    renderThreats();
  });

  document.getElementById("analyze-btn").addEventListener("click", analyze);
  document.getElementById("clear-tracker-btn").addEventListener("click", clearCurrentTab);

  siteInput.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "Enter") analyze();
  });

  siteInput.addEventListener("input", () => {
    wikiTabs[activeWiki].input = siteInput.value;
    saveWikiTabs();
    syncTrackerEmptyState();
  });

  document.getElementById("tracker-results").addEventListener("click", (e) => {
    const galBtn = e.target.closest("[data-gallery-site]");
    if (galBtn) {
      openGallery(galBtn.dataset.gallerySite);
      return;
    }
    const btn = e.target.closest(".check-btn");
    if (!btn) return;
    const site = btn.dataset.site;
    const flag = btn.dataset.flag;
    const flags = loadFlags();
    if (!flags[site]) flags[site] = {};
    flags[site][flag] = !flags[site][flag];
    saveFlags(flags);
    renderCurrentTab();
  });

  document.getElementById("priority-board").addEventListener("click", (e) => {
    const galBtn = e.target.closest("[data-gallery-site]");
    if (!galBtn) return;
    openGallery(galBtn.dataset.gallerySite);
  });

  const galleryRoot = document.getElementById("gallery-lightbox");
  galleryRoot.addEventListener("click", (e) => {
    if (e.target.closest("[data-gallery-close]")) {
      closeGallery();
      return;
    }
    const pageTab = e.target.closest("[data-gallery-page]");
    if (pageTab) {
      galleryJumpToPage(pageTab.dataset.galleryPage);
      return;
    }
    if (e.target.closest("[data-gallery-prev]")) {
      galleryStep(-1);
      return;
    }
    if (e.target.closest("[data-gallery-next]")) {
      galleryStep(1);
      return;
    }
    if (e.target.closest("[data-gallery-zoom-in]")) {
      galleryZoomBy(GALLERY_ZOOM_STEP);
      return;
    }
    if (e.target.closest("[data-gallery-zoom-out]")) {
      galleryZoomBy(-GALLERY_ZOOM_STEP);
      return;
    }
    if (e.target.closest("[data-gallery-zoom-reset]")) {
      galleryZoomSet(1);
    }
  });

  galleryRoot.querySelector(".gallery-image-wrap")?.addEventListener(
    "wheel",
    (e) => {
      if (!galleryState || !galleryState.slides.length) return;
      if (!(e.ctrlKey || e.metaKey)) return;
      e.preventDefault();
      galleryZoomBy(e.deltaY < 0 ? GALLERY_ZOOM_STEP : -GALLERY_ZOOM_STEP);
    },
    { passive: false }
  );

  galleryRoot.querySelector("#gallery-image")?.addEventListener("dblclick", () => {
    if (!galleryState || !galleryState.slides.length) return;
    galleryZoomSet(galleryState.zoom > 1 ? 1 : 2);
  });

  document.addEventListener("keydown", (e) => {
    if (!isWelcomeAccepted()) {
      if (e.key === "Enter" && document.activeElement?.id === "welcome-accept") {
        e.preventDefault();
        acceptWelcome();
      }
      return;
    }
    if (!galleryState) return;
    if (e.key === "Escape") {
      e.preventDefault();
      closeGallery();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      galleryStep(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      galleryStep(1);
    } else if (e.key === "+" || e.key === "=") {
      e.preventDefault();
      galleryZoomBy(GALLERY_ZOOM_STEP);
    } else if (e.key === "-" || e.key === "_") {
      e.preventDefault();
      galleryZoomBy(-GALLERY_ZOOM_STEP);
    } else if (e.key === "0") {
      e.preventDefault();
      galleryZoomSet(1);
    }
  });

  window.addEventListener("resize", () => {
    if (galleryState) applyGalleryZoom();
  });

  document.querySelectorAll(".info-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeInfoTab = btn.dataset.info;
      document.querySelectorAll(".info-tab").forEach((b) => {
        const on = b.dataset.info === activeInfoTab;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", String(on));
      });
      document.querySelectorAll(".info-pane").forEach((pane) => {
        pane.classList.toggle("active", pane.id === `info-${activeInfoTab}`);
      });
    });
  });

  notebook.addEventListener("input", syncNotebook);
  notebook.addEventListener("scroll", () => {
    const highlight = document.getElementById("notebook-highlight");
    highlight.scrollTop = notebook.scrollTop;
    highlight.scrollLeft = notebook.scrollLeft;
  });

  document.getElementById("detected-keys").addEventListener("click", (e) => {
    const btn = e.target.closest(".key-chip[data-copy]");
    if (!btn) return;
    copyKeyToClipboard(btn.dataset.copy, btn);
  });

  document.getElementById("key-assembly").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-copy-final]");
    if (!btn || btn.disabled) return;
    copyKeyToClipboard(btn.dataset.copyFinal, btn);
    btn.setAttribute("title", t("assemblyCopied"));
  });
}

document.addEventListener("DOMContentLoaded", init);
