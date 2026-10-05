import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-obsidian"
          exit={{
            clipPath: 'inset(0 0 50% 0)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="relative flex flex-col items-center">
            {/* Ambient orange glow behind the logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.9, 1.15, 1], opacity: [0.3, 0.65, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse' }}
              className="absolute -top-6 w-36 h-36 rounded-full bg-brand-orange/20 blur-2xl pointer-events-none"
            />

            {/* Emblem with rotating technical gear ring */}
            <div className="relative w-28 h-28 flex items-center justify-center mb-6">
              {/* Outer dashed measurement ring */}
              <motion.svg
                viewBox="0 0 120 120"
                className="absolute inset-0 w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
              >
                <circle
                  cx="60"
                  cy="60"
                  r="56"
                  stroke="rgba(255, 90, 31, 0.25)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  fill="none"
                />
              </motion.svg>

              {/* Animated drawing circle */}
              <svg viewBox="0 0 120 120" className="absolute inset-0 w-full h-full -rotate-90">
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="url(#brandGrad)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: 'easeInOut' }}
                />
                <defs>
                  <linearGradient id="brandGrad" x1="0" y1="0" x2="120" y2="120">
                    <stop offset="0%" stopColor="#FFA048" />
                    <stop offset="50%" stopColor="#FF6200" />
                    <stop offset="100%" stopColor="#D84500" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Euro Experts Iconic Mark */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="relative z-10 w-16 h-16 flex items-center justify-center p-2 rounded-full glass border border-brand-orange/30 shadow-lg shadow-brand-orange/10"
              >
                <img
                  src="/favicon.webp"
                  alt="Euro Experts"
                  className="w-12 h-12 object-contain filter drop-shadow-[0_2px_8px_rgba(255,90,31,0.4)]"
                />
              </motion.div>
            </div>

            {/* Brand Title */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="font-serif text-2xl lg:text-3xl tracking-wide text-ivory">
                EURO <span className="text-brand-orange font-semibold">EXPERTS</span>
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted font-sans mt-1">
                Auto Services LLC · Dubai
              </div>
            </motion.div>

            <motion.div
              className="mt-3 text-[9px] text-gold/80 font-sans tracking-[0.25em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              Nippon & Americana Division
            </motion.div>

            {/* Loading bar */}
            <div className="mt-7 h-0.5 w-48 bg-charcoal-light rounded-full overflow-hidden border border-white/5">
              <motion.div
                className="h-full bg-gold-gradient"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.3, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
