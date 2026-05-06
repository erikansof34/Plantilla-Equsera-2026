"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LearningObjectiveItemProps {
  /** Texto del objetivo */
  text: string;
  /** Si está completado */
  completed?: boolean;
  /** Variante visual */
  variant?: "default" | "compact";
  /** Clase adicional */
  className?: string;
}

export function LearningObjectiveItem({
  text,
  completed = true,
  variant = "default",
  className,
}: LearningObjectiveItemProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3",
        variant === "compact" && "gap-2",
        className
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 flex items-center justify-center rounded-full",
          variant === "default" ? "h-6 w-6" : "h-5 w-5",
          completed
            ? "bg-course-green-dark text-white"
            : "bg-gray-200 text-gray-400"
        )}
      >
        <Check className={cn(variant === "default" ? "h-4 w-4" : "h-3 w-3")} />
      </div>
      <span
        className={cn(
          "text-course-text-primary leading-relaxed",
          variant === "default" ? "text-sm" : "text-xs"
        )}
      >
        {text}
      </span>
    </div>
  );
}

export default LearningObjectiveItem;
