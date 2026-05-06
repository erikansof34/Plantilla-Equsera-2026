"use client";

import { cn } from "@/lib/utils";
import { CourseLayout } from "../layouts/CourseLayout";
import { BackButton } from "../ui/BackButton";
import { ContinueButton } from "../ui/ContinueButton";
import { CitationCard } from "../content/CitationCard";
import { GlossarySearch } from "../interactive/GlossarySearch";
import { CourseTitle, CourseParagraph } from "../ui/Typography";
import type { GlossaryTerm } from "@/lib/course/types";

export interface GlossaryScreenProps {
  /** Número de lección */
  lessonNumber: number;
  /** Total de lecciones */
  totalLessons: number;
  /** Título del módulo */
  moduleTitle: string;
  /** Subtítulo/descripción del glosario */
  subtitle: string;
  /** Imagen del glosario */
  glossaryImage?: string;
  /** Texto de la imagen */
  imageCaption?: string;
  /** Términos del glosario */
  terms: GlossaryTerm[];
  /** Texto de ayuda */
  helperText?: string;
  /** Cita destacada */
  quote?: string;
  /** Título para el navbar */
  navbarTitle?: string;
  /** Callback al continuar */
  onContinue?: () => void;
  /** Callback al ir atrás */
  onBack?: () => void;
  /** Progreso */
  progressPercentage?: number;
  /** Clase adicional */
  className?: string;
}

const GLOSSARY_INTRO_COPY = [
  "En ésta sección aprenderás las palabras y",
  "términos más utilizados en la industria",
  "equina, vinculados a cada segmento del",
  "aprendizaje. Si deseas consultarlos de",
  "nuevo, podrás encontrarlos en orden",
  "alfabético o utilizar el buscador de términos",
  "para mayor facilidad.",
].join("\n");

export function GlossaryScreen({
  lessonNumber,
  totalLessons,
  subtitle,
  terms,
  quote,
  navbarTitle,
  onContinue,
  onBack,
  progressPercentage,
  className,
}: GlossaryScreenProps) {
  return (
    <CourseLayout
      headerProps={{
        lessonNumber,
        totalLessons,
        progressPercentage: progressPercentage ?? 40,
        navbarTitle,
        showPercentageText: true,
        onBack,
      }}
      className={className}
    >
      <div className="px-6 py-4 bg-[#FBF9F4]">
        {/* Título fijo de plantilla (no usa el título del módulo) */}
        <div className="mb-6">
          <CourseTitle className="text-course-text-primary leading-snug">
            Glosario Equino:
          </CourseTitle>
          {subtitle && (
            <p className="mt-1 font-bold text-course-text-primary text-base">
              {subtitle}
            </p>
          )}
          <CourseParagraph className="mt-3 text-course-text-secondary leading-relaxed whitespace-pre-line">
            {GLOSSARY_INTRO_COPY}
          </CourseParagraph>
        </div>

        {/* Glossary Terms */}
        <GlossarySearch terms={terms} className="mb-6" />

        {/* Cita destacada (componente estándar plantilla Equus) */}
        {quote && (
          <CitationCard text={quote} className="mb-8" />
        )}

        {/* Navigation Buttons */}
        <div className="grid grid-cols-2 pt-32 gap-3 pb-2">
          <BackButton onClick={onBack} fullWidth />
          <ContinueButton onClick={onContinue} fullWidth />
        </div>
      </div>
    </CourseLayout>
  );
}

export default GlossaryScreen;
