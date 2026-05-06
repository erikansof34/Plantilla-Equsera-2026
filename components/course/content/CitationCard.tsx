"use client";

import type { ReactNode } from "react";
import { FaHorse } from "react-icons/fa";
import { cn } from "@/lib/utils";

export interface CitationCardProps {
  /** Texto de la cita */
  text: string;
  /** Sustituye el ícono por defecto (`FaHorse`) */
  icon?: ReactNode;
  /** Permite ocultar el ícono para variantes más limpias */
  showIcon?: boolean;
  className?: string;
}

export function CitationCard({
  text,
  icon,
  showIcon = true,
  className,
}: CitationCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-[32px] px-6 py-8 text-center",
        className
      )}
      style={{
        backgroundColor: "var(--course-citation-bg)",
        color: "var(--course-citation-text)",
      }}
    >
      {showIcon && (
        <div className="mb-5 text-[color:var(--course-citation-text)]">
          {icon ?? <FaHorse className="h-14 w-14 shrink-0" aria-hidden />}
        </div>
      )}
      <p className="max-w-[320px] text-[15px] font-medium italic leading-relaxed text-[color:var(--course-citation-text)]">
        &ldquo;{text}&rdquo;
      </p>
    </div>
  );
}

export default CitationCard;
