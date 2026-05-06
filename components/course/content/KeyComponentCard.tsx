"use client";

import { BookOpen, Shield, FileText, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface KeyComponentCardProps {
  /** Tipo de ícono */
  icon: "book" | "shield" | "file" | "sparkle" | "custom";
  /** Título del componente */
  title: string;
  /** Ícono personalizado */
  customIcon?: React.ReactNode;
  /** Clase adicional */
  className?: string;
}

const iconMap = {
  book: BookOpen,
  shield: Shield,
  file: FileText,
  sparkle: Sparkles,
  custom: null,
};

export function KeyComponentCard({
  icon,
  title,
  customIcon,
  className,
}: KeyComponentCardProps) {
  const Icon = icon !== "custom" ? iconMap[icon] : null;

  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100",
        className
      )}
    >
      <div className="flex items-center justify-center h-10 w-10 bg-course-cream rounded-lg">
        <span className="text-course-gold">
          {Icon ? <Icon className="h-5 w-5" /> : customIcon}
        </span>
      </div>
      <span className="text-sm font-medium text-course-text-primary">{title}</span>
    </div>
  );
}

export default KeyComponentCard;
