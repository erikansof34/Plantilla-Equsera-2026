"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ZoneColor } from "@/lib/course/types";

export interface ImageWithOverlayProps {
  /** URL de la imagen */
  src: string;
  /** Texto alternativo */
  alt: string;
  /** Texto de overlay */
  overlayText?: string;
  /** Posición del overlay */
  overlayPosition?: "top" | "center" | "bottom";
  /** Badge de zona */
  zoneBadge?: {
    text: string;
    color: ZoneColor;
  };
  /** Etiquetas sobre la imagen */
  labels?: Array<{
    text: string;
    position: { x: number; y: number };
    color?: ZoneColor;
  }>;
  /** Altura de la imagen */
  height?: number;
  /** Clase adicional */
  className?: string;
}

const zoneColors = {
  green: "bg-zone-green text-white",
  yellow: "bg-zone-yellow text-course-text-primary",
  red: "bg-zone-red text-white",
};

export function ImageWithOverlay({
  src,
  alt,
  overlayText,
  overlayPosition = "bottom",
  zoneBadge,
  labels,
  height = 300,
  className,
}: ImageWithOverlayProps) {
  const overlayPositionClasses = {
    top: "items-start pt-4",
    center: "items-center",
    bottom: "items-end pb-4",
  };

  return (
    <div
      className={cn("relative rounded-xl overflow-hidden", className)}
      style={{ height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 400px"
      />

      {/* Zone Badge */}
      {zoneBadge && (
        <div
          className={cn(
            "absolute top-3 left-3 px-3 py-1 rounded text-xs font-semibold uppercase",
            zoneColors[zoneBadge.color]
          )}
        >
          {zoneBadge.text}
        </div>
      )}

      {/* Labels */}
      {labels?.map((label, index) => (
        <div
          key={index}
          className={cn(
            "absolute px-2 py-1 rounded text-xs font-semibold",
            label.color ? zoneColors[label.color] : "bg-white/90 text-course-text-primary"
          )}
          style={{
            left: `${label.position.x}%`,
            top: `${label.position.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {label.text}
        </div>
      ))}

      {/* Overlay Text */}
      {overlayText && (
        <div
          className={cn(
            "absolute inset-0 flex justify-center px-4",
            overlayPositionClasses[overlayPosition]
          )}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 max-w-[90%]">
            <p className="text-sm text-course-text-primary leading-relaxed">
              {overlayText}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageWithOverlay;
