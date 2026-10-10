// ═══════════════════════════════════════════════════════════════
// CONTENT DATA — Edit all textual content, brands, services here
// ═══════════════════════════════════════════════════════════════

export const BUSINESS = {
  divisionName: 'Nippon & Americana Auto',
  parentCompany: 'Euro Experts Auto Services LLC',
  tagline: 'A division of Euro Experts Auto Services LLC',
  phone1: '+971 50 108 9922',
  phone2: '+971 54 289 6979',
  phone1Tel: '+971501089922',
  phone2Tel: '+971542896979',
  whatsapp: '971501089922',
  whatsappSecondary: '971542896979',
  whatsappLink: 'https://wa.me/971501089922',
  whatsappSecondaryLink: 'https://wa.me/971542896979',
  email: 'info@euroexpert.ae',
  address: '29 4 St – Al Qouz Ind.fourth – Al Quoz – Dubai, UAE',
  addressShort: '29 4 St, Al Quoz Ind. 4, Dubai',
  hoursWeek: 'Monday – Sunday: 8:00 AM – 6:00 PM',
  hoursSun: 'Open 7 Days a Week',
  mapsQuery: 'Euro Experts Auto Services, 29 4 St, Al Quoz Industrial Area 4, Dubai',
  mapsLink: 'https://maps.google.com/maps?q=euro+expert+dubai',
  mapsEmbed: 'https://maps.google.com/maps?q=euro%20expert%20dubai&t=m&z=19&output=embed&iwloc=near',
};

