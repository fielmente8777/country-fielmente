// One entry per market. Adding a country = adding one object here,
// then adding its subdomain in Vercel (see README).
//
// Local-language fields (hero*, cta, metaTitle, metaDescription) should be
// checked by a native speaker before go-live.

export type FocusPoint = { title: string; body: string };

export type Country = {
  slug: string; // URL path and subdomain: spain -> spain.fielmente.com
  name: string; // English name
  inName: string; // "in Spain", "in the UK"
  lang: string; // hreflang / <html lang>
  ogLocale: string;
  dialCode: string;
  currency: "EUR" | "GBP" | "CHF" | "SEK" | "NOK" | "DKK";
  timeZone: string;
  heroEyebrow: string;
  heroTitle: string;
  heroAccent: string; // part of heroTitle shown in brand orange
  heroTitleEn: string; // English translation shown under the local headline
  cta: string;
  metaTitle: string;
  metaDescription: string;
  intro: string; // English market paragraph
  regions: string[];
  focus: FocusPoint[];
  platforms: string[];
};

const GLOBAL_PLATFORMS = ["Booking.com", "Expedia", "Google Hotel Ads", "Tripadvisor", "Airbnb"];
const DACH_PLATFORMS = [...GLOBAL_PLATFORMS, "HolidayCheck", "trivago"];

