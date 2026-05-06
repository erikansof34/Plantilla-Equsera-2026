import type { CourseStructure } from "../../course-structure";

export const introductionWelcome: CourseStructure["introduction"]["welcome"] = {
  slideId: "intro-welcome",
  navbarTitle: "Bienvenida",
  content: {
    title: "Bienvenidos al curso",
    courseTitle: "MANEJO SEGURO AL INTERACTUAR CON EQUINOS",
    heroImage: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800",
    heroVideoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    heroVideoOverlayText: "Bienvenida al curso",
    paragraphs: [
      {
        id: "w-p1",
        text: "Nos alegra contar con tu participación en esta experiencia de aprendizaje, diseñada especialmente para quienes trabajan día a día con caballos en el campo o centros ecuestres.",
      },
      {
        id: "w-p2",
        text: "Este proceso también te permitirá mejorar tu trabajo diario, fortaleciendo el vínculo con el equino a través de técnicas de manejo ético y comunicación efectiva.",
      },
    ],
    audioSections: [
      {
        id: "w-a1",
        label: "HAZ CLIC PARA ESCUCHAR EL COMPLEMENTO",
        src: "/audio/welcome-1.mp3",
        duration: "01:45",
      },
      {
        id: "w-a2",
        src: "/audio/welcome-2.mp3",
        duration: "02:12",
      },
    ],
  },
};

