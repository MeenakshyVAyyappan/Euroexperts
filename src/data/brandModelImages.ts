// High-resolution premium vehicle imagery mapping for each brand and model.
// Default flagship images use the generated studio photography in /vehicles/

export interface ModelDetail {
  image: string;
  tagline?: string;
}

export const BRAND_DEFAULT_IMAGES: Record<string, string> = {
  Lexus: '/vehicles/Lexus/lx600.jpg',
  Toyota: '/vehicles/Toyota/LandCruiser300.jpg',
  Infiniti: '/vehicles/Infinity/QX80.jpg',
  Nissan: '/vehicles/Nissan/nissanpatrol.jpg',
  Acura: '/vehicles/Acura/acuramdx.jpg',
  Honda: '/vehicles/Honda/hondapilot.jpg',
  Cadillac: '/vehicles/Cadillac/Escalade.jpg',
  Lincoln: '/vehicles/Lincoln/Navigator.jpg',
  GMC: '/vehicles/GMC/Yukon.jpg',
  Ford: '/vehicles/Ford/Mustang GT.jpg',
  Chevrolet: '/vehicles/Chevrolet/Tahoe.jpg',
  Jeep: '/vehicles/Jeep/Grand Wagoneer.jpg',
  Dodge: '/vehicles/Dodge/Challenger.jpg',
};

