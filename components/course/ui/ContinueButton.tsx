"use client";

import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface ContinueButtonProps {
  /** Texto del botón */
  label?: string;
  /** Variante del botón */
  variant?: "primary" | "secondary" | "confirm" | "finish";
  /** Estado deshabilitado */
  disabled?: boolean;
  /** Estado de carga */
  loading?: boolean;
  /** Mostrar ícono de flecha */
  showArrow?: boolean;
  /** Mostrar ícono de check */
  showCheck?: boolean;
  /** Callback al hacer clic */
  onClick?: () => void;
  /** Clase adicional */
  className?: string;
  /** Full width */
  fullWidth?: boolean;
}

const variantLabels: Record<string, string> = {
  primary: "Continuar",
  secondary: "Continuar",
  confirm: "Confirmar respuesta",
  finish: "Finalizar",
};

export function ContinueButton({
  label,
  variant = "primary",
  disabled = false,
  loading = false,
  showArrow = true,
  showCheck = false,
  onClick,
  className,
  fullWidth = true,
}: ContinueButtonProps) {
  const buttonLabel = label || variantLabels[variant];

  const variantClasses = {
    primary: "bg-course-green-dark hover:bg-course-green-dark/90 text-white",
    secondary: "bg-course-green-mint hover:bg-course-green-mint/90 text-course-green-dark",
    confirm: "bg-course-green-dark hover:bg-course-green-dark/90 text-white",
    finish: "bg-course-green-dark hover:bg-course-green-dark/90 text-white",
  };

  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "rounded-[24px] h-[68px] text-lg transition-all",
        variantClasses[variant],
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
          {buttonLabel}
          {showArrow && !showCheck && <ArrowRight className="h-5 w-5" />}
          {showCheck && <Check className="h-5 w-5" />}
        </span>
      )}
    </Button>
  );
}

export default ContinueButton;
