import type { ModuleStructure } from "../../../course-structure";
import { horsePartsSlide } from "./slides/horse-parts.slide";
import { zoneIntroSlide } from "./slides/zone-intro.slide";
import { zoneGreenSlide } from "./slides/zone-green.slide";
import { zoneYellowSlide } from "./slides/zone-yellow.slide";
import { zoneRedSlide } from "./slides/zone-red.slide";
import { caseStudySlide } from "./slides/case-study.slide";
import { activitySlide } from "./slides/activity.slide";
import { quizSlide } from "./slides/quiz.slide";

export const module1Lessons: ModuleStructure["lessons"] = [
  {
    id: "m1-l1",
    number: 1,
    title: "Partes del Caballo",
    description: "Conoce las partes del caballo y su importancia",
    slides: [horsePartsSlide],
  },
  {
    id: "m1-l2",
    number: 2,
    title: "Introducción a las Zonas",
    description: "Aprende sobre las zonas de seguridad del caballo",
    slides: [zoneIntroSlide],
  },
  {
    id: "m1-l3",
    number: 3,
    title: "Las Zonas Verdes (Seguras)",
    description: "Aprende sobre las zonas seguras del caballo",
    slides: [zoneGreenSlide],
  },
  {
    id: "m1-l4",
    number: 4,
    title: "Las Zonas Amarillas (Precaución)",
    description: "Aprende sobre las zonas de precaución del caballo",
    slides: [zoneYellowSlide],
  },
  {
    id: "m1-l5",
    number: 5,
    title: "Las Zonas Rojas (Alto Riesgo)",
    description: "Aprende sobre las zonas de alto riesgo del caballo",
    slides: [zoneRedSlide],
  },
  {
    id: "m1-l6",
    number: 6,
    title: "Caso de Estudio",
    description: "Analiza un caso real de manejo de caballos",
    slides: [caseStudySlide],
  },
  {
    id: "m1-l7",
    number: 7,
    title: "Actividad Práctica",
    description: "Pon en práctica lo aprendido",
    slides: [activitySlide],
  },
  {
    id: "m1-l8",
    number: 8,
    title: "Evaluación",
    description: "Evalúa tu conocimiento del módulo",
    slides: [quizSlide],
  },
];