export const MODEL_IMAGES: Record<string, Record<string, string>> = {
  Lexus: {
    'LX 600': '/vehicles/Lexus/lx600.jpg',
    'LX 570': '/vehicles/Lexus/lx570.jpg',
    'GX 460': '/vehicles/Lexus/gx460.jpg',
    'GX 550': '/vehicles/Lexus/gx550.jpg',
    'RX 350': '/vehicles/Lexus/rx350.jpg',
    'RX 500h': '/vehicles/Lexus/rx500.jpg',
    'RX 500': '/vehicles/Lexus/rx500.jpg',
    'NX': '/vehicles/Lexus/nx300.jpg',
    'NX 350': '/vehicles/Lexus/nx300.jpg',
    'NX 300': '/vehicles/Lexus/nx300.jpg',
    'ES 350': '/vehicles/Lexus/es350.jpg',
    'LS 500': '/vehicles/Lexus/ls500.jpg',
    'LS 350': '/vehicles/Lexus/ls350.jpg',
    'IS 350': '/vehicles/Lexus/ls350.jpg',
    'LC 500': '/vehicles/Lexus/lc500.jpg',
  },
  Toyota: {
    'Land Cruiser 300': '/vehicles/Toyota/LandCruiser300.jpg',
    'Land Cruiser 200': '/vehicles/Toyota/LandCruiser200.jpg',
    'Land Cruiser Prado': '/vehicles/Toyota/LandCruiserPrado.jpg',
    'Sequoia': '/vehicles/Toyota/Sequoia.jpg',
    'Tundra': '/vehicles/Toyota/Tundra.jpg',
    'Crown': '/vehicles/Toyota/Crown.jpg',
    'GR Supra': '/vehicles/Toyota/GR Supra.jpg',
    'GR Yaris': '/vehicles/Toyota/GR Yaris.jpg',
  },
  Infiniti: {
    'QX80': '/vehicles/Infinity/QX80.jpg',
    'QX60': '/vehicles/Infinity/QX60.jpg',
    'QX50': '/vehicles/Infinity/QX50.jpg',
    'Q50': '/vehicles/Infinity/q50.jpg',
    'Q60': '/vehicles/Infinity/Q60.jpg',
  },
  Nissan: {
    'Patrol': '/vehicles/Nissan/nissanpatrol.jpg',
    'Patrol NISMO': '/vehicles/Nissan/nismo.jpg',
    'Z': '/vehicles/Nissan/nissanz.jpg',
    'GT-R': '/vehicles/Nissan/nissangt-r.jpg',
  },
  Acura: {
    'MDX': '/vehicles/Acura/acuramdx.jpg',
    'RDX': '/vehicles/Acura/acurardx.jpg',
    'TLX': '/vehicles/Acura/acuratlx.jpg',
  },
  Honda: {
    'Pilot': '/vehicles/Honda/hondapilot.jpg',
    'Civic Type R': '/vehicles/Honda/hondacivictype-r.jpg',
    'NSX': '/vehicles/Honda/hondansx.jpg',
  },
  Cadillac: {
    'Escalade': '/vehicles/Cadillac/Escalade.jpg',
    'Escalade-V': '/vehicles/Cadillac/Escalade-V.jpg',
    'Escalade IQ': '/vehicles/Cadillac/EscaladeIQ.jpg',
    'CT5': '/vehicles/Cadillac/CT5.jpg',
    'CT5-V Blackwing': '/vehicles/Cadillac/CT5-V Blackwing.jpg',
    'XT6': '/vehicles/Cadillac/XT6.jpg',
    'XT5': '/vehicles/Cadillac/XT5.jpg',
  },
  Lincoln: {
    'Navigator': '/vehicles/Lincoln/Navigator.jpg',
    'Aviator': '/vehicles/Lincoln/Aviator.jpg',
    'Nautilus': '/vehicles/Lincoln/Nautilus.jpg',
    'Corsair': '/vehicles/Lincoln/Corsair.jpg',
  },
  GMC: {
    'Yukon': '/vehicles/GMC/Yukon.jpg',
    'Yukon Denali': '/vehicles/GMC/Yukon Denali.jpg',
    'Yukon XL': '/vehicles/GMC/Yukon XL.jpg',
    'Sierra': '/vehicles/GMC/Sierra.jpg',
    'Sierra Denali': '/vehicles/GMC/Sierra Denali.jpg',
    'Hummer EV': '/vehicles/GMC/Hummer EV.jpg',
  },
  Ford: {
    'Mustang GT': '/vehicles/Ford/Mustang GT.jpg',
    'Mustang Dark Horse': '/vehicles/Ford/Mustang Dark Horse.jpg',
    'F-150 Raptor': '/vehicles/Ford/F-150 Raptor.jpg',
    'F-150 Platinum': '/vehicles/Ford/F-150 Platinum.jpg',
    'Expedition': '/vehicles/Ford/Expedition.jpg',
    'Explorer ST': '/vehicles/Ford/Explorer ST.jpg',
    'Bronco': '/vehicles/Ford/Bronco.jpg',
    'Bronco Raptor': '/vehicles/Ford/Bronco Raptor.jpg',
  },
  Chevrolet: {
    'Tahoe': '/vehicles/Chevrolet/Tahoe.jpg',
    'Suburban': '/vehicles/Chevrolet/Suburban.jpg',
    'Corvette': '/vehicles/Chevrolet/Corvette.jpg',
    'Corvette Z06': '/vehicles/Chevrolet/Corvette Z06.jpg',
    'Silverado': '/vehicles/Chevrolet/Silverado.jpg',
    'Camaro': '/vehicles/Chevrolet/Camaro.jpg',
    'Blazer': '/vehicles/Chevrolet/Blazer.jpg',
  },
  Jeep: {
    'Grand Wagoneer': '/vehicles/Jeep/Grand Wagoneer.jpg',
    'Wagoneer': '/vehicles/Jeep/Wagoneer.jpg',
    'Grand Cherokee': '/vehicles/Jeep/Grand Cherokee.jpg',
    'Wrangler Rubicon': '/vehicles/Jeep/Wrangler Rubicon.jpg',
  },
  Dodge: {
    'Challenger': '/vehicles/Dodge/Challenger.jpg',
    'Charger': '/vehicles/Dodge/Charger.jpg',
    'Durango': '/vehicles/Dodge/Durango.jpg',
    'Durango SRT': '/vehicles/Dodge/Durango SRT.jpg',
    'Durango Hellcat': '/vehicles/Dodge/Durango Hellcat.jpg',
  },
};

export function getVehicleImage(brand: string, model?: string): string {
  if (model && MODEL_IMAGES[brand]?.[model]) {
    return MODEL_IMAGES[brand][model];
  }
  return BRAND_DEFAULT_IMAGES[brand] || '/vehicles/lexus-lx600.jpg';
}
