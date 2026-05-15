import type { SlideStructure } from "../../../../course-structure";

export const zoneYellowSlide: SlideStructure = {
  id: "module-1-zone-yellow",
  type: "zone-detail",
  order: 1,
  content: {
    topLabel: "MÓDULO 1: LAS ZONAS DE SEGURIDAD DEL CABALLO",
    title: "1.2. Las ZONAS NO TAN SEGURAS (Amarillas) del Caballo:",
    zoneName: "Zona Amarilla",
    zoneColor: "yellow",
    media: [
      {
        id: "m1",
        type: "image",
        src: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=800",
        labels: [
          { id: "l1", text: "PELIGRO", position: { x: 25, y: 35 }, color: "yellow" },
          { id: "l2", text: "PATADA", position: { x: 75, y: 70 }, color: "yellow" },
        ],
      },
      {
        id: "m2",
        type: "audio",
        src: "/audio/zone-yellow.mp3",
        caption: "Escucha con atención",
        duration: "02:45",
      },
      {
        id: "m3",
        type: "video",
        src: "/video/zone-yellow.mp4",
        thumbnail: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400",
        caption: "¿Deseas profundizar?",
      },
    ],
    infoCards: [
      {
        id: "ic1",
        title: "Amarilla Delantera",
        text: "De la cabeza a la cruz. Requiere atención ante posibles mordeduras o movimientos bruscos de la cabeza.",
        variant: "yellow",
      },
      {
        id: "ic2",
        title: "Amarilla Trasera",
        text: "De la cadera a la parte posterior de la pata. Es la zona de riesgo para la 'patada de vaca' (hacia el lado).",
        variant: "yellow",
      },
    ],
    quotes: [
      {
        id: "quote1",
        text: "Habla despacio y con respeto cuando estés cerca de un Caballo, son seres muy sensibles y sienten tus emociones más de lo que crees.",
        icon: "sparkle",
        variant: "highlight",
      },
    ],
  },
};

