"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { QuestionFeedback, QuestionOption } from "@/lib/course/types";

export interface MultipleChoiceProps {
  /** Pregunta a mostrar */
  question: string;
  /** Contexto adicional (opcional) */
  context?: string;
  /** Opciones de respuesta */
  options: QuestionOption[];
  /** Respuesta correcta (id de la opción) */
  correctAnswer: string;
  /** Callback cuando se selecciona una opción */
  onSelect?: (optionId: string) => void;
  /** Callback cuando se confirma la respuesta */
  onConfirm?: (isCorrect: boolean) => void;
  /** Opción seleccionada (modo controlado) */
  selectedOptionId?: string | null;
  /** Estado confirmado (modo controlado) */
  isConfirmed?: boolean;
  /** Si la pregunta ya fue respondida */
  isAnswered?: boolean;
  /** Mostrar feedback */
  showFeedback?: boolean;
  /** Mensajes de feedback personalizados */
  feedback?: QuestionFeedback;
  /** Clase adicional */
  className?: string;
}

export function MultipleChoice({
  question,
  context,
  options,
  correctAnswer,
  onSelect,
  onConfirm,
  selectedOptionId,
  isConfirmed,
  isAnswered = false,
  showFeedback = false,
  feedback,
  className,
}: MultipleChoiceProps) {
  const [internalSelectedOption, setInternalSelectedOption] = useState<string | null>(null);
  const [internalConfirmed, setInternalConfirmed] = useState(isAnswered);
  const selectedOption = selectedOptionId ?? internalSelectedOption;
  const hasConfirmed = isConfirmed ?? internalConfirmed;

  const handleSelect = (optionId: string) => {
    if (hasConfirmed) return;
    if (selectedOptionId === undefined) {
      setInternalSelectedOption(optionId);
    }
    onSelect?.(optionId);
  };

  const handleConfirmInternal = () => {
    if (!selectedOption || hasConfirmed || isConfirmed !== undefined) return;
    setInternalConfirmed(true);
    const isCorrect = selectedOption === correctAnswer;
    onConfirm?.(isCorrect);
  };

  const getOptionState = (optionId: string) => {
    if (!hasConfirmed) {
      return selectedOption === optionId ? "selected" : "default";
    }
    if (optionId === correctAnswer) {
      return "correct";
    }
    if (optionId === selectedOption && optionId !== correctAnswer) {
      return "incorrect";
    }
    return "default";
  };

  const optionStateClasses = {
    default: "border-gray-200 bg-white hover:border-gray-300",
    selected: "border-course-green-dark bg-course-green-dark/5",
    correct: "border-zone-green bg-white",
    incorrect: "border-zone-red bg-white",
  };

  const labelStateClasses = {
    default: "bg-gray-100 text-course-text-secondary",
    selected: "bg-course-green-dark text-white",
    correct: "bg-course-green-dark text-white",
    incorrect: "bg-course-green-dark text-white",
  };

  return (
    <div className={cn("", className)}>
      {/* Question */}
      <h3 className="text-base font-semibold text-course-text-primary mb-2">
        {question}
      </h3>

      {context && (
        <p className="text-sm text-course-text-secondary mb-4">{context}</p>
      )}

      {/* Options */}
      <div className="space-y-3">
        {options.map((option) => {
          const state = getOptionState(option.id);
          const isSelected = selectedOption === option.id;
          const labelClass = hasConfirmed
            ? isSelected
              ? labelStateClasses.selected
              : labelStateClasses.default
            : labelStateClasses[state];

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={hasConfirmed}
              className={cn(
                "w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left",
                optionStateClasses[state],
                hasConfirmed && "cursor-default"
              )}
            >
              {/* Option Label (A, B, C) */}
              <span
                className={cn(
                  "flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-full text-sm font-semibold",
                  labelClass
                )}
              >
                {option.label}
              </span>

              {/* Option Text */}
              <span className="text-sm text-course-text-primary flex-1">
                {option.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {showFeedback && hasConfirmed && (
        <div
          className={cn(
            "mt-4 p-4 rounded-xl",
            selectedOption === correctAnswer
              ? "bg-zone-green-bg"
              : "bg-zone-red-bg"
          )}
        >
          <p className="text-sm font-semibold">
            {selectedOption === correctAnswer
              ? feedback?.correct || "Respuesta correcta"
              : feedback?.incorrect || "Respuesta incorrecta"}
          </p>
        </div>
      )}

      {/* Confirmación opcional para modo interno/no controlado */}
      {!hasConfirmed && isConfirmed === undefined && selectedOption && (
        <button
          type="button"
          onClick={handleConfirmInternal}
          className="mt-4 rounded-xl bg-course-green-dark px-4 py-2 text-sm font-semibold text-white"
        >
          Confirmar respuesta
        </button>
      )}
    </div>
  );
}

export default MultipleChoice;
