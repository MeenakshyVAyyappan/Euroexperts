// Comprehensive vehicle showroom data for Nippon & Americana Auto / Euro Experts
import { getVehicleImage } from './brandModelImages';

export type VehicleType = 'SUV' | 'Sedan' | 'Performance' | 'Pickup' | 'Electric';

export interface ShowroomModel {
  name: string;
  imageKey: string;
  family: string;
  type: VehicleType;
  imageFallback?: string;
}

export interface ShowroomBrand {
  name: string;
  note: string;
  models: ShowroomModel[];
}

export const VEHICLE_TYPE_DESCRIPTIONS: Record<VehicleType, string> = {
  SUV: 'Confident handling. Dependable power. From the daily drive to the long road, attentive maintenance keeps your SUV ready for both.',
  Sedan: 'Quiet refinement and composed performance deserve precise diagnostics, quality parts and careful maintenance.',
  Performance: "Responsive power, controlled handling and the details that make driving matter. Specialist care for a driver's car.",
  Pickup: 'Hard-working engineering deserves thorough inspection, reliable maintenance and attention to every load-bearing detail.',
  Electric: 'Talk to our service advisors about inspection and maintenance requirements for your electric vehicle.',
};

export const SHOWROOM_JAPANESE_BRANDS: ShowroomBrand[] = [
  {
    name: 'Lexus',
    note: 'Japanese refinement. Specialist attention.',
    models: [
      { name: 'LX 600', imageKey: 'lexus-lx600', family: 'Lexus LX', type: 'SUV' },
      { name: 'LX 570', imageKey: 'lexus-lx570', family: 'Lexus LX', type: 'SUV' },
      { name: 'GX 460', imageKey: 'lexus-gx460', family: 'Lexus GX', type: 'SUV' },
      { name: 'GX 550', imageKey: 'lexus-gx550', family: 'Lexus GX', type: 'SUV' },
      { name: 'RX 350', imageKey: 'lexus-rx350', family: 'Lexus RX', type: 'SUV' },
      { name: 'RX 500h', imageKey: 'lexus-rx500h', family: 'Lexus RX', type: 'SUV' },
      { name: 'NX', imageKey: 'lexus-nx300', family: 'Lexus NX', type: 'SUV' },
      { name: 'ES 350', imageKey: 'lexus-es350', family: 'Lexus ES', type: 'Sedan' },
      { name: 'LS 500', imageKey: 'lexus-ls500', family: 'Lexus LS', type: 'Sedan' },
      { name: 'LS 350', imageKey: 'lexus-ls350', family: 'Lexus LS', type: 'Sedan' },
      { name: 'IS 350', imageKey: 'lexus-is350', family: 'Lexus IS', type: 'Sedan' },
      { name: 'LC 500', imageKey: 'lexus-lc500', family: 'Lexus LC', type: 'Performance' },
    ],
  },
  {
    name: 'Toyota',
    note: 'Built for the long road. Maintained for it.',
    models: [
      { name: 'Land Cruiser 300', imageKey: 'toyota-landcruiser', family: 'Toyota Land Cruiser', type: 'SUV' },
      { name: 'Land Cruiser 200', imageKey: 'toyota-landcruiser', family: 'Toyota Land Cruiser', type: 'SUV' },
      { name: 'Land Cruiser Prado', imageKey: 'toyota-prado', family: 'Toyota Prado', type: 'SUV' },
      { name: 'Sequoia', imageKey: 'toyota-sequoia', family: 'Toyota Sequoia', type: 'SUV' },
      { name: 'Tundra', imageKey: 'toyota-tundra', family: 'Toyota Tundra', type: 'Pickup' },
      { name: 'Crown', imageKey: 'toyota-crown', family: 'Toyota Crown', type: 'Sedan' },
      { name: 'GR Supra', imageKey: 'toyota-supra', family: 'Toyota GR Supra', type: 'Performance' },
      { name: 'GR Yaris', imageKey: 'toyota-yaris', family: 'Toyota GR Yaris', type: 'Performance' },
    ],
  },
  {
    name: 'Infiniti',
    note: "Nissan's luxury division. Precision in every detail.",
    models: [
      { name: 'QX80', imageKey: 'infiniti-qx80', family: 'Infiniti QX80', type: 'SUV' },
      { name: 'QX60', imageKey: 'infiniti-qx60', family: 'Infiniti QX60', type: 'SUV' },
      { name: 'QX50', imageKey: 'infiniti-qx50', family: 'Infiniti QX50', type: 'SUV' },
      { name: 'Q50', imageKey: 'infiniti-q50', family: 'Infiniti Q50', type: 'Sedan' },
      { name: 'Q60', imageKey: 'infiniti-q60', family: 'Infiniti Q60', type: 'Performance' },
    ],
  },
  {
    name: 'Nissan',
    note: 'From desert capability to track-bred performance.',
    models: [
      { name: 'Patrol', imageKey: 'nissan-patrol', family: 'Nissan Patrol', type: 'SUV' },
      { name: 'Patrol NISMO', imageKey: 'nissan-patrol', family: 'Nissan Patrol', type: 'SUV' },
      { name: 'Z', imageKey: 'nissan-z', family: 'Nissan Z', type: 'Performance' },
      { name: 'GT-R', imageKey: 'nissan-gtr', family: 'Nissan GT-R', type: 'Performance' },
    ],
  },
  {
    name: 'Acura',
    note: 'Honda engineering. Acura refinement.',
    models: [
      { name: 'MDX', imageKey: 'acura-mdx', family: 'Acura MDX', type: 'SUV' },
      { name: 'RDX', imageKey: 'acura-rdx', family: 'Acura RDX', type: 'SUV' },
      { name: 'TLX', imageKey: 'acura-tlx', family: 'Acura TLX', type: 'Sedan' },
    ],
  },
  {
    name: 'Honda',
    note: 'Engineered with precision. Maintained to perform.',
    models: [
      { name: 'Pilot', imageKey: 'honda-pilot', family: 'Honda Pilot', type: 'SUV' },
      { name: 'Civic Type R', imageKey: 'honda-civic', family: 'Honda Civic Type R', type: 'Performance' },
      { name: 'NSX', imageKey: 'honda-nsx', family: 'Honda NSX', type: 'Performance' },
    ],
  },
];

