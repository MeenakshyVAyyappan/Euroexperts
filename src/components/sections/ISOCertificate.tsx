import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Maximize2,
  FileCheck,
  Cpu,
  PackageCheck,
  Wrench,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { BUSINESS } from '@/data/content';
import { SectionTitle, Reveal } from '@/components/ui/Primitives';

interface ISOCertificateProps {
  onOpenCertificate: () => void;
  certificateSrc?: string;
}

const ISO_PILLARS = [
  {
    icon: FileCheck,
    title: 'Audited Quality Management System',
    description:
      'Rigorous standard operating procedures covering every phase: from initial computer check-in and multi-point inspection to torque-spec assembly and final quality sign-off.',
  },
  {
    icon: Cpu,
    title: 'Dealer-Grade OEM Diagnostics',
    description:
      'Factory diagnostic suites compliant with General Motors, Ford FDRS, Mopar wiTECH, and Toyota/Lexus Techstream for precise module coding and live-sensor calibration.',
  },
  {
    icon: PackageCheck,
    title: '100% Genuine Parts Traceability',
    description:
      'Full documented chain-of-custody for authentic factory components with manufacturer warranty, ensuring zero counterfeit or substandard parts in your vehicle.',
  },
  {
    icon: Wrench,
    title: 'Certified Master Technicians',
    description:
      'Master mechanics trained to factory protocols for high-output V8 supercharged, twin-turbo, and hybrid powertrains, operating under strict international safety standards.',
  },
];

export default function ISOCertificate({
  onOpenCertificate,
  certificateSrc = '/ISO/cert.png',
}: ISOCertificateProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="iso-certificate" className="relative py-16 lg:py-24 bg-[#141622] overflow-hidden border-t border-white/10">
      {/* Studio ambient gold lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(255,160,72,0.12)_0%,transparent_70%)] blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,98,0,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionTitle
          eyebrow="International Standards • Verified Credibility"
          title="ISO 9001:2015 Certified Workshop"
          subtitle="Euro Experts Auto Services LLC operates under an internationally audited and accredited Quality Management System — delivering dealership-level precision with independent workshop agility."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-12">
          {/* Left Column: Framed Official Certificate Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <Reveal>
              <div className="relative group w-full max-w-md mx-auto">
                {/* Outer decorative ambient glow */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-gold/30 via-amber-500/20 to-gold/30 blur-xl opacity-50 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

                {/* Prestige Certificate Frame */}
                <div
                  onClick={onOpenCertificate}
                  className="relative cursor-pointer rounded-2xl sm:rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-[#25293A] to-[#151722] border-2 border-gold/45 group-hover:border-gold shadow-2xl shadow-black/80 transition-all duration-500 group-hover:scale-[1.015]"
                >
                  {/* Metallic brass corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/70 rounded-tl pointer-events-none" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold/70 rounded-tr pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold/70 rounded-bl pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/70 rounded-br pointer-events-none" />

                  {/* Certificate Image Viewport */}
                  <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#0E1017] flex items-center justify-center border border-white/10 shadow-inner">
                    <img
                      src={certificateSrc}
                      alt="Euro Experts ISO 9001:2015 Certificate"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      onError={() => setImageError(true)}
                    />

                    {imageError && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#151722]">
                        <Award className="w-16 h-16 text-gold mb-3" />
                        <h4 className="text-white font-serif font-bold text-lg">ISO 9001:2015</h4>
                        <p className="text-xs text-[#BAC0D2] mt-1">Official Quality Management Certificate</p>
                      </div>
                    )}

                    {/* Gradient shade & hover inspect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Click to Enlarge badge overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-obsidian font-bold text-xs uppercase tracking-wider shadow-2xl shadow-gold/50 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Maximize2 className="w-4 h-4" />
                        Click to Enlarge
                      </span>
                    </div>

                    {/* Top verified tag */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-gold/40 text-gold text-[11px] font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>ISO 9001:2015</span>
                    </div>

                    {/* Bottom status badge */}
                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#0F111A]/90 backdrop-blur-md border border-white/15 text-[11px]">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Audited & Verified
                      </span>
                      <span className="text-white/80 font-mono text-[10px]">Al Quoz · Dubai</span>
                    </div>
                  </div>

                  {/* Caption underneath the frame */}
                  <div className="mt-3.5 flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-xs text-[#BAC0D2] font-sans">
                        Euro Experts Auto Services LLC
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenCertificate();
                      }}
                      className="text-xs text-gold hover:text-white font-semibold flex items-center gap-1 transition-colors"
                    >
                      Inspect <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Credibility Pillars & Actions (7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {ISO_PILLARS.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <Reveal key={pillar.title} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold/50 transition-all duration-300 hover:bg-white/[0.06] flex flex-col h-full group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mb-3.5 group-hover:scale-110 group-hover:bg-gold group-hover:text-obsidian transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-serif font-bold text-white mb-2 group-hover:text-gold-gradient transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#A8B0C5] leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>

            {/* Bottom highlight banner with CTA buttons */}
            <Reveal delay={0.4}>
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-gold/15 via-[#1E2232] to-gold/10 border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-white font-serif font-bold text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    Official ISO 9001:2015 Registration
                  </div>
                  <p className="text-xs text-[#BAC0D2] font-sans mt-1">
                    Ready to service your vehicle with guaranteed dealership-standard care?
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={onOpenCertificate}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-semibold text-xs transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-gold" />
                    View Certificate
                  </button>

                  <a
                    href={BUSINESS.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-obsidian font-bold text-xs shadow-lg shadow-gold/25 hover:shadow-gold/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Book Service
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
