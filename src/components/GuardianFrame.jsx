// Marco decorativo "guerrera k-pop": luna creciente + espadas cruzadas +
// anillo rúnico + chispas, generado en SVG puro (100% original, sin usar
// ningún personaje con derechos de autor). Se coloca detrás de la foto.
export default function GuardianFrame({ size = 190 }) {
  const cx = 110;
  const cy = 110;
  const ringR = 96;

  // Marcas tipo "rango" alrededor del anillo (generadas por trigonometría)
  const ticks = Array.from({ length: 28 }, (_, i) => {
    const angle = (i / 28) * Math.PI * 2;
    const long = i % 7 === 0;
    const r1 = ringR - (long ? 10 : 5);
    const r2 = ringR + 2;
    return {
      x1: cx + Math.cos(angle) * r1,
      y1: cy + Math.sin(angle) * r1,
      x2: cx + Math.cos(angle) * r2,
      y2: cy + Math.sin(angle) * r2,
      long,
    };
  });

  // Chispas pequeñas dispersas
  const sparks = [
    { a: -0.9, r: 118 },
    { a: 0.6, r: 122 },
    { a: 2.1, r: 116 },
    { a: 3.4, r: 120 },
    { a: 4.6, r: 118 },
  ].map((s) => ({
    x: cx + Math.cos(s.a) * s.r,
    y: cy + Math.sin(s.a) * s.r,
  }));

  return (
    <svg
      viewBox="0 0 220 220"
      width={size}
      height={size}
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <defs>
        <linearGradient id="gf-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF2E9F" />
          <stop offset="35%" stopColor="#FF3B5C" />
          <stop offset="65%" stopColor="#FFD84D" />
          <stop offset="100%" stopColor="#22E5FF" />
        </linearGradient>
        <linearGradient id="gf-blade-l" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF3B5C" />
          <stop offset="100%" stopColor="#FFD84D" />
        </linearGradient>
        <linearGradient id="gf-blade-r" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#22E5FF" />
          <stop offset="100%" stopColor="#FF2E9F" />
        </linearGradient>
        <radialGradient id="gf-moon" cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#FFF3C4" />
          <stop offset="100%" stopColor="#FFD84D" />
        </radialGradient>
        <radialGradient id="gf-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF2E9F" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FF2E9F" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* aura difusa de fondo */}
      <circle cx={cx} cy={cy} r={104} fill="url(#gf-glow)" />

      {/* trazos de tinta (asimétricos, estilo sumi-e) */}
      <path
        d="M20,150 C45,120 40,90 65,70"
        stroke="#FF2E9F"
        strokeOpacity="0.35"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M170,60 C185,90 175,115 190,145"
        stroke="#22E5FF"
        strokeOpacity="0.3"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* espadas cruzadas detrás de la foto */}
      <g opacity="0.95">
        <path d="M28,196 L44,180 L190,18 L200,29 L54,190 Z" fill="url(#gf-blade-l)" />
        <rect x="32" y="182" width="22" height="7" rx="2" transform="rotate(45 43 186)" fill="#2E1065" />
        <circle cx="196" cy="24" r="4.5" fill="#FFF3C4" />

        <path d="M192,196 L176,180 L30,18 L20,29 L166,190 Z" fill="url(#gf-blade-r)" />
        <rect x="166" y="182" width="22" height="7" rx="2" transform="rotate(-45 177 186)" fill="#2E1065" />
        <circle cx="24" cy="24" r="4.5" fill="#FFF3C4" />
      </g>

      {/* luna creciente arriba */}
      <path
        transform="translate(110,32)"
        d="M0,-19 A19,19 0 1 0 0,19 A14,14 0 1 1 0,-19 Z"
        fill="url(#gf-moon)"
      />

      {/* anillo principal con marcas de rango */}
      <circle cx={cx} cy={cy} r={ringR} fill="none" stroke="url(#gf-ring)" strokeWidth="3" />
      {ticks.map((t, i) => (
        <line
          key={i}
          x1={t.x1}
          y1={t.y1}
          x2={t.x2}
          y2={t.y2}
          stroke="url(#gf-ring)"
          strokeWidth={t.long ? 2.5 : 1.3}
          strokeLinecap="round"
        />
      ))}

      {/* chispas */}
      {sparks.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={i % 2 === 0 ? 2.6 : 1.8} fill="#FFF3C4" />
      ))}
    </svg>
  );
}
