import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/data/content';

export default function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-gold/10 pt-16 pb-28 lg:pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="relative w-11 h-11 rounded-full glass border border-brand-orange/30 flex items-center justify-center p-1.5 shadow-sm shadow-brand-orange/15 shrink-0">
                <img
                  src="/favicon.webp"
                  alt="Euro Experts Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_1px_4px_rgba(255,90,31,0.35)]"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl text-ivory tracking-tight">
                  Nippon <span className="text-gold-gradient">&</span> Americana Auto
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted mt-1.5">
                  A division of <span className="text-brand-orange font-semibold">EURO EXPERTS AUTO SERVICES LLC</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-muted font-sans leading-relaxed max-w-md mt-4">
              Specialists in premium Japanese and American vehicles. Certified technicians,
              genuine parts, and dealership-level care — in the heart of Dubai.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold/10 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-gold" strokeWidth={1.5} />
              </a>
              <a
                href={`tel:${BUSINESS.phone1Tel}`}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold/10 transition-colors"
                aria-label="Call"
              >
                <Phone className="w-4 h-4 text-gold" strokeWidth={1.5} />
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-gold" strokeWidth={1.5} />
              </a>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold/10 transition-colors"
                aria-label="Location"
              >
                <MapPin className="w-4 h-4 text-gold" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="eyebrow mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm font-sans text-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm font-sans text-muted hover:text-gold transition-colors duration-300"
                >
                  Book Service
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow mb-5">Contact</h4>
            <ul className="space-y-3 text-sm font-sans text-muted">
              <li className="leading-relaxed">{BUSINESS.address}</li>
              <li>
                <a href={`tel:${BUSINESS.phone1Tel}`} className="hover:text-gold transition-colors">
                  {BUSINESS.phone1}
                </a>
              </li>
              <li>
                <a href={`tel:${BUSINESS.phone2Tel}`} className="hover:text-gold transition-colors">
                  {BUSINESS.phone2}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-gold transition-colors">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-2">
                <Clock className="w-4 h-4 text-gold/50 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>{BUSINESS.hoursWeek}<br />{BUSINESS.hoursSun}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/60 font-sans text-center sm:text-left">
            © 2026 Euro Experts Auto Services LLC. All Rights Reserved.
          </p>
          <p className="text-xs text-muted/40 font-sans">
            Premium Japanese & American Vehicle Service · Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}
