import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Phone, ChevronDown, Sparkles, ChevronLeft, ChevronRight, ExternalLink, Maximize2, ShieldCheck, Award } from 'lucide-react';
import { BUSINESS } from '@/data/content';

interface HeroProps {
  onOpenCertificate?: () => void;
}

function ISORoundGoldSeal({ className = 'w-24 h-24' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldMedalGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF1B8" />
          <stop offset="0.2" stopColor="#FFA048" />
          <stop offset="0.5" stopColor="#FFD188" />
          <stop offset="0.8" stopColor="#FF9800" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
        <radialGradient id="sealDiscGrad" cx="50%" cy="50%" r="50%">
          <stop stopColor="#241B10" />
          <stop offset="60%" stopColor="#15121A" />
          <stop offset="100%" stopColor="#0B0D13" />
        </radialGradient>
        <path id="sealTopArc" d="M 22,60 A 38,38 0 0,1 98,60" fill="none" />
        <path id="sealBottomArc" d="M 98,60 A 38,38 0 0,1 22,60" fill="none" />
      </defs>

      {/* Sunburst Teeth Rays */}
      <g stroke="url(#goldMedalGrad)" strokeWidth="1.3" opacity="0.95">
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i * 360) / 36;
          const rad = (angle * Math.PI) / 180;
          const x1 = 60 + 51 * Math.cos(rad);
          const y1 = 60 + 51 * Math.sin(rad);
          const x2 = 60 + 57 * Math.cos(rad);
          const y2 = 60 + 57 * Math.sin(rad);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeLinecap="round" />;
        })}
      </g>

      {/* Outer concentric rings */}
      <circle cx="60" cy="60" r="51" stroke="url(#goldMedalGrad)" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="46.5" stroke="url(#goldMedalGrad)" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="60" cy="60" r="44" fill="url(#sealDiscGrad)" stroke="url(#goldMedalGrad)" strokeWidth="1.5" />

      {/* Top curved text "CERTIFIED" */}
      <text fill="#FFE082" fontSize="9.5" fontWeight="900" letterSpacing="0.22em" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.9))' }}>
        <textPath href="#sealTopArc" startOffset="50%" textAnchor="middle">
          CERTIFIED
        </textPath>
      </text>

      {/* Bottom curved text "CERTIFIED" */}
      <text fill="#FFE082" fontSize="9.5" fontWeight="900" letterSpacing="0.22em" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.9))' }}>
        <textPath href="#sealBottomArc" startOffset="50%" textAnchor="middle">
          CERTIFIED
        </textPath>
      </text>

      {/* Left and Right 5-point stars */}
      <polygon points="21,60 22.5,63 26,63.5 23.5,66 24,69.5 21,67.5 18,69.5 18.5,66 16,63.5 19.5,63" fill="#FFE082" />
      <polygon points="99,60 100.5,63 104,63.5 101.5,66 102,69.5 99,67.5 96,69.5 96.5,66 94,63.5 97.5,63" fill="#FFE082" />

      {/* Central horizontal plaque with ISO 9001 */}
      <rect x="18" y="48" width="84" height="24" rx="3.5" fill="#131623" stroke="url(#goldMedalGrad)" strokeWidth="1" />
      <text
        x="60"
        y="65.5"
        textAnchor="middle"
        fill="url(#goldMedalGrad)"
        fontFamily="system-ui, -apple-system, 'SF Pro Display', Arial, sans-serif"
        fontWeight="900"
        fontSize="17"
        letterSpacing="0.08em"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.9))' }}
      >
        ISO 9001
      </text>

      {/* Sub-label under ISO 9001 */}
      <text
        x="60"
        y="83"
        textAnchor="middle"
        fill="#FFD188"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="5"
        letterSpacing="0.22em"
      >
        QUALITY SYSTEM
      </text>
    </svg>
  );
}

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

