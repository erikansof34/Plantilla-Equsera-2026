"use client";

import Image from "next/image";
import { Globe, Accessibility } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Feature } from "@/lib/course/types";

export interface CoverScreenProps {
  /** Logo del curso/empresa */
  logo: string;
  /** Alt del logo */
  logoAlt?: string;
  /** Título principal (primera parte) */
  titleLine1: string;
  /** Título destacado (segunda parte, con gradiente) */
  titleLine2: string;
  /** Subtítulo descriptivo */
  subtitle: string;
  /** Features/badges del curso */
  features: Feature[];
  /** Imagen de fondo */
  backgroundImage?: string;
  /** Texto del botón CTA */
  ctaLabel?: string;
  /** Texto inferior de ayuda */
  helperText?: string;
  /** Callback del botón CTA */
  onStart?: () => void;
  /** Mostrar selector de idioma */
  showLanguageSelector?: boolean;
  /** Mostrar botón de accesibilidad */
  showAccessibility?: boolean;
  /** Clase adicional */
  className?: string;
}

export function CoverScreen({
  logo,
  logoAlt = "Logo",
  titleLine1,
  titleLine2,
  subtitle,
  features,
  backgroundImage,
  ctaLabel = "COMENZAR",
  helperText,
  onStart,
  showLanguageSelector = true,
  showAccessibility = true,
  className,
}: CoverScreenProps) {
  return (
    <div
      className={cn(
        "course-theme min-h-screen flex flex-col relative overflow-hidden bg-[#101411]",
        className
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover scale-[1.06]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#101411]/80 via-[#101411]/45 to-[#101411]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,42,11,0.55)_0%,rgba(16,20,17,0.2)_70%)]" />
        </div>
      )}

      {/* Fallback dark background */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2f1a] to-[#0d1a0d] z-0" />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between px-8 pt-6 pb-6 bg-[#101411]/70 backdrop-blur-md border-b border-white/10">
          <div className="relative h-11 w-12">
            <Image
              src={logo}
              alt={logoAlt}
              fill
              className="object-contain brightness-0 invert"
            />
          </div>

          <div className="flex items-center gap-3">
            {showLanguageSelector && (
              <button className="flex items-center gap-2 text-[#E7C267] hover:text-[#F3D98D] text-xl font-bold">
                <span className="text-sm">ES</span>
                <Globe className="h-[18px] w-[18px] text-[#A8D1A3]" />
              </button>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col px-8 pt-8 pb-10">
          {/* Title */}
          <div className="text-center mb-7">
            <h1 className="font-sans font-black tracking-[-0.9px] drop-shadow-[0_0_10px_rgba(0,0,0,0.9)]">
              <span className="block text-[36px] leading-[39px] text-white mb-1">
                {titleLine1}
              </span>
              <span className="block text-[36px] leading-[39px] bg-gradient-to-b from-[#F0D58A] to-[#C59225] bg-clip-text text-transparent">
                {titleLine2}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="flex justify-center mb-4">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#E7C267] to-transparent" />
          </div>
          <p className="text-center text-white/90 text-xs uppercase tracking-[3px] mb-8 max-w-sm mx-auto leading-[1.35] font-bold">
            {subtitle}
          </p>

          {/* Features */}
          <div className="space-y-4 mb-auto">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="rounded-2xl bg-black/60 border border-white/10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md px-6 py-5 flex items-center gap-4"
              >
                <span className="text-course-gold text-lg">•</span>
                <span className="text-[#A8D1A3] text-sm leading-none uppercase tracking-[1.4px] font-bold">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="px-8 pb-8">
          {/* CTA Button */}
          <div className="mb-4">
            <button
              onClick={onStart}
              className="w-full h-20 rounded-full border-2 border-[#BCE7B8]/30 bg-[#A8D1A3] text-[#143817] font-black text-[20px] tracking-[-0.3px] flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(168,238,190,0.25)]"
            >
              <span>{ctaLabel}</span>
              <span className="text-2xl">→</span>
            </button>
          </div>

          {/* Helper Text */}
          {helperText && (
            <p className="text-center text-white/70 text-xs uppercase tracking-[2.6px] font-bold">
              {helperText}
            </p>
          )}
        </footer>

        {/* Accessibility Button */}
        {showAccessibility && (
          <button
            className="absolute bottom-24 right-5 flex items-center justify-center h-14 w-14 bg-[#272B27]/85 border border-white/25 backdrop-blur-md rounded-full text-[#E7C267] hover:text-[#F3D98D] transition-all"
            aria-label="Accesibilidad"
          >
            <Accessibility className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}

export default CoverScreen;
