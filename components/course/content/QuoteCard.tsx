"use client";

import { Sparkles, Heart, Star, Quote, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

export interface QuoteCardProps {
  /** Texto de la cita */
  text: string;
  /** Variante visual */
  variant?: "default" | "highlight" | "tip" | "important" | "editorial";
  /** Tipo de ícono */
  icon?: "sparkle" | "heart" | "star" | "quote" | "lightbulb" | "none";
  /** Color de fondo personalizado */
  backgroundColor?: string;
  /** Clase adicional */
  className?: string;
}

const iconMap = {
  sparkle: Sparkles,
  heart: Heart,
  star: Star,
  quote: Quote,
  lightbulb: Lightbulb,
  none: null,
};

export function QuoteCard({
  text,
  variant = "default",
  icon = "sparkle",
  backgroundColor,
  className,
}: QuoteCardProps) {
  const Icon = icon !== "none" ? iconMap[icon] : null;

  const variantClasses = {
    default: "bg-course-cream",
    highlight: "bg-course-gold/10",
    tip: "bg-rose-50",
    important: "bg-course-green-dark/5",
    editorial: "bg-course-beige",
  };

  const iconColorClasses = {
    default: "text-course-gold",
    highlight: "text-course-gold",
    tip: "text-rose-500",
    important: "text-course-green-dark",
    editorial: "text-course-gold",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-5",
        !backgroundColor && variantClasses[variant],
        className
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {Icon && (
        <div className={cn("mb-3", iconColorClasses[variant])}>
          <Icon className="h-6 w-6" />
        </div>
      )}
      <p className="text-sm text-course-text-primary leading-relaxed italic font-medium">
        {`"${text}"`}
      </p>
    </div>
  );
}

export default QuoteCard;
