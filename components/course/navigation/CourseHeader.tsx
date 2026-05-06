"use client";

import { ArrowLeft, Menu, MoreVertical, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CourseHeaderProps {
  /** Número de lección actual */
  lessonNumber: number;
  /** Total de lecciones */
  totalLessons: number;
  /** Porcentaje de progreso (0-100) */
  progressPercentage?: number;
  /** Nombre de la zona (opcional, se muestra a la derecha) */
  zoneName?: string;
  /** Color de la zona */
  zoneColor?: "green" | "yellow" | "red";
  /** Variante del header */
  variant?: "default" | "cover" | "activity" | "completion";
  /** Texto alternativo del título (ej: "ACTIVIDAD PRÁCTICA") */
  titleOverride?: string;
  /** Título del navbar para la vista actual */
  navbarTitle?: string;
  /** Callback al presionar atrás */
  onBack?: () => void;
  /** Callback al abrir menú */
  onMenuClick?: () => void;
  /** Mostrar ícono de cierre en lugar de flecha */
  showCloseIcon?: boolean;
  /** Mostrar porcentaje de texto */
  showPercentageText?: boolean;
  /** Clase adicional */
  className?: string;
}

export function CourseHeader({
  lessonNumber,
  totalLessons,
  progressPercentage = 0,
  zoneName,
  zoneColor,
  variant = "default",
  titleOverride,
  navbarTitle,
  onBack,
  onMenuClick,
  showCloseIcon = false,
  showPercentageText = false,
  className,
}: CourseHeaderProps) {
  const zoneColorClasses = {
    green: "text-zone-green",
    yellow: "text-zone-yellow",
    red: "text-zone-red",
  };

  const progressBarColorClasses = {
    green: "bg-zone-green",
    yellow: "bg-zone-yellow",
    red: "bg-zone-red",
    default: "bg-course-gold",
  };

  if (variant === "cover") {
    return null; // Cover no tiene header
  }

  return (
    <header className={cn("sticky top-0 z-50 bg-[#FBF9F4]/90 backdrop-blur-md", className)}>
      {/* Header Row */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: Back button */}
        <button
          onClick={onBack}
          className="flex items-center justify-center h-10 w-10 rounded-full text-course-text-primary hover:opacity-70 transition-opacity"
          aria-label="Volver"
        >
          {showCloseIcon ? (
            <X className="h-5 w-5" />
          ) : (
            <ArrowLeft className="h-5 w-5" />
          )}
        </button>

        {/* Center: Navbar Title */}
        <div className="flex items-center gap-2">
          {navbarTitle ? (
            <span className="text-sm font-semibold tracking-[0.2px] text-course-text-primary uppercase">
              {navbarTitle}
            </span>
          ) : titleOverride ? (
            <span className="text-sm font-semibold tracking-[0.2px] text-course-text-primary uppercase">
              {titleOverride}
            </span>
          ) : (
            <>
              <span className="text-[18px] font-semibold tracking-[-0.35px] text-course-text-primary">
                Leccion {lessonNumber}
              </span>
              {zoneName && zoneColor && (
                <span
                  className={cn(
                    "text-sm font-semibold",
                    zoneColorClasses[zoneColor]
                  )}
                >
                  {zoneName}
                </span>
              )}
            </>
          )}
        </div>

        {/* Right: Menu / Progress */}
        <div className="flex items-center gap-2">
          {showPercentageText && (
            <span className="text-sm text-course-text-muted">
              {Math.round(progressPercentage)}%
            </span>
          )}
          <button
            onClick={onMenuClick}
            className="flex items-center justify-center h-10 w-10 rounded-full text-course-text-primary hover:opacity-70 transition-opacity"
            aria-label="Menú"
          >
            {variant === "activity" || variant === "completion" ? (
              <div className="h-5 w-5 rounded-full border-2 border-course-green-dark flex items-center justify-center">
                <span className="text-xs">?</span>
              </div>
            ) : (
              <MoreVertical className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 bg-[#E4E2DD]">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-300 ease-out",
            zoneColor
              ? progressBarColorClasses[zoneColor]
              : progressBarColorClasses.default
          )}
          style={{ width: `${Math.min(100, Math.max(0, progressPercentage))}%` }}
        />
      </div>
    </header>
  );
}

export default CourseHeader;