export const NAV_LINKS = [
  { label: 'Brands', href: '#brands' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const TRUST_ITEMS = [
  { icon: 'BadgeCheck', label: 'Certified Technicians', value: 15, suffix: '+' },
  { icon: 'PackageCheck', label: 'Genuine & OEM Parts', value: 100, suffix: '%' },
  { icon: 'ScanLine', label: 'Advanced Diagnostics', value: 50, suffix: '+' },
  { icon: 'ReceiptText', label: 'Transparent Pricing', value: 0, suffix: '', isStatic: true, staticText: 'Always' },
];

export const STATS = [
  { label: 'Years of Experience', value: 15, suffix: '+' },
  { label: 'Vehicles Serviced', value: 8000, suffix: '+' },
  { label: 'Google Rating', value: 4.9, suffix: '★', decimals: 1 },
  { label: 'Certified Technicians', value: 12, suffix: '' },
];

// ── Brand Switcher Data ──────────────────────────────────────────
export interface Brand {
  name: string;
  models: string[];
  note?: string;
}

export const JAPANESE_BRANDS: Brand[] = [
  {
    name: 'Lexus',
    models: ['LX 600', 'LX 570', 'GX 460', 'GX 550', 'RX 350', 'RX 500h', 'NX', 'ES 350', 'LS 500', 'IS 350', 'LC 500'],
  },
  {
    name: 'Toyota',
    models: ['Land Cruiser 300', 'Land Cruiser 200', 'Land Cruiser Prado', 'Sequoia', 'Tundra', 'Crown', 'GR Supra', 'GR Yaris'],
  },
  {
    name: 'Infiniti',
    models: ['QX80', 'QX60', 'QX50', 'Q50', 'Q60'],
  },
  {
    name: 'Nissan',
    models: ['Patrol', 'Patrol NISMO', 'Z', 'GT-R'],
  },
  {
    name: 'Acura',
    models: ['MDX', 'RDX', 'TLX'],
  },
  {
    name: 'Honda',
    models: ['Pilot', 'Civic Type R', 'NSX'],
  },
];

export const AMERICAN_BRANDS: Brand[] = [
  {
    name: 'Cadillac',
    models: ['Escalade', 'Escalade-V', 'Escalade IQ', 'CT5', 'CT5-V Blackwing', 'XT6', 'XT5'],
  },
  {
    name: 'Lincoln',
    models: ['Navigator', 'Aviator', 'Nautilus', 'Corsair'],
  },
  {
    name: 'GMC',
    models: ['Yukon', 'Yukon Denali', 'Yukon XL', 'Sierra', 'Sierra Denali', 'Hummer EV'],
  },
  {
    name: 'Ford',
    models: ['Mustang GT', 'Mustang Dark Horse', 'F-150 Raptor', 'F-150 Platinum', 'Expedition', 'Explorer ST', 'Bronco', 'Bronco Raptor'],
  },
  {
    name: 'Chevrolet',
    models: ['Tahoe', 'Suburban', 'Corvette', 'Corvette Z06', 'Silverado', 'Camaro', 'Blazer'],
  },
  {
    name: 'Jeep',
    models: ['Grand Wagoneer', 'Wagoneer', 'Grand Cherokee', 'Wrangler Rubicon'],
  },
  {
    name: 'Dodge',
    models: ['Challenger', 'Charger', 'Durango', 'Durango SRT', 'Durango Hellcat'],
  },
];

export const BRAND_NOTE = 'Lexus, Infiniti and Acura — the luxury divisions of Toyota, Nissan and Honda.';

// ── Featured Vehicles ────────────────────────────────────────────
export interface FeaturedVehicle {
  name: string;
  brand: string;
  region: 'Japan' | 'America';
  image: string;
  note: string;
  imageComment: string;
}

export const FEATURED_VEHICLES: FeaturedVehicle[] = [
  {
    name: 'Cadillac Escalade-V',
    brand: 'Cadillac',
    region: 'America',
    image: '/american-cadillac-escalade-v.jpg',
    note: 'Supercharged 6.2L V8 Escalade specialist — Magnetic Ride Control, electronic LSD & dealer telemetry.',
    imageComment: 'Cadillac Escalade-V & CT5-V Blackwing atelier bay',
  },
  {
    name: 'GMC Yukon Denali',
    brand: 'GMC',
    region: 'America',
    image: '/american-gmc-yukon-denali.jpg',
    note: 'Denali-grade maintenance — 10-speed transmission, air ride suspension, and precision diagnostics.',
    imageComment: 'GMC Yukon Denali & Sierra Denali atelier',
  },
  {
    name: 'Lincoln Navigator',
    brand: 'Lincoln',
    region: 'America',
    image: '/american-lincoln-navigator.jpg',
    note: 'Presidential-grade luxury SUV care — adaptive suspension, 3.5L Twin-Turbo EcoBoost & bespoke electronics.',
    imageComment: 'Lincoln Navigator Presidential atelier bay',
  },
  {
    name: 'Chevrolet Corvette Z06',
    brand: 'Chevrolet',
    region: 'America',
    image: '/american-chevrolet-corvette-z06.jpg',
    note: 'American flat-plane crank supercar specialist — LT6 V8 telemetry, carbon ceramic brakes & dual-clutch transmission.',
    imageComment: 'Chevrolet Corvette Z06 mid-engine performance atelier',
  },
  {
    name: 'Ford F-150 Raptor R',
    brand: 'Ford',
    region: 'America',
    image: '/american-ford-raptor-mustang.jpg',
    note: 'High-performance truck servicing — FOX Live Valve dampers, supercharged V8 and heavy-duty drivetrain.',
    imageComment: 'Ford F-150 Raptor R & Mustang Dark Horse atelier',
  },
  {
    name: 'Jeep Grand Wagoneer',
    brand: 'Jeep',
    region: 'America',
    image: '/american-jeep-grand-wagoneer.jpg',
    note: 'Flagship Wagoneer care — Hurricane Twin-Turbo 510, Quadra-Lift air suspension and luxury electronics.',
    imageComment: 'Jeep Grand Wagoneer Series III & Wrangler Rubicon 392',
  },
  {
    name: 'Dodge Challenger SRT Hellcat',
    brand: 'Dodge',
    region: 'America',
    image: '/american-dodge-challenger-hellcat.jpg',
    note: 'HEMI supercharged V8 specialist — 2.7L IHI supercharger maintenance, Mopar cooling and Brembo brake service.',
    imageComment: 'Dodge Challenger SRT Hellcat & Durango SRT dyno bay',
  },
  {
    name: 'Chevrolet Tahoe RST',
    brand: 'Chevrolet',
    region: 'America',
    image: '/vehicles/Chevrolet/Tahoe.jpg',
    note: 'Full-size SUV expertise — engine, transmission, suspension and high-performance brake systems.',
    imageComment: 'Chevrolet Tahoe Premier RST',
  },
  {
    name: 'Lexus LX 600',
    brand: 'Lexus',
    region: 'Japan',
    image: '/vehicles/lexus-lx600.jpg',
    note: 'Full-service luxury SUV maintenance with dealer-level diagnostic precision.',
    imageComment: 'Lexus LX 600 studio photography',
  },
  {
    name: 'Toyota Land Cruiser 300',
    brand: 'Toyota',
    region: 'Japan',
    image: '/vehicles/toyota-lc300.jpg',
    note: 'Desert-proven servicing for the icon — engine, suspension and full diagnostics.',
    imageComment: 'Toyota Land Cruiser 300',
  },
  {
    name: 'Nissan Patrol NISMO',
    brand: 'Nissan',
    region: 'Japan',
    image: '/vehicles/Nissan/nismo.jpg',
    note: 'Comprehensive Patrol servicing — from V8 engine work to full inspection.',
    imageComment: 'Nissan Patrol NISMO',
  },
  {
    name: 'Infiniti QX80',
    brand: 'Infiniti',
    region: 'Japan',
    image: '/vehicles/infiniti-qx80.jpg',
    note: 'Luxury SUV care — engine, AC, electronics and interior attention.',
    imageComment: 'Infiniti QX80',
  },
  {
    name: 'Acura MDX Type S',
    brand: 'Acura',
    region: 'Japan',
    image: '/vehicles/Acura/acuramdx.jpg',
    note: 'Precision crafted performance — SH-AWD calibration, turbo diagnostics.',
    imageComment: 'Acura MDX Type S',
  },
  {
    name: 'Honda Civic Type R',
    brand: 'Honda',
    region: 'Japan',
    image: '/vehicles/Honda/hondacivictype-r.jpg',
    note: 'Track-proven Japanese performance — Brembo brakes, VTEC turbo maintenance.',
    imageComment: 'Honda Civic Type R',
  },
];

// ── Services ─────────────────────────────────────────────────────
export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: 'Cog',
    title: 'Engine Repair & Diagnostics',
    description: 'Precision diagnostics and mechanical overhaul for American V8, EcoBoost, HEMI, Supercharged LT4/LT6 and Japanese V6 twin-turbo engines using factory OEM diagnostic scan tools.',
  },
  {
    icon: 'Settings2',
    title: 'Transmission Repair',
    description: 'Specialist service and rebuilds for GM/Ford 10-speed, Chrysler 8-speed Torqueflite, Allison transmissions, dual-clutch supercars, and Japanese Lexus/Toyota multi-stage units.',
  },
  {
    icon: 'Gauge',
    title: 'Suspension & Steering',
    description: 'Advanced calibration for GM Magnetic Ride Control, Lincoln adaptive air suspension, Ford FOX Live Valve, Jeep Quadra-Lift, and Lexus AVS electronic damping.',
  },
  {
    icon: 'Disc',
    title: 'Brake Repair & Upgrades',
    description: 'High-performance brake servicing — Brembo, SRT, and OEM calipers, cross-drilled rotors, electronic park brake calibration, and factory brake fluid flush.',
  },
  {
    icon: 'Snowflake',
    title: 'AC & Climate Control',
    description: 'Gulf-spec dual and tri-zone climate control repair, high-capacity R134a/R1234yf refrigerant servicing, compressor overhauls, and rear evaporator diagnostics.',
  },
  {
    icon: 'Paintbrush',
    title: 'Paint & Body Work',
    description: 'Premium factory paint matching, aluminium panel restoration, and scratch repair with computerised spectrophotometer color-matching in a sterile spray booth.',
  },
  {
    icon: 'Droplets',
    title: 'Scheduled Oil & Filter Service',
    description: 'Strict factory-interval servicing using Dexos-approved, Motorcraft, and OEM full-synthetic fluids and genuine filters to preserve manufacturer warranties.',
  },
  {
    icon: 'ClipboardCheck',
    title: 'Pre-Purchase Inspection',
    description: 'Comprehensive 200-point inspection covering drivetrain, chassis, ECU scan history, and paint depth analysis before buying any American or Japanese vehicle.',
  },
];

