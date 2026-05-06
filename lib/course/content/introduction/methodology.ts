import type { CourseStructure } from "../../course-structure";

export const introductionMethodology: CourseStructure["introduction"]["methodology"] = {
  slideId: "intro-methodology",
  navbarTitle: "Metodología",
  content: {
    badge: "CADA SEMANA RECIBIRÁS",
    title: "METODOLOGÍA DEL CURSO",
    subtitle: "Cómo sacarle el máximo provecho CADA SEMANA a este curso",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800",
    editorialNote: {
      badge: "NOTA DEL EXPERTO",
      text: "Este curso y todos sus contenidos han sido diseñados para generar una experiencia de aprendizaje positiva y práctica. Observa el video donde al experto nos cuenta cómo estudiar y aplicar los aprendizajes que obtendrás.",
    },
    videoCta: {
      label: "HAZ CLIC PARA VER EL VIDEO",
      overlayText: "Haz clic para ver el vídeo",
    },
    weeklyFeatures: [
      { id: "wf1", icon: "book", title: "Glosario y partes del caballo de la semana" },
      { id: "wf2", icon: "graduation", title: "Contenido de aprendizaje" },
      { id: "wf3", icon: "target", title: "Ejercicios prácticos y RETO de la semana" },
    ],
  },
};

