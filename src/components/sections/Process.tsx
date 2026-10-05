import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROCESS_STEPS } from '@/data/content';
import { SectionTitle, Reveal } from '@/components/ui/Primitives';

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.4'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-obsidian overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionTitle
          eyebrow="Our Process"
          title="From Booking to Handover"
          subtitle="A clear, transparent process designed around your time and your vehicle's wellbeing."
          center
        />

        <div ref={ref} className="relative mt-16">
          {/* Track line — background */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-charcoal-light lg:-translate-x-1/2" />

          {/* Animated gold line */}
          <motion.div
            className="absolute left-6 lg:left-1/2 top-0 w-px bg-gold-gradient lg:-translate-x-1/2"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 lg:space-y-16">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={i} delay={0.1}>
                <div
                  className={`relative flex items-start gap-6 lg:gap-0 ${
                    i % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Dot on the line */}
                  <div className="absolute left-6 lg:left-1/2 top-2 w-4 h-4 rounded-full bg-gold border-2 border-obsidian lg:-translate-x-1/2 z-10 shadow-lg shadow-gold/30" />

                  {/* Content card */}
                  <div className={`flex-1 pl-16 lg:pl-0 ${i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="glass rounded-2xl p-6 lg:p-7 inline-block w-full">
                      <span className="font-serif text-3xl text-gold-gradient block mb-2">{step.num}</span>
                      <h3 className="font-serif text-2xl text-ivory mb-2">{step.title}</h3>
                      <p className="text-sm text-muted font-sans leading-relaxed">{step.text}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
