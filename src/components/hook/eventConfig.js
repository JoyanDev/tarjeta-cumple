// ── Datos del evento ──────────────────────────────────────────────
// Edita solo este archivo si cambia la fecha, hora o el lugar: tanto
// la tarjeta como el contador regresivo y el enlace de Google Maps
// se actualizan automáticamente desde aquí.

// Fecha y hora exactas en formato ISO, con la zona horaria de Perú (UTC-5)
// fijada explícitamente. Así el conteo regresivo da el mismo resultado sin
// importar en qué zona horaria esté el dispositivo de quien abre la tarjeta.
export const EVENT_DATE = new Date('2026-08-16T16:00:00-05:00');

export const EVENT_DATE_LABEL = '16 agos';
export const EVENT_TIME_LABEL = '4:00 PM';
export const EVENT_LOCATION_LABEL = 'Av. Santa Clara';

// Reemplaza esto con la dirección exacta del local (ej. "Av. Los Álamos 123,
// Santa Clara, Lima") para que el enlace de Google Maps lleve al punto exacto.
export const EVENT_MAPS_QUERY = 'Santa Clara, Ucayali, Perú';

export const EVENT_MAPS_URL = `https://www.google.com/maps?q=-8.4013258,-74.5346383&z=17&hl=es${encodeURIComponent(
  EVENT_MAPS_QUERY
)}`;