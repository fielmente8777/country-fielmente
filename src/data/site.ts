// Contact details and shared content for every country page.
// Contact details, offices and social links mirror fielmente.com's contact.ts.

export const site = {
  brand: "Fielmente",
  rootDomain: process.env.NEXT_PUBLIC_ROOT_DOMAIN || "fielmente.com",
  mainSite: "https://fielmente.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sachin@fielmente.com",
  // One number for calls and WhatsApp (same as fielmente.com's main contact number).
  phone: process.env.NEXT_PUBLIC_PHONE || "+919501868775",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 95018 68775",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "919501868775",
  whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || "+91 95018 68775",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  offices: [
    { label: "India", address: "Suncity Success Tower, Golf Course Ext Rd, Sector 65, Gurugram, Haryana 122005", mapUrl: "https://maps.app.goo.gl/Um5YNZk3ZAwQQ8817" },
    { label: "UAE", address: "SIT Tower, Dubai Silicon Oasis, Dubai, United Arab Emirates", mapUrl: "" },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/company/fielmente/",
    facebook: "https://www.facebook.com/Fielmentemarketing/",
    instagram: "https://www.instagram.com/fielmente_offical/",
    x: "https://x.com/fieladvisors?lang=en",
  },
};

export const countryUrl = (slug: string) => `https://${slug}.${site.rootDomain}/`;
// Links between pages. Set NEXT_PUBLIC_PATH_LINKS=1 on a preview deployment (no subdomains yet) to link to /spain etc.
export const linkTo = (slug: string) => (process.env.NEXT_PUBLIC_PATH_LINKS === "1" ? `/${slug}` : countryUrl(slug));
export const main = (path: string) => `${site.mainSite}${path}`;

