import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '@/data/content';
import { SectionTitle, Reveal } from '@/components/ui/Primitives';

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const spanClasses: Record<string, string> = {
    tall: 'row-span-2',
    wide: 'col-span-2',
    normal: '',
  };

  return (
    <section id="gallery" className="relative py-12 lg:py-16 bg-[#181B26] overflow-hidden">
      {/* Studio ambient lighting and warm radiant light pools */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(255,160,72,0.15)_0%,transparent_70%)] blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionTitle
          eyebrow="Workshop Gallery"
          title="Inside the Atelier"
          subtitle="A clean, well-equipped workshop where precision meets craftsmanship. Every bay, every tool, every detail."
          center
        />

        {/* Masonry grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[240px]">
          {GALLERY_IMAGES.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 0.06}
              className={spanClasses[img.span || 'normal']}
            >
              <div
                className="group relative w-full h-full rounded-2xl overflow-hidden glass-card border border-white/18 hover:border-gold/60 transition-all duration-300 shadow-xl shadow-black/25 cursor-pointer"
                onClick={() => setLightbox(i)}
                data-cursor="hover"
              >
                <img
                  src={img.image}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover brightness-[1.06] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141622]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-xs font-sans text-white font-medium">{img.alt}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ZoomIn className="w-5 h-5 text-gold" strokeWidth={1.75} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] glass-dark flex items-center justify-center p-6"
          >
            <button
              className="absolute top-6 right-6 text-ivory hover:text-gold transition-colors"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={GALLERY_IMAGES[lightbox].image.replace('w=800', 'w=1400')}
              alt={GALLERY_IMAGES[lightbox].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
