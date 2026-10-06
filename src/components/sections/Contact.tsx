import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS } from '@/data/content';
import { SectionTitle, Reveal } from '@/components/ui/Primitives';

export default function Contact() {
  const contactItems = [
    {
      icon: Phone,
      label: 'Call Us',
      lines: [BUSINESS.phone1, BUSINESS.phone2],
      hrefs: [`tel:${BUSINESS.phone1Tel}`, `tel:${BUSINESS.phone2Tel}`],
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      lines: [BUSINESS.phone1, '+971 54 289 6979 (Quick Chat)'],
      hrefs: [BUSINESS.whatsappLink, BUSINESS.whatsappSecondaryLink],
      external: true,
    },
    {
      icon: Mail,
      label: 'Email',
      lines: [BUSINESS.email],
      hrefs: [`mailto:${BUSINESS.email}`],
    },
  ];

  return (
    <section id="contact" className="relative py-12 lg:py-16 bg-[#181B26] overflow-hidden">
      {/* Studio ambient lighting and warm radiant light pools */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(255,160,72,0.15)_0%,transparent_70%)] blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionTitle
          eyebrow="Visit Us"
          title="Find Us in Al Quoz"
          subtitle="Conveniently located in Al Quoz Industrial Area 4, Dubai — with easy access from Sheikh Zayed Road and Al Khail Road."
          center
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {/* Left: contact details */}
          <div className="space-y-6">
            {/* Address card */}
            <Reveal>
              <div className="glass-card rounded-2xl p-7 border border-white/18 shadow-xl shadow-black/20">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/18 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white mb-2 font-bold">Address</h3>
                    <p className="text-sm text-[#B2B8C8] font-sans leading-relaxed">{BUSINESS.address}</p>
                    <a
                      href={BUSINESS.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-3 text-xs font-sans text-gold font-semibold border-b border-gold/40 hover:border-gold transition-all pb-0.5"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Phone, WhatsApp, Email */}
            {contactItems.map((item, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <div className="glass-card rounded-2xl p-7 border border-white/18 shadow-xl shadow-black/20">
                  <div className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/18 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-gold" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-white mb-2 font-bold">{item.label}</h3>
                      {item.lines.map((line, j) => (
                        <a
                          key={j}
                          href={item.hrefs[j]}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="block text-sm text-[#B2B8C8] font-sans hover:text-gold transition-colors duration-300"
                        >
                          {line}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Hours */}
            <Reveal delay={0.4}>
              <div className="glass-card rounded-2xl p-7 border border-white/18 shadow-xl shadow-black/20">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/18 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white mb-2 font-bold">Opening Hours</h3>
                    <p className="text-sm text-[#B2B8C8] font-sans">{BUSINESS.hoursWeek}</p>
                    <p className="text-sm text-[#9299AA] font-sans mt-1">{BUSINESS.hoursSun}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: map */}
          <Reveal delay={0.2}>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/18 shadow-2xl">
              <iframe
                title="Euro Experts Auto Services Location"
                src={BUSINESS.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.90) hue-rotate(180deg) brightness(0.95) contrast(0.95)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
