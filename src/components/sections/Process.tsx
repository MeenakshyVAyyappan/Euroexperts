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
      {/* Background ambient lighting */}
      <motion.div
        animate={{
          opacity: [0.06, 0.14, 0.06],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[160px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionTitle
          eyebrow="Our Process"
          title="From Booking to Handover"
          subtitle="A clear, transparent process designed around your time and your vehicle's wellbeing."
          center
        />

        <div ref={ref} className="relative mt-16">
          {/* Track line — background */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 lg:-translate-x-1/2" />

          {/* Animated gold line */}
          <motion.div
            className="absolute left-6 lg:left-1/2 top-0 w-px bg-gold-gradient shadow-lg shadow-gold/50 lg:-translate-x-1/2"
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
                  {/* Glowing Dot on the line */}
                  <div className="absolute left-6 lg:left-1/2 top-3 w-5 h-5 rounded-full bg-gold-gradient border-2 border-obsidian lg:-translate-x-1/2 z-10 shadow-lg shadow-gold/60 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-obsidian animate-ping" />
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 pl-16 lg:pl-0 ${i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16'}`}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.015 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="group glass rounded-2xl p-6 lg:p-8 inline-block w-full border border-white/10 hover:border-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/15 bg-obsidian-light/60 backdrop-blur-xl"
                    >
                      <span className="font-serif text-3xl lg:text-4xl text-gold-gradient font-bold block mb-2 transition-transform duration-300 group-hover:scale-105 origin-left">
                        {step.num}
                      </span>
                      <h3 className="font-serif text-2xl text-ivory mb-2 font-semibold group-hover:text-gold-gradient transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted font-sans leading-relaxed">
                        {step.text}
                      </p>
                    </motion.div>
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
