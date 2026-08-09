import { motion } from 'framer-motion';
import { Star, Swords, Music2 } from 'lucide-react';

const icons = [Star, Swords, Music2, Star, Swords, Music2];
const colors = ['#FF2E9F', '#FF3B5C', '#FFD84D', '#C4B5FD', '#22E5FF', '#FFD84D'];

const items = [
  { left: '8%', delay: 0, duration: 9 },
  { left: '22%', delay: 1.4, duration: 11 },
  { left: '40%', delay: 0.6, duration: 8 },
  { left: '58%', delay: 2, duration: 10 },
  { left: '74%', delay: 0.9, duration: 9.5 },
  { left: '88%', delay: 1.8, duration: 8.5 },
];

export default function FloatingBalloons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((it, i) => {
        const Icon = icons[i % icons.length];
        const color = colors[i % colors.length];
        return (
          <motion.div
            key={i}
            className="absolute bottom-[-60px]"
            style={{ left: it.left, color }}
            animate={{
              y: [-20, -900],
              opacity: [0, 1, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: it.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: it.delay,
            }}
          >
            <Icon size={18} fill={color} strokeWidth={1} />
          </motion.div>
        );
      })}
    </div>
  );
}
