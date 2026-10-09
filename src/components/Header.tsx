import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/data/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 3, duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'glass-dark border-b border-white/10 py-3 shadow-xl'
            : 'bg-gradient-to-b from-[#0F1118]/90 via-[#0F1118]/40 to-transparent py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group py-1"
            aria-label="Euro Experts Auto Services"
          >
            <img
              src="/euroexpert-logo.webp"
              alt="Euro Experts Auto Services"
              className="h-10 sm:h-11 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = '/euroexpert-logo.png';
              }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8 px-6 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-lg shadow-black/20">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xs xl:text-sm font-sans text-white/90 hover:text-gold transition-colors duration-300 relative group font-medium cursor-pointer tracking-wide"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Book button + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center bg-gold-gradient text-obsidian font-bold text-xs px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 shimmer-line"
            >
              Book Service
            </a>
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#161824]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6"
          >
            <button
              className="absolute top-6 right-6 text-ivory"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-7 h-7" strokeWidth={1.5} />
            </button>
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNavClick(link.href)}
                className="font-serif text-3xl text-ivory hover:text-gold transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gold-gradient text-obsidian font-semibold text-sm px-8 py-3 rounded-full"
            >
              Book Service
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