export default function Hero({ onOpenCertificate }: HeroProps = {}) {
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
            className="w-full h-full object-cover object-center absolute inset-0 brightness-[1.0] contrast-[1.05]"
          />
        </AnimatePresence>

        {/* Top subtle header gradient for logo/nav contrast */}
        <div className="absolute inset-x-0 top-0 h-28 sm:h-32 bg-gradient-to-b from-[#0B0D14]/80 via-[#0B0D14]/20 to-transparent pointer-events-none" />

        {/* Seamless bottom transition into TrustBar */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#141620] via-[#141620]/70 to-transparent pointer-events-none" />
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

      {/* Main Content Area: Executive Split Layout on Desktop, Fluid Stacked on Mobile */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full flex-1 flex flex-col justify-center px-4 xs:px-5 sm:px-6 lg:px-12 max-w-7xl mx-auto pt-20 xs:pt-24 sm:pt-28 lg:pt-32 pb-4 sm:pb-6"
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column (7 cols): Client's Authority Headline & Content with High-Contrast Text Backgrounds */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start w-full text-center lg:text-left">
            {/* Main Headline with Tailored Frosted Glass Text Background */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.6 }}
              className="w-full max-w-2xl lg:max-w-3xl p-4 sm:p-5 lg:p-6 rounded-2xl bg-black/65 backdrop-blur-md border border-white/15 shadow-2xl shadow-black/80 text-center lg:text-left"
            >
              <h1 className="text-[1.35rem] xs:text-[1.55rem] sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] text-white leading-[1.28] sm:leading-[1.18] tracking-tight">
                <span className="block sm:inline">
                  <span className="inline-flex items-baseline text-[#FFA048] font-black drop-shadow-[0_2px_10px_rgba(255,160,72,0.5)] mr-2">
                    <span className="font-sans text-[1.22em] leading-none mr-1">10+</span>
                    <span className="font-serif">Years</span>
                  </span>
                </span>
                <span className="font-serif font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  of Automotive Excellence
                </span>
                <span className="block mt-1.5 sm:mt-2 text-[#FFA048] font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-[1.2rem] xs:text-[1.4rem] sm:text-2xl md:text-3xl lg:text-[2.2rem]">
                  <span className="text-white/60 font-bold mr-2">—</span>
                  ISO-Certified
                </span>
              </h1>
            </motion.div>

            {/* Secondary Header: Specialised in American Premium Vehicles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4, duration: 0.6 }}
              className="w-full max-w-2xl mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 shadow-xl shadow-black/70 text-center lg:text-left"
            >
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] font-bold text-white tracking-wide leading-snug drop-shadow-md">
                Specialised in{' '}
                <span className="text-[#FFA048] font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  American Premium Vehicles
                </span>
              </h2>
            </motion.div>

            {/* Mobile-Only Prominent ISO 9001 Rosette Badge (replaces description for sleek, punchy mobile UX) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 3.4, duration: 0.6 }}
              className="lg:hidden my-2.5 xs:my-3 flex flex-col items-center cursor-pointer group"
              onClick={() => {
                if (onOpenCertificate) {
                  onOpenCertificate();
                } else {
                  document.querySelector('#iso-certificate')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              title="Tap to view official ISO 9001 Certification"
            >
              <div className="relative flex flex-col items-center">
                {/* Soft ambient gold halo */}
                <div className="absolute -inset-4 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,160,72,0.4)_0%,transparent_70%)] blur-xl pointer-events-none" />

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <img
                    src="/ISO/iso-9001-badge.png"
                    alt="Official Certified ISO 9001 Quality System Medal"
                    className="w-20 xs:w-24 sm:w-26 h-auto select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.85)] drop-shadow-[0_0_16px_rgba(255,160,72,0.4)]"
                    onError={(e) => {
                      e.currentTarget.src = '/ISO/iso02.png';
                    }}
                  />

                  {/* Verified Accreditation Pill underneath */}
                  <div className="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 border border-gold/50 text-gold text-[11px] font-bold backdrop-blur-md shadow-lg shadow-black/80">
                    <ShieldCheck className="w-3 h-3 text-gold" />
                    <span>ISO 9001:2015 Certified Workshop</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Specialist Marques Strip: Balanced & High-Contrast on all screen sizes */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.7, duration: 0.5 }}
              className="mt-2.5 sm:mt-4 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 w-full max-w-2xl"
            >
              {/* American Chip */}
              <div className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-4 py-2 sm:py-1.5 rounded-2xl sm:rounded-full bg-black/80 backdrop-blur-md border border-amber-500/50 shadow-xl shadow-black/70 text-center">
                <span className="bg-gradient-to-r from-[#FFA048] to-[#FF6200] text-[#0A0C13] font-black text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm shrink-0">
                  American
                </span>
                <span className="text-white font-semibold text-xs sm:text-sm tracking-wide leading-snug">
                  Cadillac · Lincoln · GMC · Ford · Corvette · Jeep · Dodge
                </span>
              </div>

              {/* Japanese Chip: Always 1 line / single row as requested */}
              <div className="inline-flex flex-row items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/30 shadow-xl shadow-black/70 shrink-0">
                <span className="bg-white/20 text-white font-black text-[10px] xs:text-[11px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-white/40 shadow-sm shrink-0">
                  Japanese
                </span>
                <span className="text-white font-semibold text-xs sm:text-sm tracking-wide whitespace-nowrap">
                  Lexus · Infiniti
                </span>
              </div>
            </motion.div>

            {/* Action Buttons: Desktop Only (Hidden on Mobile because sticky bottom bar provides WhatsApp & Call buttons) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.9, duration: 0.5 }}
              className="hidden lg:flex mt-4 sm:mt-5 flex-row gap-3 sm:gap-4 w-full max-w-xs xs:max-w-sm sm:max-w-none justify-center lg:justify-start"
            >
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#FFA048] via-[#FF8A00] to-[#FF6200] text-[#0A0C13] font-black text-xs xs:text-sm px-7 sm:px-8 py-3.5 rounded-full hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shimmer-line whitespace-nowrap shadow-xl shadow-amber-500/30"
              >
                <MessageCircle className="w-4 h-4 xs:w-5 xs:h-5 shrink-0" strokeWidth={2.2} />
                <span>Book on WhatsApp</span>
              </a>
              <a
                href={`tel:${BUSINESS.phone1Tel}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 bg-black/80 hover:bg-[#FFA048] hover:text-[#0A0C13] border-2 border-[#FFA048] text-[#FFA048] font-black text-xs xs:text-sm px-7 sm:px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap shadow-xl shadow-black/70 backdrop-blur-md"
              >
                <Phone className="w-4 h-4 xs:w-5 xs:h-5 shrink-0" strokeWidth={2.2} />
                <span>Call Now</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Desktop Only Official Gold ISO 9001 Ribbon Medal */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center w-full mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 3.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center group cursor-pointer"
              onClick={() => {
                if (onOpenCertificate) {
                  onOpenCertificate();
                } else {
                  document.querySelector('#iso-certificate')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              title="Click to view official ISO 9001 Certification"
            >
              {/* Radiant Warm Gold Atmospheric Halo */}
              <div className="absolute -inset-6 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,160,72,0.45)_0%,rgba(255,98,0,0.18)_45%,transparent_70%)] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Gentle Luxury Float Physics on the Gold Medal */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                className="relative z-10 flex flex-col items-center"
              >
                <img
                  src="/ISO/iso-9001-badge.png"
                  alt="Official Certified ISO 9001 Quality System Medal"
                  className="w-36 h-auto sm:w-44 md:w-48 lg:w-56 select-none drop-shadow-[0_16px_28px_rgba(0,0,0,0.85)] drop-shadow-[0_0_24px_rgba(255,160,72,0.45)] transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = '/ISO/iso02.png';
                  }}
                />

                {/* Elegant Verified Accreditation Pill underneath */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-2 sm:mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12141F]/90 border border-gold/50 text-gold text-xs font-semibold backdrop-blur-xl shadow-xl shadow-black/70 group-hover:bg-gold group-hover:text-obsidian transition-all duration-300"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ISO 9001:2015 Certified Workshop</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
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


