import { motion } from 'framer-motion';

const BRAND_NAMES = [
  'Cadillac', 'Lincoln', 'GMC', 'Ford', 'Chevrolet', 'Jeep', 'Dodge',
  'Lexus', 'Toyota', 'Infiniti', 'Nissan', 'Acura', 'Honda',
];

export default function BrandMarquee() {
  return (
    <div className="relative py-6 lg:py-7 overflow-hidden border-b border-white/10 bg-[#161824]">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/8 to-transparent pointer-events-none" />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        className="flex items-center gap-16 whitespace-nowrap relative z-10"
      >
        {[...BRAND_NAMES, ...BRAND_NAMES].map((name, i) => (
          <span
            key={i}
            className="font-serif text-3xl lg:text-4xl text-white/50 hover:text-gold transition-colors duration-300 cursor-default tracking-wider"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
