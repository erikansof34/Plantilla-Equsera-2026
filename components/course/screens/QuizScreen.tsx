"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CourseLayout } from "../layouts/CourseLayout";
import { BackButton } from "../ui/BackButton";
import { ContinueButton } from "../ui/ContinueButton";
import { ContentCard } from "../content/ContentCard";
import { ImageMatching } from "../interactive/ImageMatching";
import { CourseTitle } from "../ui/Typography";
import { Horse } from "lucide-react";
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
  /** Callback al confirmar respuestas */
  onComplete?: (results: Record<string, string>) => void;
  /** Callback al continuar después de confirmar */
  onContinue?: () => void;
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
  onContinue,
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
      footerActions={
        <>
          <BackButton onClick={onBack} className="min-w-[200px]" />
          <ContinueButton onClick={onContinue} className="min-w-[240px]" />
        </>
      }
      className={className}
    >
      <div className="py-8 bg-[#FBF9F4] w-full">
        {/* Vertical Layout (Single Column) */}
        <div className="flex flex-col gap-8 lg:gap-12 max-w-3xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center">
            <span className="text-xs lg:text-sm font-bold uppercase tracking-[2.5px] text-course-gold">
              {badge}
            </span>
            <CourseTitle className="mt-3 text-3xl lg:text-5xl leading-tight text-[#051B0F]">
              {moduleTitle}
            </CourseTitle>
          </div>

          {/* Instructions */}
          <ContentCard variant="cream" className="rounded-[28px] border border-[#E7E3DB] bg-[#F5F3EE] p-8 lg:p-10 shadow-sm">
            <p className="text-base lg:text-lg text-course-text-primary leading-relaxed">
              {instructions}
            </p>
          </ContentCard>

          {/* Quiz / Matching Exercise */}
          <div className="w-full">
            <ImageMatching
              exercise={exercise}
              onComplete={handleMatchingComplete}
              className="[&_h3]:text-2xl lg:[&_h3]:text-3xl [&_.grid]:gap-4 lg:[&_.grid]:gap-6"
            />
          </div>

          {/* Interesting Fact (after completion) */}
          {isComplete && interestingFact && (
            <ContentCard
              variant={interestingFact.variant as any}
              badge={interestingFact.badge}
              className="rounded-[32px] p-8 lg:p-10 shadow-xl"
            >
              {interestingFact.title && (
                <h4 className="font-bold text-course-text-primary mb-3 text-xl">
                  {interestingFact.title}
                </h4>
              )}
              <p className="text-lg lg:text-xl text-course-text-primary leading-relaxed italic">
                "{interestingFact.text}"
              </p>
            </ContentCard>
          )}
        </div>

        {/* Mobile Navigation Buttons (Hidden on Web) */}
        <div className="lg:hidden mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto px-6 pb-10">
          <BackButton onClick={onBack} className="w-full sm:w-auto" />
          <ContinueButton onClick={onContinue} className="w-full sm:w-auto" />
        </div>
      </div>
    </CourseLayout>
  );
}

export default QuizScreen;