export const countries: Country[] = [
  {
    slug: "spain",
    name: "Spain",
    inName: "in Spain",
    lang: "es-ES",
    ogLocale: "es_ES",
    dialCode: "+34",
    currency: "EUR",
    timeZone: "CET",
    heroEyebrow: "Agencia de marketing hotelero",
    heroTitle: "Más reservas directas para tu hotel en España",
    heroAccent: "España",
    heroTitleEn: "More direct bookings for your hotel in Spain",
    cta: "Solicita una consulta gratuita",
    metaTitle: "Agencia de marketing hotelero en España | Fielmente",
    metaDescription:
      "Marketing digital para hoteles, resorts y restaurantes en España: SEO, Google Ads, redes sociales, gestión de OTAs y webs que convierten en reservas directas.",
    intro:
      "Spanish hotels compete for international guests searching in English, German, French and Dutch as well as Spanish. We build multilingual search, ads and social campaigns that bring those guests to your own website instead of an OTA, and help you fill the shoulder months either side of summer.",
    regions: ["Basque Country", "Barcelona", "Madrid", "Costa del Sol", "Balearic Islands", "Canary Islands", "Valencia", "Andalusia"],
    focus: [
      { title: "Reach guests in their own language", body: "Search and ad campaigns run separately for each source market, with landing pages in the language the guest searched in." },
      { title: "Fill the shoulder season", body: "Spring and autumn campaigns built around wellness, food and culture rather than beach weeks." },
      { title: "Win back commission", body: "Google Hotel Ads and brand-search campaigns that capture guests who already know your name before an OTA does." },
    ],
    platforms: GLOBAL_PLATFORMS,
  },
  {
    slug: "germany",
    name: "Germany",
    inName: "in Germany",
    lang: "de-DE",
    ogLocale: "de_DE",
    dialCode: "+49",
    currency: "EUR",
    timeZone: "CET",
    heroEyebrow: "Hotelmarketing-Agentur",
    heroTitle: "Mehr Direktbuchungen für Ihr Hotel in Deutschland",
    heroAccent: "Deutschland",
    heroTitleEn: "More direct bookings for your hotel in Germany",
    cta: "Kostenloses Erstgespräch vereinbaren",
    metaTitle: "Hotelmarketing-Agentur für Deutschland | Fielmente",
    metaDescription:
      "Digitales Marketing für Hotels, Resorts und Restaurants in Deutschland: SEO, Google Ads, Social Media, OTA-Management und Websites, die Direktbuchungen bringen.",
    intro:
      "German travellers research carefully, read reviews closely and expect clear, accurate information. We help hotels and restaurants in Germany rank in German-language search, manage their reputation on review platforms, and run privacy-conscious campaigns that turn that research into direct bookings.",
    regions: ["Bavaria", "Berlin", "Hamburg", "Black Forest", "Baltic Coast", "Rhine Valley", "Saxony", "Lake Constance"],
    focus: [
      { title: "German-first search", body: "Keyword research and content written for how German guests actually search, not translated from English." },
      { title: "Reviews that convert", body: "Structured review responses across Google, HolidayCheck, Tripadvisor and Booking.com." },
      { title: "Consent-aware tracking", body: "Campaign measurement set up with cookie consent in mind, so reporting stays reliable under GDPR." },
    ],
    platforms: DACH_PLATFORMS,
  },
  {
    slug: "italy",
    name: "Italy",
    inName: "in Italy",
    lang: "it-IT",
    ogLocale: "it_IT",
    dialCode: "+39",
    currency: "EUR",
    timeZone: "CET",
    heroEyebrow: "Agenzia di marketing alberghiero",
    heroTitle: "Più prenotazioni dirette per il tuo hotel in Italia",
    heroAccent: "Italia",
    heroTitleEn: "More direct bookings for your hotel in Italy",
    cta: "Richiedi una consulenza gratuita",
    metaTitle: "Agenzia di marketing alberghiero in Italia | Fielmente",
    metaDescription:
      "Marketing digitale per hotel, resort e ristoranti in Italia: SEO, Google Ads, social media, gestione OTA e siti web che generano prenotazioni dirette.",
    intro:
      "From boutique palazzos to agriturismi and lakeside villas, Italian properties sell an experience long-haul guests plan months ahead. We tell that story through websites, content and paid search aimed at the UK, US and European travellers who book Italy early.",
    regions: ["Tuscany", "Amalfi Coast", "Lake Como", "Dolomites", "Puglia", "Sicily", "Rome", "Venice"],
    focus: [
      { title: "Sell the experience", body: "Photography direction and content that show food, landscape and hospitality, not just rooms." },
      { title: "Destination weddings and events", body: "Dedicated landing pages and ad campaigns for weddings, retreats and group bookings." },
      { title: "Book long-haul guests early", body: "Campaigns timed to when UK and US travellers plan Italian trips, months before arrival." },
    ],
    platforms: GLOBAL_PLATFORMS,
  },
  {
    slug: "france",
    name: "France",
    inName: "in France",
    lang: "fr-FR",
    ogLocale: "fr_FR",
    dialCode: "+33",
    currency: "EUR",
    timeZone: "CET",
    heroEyebrow: "Agence de marketing hôtelier",
    heroTitle: "Plus de réservations directes pour votre hôtel en France",
    heroAccent: "France",
    heroTitleEn: "More direct bookings for your hotel in France",
    cta: "Demandez une consultation gratuite",
    metaTitle: "Agence de marketing hôtelier en France | Fielmente",
    metaDescription:
      "Marketing digital pour hôtels, resorts et restaurants en France : SEO, Google Ads, réseaux sociaux, gestion des OTA et sites web qui génèrent des réservations directes.",
    intro:
      "France draws guests for city breaks, vineyards, the coast and the mountains, often all in one trip. We help French hotels, châteaux and restaurants stand out in French and international search, and turn interest from Paris to Provence into bookings on your own site.",
    regions: ["Paris", "Provence", "Côte d'Azur", "French Alps", "Bordeaux", "Normandy", "Loire Valley", "Burgundy"],
    focus: [
      { title: "Bilingual from the start", body: "Websites, ads and social content in French and English, written separately rather than machine-translated." },
      { title: "Two seasons, one plan", body: "Ski and summer campaigns for mountain properties; city and wine-country campaigns for the rest of the year." },
      { title: "Restaurants as destinations", body: "Google Maps, Tripadvisor and reservation-focused campaigns for hotel restaurants and independents." },
    ],
    platforms: GLOBAL_PLATFORMS,
  },
  {
    slug: "sweden",
    name: "Sweden",
    inName: "in Sweden",
    lang: "sv-SE",
    ogLocale: "sv_SE",
    dialCode: "+46",
    currency: "SEK",
    timeZone: "CET",
    heroEyebrow: "Byrå för hotellmarknadsföring",
    heroTitle: "Fler direktbokningar för ditt hotell i Sverige",
    heroAccent: "Sverige",
    heroTitleEn: "More direct bookings for your hotel in Sweden",
    cta: "Boka en kostnadsfri konsultation",
    metaTitle: "Hotellmarknadsföring i Sverige | Fielmente",
    metaDescription:
      "Digital marknadsföring för hotell, resorter och restauranger i Sverige: SEO, Google Ads, sociala medier, OTA-hantering och webbplatser som ger fler direktbokningar.",
    intro:
      "Sweden sells nature, design and two very different seasons: long summer days and northern-lights winters. We help Swedish hotels, lodges and restaurants reach domestic and international guests with content and campaigns built around both.",
    regions: ["Stockholm", "Gothenburg", "Swedish Lapland", "Gotland", "Skåne", "Stockholm Archipelago", "Dalarna", "Åre"],
    focus: [
      { title: "Summer and winter, planned separately", body: "Distinct campaigns for midsummer, archipelago and lake stays, and for snow, ski and aurora trips." },
      { title: "Sustainability told clearly", body: "Content that explains your eco credentials concretely, which many Nordic and German guests look for." },
      { title: "Swedish and English", body: "Search and social in both languages, so you reach domestic guests and international visitors alike." },
    ],
    platforms: GLOBAL_PLATFORMS,
  },
  {
    slug: "greece",
    name: "Greece",
    inName: "in Greece",
    lang: "el-GR",
    ogLocale: "el_GR",
    dialCode: "+30",
    currency: "EUR",
    timeZone: "EET",
    heroEyebrow: "Εταιρεία μάρκετινγκ ξενοδοχείων",
    heroTitle: "Περισσότερες απευθείας κρατήσεις για το ξενοδοχείο σας στην Ελλάδα",
    heroAccent: "Ελλάδα",
    heroTitleEn: "More direct bookings for your hotel in Greece",
    cta: "Ζητήστε δωρεάν συμβουλευτική",
    metaTitle: "Μάρκετινγκ ξενοδοχείων στην Ελλάδα | Fielmente",
    metaDescription:
      "Ψηφιακό μάρκετινγκ για ξενοδοχεία, resorts και εστιατόρια στην Ελλάδα: SEO, Google Ads, social media, διαχείριση OTA και ιστοσελίδες που φέρνουν απευθείας κρατήσεις.",
    intro:
      "Greek island and mainland properties often earn most of their year in a few months. We help hotels, villas and restaurants in Greece lock in early bookings, reduce OTA dependence and stretch the season with campaigns aimed at the travellers most likely to come in spring and autumn.",
    regions: ["Santorini", "Mykonos", "Crete", "Rhodes", "Corfu", "Athens", "Peloponnese", "Halkidiki"],
    focus: [
      { title: "Early-booking campaigns", body: "Winter and spring campaigns that secure direct summer bookings before guests default to an OTA." },
      { title: "Longer season", body: "Shoulder-season offers for walkers, food lovers and couples who prefer quieter islands." },
      { title: "Villa and suite storytelling", body: "Websites and content that sell views, pools and privacy, with booking built in." },
    ],
    platforms: GLOBAL_PLATFORMS,
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    inName: "in Switzerland",
    lang: "de-CH",
    ogLocale: "de_CH",
    dialCode: "+41",
    currency: "CHF",
    timeZone: "CET",
    heroEyebrow: "Hotelmarketing-Agentur",
    heroTitle: "Mehr Direktbuchungen für Ihr Hotel in der Schweiz",
    heroAccent: "Schweiz",
    heroTitleEn: "More direct bookings for your hotel in Switzerland",
    cta: "Kostenloses Erstgespräch vereinbaren",
    metaTitle: "Hotelmarketing-Agentur für die Schweiz | Fielmente",
    metaDescription:
      "Digitales Marketing für Hotels, Resorts und Restaurants in der Schweiz: SEO, Google Ads, Social Media, OTA-Management und Websites für mehr Direktbuchungen.",
    intro:
      "Swiss hotels serve guests who expect precision and pay for quality, and who search in German, French, Italian and English. We build multilingual websites and campaigns for premium mountain, lake and city properties, covering both ski and summer seasons.",
    regions: ["Zermatt", "St. Moritz", "Interlaken", "Lucerne", "Zurich", "Geneva", "Lake Geneva", "Ticino"],
    focus: [
      { title: "Four languages, one brand", body: "Websites and search campaigns structured for German, French, Italian and English speakers." },
      { title: "Premium positioning", body: "Content, photography direction and ad creative that match the price point your guests expect." },
      { title: "Ski and summer", body: "Separate winter and summer campaigns so mountain properties are not empty between seasons." },
    ],
    platforms: DACH_PLATFORMS,
  },
  {
    slug: "portugal",
    name: "Portugal",
    inName: "in Portugal",
    lang: "pt-PT",
    ogLocale: "pt_PT",
    dialCode: "+351",
    currency: "EUR",
    timeZone: "WET",
    heroEyebrow: "Agência de marketing hoteleiro",
    heroTitle: "Mais reservas diretas para o seu hotel em Portugal",
    heroAccent: "Portugal",
    heroTitleEn: "More direct bookings for your hotel in Portugal",
    cta: "Peça uma consultoria gratuita",
    metaTitle: "Agência de marketing hoteleiro em Portugal | Fielmente",
    metaDescription:
      "Marketing digital para hotéis, resorts e restaurantes em Portugal: SEO, Google Ads, redes sociais, gestão de OTAs e websites que geram reservas diretas.",
    intro:
      "Portugal pairs city breaks in Lisbon and Porto with coast, wine country and islands that stay mild much of the year. We help Portuguese hotels, quintas and restaurants reach guests across Europe and North America and keep bookings steady outside peak summer.",
    regions: ["Lisbon", "Porto", "Algarve", "Douro Valley", "Madeira", "Azores", "Comporta", "Alentejo"],
    focus: [
      { title: "Year-round demand", body: "Winter-sun, golf, surf and wine campaigns that keep rooms filled outside July and August." },
      { title: "Quintas and boutique stays", body: "Websites and content that make small, characterful properties easy to find and book." },
      { title: "Direct over OTA", body: "Brand-search and metasearch campaigns that capture guests who already know your property." },
    ],
    platforms: GLOBAL_PLATFORMS,
  },
  {
    slug: "netherlands",
    name: "the Netherlands",
    inName: "in the Netherlands",
    lang: "nl-NL",
    ogLocale: "nl_NL",
    dialCode: "+31",
    currency: "EUR",
    timeZone: "CET",
    heroEyebrow: "Hotelmarketingbureau",
    heroTitle: "Meer directe boekingen voor uw hotel in Nederland",
    heroAccent: "Nederland",
    heroTitleEn: "More direct bookings for your hotel in the Netherlands",
    cta: "Plan een gratis adviesgesprek",
    metaTitle: "Hotelmarketingbureau in Nederland | Fielmente",
    metaDescription:
      "Digitale marketing voor hotels, resorts en restaurants in Nederland: SEO, Google Ads, social media, OTA-beheer en websites die directe boekingen opleveren.",
    intro:
      "Dutch hotels serve short-break, business and event travellers in a market where OTAs are deeply established. We help hotels and restaurants in the Netherlands grow the share of guests who book direct, through search, metasearch and a website that converts.",
    regions: ["Amsterdam", "Rotterdam", "Utrecht", "The Hague", "Wadden Islands", "Zeeland", "Maastricht", "Veluwe"],
    focus: [
      { title: "Short breaks, booked direct", body: "Weekend and city-break campaigns with clear offers that beat the OTA price on your own site." },
      { title: "Business and events", body: "Landing pages and search campaigns for meetings, conferences and group stays." },
      { title: "Dutch and English", body: "Content and ads in both languages for domestic and international guests." },
    ],
    platforms: GLOBAL_PLATFORMS,
  },
  {
    slug: "austria",
    name: "Austria",
    inName: "in Austria",
    lang: "de-AT",
    ogLocale: "de_AT",
    dialCode: "+43",
    currency: "EUR",
    timeZone: "CET",
    heroEyebrow: "Hotelmarketing-Agentur",
    heroTitle: "Mehr Direktbuchungen für Ihr Hotel in Österreich",
    heroAccent: "Österreich",
    heroTitleEn: "More direct bookings for your hotel in Austria",
    cta: "Kostenloses Erstgespräch vereinbaren",
    metaTitle: "Hotelmarketing-Agentur für Österreich | Fielmente",
    metaDescription:
      "Digitales Marketing für Hotels, Resorts und Restaurants in Österreich: SEO, Google Ads, Social Media, OTA-Management und Websites, die Direktbuchungen bringen.",
    intro:
      "Austrian hotels balance ski winters, alpine summers and year-round city and spa demand. We help family-run hotels, chalets and restaurants in Austria reach German-speaking and international guests and turn repeat visitors into direct bookers.",
    regions: ["Vienna", "Salzburg", "Tyrol", "Vorarlberg", "Carinthia", "Styria", "Arlberg", "Zillertal"],
    focus: [
      { title: "Winter and summer seasons", body: "Separate ski, hiking and spa campaigns so the off-season does not undo the peak." },
      { title: "Repeat guests, booked direct", body: "Email and remarketing that bring loyal guests back through your own booking engine." },
      { title: "Reviews in German", body: "Reputation management across HolidayCheck, Google and Booking.com." },
    ],
    platforms: DACH_PLATFORMS,
  },
  {
    slug: "croatia",
    name: "Croatia",
    inName: "in Croatia",
    lang: "hr-HR",
    ogLocale: "hr_HR",
    dialCode: "+385",
    currency: "EUR",
    timeZone: "CET",
    heroEyebrow: "Agencija za hotelski marketing",
    heroTitle: "Više izravnih rezervacija za vaš hotel u Hrvatskoj",
    heroAccent: "Hrvatskoj",
    heroTitleEn: "More direct bookings for your hotel in Croatia",
    cta: "Zatražite besplatne konzultacije",
    metaTitle: "Agencija za hotelski marketing u Hrvatskoj | Fielmente",
    metaDescription:
      "Digitalni marketing za hotele, resorte i restorane u Hrvatskoj: SEO, Google Ads, društvene mreže, upravljanje OTA kanalima i web stranice koje donose izravne rezervacije.",
    intro:
      "Croatia's coast and islands are booked heavily through OTAs during a concentrated summer. We help hotels, villas and restaurants in Croatia build direct demand early, reach guests from across Europe, and extend the season into spring and autumn.",
    regions: ["Dubrovnik", "Split", "Hvar", "Istria", "Zadar", "Kvarner", "Plitvice Lakes", "Zagreb"],
    focus: [
      { title: "Book summer early", body: "Winter and spring campaigns that convert planning-stage guests before they reach an OTA." },
      { title: "Villas and apartments", body: "Websites and listings that make smaller properties look and book like boutique hotels." },
      { title: "Multilingual reach", body: "Campaigns for German, Austrian, UK and Central European guests in their own language." },
    ],
    platforms: GLOBAL_PLATFORMS,
  },
  {
    slug: "uk",
    name: "the United Kingdom",
    inName: "in the UK",
    lang: "en-GB",
    ogLocale: "en_GB",
    dialCode: "+44",
    currency: "GBP",
    timeZone: "GMT",
    heroEyebrow: "Hotel marketing agency",
    heroTitle: "More direct bookings for your hotel in the UK",
    heroAccent: "the UK",
    heroTitleEn: "Marketing for hotels, B&Bs and restaurants across England, Scotland, Wales and Northern Ireland",
    cta: "Book a free consultation",
    metaTitle: "Hotel & Restaurant Marketing Agency for the UK | Fielmente",
    metaDescription:
      "Digital marketing for UK hotels, B&Bs, pubs with rooms and restaurants: SEO, Google Ads, social media, OTA management and websites that win direct bookings.",
    intro:
      "From London boutiques to country-house hotels, B&Bs and pubs with rooms, UK hospitality runs on short breaks, weddings and repeat guests. We help independent properties compete with chains in search and win bookings without paying OTA commission on every stay.",
    regions: ["London", "Cotswolds", "Lake District", "Cornwall", "Edinburgh", "Scottish Highlands", "Yorkshire", "Wales"],
    focus: [
      { title: "Independents vs chains", body: "Local SEO and Google Business Profile work so independent hotels show up for nearby searches." },
      { title: "Weddings and private events", body: "Dedicated pages and campaigns for weddings, celebrations and corporate events." },
      { title: "Restaurants and pubs", body: "Table-booking and Google Maps campaigns for food-led hospitality." },
    ],
    platforms: GLOBAL_PLATFORMS,
  },
  {
    slug: "ireland",
    name: "Ireland",
    inName: "in Ireland",
    lang: "en-IE",
    ogLocale: "en_IE",
    dialCode: "+353",
    currency: "EUR",
    timeZone: "GMT",
    heroEyebrow: "Hotel marketing agency",
    heroTitle: "More direct bookings for your hotel in Ireland",
    heroAccent: "Ireland",
    heroTitleEn: "Marketing for hotels, guesthouses and restaurants across Ireland",
    cta: "Book a free consultation",
    metaTitle: "Hotel & Restaurant Marketing Agency for Ireland | Fielmente",
    metaDescription:
      "Digital marketing for hotels, guesthouses and restaurants in Ireland: SEO, Google Ads, social media, OTA management and websites that win direct bookings.",
    intro:
      "Irish hotels welcome domestic weekenders, UK visitors and North Americans touring the Wild Atlantic Way. We help hotels, castles, guesthouses and restaurants in Ireland reach each of those audiences and convert them on their own website.",
    regions: ["Dublin", "Galway", "Kerry", "Cork", "Wild Atlantic Way", "Kilkenny", "Donegal", "Clare"],
    focus: [
      { title: "North American visitors", body: "Search and social campaigns timed to when US and Canadian travellers plan their Ireland trips." },
      { title: "Weddings and celebrations", body: "Venue pages and campaigns for castle, country-house and hotel weddings." },
      { title: "Touring routes", body: "Content that puts your property on the itineraries guests are building." },
    ],
    platforms: GLOBAL_PLATFORMS,
  },
  {
    slug: "belgium",
    name: "Belgium",
    inName: "in Belgium",
    lang: "nl-BE",
    ogLocale: "nl_BE",
    dialCode: "+32",
    currency: "EUR",
    timeZone: "CET",
    heroEyebrow: "Hotelmarketingbureau",
    heroTitle: "Meer directe boekingen voor uw hotel in België",
    heroAccent: "België",
    heroTitleEn: "More direct bookings for your hotel in Belgium",
    cta: "Plan een gratis adviesgesprek",
    metaTitle: "Hotelmarketingbureau in België | Fielmente",
    metaDescription:
      "Digitale marketing voor hotels, resorts en restaurants in België: SEO, Google Ads, social media, OTA-beheer en websites die directe boekingen opleveren.",
    intro:
      "Belgian hotels serve city-break, business and Ardennes weekend guests across Dutch, French and English. We help hotels and restaurants in Belgium reach each language community and grow direct bookings from all three.",
    regions: ["Brussels", "Bruges", "Ghent", "Antwerp", "Ardennes", "Belgian Coast", "Leuven", "Liège"],
    focus: [
      { title: "Dutch, French and English", body: "Separate campaigns and pages for Flemish, Francophone and international guests." },
      { title: "Business and EU travel", body: "Search campaigns for meetings, conferences and midweek corporate stays." },
      { title: "Weekend getaways", body: "Ardennes, coast and city-break offers aimed at guests from Belgium and neighbouring countries." },
    ],
    platforms: GLOBAL_PLATFORMS,
  },
  {
    slug: "norway",
    name: "Norway",
    inName: "in Norway",
    lang: "nb-NO",
    ogLocale: "nb_NO",
    dialCode: "+47",
    currency: "NOK",
    timeZone: "CET",
    heroEyebrow: "Byrå for hotellmarkedsføring",
    heroTitle: "Flere direktebookinger for hotellet ditt i Norge",
    heroAccent: "Norge",
    heroTitleEn: "More direct bookings for your hotel in Norway",
    cta: "Bestill en gratis konsultasjon",
    metaTitle: "Hotellmarkedsføring i Norge | Fielmente",
    metaDescription:
      "Digital markedsføring for hoteller, resorter og restauranter i Norge: SEO, Google Ads, sosiale medier, OTA-håndtering og nettsider som gir flere direktebookinger.",
    intro:
      "Norway's fjords, mountains and Arctic north draw guests for summer road trips and winter northern-lights stays. We help Norwegian hotels, lodges and restaurants reach international travellers and convert them directly rather than through an OTA.",
    regions: ["Oslo", "Bergen", "Tromsø", "Lofoten", "Geirangerfjord", "Stavanger", "Trondheim", "Svalbard"],
    focus: [
      { title: "Northern lights and midnight sun", body: "Winter and summer campaigns built around the experiences guests travel for." },
      { title: "Road-trip itineraries", body: "Content that places your property on the fjord and coastal routes guests are planning." },
      { title: "Norwegian and English", body: "Search and social in both languages for domestic and international guests." },
    ],
    platforms: GLOBAL_PLATFORMS,
  },
  {
    slug: "denmark",
    name: "Denmark",
    inName: "in Denmark",
    lang: "da-DK",
    ogLocale: "da_DK",
    dialCode: "+45",
    currency: "DKK",
    timeZone: "CET",
    heroEyebrow: "Bureau for hotelmarkedsføring",
    heroTitle: "Flere direkte bookinger til dit hotel i Danmark",
    heroAccent: "Danmark",
    heroTitleEn: "More direct bookings for your hotel in Denmark",
    cta: "Book en gratis konsultation",
    metaTitle: "Hotelmarkedsføring i Danmark | Fielmente",
    metaDescription:
      "Digital markedsføring for hoteller, resorts og restauranter i Danmark: SEO, Google Ads, sociale medier, OTA-styring og hjemmesider, der giver flere direkte bookinger.",
    intro:
      "Danish hospitality is known for design, food and coastal summers. We help hotels, inns and restaurants in Denmark reach guests from Germany, Sweden, Norway and beyond, and turn interest in Copenhagen and the coast into direct bookings.",
    regions: ["Copenhagen", "Aarhus", "Skagen", "Bornholm", "Funen", "West Coast", "Odense", "Aalborg"],
    focus: [
      { title: "Food and design stories", body: "Content and photography direction that put your restaurant and interiors front and centre." },
      { title: "Neighbouring markets", body: "Campaigns for German, Swedish and Norwegian guests in their own language." },
      { title: "Coastal summers", body: "Early-booking campaigns for summer-house, inn and seaside hotel stays." },
    ],
    platforms: GLOBAL_PLATFORMS,
  },
];

export const countryBySlug = (slug: string) => countries.find((c) => c.slug === slug);