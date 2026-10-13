import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Phone, ChevronDown, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { BUSINESS } from '@/data/content';

const HEADLINE_WORDS = ['Specialists', 'in', 'American', '&', 'Premium', 'Vehicles'];

function ISOCertifiedLogo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="isoGoldRing" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFA048" />
          <stop offset="0.3" stopColor="#FFD188" />
          <stop offset="0.7" stopColor="#FFA048" />
          <stop offset="1" stopColor="#FF6200" />
        </linearGradient>
        <linearGradient id="isoPillGrad" x1="15" y1="58" x2="85" y2="76" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6200" />
          <stop offset="0.35" stopColor="#FFA048" />
          <stop offset="0.7" stopColor="#FFD188" />
          <stop offset="1" stopColor="#FF6200" />
        </linearGradient>
        <radialGradient id="isoBgGrad" cx="50%" cy="45%" r="55%">
          <stop stopColor="#1C212D" />
          <stop offset="60%" stopColor="#10131B" />
          <stop offset="100%" stopColor="#08090E" />
        </radialGradient>
        {/* Arc path for top curved text */}
        <path id="isoTopTextArc" d="M 22,50 A 28,28 0 0,1 78,50" fill="none" />
      </defs>

      {/* Outer gear / cog tooth ring */}
      <circle cx="50" cy="50" r="47" stroke="url(#isoGoldRing)" strokeWidth="2.2" strokeDasharray="3.8 2.2" opacity="0.9" />
      <circle cx="50" cy="50" r="43.5" stroke="url(#isoGoldRing)" strokeWidth="1.2" opacity="0.85" />
      
      {/* Dark luxury background disc */}
      <circle cx="50" cy="50" r="42" fill="url(#isoBgGrad)" />

      {/* Authentic ISO Globe Meridians & Parallels */}
      <ellipse cx="50" cy="46" rx="13" ry="24" stroke="url(#isoGoldRing)" strokeWidth="0.8" opacity="0.35" />
      <ellipse cx="50" cy="46" rx="24" ry="24" stroke="url(#isoGoldRing)" strokeWidth="0.8" opacity="0.25" />
      <line x1="26" y1="46" x2="74" y2="46" stroke="url(#isoGoldRing)" strokeWidth="0.8" opacity="0.3" />
      <path d="M 30 35 Q 50 40 70 35" stroke="url(#isoGoldRing)" strokeWidth="0.7" opacity="0.28" fill="none" />
      <path d="M 30 57 Q 50 52 70 57" stroke="url(#isoGoldRing)" strokeWidth="0.7" opacity="0.28" fill="none" />

      {/* Top Curved "CERTIFIED" Typography */}
      <text fill="#FFD188" fontSize="7.8" fontWeight="800" letterSpacing="0.18em">
        <textPath href="#isoTopTextArc" startOffset="50%" textAnchor="middle">
          CERTIFIED
        </textPath>
      </text>

      {/* Flanking Quality Stars */}
      <path d="M 18 36 L 19 38 L 21 38.2 L 19.5 39.6 L 20 41.6 L 18 40.5 L 16 41.6 L 16.5 39.6 L 15 38.2 L 17 38 Z" fill="#FFA048" />
      <path d="M 82 36 L 83 38 L 85 38.2 L 83.5 39.6 L 84 41.6 L 82 40.5 L 80 41.6 L 80.5 39.6 L 79 38.2 L 81 38 Z" fill="#FFA048" />

      {/* Authoritative Central ISO Typography */}
      <text
        x="50"
        y="53"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="system-ui, -apple-system, 'SF Pro Display', Arial, sans-serif"
        fontWeight="900"
        fontSize="24"
        letterSpacing="0.06em"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.85))' }}
      >
        ISO
      </text>

      {/* Official 9001:2015 Quality Plaque */}
      <rect x="15" y="59" width="70" height="17" rx="3.5" fill="url(#isoPillGrad)" stroke="#FFE2B0" strokeWidth="0.7" />
      <text
        x="50"
        y="71.5"
        textAnchor="middle"
        fill="#090A0E"
        fontFamily="system-ui, -apple-system, 'SF Pro Display', Arial, sans-serif"
        fontWeight="900"
        fontSize="10.5"
        letterSpacing="0.08em"
      >
        9001:2015
      </text>

      {/* Bottom Sub-Label: Quality System */}
      <text
        x="50"
        y="85.5"
        textAnchor="middle"
        fill="#FFA048"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="5.2"
        letterSpacing="0.22em"
        opacity="0.95"
      >
        QUALITY SYSTEM
      </text>
    </svg>
  );
}

