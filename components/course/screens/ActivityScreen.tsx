"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CourseLayout } from "../layouts/CourseLayout";
import { BackButton } from "../ui/BackButton";
import { ContinueButton } from "../ui/ContinueButton";
import { ContentCard } from "../content/ContentCard";
import { ImageWithOverlay } from "../media/ImageWithOverlay";
import { MultipleChoice } from "../interactive/MultipleChoice";
import { ScenarioQuestion } from "../interactive/ScenarioQuestion";
import { CourseTitle } from "../ui/Typography";
import type { Question, Scenario, ZoneColor } from "@/lib/course/types";

export interface ActivityScreenProps {
  /** Título de la actividad */
  title: string;
  /** Subtítulo/instrucciones */
  subtitle: string;
  /** Progreso de la actividad */
  progressPercentage?: number;
  /** Preguntas de la actividad */
  questions: Question[];
  /** Escenario (si aplica) */
  scenario?: Scenario;
  /** Callback al finalizar */
  onFinish?: (results: { questionId: string; isCorrect: boolean }[]) => void;
  /** Callback al ir atrás */
  onBack?: () => void;
  /** Key insight al finalizar */
  keyInsight?: string;
  /** Clase adicional */
  className?: string;
}

export function ActivityScreen({
  title,
  subtitle,
  progressPercentage = 0,
  questions,
  scenario,
  onFinish,
  onBack,
  keyInsight,
  className,
}: ActivityScreenProps) {
  const steps = scenario ? [...questions, { id: scenario.id, type: "scenario" as const }] : questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState<{ questionId: string; isCorrect: boolean }[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const totalQuestions = steps.length;
  const currentProgress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleQuestionAnswer = (questionId: string, isCorrect: boolean) => {
    const newResults = [...results, { questionId, isCorrect }];
    setResults(newResults);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsComplete(true);
      onFinish?.([...results]);
    }
  };

  const isScenarioStep = Boolean(scenario && currentQuestionIndex === questions.length);
  const currentQuestion = !isScenarioStep ? questions[currentQuestionIndex] : null;

  return (
    <CourseLayout
      headerProps={{
        lessonNumber: 1,
        totalLessons: 1,
        titleOverride: "ACTIVIDAD PRÁCTICA",
        progressPercentage: progressPercentage || currentProgress,
        variant: "activity",
        onBack,
      }}
      className={className}
    >
      <div className="px-6 py-4 bg-[#FBF9F4]">
        {/* Title */}
        <div className="mb-6">
          <CourseTitle className="text-[#051B0F]">{title}</CourseTitle>
          <p className="course-subtitle-text mt-2">{subtitle}</p>
        </div>

        {/* Question Image */}
        {currentQuestion?.image && (
          <ImageWithOverlay
            src={currentQuestion.image}
            alt="Imagen de la pregunta"
            zoneBadge={
              currentQuestion.imageLabel
                ? { text: currentQuestion.imageLabel, color: "red" }
                : undefined
            }
            height={180}
            className="mb-6 rounded-[24px]"
          />
        )}

        {/* Question Context */}
        {currentQuestion?.context && (
          <p className="text-lg font-semibold text-course-text-primary mb-4">
            {currentQuestion.context}
          </p>
        )}

        {/* Multiple Choice Question */}
        {currentQuestion && currentQuestion.type === "multiple-choice" && (
          <MultipleChoice
            question={currentQuestion.question}
            options={currentQuestion.options}
            correctAnswer={currentQuestion.correctAnswer as string}
            onConfirm={(isCorrect) =>
              handleQuestionAnswer(currentQuestion.id, isCorrect)
            }
            showFeedback
            className="mb-6"
          />
        )}

        {/* Scenario Question */}
        {isScenarioStep && scenario && (
          <ScenarioQuestion
            scenario={scenario}
            onAnswer={(isCorrect) => handleQuestionAnswer(scenario.id, isCorrect)}
            className="mb-6"
          />
        )}

        {/* Key Insight (after all questions) */}
        {isComplete && keyInsight && (
          <ContentCard variant="highlight" icon="star" className="mb-6 rounded-[20px]">
            <p className="text-[15px] text-course-text-primary leading-[1.6]">
              {keyInsight}
            </p>
          </ContentCard>
        )}

        {/* Navigation Buttons */}
        <div className="pb-2">
          <div className="grid grid-cols-2 gap-3">
            <BackButton onClick={onBack} fullWidth />
            <ContinueButton
              label={isComplete ? "Finalizar" : "Continuar"}
              variant={isComplete ? "finish" : "primary"}
              onClick={handleNext}
              showArrow
              fullWidth
            />
          </div>
        </div>
      </div>
    </CourseLayout>
  );
}

export default ActivityScreen;
