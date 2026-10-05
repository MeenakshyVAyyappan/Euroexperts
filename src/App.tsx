import { useEffect } from 'react';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import FloatingIcons from '@/components/FloatingIcons';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import BrandMarquee from '@/components/sections/BrandMarquee';
import BrandSwitcher from '@/components/sections/BrandSwitcher';
import FeaturedVehicles from '@/components/sections/FeaturedVehicles';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Process from '@/components/sections/Process';
import Gallery from '@/components/sections/Gallery';
import Reviews from '@/components/sections/Reviews';
import FAQ from '@/components/sections/FAQ';
import BookingCTA from '@/components/sections/BookingCTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { BUSINESS } from '@/data/content';

function App() {
  useEffect(() => {
    // SEO: Set document title and meta description
    document.title = 'Premium Japanese & American Car Service in Dubai | Nippon & Americana Auto';

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', 'Dealership-level service for premium Japanese & American vehicles in Dubai. Lexus, Land Cruiser, Patrol, Escalade, Yukon Denali and more. Certified technicians, genuine parts, precision diagnostics.');
    setMeta('og:title', 'Premium Japanese & American Car Service in Dubai', 'property');
    setMeta('og:description', 'Specialists in premium Japanese & American vehicles. Certified technicians, genuine parts, precision diagnostics in Dubai.', 'property');
    setMeta('og:type', 'website', 'property');

    // SEO: LocalBusiness / AutoRepair schema
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'AutoRepair',
      name: 'Nippon & Americana Auto by Euro Experts Auto Services',
      description: 'Specialists in premium Japanese & American vehicle service and repair in Dubai.',
      telephone: BUSINESS.phone1,
      email: BUSINESS.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Warehouse 369-448, Al Quoz Industrial Area 4',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      openingHours: ['Mo-Sa 08:00-18:00'],
      areaServed: 'Dubai, UAE',
      sameAs: [BUSINESS.mapsLink],
    };

    let scriptTag = document.getElementById('ld-json-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'ld-json-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);
  }, []);

  return (
    <>
      <Preloader />
      <CustomCursor />
      <div className="film-grain" />
      <FloatingIcons />
      <Header />

      <main>
        <Hero />
        <TrustBar />
        <BrandMarquee />
        <BrandSwitcher />
        <FeaturedVehicles />
        <Services />
        <WhyChooseUs />
        <Process />
        <Gallery />
        <Reviews />
        <FAQ />
        <BookingCTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
