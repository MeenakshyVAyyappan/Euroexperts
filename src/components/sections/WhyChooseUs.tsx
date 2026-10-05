import { motion } from 'framer-motion';
import { BadgeCheck, PackageCheck, ScanLine, ReceiptText, MapPin, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US, STATS, BUSINESS } from '@/data/content';
import { SectionTitle, Reveal } from '@/components/ui/Primitives';

const iconMap: Record<string, typeof BadgeCheck> = {
  BadgeCheck, PackageCheck, ScanLine, ReceiptText, MapPin,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: image with floating stat card */}
          <Reveal>
            <div className="relative">
              {/* Main workshop image */}
              <div className="relative rounded-2xl overflow-hidden glass border border-white/10 aspect-[4/5] lg:aspect-[3/4] shadow-2xl group">
                <img
                  src="https://images.pexels.com/photos/6720502/pexels-photo-6720502.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Technician using diagnostic computer in premium auto workshop"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent" />
              </div>

              {/* Floating luxury stats card with gentle breathing float animation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-2 lg:-right-8 glass rounded-2xl p-6 shadow-2xl border border-gold/30 bg-obsidian/90 backdrop-blur-xl"
              >
                <div className="grid grid-cols-2 gap-6">
                  {STATS.slice(0, 2).map((stat) => (
                    <div key={stat.label}>
                      <div className="font-serif text-3xl font-bold text-gold-gradient tracking-tight">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-muted/90 font-sans mt-1 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative gold frame line with subtle pulse */}
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl pointer-events-none shadow-sm shadow-gold/20" />
            </div>
          </Reveal>

          {/* Right: content */}
          <div>
            <SectionTitle
              eyebrow="Why Choose Us"
              title="Craftsmanship Without Compromise"
              subtitle="We are not a general garage. We are specialists in premium Japanese and American vehicles — and it shows in every detail."
            />

            <div className="space-y-6">
              {WHY_CHOOSE_US.map((item, i) => {
                const Icon = iconMap[item.icon] || BadgeCheck;
                return (
                  <Reveal key={i} delay={i * 0.08}>
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.25 }}
                      className="group flex gap-5 items-start p-3 rounded-2xl transition-colors hover:bg-white/[0.02]"
                    >
                      <div className="w-12 h-12 rounded-xl glass border border-white/10 group-hover:border-gold/50 flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-all duration-300 shadow-lg">
                        <Icon className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.7} />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-ivory mb-1.5 font-semibold group-hover:text-gold-gradient transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted font-sans leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}

              <Reveal delay={0.3}>
                <a
                  href={BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 mt-4 bg-gold-gradient text-obsidian font-semibold text-sm px-8 py-4 rounded-full shadow-xl shadow-gold/25 hover:shadow-2xl hover:shadow-gold/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shimmer-line"
                >
                  <span>Book Your Service</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
