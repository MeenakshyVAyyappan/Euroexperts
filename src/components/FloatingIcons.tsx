import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail, ArrowUp } from 'lucide-react';
import { BUSINESS } from '@/data/content';

interface FloatingItem {
  icon: typeof Phone;
  label: string;
  href: string;
  pulse?: boolean;
  external?: boolean;
}

const items: FloatingItem[] = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: BUSINESS.whatsappLink,
    pulse: true,
    external: true,
  },
  {
    icon: Phone,
    label: 'Call',
    href: `tel:${BUSINESS.phone1Tel}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    href: BUSINESS.mapsLink,
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    href: `mailto:${BUSINESS.email}`,
  },
];

export default function FloatingIcons() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position to reveal the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Show when scrolled down past 450px
      setShowScrollTop(scrollY > 450);

      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / docHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop: left vertical bar */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-1">
        {/* Top gold line */}
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/30" />

        <div className="glass rounded-full py-4 px-2.5 flex flex-col items-center gap-3">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="relative group flex items-center justify-center w-10 h-10 rounded-full transition-colors"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              aria-label={item.label}
              data-cursor="hover"
            >
              {item.pulse && (
                <span
                  className="absolute inset-0 rounded-full bg-brand-orange/30 animate-ping"
                  style={{ animationDuration: '3s' }}
                />
              )}
              <item.icon
                className="w-5 h-5 text-gold relative z-10 transition-transform group-hover:scale-110"
                strokeWidth={1.5}
              />

              {/* Tooltip */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-full ml-3 whitespace-nowrap glass px-3 py-1.5 rounded-full text-xs font-sans text-ivory"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          ))}
        </div>

        {/* Bottom gold line */}
        <div className="w-px h-12 bg-gradient-to-t from-transparent to-gold/30" />
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-gold/15">
        <div className="flex items-center justify-around px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gold-gradient text-obsidian font-semibold text-sm px-5 py-2.5 rounded-full shimmer-line"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={2} />
            WhatsApp
          </a>
          <a
            href={`tel:${BUSINESS.phone1Tel}`}
            className="flex items-center gap-2 border border-gold/40 text-gold font-semibold text-sm px-5 py-2.5 rounded-full"
            aria-label="Call now"
          >
            <Phone className="w-4 h-4" strokeWidth={2} />
            Call Now
          </a>
        </div>
      </div>

      {/* Scroll to Top Button (Right Side Bottom) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed right-4 lg:right-8 bottom-20 lg:bottom-8 z-50 flex items-center justify-center group"
          >
            <button
              onClick={scrollToTop}
              type="button"
              className="relative w-12 h-12 rounded-full glass border border-gold/40 shadow-xl shadow-gold/20 flex items-center justify-center text-gold hover:text-obsidian hover:bg-gold-gradient transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-md"
              aria-label="Scroll to top"
              title="Scroll to top"
              data-cursor="hover"
            >
              {/* Circular SVG Scroll Progress Indicator */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1" viewBox="0 0 48 48">
                <circle
                  cx="24"
                  cy="24"
                  r="21"
                  className="stroke-white/10"
                  strokeWidth="2.5"
                  fill="none"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="21"
                  className="stroke-gold transition-all duration-150"
                  strokeWidth="2.5"
                  strokeDasharray="132"
                  strokeDashoffset={132 - (132 * scrollProgress) / 100}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              <ArrowUp className="w-5 h-5 relative z-10 transition-transform group-hover:-translate-y-0.5" strokeWidth={2.2} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
