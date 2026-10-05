import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Phone, ChevronDown } from 'lucide-react';
import { BUSINESS } from '@/data/content';

const HEADLINE_WORDS = ['Specialists', 'in', 'Premium', 'Japanese', '&', 'American', 'Vehicles'];

const HERO_FLAGSHIPS = [
  {
    name: 'Lexus LX 600',
    title: 'Japanese Luxury Flagship',
    origin: '🇯🇵 Japanese Excellence',
    image: '/vehicles/lexus-lx600.jpg',
  },
  {
    name: 'Cadillac Escalade',
    title: 'American Luxury Flagship',
    origin: '🇺🇸 American Luxury & Power',
    image: '/vehicles/cadillac-escalade.jpg',
  },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [currentCarIndex, setCurrentCarIndex] = useState<number>(0);

  // Smooth cinematic cross-fade between Japanese & American flagships every 7.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCarIndex((prev) => (prev + 1) % HERO_FLAGSHIPS.length);
    }, 7500);

    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 0.5], ['0%', '40%']);

  const activeCar = HERO_FLAGSHIPS[currentCarIndex];

  return (
    <section ref={ref} id="top" className="relative h-screen min-h-[700px] overflow-hidden vignette">
      {/* Background image with Ken Burns zoom & smooth flagship cross-fade */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 bg-obsidian"
      >
        <AnimatePresence mode="sync">
          <motion.img
            key={activeCar.image}
            src={activeCar.image}
            alt={`${activeCar.name} in dark studio setting`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </AnimatePresence>

        {/* Premium Dark Gradients for contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/75 via-obsidian/45 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-transparent to-obsidian/40" />
      </motion.div>

      {/* Gold light leak glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Flagship Indicator Badge in Bottom Corner */}
      <div className="absolute bottom-8 right-6 lg:right-10 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian/85 border border-gold/30 backdrop-blur-md shadow-xl">
        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
        <span className="text-xs font-sans text-ivory/90 font-medium">
          {activeCar.origin}: <strong className="text-gold font-semibold">{activeCar.name}</strong>
        </span>
      </div>

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
