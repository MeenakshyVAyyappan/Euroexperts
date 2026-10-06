import {
  Cog, Settings2, Gauge, Disc, Snowflake, Paintbrush, Droplets, ClipboardCheck,
  MessageCircle, ArrowUpRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES, BUSINESS } from '@/data/content';
import { SectionTitle, Reveal } from '@/components/ui/Primitives';

const iconMap: Record<string, typeof Cog> = {
  Cog, Settings2, Gauge, Disc, Snowflake, Paintbrush, Droplets, ClipboardCheck,
};

export default function Services() {
  return (
    <section id="services" className="relative py-12 lg:py-16 bg-[#151722] overflow-hidden">
      {/* Studio ambient lighting and warm radiant light pools */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(255,160,72,0.16)_0%,transparent_70%)] blur-[90px] pointer-events-none" />
      <motion.div
        animate={{
          opacity: [0.10, 0.20, 0.10],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-gold/12 rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-amber-500/12 rounded-full blur-[160px] pointer-events-none"
      />

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
                <motion.div
                  whileHover={{ y: -8, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="group relative glass-card rounded-2xl p-7 h-full flex flex-col justify-between border border-white/16 hover:border-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20 shadow-xl shadow-black/25 backdrop-blur-xl overflow-hidden"
                  data-cursor="hover"
                >
                  {/* Subtle hover gradient sweep */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Gold corner accent lines */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute top-0 right-0 w-px h-12 bg-gold/60" />
                    <div className="absolute top-0 right-0 h-px w-12 bg-gold/60" />
                  </div>

                  <div>
                    {/* Animated Icon Box */}
                    <div className="relative w-12 h-12 rounded-xl bg-white/[0.08] border border-white/18 group-hover:border-gold/60 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-all duration-500 shadow-lg">
                      <Icon className="w-5 h-5 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" strokeWidth={1.75} />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white mb-3 leading-snug group-hover:text-gold-gradient transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#B2B8C8] font-sans leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Enquire on WhatsApp CTA */}
                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={`${BUSINESS.whatsappLink}?text=${encodeURIComponent(`I'd like to enquire about: ${service.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-gold group-hover:text-white transition-colors duration-300"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current text-gold" />
                      <span>Enquire on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
