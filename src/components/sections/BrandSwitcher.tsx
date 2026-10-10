import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, ArrowUpRight } from 'lucide-react';
import { BUSINESS } from '@/data/content';
import {
  SHOWROOM_JAPANESE_BRANDS,
  SHOWROOM_AMERICAN_BRANDS,
  VEHICLE_TYPE_DESCRIPTIONS,
  resolveShowroomImage,
  type ShowroomBrand,
  type ShowroomModel,
} from '@/data/vehicleShowroomData';
import { getVehicleImage } from '@/data/brandModelImages';
import { VehiclePreviewModal } from '@/components/ui/VehiclePreviewModal';

type Region = 'japanese' | 'american';

export default function BrandSwitcher() {
  const [region, setRegion] = useState<Region>('american'); // Default to American Performance & Luxury (Cadillac)
  const [selectedBrandIndex, setSelectedBrandIndex] = useState<number>(0); // Index 0 is Cadillac
  const [selectedModelIndex, setSelectedModelIndex] = useState<number>(0); // Default to first model (Escalade)
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [previewVehicle, setPreviewVehicle] = useState<{
    brand: string;
    model: string;
    image: string;
    region: 'japan' | 'america';
  } | null>(null);

  const brandTabsRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const brands: ShowroomBrand[] =
    region === 'american' ? SHOWROOM_AMERICAN_BRANDS : SHOWROOM_JAPANESE_BRANDS;

  // Active brand & model
  const currentBrand: ShowroomBrand = brands[selectedBrandIndex] || brands[0];
  const currentModel: ShowroomModel =
    currentBrand.models[selectedModelIndex] || currentBrand.models[0];

  const primaryImageUrl = resolveShowroomImage(currentBrand.name, currentModel);
  const fallbackImageUrl = getVehicleImage(currentBrand.name, currentModel.name);

  // Switch region handler
  const handleRegionChange = (newRegion: Region) => {
    if (newRegion === region) return;
    setRegion(newRegion);
    setSelectedBrandIndex(0);
    setSelectedModelIndex(0);
    setImageLoaded(false);
  };

  // Switch brand handler
  const handleBrandChange = (brandIndex: number) => {
    setSelectedBrandIndex(brandIndex);
    setSelectedModelIndex(0);
    setImageLoaded(false);
  };

  // Next / Previous model handler
  const handleCycleModel = (direction: 1 | -1) => {
    const totalModels = currentBrand.models.length;
    const nextIndex = (selectedModelIndex + direction + totalModels) % totalModels;
    setSelectedModelIndex(nextIndex);
    setImageLoaded(false);
  };

  // Reset image loaded on model change
  useEffect(() => {
    setImageLoaded(false);
  }, [currentBrand.name, currentModel.name]);

  // Auto-scroll active brand into view
  useEffect(() => {
    const container = brandTabsRef.current;
    if (!container) return;
    const activeTab = container.querySelector('[aria-selected="true"]') as HTMLElement | null;
    if (!activeTab) return;

    const offsetLeft = activeTab.offsetLeft;
    container.scrollTo({
      left: Math.max(0, offsetLeft - 24),
      behavior: 'smooth',
    });
  }, [selectedBrandIndex, region]);

  // Touch swipe support for car showroom image
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      handleCycleModel(diff > 0 ? 1 : -1);
    }
    touchStartXRef.current = null;
  };

  // WhatsApp enquiry link for active vehicle
  const whatsappMessage = encodeURIComponent(
    `Hello Euro Experts, I would like to enquire about servicing my ${currentBrand.name} ${currentModel.name}.`
  );
  const whatsappBookingUrl = `${BUSINESS.whatsappLink}?text=${whatsappMessage}`;

  return (
    <section
      id="brands"
      className="relative py-12 lg:py-16 bg-[#161824] text-white overflow-hidden"
    >
      {/* Studio ambient lighting and warm radiant light pools */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-[radial-gradient(ellipse_at_top,rgba(255,160,72,0.18)_0%,rgba(255,98,0,0.06)_45%,transparent_75%)] blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans font-semibold mb-3 block">
              VEHICLE EXPERTISE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              BUILT AROUND THE
              <br />
              VEHICLES YOU DRIVE<span className="text-gold">.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#B2B8C8] font-sans max-w-md leading-relaxed">
            Different engineering. Different character.
            <br className="hidden sm:inline" />
            The same uncompromising dealership-level care.
          </p>
        </div>

        {/* Region Tabs (Japanese Luxury / American Performance) */}
        <div
          className="flex border-b border-white/15 mb-4 overflow-x-auto no-scrollbar"
          role="tablist"
          aria-label="Vehicle region"
        >
          <button
            type="button"
            role="tab"
            id="american-tab"
            aria-selected={region === 'american'}
            aria-controls="vehicle-panel"
            onClick={() => handleRegionChange('american')}
            className={`group relative flex items-center justify-between gap-10 sm:gap-16 py-5 pr-8 sm:pr-12 text-xs tracking-[1.4px] font-semibold uppercase cursor-pointer transition-colors duration-300 shrink-0 ${region === 'american' ? 'text-white' : 'text-[#8E96A8] hover:text-white'
              }`}
          >
            <span>American Performance & Luxury</span>
            <span
              className={`text-[10px] font-bold transition-colors ${region === 'american' ? 'text-gold' : 'text-[#7B8394] group-hover:text-gold/80'
                }`}
            >
              01
            </span>
            {/* Active underline bar */}
            {region === 'american' && (
              <motion.div
                layoutId="region-underline"
                className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-gold"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
          </button>

          <button
            type="button"
            role="tab"
            id="japanese-tab"
            aria-selected={region === 'japanese'}
            aria-controls="vehicle-panel"
            onClick={() => handleRegionChange('japanese')}
            className={`group relative flex items-center justify-between gap-10 sm:gap-16 py-5 pr-8 sm:pr-12 text-xs tracking-[1.4px] font-semibold uppercase cursor-pointer transition-colors duration-300 shrink-0 ${region === 'japanese' ? 'text-white' : 'text-[#8E96A8] hover:text-white'
              }`}
          >
            <span>Japanese Excellence & Luxury</span>
            <span
              className={`text-[10px] font-bold transition-colors ${region === 'japanese' ? 'text-gold' : 'text-[#7B8394] group-hover:text-gold/80'
                }`}
            >
              02
            </span>
            {/* Active underline bar */}
            {region === 'japanese' && (
              <motion.div
                layoutId="region-underline"
                className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-gold"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
          </button>
        </div>

        {/* Brand Tabs Row */}
        <div
          ref={brandTabsRef}
          className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar border-b border-white/10 mb-8 sm:mb-10 pb-0"
          role="tablist"
          aria-label="Vehicle brand"
        >
          {brands.map((brand, idx) => {
            const isSelected = selectedBrandIndex === idx;
            const hasFlagshipDot =
              brand.name === 'Lexus' ||
              brand.name === 'Cadillac' ||
              brand.name === 'Dodge';

            return (
              <button
                key={brand.name}
                type="button"
                role="tab"
                id={`brand-${region}-${idx}`}
                aria-selected={isSelected}
                onClick={() => handleBrandChange(idx)}
                className={`relative py-4 sm:py-5 text-sm sm:text-[15px] font-sans font-medium transition-all duration-200 shrink-0 flex items-center gap-2 cursor-pointer ${isSelected ? 'text-white font-semibold' : 'text-[#8E96A8] hover:text-white'
                  }`}
              >
                <span>{brand.name}</span>
                {hasFlagshipDot && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 inline-block" />
                )}

                {/* Underline for active brand */}
                {isSelected && (
                  <motion.div
                    layoutId="brand-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold sm:bg-white"
                    transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Showroom Interactive Stage (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.42fr_1fr] gap-8 lg:gap-14 items-center">
          {/* Left Column: Car Showroom Image */}
          <div
            className="group relative aspect-[16/10] sm:aspect-[1376/768] bg-gradient-to-br from-[#25293A] via-[#1E212E] to-[#171924] rounded-2xl overflow-hidden border border-white/18 shadow-2xl shadow-black/40 transition-all duration-300"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top-Left Image Label */}
            <div className="absolute top-5 left-5 z-20 pointer-events-none">
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-semibold text-white/90 drop-shadow-sm">
                THE {currentBrand.name.toUpperCase()} COLLECTION
              </span>
            </div>

            {/* Loading placeholder skeleton shimmer */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-[#1A1D2B] flex items-center justify-center pointer-events-none">
                <div className="w-8 h-8 rounded-full border-2 border-gold/30 border-t-gold animate-spin" />
              </div>
            )}

            {/* Car Photo with smooth crossfade and crisp studio brightness */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`${currentBrand.name}-${currentModel.name}`}
                src={primaryImageUrl}
                alt={`${currentBrand.name} ${currentModel.name}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                onLoad={() => setImageLoaded(true)}
                ref={(img) => {
                  if (img?.complete && img.naturalWidth > 0 && !imageLoaded) {
                    setImageLoaded(true);
                  }
                }}
                onError={(e) => {
                  // Fallback to default brand vehicle image if model fails
                  const target = e.currentTarget;
                  const defaultImg = BRAND_DEFAULT_IMAGES[currentBrand.name] || '/vehicles/Lexus/lx600.jpg';
                  if (!target.src.endsWith(defaultImg)) {
                    target.src = defaultImg;
                  }
                  setImageLoaded(true);
                }}
                className={`w-full h-full object-cover brightness-[1.08] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                loading="eager"
                decoding="async"
              />
            </AnimatePresence>

            {/* Soft, lightened studio gradient vignettes */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141620]/80 via-transparent to-[#141620]/25 pointer-events-none" />

            {/* Bottom Row on Image: Family shown label & arrows */}
            <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center justify-between">
              <span className="text-[10px] tracking-[0.14em] font-sans font-medium text-white/80 uppercase">
                {currentModel.family.toUpperCase()} MODEL FAMILY SHOWN
              </span>

              {/* Arrow navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous vehicle model"
                  onClick={() => handleCycleModel(-1)}
                  className="w-9 h-9 rounded-lg bg-[#1E2232]/90 border border-white/20 hover:bg-gold hover:border-gold text-white hover:text-black flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-md shadow-md"
                  title="Previous model"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next vehicle model"
                  onClick={() => handleCycleModel(1)}
                  className="w-9 h-9 rounded-lg bg-[#1E2232]/90 border border-white/20 hover:bg-gold hover:border-gold text-white hover:text-black flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-md shadow-md"
                  title="Next model"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Vehicle Information & Action */}
          <div className="py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentBrand.name}-${currentModel.name}-info`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category eyebrow badge in orange */}
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-gold uppercase block">
                  {currentModel.type.toUpperCase()} / SPECIALIST SERVICE
                </span>

                {/* Brand Name */}
                <p className="text-sm sm:text-[15px] font-sans font-semibold text-[#BAC1D2] mt-4 mb-1.5">
                  {currentBrand.name}
                </p>

                {/* Model Title */}
                <h3 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-3 drop-shadow-sm">
                  {currentModel.name}
                </h3>

                {/* Brand Note / Tagline */}
                <p className="text-sm sm:text-base font-sans font-medium text-[#D5DBEA] mb-3">
                  {currentBrand.note}
                </p>

                {/* Tailored Vehicle Description */}
                <p className="text-xs sm:text-[13px] font-sans leading-relaxed text-[#B0B7C8] max-w-md mb-6">
                  {VEHICLE_TYPE_DESCRIPTIONS[currentModel.type]}
                </p>

                {/* Care Highlights Checkmarks */}
                <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-[10px] sm:text-[11px] tracking-[0.12em] font-sans font-semibold text-[#CBD1E0] uppercase mb-8">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0 stroke-[2.5]" />
                    PRECISION DIAGNOSTICS
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0 stroke-[2.5]" />
                    OEM & PREMIUM PARTS
                  </span>
                </div>

                {/* Action CTA Button: WhatsApp direct vehicle booking */}
                <div className="flex items-center gap-4">
                  <a
                    href={whatsappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gold-gradient text-obsidian text-xs font-sans font-bold tracking-[0.08em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-gold/25 hover:shadow-2xl hover:shadow-gold/40 hover:-translate-y-0.5 shimmer-line"
                  >
                    <span>SERVICE THIS VEHICLE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() =>
                      setPreviewVehicle({
                        brand: currentBrand.name,
                        model: currentModel.name,
                        image: primaryImageUrl,
                        region: region === 'japanese' ? 'japan' : 'america',
                      })
                    }
                    className="text-xs font-sans text-white/80 hover:text-white px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 transition-all cursor-pointer font-medium"
                    title="View high resolution photo"
                  >
                    View Photo ↗
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Explore Models Row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-8 pb-7 border-b border-white/10 mt-6">
          <span className="text-[10px] tracking-[0.16em] uppercase font-sans font-semibold text-gold shrink-0 sm:pt-0.5">
            EXPLORE MODELS
          </span>

          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label={`${currentBrand.name} models`}
          >
            {currentBrand.models.map((model, idx) => {
              const isSelected = selectedModelIndex === idx;

              return (
                <button
                  key={model.name}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    setSelectedModelIndex(idx);
                    setImageLoaded(false);
                  }}
                  className={`text-xs font-sans tracking-wide px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${isSelected
                    ? 'border border-gold text-white bg-gold/20 font-semibold shadow-sm'
                    : 'border border-white/15 text-[#B2B8C8] hover:border-white/35 hover:text-white bg-white/[0.03]'
                    }`}
                >
                  {model.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footnote */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-8 mt-5 text-[11px] text-[#A0A8BA] font-sans leading-relaxed">
          <p>
            {region === 'japanese'
              ? 'Lexus, Infiniti and Acura — the luxury divisions of Toyota, Nissan and Honda.'
              : "From Cadillac's flagship luxury to Ford performance. Lincoln is Ford's luxury division."}
          </p>
          <span className="text-[10px] text-[#868F9E]">
            Specifications and generations may vary from the model family shown.
          </span>
        </div>
      </div>

      {/* Vehicle Full Photo Preview Modal */}
      {previewVehicle && (
        <VehiclePreviewModal
          isOpen={!!previewVehicle}
          onClose={() => setPreviewVehicle(null)}
          brand={previewVehicle.brand}
          model={previewVehicle.model}
          image={previewVehicle.image}
          region={previewVehicle.region}
        />
      )}
    </section>
  );
}
