import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JAPANESE_BRANDS, AMERICAN_BRANDS, BRAND_NOTE, BUSINESS, type Brand } from '@/data/content';
import { SectionTitle, Reveal } from '@/components/ui/Primitives';
import { getVehicleImage } from '@/data/brandModelImages';
import { VehiclePreviewModal } from '@/components/ui/VehiclePreviewModal';

type Region = 'japan' | 'america';

interface BrandCardProps {
  brand: Brand;
  index: number;
  accentColor: string;
  region: Region;
  onOpenModelModal: (brand: string, model: string, image: string, region: Region) => void;
}

function BrandCard({
  brand,
  index,
  accentColor,
  region,
  onOpenModelModal,
}: BrandCardProps) {
  const [selectedModel, setSelectedModel] = useState<string>(brand.models[0] || '');
  const activeImage = getVehicleImage(brand.name, selectedModel);

  const whatsappMessage = encodeURIComponent(
    `Hello Euro Experts, I would like to enquire about servicing my ${brand.name} ${selectedModel}.`
  );

  const handleModelClick = (model: string) => {
    setSelectedModel(model);
    const img = getVehicleImage(brand.name, model);
    onOpenModelModal(brand.name, model, img, region);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden border border-white/10 p-6 lg:p-7 transition-all duration-500 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/15 flex flex-col justify-between min-h-[390px]"
      style={{ perspective: 1000 }}
      data-cursor="hover"
    >
      {/* Background Car Image with cross-fade animation */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-obsidian-light">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={activeImage}
            alt={`${brand.name} ${selectedModel}`}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.38, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </AnimatePresence>

        {/* Premium Dark Gradients for pristine text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/90 to-obsidian/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-obsidian/60" />
        {/* Subtle orange accent glow on hover */}
        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Header Row: Accent line & Active Model badge */}
          <div className="flex items-center justify-between mb-4">
            <div
              className="h-1 rounded-full transition-all duration-500 group-hover:w-16 w-10 shadow-sm"
              style={{ background: accentColor }}
            />
            <button
              type="button"
              onClick={() => handleModelClick(selectedModel)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-obsidian/80 border border-gold/30 hover:border-gold/60 backdrop-blur-md cursor-pointer transition-all duration-300 group/badge"
              title="Click to view full preview"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] font-sans font-medium text-gold/90 truncate max-w-[130px]">
                {selectedModel}
              </span>
              <span className="text-[10px] text-gold/60 group-hover/badge:text-gold transition-colors">↗</span>
            </button>
          </div>

          {/* Brand Name */}
          <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-ivory tracking-wide mb-1 group-hover:text-gold-gradient transition-all duration-300">
            {brand.name}
          </h3>

          <p className="text-xs text-muted/90 font-sans mb-4 flex items-center gap-1.5">
            <span className="text-gold">✦</span> Click any model to view luxury photo
          </p>

          {/* Clickable Model Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {brand.models.map((model) => {
              const isSelected = selectedModel === model;
              return (
                <button
                  key={model}
                  type="button"
                  onClick={() => handleModelClick(model)}
                  className={`text-xs font-sans rounded-full px-3 py-1 transition-all duration-300 cursor-pointer text-left flex items-center gap-1 ${
                    isSelected
                      ? 'bg-gold-gradient text-obsidian font-semibold shadow-md shadow-gold/30 scale-[1.03] ring-1 ring-gold'
                      : 'bg-obsidian/60 text-ivory/80 border border-white/10 hover:border-gold/40 hover:text-white hover:bg-obsidian/90 backdrop-blur-sm'
                  }`}
                  title={`View ${brand.name} ${model} photo`}
                >
                  <span>{model}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer: Dynamic WhatsApp Enquiry for the selected model */}
        <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
          <a
            href={`${BUSINESS.whatsappLink}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-sans font-medium text-gold hover:text-white transition-colors duration-300"
          >
            <span>Book {selectedModel || brand.name} Service</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          <button
            type="button"
            onClick={() => handleModelClick(selectedModel)}
            className="text-[11px] text-muted hover:text-gold font-sans uppercase tracking-wider transition-colors cursor-pointer"
          >
            View Photo ↗
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function BrandSwitcher() {
  const [region, setRegion] = useState<Region>('japan');
  const [activeModalVehicle, setActiveModalVehicle] = useState<{
    brand: string;
    model: string;
    image: string;
    region: Region;
  } | null>(null);

  const brands = region === 'japan' ? JAPANESE_BRANDS : AMERICAN_BRANDS;
  const accentColor = region === 'japan' ? '#FF6200' : '#FFA048';

  const handleOpenModelModal = (brand: string, model: string, image: string, modelRegion: Region) => {
    setActiveModalVehicle({
      brand,
      model,
      image,
      region: modelRegion,
    });
  };

  const handleCloseModal = () => {
    setActiveModalVehicle(null);
  };

  return (
    <section id="brands" className="relative py-24 lg:py-32 bg-obsidian overflow-hidden">
      {/* Gold/Orange glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionTitle
          eyebrow="The Marques We Service"
          title="Japanese Excellence & American Luxury"
          subtitle="From the precision engineering of Japan to the commanding power of America — we service the finest vehicles from both worlds."
          center
        />

        {/* Toggle */}
        <Reveal delay={0.2}>
          <div className="flex justify-center mb-12">
            <div className="relative inline-flex glass rounded-full p-1.5 gap-1 shadow-lg shadow-black/40 border border-white/10">
              {/* Sliding indicator */}
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className="absolute top-1.5 bottom-1.5 rounded-full bg-gold-gradient shadow-md shadow-gold/30"
                style={{
                  left: region === 'japan' ? '6px' : '50%',
                  right: region === 'japan' ? '50%' : '6px',
                }}
              />
              <button
                onClick={() => setRegion('japan')}
                className={`relative z-10 px-6 lg:px-8 py-2.5 rounded-full text-sm font-sans font-semibold transition-colors duration-300 cursor-pointer ${
                  region === 'japan' ? 'text-obsidian' : 'text-ivory/70 hover:text-ivory'
                }`}
              >
                Japanese Excellence
              </button>
              <button
                onClick={() => setRegion('america')}
                className={`relative z-10 px-6 lg:px-8 py-2.5 rounded-full text-sm font-sans font-semibold transition-colors duration-300 cursor-pointer ${
                  region === 'america' ? 'text-obsidian' : 'text-ivory/70 hover:text-ivory'
                }`}
              >
                American Luxury & Power
              </button>
            </div>
          </div>
        </Reveal>

        {/* Brand cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={region}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {brands.map((brand, i) => (
              <BrandCard
                key={brand.name}
                brand={brand}
                index={i}
                accentColor={accentColor}
                region={region}
                onOpenModelModal={handleOpenModelModal}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Brand note */}
        <Reveal delay={0.3}>
          <p className="mt-12 text-center text-muted font-sans text-sm italic max-w-2xl mx-auto border-t border-white/5 pt-6">
            {BRAND_NOTE}
          </p>
        </Reveal>
      </div>

      {/* Vehicle Luxury Preview Modal */}
      {activeModalVehicle && (
        <VehiclePreviewModal
          isOpen={!!activeModalVehicle}
          onClose={handleCloseModal}
          brand={activeModalVehicle.brand}
          model={activeModalVehicle.model}
          image={activeModalVehicle.image}
          region={activeModalVehicle.region}
        />
      )}
    </section>
  );
}
