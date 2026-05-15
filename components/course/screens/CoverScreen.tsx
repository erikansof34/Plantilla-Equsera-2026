"use client";

import Image from "next/image";
import { Globe, Accessibility } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  /** Video de fondo */
  backgroundVideo?: string;
  /** Opacidad del video de fondo (0-1) */
  videoOpacity?: number;
  /** Texto del botón CTA */
  ctaLabel?: string;
  /** Texto inferior de ayuda */
  helperText?: string;
  /** Texto adicional en el pie de portada (powered by) */
  footerText?: string;
  /** Texto clicable de copyright */
  copyrightText?: string;
  /** Título del modal de copyright */
  copyrightModalTitle?: string;
  /** Descripción del modal de copyright */
  copyrightModalDescription?: string;
  /** Texto inferior en el modal de copyright */
  copyrightModalFooter?: string;
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
  backgroundVideo,
  videoOpacity = 0.5,
  ctaLabel = "COMENZAR",
  helperText,
  footerText,
  copyrightText,
  copyrightModalTitle,
  copyrightModalDescription,
  copyrightModalFooter,
  onStart,
  showLanguageSelector = true,
  showAccessibility = true,
  className,
}: CoverScreenProps) {
  const handleStart = () => {
    console.log("CTA: Botón Comenzar clickeado");
    if (onStart) {
      onStart();
    } else {
      console.warn("onStart callback no definido");
    }
  };

  const handleLanguageClick = () => {
    console.log("Selector de idioma clickeado");
  };

  const handleAccessibilityClick = () => {
    console.log("Botón de accesibilidad clickeado");
  };

  return (
    <div
      className={cn(
        "course-theme min-h-screen flex flex-col relative bg-[#101411] max-w-md mx-auto overflow-hidden",
        className
      )}
    >
      {/* 1. Background Layers - BOTTOM LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Fallback Color */}
        <div className="absolute inset-0 bg-[#101411]" />

        {/* Background Image */}
        {backgroundImage && (
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover scale-[1.06]"
              priority
            />
          </div>
        )}

        {/* Background Video */}
        {backgroundVideo && (
          <div className="absolute inset-0">
            <video
              src={backgroundVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-[1.06]"
              style={{ opacity: videoOpacity }}
            />
          </div>
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#101411]/60 via-transparent to-[#101411]/90" />
      </div>

      {/* 2. Content Layer - TOP LAYER */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
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
              <button
                onClick={handleLanguageClick}
                className="flex items-center gap-2 text-[#E7C267] hover:text-[#F3D98D] text-xl font-bold cursor-pointer transition-colors"
              >
                <span className="text-sm">ES</span>
                <Globe className="h-[18px] w-[18px] text-[#A8D1A3]" />
              </button>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col px-8 pt-8 pb-6">
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
          <div className="space-y-4 mb-2">
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
              onClick={handleStart}
              className="w-full h-16 rounded-full border-2 border-[#BCE7B8]/30 bg-[#A8D1A3] text-[#143817] font-black text-[18px] tracking-[-0.3px] flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(168,238,190,0.25)] cursor-pointer hover:bg-[#b8eeb3] active:scale-[0.98] transition-all"
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

          {/* Copyright */}
          {copyrightText && (
            <div className="mt-3">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="mx-auto block text-center text-[0.75rem] text-white font-bold underline underline-offset-4 decoration-current decoration-1 transition hover:text-[#F3D98D] cursor-pointer"
                  >
                    {copyrightText}
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-[#0f1611] border border-white/10 text-white shadow-[0_25px_80px_rgba(0,0,0,0.8)] p-6 rounded-[32px] max-w-[90vw] sm:max-w-[520px]">
                  <DialogHeader>
                    <DialogTitle className="text-sm uppercase tracking-[2px] text-course-gold font-bold text-center">
                      {copyrightModalTitle ?? "TODOS LOS DERECHOS RESERVADOS"}
                    </DialogTitle>
                    <div className="mx-auto mt-4 mb-4 h-[1px] w-24 bg-[#6d683e]" />
                  </DialogHeader>
                  <DialogDescription className="text-sm leading-7 text-white/80">
                    {copyrightModalDescription ??
                      "Ninguna parte de este material puede reproducirse por ningún medio, incluyendo impresión, fotocopiado, grabación de audio o video, o cualquier sistema de almacenamiento o recuperación de información, sin permiso por escrito del titular de los derechos de autor."}
                  </DialogDescription>
                  <a
                    href="https://workage.us/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-course-gold font-bold underline underline-offset-4 decoration-current decoration-1 transition hover:text-[#F3D98D] cursor-pointer"
                  >
                    {copyrightModalFooter ?? "Powered by Workage Institute →"}
                  </a>
                </DialogContent>
              </Dialog>
            </div>
          )}

          {footerText && (
            <p className="text-center text-course-gold text-[0.75rem] leading-[1.4] mt-3 font-bold whitespace-pre-line">
              {footerText}
            </p>
          )}
        </footer>

        {/* Accessibility Button */}
        {showAccessibility && (
          <button
            onClick={handleAccessibilityClick}
            className="absolute bottom-24 right-5 flex items-center justify-center h-14 w-14 bg-[#272B27]/85 border border-white/25 backdrop-blur-md rounded-full text-[#E7C267] hover:text-[#F3D98D] transition-all cursor-pointer"
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
