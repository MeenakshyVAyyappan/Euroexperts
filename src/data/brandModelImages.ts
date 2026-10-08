// High-resolution premium vehicle imagery mapping for each brand and model.
// Default flagship images use the generated studio photography in /vehicles/

export interface ModelDetail {
  image: string;
  tagline?: string;
}

export const BRAND_DEFAULT_IMAGES: Record<string, string> = {
  Lexus: '/vehicles/lexus-lx600.jpg',
  Toyota: '/vehicles/toyota-lc300.jpg',
  Infiniti: '/vehicles/infiniti-qx80.jpg',
  Nissan: '/vehicles/nissan-patrol.jpg',
  Acura: '/vehicles/acura-mdx.jpg',
  Honda: '/vehicles/honda-civic-typer.jpg',
  Cadillac: '/vehicles/cadillac-escalade.jpg',
  Lincoln: '/vehicles/lincoln-navigator.jpg',
  GMC: '/vehicles/gmc-yukon.jpg',
  Ford: '/vehicles/ford-f150-raptor.jpg',
  Chevrolet: '/vehicles/chevrolet-corvette.jpg',
  Jeep: '/vehicles/jeep-grand-wagoneer.jpg',
  Dodge: '/vehicles/dodge-challenger.jpg',
};

export const MODEL_IMAGES: Record<string, Record<string, string>> = {
  Lexus: {
    'LX 600': '/vehicles/lexus-lx600.jpg',
    'LX 570': '/vehicles/lexus-lx600.jpg',
    'GX 460': '/vehicles/lexus-lx600.jpg',
    'GX 550': 'https://images.pexels.com/photos/10697775/pexels-photo-10697775.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'RX 350': 'https://images.pexels.com/photos/1005632/pexels-photo-1005632.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'RX 500h': 'https://images.pexels.com/photos/1005632/pexels-photo-1005632.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'NX': 'https://images.pexels.com/photos/1005632/pexels-photo-1005632.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'ES 350': '/vehicles/lexus-lx600.jpg',
    'LS 500': '/vehicles/lexus-lx600.jpg',
    'IS 350': '/vehicles/lexus-lx600.jpg',
    'LC 500': 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
  },
  Toyota: {
    'Land Cruiser 300': '/vehicles/toyota-lc300.jpg',
    'Land Cruiser 200': '/vehicles/toyota-lc300.jpg',
    'Land Cruiser Prado': '/vehicles/toyota-lc300.jpg',
    'Sequoia': '/vehicles/toyota-lc300.jpg',
    'Tundra': '/vehicles/toyota-lc300.jpg',
    'Crown': '/vehicles/toyota-lc300.jpg',
    'GR Supra': 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    'GR Yaris': 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
  },
  Infiniti: {
    'QX80': '/vehicles/infiniti-qx80.jpg',
    'QX60': '/vehicles/infiniti-qx80.jpg',
    'QX50': '/vehicles/infiniti-qx80.jpg',
    'Q50': '/vehicles/infiniti-qx80.jpg',
    'Q60': '/vehicles/infiniti-qx80.jpg',
  },
  Nissan: {
    'Patrol': '/vehicles/nissan-patrol.jpg',
    'Patrol NISMO': '/vehicles/nissan-patrol.jpg',
    'Z': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
    'GT-R': 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
  },
  Acura: {
    'MDX': '/vehicles/acura-mdx.jpg',
    'RDX': '/vehicles/acura-mdx.jpg',
    'TLX': '/vehicles/acura-mdx.jpg',
  },
  Honda: {
    'Pilot': '/vehicles/honda-civic-typer.jpg',
    'Civic Type R': '/vehicles/honda-civic-typer.jpg',
    'NSX': 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
  },
  Cadillac: {
    'Escalade': '/vehicles/cadillac-escalade.jpg',
    'Escalade-V': '/vehicles/cadillac-escalade.jpg',
    'Escalade IQ': '/vehicles/cadillac-escalade.jpg',
    'CT5': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    'CT5-V Blackwing': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    'XT6': '/vehicles/cadillac-escalade.jpg',
    'XT5': '/vehicles/cadillac-escalade.jpg',
  },
  Lincoln: {
    'Navigator': '/vehicles/lincoln-navigator.jpg',
    'Aviator': '/vehicles/lincoln-navigator.jpg',
    'Nautilus': '/vehicles/lincoln-navigator.jpg',
    'Corsair': '/vehicles/lincoln-navigator.jpg',
  },
  GMC: {
    'Yukon': '/vehicles/gmc-yukon.jpg',
    'Yukon Denali': '/vehicles/gmc-yukon.jpg',
    'Yukon XL': '/vehicles/gmc-yukon.jpg',
    'Sierra': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    'Sierra Denali': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    'Hummer EV': '/vehicles/gmc-yukon.jpg',
  },
  Ford: {
    'Mustang GT': 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80',
    'Mustang Dark Horse': 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80',
    'F-150 Raptor': '/vehicles/ford-f150-raptor.jpg',
    'F-150 Platinum': '/vehicles/ford-f150-raptor.jpg',
    'Expedition': '/vehicles/ford-f150-raptor.jpg',
    'Explorer ST': '/vehicles/ford-f150-raptor.jpg',
    'Bronco': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    'Bronco Raptor': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
  },
  Chevrolet: {
    'Tahoe': '/vehicles/chevrolet-tahoe.jpg',
    'Suburban': '/vehicles/chevrolet-tahoe.jpg',
    'Corvette': '/vehicles/chevrolet-corvette.jpg',
    'Corvette Z06': '/vehicles/chevrolet-corvette.jpg',
    'Silverado': '/vehicles/chevrolet-tahoe.jpg',
    'Camaro': '/vehicles/chevrolet-corvette.jpg',
    'Blazer': '/vehicles/chevrolet-tahoe.jpg',
  },
  Jeep: {
    'Grand Wagoneer': '/vehicles/jeep-grand-wagoneer.jpg',
    'Wagoneer': '/vehicles/jeep-grand-wagoneer.jpg',
    'Grand Cherokee': '/vehicles/jeep-grand-wagoneer.jpg',
    'Wrangler Rubicon': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
  },
  Dodge: {
    'Challenger': '/vehicles/dodge-challenger.jpg',
    'Charger': 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    'Durango': '/vehicles/dodge-challenger.jpg',
    'Durango SRT': '/vehicles/dodge-challenger.jpg',
    'Durango Hellcat': '/vehicles/dodge-challenger.jpg',
  },
};

export function getVehicleImage(brand: string, model?: string): string {
  if (model && MODEL_IMAGES[brand]?.[model]) {
    return MODEL_IMAGES[brand][model];
  }
  return BRAND_DEFAULT_IMAGES[brand] || '/vehicles/lexus-lx600.jpg';
}
