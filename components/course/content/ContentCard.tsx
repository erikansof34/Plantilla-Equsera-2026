"use client";

import { Heart, Star, Sparkles, Info, AlertTriangle, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ZoneColor } from "@/lib/course/types";

export interface ContentCardProps {
  /** Contenido de la tarjeta */
  children: React.ReactNode;
  /** Variante de la tarjeta */
  variant?:
    | "default"
    | "cream"
    | "quote"
    | "tip"
    | "editorial"
    | "zone-green"
    | "zone-yellow"
    | "zone-red"
    | "highlight"
    | "info";
  /** Ícono a mostrar */
  icon?: "heart" | "star" | "sparkle" | "info" | "warning" | "quote" | "custom";
  /** Ícono personalizado */
  customIcon?: React.ReactNode;
  /** Badge/etiqueta superior */
  badge?: string;
  /** Color de la zona (si aplica) */
  zoneColor?: ZoneColor;
  /** Clase adicional */
  className?: string;
}

const iconComponents = {
  heart: Heart,
  star: Star,
  sparkle: Sparkles,
  info: Info,
  warning: AlertTriangle,
  quote: Quote,
  custom: null,
};

export function ContentCard({
  children,
  variant = "default",
  icon,
  customIcon,
  badge,
  zoneColor,
  className,
}: ContentCardProps) {
  const Icon = icon && icon !== "custom" ? iconComponents[icon] : null;

  const variantClasses = {
    default: "bg-white border border-gray-100",
    cream: "bg-course-cream border-none",
    quote: "bg-course-beige-light border-none italic",
    tip: "bg-course-cream border-none",
    editorial: "bg-course-cream border-none",
    "zone-green": "bg-zone-green-bg border-l-4 border-l-zone-green",
    "zone-yellow": "bg-zone-yellow-bg border-l-4 border-l-zone-yellow",
    "zone-red": "bg-zone-red-bg border-l-4 border-l-zone-red",
    highlight: "bg-course-gold/10 border-none",
    info: "bg-blue-50 border-l-4 border-l-blue-500",
  };

  const iconColorClasses = {
    default: "text-course-gold",
    cream: "text-course-gold",
    quote: "text-course-gold",
    tip: "text-rose-500",
    editorial: "text-course-gold",
    "zone-green": "text-zone-green",
    "zone-yellow": "text-zone-yellow",
    "zone-red": "text-zone-red",
    highlight: "text-course-gold",
    info: "text-blue-500",
  };

  // Si tiene zoneColor, sobrescribir la variante
  const effectiveVariant = zoneColor ? `zone-${zoneColor}` as typeof variant : variant;

  return (
    <div
      className={cn(
        "rounded-xl p-4",
        variantClasses[effectiveVariant],
        className
      )}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wide bg-course-green-dark text-white rounded-full">
          {badge}
        </span>
      )}

      <div className="flex gap-3">
        {(Icon || customIcon) && (
          <span className={cn("flex-shrink-0 mt-0.5", iconColorClasses[effectiveVariant])}>
            {Icon ? <Icon className="h-5 w-5" /> : customIcon}
          </span>
        )}
        <div className="flex-1">
          {typeof children === "string" ? (
            <p className="text-sm text-course-text-primary leading-relaxed">
              {children}
            </p>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
