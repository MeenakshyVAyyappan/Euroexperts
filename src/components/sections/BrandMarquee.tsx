import { motion } from 'framer-motion';

const BRAND_NAMES = [
  'Lexus', 'Toyota', 'Infiniti', 'Nissan', 'Acura', 'Honda',
  'Cadillac', 'Lincoln', 'GMC', 'Ford', 'Chevrolet', 'Jeep', 'Dodge',
];

export default function BrandMarquee() {
  return (
    <div className="py-10 overflow-hidden border-b border-gold/10 bg-obsidian">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        className="flex items-center gap-16 whitespace-nowrap"
      >
        {[...BRAND_NAMES, ...BRAND_NAMES].map((name, i) => (
          <span
            key={i}
            className="font-serif text-3xl lg:text-4xl text-ivory/30 hover:text-gold/70 transition-colors duration-500 cursor-default tracking-wide"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
