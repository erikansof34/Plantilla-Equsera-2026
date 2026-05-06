// ============================================
// MODULE 1 - SLIDE 4: Zona Amarilla Detallada
// ============================================

import type { SlideContent } from "../../../../types";

export const slide4 = {
  type: "zone-detail" as const,
  title: "Zonas Amarillas",
  content: {
    topLabel: "MÓDULO 1",
    title: "Zonas Amarillas (Precaución)",
    zoneName: "Zona Amarilla",
    zoneColor: "yellow" as const,
    media: [
      {
        id: "zy-i1",
        type: "image",
        src: "./assets/images/yellow-zone-detail.jpg",
        labels: [
          { 
            id: "zy-l1", 
            text: "PRECAUCIÓN", 
            position: { x: 25, y: 35 }, 
            color: "yellow" 
          },
          { 
            id: "zy-l2", 
            text: "MOVIMIENTO", 
            position: { x: 75, y: 70 }, 
            color: "yellow" 
          }
        ],
      },
      {
        id: "zy-a1",
        type: "audio",
        src: "./assets/audio/yellow-zone.mp3",
        duration: "02:45",
        caption: "Escucha con atención",
      },
      {
        id: "zy-v1",
        type: "video",
        src: "./assets/video/yellow-zone-demo.mp4",
        thumbnail: "./assets/images/yellow-zone-thumb.jpg",
        caption: "¿Deseas profundizar?",
      },
    ],
    infoCards: [
      { 
        id: "zy-card-1", 
        title: "Amarilla Delantera", 
        text: "De la cabeza a la cruz. Requiere atención ante posibles mordeduras o movimientos bruscos de la cabeza.", 
        variant: "yellow" 
      },
      { 
        id: "zy-card-2", 
        title: "Amarilla Trasera", 
        text: "De la cadera a la parte posterior de la pata. Es la zona de riesgo para la 'patada de vaca' (hacia el lado).", 
        variant: "yellow" 
      },
    ],
    quotes: [
      {
        id: "zy-quote-1",
        text: "Habla despacio y con respeto cuando estés cerca, son seres muy sensibles y sienten tus emociones más de lo que crees.",
        icon: "sparkle",
        variant: "highlight" as const,
      }
    ]
  } as SlideContent,
  assets: {
    images: [
      "./assets/images/yellow-zone-detail.jpg",
      "./assets/images/yellow-zone-thumb.jpg"
    ],
    audio: ["./assets/audio/yellow-zone.mp3"],
    video: ["./assets/video/yellow-zone-demo.mp4"]
  }
};
