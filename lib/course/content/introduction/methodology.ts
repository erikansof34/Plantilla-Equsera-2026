import type { CourseStructure } from "../../course-structure";

export const introductionMethodology: CourseStructure["introduction"]["methodology"] = {
  slideId: "intro-methodology",
  navbarTitle: "Metodología",
  content: {
    badge: "CURSO PREMIUM",
    title: "METODOLOGÍA DEL CURSO",
    subtitle: "Cómo sacarle el máximo provecho CADA SEMANA a este curso",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800",
    editorialNote: {
      badge: "NOTA EDITORIAL",
      text: "Debemos definir la frecuencia de la liberación de los módulos o si lanzamos un curso corto de 4 módulos y luego el curso completo opcional para certificación.",
    },
    videoCta: {
      label: "VER VIDEO RECOMENDACIONES",
      icon: "play",
    },
    weeklyFeatures: [
      { id: "wf1", icon: "book", title: "Glosario y partes del caballo de la semana" },
      { id: "wf2", icon: "graduation", title: "Contenido de aprendizaje" },
      { id: "wf3", icon: "target", title: "Ejercicios prácticos y RETO de la semana" },
    ],
  },
};

