import { useState } from "react";
import { motion } from "framer-motion";

const colors = ['#FFFFFF', '#43E6FF', '#FFC94D', '#FF7AC6'];

export default function Sparkles() {
  const [stars] = useState(() =>
    Array.from({ length: 26 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 2 + Math.random() * 2.5,
      delay: Math.random() * 3,
      size: 2 + Math.random() * 3,
      color: colors[i % colors.length],
    }))
  );

  return (
    <div className="pointer-events-none absolute inset-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: star.size,
            height: star.size,
            background: star.color,
            boxShadow: `0 0 6px ${star.color}`,
          }}
          animate={{
            opacity: [0.15, 1, 0.15],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}