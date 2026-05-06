// ============================================
// ESTRUCTURA DEL CURSO - PLANTILLA PARAMETRIZADA
// ============================================
// Esta estructura define cómo organizar un curso completo
// con módulos, lecciones y slides parametrizados

import type {
  Slide,
  SlideType,
  SlideContent,
  GlossaryTerm,
  Question,
  Scenario,
  ImageMatchingExercise,
  CompletionContent,
  WelcomeContent,
  MethodologyContent,
  LearningPathContent,
  Feature,
  Module,
} from "./types";

// ============================================
// BLUEPRINT DE PLANTILLA (NO CONTENIDO DE CURSO)
// ============================================
// Define identidad de marca y secuencia canónica
// para cursos interactivos sin acoplarse a un curso puntual.

export interface TemplateBrandIdentity {
  logo: string;
  logoAlt: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  coverStyle: "dark" | "light";
}

export interface TemplateSlideBlueprint {
  key:
    | "cover"
    | "welcome"
    | "methodology"
    | "learning-path"
    | "glossary"
    | "horse-parts"
    | "zone-intro"
    | "zone-detail"
    | "case-study"
    | "content"
    | "activity"
    | "quiz"
    | "completion";
  label: string;
  required: boolean;
  reusableComponents: string[];
}

export const DEFAULT_TEMPLATE_SEQUENCE: TemplateSlideBlueprint[] = [
  {
    key: "cover",
    label: "Portada",
    required: true,
    reusableComponents: ["CoverScreen", "FeatureBadge", "ContinueButton"],
  },
  {
    key: "welcome",
    label: "Bienvenida",
    required: true,
    reusableComponents: ["WelcomeScreen", "ContentCard", "AudioPlayer"],
  },
  {
    key: "methodology",
    label: "Metodologia",
    required: true,
    reusableComponents: ["MethodologyScreen", "VideoPlayer", "FeatureBadge"],
  },
  {
    key: "learning-path",
    label: "Ruta de aprendizaje",
    required: true,
    reusableComponents: ["LearningPathScreen", "AudioPlayer", "ContentCard"],
  },
  {
    key: "glossary",
    label: "Glosario",
    required: true,
    reusableComponents: ["GlossaryScreen", "GlossarySearch", "ContentCard"],
  },
  {
    key: "horse-parts",
    label: "Partes del caballo",
    required: true,
    reusableComponents: ["ContentSlide", "ImageCarousel", "Checklist"],
  },
  {
    key: "zone-intro",
    label: "Zonas de seguridad (intro)",
    required: true,
    reusableComponents: ["ContentSlide", "ExpandableText", "ZoneIndicator"],
  },
  {
    key: "zone-detail",
    label: "Zonas de seguridad (detalle)",
    required: true,
    reusableComponents: ["ContentSlide", "ImageWithOverlay", "AudioPlayer"],
  },
  {
    key: "case-study",
    label: "Casos de estudio",
    required: true,
    reusableComponents: ["ContentSlide", "VideoPlayer", "MultipleChoice"],
  },
  {
    key: "content",
    label: "Slides de contenido",
    required: true,
    reusableComponents: ["ContentSlide", "QuoteCard", "ImageWithOverlay"],
  },
  {
    key: "activity",
    label: "Actividad practica",
    required: true,
    reusableComponents: ["ActivityScreen", "ScenarioQuestion", "Checklist"],
  },
  {
    key: "quiz",
    label: "Evaluacion",
    required: true,
    reusableComponents: ["QuizScreen", "ImageMatching"],
  },
  {
    key: "completion",
    label: "Completacion",
    required: true,
    reusableComponents: ["CompletionScreen", "Checklist"],
  },
];

// ============================================
// ESTRUCTURA PRINCIPAL DEL CURSO
// ============================================

export interface CourseStructure {
  id: string;
  meta: CourseMeta;
  introduction: IntroductionSection;
  modules: ModuleStructure[];
  templateBrand?: TemplateBrandIdentity;
  templateSequence?: TemplateSlideBlueprint[];
}

export interface CourseMeta {
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  logo: string;
  logoAlt: string;
  language: "es" | "en";
  features: Feature[];
}

// ============================================
// SECCIÓN DE INTRODUCCIÓN
// ============================================
// Slides que aparecen antes de los módulos

export interface IntroductionSection {
  cover: CoverSlideData;
  welcome: WelcomeSlideData;
  methodology: MethodologySlideData;
  learningPath: LearningPathSlideData;
}

export interface CoverSlideData {
  slideId: string;
  navbarTitle?: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaLabel: string;
  helperText: string;
}

export interface WelcomeSlideData {
  slideId: string;
  navbarTitle?: string;
  content: WelcomeContent;
}

export interface MethodologySlideData {
  slideId: string;
  navbarTitle?: string;
  content: MethodologyContent;
}

export interface LearningPathSlideData {
  slideId: string;
  navbarTitle?: string;
  content: LearningPathContent;
}

