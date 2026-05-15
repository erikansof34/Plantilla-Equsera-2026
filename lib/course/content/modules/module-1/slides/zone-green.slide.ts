import type { SlideStructure } from "../../../../course-structure";

export const zoneGreenSlide: SlideStructure = {
  id: "module-1-zone-green",
  type: "zone-detail",
  order: 1,
  content: {
    topLabel: "MÓDULO 1: LAS ZONAS DE SEGURIDAD DEL CABALLO",
    title: "1.1. Las ZONAS SEGURAS (Verdes) del Caballo:",
    zoneName: "Zona Verde",
    zoneColor: "green",
    media: [
      {
        id: "m1",
        type: "image",
        src: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800",
        overlay: {
          text: "Zonas Verdes (Seguras): Se extienden a cada lado del caballo, desde la cruz hasta la cadera. Es el lugar ideal para el manejo.",
          position: "bottom",
        },
      },
      {
        id: "m2",
        type: "audio",
        src: "/audio/zone-green.mp3",
        caption: "HAZ CLIC PARA ESCUCHAR EL AUDIO COMPLEMENTARIO",
        duration: "4:12",
      },
    ],
    infoCards: [
      {
        id: "ic1",
        icon: "info",
        text: "Aunque se indican como zonas seguras... debes tener las precauciones necesarias.",
        variant: "default",
      },
    ],
    tips: [
      {
        id: "t1",
        text: "¿Deseas profundizar?",
        icon: "external",
        variant: "info",
      },
    ],
  },
};

