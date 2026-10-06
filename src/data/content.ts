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
    name: 'Lexus LX 600',
    brand: 'Lexus',
    region: 'Japan',
    image: '/vehicles/lexus-lx600.jpg',
    note: 'Full-service luxury SUV maintenance with dealer-level diagnostic precision.',
    imageComment: 'Lexus LX 600 studio photography',
  },
  {
    name: 'Lexus GX 550',
    brand: 'Lexus',
    region: 'Japan',
    image: 'https://images.pexels.com/photos/10697775/pexels-photo-10697775.jpeg?auto=compress&cs=tinysrgb&w=1200',
    note: 'Suspension, transmission and off-road readiness for the all-new GX.',
    imageComment: 'Lexus GX 550',
  },
  {
    name: 'Lexus RX 500h',
    brand: 'Lexus',
    region: 'Japan',
    image: 'https://images.pexels.com/photos/1005632/pexels-photo-1005632.jpeg?auto=compress&cs=tinysrgb&w=1200',
    note: 'Hybrid system diagnostics and performance hybrid servicing.',
    imageComment: 'Lexus RX 500h',
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
    name: 'Nissan Patrol',
    brand: 'Nissan',
    region: 'Japan',
    image: '/vehicles/nissan-patrol.jpg',
    note: 'Comprehensive Patrol servicing — from V8 engine work to full inspection.',
    imageComment: 'Nissan Patrol',
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
    name: 'Cadillac Escalade',
    brand: 'Cadillac',
    region: 'America',
    image: '/vehicles/cadillac-escalade.jpg',
    note: 'Escalade specialist servicing — magnetic ride, infotainment and powertrain.',
    imageComment: 'Cadillac Escalade',
  },
  {
    name: 'GMC Yukon Denali',
    brand: 'GMC',
    region: 'America',
    image: '/vehicles/gmc-yukon.jpg',
    note: 'Denali-grade maintenance — suspension, diagnostics and premium detailing.',
    imageComment: 'GMC Yukon Denali',
  },
  {
    name: 'Ford F-150 Raptor',
    brand: 'Ford',
    region: 'America',
    image: '/vehicles/ford-f150-raptor.jpg',
    note: 'Off-road performance servicing — FOX suspension, EcoBoost engine and drivetrain.',
    imageComment: 'Ford F-150 Raptor',
  },
  {
    name: 'Lincoln Navigator',
    brand: 'Lincoln',
    region: 'America',
    image: '/vehicles/lincoln-navigator.jpg',
    note: 'Navigator specialist — air suspension, electronics and comfort systems.',
    imageComment: 'Lincoln Navigator',
  },
  {
    name: 'Chevrolet Tahoe',
    brand: 'Chevrolet',
    region: 'America',
    image: '/vehicles/chevrolet-corvette.jpg',
    note: 'Full-size SUV expertise — engine, transmission and brake systems.',
    imageComment: 'Chevrolet Performance & Tahoe',
  },
  {
    name: 'Jeep Grand Wagoneer',
    brand: 'Jeep',
    region: 'America',
    image: '/vehicles/jeep-grand-wagoneer.jpg',
    note: 'Premium Wagoneer care — air suspension, PHEV system and luxury interior.',
    imageComment: 'Jeep Grand Wagoneer',
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
    description: 'Precision engine diagnostics, overhaul, and mechanical repair using advanced factory-grade diagnostic tools and OEM equipment.',
  },
  {
    icon: 'Settings2',
    title: 'Transmission Repair',
    description: 'Automatic and manual transmission service, repair and rebuild — including CVT and 10-speed units.',
  },
  {
    icon: 'Gauge',
    title: 'Suspension & Steering',
    description: 'Air suspension, magnetic ride, alignment and steering system expertise for luxury SUVs and performance cars.',
  },
  {
    icon: 'Disc',
    title: 'Brake Repair',
    description: 'High-performance brake servicing — pads, rotors, calipers and ABS diagnostics with genuine parts.',
  },
  {
    icon: 'Snowflake',
    title: 'AC Repair',
    description: 'Full climate control servicing, refrigerant recharge and electronic AC system diagnostics.',
  },
  {
    icon: 'Paintbrush',
    title: 'Paint & Body Work',
    description: 'Premium paint matching, panel work and dent repair with a colour-matched, factory-grade finish.',
  },
  {
    icon: 'Droplets',
    title: 'Oil Change & Periodic Service',
    description: 'Scheduled maintenance with genuine oils and filters — keep your warranty and performance intact.',
  },
  {
    icon: 'ClipboardCheck',
    title: 'Pre-Purchase Inspection',
    description: 'Comprehensive 200-point inspection before you buy — full report on condition, value and potential issues.',
  },
];