// ============================================
// ESTRUCTURA DE MÓDULOS
// ============================================

export interface ModuleStructure {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  status: "active" | "locked" | "completed";
  
  // Contenido del módulo
  glossary: GlossarySlideData;
  lessons: LessonStructure[];
  completion: CompletionSlideData;
}

export interface GlossarySlideData {
  slideId: string;
  navbarTitle?: string;
  title: string;
  subtitle: string;
  image: string;
  imageCaption: string;
  terms: GlossaryTerm[];
  helperText: string;
  quote: string;
}

export interface CompletionSlideData {
  slideId: string;
  navbarTitle?: string;
  content: CompletionContent;
}

// ============================================
// ESTRUCTURA DE LECCIONES
// ============================================

export interface LessonStructure {
  id: string;
  number: number;
  title: string;
  description?: string;
  slides: SlideStructure[];
}

// ============================================
// ESTRUCTURA DE SLIDES
// ============================================

export interface SlideStructure {
  id: string;
  type: SlideType;
  order: number;
  content: SlideContent;
  // Metadata para navegación
  isRequired?: boolean;
  estimatedTime?: string; // "2:30" en minutos:segundos
}

// ============================================
// HELPERS PARA CREAR SLIDES
// ============================================

export function createContentSlide(
  id: string,
  order: number,
  content: SlideContent
): SlideStructure {
  return {
    id,
    type: "content",
    order,
    content,
  };
}

export function createZoneDetailSlide(
  id: string,
  order: number,
  zoneName: string,
  zoneColor: "green" | "yellow" | "red",
  content: Omit<SlideContent, "zoneName" | "zoneColor">
): SlideStructure {
  return {
    id,
    type: "zone-detail",
    order,
    content: {
      ...content,
      zoneName,
      zoneColor,
    },
  };
}

export function createActivitySlide(
  id: string,
  order: number,
  questions: Question[],
  scenario?: Scenario
): SlideStructure {
  return {
    id,
    type: "activity",
    order,
    content: {
      questions,
      scenario,
    },
    isRequired: true,
  };
}

export function createQuizSlide(
  id: string,
  order: number,
  exercise: ImageMatchingExercise
): SlideStructure {
  return {
    id,
    type: "quiz",
    order,
    content: {
      imageMatching: exercise,
    },
    isRequired: true,
  };
}

// ============================================
// CÁLCULOS DE PROGRESO
// ============================================

export interface CourseProgress {
  courseId: string;
  currentPath: NavigationPath;
  completedSlides: Set<string>;
  totalSlides: number;
  progressPercentage: number;
}

export interface NavigationPath {
  moduleId: string | null;
  lessonId: string | null;
  slideId: string;
  slideIndex: number;
}

export function calculateTotalSlides(course: CourseStructure): number {
  // 4 slides de introducción (cover, welcome, methodology, learningPath)
  let total = 4;
  
  for (const module of course.modules) {
    // 1 slide de glosario + 1 de completion
    total += 2;
    
    for (const lesson of module.lessons) {
      total += lesson.slides.length;
    }
  }
  
  return total;
}

export function getSlidePosition(
  course: CourseStructure,
  path: NavigationPath
): { current: number; total: number; lessonCurrent: number; lessonTotal: number } {
  const total = calculateTotalSlides(course);
  let current = 0;
  let lessonCurrent = 0;
  let lessonTotal = 0;
  
  // Count intro slides
  const introSlideIds = [
    course.introduction.cover.slideId,
    course.introduction.welcome.slideId,
    course.introduction.methodology.slideId,
    course.introduction.learningPath.slideId,
  ];
  
  const introIndex = introSlideIds.indexOf(path.slideId);
  if (introIndex !== -1) {
    current = introIndex + 1;
    lessonCurrent = introIndex + 1;
    lessonTotal = 4;
    return { current, total, lessonCurrent, lessonTotal };
  }
  
  current = 4; // Start after intro
  
  for (const module of course.modules) {
    // Check glossary
    if (module.glossary.slideId === path.slideId) {
      current += 1;
      lessonCurrent = 1;
      lessonTotal = module.lessons.reduce((acc, l) => acc + l.slides.length, 0) + 2;
      return { current, total, lessonCurrent, lessonTotal };
    }
    current += 1;
    
    // Check lessons
    for (const lesson of module.lessons) {
      for (let i = 0; i < lesson.slides.length; i++) {
        if (lesson.slides[i].id === path.slideId) {
          current += i + 1;
          lessonCurrent = i + 1;
          lessonTotal = lesson.slides.length;
          return { current, total, lessonCurrent, lessonTotal };
        }
      }
      current += lesson.slides.length;
    }
    
    // Check completion
    if (module.completion.slideId === path.slideId) {
      lessonCurrent = lessonTotal;
      return { current, total, lessonCurrent, lessonTotal };
    }
    current += 1;
  }
  
  return { current: 1, total, lessonCurrent: 1, lessonTotal: 1 };
}

