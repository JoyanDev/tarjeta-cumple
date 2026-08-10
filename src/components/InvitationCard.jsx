import { forwardRef } from 'react';
import {
  Sword,
  CalendarHeart,
  Clock,
  MapPin,
  ExternalLink,
  Sparkles as SparkleIcon,
} from 'lucide-react';

import CountdownTimer from './CountdownTimer';
import HonmoonSeal from './HonmoonSeal';

import {
  EVENT_DATE_LABEL,
  EVENT_TIME_LABEL,
  EVENT_LOCATION_LABEL,
  EVENT_MAPS_URL,
} from './hook/eventConfig';

const InvitationCard = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-[560px]"
    >

      {/* =========================================================
          PERSONAJES + FOTO
          ========================================================= */}

      <div className="pointer-events-none absolute left-0 top-0 z-30 h-[245px] w-full">

        {/* =======================================================
            HONMOON - DETRÁS DE LA FOTO
            ======================================================= */}

        <HonmoonSeal
          size={205}
          className="
            absolute
            left-[31%]
            top-[-35px]
            -ml-[102.5px]
          "
        />

        {/* =======================================================
            FOTO DE JUESLY
            ======================================================= */}

        <div
          className="
            absolute
            left-[31%]
            top-[8px]
            z-20
            h-[120px]
            w-[120px]
            -ml-[60px]
            rounded-full
            p-[5px]
          "
          style={{
            background:
              'linear-gradient(135deg, #43E6FF, #FF2E9F, #FFC94D, #43E6FF)',
            boxShadow:
              '0 0 18px rgba(67,230,255,0.65), 0 0 40px rgba(255,46,159,0.35)',
          }}
        >

          {/* Borde interior */}
          <div
            className="
              h-full
              w-full
              overflow-hidden
              rounded-full
              bg-[#170B2E]
              p-[4px]
            "
          >

            <img
              src="/lucia.webp"
              alt="Juesly"
              width="120"
              height="120"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="
                h-full
                w-full
                rounded-full
                object-cover
              "
            />

          </div>
        </div>


        {/* =======================================================
            RUMI
            ======================================================= */}

        <div
          className="
            absolute
            right-[3%]
            top-[-30px]
            z-30
            h-[255px]
            w-[190px]
          "
        >

          <img
            src="/rumi.webp"
            alt="Rumi, la guerrera k-pop favorita de Juesly"
            width="190"
            height="255"
            loading="eager"
            decoding="async"
            className="
              h-full
              w-auto
              object-contain
              drop-shadow-[0_18px_20px_rgba(0,0,0,0.55)]
            "
            style={{
              filter:
                'drop-shadow(0 0 22px rgba(67,230,255,0.45))',
            }}
          />

        </div>

      </div>


      {/* =========================================================
          TARJETA HOLOGRÁFICA
          ========================================================= */}

      <div
        className="
          relative
          z-10
          mt-[115px]
          rounded-[34px]
          p-[3px]
          shadow-[0_25px_60px_rgba(11,6,24,0.6)]
        "
        style={{
          background:
            'linear-gradient(120deg,#43E6FF,#FFC94D,#FF2E9F,#7C3AED,#43E6FF)',
          backgroundSize: '300% 300%',
          animation: 'holo-sweep 6s ease infinite',
        }}
      >

        {/* =======================================================
            BRILLO HOLOGRÁFICO
            ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[34px]
            mix-blend-overlay
          "
          style={{
            background:
              'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.85) 45%, transparent 60%)',
            backgroundSize: '250% 250%',
            animation: 'holo-sweep 3.5s linear infinite',
          }}
        />


        {/* =======================================================
            CONTENIDO DE LA TARJETA
            ======================================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            bg-[radial-gradient(circle_at_50%_0%,#2D0F63_0%,#170B2E_45%,#0B0618_100%)]
            px-6
            pb-6
            pt-16
            text-center
          "
        >

          {/* =====================================================
              PASE VIP
              ===================================================== */}

          <p
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-amber-300/30
              bg-amber-300/10
              px-3
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-amber-300
            "
          >
            <Sword size={11} />
            Guerrera oficial · pase vip
          </p>


          {/* =====================================================
              NOMBRE
              ===================================================== */}

          <h1
            className="mt-4 text-5xl text-white"
            style={{
              fontFamily: "'Black Han Sans', sans-serif",
              textShadow:
                '0 0 18px rgba(67,230,255,0.55), 0 0 36px rgba(255,46,159,0.35)',
            }}
          >
            Juesly
          </h1>


          {/* =====================================================
              DESCRIPCIÓN
              ===================================================== */}

          <p className="mt-3 text-[15px] text-white/70">
            La guerrera k-pop más poderosa de la casa cumple{' '}
            <span className="font-semibold text-cyan-300">
              5 añitos
            </span>
          </p>


          {/* =====================================================
              INFORMACIÓN DEL EVENTO
              ===================================================== */}

          <div
            className="
              relative
              mt-6
              rounded-2xl
              border
              border-dashed
              border-cyan-300/25
              bg-white/[0.04]
              p-5
              backdrop-blur-sm
            "
          >

            {/* Agujero izquierdo */}
            <div
              className="
                absolute
                -left-[9px]
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                rounded-full
                bg-[#0B0618]
              "
            />

            {/* Agujero derecho */}
            <div
              className="
                absolute
                -right-[9px]
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                rounded-full
                bg-[#0B0618]
              "
            />


            <div className="grid grid-cols-1 divide-y divide-white/10">

              {/* =================================================
                  FECHA
                  ================================================= */}

              <div className="flex items-center justify-between py-2.5">

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    text-cyan-300/80
                  "
                >
                  <CalendarHeart size={14} />
                  Fecha
                </span>

                <span className="text-sm font-semibold text-white">
                  {EVENT_DATE_LABEL}
                </span>

              </div>


              {/* =================================================
                  HORA
                  ================================================= */}

              <div className="flex items-center justify-between py-2.5">

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    text-cyan-300/80
                  "
                >
                  <Clock size={14} />
                  Hora
                </span>

                <span className="text-sm font-semibold text-white">
                  {EVENT_TIME_LABEL}
                </span>

              </div>


              {/* =================================================
                  LUGAR
                  ================================================= */}

              <div className="py-2.5">

                <div className="flex items-center justify-between">

                  <span
                    className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-widest
                      text-cyan-300/80
                    "
                  >
                    <MapPin size={14} />
                    Lugar
                  </span>

                  <span className="text-sm font-semibold text-white">
                    {EVENT_LOCATION_LABEL}
                  </span>

                </div>


                {/* =================================================
                    BOTÓN MAPS
                    ================================================= */}

                <a
                  href={EVENT_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-2.5
                    flex
                    items-center
                    justify-center
                    gap-1.5
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-amber-300
                    py-2
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-widest
                    text-[#170B2E]
                    shadow-[0_6px_16px_rgba(67,230,255,0.35)]
                    transition
                    hover:scale-[1.02]
                  "
                >
                  <MapPin size={12} />
                  Ver ubicación en Maps
                  <ExternalLink size={11} />
                </a>

              </div>

            </div>
          </div>


          {/* =====================================================
              CUENTA REGRESIVA
              ===================================================== */}

          <div className="relative mt-5">
            <CountdownTimer />
          </div>


          {/* =====================================================
              MENSAJE
              ===================================================== */}

          <p
            className="
              relative
              mt-5
              flex
              items-center
              justify-center
              gap-1.5
              text-center
              text-sm
              text-white/65
            "
          >

            <SparkleIcon
              size={13}
              className="shrink-0 text-amber-300"
            />

            Tu presencia será el mejor regalo para hacer este día aún más especial

            <SparkleIcon
              size={13}
              className="shrink-0 text-amber-300"
            />

          </p>


          {/* =====================================================
              NO FALTES
              ===================================================== */}

          <div
            className="
              relative
              mt-5
              text-center
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-cyan-300/70
            "
          >
            ¡No faltes!
          </div>

        </div>
      </div>

    </div>
  );
});

InvitationCard.displayName = 'InvitationCard';

export default InvitationCard;