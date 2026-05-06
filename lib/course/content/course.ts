// ============================================
// CURSO ESTRUCTURADO - NUEVA ESTRUCTURA MODULAR
// ============================================

import type { CourseStructure } from "../course-structure";
import { courseIntroduction } from "./introduction";
import { courseMeta } from "./meta";
import { courseModules } from "./modules";

export const structuredCourse: CourseStructure = {
  id: "equus-course-2024",
  meta: courseMeta,
  introduction: courseIntroduction,
  modules: courseModules,
};
