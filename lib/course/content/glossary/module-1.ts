import type { ModuleStructure } from "../../course-structure";

export const module1Glossary: ModuleStructure["glossary"] = {
  slideId: "m1-glossary",
  navbarTitle: "Glosario - Módulo 1",
  title: "Módulo 1: Las zonas de seguridad del Caballo",
  subtitle: "GLOSARIO EQUINO DEL MÓDULO:",
  image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600",
  imageCaption: "Para este módulo las PALABRAS CLAVE son:",
  terms: [
    {
      id: "g1",
      term: "Cabeza",
      definition: "parte delantera del caballo.",
      category: "PARTES",
      icon: "shield",
      color: "green",
    },
    {
      id: "g2",
      term: "Cruz",
      definition: "punto más alto donde se unen el cuello y la espalda.",
      category: "PARTES",
      icon: "warning",
      color: "yellow",
    },
    {
      id: "g3",
      term: "hueso de la cadera o punta del anca",
      definition: "punto más lateral de la parte trasera del caballo.",
      category: "PARTES",
      icon: "x-circle",
      color: "red",
    },
    {
      id: "g4",
      term: "Lenguaje corporal",
      definition: "Señales que el caballo expresa con su cuerpo para comunicar emociones o incomodidad.",
      category: "COMUNICACIÓN",
      icon: "paw",
      color: "green",
    },
    {
      id: "g5",
      term: "Punto ciego",
      definition:
        "Zona donde el caballo no tiene visibilidad y puede asustarse fácilmente al sentir movimientos imprevistos en su periferia bloqueada.",
      category: "COMUNICACIÓN",
      icon: "eye-off",
      color: "yellow",
    },
  ],
  helperText:
    "Si deseas consultarlas de nuevo, podrás encontrarlas en orden alfabético o utilizar el buscador de términos para mayor facilidad.",
  quote:
    "El punto ciego detrás del caballo. Un caballo no puede ver directamente detrás de su cuerpo. Esto crea una zona ciega donde el movimiento se detecta tarde o no se detecta.",
};

