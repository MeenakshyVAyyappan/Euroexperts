import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FEATURED_VEHICLES, BUSINESS } from '@/data/content';
import { SectionTitle } from '@/components/ui/Primitives';
import { VehiclePreviewModal } from '@/components/ui/VehiclePreviewModal';

// Triplicate the vehicle list for infinite, seamless forward carousel scrolling
const INFINITE_VEHICLES = [
  ...FEATURED_VEHICLES.map((v, i) => ({ ...v, uniqueId: `set1-${i}-${v.name}` })),
  ...FEATURED_VEHICLES.map((v, i) => ({ ...v, uniqueId: `set2-${i}-${v.name}` })),
  ...FEATURED_VEHICLES.map((v, i) => ({ ...v, uniqueId: `set3-${i}-${v.name}` })),
];

export default function FeaturedVehicles() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Vehicle Preview Modal state
  const [previewVehicle, setPreviewVehicle] = useState<{
    brand: string;
    model: string;
    image: string;
    region: 'japan' | 'america';
  } | null>(null);

  // Initialize track to the middle set on load for seamless forward scrolling
  useEffect(() => {
    if (!trackRef.current) return;
    const oneThird = trackRef.current.scrollWidth / 3;
    if (oneThird > 0) {
      trackRef.current.scrollLeft = oneThird;
    }
  }, []);

  // Forward scroll (smooth forward carousel motion)
  const scrollForward = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth } = trackRef.current;
    const cardWidth = trackRef.current.clientWidth > 768 ? 440 : 320;
    const oneThird = scrollWidth / 3;

    // If approaching the beginning, wrap forward to the middle set seamlessly
    if (scrollLeft <= cardWidth * 1.5) {
      trackRef.current.scrollLeft = scrollLeft + oneThird;
    }

    trackRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  }, []);

  // Backward scroll for previous button
  const scrollBackward = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth } = trackRef.current;
    const cardWidth = trackRef.current.clientWidth > 768 ? 440 : 320;
    const oneThird = scrollWidth / 3;

    // If approaching the end, wrap backward to the middle set seamlessly
    if (scrollLeft >= oneThird * 2 - cardWidth * 1.5) {
      trackRef.current.scrollLeft = scrollLeft - oneThird;
    }

    trackRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }, []);

  // Auto-scroll forward on interval (paused on hover / touch)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      scrollForward();
    }, 3200);

    return () => clearInterval(interval);
  }, [isHovered, scrollForward]);

  return (
    <section id="featured" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionTitle
            eyebrow="Featured Vehicles"
            title="Models We Know Intimately"
            subtitle="From the desert-proven Land Cruiser to the commanding Escalade — every vehicle receives the same meticulous, dealership-level attention."
          />
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollBackward}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold/15 hover:border-gold/40 transition-all cursor-pointer"
              aria-label="Scroll backward"
              title="Previous"
            >
              <ArrowLeft className="w-5 h-5 text-gold" strokeWidth={1.5} />
            </button>
            <button
              onClick={scrollForward}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold/15 hover:border-gold/40 transition-all cursor-pointer"
              aria-label="Scroll forward"
              title="Next (Forward)"
            >
              <ArrowRight className="w-5 h-5 text-gold" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Auto-Scroll Forward Carousel Track */}
      <div
        ref={trackRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 lg:px-10 pb-6 scroll-smooth cursor-grab active:cursor-grabbing"
        style={{ scrollPaddingLeft: '2.5rem', scrollBehavior: 'smooth' }}
      >
        {INFINITE_VEHICLES.map((vehicle, i) => (
          <motion.article
            key={vehicle.uniqueId}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.04, duration: 0.5 }}
            className="group relative shrink-0 w-[300px] sm:w-[360px] lg:w-[420px] snap-start"
            data-cursor="hover"
          >
            {/* Image Card */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass border border-white/10 group-hover:border-gold/40 transition-all duration-500 shadow-xl group-hover:shadow-gold/15">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />

              {/* Region badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="text-[10px] uppercase tracking-[0.2em] font-sans px-3 py-1 rounded-full glass text-ivory border border-white/10 backdrop-blur-md"
                  style={{
                    borderLeft: `3px solid ${vehicle.region === 'Japan' ? '#FF6200' : '#FFA048'}`,
                  }}
                >
                  {vehicle.region === 'Japan' ? 'Japanese' : 'American'}
                </span>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className="eyebrow text-gold mb-1 block">{vehicle.brand}</span>
                <h3 className="font-serif text-2xl lg:text-3xl text-ivory mb-2 group-hover:text-gold-gradient transition-all duration-300">
                  {vehicle.name}
                </h3>
                <p className="text-sm text-muted font-sans mb-4 leading-relaxed line-clamp-2">
                  {vehicle.note}
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href={`${BUSINESS.whatsappLink}?text=${encodeURIComponent(`I'd like to book a service for my ${vehicle.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-gold border-b border-gold/30 hover:border-gold transition-all pb-0.5"
                  >
                    <span>Book this service</span>
                    <span>→</span>
                  </a>

                  <button
                    type="button"
                    onClick={() =>
                      setPreviewVehicle({
                        brand: vehicle.brand,
                        model: vehicle.name.replace(vehicle.brand, '').trim() || vehicle.name,
                        image: vehicle.image,
                        region: vehicle.region.toLowerCase() as 'japan' | 'america',
                      })
                    }
                    className="text-[11px] font-sans text-ivory/70 hover:text-white px-2.5 py-1 rounded-md bg-white/5 hover:bg-gold/20 border border-white/10 transition-colors cursor-pointer"
                  >
                    Quick View ↗
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Vehicle Preview Modal */}
      {previewVehicle && (
        <VehiclePreviewModal
          isOpen={!!previewVehicle}
          onClose={() => setPreviewVehicle(null)}
          brand={previewVehicle.brand}
          model={previewVehicle.model}
          image={previewVehicle.image}
          region={previewVehicle.region}
        />
      )}
    </section>
  );
}
