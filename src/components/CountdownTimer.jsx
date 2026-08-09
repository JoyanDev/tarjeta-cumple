import { useEffect, useState } from 'react';
import { EVENT_DATE } from './hook/eventConfig';

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return null;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return (
      <div className="rounded-2xl bg-gradient-to-r from-cyan-400 to-amber-300 py-3 text-center text-sm font-semibold uppercase tracking-widest text-[#170B2E]">
        🎉 ¡Hoy es el gran día!
      </div>
    );
  }

  const units = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Seg', value: timeLeft.seconds },
  ];

  return (
    <div>
      <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-300/70">
        Cuenta regresiva para la misión
      </p>

      <div className="grid grid-cols-4 gap-2">
        {units.map((u) => (
          <div
            key={u.label}
            className="rounded-xl p-[1.5px]"
            style={{
              background: 'linear-gradient(135deg,#43E6FF,#FFC94D,#FF2E9F)',
            }}
          >
            <div className="rounded-[10px] bg-[#170B2E] py-2 text-center">
              <span
                key={u.value}
                className="block text-xl text-cyan-300"
                style={{
                  fontFamily: "'Bungee', sans-serif",
                  animation: 'glow-pulse 1s ease-out',
                  textShadow: '0 0 10px rgba(67,230,255,0.6)',
                }}
              >
                {String(u.value).padStart(2, '0')}
              </span>

              <span className="block text-[9px] uppercase tracking-widest text-white/50">
                {u.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
