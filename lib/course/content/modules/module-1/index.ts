import type { ModuleStructure } from "../../../course-structure";
import { module1Glossary } from "../../glossary";
import { module1Lessons } from "./lessons";
import { module1Completion } from "../../evaluation";

export const module1: ModuleStructure = {
  id: "modulo-1",
  number: 1,
  title: "Las zonas de seguridad del Caballo",
  subtitle: "Manejo seguro al interactuar con equinos",
  description: "Aprende a identificar las zonas de seguridad del caballo para evitar accidentes",
  thumbnail: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=200",
  status: "active",
  glossary: module1Glossary,
  lessons: module1Lessons,
  completion: module1Completion,
};

