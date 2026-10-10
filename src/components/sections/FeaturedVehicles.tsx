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
  const [isDragging, setIsDragging] = useState(false);

  const dragStartXRef = useRef(0);
  const dragScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  // Vehicle Preview Modal state
  const [previewVehicle, setPreviewVehicle] = useState<{
    brand: string;
    model: string;
    image: string;
    region: 'japan' | 'america';
  } | null>(null);

  // Compute exact card width + gap dynamically
  const getCardStep = useCallback(() => {
    if (!trackRef.current) return 444;
    const firstCard = trackRef.current.querySelector('article');
    if (firstCard) {
      return (firstCard as HTMLElement).offsetWidth + 24; // 24px is gap-6
    }
    return trackRef.current.clientWidth > 768 ? 444 : 324;
  }, []);

  // Initialize track to the middle set on load for seamless infinite scrolling in both directions
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const initScroll = () => {
      const oneThird = track.scrollWidth / 3;
      if (oneThird > 0) {
        track.scrollLeft = oneThird;
      }
    };

    // Run immediately and after layout settles
    initScroll();
    const timeout = setTimeout(initScroll, 100);
    return () => clearTimeout(timeout);
  }, []);

  // Forward scroll (Next button: advances carousel to the right to reveal next vehicles)
  const scrollNext = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth } = track;
    const oneThird = scrollWidth / 3;
    const step = getCardStep();

    // If approaching the end of the middle set, teleport back to identical position in set 1
    if (scrollLeft >= oneThird * 2 - step) {
      track.scrollLeft = scrollLeft - oneThird;
    }

    track.scrollBy({ left: step, behavior: 'smooth' });
  }, [getCardStep]);

  // Backward scroll (Prev button: moves carousel to the left to reveal previous vehicles)
  const scrollPrev = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth } = track;
    const oneThird = scrollWidth / 3;
    const step = getCardStep();

    // If approaching the beginning of the middle set, teleport forward to identical position in set 3
    if (scrollLeft <= oneThird + step) {
      track.scrollLeft = scrollLeft + oneThird;
    }

    track.scrollBy({ left: -step, behavior: 'smooth' });
  }, [getCardStep]);

  // Auto-scroll forward on interval (paused on hover / touch / drag)
  useEffect(() => {
    if (isHovered || isDragging) return;

    const interval = setInterval(() => {
      scrollNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, isDragging, scrollNext]);

  // Handle manual scroll wrapping (for trackpad, wheel, or momentum swipes)
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth } = track;
    if (scrollWidth === 0) return;
    const oneThird = scrollWidth / 3;

    // Boundary wrap protection when scrolled far past edges
    if (scrollLeft >= oneThird * 2.4) {
      track.scrollLeft = scrollLeft - oneThird;
    } else if (scrollLeft <= oneThird * 0.1) {
      track.scrollLeft = scrollLeft + oneThird;
    }
  }, []);

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    hasDraggedRef.current = false;
    dragStartXRef.current = e.pageX - track.offsetLeft;
    dragScrollLeftRef.current = track.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - dragStartXRef.current) * 1.2;
    if (Math.abs(walk) > 6) {
      hasDraggedRef.current = true;
    }
    trackRef.current.scrollLeft = dragScrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="featured" className="relative py-12 lg:py-16 bg-[#181B26] overflow-hidden">
      {/* Studio Ambient Illumination */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(255,160,72,0.15)_0%,transparent_70%)] blur-[90px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <SectionTitle
            eyebrow="Featured Vehicles"
            title="Models We Know Intimately"
            subtitle="From the commanding Cadillac Escalade and GMC Yukon Denali to the legendary Land Cruiser and Lexus LX 600 — every vehicle receives the same meticulous, dealership-level attention."
          />
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold text-white hover:text-black transition-all cursor-pointer shadow-lg backdrop-blur-md active:scale-95"
              aria-label="Previous vehicles"
              title="Previous vehicles"
            >
              <ArrowLeft className="w-5 h-5 transition-colors" strokeWidth={1.75} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold text-white hover:text-black transition-all cursor-pointer shadow-lg backdrop-blur-md active:scale-95"
              aria-label="Next vehicles"
              title="Next vehicles"
            >
              <ArrowRight className="w-5 h-5 transition-colors" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>

      {/* Auto-Scroll Carousel Track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseUpOrLeave();
        }}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        className={`flex gap-6 overflow-x-auto no-scrollbar px-6 lg:px-10 pb-6 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        style={{ scrollPaddingLeft: '2.5rem' }}
      >
        {INFINITE_VEHICLES.map((vehicle, i) => (
          <motion.article
            key={vehicle.uniqueId}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.04, duration: 0.5 }}
            className="group relative shrink-0 w-[300px] sm:w-[360px] lg:w-[420px]"
            data-cursor="hover"
          >
            {/* Image Card */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-card border border-white/18 group-hover:border-gold/60 transition-all duration-500 shadow-2xl shadow-black/30 group-hover:shadow-gold/20">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover brightness-[1.07] contrast-[1.04] transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141622]/90 via-[#141622]/25 to-transparent pointer-events-none" />

              {/* Region badge */}
              <div className="absolute top-4 left-4 pointer-events-none">
                <span
                  className="text-[10px] uppercase tracking-[0.2em] font-sans px-3.5 py-1.5 rounded-full bg-[#181A26]/85 text-white border border-white/20 backdrop-blur-md font-medium shadow-md"
                  style={{
                    borderLeft: `3px solid #FF6200`,
                  }}
                >
                  Specialist Care
                </span>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className="eyebrow text-gold mb-1 block">{vehicle.brand}</span>
                <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2 group-hover:text-gold-gradient transition-all duration-300">
                  {vehicle.name}
                </h3>
                <p className="text-sm text-[#B2B8C8] font-sans mb-4 leading-relaxed line-clamp-2">
                  {vehicle.note}
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href={`${BUSINESS.whatsappLink}?text=${encodeURIComponent(`I'd like to book a service for my ${vehicle.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (hasDraggedRef.current) {
                        e.preventDefault();
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-gold font-semibold border-b border-gold/40 hover:border-gold transition-all pb-0.5"
                  >
                    <span>Book this service</span>
                    <span>→</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      if (hasDraggedRef.current) return;
                      setPreviewVehicle({
                        brand: vehicle.brand,
                        model: vehicle.name.replace(vehicle.brand, '').trim() || vehicle.name,
                        image: vehicle.image,
                        region: vehicle.region.toLowerCase() as 'japan' | 'america',
                      });
                    }}
                    className="text-[11px] font-sans text-white/90 hover:text-white px-3 py-1.5 rounded-lg bg-white/10 hover:bg-gold/25 border border-white/20 transition-all cursor-pointer font-medium"
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