export const whatsappLink = (inName: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello, I run a hospitality business ${inName} and would like to know more about Fielmente Hospitality Marketing Agency`,
  )}`;

export const navLinks = [
  { label: "About Us", href: main("/about-fielmente-best-hospitality-marketing-agency/") },
  { label: "Industry We Serve", href: main("/industries-we-serve/") },
  { label: "Our Products", href: main("/products/") },
  { label: "Contact Us", href: "#contact" },
];

export type Service = { title: string; description: string; cta: string; src: string };

// Same nine services, images and wording as the "Our Services" section on fielmente.com.
export const services: Service[] = [
  { title: "Social Media Management", src: "/home/social-media-management.webp", cta: "Get More Bookings", description: "Turn your social presence into a booking engine. We create high-converting content, manage campaigns, and build a brand voice that converts followers into guests." },
  { title: "Local SEO", src: "/home/local-seo.webp", cta: "Boost My Local Visibility", description: "Be the first choice when guests search nearby. We optimize your Google presence and local rankings to drive high-intent traffic and direct inquiries." },
  { title: "Website SEO", src: "/home/website-seo.webp", cta: "Increase Organic Bookings", description: "Rank higher and drive consistent organic bookings. Our SEO strategies ensure your hotel appears where it matters most." },
  { title: "AI Search Optimization", src: "/home/ai-search-optimization.webp", cta: "Optimize for AI Search", description: "Get discovered on ChatGPT, Gemini, and AI-driven platforms. We position your brand for the future of search and travel discovery." },
  { title: "Preopening Marketing", src: "/home/preopening-marketing.webp", cta: "Plan My Hotel Launch", description: "Launch with impact and demand from day one. We create buzz, build positioning, and generate early bookings before your property opens." },
  { title: "OTA Management", src: "/home/ota-management.webp", cta: "Optimize My OTA Listings", description: "Maximize OTA performance while reducing dependency. We optimize listings, pricing, and visibility to drive higher revenue." },
  { title: "Website Development", src: "/home/website-development.webp", cta: "Build My Hotel Website", description: "Build a high-performance website designed for direct bookings. Fast, mobile-first, and tailored for hospitality conversion." },
  { title: "Sales & Marketing Automation", src: "/home/sales-marketing-automation.webp", cta: "Automate My Bookings", description: "Capture, nurture, and convert every lead automatically. We set up systems that turn inquiries into confirmed bookings." },
  { title: "Content Creation", src: "/home/content-creation.webp", cta: "Create High-Converting Content", description: "Create content that sells the experience. From visuals to storytelling, we position your property as a must-visit destination." },
];

// Same figures as the "About company" block on fielmente.com.
export const stats = [
  { number: "120+", label: "Hotels & Resorts Served" },
  { number: "5+ Years", label: "Years of Hospitality Expertise" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "30-40%", label: "Increase in Direct Bookings" },
];

export const partners = [
  { src: "/partners/google-partner.png", alt: "Google Partner" },
  { src: "/partners/meta-business-partner.png", alt: "Meta Business Partner" },
  { src: "/partners/Booking.Com.png", alt: "Booking.com" },
  { src: "/partners/airbnb-logo.png", alt: "Airbnb" },
  { src: "/partners/agoda-logo.png", alt: "Agoda" },
  { src: "/partners/aws.png", alt: "AWS" },
  { src: "/partners/zoho-corporation.png", alt: "Zoho" },
];

// Independent properties only (no hotel-chain marks).
export const clientLogos = [
  "acacia.png", "arkaya.png", "naad-wellness.png", "rudraksh.png", "saraaya.webp", "ALLURE-NAINITAL-LOGO.png",
  "dunagiri-retreat.png", "Red-Rock-villa.jpg", "Riviera.jpg", "Grandview_resort.jpg", "bunker-house.jpg", "chefkenzo.png",
  "STERNWHEELER.webp", "mango-grove.webp", "Hotel-Green-Castle.jpg", "MIRAMAR-logo.jpg", "ZionHotel.png", "colonels-resort.png",
  "corbett-the-grand.png", "wabi-sabi.webp", "eracamp.png",
].map((f) => ({ src: `/clients/${f}`, alt: f.replace(/\.[a-z]+$/, "").replace(/[-_]/g, " ") }));

// International clients to mention by name. Confirm each is happy to be named before go-live.
export const internationalClients = [
  { name: "Hotel & Thalasso Villa Antilla", place: "Basque Country, Spain" },
  { name: "Toast Maker", place: "Sydney, Australia" },
];

export const steps = [
  { title: "Consult", description: "We start with a free audit of your website, search visibility, ads, OTA listings and reviews, and talk you through what we found on a call in your time zone." },
  { title: "Strategise", description: "We design a data-driven marketing plan for your property, built around your guests' source markets, seasons and booking channels." },
  { title: "Execute", description: "We run the campaigns, manage your channels and report every month on bookings, enquiries and spend, so your brand keeps standing out." },
];

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: main("/about-fielmente-best-hospitality-marketing-agency/") },
      { label: "Industries We Serve", href: main("/industries-we-serve/") },
      { label: "Our Products", href: main("/products/") },
      { label: "Services", href: main("/hospitality-marketing-services/") },
      { label: "Blogs", href: main("/blogs/") },
      { label: "Success Stories", href: main("/case-study/") },
      { label: "Our Clients", href: main("/our-clients/") },
      { label: "International Experience", href: main("/international-hospitality-marketing-experience/") },
      { label: "Countries & City Services", href: main("/international-hotel-marketing-agency/locations/") },
    ],
  },
  {
    title: "Top Services",
    links: [
      { label: "Hotel Marketing", href: main("/industries-we-serve/hotel-marketing-agency/") },
      { label: "Hotel Social Media", href: main("/industries-we-serve/hotel-marketing-agency/hotel-social-media/") },
      { label: "Hotel SEO", href: main("/industries-we-serve/hotel-marketing-agency/hotel-seo/") },
      { label: "Hotel Google Ads", href: main("/industries-we-serve/hotel-marketing-agency/hotel-google-ads/") },
      { label: "OTA Management", href: main("/hotel-ota-management/") },
      { label: "Resort Marketing", href: main("/industries-we-serve/resort-marketing-agency/") },
      { label: "Restaurant Marketing", href: main("/industries-we-serve/restaurant-marketing-agency/") },
    ],
  },
];
