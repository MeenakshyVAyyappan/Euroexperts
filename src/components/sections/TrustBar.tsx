import { useEffect, useRef, useState } from 'react';
import { BadgeCheck, PackageCheck, ScanLine, ReceiptText } from 'lucide-react';
import { TRUST_ITEMS } from '@/data/content';
import { Reveal } from '@/components/ui/Primitives';

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

export default function TrustBar() {
  return (
    <section className="relative py-16 lg:py-20 border-y border-gold/10 bg-charcoal/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = iconMap[item.icon] || BadgeCheck;
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:gap-4 lg:text-left">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-3 lg:mb-0 shrink-0">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-serif text-2xl lg:text-3xl text-gold-gradient">
                      <Counter
                        value={item.value}
                        suffix={item.suffix}
                        isStatic={item.isStatic}
                        staticText={item.staticText}
                      />
                    </div>
                    <div className="text-xs lg:text-sm text-muted font-sans uppercase tracking-wider mt-1">
                      {item.label}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
