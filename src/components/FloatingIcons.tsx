import { useState, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { BUSINESS } from '@/data/content';

interface OfficialFloatingItem {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
  badgeColor: string;
  pulse?: boolean;
  external?: boolean;
}

// ── Official Brand SVGs ──────────────────────────────────────────

function WhatsAppOfficialIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      {/* WhatsApp Green Solid Badge with phone receiver */}
      <circle cx="12" cy="12" r="11" fill="#25D366" />
      <path
        d="M17.5 14.3c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.9-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.2.3-.4.1-.1.2-.2.2-.3 0-.1 0-.3 0-.4s-.5-1.2-.7-1.6c-.2-.4-.4-.3-.5-.3h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.3c.1.1 1.6 2.5 3.9 3.5.5.2 1 .4 1.3.5.6.2 1.1.2 1.5.1.5-.1 1.3-.6 1.5-1.1.2-.6.2-1.1.1-1.2-.1-.2-.3-.2-.5-.3z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function GoogleMapsOfficialIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      {/* Official Google Maps 4-Color Pin */}
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="#EA4335"
      />
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 2.2.9 4.19 2.34 5.62L12 9V2z"
        fill="#4285F4"
      />
      <path
        d="M12 9l-4.66 5.62C8.54 16.03 10.15 17.8 12 20v-7l-2-2 2-2z"
        fill="#FBBC05"
      />
      <path
        d="M12 9v11c1.85-2.2 3.46-3.97 4.66-5.38L12 9z"
        fill="#34A853"
      />
      <circle cx="12" cy="9" r="2.8" fill="#FFFFFF" />
      <circle cx="12" cy="9" r="1.5" fill="#4285F4" />
    </svg>
  );
}

function PhoneOfficialIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="11" fill="#FF6200" />
      <path
        d="M16.5 13.9c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.6-1.5-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.4.7.3 1.2.5 1.7.7.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.3-.4-.4-.7-.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function GmailOfficialIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      {/* Official Gmail 4-Color Envelope */}
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#FFFFFF" />
      <path d="M3 7l9 6 9-6v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" fill="#EA4335" />
      <path d="M3 7l9 6 9-6" stroke="#C5221F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 7v10c0 1.1.9 2 2 2h3V10.5L3 7z" fill="#4285F4" />
      <path d="M21 7v10c0 1.1-.9 2-2 2h-3V10.5L21 7z" fill="#34A853" />
      <path d="M19 5H5a2 2 0 00-2 2v1.5l9 6 9-6V7a2 2 0 00-2-2z" fill="#FBBC05" />
      <path d="M3 7l9 6 9-6" stroke="#EA4335" strokeWidth="1.5" />
    </svg>
  );
}

const items: OfficialFloatingItem[] = [
  {
    id: 'whatsapp',
    label: 'Chat on WhatsApp',
    href: BUSINESS.whatsappLink,
    icon: <WhatsAppOfficialIcon className="w-6 h-6" />,
    badgeColor: 'border-emerald-500/50 hover:border-emerald-400 hover:shadow-emerald-500/30',
    pulse: true,
    external: true,
  },
  {
    id: 'call',
    label: 'Call Workshop',
    href: `tel:${BUSINESS.phone1Tel}`,
    icon: <PhoneOfficialIcon className="w-6 h-6" />,
    badgeColor: 'border-brand-orange/50 hover:border-brand-orange hover:shadow-brand-orange/30',
  },
  {
    id: 'maps',
    label: 'Google Maps Location',
    href: BUSINESS.mapsLink,
    icon: <GoogleMapsOfficialIcon className="w-6 h-6" />,
    badgeColor: 'border-blue-500/50 hover:border-blue-400 hover:shadow-blue-500/30',
    external: true,
  },
  {
    id: 'email',
    label: 'Send Email',
    href: `mailto:${BUSINESS.email}`,
    icon: <GmailOfficialIcon className="w-6 h-6" />,
    badgeColor: 'border-red-500/50 hover:border-red-400 hover:shadow-red-500/30',
  },
];

export default function FloatingIcons() {
  const [hovered, setHovered] = useState<string | null>(null);
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
      {/* Desktop: Left vertical bar with Official Recognizable Icons */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-1">
        {/* Top gold line */}
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/30" />

        <div className="glass rounded-full py-4 px-2.5 flex flex-col items-center gap-3.5 bg-obsidian/80 backdrop-blur-xl border border-white/10 shadow-2xl">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={`relative group flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 hover:scale-110 shadow-lg ${item.badgeColor}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              aria-label={item.label}
              data-cursor="hover"
            >
              {item.pulse && (
                <span
                  className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none"
                  style={{ animationDuration: '2.5s' }}
                />
              )}

              {/* Official Icon */}
              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
                {item.icon}
              </div>

              {/* Tooltip */}
              <AnimatePresence>
                {hovered === item.id && (
                  <motion.span
                    initial={{ opacity: 0, x: -10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-full ml-3 whitespace-nowrap glass px-3.5 py-1.5 rounded-full text-xs font-sans font-medium text-white shadow-xl border border-white/15 bg-obsidian/95 backdrop-blur-md"
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

      {/* Mobile: sticky bottom bar with Official Icons */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-gold/15 bg-obsidian/95 backdrop-blur-xl">
        <div className="flex items-center justify-around px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] gap-3">
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold text-sm px-4 py-2.5 rounded-full shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppOfficialIcon className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:${BUSINESS.phone1Tel}`}
            className="flex-1 flex items-center justify-center gap-2 bg-gold-gradient text-obsidian font-semibold text-sm px-4 py-2.5 rounded-full shadow-lg shadow-gold/20 active:scale-95 transition-transform"
            aria-label="Call now"
          >
            <PhoneOfficialIcon className="w-5 h-5" />
            <span>Call Now</span>
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
