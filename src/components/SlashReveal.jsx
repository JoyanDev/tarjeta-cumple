import { motion } from 'framer-motion';

// Efecto de "corte de espada" que barre la pantalla una sola vez cuando
// se rompe el sello y se revela la tarjeta. Un solo momento orquestado,
// no un efecto continuo.
export default function SlashReveal() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="absolute top-1/2 left-1/2 h-[220vh] w-[60px]"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.95) 45%, rgba(67,230,255,0.9) 55%, transparent)',
          filter: 'blur(1px)',
          rotate: '28deg',
        }}
        variants={{
          hidden: { x: '-120vw', y: '-50%', opacity: 0 },
          show: {
            x: '20vw',
            opacity: [0, 1, 1, 0],
            transition: { duration: 0.55, ease: 'easeIn', times: [0, 0.2, 0.75, 1] },
          },
        }}
      />
      <motion.div
        className="absolute inset-0 bg-white"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: [0, 0.5, 0],
            transition: { duration: 0.35, delay: 0.18, ease: 'easeOut' },
          },
        }}
      />
    </motion.div>
  );
}
