"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ZoneColor } from "@/lib/course/types";

export type GlossaryTermCardAccent = ZoneColor | "default";

/** Borde izquierdo + badge (acentos del glosario) */
const ACCENT_BORDER: Record<GlossaryTermCardAccent, string> = {
  green: "border-l-[#052a0b]",
  yellow: "border-l-[#765a02]",
  red: "border-l-[#ba1a1a]",
  default: "border-l-course-gold",
};

/** Fondo del badge del ícono (#765a02 es oscuro → ícono blanco como verde/rojo) */
const ACCENT_ICON: Record<GlossaryTermCardAccent, string> = {
  green: "bg-[#052a0b] text-white [&_svg]:text-white",
  yellow: "bg-[#765a02] text-white [&_svg]:text-white",
  red: "bg-[#ba1a1a] text-white [&_svg]:text-white",
  default: "bg-course-gold text-white [&_svg]:text-white",
};

export interface GlossaryTermCardProps {
  /** Etiqueta superior derecha (ej. PARTES, COMUNICACIÓN) */
  category: string;
  /** Título del término */
  term: string;
  /** Definición (admite saltos de línea con \n) */
  definition: string;
  /** Acento visual: verde / amarillo / rojo / dorado por defecto */
  accent?: GlossaryTermCardAccent;
  /** Ícono ya resuelto (lucide u otro) */
  icon: ReactNode;
  className?: string;
}

/**
 * Tarjeta de término tipo glosario (borde izquierdo + badge de icono + tipografía).
 * Reutilizable fuera del buscador cuando necesites el mismo patrón visual.
 */
export function GlossaryTermCard({
  category,
  term,
  definition,
  accent = "default",
  icon,
  className,
}: GlossaryTermCardProps) {
  const a = accent ?? "default";

  return (
    <article
      className={cn(
        "rounded-[16px] border border-[#E7E3DB] border-l-4 bg-white py-4 pl-4 pr-4 shadow-[0px_10px_24px_rgba(27,28,25,0.06)]",
        ACCENT_BORDER[a],
        className
      )}
    >
      <div className="mb-2 flex items-start justify-between gap-3">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] [&_svg]:shrink-0",
            ACCENT_ICON[a]
          )}
        >
          {icon}
        </div>
        <span className="pt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-course-text-muted">
          {category}
        </span>
      </div>
      <h4 className="mb-1.5 text-[15px] font-black leading-snug text-[#052A0B]">{term}</h4>
      <p className="whitespace-pre-line text-[14px] leading-relaxed text-course-text-secondary">
        {definition}
      </p>
    </article>
  );
}

export default GlossaryTermCard;
