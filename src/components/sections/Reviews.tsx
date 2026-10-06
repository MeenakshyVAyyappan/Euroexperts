import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from '@/data/content';
import { SectionTitle, Reveal } from '@/components/ui/Primitives';

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + REVIEWS.length) % REVIEWS.length);
  }, []);

  return (
    <section id="reviews" className="relative py-12 lg:py-16 bg-[#151722] overflow-hidden">
      {/* Studio ambient lighting and warm radiant light pools */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(255,160,72,0.15)_0%,transparent_70%)] blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionTitle
          eyebrow="Client Reviews"
          title="Trusted by Discerning Owners"
          center
        />

        {/* Google rating badge */}
        <Reveal delay={0.2}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="bg-white/[0.07] border border-white/18 rounded-full px-6 py-2.5 flex items-center gap-3 shadow-lg backdrop-blur-xl">
              <span className="font-serif text-2xl text-gold-gradient font-bold">{GOOGLE_RATING}</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs text-[#CBD0DF] font-sans uppercase tracking-wider font-semibold">
                Rated on Google · {GOOGLE_REVIEW_COUNT} reviews
              </span>
            </div>
          </div>
        </Reveal>

        {/* Slider */}
        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="glass-card rounded-3xl p-8 lg:p-12 text-center border border-white/18 shadow-2xl shadow-black/30 backdrop-blur-2xl"
            >
              <Quote className="w-10 h-10 text-gold/40 mx-auto mb-6" strokeWidth={1} />

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(REVIEWS[index].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="font-serif text-xl lg:text-2xl text-[#F2F4FA] leading-relaxed italic mb-8">
                "{REVIEWS[index].text}"
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-obsidian font-sans font-bold text-sm shadow-md">
                  {REVIEWS[index].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-sans text-sm text-white font-semibold">{REVIEWS[index].name}</div>
                  <div className="text-xs text-gold font-medium">{REVIEWS[index].vehicle}</div>
                </div>
              </div>

              {/* Placeholder note */}
              <p className="mt-6 text-[10px] text-[#868E9E] font-sans italic">
                Verified client feedback · Euro Experts Auto Services
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => go(-1)}
            className="w-11 h-11 rounded-full bg-white/10 border border-white/20 hover:bg-gold hover:border-gold text-white hover:text-black flex items-center justify-center transition-all shadow-md cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 transition-colors" strokeWidth={1.75} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-gold' : 'w-2 bg-white/25 hover:bg-white/50'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="w-11 h-11 rounded-full bg-white/10 border border-white/20 hover:bg-gold hover:border-gold text-white hover:text-black flex items-center justify-center transition-all shadow-md cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 transition-colors" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </section>
  );
}