// ── Why Choose Us ────────────────────────────────────────────────
export const WHY_CHOOSE_US = [
  {
    icon: 'BadgeCheck',
    title: 'Certified Master Technicians',
    text: 'Our technicians are factory-certified American and Japanese automotive specialists equipped with OEM GM, Ford, Chrysler, and Lexus scan tools — not general mechanics.',
  },
  {
    icon: 'PackageCheck',
    title: 'Genuine & OEM Parts',
    text: 'We fit 100% genuine AC Delco, Motorcraft, Mopar, and Japanese OEM parts, guaranteeing uncompromising reliability, warranty compliance, and optimal performance.',
  },
  {
    icon: 'ScanLine',
    title: 'Dealer-Level Diagnostics',
    text: 'Equipped with dealership-grade diagnostic consoles and live telemetry scanners to detect electronic, powertrain, and chassis faults with pinpoint precision.',
  },
  {
    icon: 'ReceiptText',
    title: 'Transparent Itemised Quotes',
    text: 'Receive a clear, transparent digital quote prior to commencing work. No hidden costs, no unnecessary upsells — complete honesty at every stage.',
  },
  {
    icon: 'MapPin',
    title: 'Dubai Atelier Facility',
    text: 'Located in Al Quoz Industrial Area 4 with state-of-the-art hydraulic lifts, clean room engine bays, and climate-controlled client lounge.',
  },
];