// ── Why Choose Us ────────────────────────────────────────────────
export const WHY_CHOOSE_US = [
  {
    icon: 'BadgeCheck',
    title: 'Certified Technicians',
    text: 'Our master technicians are brand-certified specialists equipped with advanced factory diagnostic systems — not generalists.',
  },
  {
    icon: 'PackageCheck',
    title: 'Genuine & OEM Parts',
    text: 'We fit only genuine and OEM-grade parts, preserving performance, warranty and resale value.',
  },
  {
    icon: 'ScanLine',
    title: 'Dealer-Level Diagnostics',
    text: 'Advanced diagnostic equipment matched to dealership standards — we find the real problem, fast.',
  },
  {
    icon: 'ReceiptText',
    title: 'Transparent Quotes',
    text: 'You receive a clear, itemised quote before any work begins. No surprises, no hidden charges.',
  },
  {
    icon: 'MapPin',
    title: 'Dubai-Based, Established',
    text: 'Backed by Euro Experts Auto Services — a trusted name in Dubai automotive care for over a decade.',
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
    image: 'https://images.pexels.com/photos/8986035/pexels-photo-8986035.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Car in premium workshop with hood open for maintenance',
    comment: 'REPLACE: Premium workshop bay with a Lexus LX on the lift',
    span: 'wide',
  },
  {
    image: 'https://images.pexels.com/photos/34277926/pexels-photo-34277926.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Close-up of brake caliper and disc in workshop',
    comment: 'REPLACE: Close-up of brake caliper service on a Cadillac Escalade',
    span: 'normal',
  },
  {
    image: '/asian-master-technician.jpg',
    alt: 'Master technician running computer diagnostics in Euro Experts workshop',
    comment: 'Certified master technician running diagnostic scans',
    span: 'tall',
  },
  {
    image: 'https://images.pexels.com/photos/32725838/pexels-photo-32725838.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'High-performance engine bay detail shot',
    comment: 'REPLACE: Engine bay detail of a Ford F-150 Raptor EcoBoost',
    span: 'normal',
  },
  {
    image: 'https://images.pexels.com/photos/4116193/pexels-photo-4116193.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mechanic using diagnostic tool inside a car',
    comment: 'REPLACE: Diagnostic tool connected to an Infiniti QX80',
    span: 'wide',
  },
  {
    image: 'https://images.pexels.com/photos/26691305/pexels-photo-26691305.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Premium car interior with leather seats',
    comment: 'REPLACE: Lexus LX interior after premium detailing service',
    span: 'normal',
  },
  {
    image: 'https://images.pexels.com/photos/6870295/pexels-photo-6870295.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Auto mechanic inspecting engine in garage',
    comment: 'REPLACE: Technician inspecting engine bay of a GMC Yukon Denali',
    span: 'tall',
  },
  {
    image: 'https://images.pexels.com/photos/4294075/pexels-photo-4294075.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Brake caliper and disc close-up in workshop',
    comment: 'REPLACE: Brake disc and caliper service on a Chevrolet Tahoe',
    span: 'normal',
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
    name: 'Ahmed Al Mansoori',
    vehicle: 'Lexus LX 600',
    rating: 5,
    text: 'Outstanding service for my LX 600. The team diagnosed an issue three other garages missed. Genuinely dealer-level care without the dealership wait.',
  },
  {
    name: 'James Carter',
    vehicle: 'Cadillac Escalade',
    rating: 5,
    text: 'Finally a workshop in Dubai that understands American vehicles. They sorted my Escalade\'s magnetic ride suspension perfectly. Transparent pricing throughout.',
  },
  {
    name: 'Khalid Al Rashid',
    vehicle: 'Toyota Land Cruiser 300',
    rating: 5,
    text: 'My Land Cruiser gets the attention it deserves here. Genuine parts, meticulous work, and the team actually knows these vehicles inside out.',
  },
  {
    name: 'Sarah Williams',
    vehicle: 'Ford F-150 Raptor',
    rating: 5,
    text: 'The Raptor\'s FOX suspension was properly serviced — not just a quick fix. These technicians understand performance vehicles. Highly recommended.',
  },
  {
    name: 'Omar Al Futtaim',
    vehicle: 'Infiniti QX80',
    rating: 5,
    text: 'Professional, clean, and precise. The quote was exactly what I paid. My QX80 runs like new after their full service. A genuinely premium experience.',
  },
  {
    name: 'Michael Torres',
    vehicle: 'Jeep Grand Wagoneer',
    rating: 5,
    text: 'They handled the air suspension and electronics on my Grand Wagoneer with real expertise. Hard to find this level of American car knowledge in Dubai.',
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
    question: 'Do you service Lexus and Land Cruiser?',
    answer: 'Yes. We specialise in premium Japanese vehicles including Lexus, Toyota Land Cruiser, Nissan Patrol, Infiniti and Acura. Our technicians are specifically trained on these platforms.',
  },
  {
    question: 'Do you use genuine parts?',
    answer: 'Absolutely. We use only genuine and OEM-grade parts for all repairs and servicing. This preserves your vehicle\'s performance, warranty and resale value.',
  },
  {
    question: 'Do I get a quote before work starts?',
    answer: 'Always. You receive a clear, itemised quote before any work begins. Nothing proceeds without your written or verbal approval. No surprises, no hidden charges.',
  },
  {
    question: 'Do you offer pre-purchase inspection?',
    answer: 'Yes. We offer a comprehensive 200-point pre-purchase inspection with a full written report on the vehicle\'s condition, value and any potential issues — ideal before buying a used premium vehicle.',
  },
  {
    question: 'What are your timings?',
    answer: 'We are open Monday to Sunday, 8:00 AM to 6:00 PM, 7 days a week. You can reach us on WhatsApp or phone anytime for bookings or urgent inquiries.',
  },
  {
    question: 'Where are you located?',
    answer: 'We are located at 29 4 St, Al Qouz Industrial Area 4, Dubai, UAE. We have easy access from Sheikh Zayed Road and Al Khail Road. Click our location link or map for turn-by-turn directions.',
  },
];

// ── Booking form options ─────────────────────────────────────────
export const ALL_BRAND_NAMES = [
  ...JAPANESE_BRANDS.map((b) => b.name),
  ...AMERICAN_BRANDS.map((b) => b.name),
].sort();

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);
