import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, PackageCheck, ScanLine, ReceiptText, ArrowRight, ShieldCheck } from 'lucide-react';
import { TRUST_ITEMS } from '@/data/content';
import { Reveal } from '@/components/ui/Primitives';

interface TrustBarProps {
  onOpenCertificate?: () => void;
}

const iconMap: Record<string, typeof BadgeCheck> = {
  BadgeCheck,
  PackageCheck,
  ScanLine,
  ReceiptText,
};

function Counter({ value, suffix, decimals = 0, isStatic, staticText }: {
  value: number; suffix: string; decimals?: number; isStatic?: boolean; staticText?: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  if (isStatic && staticText) {
    return <span ref={ref}>{staticText}</span>;
  }

  return (
    <span ref={ref}>
      {display.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

export default function TrustBar({ onOpenCertificate }: TrustBarProps = {}) {
  return (
    <section className="relative py-10 lg:py-12 border-y border-white/12 bg-[#181A26]/90 backdrop-blur-2xl overflow-hidden">
      {/* Studio ambient illumination */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,160,72,0.12)_0%,rgba(255,98,0,0.04)_45%,transparent_75%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = iconMap[item.icon] || BadgeCheck;
            return (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col items-center text-center lg:flex-row lg:items-center lg:gap-4 lg:text-left p-3.5 rounded-2xl transition-all duration-300 hover:bg-white/[0.05]"
                >
                  <div className="relative w-14 h-14 rounded-2xl glass-card border border-white/18 group-hover:border-gold/60 flex items-center justify-center mb-3 lg:mb-0 shrink-0 shadow-lg shadow-black/30 group-hover:shadow-gold/25 transition-all duration-500">
                    <Icon className="w-6 h-6 text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.7} />
                    <span className="absolute inset-0 rounded-2xl bg-gold/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl lg:text-3xl font-bold text-gold-gradient tracking-tight">
                      <Counter
                        value={item.value}
                        suffix={item.suffix}
                        isStatic={item.isStatic}
                        staticText={item.staticText}
                      />
                    </div>
                    <div className="text-xs lg:text-sm text-[#B4B9C8] font-sans uppercase tracking-wider mt-1 font-semibold group-hover:text-white transition-colors">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* ISO 9001:2015 Verified Accreditation Bar */}
        <Reveal delay={0.4}>
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs text-[#BAC0D2] font-sans">
                <span className="text-white font-medium">Officially Audited & Certified: </span>
                <span className="text-gold font-bold">ISO 9001:2015 Quality Management Systems</span>
                <span className="hidden md:inline text-white/50"> · Facility in Al Quoz, Dubai</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                if (onOpenCertificate) {
                  onOpenCertificate();
                } else {
                  document.querySelector('#iso-certificate')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] hover:bg-gold hover:text-obsidian border border-gold/40 text-gold text-xs font-semibold transition-all duration-300 cursor-pointer group"
            >
              <span>View Official Certificate</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
