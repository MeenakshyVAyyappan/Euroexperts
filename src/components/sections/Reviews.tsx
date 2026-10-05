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
    <section id="reviews" className="relative py-24 lg:py-32 bg-obsidian overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionTitle
          eyebrow="Client Reviews"
          title="Trusted by Discerning Owners"
          center
        />

        {/* Google rating badge */}
        <Reveal delay={0.2}>
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="glass rounded-full px-5 py-2.5 flex items-center gap-3">
              <span className="font-serif text-2xl text-gold-gradient">{GOOGLE_RATING}</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs text-muted font-sans uppercase tracking-wider">
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
              className="glass rounded-2xl p-8 lg:p-12 text-center"
            >
              <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" strokeWidth={1} />

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(REVIEWS[index].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="font-serif text-xl lg:text-2xl text-ivory leading-relaxed italic mb-8">
                "{REVIEWS[index].text}"
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-obsidian font-sans font-bold text-sm">
                  {REVIEWS[index].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-sans text-sm text-ivory font-medium">{REVIEWS[index].name}</div>
                  <div className="text-xs text-muted">{REVIEWS[index].vehicle}</div>
                </div>
              </div>

              {/* Placeholder note */}
              <p className="mt-6 text-[10px] text-muted/50 font-sans italic">
                {/* Placeholder review — replace with verified Google reviews */}
                Placeholder review — replace with verified Google reviews
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => go(-1)}
            className="w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-gold/10 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-gold" strokeWidth={1.5} />
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
                  i === index ? 'w-8 bg-gold' : 'w-1.5 bg-charcoal-light'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-gold/10 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-gold" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