const HERO_WORKSHOP_SLIDES = [
  {
    name: 'Cadillac Escalade-V & GMC Yukon Denali Flagship Atelier',
    title: 'American Luxury Specialist Bay',
    origin: 'Flagship Bay 01',
    label: 'Escalade & Yukon',
    image: '/gallery-euroexperts-flagship-escalade-v2.jpg',
  },
  {
    name: 'Corvette Z06 Supercar & Ford Raptor Performance Atelier',
    title: 'American Supercar & Laser Alignment Atelier',
    origin: 'Performance Bay 02',
    label: 'Corvette & Raptor',
    image: '/hero-workshop-euroexperts-performance-v2.jpg',
  },
  {
    name: 'Lincoln Navigator Presidential & Adaptive Suspension Bay',
    title: 'American Luxury Suspension & Hydraulic Lift Bay',
    origin: 'Executive Bay 03',
    label: 'Lincoln Navigator',
    image: '/hero-workshop-euroexperts-lincoln-v2.jpg',
  },
  {
    name: 'Lexus LX600 & Infiniti QX80 Japanese Luxury Atelier',
    title: 'Japanese Luxury Specialists & Diagnostic Lounge',
    origin: 'Japanese Bay 04',
    label: 'Lexus & Infiniti',
    image: '/hero-workshop-euroexperts-japanese-v2.jpg',
  },
  {
    name: 'Jeep Grand Wagoneer & Dodge Challenger Hellcat V8 Atelier',
    title: 'HEMI V8 & Advanced Telemetry Diagnostics Bay',
    origin: 'HEMI Bay 05',
    label: 'Jeep & Hellcat',
    image: '/hero-workshop-euroexperts-hemi-v2.jpg',
  },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const pillsContainerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Smoothly center the active workshop bay pill in view on mobile devices with overflow
  useEffect(() => {
    const container = pillsContainerRef.current;
    const activePill = pillRefs.current[currentSlideIndex];
    if (container && activePill && container.scrollWidth > container.clientWidth + 5) {
      const containerWidth = container.clientWidth;
      const pillOffsetLeft = activePill.offsetLeft;
      const pillWidth = activePill.offsetWidth;
      const targetScrollLeft = pillOffsetLeft - (containerWidth / 2) + (pillWidth / 2);
      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: 'smooth',
      });
    } else if (container) {
      container.scrollLeft = 0;
    }
  }, [currentSlideIndex]);

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
        {/* Client Priority Highlight: Dubai's ISO-Certified Dealer Alternative with 10+ Years of Experience · Al Quoz, Dubai */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 3.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02, y: -2 }}
          className="group relative inline-flex items-center mb-4 xs:mb-5 sm:mb-7 cursor-default max-w-full px-1"
        >
          {/* Ambient gold glow aura */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-gold/30 via-amber-500/20 to-gold/30 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Frosted glass inner capsule with ISO Certification */}
          <div className="relative flex items-center gap-2.5 xs:gap-3 sm:gap-4 px-3.5 xs:px-4.5 sm:px-6 py-2 xs:py-2.5 sm:py-2.5 rounded-full bg-[#111215]/90 border border-gold/45 hover:border-gold backdrop-blur-2xl shadow-2xl shadow-black/70 transition-all duration-300">
            {/* Official ISO 9001:2015 Seal Logo - Prominent Size */}
            <div className="relative shrink-0 flex items-center justify-center">
              <span className="absolute -inset-1.5 rounded-full bg-gold/30 blur-xs animate-pulse" />
              <ISOCertifiedLogo className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 relative z-10 drop-shadow-[0_0_12px_rgba(255,160,72,0.7)]" />
            </div>

            {/* Highlight Copy: Grouped for natural, elegant wrapping on all mobile screens */}
            <div className="relative flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs xs:text-sm sm:text-base font-sans tracking-wide">
              <div className="inline-flex items-center gap-1.5 xs:gap-2">
                <span className="text-white/95 font-medium drop-shadow-sm">Dubai's</span>
                <span className="bg-gradient-to-r from-[#FFA048] via-[#FFD188] to-[#FF6200] text-[#0B0D13] font-black text-[10px] xs:text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full shadow-lg uppercase tracking-wider">
                  ISO-Certified
                </span>
                <span className="text-white font-semibold drop-shadow-sm">Dealer Alternative</span>
              </div>
              <div className="inline-flex items-center gap-1.5 xs:gap-2">
                <span className="text-ivory/80 font-normal">with</span>
                <span className="text-gold font-bold tracking-wide drop-shadow-[0_0_10px_rgba(255,98,0,0.5)] whitespace-nowrap">
                  10+ Years of Experience
                </span>
                <span className="text-gold/60 font-serif">·</span>
                <span className="text-gold font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(255,98,0,0.4)] whitespace-nowrap">
                  Al Quoz, Dubai
                </span>
              </div>
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
          transition={{ delay: 3.85, duration: 0.5 }}
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
              Lexus · Infiniti
            </span>
          </div>
        </motion.div>

        {/* Action Buttons: Responsive row on mobile & desktop with comfortable touch targets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.05, duration: 0.5 }}
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
      <div className="relative z-20 w-full px-3 xs:px-5 sm:px-6 lg:pl-24 lg:pr-10 pb-20 sm:pb-24 lg:pb-8 pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pointer-events-auto">
        {/* Clickable Atelier Bay Selector Pills with smooth auto-centering & edge protection */}
        <div className="relative max-w-full w-full sm:w-auto flex items-center justify-center">
          {/* Subtle edge fade gradients on mobile to indicate horizontal continuity and prevent harsh border clipping */}
          <div className="absolute left-0 top-0 bottom-0 w-3 xs:w-4 bg-gradient-to-r from-[#12141D] to-transparent z-20 pointer-events-none rounded-l-full sm:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-3 xs:w-4 bg-gradient-to-l from-[#12141D] to-transparent z-20 pointer-events-none rounded-r-full sm:hidden" />

          <div
            ref={pillsContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
            className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 p-1 xs:p-1.5 rounded-full bg-[#12141D]/90 border border-white/15 backdrop-blur-2xl shadow-2xl shadow-black/60 overflow-x-auto no-scrollbar max-w-full touch-pan-x scroll-smooth snap-x snap-mandatory"
          >
            {/* Start spacer so first item has generous clearance from curved cap on mobile */}
            <div className="w-1.5 xs:w-2 sm:hidden shrink-0" aria-hidden="true" />

            {HERO_WORKSHOP_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <button
                  key={slide.name}
                  ref={(el) => {
                    pillRefs.current[idx] = el;
                  }}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`relative px-2.5 xs:px-3 sm:px-4 py-1.5 rounded-full text-[10px] xs:text-[11px] sm:text-xs font-sans tracking-wide font-medium transition-all duration-300 cursor-pointer shrink-0 whitespace-nowrap snap-center ${
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
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-black' : 'bg-gold/70'}`} />
                    {slide.label}
                  </span>
                </button>
              );
            })}

            {/* End spacer so last item NEVER collides with the right curved cap on any mobile device */}
            <div className="w-4 xs:w-5 sm:hidden shrink-0" aria-hidden="true" />
          </div>
        </div>

        {/* Navigation & Active Bay Indicator: Balanced, responsive, and spacious on every mobile screen */}
        <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 xs:gap-2 px-3 xs:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#141622]/85 border border-gold/35 backdrop-blur-xl shadow-xl">
            <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-gold animate-pulse shrink-0" />
            <span className="text-[10px] xs:text-xs font-sans text-white font-medium tracking-wide">
              <span className="hidden sm:inline">
                {activeSlide.origin}: <strong className="text-gold font-semibold">{activeSlide.name}</strong>
              </span>
              <span className="sm:hidden flex items-center gap-1.5">
                <span className="text-white/80">{activeSlide.origin}</span>
                <span className="text-gold/40">·</span>
                <strong className="text-gold font-semibold">{activeSlide.label}</strong>
              </span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Bay Counter Badge on Mobile */}
            <div className="sm:hidden px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-mono text-white/70">
              0{currentSlideIndex + 1} / 0{HERO_WORKSHOP_SLIDES.length}
            </div>

            <button
              onClick={handlePrevSlide}
              aria-label="Previous Euro Experts Workshop Bay"
              className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-[#12141D]/90 border border-white/20 hover:border-gold hover:bg-gold/20 flex items-center justify-center text-white hover:text-gold transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
            >
              <ChevronLeft className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
            </button>
            <button
              onClick={handleNextSlide}
              aria-label="Next Euro Experts Workshop Bay"
              className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-[#12141D]/90 border border-white/20 hover:border-gold hover:bg-gold/20 flex items-center justify-center text-white hover:text-gold transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
            >
              <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


