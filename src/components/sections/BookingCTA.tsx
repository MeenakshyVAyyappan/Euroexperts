import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';
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
  'w-full bg-charcoal-light/60 border border-gold/15 rounded-lg px-4 py-3 text-sm font-sans text-ivory placeholder:text-muted/50 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-all duration-300';
const labelClass = 'block text-xs font-sans text-gold/80 uppercase tracking-wider mb-2';

export default function BookingCTA() {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', brand: '', model: '', service: '', date: '', message: '',
  });

  const update = (key: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `*New Service Booking*\n\nName: ${form.name}\nPhone: ${form.phone}\nVehicle: ${form.brand} ${form.model}\nService: ${form.service}\nPreferred Date: ${form.date}\n\nMessage: ${form.message}`;
    window.open(`${BUSINESS.whatsappLink}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="book" className="relative py-24 lg:py-32 bg-obsidian overflow-hidden">
      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/8 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionTitle
          eyebrow="Book Your Service"
          title="Reserve Your Appointment"
          subtitle="Fill in the details below and we'll send your booking straight to our team via WhatsApp. We'll confirm your slot promptly."
          center
        />

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 lg:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass} htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className={inputClass}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className={inputClass}
                  placeholder="+971 5X XXX XXXX"
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
                <label className={labelClass} htmlFor="model">Model</label>
                <input
                  id="model"
                  type="text"
                  required
                  value={form.model}
                  onChange={(e) => update('model', e.target.value)}
                  className={inputClass}
                  placeholder="e.g. LX 600, Escalade"
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
              <label className={labelClass} htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={3}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about the issue or service you need..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-gold-gradient text-obsidian font-semibold text-sm px-8 py-4 rounded-full hover:shadow-xl hover:shadow-gold/25 transition-all duration-300 shimmer-line"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              Send Booking via WhatsApp
              <Send className="w-4 h-4" strokeWidth={1.5} />
            </motion.button>

            <p className="text-center text-xs text-muted font-sans">
              Your details are sent directly to our WhatsApp. We do not store or share your information.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
