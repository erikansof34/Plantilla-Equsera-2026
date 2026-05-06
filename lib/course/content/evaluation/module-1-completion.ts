import type { ModuleStructure } from "../../course-structure";

export const module1Completion: ModuleStructure["completion"] = {
  slideId: "m1-completion",
  navbarTitle: "Completado - Módulo 1",
  content: {
    moduleNumber: 1,
    badge: "¡FELICITACIONES!",
    title: "¡HAS FINALIZADO EL PRIMER MÓDULO!",
    subtitle: "Ahora vas a aplicarlo en tu lugar de trabajo...!",
    celebrationImage: "/images/celebration.png",
    achievements: [
      { id: "ach1", text: "Entendimiento de la psicología equina", completed: true },
      { id: "ach2", text: "Identificación de señales corporales", completed: true },
      { id: "ach3", text: "Protocolo de acercamiento seguro", completed: true },
    ],
    challenge: {
      title: "APLICACIÓN EN TU FINCA",
      badge: "DESAFÍO: 7 DÍAS",
      description: "Diariamente acércate al caballo con plena consciencia, identificando con precisión:",
      items: [
        { id: "ch1", text: "Zonas verdes", completed: false, color: "green" },
        { id: "ch2", text: "Zonas Amarillas", completed: false, color: "yellow" },
        { id: "ch3", text: "Zonas rojas", completed: false, color: "red" },
      ],
    },
  },
};

