import { motion } from 'framer-motion';
import { Sword, Sparkles as SparkleIcon } from 'lucide-react';
import HonmoonSeal from './HonmoonSeal';

export default function Envelope({ onOpen }) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
      className="flex flex-col items-center gap-6"
    >
      <div className="relative">
        <div className="absolute inset-0 -z-10 scale-110 rounded-[28px] bg-cyan-400/25 blur-2xl" />

        <div className="relative flex h-80 w-72 flex-col items-center overflow-hidden rounded-[28px] border border-cyan-300/20 bg-[radial-gradient(circle_at_50%_0%,#3B1170_0%,#170B2E_55%,#0B0618_100%)] px-6 pb-6 pt-5 text-center shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
          <div
            className="absolute inset-x-0 top-0 h-1.5"
            style={{
              background:
                'linear-gradient(90deg,#43E6FF,#FFC94D,#FF2E9F,#43E6FF)',
              backgroundSize: '250% 100%',
              animation: 'holo-sweep 4s linear infinite',
            }}
          />

          <p className="mt-2 text-[10px] uppercase tracking-[0.45em] text-cyan-300/80">
            Pase de cazadora · vip
          </p>

          {/* Sello Honmoon con la espada en el centro */}
          <div className="relative mt-1 flex h-40 w-40 items-center justify-center">
            <HonmoonSeal size={160} className="absolute inset-0" />
            <motion.div
              animate={{ rotate: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
              className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-fuchsia-400 to-amber-300 shadow-[0_0_30px_rgba(67,230,255,0.55)]"
            >
              <Sword size={26} className="text-[#170B2E]" strokeWidth={2.4} />
            </motion.div>
          </div>

          <h2
            className="mt-1 text-3xl leading-tight text-white"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
          >
            Fan Meeting VIP
          </h2>
          <p
            className="mt-1 text-xs tracking-[0.25em] text-amber-300"
            style={{ fontFamily: "'Black Han Sans', sans-serif" }}
          >
            생일 축하해
          </p>

          <p className="mt-3 flex items-center justify-center gap-1.5 text-[13px] leading-snug text-white/75">
            <SparkleIcon size={14} className="shrink-0 text-amber-300" />
            El sello guarda un mensaje de tu guerrera favorita
          </p>
        </div>
      </div>

      <motion.button
        onClick={onOpen}
        whileTap={{ scale: 0.94 }}
        whileHover={{ scale: 1.05 }}
        className="relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300 px-7 py-3 font-semibold text-[#170B2E] shadow-[0_10px_30px_rgba(67,230,255,0.4)]"
      >
        Romper el sello
      </motion.button>
    </motion.div>
  );
}
