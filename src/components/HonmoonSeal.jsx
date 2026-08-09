// Sello Honmoon: el anillo de energía que "sella" a las guerreras k-pop.
// Es el elemento firma de este diseño: aparece detrás de Rumi en la
// invitación y, en miniatura, en el sobre cerrado.
export default function HonmoonSeal({ size = 300, className = '' }) {
  const id = 'honmoon';

  return (
    <div
      className={`pointer-events-none relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* resplandor de fondo */}
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{
          background:
            'radial-gradient(circle, rgba(67,230,255,0.55) 0%, rgba(124,58,237,0.35) 45%, transparent 72%)',
          animation: 'glow-pulse 3.6s ease-in-out infinite',
        }}
      />

      {/* anillo rúnico discontinuo, giro lento */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        style={{ animation: 'seal-spin 22s linear infinite' }}
      >
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke={`url(#${id}-grad)`}
          strokeWidth="1.5"
          strokeDasharray="2 8"
        />
        <defs>
          <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#43E6FF" />
            <stop offset="50%" stopColor="#FFC94D" />
            <stop offset="100%" stopColor="#FF2E9F" />
          </linearGradient>
        </defs>
      </svg>

      {/* anillo interno con marcas, giro inverso */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        style={{ animation: 'seal-spin-reverse 16s linear infinite' }}
      >
        <circle
          cx="100"
          cy="100"
          r="74"
          fill="none"
          stroke="#43E6FF"
          strokeOpacity="0.55"
          strokeWidth="1"
        />
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * 360;
          return (
            <line
              key={i}
              x1="100"
              y1="14"
              x2="100"
              y2={i % 4 === 0 ? '26' : '20'}
              stroke={i % 4 === 0 ? '#FFC94D' : '#43E6FF'}
              strokeOpacity={i % 4 === 0 ? 0.9 : 0.5}
              strokeWidth={i % 4 === 0 ? 2 : 1}
              transform={`rotate(${angle} 100 100)`}
            />
          );
        })}
      </svg>

      {/* anillo sólido más fino, quieto, para dar nitidez al centro */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <circle
          cx="100"
          cy="100"
          r="58"
          fill="none"
          stroke="#FCEFFB"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
