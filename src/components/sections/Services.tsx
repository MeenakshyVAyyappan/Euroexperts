import {
  Cog, Settings2, Gauge, Disc, Snowflake, Paintbrush, Droplets, ClipboardCheck,
  MessageCircle,
} from 'lucide-react';
import { SERVICES, BUSINESS } from '@/data/content';
import { SectionTitle, Reveal } from '@/components/ui/Primitives';

const iconMap: Record<string, typeof Cog> = {
  Cog, Settings2, Gauge, Disc, Snowflake, Paintbrush, Droplets, ClipboardCheck,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-obsidian overflow-hidden">
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionTitle
          eyebrow="Our Services"
          title="Comprehensive Care for Every Detail"
          subtitle="From precision diagnostics to full mechanical overhaul — every service is carried out by certified technicians using genuine parts."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Cog;
            return (
              <Reveal key={i} delay={(i % 4) * 0.08}>
                <div
                  className="group relative glass rounded-2xl p-7 h-full transition-all duration-500 hover:border-gold/30 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/10"
                  data-cursor="hover"
                >
                  {/* Gold corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-px h-12 bg-gold/40" />
                    <div className="absolute top-0 right-0 h-px w-12 bg-gold/40" />
                  </div>

                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-all duration-500">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-serif text-xl text-ivory mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted font-sans leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Enquire on WhatsApp — revealed on hover */}
                  <a
                    href={`${BUSINESS.whatsappLink}?text=${encodeURIComponent(`I'd like to enquire about: ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-gold/0 group-hover:text-gold/80 transition-all duration-500"
                  >
                    <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Enquire on WhatsApp →
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
