// ============================================
// MODULE 1 - SLIDE 1: Partes del Caballo
// ============================================

import type { SlideContent } from "../../../../types";

export const slide1 = {
  type: "horse-parts" as const,
  title: "Partes del Caballo",
  content: {
    topLabel: "MÓDULO 1",
    title: "Partes del Caballo",
    paragraphs: [
      { 
        id: "hp-p1", 
        text: "Conocer la anatomía del caballo es fundamental para su cuidado y manejo adecuado." 
      }
    ],
    imageCarousel: [
      {
        id: "hp-i1",
        src: "./assets/images/horse-parts-1.jpg",
        label: "Vista lateral",
        alt: "Anatomía lateral del caballo"
      },
      {
        id: "hp-i2", 
        src: "./assets/images/horse-parts-2.jpg",
        label: "Vista frontal",
        alt: "Anatomía frontal del caballo"
      },
      {
        id: "hp-i3",
        src: "./assets/images/horse-parts-3.jpg", 
        label: "Detalles",
        alt: "Detalles anatómicos"
      },
      {
        id: "hp-i4",
        src: "./assets/images/horse-parts-4.jpg",
        label: "Extremidades",
        alt: "Patas y cascos"
      }
    ],
    objectives: [
      { id: "hp-o1", text: "Identificar las partes principales del caballo" },
      { id: "hp-o2", text: "Comprender la función de cada parte corporal" },
      { id: "hp-o3", text: "Reconocer señales de salud a través de la anatomía" }
    ],
    quotes: [
      {
        id: "hp-q1",
        text: "Conocer la anatomía del caballo es fundamental para su cuidado y manejo adecuado.",
        variant: "highlight" as const,
      }
    ]
  } as SlideContent,
  assets: {
    images: [
      "./assets/images/horse-parts-1.jpg",
      "./assets/images/horse-parts-2.jpg", 
      "./assets/images/horse-parts-3.jpg",
      "./assets/images/horse-parts-4.jpg"
    ],
    audio: ["./assets/audio/horse-parts-intro.mp3"]
  }
};
