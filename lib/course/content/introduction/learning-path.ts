import type { CourseStructure } from "../../course-structure";

export const introductionLearningPath: CourseStructure["introduction"]["learningPath"] = {
  slideId: "intro-learning-path",
  navbarTitle: "Ruta de Aprendizaje",
  content: {
    title: "Tu Ruta de aprendizaje !!",
    subtitle: "Modulos",
    description: "Los 13 MÓDULOS, que irás tomando y aplicando, son:",
    audioCta: {
      label: "ESCUCHAR RECOMENDACIONES",
      icon: "volume",
    },
    preparationSection: {
      badge: "PREPARACIÓN MASTER",
      title: "Preparación Master",
      description:
        "Al entrar en cada tema, encontrarás un contenido cuidadosamente preparado para tu aprendizaje. Te recomendamos tomarte el tiempo de ver los videos, escuchar los audios complementarios y realizar cada actividad práctica sugerida.",
      audioLabel: "Haz clic para escuchar el audio complementario",
      audioDuration: "06:15",
    },
  },
};

