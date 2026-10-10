import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Phone, ChevronDown, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { BUSINESS } from '@/data/content';

const HEADLINE_WORDS = ['Specialists', 'in', 'American', '&', 'Premium', 'Japanese', 'Vehicles'];

const HERO_WORKSHOP_SLIDES = [
  {
    name: 'Cadillac Escalade-V & GMC Yukon Denali Flagship Atelier',
    title: 'American Luxury Specialist Bay',
    origin: 'Flagship Bay 01',
    label: 'Escalade & Yukon',
    image: '/hero-american-cadillac-flagship.jpg',
  },
  {
    name: 'Cadillac Escalade-V & CT5-V Blackwing V-Series Atelier',
    title: 'American V-Series Specialists',
    origin: 'Cadillac Bay 02',
    label: 'Cadillac V-Series',
    image: '/american-cadillac-escalade-v.jpg',
  },
  {
    name: 'Lincoln Navigator Presidential & Ford Raptor Performance Bays',
    title: 'American Suspension & Alignment',
    origin: 'Specialist Bay 03',
    label: 'Lincoln & Raptor',
    image: '/gallery-ford-lincoln-service.jpg',
  },
  {
    name: 'Corvette Z06 Mid-Engine LT6 & Tahoe RST Performance Atelier',
    title: 'Supercar & SUV Calibration',
    origin: 'Performance Bay 04',
    label: 'Corvette Z06',
    image: '/american-chevrolet-corvette-z06.jpg',
  },
  {
    name: 'GMC Yukon Denali & Sierra Denali Luxury Atelier',
    title: 'American Denali Specialists',
    origin: 'Denali Bay 05',
    label: 'GMC Denali',
    image: '/american-gmc-yukon-denali.jpg',
  },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Smooth cinematic cross-fade between workshop atelier bays every 7 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_WORKSHOP_SLIDES.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_WORKSHOP_SLIDES.length) % HERO_WORKSHOP_SLIDES.length);
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_WORKSHOP_SLIDES.length);
  };

  // Touch swipe gesture handlers for intuitive mobile navigation
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNextSlide();
    } else if (diff < -45) {
      handlePrevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 0.5], ['0%', '25%']);

  const activeSlide = HERO_WORKSHOP_SLIDES[currentSlideIndex];

  return (
    <section
      ref={ref}
      id="top"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="relative min-h-[100svh] min-h-screen lg:min-h-[820px] xl:min-h-[860px] flex flex-col justify-between overflow-hidden bg-[#0F1012]"
    >
      {/* Background Workshop Atelier Image with studio illumination and smooth cinematic motion */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 bg-[#0F1012] pointer-events-none"
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
            className="w-full h-full object-cover object-center absolute inset-0 brightness-[0.94] contrast-[1.08]"
          />
        </AnimatePresence>

        {/* Refined Studio Gradients for contrast and typography legibility */}
        <div className="absolute inset-x-0 top-0 h-36 sm:h-44 bg-gradient-to-b from-[#0F1118]/85 via-[#0F1118]/35 to-transparent pointer-events-none" />

        {/* Center contrast vignette balanced for clear vehicle visibility & razor-sharp text legibility */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,12,18,0.58)_0%,rgba(10,12,18,0.26)_55%,transparent_90%)] pointer-events-none" />

        {/* Seamless bottom transition into TrustBar */}
        <div className="absolute inset-x-0 bottom-0 h-36 sm:h-44 bg-gradient-to-t from-[#141620] via-[#141620]/80 to-transparent pointer-events-none" />
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

      {/* Main Content Area: Centered with responsive padding and clearance for Header */}
      <motion.div
        style={{ opacity, y: yText }}
        className="relative z-10 w-full flex-1 flex flex-col items-center justify-center text-center px-4 xs:px-5 sm:px-6 max-w-6xl mx-auto pt-20 xs:pt-24 sm:pt-28 lg:pt-36 pb-4 sm:pb-6"
      >
        {/* Ultra-Premium Animated Workshop Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.03, y: -2 }}
          className="group relative inline-flex items-center mb-4 xs:mb-5 sm:mb-7 cursor-default max-w-full"
        >
          {/* 1. Ambient pulsing atmospheric aura */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-gold/30 via-amber-500/20 to-gold/30 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse pointer-events-none" />

          {/* 2. Rotating liquid-gold perimeter border */}
          <div className="relative p-[1px] rounded-full overflow-hidden shadow-2xl max-w-full">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#FFA048_335deg,#FF6200_360deg)] pointer-events-none"
            />

            {/* 3. Frosted glass inner capsule */}
            <div className="relative flex items-center gap-2 xs:gap-2.5 sm:gap-3 px-3.5 xs:px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-full bg-[#111215]/85 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden">
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
                <span className="absolute w-3 h-3 xs:w-3.5 xs:h-3.5 rounded-full bg-gold/50 animate-ping opacity-75" />
                <span className="absolute w-2 h-2 xs:w-2.5 xs:h-2.5 rounded-full bg-gold/60 blur-[2px]" />
                <span className="relative block w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-gradient-to-tr from-[#FF6200] via-[#FFA048] to-[#FFD188] shadow-[0_0_10px_#FF6200]" />
              </div>

              {/* Badge Typography */}
              <div className="relative flex items-center gap-1.5 xs:gap-2 text-[9px] xs:text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.16em] xs:tracking-[0.20em] sm:tracking-[0.24em] font-semibold whitespace-nowrap">
                <span className="text-ivory drop-shadow-sm">
                  Premier Automotive Workshop
                </span>
                <span className="text-gold/60 font-serif text-[11px] sm:text-xs">·</span>
                <span className="text-gold font-medium tracking-[0.16em] xs:tracking-[0.20em] drop-shadow-[0_0_8px_rgba(255,98,0,0.4)]">
                  Al Quoz, Dubai
                </span>
              </div>

              {/* Subtle trailing sparkle icon */}
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="relative shrink-0 text-gold/80 hidden xs:block"
              >
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={1.75} />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Headline: Fluid scaling for every mobile device with letter descender protection */}
        <h1 className="font-serif text-[1.85rem] xs:text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] text-white leading-[1.20] sm:leading-[1.15] tracking-tight max-w-5xl [text-shadow:_0_4px_24px_rgba(0,0,0,0.95),_0_8px_48px_rgba(0,0,0,0.9)]">
          {HEADLINE_WORDS.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pt-1 -mt-1 pb-4 -mb-4 mr-[0.22em] sm:mr-[0.25em]">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  delay: 3.3 + i * 0.08,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`inline-block pb-1 ${word === '&' || word === 'in' ? 'text-gold-gradient italic' : ''}`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Client-specified brand positioning strip: Responsive wrap with American marquee priority */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.0, duration: 0.5 }}
          className="mt-4 xs:mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-4 max-w-4xl text-xs sm:text-sm text-[#EDE9E1]/90 font-sans [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]"
        >
          {/* American Marques - Flagship Priority */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 text-center">
            <span className="shrink-0 text-gold font-semibold uppercase tracking-wider text-[9px] xs:text-[10px] sm:text-[11px] bg-gold/10 border border-gold/40 px-2 xs:px-2.5 py-0.5 rounded-full shadow-[0_0_8px_rgba(255,98,0,0.25)]">
              American
            </span>
            <span className="text-white/95 font-medium text-[11px] xs:text-xs sm:text-sm">
              Cadillac · Lincoln · GMC · Ford · Chevrolet · Jeep · Dodge
            </span>
          </div>

          <span className="hidden sm:inline text-gold/40">|</span>

          {/* Japanese Marques */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 text-center">
            <span className="shrink-0 text-white/80 font-medium uppercase tracking-wider text-[9px] xs:text-[10px] sm:text-[11px] bg-white/[0.06] border border-white/20 px-2 xs:px-2.5 py-0.5 rounded-full">
              Japanese
            </span>
            <span className="text-white/90 font-normal text-[11px] xs:text-xs sm:text-sm">
              Lexus · Toyota · Infiniti · Nissan · Acura · Honda
            </span>
          </div>
        </motion.div>

        {/* Action Buttons: Responsive row on mobile & desktop with comfortable touch targets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.15, duration: 0.5 }}
          className="mt-5 xs:mt-6 sm:mt-8 lg:mt-9 flex flex-row gap-2.5 sm:gap-4 w-full max-w-xs xs:max-w-sm sm:max-w-none justify-center px-2"
        >
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gold-gradient text-obsidian font-bold text-xs xs:text-sm px-4 xs:px-6 sm:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shimmer-line whitespace-nowrap shadow-lg shadow-black/40"
          >
            <MessageCircle className="w-4 h-4 xs:w-5 xs:h-5 shrink-0" strokeWidth={2} />
            <span>Book on WhatsApp</span>
          </a>
          <a
            href={`tel:${BUSINESS.phone1Tel}`}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-obsidian/75 backdrop-blur-md border border-gold/50 text-gold font-semibold text-xs xs:text-sm px-4 xs:px-6 sm:px-8 py-3 sm:py-3.5 lg:py-4 rounded-full hover:bg-gold/15 hover:border-gold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap shadow-lg shadow-black/40"
          >
            <Phone className="w-4 h-4 xs:w-5 xs:h-5 shrink-0" strokeWidth={2} />
            <span>Call Now</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Interactive Workshop Atelier Slide Switcher: Sits cleanly in flow above sticky mobile bar */}
      <div className="relative z-20 w-full px-4 xs:px-6 lg:px-10 pb-20 sm:pb-24 lg:pb-8 pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pointer-events-auto">
        {/* Clickable Atelier Bay Selector Pills with smooth touch-scroll */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 p-1 xs:p-1.5 rounded-full bg-[#12141D]/90 border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/60 overflow-x-auto no-scrollbar max-w-full touch-pan-x"
        >
          {HERO_WORKSHOP_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            return (
              <button
                key={slide.name}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`relative px-2.5 xs:px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] xs:text-[11px] sm:text-xs font-sans tracking-wide font-medium transition-all duration-300 cursor-pointer shrink-0 ${
                  isActive
                    ? 'text-obsidian font-bold shadow-md'
                    : 'text-[#BAC0D0] hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="hero-active-pill"
                    className="absolute inset-0 rounded-full bg-gold-gradient shadow-md shadow-gold/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1 xs:gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-black' : 'bg-gold/60'}`} />
                  {slide.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Navigation & Active Bay Indicator (Visible on tablet & desktop) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 xs:gap-2 px-3 xs:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#141622]/85 border border-gold/35 backdrop-blur-xl shadow-xl">
            <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-gold animate-pulse shrink-0" />
            <span className="text-[10px] xs:text-xs font-sans text-white font-medium tracking-wide truncate max-w-[200px] xs:max-w-none">
              {activeSlide.origin}: <strong className="text-gold font-semibold">{activeSlide.name}</strong>
            </span>
          </div>

          <div className="flex items-center gap-1 xs:gap-1.5">
            <button
              onClick={handlePrevSlide}
              aria-label="Previous American Atelier Bay"
              className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-[#12141D]/90 border border-white/20 hover:border-gold hover:bg-gold/20 flex items-center justify-center text-white hover:text-gold transition-all duration-200 cursor-pointer shadow-lg"
            >
              <ChevronLeft className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
            </button>
            <button
              onClick={handleNextSlide}
              aria-label="Next American Atelier Bay"
              className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-[#12141D]/90 border border-white/20 hover:border-gold hover:bg-gold/20 flex items-center justify-center text-white hover:text-gold transition-all duration-200 cursor-pointer shadow-lg"
            >
              <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