// ── Process ──────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  { num: '01', title: 'Book', text: 'Reach out via WhatsApp or phone. Tell us your vehicle and concern.' },
  { num: '02', title: 'Inspect & Diagnose', text: 'We perform a thorough inspection with dealer-level diagnostic tools.' },
  { num: '03', title: 'Transparent Quote', text: 'You receive an itemised quote. Nothing proceeds without your approval.' },
  { num: '04', title: 'Expert Repair', text: 'Certified technicians carry out the work using genuine parts.' },
  { num: '05', title: 'Quality Check & Handover', text: 'Final inspection, road test and a clean vehicle returned to you.' },
];

// ── Gallery ──────────────────────────────────────────────────────
export interface GalleryImage {
  image: string;
  alt: string;
  comment: string;
  span?: 'tall' | 'wide' | 'normal';
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    image: '/hero-american-cadillac-flagship.jpg',
    alt: 'Cadillac Escalade-V & GMC Yukon Denali in Euro Experts flagship Dubai workshop atelier',
    comment: 'Flagship American Luxury Atelier Bay with digital telemetry console',
    span: 'wide',
  },
  {
    image: '/gallery-ford-lincoln-service.jpg',
    alt: 'Lincoln Navigator on hydraulic lift and Ford Raptor in laser alignment bay',
    comment: 'Lincoln & Ford specialist suspension calibration atelier bay',
    span: 'tall',
  },
  {
    image: '/gallery-corvette-service.jpg',
    alt: 'Chevrolet Corvette C8 diagnostic telemetry scan in Euro Experts Dubai workshop atelier',
    comment: 'Corvette C8 supercar telemetry & Euro Experts diagnostic atelier',
    span: 'normal',
  },
  {
    image: '/american-jeep-grand-wagoneer.jpg',
    alt: 'Jeep Grand Wagoneer Series III & Wrangler Rubicon 392 computerized diagnostic bay',
    comment: 'Jeep Grand Wagoneer factory OBD diagnostic telemetry',
    span: 'normal',
  },
  {
    image: '/gallery-lexus-lx600.jpg',
    alt: 'Lexus LX 600 undergoing multi-point service and diagnostics in Euro Experts atelier',
    comment: 'Lexus LX 600 in dedicated luxury service bay with certified technician',
    span: 'tall',
  },
  {
    image: '/american-dodge-challenger-hellcat.jpg',
    alt: 'Dodge Challenger SRT Hellcat supercharged HEMI maintenance & Durango SRT tuning',
    comment: 'Mopar SRT performance supercharger & powertrain bay',
    span: 'normal',
  },
  {
    image: '/gallery-toyota-lc300.jpg',
    alt: 'Toyota Land Cruiser 300 chassis and suspension inspection on 2-post lift',
    comment: 'Toyota Land Cruiser 300 elevated on 2-post lift with master technician',
    span: 'normal',
  },
  {
    image: '/american-gmc-yukon-denali.jpg',
    alt: 'GMC Yukon Denali & Sierra Denali powertrain inspection and scheduled maintenance',
    comment: 'GMC Denali luxury SUV and pickup service bay',
    span: 'wide',
  },
];

