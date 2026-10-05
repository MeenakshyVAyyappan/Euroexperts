import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 40, className = '' }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionTitle({ eyebrow, title, subtitle, center }: SectionTitleProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${center ? 'text-center mx-auto max-w-3xl' : ''}`}>
      <Reveal>
        <span className="eyebrow block mb-4">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-serif text-4xl lg:text-5xl text-ivory leading-tight tracking-tight">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-muted font-sans text-base lg:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  comment?: string;
}

export function ParallaxImage({ src, alt, className = '', imgClassName = '', comment }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {/* Image comment for client reference */}
      {comment && <>{/* ${comment} */}</>}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y }}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
