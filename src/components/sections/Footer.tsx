import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/data/content';

export default function Footer() {
  return (
    <footer className="relative bg-[#13151F] border-t border-white/12 pt-14 pb-20 lg:pb-12 overflow-hidden">
      {/* Top gold horizon line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src="/euroexpert-logo.webp"
                alt="Euro Experts Auto Services LLC"
                className="h-10 sm:h-11 lg:h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/euroexpert-logo.png';
                }}
              />
            </div>
            <p className="text-sm text-[#B2B8C8] font-sans leading-relaxed max-w-md mt-4">
              Premier automotive service and repair workshop in Dubai. Certified master technicians,
              genuine OEM parts, and dealership-grade diagnostic care.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/18 flex items-center justify-center hover:bg-gold hover:border-gold text-white hover:text-black transition-all shadow-md"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-gold hover:text-black transition-colors" strokeWidth={1.75} />
              </a>
              <a
                href={`tel:${BUSINESS.phone1Tel}`}
                className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/18 flex items-center justify-center hover:bg-gold hover:border-gold text-white hover:text-black transition-all shadow-md"
                aria-label="Call"
              >
                <Phone className="w-4 h-4 text-gold hover:text-black transition-colors" strokeWidth={1.75} />
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/18 flex items-center justify-center hover:bg-gold hover:border-gold text-white hover:text-black transition-all shadow-md"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-gold hover:text-black transition-colors" strokeWidth={1.75} />
              </a>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/18 flex items-center justify-center hover:bg-gold hover:border-gold text-white hover:text-black transition-all shadow-md"
                aria-label="Location"
              >
                <MapPin className="w-4 h-4 text-gold hover:text-black transition-colors" strokeWidth={1.75} />
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
                    className="text-sm font-sans text-[#B2B8C8] hover:text-gold transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm font-sans text-[#B2B8C8] hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  Book Service
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow mb-5">Contact</h4>
            <ul className="space-y-3 text-sm font-sans text-[#B2B8C8]">
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
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" strokeWidth={1.75} />
                <span>{BUSINESS.hoursWeek}<br />{BUSINESS.hoursSun}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9AA2B4] font-sans text-center sm:text-left">
            © 2026 Euro Experts Auto Services LLC. All Rights Reserved.
          </p>
          <p className="text-xs text-[#828A9C] font-sans">
            Specialist Luxury & Performance Auto Workshop · Al Quoz, Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}
