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
    document.title = 'Euro Experts Auto Services | Premier American & Japanese Luxury Car Workshop Dubai';

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', 'Dealership-level auto service and specialist repair in Al Quoz, Dubai. Certified master technicians, genuine OEM parts, advanced computer diagnostics for Cadillac Escalade, GMC Yukon, Lincoln, Ford Raptor, Corvette, Lexus, Land Cruiser and Patrol.');
    setMeta('og:title', 'Euro Experts Auto Services | Premier American & Japanese Auto Workshop Dubai', 'property');
    setMeta('og:description', 'Dealership-level auto service in Al Quoz, Dubai specializing in American luxury marques & Japanese vehicles. Certified technicians, genuine parts, precision diagnostics.', 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', 'Euro Experts Auto Services LLC', 'property');
    setMeta('og:image', '/euroexpert-official-logo.png', 'property');
    setMeta('twitter:image', '/euroexpert-official-logo.png', 'name');

    // SEO: LocalBusiness / AutoRepair schema
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'AutoRepair',
      name: 'Euro Experts Auto Services LLC',
      description: 'Specialist automotive workshop for luxury, performance, and premier vehicle service and repair in Dubai.',
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
