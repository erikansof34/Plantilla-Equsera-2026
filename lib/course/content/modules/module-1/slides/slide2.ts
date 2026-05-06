// ============================================
// MODULE 1 - SLIDE 2: Introducción a Zonas de Seguridad
// ============================================

import type { SlideContent } from "../../../../types";

export const slide2 = {
  type: "zone-intro" as const,
  title: "Zonas de Seguridad",
  content: {
    topLabel: "MÓDULO 1",
    title: "Zonas de Seguridad",
    subtitle: "Áreas de interacción segura con el caballo",
    expandableText: {
      preview: "Las zonas de seguridad son áreas específicas donde la interacción con el caballo es más segura...",
      fullText: "Las zonas de seguridad son áreas específicas donde la interacción con el caballo es más segura. Comprender estas zonas es fundamental para evitar accidentes y establecer una comunicación efectiva con el animal. Cada zona tiene características particulares que determinan el nivel de riesgo y el tipo de interacción apropiado."
    },
    zoneIndicators: [
      { 
        zone: "green" as const, 
        title: "Zonas Verdes (Seguras)", 
        description: "Áreas laterales desde la cruz hasta la cadera. Lugar ideal para manejo diario." 
      },
      { 
        zone: "yellow" as const, 
        title: "Zonas Amarillas (Precaución)", 
        description: "Áreas delantera y trasera que requieren atención y comunicación constante." 
      },
      { 
        zone: "red" as const, 
        title: "Zonas Rojas (Alto Riesgo)", 
        description: "Áreas directamente frente y detrás del caballo. Evitar siempre que sea posible." 
      }
    ],
    keyComponents: [
      { id: "zi-k1", icon: "book", title: "Conocimiento" },
      { id: "zi-k2", icon: "shield", title: "Protección" },
      { id: "zi-k3", icon: "target", title: "Precisión" }
    ]
  } as SlideContent,
  assets: {
    images: [
      "./assets/images/zones-overview.jpg",
      "./assets/images/green-zone.jpg",
      "./assets/images/yellow-zone.jpg", 
      "./assets/images/red-zone.jpg"
    ],
    audio: ["./assets/audio/zones-intro.mp3"]
  }
};
