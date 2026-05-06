import type { SlideStructure } from "../../../../course-structure";

export const zoneIntroSlide: SlideStructure = {
  id: "m1-l2-s1",
  type: "zone-intro",
  order: 1,
  content: {
    title: "MODULO 1: Las zonas de seguridad del Caballo",
    subtitle: "Manejo seguro al interactuar con equinos",
    expandableText: {
      preview:
        "Los caballos son animales grandes y poderosos. Aprender a conocerlos y a ubicarnos correctamente a su alrededor es fundamental para evitar asustarlos...",
      fullText:
        "Los caballos son animales grandes y poderosos. Aprender a conocerlos y a ubicarnos correctamente a su alrededor es fundamental para evitar asustarlos y prevenir accidentes tanto para ellos como para nosotros.",
    },
    keyComponents: [
      { id: "kc1", icon: "book", title: "Partes del caballo y términos clave" },
      { id: "kc2", icon: "shield", title: "Zonas de seguridad de los caballos" },
      { id: "kc3", icon: "document", title: "Resumen y claves de aprendizaje" },
    ],
    media: [
      {
        id: "m1",
        type: "image",
        src: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800",
      },
    ],
    zoneIndicators: [
      { zone: "green", title: "Zona segura", description: "Zona segura para el manejo lateral del caballo" },
      { zone: "yellow", title: "Zona de precaución", description: "Zona de precaución donde el caballo puede reaccionar" },
      { zone: "red", title: "Zona de alto riesgo", description: "Zona de alto riesgo donde pueden ocurrir accidentes" },
    ],
    quotes: [
      {
        id: "q1",
        text: "Tu función es esencial para mantener la salud de los caballos y tu seguridad; este curso te brinda las herramientas para alcanzar un estándar de excelencia",
        icon: "sparkle",
        variant: "default",
      },
    ],
  },
};

