import type { ModuleStructure } from "../../../course-structure";

export const module3: ModuleStructure = {
  id: "modulo-3",
  number: 3,
  title: "Cómo poner un Jaquimón a un caballo de manera segura",
  subtitle: "Técnica y seguridad",
  description: "Aprende la técnica correcta para colocar el jaquimón",
  thumbnail: "https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?w=200",
  status: "locked",
  glossary: {
    slideId: "m3-glossary",
    title: "Módulo 3: El Jaquimón",
    subtitle: "GLOSARIO DEL MÓDULO:",
    image: "",
    imageCaption: "",
    terms: [],
    helperText: "",
    quote: "",
  },
  lessons: [],
  completion: {
    slideId: "m3-completion",
    content: {
      moduleNumber: 3,
      badge: "¡FELICITACIONES!",
      title: "¡HAS FINALIZADO EL TERCER MÓDULO!",
      subtitle: "",
      celebrationImage: "",
      achievements: [],
      challenge: {
        title: "",
        badge: "",
        description: "",
        items: [],
      },
    },
  },
};

