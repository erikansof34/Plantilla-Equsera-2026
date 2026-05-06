"use client";

import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface BackButtonProps {
  /** Texto del botón */
  label?: string;
  /** Estado deshabilitado */
  disabled?: boolean;
  /** Estado de carga */
  loading?: boolean;
  /** Mostrar ícono de flecha */
  showArrow?: boolean;
  /** Callback al hacer clic */
  onClick?: () => void;
  /** Clase adicional */
  className?: string;
  /** Full width */
  fullWidth?: boolean;
}

export function BackButton({
  label = "Retroceder",
  disabled = false,
  loading = false,
  showArrow = true,
  onClick,
  className,
  fullWidth = true,
}: BackButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "rounded-[24px] h-[68px] text-lg transition-all",
        "bg-course-green-dark hover:bg-course-green-dark/90 text-white",
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          Cargando...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          {showArrow && <ArrowLeft className="h-5 w-5" />}
          {label}
        </span>
      )}
    </Button>
  );
}

export default BackButton;
