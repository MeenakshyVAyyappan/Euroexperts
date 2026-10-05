import { BadgeCheck, PackageCheck, ScanLine, ReceiptText, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US, STATS, BUSINESS } from '@/data/content';
import { SectionTitle, Reveal } from '@/components/ui/Primitives';

const iconMap: Record<string, typeof BadgeCheck> = {
  BadgeCheck, PackageCheck, ScanLine, ReceiptText, MapPin,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: image */}
          <Reveal>
            <div className="relative">
              {/* Main image */}
              {/* REPLACE: Premium workshop interior — technician using diagnostic equipment on a Lexus LX, clean and well-lit */}
              <div className="relative rounded-2xl overflow-hidden glass aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src="https://images.pexels.com/photos/6720502/pexels-photo-6720502.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Technician using diagnostic computer in premium auto workshop"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-2 lg:-right-8 glass rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  {STATS.slice(0, 2).map((stat) => (
                    <div key={stat.label}>
                      <div className="font-serif text-3xl text-gold-gradient">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-muted mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative gold frame line */}
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t border-l border-gold/20 rounded-tl-2xl pointer-events-none" />
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
                    <div className="group flex gap-5 items-start">
                      <div className="w-11 h-11 rounded-full glass flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors duration-500">
                        <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-ivory mb-1.5">{item.title}</h3>
                        <p className="text-sm text-muted font-sans leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}

              <Reveal delay={0.3}>
                <a
                  href={BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-gold-gradient text-obsidian font-semibold text-sm px-7 py-3.5 rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 shimmer-line"
                >
                  Book Your Service
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
