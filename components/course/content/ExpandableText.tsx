"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ExpandableTextProps {
  /** Texto de preview (siempre visible) */
  preview: string;
  /** Texto completo (visible al expandir) */
  fullText: string;
  /** Número máximo de caracteres para preview si no se especifica */
  maxPreviewLength?: number;
  /** Texto del botón expandir */
  expandLabel?: string;
  /** Texto del botón contraer */
  collapseLabel?: string;
  /** Clase adicional */
  className?: string;
}

export function ExpandableText({
  preview,
  fullText,
  maxPreviewLength = 150,
  expandLabel = "Ver más",
  collapseLabel = "Ver menos",
  className,
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Si no hay fullText o es igual al preview, no mostrar botón
  const hasMoreContent = fullText && fullText.length > preview.length;

  const displayText = isExpanded ? fullText : preview;

  return (
    <div className={cn("", className)}>
      <p className="text-sm text-course-text-primary leading-relaxed">
        {displayText}
        {!isExpanded && hasMoreContent && "..."}
      </p>

      {hasMoreContent && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-course-text-secondary hover:text-course-text-primary transition-colors"
        >
          {isExpanded ? collapseLabel : expandLabel}
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      )}
    </div>
  );
}

export default ExpandableText;
