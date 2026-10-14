import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, ExternalLink, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';

export interface ISOCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateSrc?: string;
}

export default function ISOCertificateModal({
  isOpen,
  onClose,
  certificateSrc = '/ISO/cert.png',
}: ISOCertificateModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Close on Escape key & prevent body scrolling when open
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

  // Reset zoom on modal open/close
  useEffect(() => {
    if (isOpen) {
      setIsZoomed(false);
      setImgError(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with dark blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative z-10 w-full max-w-4xl bg-[#141620] border border-gold/40 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/90 overflow-hidden flex flex-col my-auto max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10 bg-[#1A1D2A]/90">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
                      ISO 9001:2015 Official Certificate
                    </h3>
                    <span className="hidden xs:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-[#A8B0C5] font-sans">
                    Euro Experts Auto Services LLC · Quality Management System
                  </p>
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="hidden sm:inline-flex items-center gap-1 text-xs text-white/80 hover:text-gold bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  title={isZoomed ? 'Zoom out' : 'Zoom in'}
                >
                  {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                  <span>{isZoomed ? 'Reset View' : 'Zoom In'}</span>
                </button>

                <a
                  href={certificateSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 text-xs text-white/80 hover:text-gold bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 px-3 py-1.5 rounded-lg transition-colors"
                  title="Open certificate in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Full Size</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Certificate Viewport */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 bg-radial-gradient flex items-center justify-center min-h-[360px] sm:min-h-[460px]">
              <div
                className={`relative transition-all duration-300 rounded-xl overflow-hidden shadow-2xl border border-gold/30 bg-black/60 max-w-full ${
                  isZoomed ? 'cursor-zoom-out scale-[1.25] sm:scale-[1.35] my-10' : 'cursor-zoom-in max-h-[65vh]'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                {!imgLoaded && !imgError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#171924] min-h-[300px] min-w-[280px]">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                      <p className="text-xs text-[#B4BACB]">Loading official certificate...</p>
                    </div>
                  </div>
                )}

                <img
                  src={certificateSrc}
                  alt="Official ISO 9001:2015 Certificate - Euro Experts Auto Services LLC Dubai"
                  className={`w-auto object-contain max-h-[65vh] select-none transition-opacity duration-300 ${
                    imgLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => {
                    setImgLoaded(true);
                    setImgError(true);
                  }}
                />

                {imgError && (
                  <div className="p-8 text-center bg-[#181B28] max-w-md">
                    <ShieldCheck className="w-12 h-12 text-gold mx-auto mb-3" />
                    <h4 className="text-white font-serif text-lg font-bold mb-2">
                      ISO 9001:2015 Certificate Document
                    </h4>
                    <p className="text-xs text-[#BAC0D2] mb-4 leading-relaxed">
                      Please ensure the certificate image is placed at{' '}
                      <code className="text-gold bg-black/50 px-2 py-0.5 rounded">public/ISO/cert.png</code>.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer: Trust details & Quick Actions */}
            <div className="px-5 sm:px-7 py-3.5 bg-[#171925] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3 text-[#A8B0C5] text-center sm:text-left">
                <span className="text-gold font-semibold">Standard: ISO 9001:2015</span>
                <span className="hidden sm:inline text-white/30">|</span>
                <span className="hidden sm:inline">Scope: Luxury Automotive Service & Diagnostics</span>
                <span className="hidden sm:inline text-white/30">|</span>
                <span className="hidden md:inline">Dubai, UAE</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <a
                  href={certificateSrc}
                  download="EuroExperts_ISO_9001_Certificate.png"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] border border-white/12 text-white/90 hover:text-white transition-all text-xs"
                >
                  <Download className="w-3.5 h-3.5 text-gold" />
                  <span>Download</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-1.5 rounded-lg bg-gold-gradient text-obsidian font-bold hover:shadow-lg hover:shadow-gold/25 transition-all text-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
