import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '@/data/content';
import { SectionTitle, Reveal } from '@/components/ui/Primitives';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <SectionTitle
          eyebrow="Frequently Asked"
          title="Your Questions, Answered"
          center
        />

        <div className="space-y-3 mt-8">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className="glass rounded-xl overflow-hidden border-gold/10 transition-colors duration-300 hover:border-gold/20">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg lg:text-xl text-ivory">{item.question}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full glass flex items-center justify-center">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-gold" strokeWidth={1.5} />
                      ) : (
                        <Plus className="w-4 h-4 text-gold" strokeWidth={1.5} />
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 lg:px-6 pb-5 lg:pb-6">
                          <div className="w-8 h-px bg-gold/30 mb-4" />
                          <p className="text-sm text-muted font-sans leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
