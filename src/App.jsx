import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { Download } from 'lucide-react';
// import { toPng } from 'html-to-image';

import Envelope from './components/Envelope';
import InvitationCard from './components/InvitationCard';
import FloatingEmblems from './components/FloatingEmblems';
import Sparkles from './components/Sparkles';
import SpotlightBeams from './components/SpotlightBeams';
import SlashReveal from './components/SlashReveal';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [showSlash, setShowSlash] = useState(false);
  const cardRef = useRef(null);

  const handleOpen = () => {
    setShowSlash(true);
    setOpened(true);
    setTimeout(() => setShowSlash(false), 650);
  };

  // const downloadCard = async () => {
  //   if (!cardRef.current) return;

  //   // Selecciona todos los elementos que no queremos exportar
  //   // (por ahora, ninguno dentro de la tarjeta lleva esta clase;
  //   // el botón de descargar ya vive FUERA de cardRef, así que
  //   // nunca forma parte de la captura)
  //   const hiddenElements = cardRef.current.querySelectorAll('.export-hide');

  //   // Los ocultamos para que el layout se reacomode
  //   hiddenElements.forEach((el) => {
  //     el.dataset.prevDisplay = el.style.display;
  //     el.style.display = 'none';
  //   });

  //   // Nos aseguramos de que las fotos (Rumi y la cumpleañera) estén
  //   // completamente cargadas y decodificadas antes de capturar.
  //   // Si html-to-image dispara la captura mientras una imagen aún
  //   // está en proceso de carga, la termina dibujando con su tamaño
  //   // "roto" (0x0 o el del ícono de imagen caída) y eso hace que se
  //   // vea encimada sobre el texto en el PNG final.
  //   const images = Array.from(cardRef.current.querySelectorAll('img'));
  //   await Promise.all(
  //     images.map((img) => {
  //       if (img.complete && img.naturalWidth > 0) return Promise.resolve();
  //       if (typeof img.decode === 'function') {
  //         return img.decode().catch(() => {});
  //       }
  //       return new Promise((resolve) => {
  //         img.addEventListener('load', resolve, { once: true });
  //         img.addEventListener('error', resolve, { once: true });
  //       });
  //     })
  //   );

  //   // Esperamos un frame para que el navegador recalcule el diseño
  //   await new Promise((resolve) => requestAnimationFrame(resolve));

  //   try {
  //     const dataUrl = await toPng(cardRef.current, {
  //       pixelRatio: 3,
  //       cacheBust: true,
  //     });

  //     const link = document.createElement('a');
  //     link.download = 'invitacion-juesly.png';
  //     link.href = dataUrl;
  //     link.click();
  //   } finally {
  //     // Restauramos los elementos
  //     hiddenElements.forEach((el) => {
  //       el.style.display = el.dataset.prevDisplay || '';
  //     });
  //   }
  // };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0618]">
      <FloatingEmblems />
      <Sparkles />
      <SpotlightBeams />

      <AnimatePresence>{showSlash && <SlashReveal />}</AnimatePresence>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <Envelope onOpen={handleOpen} />
            </motion.div>
          ) : (
            <motion.div
              key="card"
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="flex flex-col items-center gap-6"
            >
              <InvitationCard ref={cardRef} />

              {/* <motion.button
                onClick={downloadCard}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300 px-6 py-3 font-semibold text-[#170B2E] shadow-[0_10px_30px_rgba(67,230,255,0.4)]"
              >
                <Download size={18} />
                Descargar invitación
              </motion.button> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
