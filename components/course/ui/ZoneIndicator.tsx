"use client";

import { cn } from "@/lib/utils";
import type { ZoneColor } from "@/lib/course/types";

export interface ZoneIndicatorProps {
  /** Color de la zona */
  zone: ZoneColor;
  /** Título de la zona */
  title: string;
  /** Descripción de la zona */
  description: string;
  /** Variante de visualización */
  variant?: "card" | "inline" | "badge";
  /** Clase adicional */
  className?: string;
}

const zoneConfig = {
  green: {
    bgClass: "bg-zone-green-bg",
    borderClass: "border-l-zone-green",
    textClass: "text-zone-green",
    label: "Zona Segura",
  },
  yellow: {
    bgClass: "bg-zone-yellow-bg",
    borderClass: "border-l-zone-yellow",
    textClass: "text-zone-yellow",
    label: "Zona Precaución",
  },
  red: {
    bgClass: "bg-zone-red-bg",
    borderClass: "border-l-zone-red",
    textClass: "text-zone-red",
    label: "Zona Riesgo",
  },
};

export function ZoneIndicator({
  zone,
  title,
  description,
  variant = "card",
  className,
}: ZoneIndicatorProps) {
  const config = zoneConfig[zone];

  if (variant === "badge") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold uppercase",
          config.bgClass,
          config.textClass,
          className
        )}
      >
        {title || config.label}
      </span>
    );
  }

  if (variant === "inline") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 p-3 rounded-lg border-l-4",
          config.bgClass,
          config.borderClass,
          className
        )}
      >
        <p className="text-sm text-course-text-primary">{description}</p>
      </div>
    );
  }

  // Default: card variant
  return (
    <div
      className={cn(
        "p-4 rounded-lg border-l-4",
        config.bgClass,
        config.borderClass,
        className
      )}
    >
      <h4 className={cn("text-sm font-semibold mb-1", config.textClass)}>
        {title}
      </h4>
      <p className="text-sm text-course-text-secondary">{description}</p>
    </div>
  );
}

export default ZoneIndicator;