// ============================================
// NAVEGACIÓN
// ============================================

export function getNextSlide(
  course: CourseStructure,
  currentSlideId: string
): string | null {
  const allSlides = flattenSlides(course);
  const currentIndex = allSlides.findIndex(s => s.id === currentSlideId);
  
  if (currentIndex === -1 || currentIndex === allSlides.length - 1) {
    return null;
  }
  
  return allSlides[currentIndex + 1].id;
}

export function getPreviousSlide(
  course: CourseStructure,
  currentSlideId: string
): string | null {
  const allSlides = flattenSlides(course);
  const currentIndex = allSlides.findIndex(s => s.id === currentSlideId);
  
  if (currentIndex <= 0) {
    return null;
  }
  
  return allSlides[currentIndex - 1].id;
}

interface FlatSlide {
  id: string;
  type: SlideType | "cover" | "welcome" | "methodology" | "learning-path" | "glossary" | "completion";
  moduleId?: string;
  lessonId?: string;
}

export function flattenSlides(course: CourseStructure): FlatSlide[] {
  const slides: FlatSlide[] = [];
  
  // Intro slides
  slides.push({ id: course.introduction.cover.slideId, type: "cover" });
  slides.push({ id: course.introduction.welcome.slideId, type: "welcome" });
  slides.push({ id: course.introduction.methodology.slideId, type: "methodology" });
  slides.push({ id: course.introduction.learningPath.slideId, type: "learning-path" });
  
  // Module slides
  for (const module of course.modules) {
    slides.push({ 
      id: module.glossary.slideId, 
      type: "glossary",
      moduleId: module.id 
    });
    
    for (const lesson of module.lessons) {
      for (const slide of lesson.slides) {
        slides.push({
          id: slide.id,
          type: slide.type,
          moduleId: module.id,
          lessonId: lesson.id,
        });
      }
    }
    
    slides.push({ 
      id: module.completion.slideId, 
      type: "completion",
      moduleId: module.id 
    });
  }
  
  return slides;
}

// ============================================
// OBTENER SLIDE POR ID
// ============================================

export function getSlideById(
  course: CourseStructure,
  slideId: string
): { type: string; data: unknown; moduleId?: string; lessonId?: string } | null {
  // Check intro slides
  if (course.introduction.cover.slideId === slideId) {
    return { type: "cover", data: course.introduction.cover };
  }
  if (course.introduction.welcome.slideId === slideId) {
    return { type: "welcome", data: course.introduction.welcome };
  }
  if (course.introduction.methodology.slideId === slideId) {
    return { type: "methodology", data: course.introduction.methodology };
  }
  if (course.introduction.learningPath.slideId === slideId) {
    return { type: "learning-path", data: course.introduction.learningPath };
  }
  
  // Check module slides
  for (const module of course.modules) {
    if (module.glossary.slideId === slideId) {
      return { type: "glossary", data: module.glossary, moduleId: module.id };
    }
    
    for (const lesson of module.lessons) {
      for (const slide of lesson.slides) {
        if (slide.id === slideId) {
          return { 
            type: slide.type, 
            data: slide, 
            moduleId: module.id, 
            lessonId: lesson.id 
          };
        }
      }
    }
    
    if (module.completion.slideId === slideId) {
      return { type: "completion", data: module.completion, moduleId: module.id };
    }
  }
  
  return null;
}

// ============================================
// CONVERTIR MÓDULOS PARA COMPONENTES
// ============================================

export function getModulesForDisplay(course: CourseStructure): Module[] {
  return course.modules.map(m => ({
    id: m.id,
    number: m.number,
    title: m.title,
    subtitle: m.subtitle,
    thumbnail: m.thumbnail,
    status: m.status,
    lessons: m.lessons.map(l => ({
      id: l.id,
      number: l.number,
      title: l.title,
      slides: l.slides.map(s => ({
        id: s.id,
        type: s.type,
        content: s.content,
      })),
    })),
    glossary: m.glossary.terms,
    objectives: [],
    completion: m.completion.content,
  }));
}

// ============================================
// VALIDACIONES DE ESTRUCTURA DE PLANTILLA
// ============================================

export function getCourseSlideTypesInOrder(course: CourseStructure): string[] {
  return flattenSlides(course).map((slide) => slide.type);
}

export function validateTemplateSequence(
  course: CourseStructure,
  sequence: TemplateSlideBlueprint[] = DEFAULT_TEMPLATE_SEQUENCE
): { ok: boolean; missingRequired: string[] } {
  const types = new Set(getCourseSlideTypesInOrder(course));
  const missingRequired = sequence
    .filter((item) => item.required)
    .map((item) => item.key)
    .filter((requiredKey) => !types.has(requiredKey));

  return { ok: missingRequired.length === 0, missingRequired };
}
