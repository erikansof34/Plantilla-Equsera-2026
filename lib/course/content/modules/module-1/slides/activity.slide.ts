import type { SlideStructure } from "../../../../course-structure";

export const activitySlide: SlideStructure = {
  id: "m1-l7-s1",
  type: "activity",
  order: 1,
  isRequired: true,
  content: {
    title: "¡Vamos a la aplicación práctica!",
    subtitle: "Responde a los casos reales según lo aprendido.",
    questions: [
      {
        id: "act-q1",
        type: "multiple-choice",
        question: "Si estás POR DETRÁS de un caballo. ¿Qué se recomienda hacer si estás en esta posición?",
        image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400",
        imageLabel: "ZONA ROJA",
        options: [
          {
            id: "act-q1-a",
            label: "A",
            text: "Hablarle suavemente y caminar directamente hacia su cola para que sepa que estás ahí.",
          },
          {
            id: "act-q1-b",
            label: "B",
            text: "Moverse lateralmente hacia la zona del hombro mientras mantienes contacto visual y le hablas.",
          },
          {
            id: "act-q1-c",
            label: "C",
            text: "Quedarse inmóvil y esperar a que el caballo gire la cabeza para verte.",
          },
        ],
        correctAnswer: "act-q1-b",
        feedback: {
          correct: "¡Correcto! Moverse lateralmente es la forma más segura.",
          incorrect: "Recuerda que la zona trasera es de alto riesgo.",
        },
      },
    ],
    scenario: {
      id: "sc1",
      badge: "ESCENARIO CRÍTICO",
      title: "Escenario de práctica",
      description: "Pedro entró al box por detrás del caballo sin hablarle y le tocó la grupa de repente para que se moviera",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400",
      question: "¿Por qué es peligrosa esta acción?",
      options: [
        {
          id: "sc1-a",
          label: "A",
          text: "El caballo tiene un punto ciego directamente detrás de él y su instinto de huida/defensa se activa ante sorpresas.",
        },
        { id: "sc1-b", label: "B", text: "El caballo prefiere que lo toquen primero en la cara." },
        { id: "sc1-c", label: "C", text: "Pedro no llevaba el equipo de protección adecuado." },
      ],
      correctAnswer: "sc1-a",
      keyInsight:
        "Tu rol es fundamental para la salud de los caballos, y este curso te dará las herramientas para hacerlo aún mejor!",
    },
  },
};

