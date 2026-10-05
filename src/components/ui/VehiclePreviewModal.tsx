import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS } from '@/data/content';

export interface VehiclePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  brand: string;
  model: string;
  image: string;
  region: 'japan' | 'america';
}

export function VehiclePreviewModal({
  isOpen,
  onClose,
  brand,
  model,
  image,
  region,
}: VehiclePreviewModalProps) {
  // Close on Escape key and lock background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const whatsappMessage = encodeURIComponent(
    `Hello Euro Experts, I would like to enquire about servicing my ${brand} ${model}.`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with luxury blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-obsidian-light border border-gold/40 rounded-3xl overflow-hidden shadow-2xl shadow-gold/20 z-10 my-auto"
          >
            {/* Ambient Top Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-40 bg-gold/20 rounded-full blur-[80px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              type="button"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-obsidian/80 border border-white/20 hover:border-gold/60 text-ivory/80 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-md cursor-pointer group"
              aria-label="Close modal"
            >
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Vehicle Image Banner */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian">
              <motion.img
                key={image}
                src={image}
                alt={`${brand} ${model}`}
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full h-full object-cover object-center"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-light via-transparent to-black/40" />

              {/* Origin Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-sans font-semibold tracking-wider uppercase bg-obsidian/85 text-gold border border-gold/30 backdrop-blur-md shadow-md">
                  {region === 'japan' ? '🇯🇵 Japanese Excellence' : '🇺🇸 American Luxury & Power'}
                </span>
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-3 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian/90 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-sans text-ivory/90 font-medium">
                  Euro Experts Certified Service Ready
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 relative z-10">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs uppercase tracking-widest font-sans text-gold/90 font-semibold">
                  {brand} Official Support
                </span>
                <span className="text-xs text-muted font-sans">
                  Dubai Al Quoz Workshop
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-ivory tracking-wide mb-3">
                {brand} <span className="text-gold-gradient">{model}</span>
              </h3>

              <p className="text-sm font-sans text-ivory/70 leading-relaxed mb-6">
                Specialized dealer-level computerized diagnostics, suspension tuning, precision transmission maintenance, and genuine OEM parts for your {brand} {model}.
              </p>

              {/* Key Service Highlights */}
              <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs font-sans text-ivory/80">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-obsidian/60 border border-white/5">
                  <span className="text-gold text-sm">✦</span>
                  <span>OEM Diagnostics</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-obsidian/60 border border-white/5">
                  <span className="text-gold text-sm">✦</span>
                  <span>Suspension & Steering</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-obsidian/60 border border-white/5">
                  <span className="text-gold text-sm">✦</span>
                  <span>Engine & Transmission</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-obsidian/60 border border-white/5">
                  <span className="text-gold text-sm">✦</span>
                  <span>Gulf-Spec Cooling</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`${BUSINESS.whatsappLink}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold-gradient text-obsidian font-sans font-semibold text-sm shadow-lg shadow-gold/25 hover:shadow-gold/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS.phoneClean}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/20 hover:border-gold/50 bg-obsidian/80 text-ivory hover:text-white text-sm font-sans font-medium transition-all duration-300 hover:bg-obsidian"
                >
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call {BUSINESS.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
