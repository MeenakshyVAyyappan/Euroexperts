import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Phone, ChevronDown, Sparkles } from 'lucide-react';
import { BUSINESS } from '@/data/content';

const HEADLINE_WORDS = ['Specialists', 'in', 'Premium', 'Japanese', '&', 'American', 'Vehicles'];

const HERO_WORKSHOP_SLIDES = [
  {
    name: 'Lexus LX 600, LC 300 & Patrol Service Bays',
    title: 'Japanese Luxury Atelier',
    origin: 'Euro Experts Facility',
    image: '/hero-workshop-japanese.jpg',
  },
  {
    name: 'Cadillac Escalade, Yukon & Raptor Diagnostic Bays',
    title: 'American Specialist Bay',
    origin: 'Advanced Diagnostic Bay',
    image: '/hero-workshop-american.jpg',
  },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  // Smooth cinematic cross-fade between workshop atelier bays every 7.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_WORKSHOP_SLIDES.length);
    }, 7500);

    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 0.5], ['0%', '30%']);

  const activeSlide = HERO_WORKSHOP_SLIDES[currentSlideIndex];

  return (
    <section ref={ref} id="top" className="relative h-screen min-h-[720px] overflow-hidden bg-[#0F1012]">
      {/* Background Workshop Atelier Image with studio illumination and smooth cinematic motion */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 bg-[#0F1012]"
      >
        <AnimatePresence mode="sync">
          <motion.img
            key={activeSlide.image}
            src={activeSlide.image}
            alt={activeSlide.name}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="w-full h-full object-cover object-center absolute inset-0 brightness-[0.85] contrast-[1.12]"
          />
        </AnimatePresence>

        {/* Refined Studio Gradients for contrast and typography legibility */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0F1118]/85 via-[#0F1118]/40 to-transparent pointer-events-none" />

        {/* Center contrast vignette to guarantee razor-sharp text legibility against bright workshop lights */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,12,18,0.72)_0%,rgba(10,12,18,0.40)_55%,transparent_90%)] pointer-events-none" />

        {/* Seamless bottom transition into TrustBar */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#141620] via-[#141620]/75 to-transparent pointer-events-none" />
      </motion.div>

      {/* ── Ultra-Premium Studio Illumination Effects ── */}
      {/* 1. Overhead warm golden spotlight beam */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(255,160,72,0.18)_0%,rgba(255,98,0,0.05)_50%,transparent_75%)] blur-[90px] pointer-events-none" />

      {/* 2. Soft ambient titanium warm light bounce (right side) */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* 3. Soft ambient gold glow (left side) */}
      <div className="absolute bottom-1/4 -left-20 w-[450px] h-[450px] bg-gold/12 rounded-full blur-[130px] pointer-events-none" />

      {/* 4. Elegant studio horizon rim line */}
      <div className="absolute top-[58%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-60 pointer-events-none" />

      {/* Workshop Facility Indicator Badge in Bottom Corner */}
      <div className="absolute bottom-8 right-6 lg:right-10 z-20 hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#141622]/85 border border-gold/35 backdrop-blur-xl shadow-2xl shadow-black/50">
        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
        <span className="text-xs font-sans text-white font-medium tracking-wide">
          {activeSlide.origin}: <strong className="text-gold font-semibold">{activeSlide.name}</strong>
        </span>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y: yText }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto"
      >
        {/* Ultra-Premium Animated Workshop Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.03, y: -2 }}
          className="group relative inline-flex items-center mb-7 cursor-default"
        >
          {/* 1. Ambient pulsing atmospheric aura */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-gold/30 via-amber-500/20 to-gold/30 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse pointer-events-none" />

          {/* 2. Rotating liquid-gold perimeter border */}
          <div className="relative p-[1px] rounded-full overflow-hidden shadow-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#FFA048_335deg,#FF6200_360deg)] pointer-events-none"
            />

            {/* 3. Frosted glass inner capsule */}
            <div className="relative flex items-center gap-3 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#111215]/85 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden">
              {/* Shimmer light sweep gliding across the badge */}
              <motion.div
                animate={{ x: ['-120%', '220%'] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.2,
                  ease: 'easeInOut',
                  repeatDelay: 1.8,
                }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/18 to-transparent -skew-x-12 pointer-events-none"
              />

              {/* Pulsing radar beacon dot */}
              <div className="relative flex items-center justify-center shrink-0">
                <span className="absolute w-3.5 h-3.5 rounded-full bg-gold/50 animate-ping opacity-75" />
                <span className="absolute w-2.5 h-2.5 rounded-full bg-gold/60 blur-[2px]" />
                <span className="relative block w-2 h-2 rounded-full bg-gradient-to-tr from-[#FF6200] via-[#FFA048] to-[#FFD188] shadow-[0_0_10px_#FF6200]" />
              </div>

              {/* Badge Typography */}
              <div className="relative flex items-center gap-2 text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.24em] font-semibold">
                <span className="text-ivory drop-shadow-sm">
                  Premier Automotive Workshop
                </span>
                <span className="text-gold/60 font-serif text-xs">·</span>
                <span className="text-gold font-medium tracking-[0.2em] drop-shadow-[0_0_8px_rgba(255,98,0,0.4)]">
                  Al Quoz, Dubai
                </span>
              </div>

              {/* Subtle trailing sparkle icon */}
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="relative shrink-0 text-gold/80"
              >
                <Sparkles className="w-3.5 h-3.5" strokeWidth={1.75} />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Headline with layered drop-shadows and text-shadow for crystal clarity */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] tracking-tight max-w-5xl [text-shadow:_0_4px_24px_rgba(0,0,0,0.95),_0_8px_48px_rgba(0,0,0,0.9)]">
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

        {/* Description without any box or border for a sleek, clean, borderless look */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.6 }}
          className="mt-6 max-w-2xl sm:max-w-3xl text-[#EDE9E1] font-sans text-sm sm:text-base lg:text-lg leading-relaxed font-normal [text-shadow:_0_2px_14px_rgba(0,0,0,0.95),_0_6px_30px_rgba(0,0,0,0.9)]"
        >
          Dealership-level maintenance and repair for Lexus, Land Cruiser, Patrol, Escalade, Yukon, Mustang and premier marques — certified master technicians, genuine OEM parts, precision diagnostics in Al Quoz, Dubai.
        </motion.p>

        {/* Client-specified brand positioning strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.18, duration: 0.6 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#EDE9E1]/90 font-sans [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]"
        >
          <div className="flex items-center gap-2">
            <span className="text-gold font-semibold uppercase tracking-wider text-[10px] sm:text-[11px] bg-white/[0.06] border border-gold/30 px-2 py-0.5 rounded-full">Japanese</span>
            <span className="text-white/95 font-medium">Lexus · Toyota · Infiniti · Nissan · Acura · Honda</span>
          </div>
          <span className="hidden sm:inline text-gold/40">|</span>
          <div className="flex items-center gap-2">
            <span className="text-gold font-semibold uppercase tracking-wider text-[10px] sm:text-[11px] bg-white/[0.06] border border-gold/30 px-2 py-0.5 rounded-full">American</span>
            <span className="text-white/95 font-medium">Cadillac · Lincoln · GMC · Ford · Chevrolet · Jeep · Dodge</span>
          </div>
        </motion.div>

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
            className="group inline-flex items-center justify-center gap-2 bg-gold-gradient text-obsidian font-bold text-sm px-8 py-4 rounded-full hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shimmer-line"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
            Book on WhatsApp
          </a>
          <a
            href={`tel:${BUSINESS.phone1Tel}`}
            className="group inline-flex items-center justify-center gap-2 bg-obsidian/60 backdrop-blur-md border border-gold/50 text-gold font-semibold text-sm px-8 py-4 rounded-full hover:bg-gold/15 hover:border-gold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <Phone className="w-5 h-5" strokeWidth={1.75} />
            Call Now
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/70 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gold" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
