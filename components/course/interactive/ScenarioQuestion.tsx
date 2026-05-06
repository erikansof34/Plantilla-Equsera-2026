"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Scenario } from "@/lib/course/types";

export interface ScenarioQuestionProps {
  /** Datos del escenario */
  scenario: Scenario;
  /** Callback cuando se responde */
  onAnswer?: (isCorrect: boolean) => void;
  /** Clase adicional */
  className?: string;
}

export function ScenarioQuestion({
  scenario,
  onAnswer,
  className,
}: ScenarioQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasConfirmed, setHasConfirmed] = useState(false);

  const handleSelect = (optionId: string) => {
    if (hasConfirmed) return;
    setSelectedOption(optionId);
  };

  const handleConfirm = () => {
    if (!selectedOption || hasConfirmed) return;
    setHasConfirmed(true);
    const isCorrect = selectedOption === scenario.correctAnswer;
    onAnswer?.(isCorrect);
  };

  const getOptionState = (optionId: string) => {
    if (!hasConfirmed) {
      return selectedOption === optionId ? "selected" : "default";
    }
    if (optionId === scenario.correctAnswer) {
      return "correct";
    }
    if (optionId === selectedOption && optionId !== scenario.correctAnswer) {
      return "incorrect";
    }
    return "default";
  };

  const optionStateClasses = {
    default: "border-gray-200 bg-white hover:border-gray-300",
    selected: "border-course-green-dark bg-course-green-dark/5",
    correct: "border-zone-green bg-zone-green-bg",
    incorrect: "border-zone-red bg-zone-red-bg",
  };

  return (
    <div className={cn("", className)}>
      {/* Scenario Image */}
      {scenario.image && (
        <div className="relative h-52 rounded-[24px] overflow-hidden mb-4">
          <Image
            src={scenario.image}
            alt="Escenario"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      )}

      {/* Scenario Badge & Title */}
      <div className="mb-4">
        <span className="text-xs font-bold uppercase tracking-[1.2px] text-course-text-muted">
          {scenario.badge}
        </span>
        <h3 className="text-[18px] leading-[1.45] font-semibold italic text-course-text-primary mt-1">
          {`"${scenario.description}"`}
        </h3>
      </div>

      {/* Question */}
      <p className="text-lg font-bold text-course-text-primary mb-4">
        {scenario.question}
      </p>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {scenario.options.map((option) => {
          const state = getOptionState(option.id);

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={hasConfirmed}
              className={cn(
                "w-full flex items-start gap-3 p-4 rounded-[18px] border-2 transition-all text-left",
                optionStateClasses[state],
                hasConfirmed && "cursor-default"
              )}
            >
              <span
                className={cn(
                  "flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-full text-sm font-semibold",
                  state === "selected" || state === "correct"
                    ? "bg-course-green-dark text-white"
                    : state === "incorrect"
                    ? "bg-zone-red text-white"
                    : "bg-gray-100 text-course-text-secondary"
                )}
              >
                {state === "correct" || (state === "selected" && hasConfirmed) ? (
                  <Check className="h-4 w-4" />
                ) : (
                  option.label
                )}
              </span>
              <span className="text-[15px] text-course-text-primary leading-[1.55] flex-1">
                {option.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Key Insight (shown after answering) */}
      {hasConfirmed && (
        <div className="bg-course-cream rounded-[20px] p-4 border border-[#E7E3DB]">
          <div className="flex items-start gap-3">
            <Star className="h-5 w-5 text-course-gold flex-shrink-0 mt-0.5" />
            <p className="text-[15px] text-course-text-primary leading-[1.6]">
              {scenario.keyInsight}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScenarioQuestion;
