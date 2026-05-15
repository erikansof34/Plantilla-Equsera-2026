import type { SlideStructure } from "../../../../course-structure";

export const zoneRedSlide: SlideStructure = {
  id: "module-1-zone-red",
  type: "zone-detail",
  order: 1,
  content: {
    topLabel: "MÓDULO 1: LAS ZONAS DE SEGURIDAD DEL CABALLO",
    title: "1.3. Las ZONAS NO SEGURAS (Rojas) del Caballo:",
    zoneName: "Zona Roja",
    zoneColor: "red",
    media: [
      {
        id: "m1",
        type: "image",
        src: "https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?w=800",
        overlay: {
          badge: "ZONA DE ALERTA MÁXIMA",
          badgeColor: "red",
          position: "top",
        },
      },
      {
        id: "m2",
        type: "audio",
        src: "/audio/zone-red.mp3",
        caption: "Escucha con atención",
        duration: "2:45",
      },
      {
        id: "m3",
        type: "video",
        src: "/video/zone-red.mp4",
        thumbnail: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400",
        overlay: {
          text: "Video: Comportamiento reactivo en la Zona Roja",
        },
      },
    ],
    paragraphs: [
      {
        id: "p1",
        text: "Ahora veremos las áreas que deben evitarse siempre que sea posible, ya que representan el mayor riesgo de lesiones graves.",
      },
    ],
    infoCards: [
      {
        id: "ic1",
        title: "Zonas Rojas (Alto Riesgo)",
        text: "Están situadas directamente delante y directamente detrás del animal. Estas son las zonas de impacto de las patadas más potentes y de los atropellos accidentales si el caballo se asusta y corre hacia adelante.",
        variant: "red",
      },
    ],
    tips: [
      {
        id: "t1",
        text: "Habla despacio y con respeto cuando estés cerca de un Caballo, son seres muy sensibles y sienten tus emociones más de lo que crees.",
        icon: "heart",
        variant: "heart",
      },
    ],
  },
};

