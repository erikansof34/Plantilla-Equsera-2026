// ============================================
// MODULE 1 - SLIDE 5: Zona Roja Detallada
// ============================================

import type { SlideContent } from "../../../../types";

export const slide5 = {
  type: "zone-detail" as const,
  title: "Zonas Rojas",
  content: {
    topLabel: "MÓDULO 1",
    title: "Zonas Rojas (Alto Riesgo)",
    zoneName: "Zona Roja",
    zoneColor: "red" as const,
    media: [
      {
        id: "zr-i1",
        type: "image",
        src: "./assets/images/red-zone-detail.jpg",
        overlay: {
          badge: "ZONA DE ALERTA MÁXIMA",
          badgeColor: "red" as const,
          position: "top" as const,
          text: "Nunca te acerques sin comunicación previa",
        },
      },
      {
        id: "zr-a1",
        type: "audio",
        src: "./assets/audio/red-zone.mp3",
        duration: "2:45",
        caption: "Escucha con atención",
      },
      {
        id: "zr-v1",
        type: "video",
        src: "./assets/video/red-zone-danger.mp4",
        thumbnail: "./assets/images/red-zone-thumb.jpg",
        overlay: {
          text: "Video: Comportamiento reactivo en la Zona Roja",
        },
      },
    ],
    paragraphs: [
      {
        id: "zr-p1",
        text: "Ahora veremos las áreas que deben evitarse siempre que sea posible, ya que representan el mayor riesgo de lesiones graves tanto para ti como para el caballo.",
      },
    ],
    infoCards: [
      {
        id: "zr-card-1",
        title: "Zonas Rojas (Alto Riesgo)",
        text: "Están situadas directamente delante y directamente detrás del animal. Estas son las zonas de impacto de las patadas más potentes y de los atropellos accidentales si se asusta y corre hacia adelante.",
        variant: "red" as const,
      },
    ],
    tips: [
      {
        id: "zr-tip-1",
        text: "Habla despacio y con respeto cuando estés cerca, son seres muy sensibles y sienten tus emociones más de lo que crees.",
        icon: "heart",
        variant: "heart" as const,
      },
    ],
    quotes: [
      {
        id: "zr-quote-1",
        text: "La seguridad es nuestra prioridad. Conocer estas zonas te salvará la vida.",
        variant: "warning" as const,
      }
    ]
  } as SlideContent,
  assets: {
    images: [
      "./assets/images/red-zone-detail.jpg",
      "./assets/images/red-zone-thumb.jpg"
    ],
    audio: ["./assets/audio/red-zone.mp3"],
    video: ["./assets/video/red-zone-danger.mp4"]
  }
};
