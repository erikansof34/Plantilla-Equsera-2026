import type { SlideStructure } from "../../../../course-structure";

export const caseStudySlide: SlideStructure = {
  id: "m1-l6-s1",
  type: "case-study",
  order: 1,
  content: {
    topLabel: "CASO DE ESTUDIO",
    title: "MODULO 1: Las zonas de seguridad del Caballo",
    media: [
      {
        id: "m1",
        type: "video",
        src: "/video/case-study.mp4",
        thumbnail: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800",
        overlay: {
          text: "Observa este video ¡Con mucha ATENCIÓN!",
        },
      },
      {
        id: "m2",
        type: "audio",
        src: "/audio/case-study.mp3",
        caption: "Haz clic para escuchar el audio completo",
        duration: "4:50",
      },
    ],
    quotes: [
      {
        id: "q1",
        text: "Juan es un trabajador con experiencia y Pablo es nuevo en el manejo de caballos. Durante una situación cotidiana, Pablo se acerca sin precaución...",
        variant: "default",
      },
    ],
    questions: [
      {
        id: "cq1",
        type: "multiple-choice",
        question: "¿Cuál es tu siguiente acción para garantizar tu seguridad?",
        context: "ANALICEMOS...",
        options: [
          { id: "cq1-a", label: "A", text: "Retroceder y hablar suavemente" },
          { id: "cq1-b", label: "B", text: "Entrar rápido para ganar confianza" },
          { id: "cq1-c", label: "C", text: "Gritar para corregir su actitud" },
        ],
        correctAnswer: "cq1-a",
      },
    ],
  },
};

