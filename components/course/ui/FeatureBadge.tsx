"use client";

import { Clock, GraduationCap, MousePointerClick, BookOpen, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureBadgeProps {
  /** Tipo de ícono */
  icon: "clock" | "graduation" | "interactive" | "book" | "sparkle" | "custom";
  /** Texto del badge */
  label: string;
  /** Ícono personalizado (cuando icon es "custom") */
  customIcon?: React.ReactNode;
  /** Variante del badge */
  variant?: "default" | "dark" | "light";
  /** Clase adicional */
  className?: string;
}

const iconMap = {
  clock: Clock,
  graduation: GraduationCap,
  interactive: MousePointerClick,
  book: BookOpen,
  sparkle: Sparkles,
  custom: null,
};

export function FeatureBadge({
  icon,
  label,
  customIcon,
  variant = "default",
  className,
}: FeatureBadgeProps) {
  const Icon = icon !== "custom" ? iconMap[icon] : null;

  const variantClasses = {
    default: "bg-course-cream text-course-text-primary",
    dark: "bg-course-green-dark/10 text-course-green-dark",
    light: "bg-white/90 text-course-text-primary",
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-5 py-4 rounded-lg",
        variantClasses[variant],
        className
      )}
    >
      <span className="text-course-gold">
        {Icon ? <Icon className="h-5 w-5" /> : customIcon}
      </span>
      <span className="text-sm font-medium uppercase tracking-wide">{label}</span>
    </div>
  );
}

export default FeatureBadge;
