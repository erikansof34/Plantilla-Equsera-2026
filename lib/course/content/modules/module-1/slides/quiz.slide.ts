import type { SlideStructure } from "../../../../course-structure";

export const quizSlide: SlideStructure = {
  id: "m1-l8-s1",
  type: "quiz",
  order: 1,
  isRequired: true,
  content: {
    topLabel: "REVISAR CONCEPTOS",
    title: "Módulo 1: Las zonas de seguridad del Caballo",
    imageMatching: {
      id: "im1",
      instructions:
        "Observa con atención cada imagen, y relaciónala con su nombre correspondiente. Relaciona cada imagen con la ZONA DE SEGURIDAD según lo aprendido (Verde, Amarilla, Roja).",
      items: [
        {
          id: "im1-1",
          image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400",
          label: "POSICIÓN FRONTAL",
          options: ["Zona Verde", "Zona Amarilla", "Zona Roja"],
          correctAnswer: "Zona Roja",
        },
        {
          id: "im1-2",
          image: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=400",
          label: "POSICIÓN LATERAL",
          options: ["Zona Verde", "Zona Amarilla", "Zona Roja"],
          correctAnswer: "Zona Verde",
        },
        {
          id: "im1-3",
          image: "https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?w=400",
          label: "POSICIÓN TRASERA",
          options: ["Zona Verde", "Zona Amarilla", "Zona Roja"],
          correctAnswer: "Zona Roja",
        },
      ],
      interestingFact: {
        id: "if1",
        text: "Los caballos tienen un punto ciego justo detrás de su cuerpo y otro justo frente a su nariz. Por eso, acercarse sin aviso desde estas zonas puede provocar reacciones inesperadas.",
        variant: "info",
      },
    },
  },
};

