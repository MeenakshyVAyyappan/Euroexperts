import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('a, button, [data-cursor="hover"], input, select, textarea, label')
      );
    };

    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Gold dot — precise */}
      <motion.div
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-gold"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: hovering ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 35, mass: 0.2 }}
        style={{ left: 0, top: 0 }}
      />
      {/* Trailing ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border border-gold/40"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          width: hovering ? 56 : 40,
          height: hovering ? 56 : 40,
          marginLeft: hovering ? -28 : -20,
          marginTop: hovering ? -28 : -20,
          borderColor: hovering ? 'rgba(201,169,110,0.6)' : 'rgba(201,169,110,0.3)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.4 }}
        style={{ left: 0, top: 0 }}
      />
    </>
  );
}
