import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Phone, ChevronDown } from 'lucide-react';
import { BUSINESS } from '@/data/content';

const HEADLINE_WORDS = ['Specialists', 'in', 'Premium', 'Japanese', '&', 'American', 'Vehicles'];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 0.5], ['0%', '40%']);

  return (
    <section ref={ref} id="top" className="relative h-screen min-h-[700px] overflow-hidden vignette">
      {/* Background image with Ken Burns zoom */}
      {/* REPLACE: Cinematic dark studio shot of a Lexus LX 600 and Cadillac Escalade side by side, dramatic lighting, Dubai night backdrop */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <img
          src="https://images.pexels.com/photos/19067088/pexels-photo-19067088.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Premium luxury SUV in dark studio setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/40 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/30" />
      </motion.div>

      {/* Gold light leak glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity, y: yText }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.6 }}
          className="eyebrow mb-6"
        >
          Dubai's Premier Japanese & American Auto Atelier
        </motion.span>

        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-ivory leading-[1.05] tracking-tight max-w-5xl">
          {HEADLINE_WORDS.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{
                  delay: 3.3 + i * 0.08,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`inline-block ${word === '&' || word === 'in' ? 'text-gold-gradient italic' : ''}`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.6 }}
          className="mt-6 text-muted font-sans text-base lg:text-lg max-w-2xl leading-relaxed"
        >
          Dealership-level care for Lexus, Land Cruiser, Patrol, Escalade, Yukon Denali and more —
          certified technicians, genuine parts, precision diagnostics in Dubai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.3, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-gold-gradient text-obsidian font-semibold text-sm px-8 py-4 rounded-full hover:shadow-xl hover:shadow-gold/25 transition-all duration-300 shimmer-line"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
            Book on WhatsApp
          </a>
          <a
            href={`tel:${BUSINESS.phone1Tel}`}
            className="group inline-flex items-center justify-center gap-2 border border-gold/40 text-gold font-semibold text-sm px-8 py-4 rounded-full hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
          >
            <Phone className="w-5 h-5" strokeWidth={1.5} />
            Call Now
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gold" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