export const SHOWROOM_AMERICAN_BRANDS: ShowroomBrand[] = [
  {
    name: 'Cadillac',
    note: 'American luxury. An exacting standard of care.',
    models: [
      { name: 'Escalade', imageKey: 'cadillac-escalade', family: 'Cadillac Escalade', type: 'SUV' },
      { name: 'Escalade-V', imageKey: 'cadillac-escalade', family: 'Cadillac Escalade', type: 'SUV' },
      { name: 'Escalade IQ', imageKey: 'cadillac-iq', family: 'Cadillac Escalade IQ', type: 'Electric' },
      { name: 'CT5', imageKey: 'cadillac-ct5', family: 'Cadillac CT5', type: 'Sedan' },
      { name: 'CT5-V Blackwing', imageKey: 'cadillac-ct5', family: 'Cadillac CT5', type: 'Performance' },
      { name: 'XT6', imageKey: 'cadillac-xt6', family: 'Cadillac XT6', type: 'SUV' },
      { name: 'XT5', imageKey: 'cadillac-xt5', family: 'Cadillac XT5', type: 'SUV' },
    ],
  },
  {
    name: 'Ford',
    note: 'Performance, capability and everyday confidence.',
    models: [
      { name: 'Mustang GT', imageKey: 'ford-mustang', family: 'Ford Mustang', type: 'Performance' },
      { name: 'Mustang Dark Horse', imageKey: 'ford-mustang', family: 'Ford Mustang', type: 'Performance' },
      { name: 'F-150 Raptor', imageKey: 'ford-f150', family: 'Ford F-150', type: 'Pickup' },
      { name: 'F-150 Platinum', imageKey: 'ford-f150', family: 'Ford F-150', type: 'Pickup' },
      { name: 'Expedition', imageKey: 'ford-expedition', family: 'Ford Expedition', type: 'SUV' },
      { name: 'Explorer ST', imageKey: 'ford-explorer', family: 'Ford Explorer', type: 'SUV' },
      { name: 'Bronco', imageKey: 'ford-bronco', family: 'Ford Bronco', type: 'SUV' },
      { name: 'Bronco Raptor', imageKey: 'ford-bronco', family: 'Ford Bronco', type: 'SUV' },
    ],
  },
  {
    name: 'Lincoln',
    note: "Ford's luxury division. Effortless by design.",
    models: [
      { name: 'Navigator', imageKey: 'lincoln-navigator', family: 'Lincoln Navigator', type: 'SUV' },
      { name: 'Aviator', imageKey: 'lincoln-aviator', family: 'Lincoln Aviator', type: 'SUV' },
      { name: 'Nautilus', imageKey: 'lincoln-nautilus', family: 'Lincoln Nautilus', type: 'SUV' },
      { name: 'Corsair', imageKey: 'lincoln-corsair', family: 'Lincoln Corsair', type: 'SUV' },
    ],
  },
  {
    name: 'GMC',
    note: 'Serious capability. Considered maintenance.',
    models: [
      { name: 'Yukon', imageKey: 'gmc-yukon', family: 'GMC Yukon', type: 'SUV' },
      { name: 'Yukon Denali', imageKey: 'gmc-yukon', family: 'GMC Yukon', type: 'SUV' },
      { name: 'Yukon XL', imageKey: 'gmc-yukon', family: 'GMC Yukon', type: 'SUV' },
      { name: 'Sierra', imageKey: 'gmc-sierra', family: 'GMC Sierra', type: 'Pickup' },
      { name: 'Sierra Denali', imageKey: 'gmc-sierra', family: 'GMC Sierra', type: 'Pickup' },
      { name: 'Hummer EV', imageKey: 'gmc-hummer', family: 'GMC Hummer EV', type: 'Electric' },
    ],
  },
  {
    name: 'Chevrolet',
    note: 'From family journeys to driver-focused machines.',
    models: [
      { name: 'Tahoe', imageKey: 'chevrolet-tahoe', family: 'Chevrolet Tahoe', type: 'SUV' },
      { name: 'Suburban', imageKey: 'chevrolet-suburban', family: 'Chevrolet Suburban', type: 'SUV' },
      { name: 'Corvette', imageKey: 'chevrolet-corvette', family: 'Chevrolet Corvette', type: 'Performance' },
      { name: 'Corvette Z06', imageKey: 'chevrolet-corvette', family: 'Chevrolet Corvette', type: 'Performance' },
      { name: 'Silverado', imageKey: 'chevrolet-silverado', family: 'Chevrolet Silverado', type: 'Pickup' },
      { name: 'Camaro', imageKey: 'chevrolet-camaro', family: 'Chevrolet Camaro', type: 'Performance' },
      { name: 'Blazer', imageKey: 'chevrolet-blazer', family: 'Chevrolet Blazer', type: 'SUV' },
    ],
  },
  {
    name: 'Jeep',
    note: 'Go further. Return with confidence.',
    models: [
      { name: 'Grand Wagoneer', imageKey: 'jeep-wagoneer', family: 'Jeep Wagoneer', type: 'SUV' },
      { name: 'Wagoneer', imageKey: 'jeep-wagoneer', family: 'Jeep Wagoneer', type: 'SUV' },
      { name: 'Grand Cherokee', imageKey: 'jeep-cherokee', family: 'Jeep Grand Cherokee', type: 'SUV' },
      { name: 'Wrangler Rubicon', imageKey: 'jeep-wrangler', family: 'Jeep Wrangler', type: 'SUV' },
    ],
  },
  {
    name: 'Dodge',
    note: 'American muscle. Mechanical understanding.',
    models: [
      { name: 'Challenger', imageKey: 'dodge-challenger', family: 'Dodge Challenger', type: 'Performance' },
      { name: 'Charger', imageKey: 'dodge-charger', family: 'Dodge Charger', type: 'Performance' },
      { name: 'Durango', imageKey: 'dodge-durango', family: 'Dodge Durango', type: 'SUV' },
      { name: 'Durango SRT', imageKey: 'dodge-durango', family: 'Dodge Durango', type: 'SUV' },
      { name: 'Durango Hellcat', imageKey: 'dodge-durango', family: 'Dodge Durango', type: 'SUV' },
    ],
  },
];

// Helper to resolve the best image URL for a model (uses ultra-fast local vehicle images)
export function resolveShowroomImage(brandName: string, model: ShowroomModel): string {
  return getVehicleImage(brandName, model.name);
}
