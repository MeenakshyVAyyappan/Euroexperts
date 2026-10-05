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
    <section id="contact" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
              <div className="glass rounded-2xl p-7">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-full glass flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ivory mb-2">Address</h3>
                    <p className="text-sm text-muted font-sans leading-relaxed">{BUSINESS.address}</p>
                    <a
                      href={BUSINESS.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex mt-3 text-xs font-sans text-gold border-b border-gold/30 hover:border-gold transition-all pb-0.5"
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
                <div className="glass rounded-2xl p-7">
                  <div className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-full glass flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-ivory mb-2">{item.label}</h3>
                      {item.lines.map((line, j) => (
                        <a
                          key={j}
                          href={item.hrefs[j]}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className="block text-sm text-muted font-sans hover:text-gold transition-colors duration-300"
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
              <div className="glass rounded-2xl p-7">
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-full glass flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ivory mb-2">Opening Hours</h3>
                    <p className="text-sm text-muted font-sans">{BUSINESS.hoursWeek}</p>
                    <p className="text-sm text-muted/70 font-sans mt-1">{BUSINESS.hoursSun}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: map */}
          <Reveal delay={0.2}>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden glass">
              <iframe
                title="Euro Experts Auto Services Location"
                src={BUSINESS.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.92) hue-rotate(180deg) brightness(0.85) contrast(0.9)' }}
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
