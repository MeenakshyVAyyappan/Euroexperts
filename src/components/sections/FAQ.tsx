import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '@/data/content';
import { SectionTitle, Reveal } from '@/components/ui/Primitives';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-12 lg:py-16 bg-[#181B26] overflow-hidden">
      {/* Studio ambient lighting and warm radiant light pools */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(255,160,72,0.15)_0%,transparent_70%)] blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 lg:px-10 relative z-10">
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
                <div className="glass-card rounded-2xl overflow-hidden border border-white/16 hover:border-gold/50 transition-all duration-300 shadow-lg shadow-black/20">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg lg:text-xl text-white font-medium">{item.question}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-white/[0.08] border border-white/18 flex items-center justify-center transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-gold" strokeWidth={1.75} />
                      ) : (
                        <Plus className="w-4 h-4 text-gold" strokeWidth={1.75} />
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
                          <div className="w-8 h-px bg-gold/40 mb-4" />
                          <p className="text-sm text-[#B2B8C8] font-sans leading-relaxed">
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
