import type { CourseStructure } from "../course-structure";

export const courseMeta: CourseStructure["meta"] = {
  title: "Manejo seguro al interactuar con equinos",
  subtitle: "Mejores prácticas probadas de seguridad",
  description: "Curso completo de seguridad para propietarios de caballos y personal de la finca",
  coverImage: "https://www.figma.com/api/mcp/asset/92933b58-0bfc-4efa-83d8-97c4027ec02e",
  logo: "/img/logo_blanco_sin_fondo.png",
  logoAlt: "EQUSERA",
  language: "es",
  features: [
    { id: "f1", icon: "clock", label: "A TU RITMO" },
    { id: "f2", icon: "graduation", label: "APRENDIZAJE PRÁCTICO" },
    { id: "f3", icon: "interactive", label: "INTERACTIVO" },
  ],
};

