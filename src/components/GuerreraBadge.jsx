// Insignia decorativa con una silueta de "idol guerrera" 100% original
// (sin rasgos faciales, sin diseño de vestuario específico de ninguna
// franquicia): coleta, hombros con chaqueta y una mini espada al frente.
// Pensada como sticker/medalla, no como retrato de un personaje existente.
export default function GuerreraBadge({ size = 84, className = '' }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
    >
      <defs>
        <linearGradient id="gb-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF2E9F" />
          <stop offset="100%" stopColor="#FF3B5C" />
        </linearGradient>
        <linearGradient id="gb-rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD84D" />
          <stop offset="100%" stopColor="#22E5FF" />
        </linearGradient>
      </defs>

      {/* fondo de medalla */}
      <circle cx="60" cy="60" r="56" fill="#2E1065" stroke="url(#gb-rim)" strokeWidth="3" />
      <circle cx="60" cy="60" r="49" fill="none" stroke="#FFD84D" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 5" />

      {/* coleta */}
      <path
        d="M74,40 C94,28 104,42 97,56 C89,50 80,45 73,43 Z"
        fill="url(#gb-body)"
      />
      {/* cabeza */}
      <circle cx="60" cy="46" r="17" fill="url(#gb-body)" />
      {/* hombros / chaqueta */}
      <path
        d="M32,96 C32,76 44,66 60,66 C76,66 88,76 88,96 L88,102 L32,102 Z"
        fill="url(#gb-body)"
      />
      {/* cuello alto de la chaqueta */}
      <path d="M50,68 L60,78 L70,68 L66,63 L54,63 Z" fill="#2E1065" />

      {/* mini espada al frente */}
      <g transform="translate(60,90) rotate(-20)">
        <rect x="-2" y="-32" width="4" height="26" fill="url(#gb-rim)" />
        <rect x="-9" y="-8" width="18" height="4" rx="1.5" fill="#FFD84D" />
        <rect x="-2.5" y="-6" width="5" height="10" fill="#2E1065" />
      </g>

      {/* estrella de rango arriba */}
      <path
        d="M60,10 L63,17 L71,17 L64.5,21.5 L67,29 L60,24.5 L53,29 L55.5,21.5 L49,17 L57,17 Z"
        fill="#FFF3C4"
      />
    </svg>
  );
}
