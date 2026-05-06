"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CourseLayout } from "../layouts/CourseLayout";
import { BackButton } from "../ui/BackButton";
import { ContinueButton } from "../ui/ContinueButton";
import { ContentCard } from "../content/ContentCard";
import { ImageMatching } from "../interactive/ImageMatching";
import type { ImageMatchingExercise, InfoCard } from "@/lib/course/types";

export interface QuizScreenProps {
  /** Número de lección */
  lessonNumber: number;
  /** Total de lecciones */
  totalLessons: number;
  /** Badge superior */
  badge: string;
  /** Título del módulo */
  moduleTitle: string;
  /** Instrucciones */
  instructions: string;
  /** Ejercicio de matching */
  exercise: ImageMatchingExercise;
  /** Dato interesante al finalizar */
  interestingFact?: InfoCard;
  /** Callback al completar */
  onComplete?: (results: Record<string, string>) => void;
  /** Callback al ir atrás */
  onBack?: () => void;
  /** Clase adicional */
  className?: string;
}

export function QuizScreen({
  lessonNumber,
  totalLessons,
  badge,
  moduleTitle,
  instructions,
  exercise,
  interestingFact,
  onComplete,
  onBack,
  className,
}: QuizScreenProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleMatchingComplete = (results: Record<string, string>) => {
    setAnswers(results);
  };

  const handleConfirm = () => {
    setIsComplete(true);
    onComplete?.(answers);
  };

  const allAnswered = Object.keys(answers).length === exercise.items.length;

  return (
    <CourseLayout
      headerProps={{
        lessonNumber,
        totalLessons,
        progressPercentage: (lessonNumber / totalLessons) * 100,
        showCloseIcon: true,
        variant: "activity",
        onBack,
      }}
      className={className}
    >
      <div className="px-6 py-4 bg-[#FBF9F4]">
        {/* Badge & Title */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-[1.4px] text-course-gold">
            {badge}
          </span>
          <h1 className="course-title-primary mt-1">
            {moduleTitle}
          </h1>
        </div>

        {/* Instructions */}
        <ContentCard variant="cream" className="mb-6 rounded-[24px] border border-[#E7E3DB] bg-[#F5F3EE]">
          <p className="text-[15px] text-course-text-primary leading-[1.65]">
            {instructions}
          </p>
        </ContentCard>

        {/* Image Matching Exercise */}
        <ImageMatching
          instructions={exercise.instructions}
          items={exercise.items}
          onComplete={handleMatchingComplete}
          className="mb-6"
        />

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3 mb-6">
          <BackButton onClick={onBack} fullWidth />
          <ContinueButton
            label="Confirmar respuestas"
            variant="primary"
            onClick={handleConfirm}
            disabled={!allAnswered}
            showArrow
            fullWidth
          />
        </div>

        {/* Interesting Fact (shown after completion) */}
        {isComplete && interestingFact && (
          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-[1.3px] text-course-gold mb-3">
              Identificar datos interesantes
            </p>
            <ContentCard variant="info" icon="info" className="rounded-[20px]">
              <p className="text-[15px] text-course-text-primary leading-[1.6]">
                {interestingFact.text}
              </p>
            </ContentCard>
          </div>
        )}
      </div>
    </CourseLayout>
  );
}

export default QuizScreen;
