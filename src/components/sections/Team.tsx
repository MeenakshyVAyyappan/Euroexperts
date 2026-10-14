import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  ShieldCheck,
  Award,
  Wrench,
  Cpu,
  CheckCircle2,
  Maximize2,
  X,
  MessageCircle,
  Phone,
  Sparkles,
} from 'lucide-react';
import { BUSINESS } from '@/data/content';
import { SectionTitle, Reveal } from '@/components/ui/Primitives';

const TEAM_PILLARS = [
  {
    icon: Wrench,
    title: 'ASE & Factory-Trained Master Mechanics',
    desc: 'Specialized diagnostic and mechanical technicians certified for high-output American V8s, twin-turbos, and Japanese luxury powertrains.',
  },
  {
    icon: Cpu,
    title: 'Dedicated Diagnostic Engineers',
    desc: 'Equipped with official GM MDI 2, Ford FDRS, Mopar wiTECH, and Toyota/Lexus Techstream for dealer-level module coding and calibration.',
  },
  {
    icon: ShieldCheck,
    title: '100% In-House Atelier — Zero Outsourcing',
    desc: 'From mechanical rebuilds and electrical repairs to precision bodywork and paint, every job is performed under our own roof in Al Quoz.',
  },
  {
    icon: Award,
    title: 'Multi-Point Quality Control Sign-Off',
    desc: 'Lead workshop foreman inspects and road-tests every vehicle against strict ISO 9001:2015 torque specs and safety standards before handover.',
  },
];

export default function Team() {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  return (
    <section id="team" className="relative py-16 lg:py-24 bg-[#12141F] overflow-hidden border-t border-white/10">
      {/* Studio ambient gold & amber lighting */}
      <div className="absolute top-0 left-1/3 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(255,160,72,0.12)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[550px] h-[350px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,98,0,0.08)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 lg:mb-12">
          <SectionTitle
            eyebrow="Our Certified Team • Al Quoz Atelier"
            title="The Masters Behind the Craft"
            subtitle="Meet our certified master technicians, diagnostic engineers, and automotive specialists who bring dealership-level precision and passion to every vehicle."
          />

          <Reveal delay={0.2}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] border border-gold/40 backdrop-blur-md text-gold text-xs font-bold shrink-0 shadow-lg">
              <Users className="w-4 h-4 text-gold" />
              <span>Certified In-House Specialists Under One Roof</span>
            </div>
          </Reveal>
        </div>

        {/* Panoramic Team Photograph Showcase */}
        <Reveal delay={0.15}>
          <div className="relative group rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 bg-gradient-to-b from-[#232738] via-[#161824] to-[#10121C] border border-gold/35 hover:border-gold/70 shadow-2xl shadow-black/80 transition-all duration-500">
            {/* Metallic brass corner accents */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-gold/70 rounded-tl pointer-events-none" />
            <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-gold/70 rounded-tr pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-gold/70 rounded-bl pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-gold/70 rounded-br pointer-events-none" />

            {/* Image Container with smooth aspect ratio */}
            <div
              onClick={() => setIsLightBoxOpen(true)}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2.1/1] bg-[#0A0C13] cursor-pointer group/img"
            >
              <img
                src="/Team/euroteam.png"
                alt="Euro Experts Auto Services full workshop team including leadership, service advisors, and master technicians in Al Quoz, Dubai"
                loading="lazy"
                className="w-full h-full object-cover object-center brightness-[1.03] contrast-[1.02] transition-transform duration-700 group-hover/img:scale-[1.025]"
              />

              {/* Gradient edge shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />

              {/* Top Status Tags */}
              <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 right-2.5 sm:right-4 flex items-center justify-between gap-2 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-semibold shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline">Al Quoz Industrial Area 4 · Dubai Atelier</span>
                  <span className="sm:hidden">Al Quoz · Dubai Atelier</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold/50 text-gold text-[10px] sm:text-[11px] font-bold shadow-lg">
                  <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="hidden sm:inline">ISO 9001:2015 Certified Team</span>
                  <span className="sm:hidden">ISO 9001 Certified</span>
                </span>
              </div>

              {/* Hover Click to Enlarge Badge */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-obsidian font-bold text-xs uppercase tracking-wider shadow-2xl shadow-gold/50 transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                  <Maximize2 className="w-4 h-4" />
                  Click to View Full Team Photo
                </span>
              </div>

              {/* Bottom Panoramic Caption */}
              <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 sm:gap-2 pointer-events-none">
                <div>
                  <div className="text-xs sm:text-sm font-serif font-bold text-white drop-shadow-md">
                    Euro Experts Leadership, Service Advisors & Master Technicians
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#BAC0D2] font-sans">
                    Dedicated to American Luxury & Japanese Vehicle Excellence
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] sm:text-[11px] text-white/90 self-start sm:self-auto">
                  <Sparkles className="w-3 h-3 text-gold" />
                  <span>Tap to Enlarge</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 4 Value & Capability Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 lg:mt-10">
          {TEAM_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={0.1 * idx}>
                <div className="h-full p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold mb-3.5 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1.5 font-serif group-hover:text-gold transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[#A2A9BC] text-xs sm:text-sm leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal for Team Photo Inspection */}
      <AnimatePresence>
        {isLightBoxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightBoxOpen(false)}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
          >
            {/* Top Bar with Close */}
            <div className="w-full max-w-6xl flex items-center justify-between pb-3 text-white border-b border-white/15">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold" />
                <span className="font-serif font-bold text-sm sm:text-base">
                  Euro Experts Auto Services — Full Team
                </span>
              </div>
              <button
                onClick={() => setIsLightBoxOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Team Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Res Photo Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full my-auto rounded-2xl overflow-hidden border border-gold/40 shadow-2xl mt-4"
            >
              <img
                src="/Team/euroteam.png"
                alt="Euro Experts Auto Services complete team"
                className="w-full h-auto max-h-[80vh] object-contain bg-[#0D0F17]"
              />
            </motion.div>

            {/* Bottom Modal Actions */}
            <div className="w-full max-w-6xl flex flex-wrap items-center justify-between gap-3 pt-3">
              <span className="text-xs text-white/70">
                Al Quoz Industrial Area 4, Dubai • Dealership-level specialists
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat with Service Team</span>
                </a>
                <button
                  onClick={() => setIsLightBoxOpen(false)}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
