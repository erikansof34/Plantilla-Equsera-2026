// ============================================
// MODULE 1 - SLIDE 3: Zona Verde Detallada
// ============================================

import type { SlideContent } from "../../../../types";

export const slide3 = {
  type: "zone-detail" as const,
  title: "Zonas Verdes",
  content: {
    topLabel: "MÓDULO 1",
    title: "Zonas Verdes (Seguras)",
    zoneName: "Zona Verde",
    zoneColor: "green" as const,
    media: [
      {
        id: "zd-i1",
        type: "image",
        src: "./assets/images/green-zone-detail.jpg",
        overlay: {
          text: "Zonas Verdes (Seguras): Se extienden a cada lado, desde la cruz hasta la cadera. Es el lugar ideal para el manejo.",
          position: "bottom" as const,
        },
      },
      {
        id: "zd-a1",
        type: "audio",
        src: "./assets/audio/green-zone.mp3",
        caption: "Escucha con atención",
        duration: "4:12",
      },
    ],
    infoCards: [
      {
        id: "zd-card-1",
        icon: "info",
        text: "Aunque se indican como zonas seguras... debes tener las precauciones necesarias y siempre comunicarte con el caballo.",
        variant: "default" as const,
      },
    ],
    tips: [
      {
        id: "zd-tip-1",
        text: "¿Deseas profundizar en el manejo de zonas seguras?",
        icon: "sparkle",
        variant: "info" as const,
      },
    ],
    quotes: [
      {
        id: "zd-quote-1",
        text: "La confianza se construye en las zonas seguras, donde tanto tú como el caballo se sienten cómodos.",
        variant: "highlight" as const,
      }
    ]
  } as SlideContent,
  assets: {
    images: [
      "./assets/images/green-zone-detail.jpg",
      "./assets/images/green-zone-handling.jpg"
    ],
    audio: ["./assets/audio/green-zone.mp3"]
  }
};
