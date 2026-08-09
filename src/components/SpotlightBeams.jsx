import { motion } from 'framer-motion';

const beams = [
  { color: 'rgba(67,230,255,0.32)', rotate: -22, left: '20%', delay: 0 },
  { color: 'rgba(255,46,159,0.28)', rotate: 10, left: '50%', delay: 0.4 },
  { color: 'rgba(255,201,77,0.22)', rotate: 34, left: '78%', delay: 0.8 },
];

export default function SpotlightBeams() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {beams.map((b, i) => (
        <motion.div
          key={i}
          className="absolute top-[-30%] h-[160%] w-[260px] origin-top"
          style={{
            left: b.left,
            background: `linear-gradient(180deg, ${b.color}, transparent 70%)`,
            mixBlendMode: 'screen',
          }}
          animate={{ rotate: [b.rotate - 7, b.rotate + 7, b.rotate - 7] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
