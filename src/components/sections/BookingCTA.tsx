import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Sparkles } from 'lucide-react';
import { BUSINESS, ALL_BRAND_NAMES, SERVICE_OPTIONS } from '@/data/content';
import { SectionTitle, Reveal } from '@/components/ui/Primitives';

interface FormData {
  name: string;
  phone: string;
  brand: string;
  model: string;
  service: string;
  date: string;
  message: string;
}

const inputClass =
  'w-full bg-obsidian-light/80 border border-white/10 rounded-xl px-4 py-3.5 text-sm font-sans text-ivory placeholder:text-muted/40 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/25 transition-all duration-300 shadow-inner';
const labelClass = 'block text-xs font-sans text-gold/90 uppercase tracking-wider mb-2 font-semibold';

export default function BookingCTA() {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', brand: '', model: '', service: '', date: '', message: '',
  });

  const update = (key: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `*New Service Booking - Euro Experts*\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n🚘 Vehicle: ${form.brand} ${form.model}\n🔧 Service: ${form.service}\n📅 Preferred Date: ${form.date || 'Earliest available'}\n\n💬 Note: ${form.message || 'Standard inspection'}`;
    window.open(`${BUSINESS.whatsappLink}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="book" className="relative py-24 lg:py-32 bg-obsidian overflow-hidden">
      {/* Ambient luxury radial gold pulse */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/15 rounded-full blur-[220px] pointer-events-none"
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionTitle
          eyebrow="Book Your Service"
          title="Reserve Your Appointment"
          subtitle="Fill in the details below and we'll send your booking straight to our team via WhatsApp. We'll confirm your slot promptly."
          center
        />

        <Reveal delay={0.2}>
          <div className="relative">
            {/* Ambient gold glow behind form */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-gold/20 via-brand-orange/20 to-gold/20 opacity-50 blur-xl pointer-events-none" />

            <form
              onSubmit={handleSubmit}
              className="relative glass rounded-3xl p-6 lg:p-10 space-y-6 border border-gold/30 bg-obsidian/90 backdrop-blur-2xl shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-2 pb-4 border-b border-white/10">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-xs font-sans text-gold/90 font-medium tracking-wide uppercase">
                  Fast Direct WhatsApp Confirmation · Al Quoz, Dubai
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className={inputClass}
                    placeholder="e.g. Mohammed Al-Falasi"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">Phone / WhatsApp</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className={inputClass}
                    placeholder="+971 50 123 4567"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} htmlFor="brand">Car Brand</label>
                  <select
                    id="brand"
                    required
                    value={form.brand}
                    onChange={(e) => update('brand', e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select brand</option>
                    {ALL_BRAND_NAMES.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="model">Model & Year</label>
                  <input
                    id="model"
                    type="text"
                    required
                    value={form.model}
                    onChange={(e) => update('model', e.target.value)}
                    className={inputClass}
                    placeholder="e.g. LX 600 (2023) or Escalade"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} htmlFor="service">Service Needed</label>
                  <select
                    id="service"
                    required
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select service</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="date">Preferred Date</label>
                  <input
                    id="date"
                    type="date"
                    value={form.date}
                    onChange={(e) => update('date', e.target.value)}
                    className={`${inputClass} [color-scheme:dark]`}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="message">Message or Symptoms (Optional)</label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us about the issue, dashboard warning lights, or maintenance required..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-gold-gradient text-obsidian font-bold text-base px-8 py-4 rounded-full shadow-2xl shadow-gold/30 hover:shadow-gold/50 transition-all duration-300 shimmer-line cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send Booking via WhatsApp</span>
                <Send className="w-4 h-4" />
              </motion.button>

              <p className="text-center text-xs text-muted/80 font-sans">
                🔒 Your details are encrypted and sent directly to our service advisors. No spam, ever.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