// ── Reviews ──────────────────────────────────────────────────────
export interface Review {
  name: string;
  vehicle: string;
  rating: number;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: 'James Carter',
    vehicle: 'Cadillac Escalade-V',
    rating: 5,
    text: 'Finally a workshop in Dubai that genuinely understands American luxury vehicles. They sorted my Escalade-V\'s Magnetic Ride suspension and supercharger cooling perfectly. Dealer-level precision without the exorbitant agency markup.',
  },
  {
    name: 'Fahad Al Qasimi',
    vehicle: 'GMC Yukon Denali',
    rating: 5,
    text: 'The best workshop in Al Quoz for GMC Yukon and Sierra. Diagnostic scan was fast, quote was transparent, and the 10-speed gearbox shifting is now butter-smooth. True master craftsmen.',
  },
  {
    name: 'Sarah Williams',
    vehicle: 'Ford F-150 Raptor',
    rating: 5,
    text: 'The Raptor\'s FOX Live Valve suspension was properly diagnosed and calibrated — not just a quick patch. These technicians have genuine passion and knowledge for American trucks.',
  },
  {
    name: 'Michael Torres',
    vehicle: 'Jeep Grand Wagoneer',
    rating: 5,
    text: 'They handled the Hurricane twin-turbo engine inspection and air suspension on my Grand Wagoneer with outstanding expertise. Hard to find this level of American car expertise in Dubai.',
  },
  {
    name: 'Ahmed Al Mansoori',
    vehicle: 'Lexus LX 600',
    rating: 5,
    text: 'Outstanding service for my LX 600. The team diagnosed an electrical sensor issue three other garages missed. Genuinely dealer-level care without the dealership wait.',
  },
  {
    name: 'Khalid Al Rashid',
    vehicle: 'Toyota Land Cruiser 300',
    rating: 5,
    text: 'My Land Cruiser gets the attention it deserves here. Genuine OEM parts, meticulous cleanliness, and the team knows the LC300 platform inside out.',
  },
];

export const GOOGLE_RATING = '4.9';
export const GOOGLE_REVIEW_COUNT = '320+';

// ── FAQ ──────────────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Do you specialise in American luxury brands like Cadillac, GMC, Lincoln, Ford, Chevrolet, Jeep and Dodge?',
    answer: 'Yes. We are Dubai\'s premier specialist atelier for American automotive marques. From Cadillac Escalade and CT5-V, GMC Yukon Denali, Lincoln Navigator, Ford Raptor and Mustang, Chevrolet Corvette and Tahoe, to Jeep Grand Wagoneer and Dodge Hellcat, our master technicians use factory-level diagnostic systems (GM Techline, Ford IDS/FDRS, WiTech) and genuine OEM parts.',
  },
  {
    question: 'Do you also service Japanese luxury vehicles like Lexus and Land Cruiser?',
    answer: 'Absolutely. Alongside our American vehicle expertise, we provide full dealership-level maintenance for Lexus LX 600, Toyota Land Cruiser 300, Nissan Patrol NISMO, Infiniti, and Acura with certified Japanese platform technicians.',
  },
  {
    question: 'Do you use genuine and OEM parts?',
    answer: 'Exclusively. We install only genuine OEM-grade parts (ACDelco, Motorcraft, Mopar, and genuine Japanese parts). This guarantees optimal performance, factory warranty protection, and preserves the resale value of your vehicle.',
  },
  {
    question: 'Do I get a transparent quote before work begins?',
    answer: 'Always. You receive a clear, comprehensive digital itemised estimate detailing parts, labour, and diagnostics before any work begins. Nothing proceeds without your explicit approval. No surprises, no hidden fees.',
  },
  {
    question: 'Do you offer comprehensive Pre-Purchase Inspections (PPI)?',
    answer: 'Yes. We provide a meticulous 200-point Pre-Purchase Inspection with digital paint depth measurement, full ECU computer scans, suspension and chassis inspection, and road testing with an exhaustive written report before you buy a pre-owned luxury vehicle in the UAE.',
  },
  {
    question: 'Where is your workshop located and what are your operating hours?',
    answer: 'We are conveniently located at 29 4 St, Al Quoz Industrial Area 4, Dubai, UAE with swift access from Sheikh Zayed Road and Al Khail Road. We are open Monday to Sunday, 8:00 AM to 6:00 PM, 7 days a week.',
  },
];

// ── Booking form options ─────────────────────────────────────────
export const ALL_BRAND_NAMES = [
  ...JAPANESE_BRANDS.map((b) => b.name),
  ...AMERICAN_BRANDS.map((b) => b.name),
].sort();

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);
