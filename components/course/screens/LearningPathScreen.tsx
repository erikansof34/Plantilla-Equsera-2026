"use client";

import Image from "next/image";
import { Lock, Volume2, Sparkles, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";
import { CourseLayout } from "../layouts/CourseLayout";
import { BackButton } from "../ui/BackButton";
import { ContinueButton } from "../ui/ContinueButton";
import { CourseTitle, CourseSubtitle, CourseParagraph } from "../ui/Typography";
import { AudioPlayer } from "../media/AudioPlayer";
import type { Module, LearningPathContent } from "@/lib/course/types";

export interface LearningPathScreenProps {
  /** Número de lección */
  lessonNumber: number;
  /** Total de lecciones */
  totalLessons: number;
  /** Contenido de la ruta */
  content: LearningPathContent;
  /** Lista de módulos */
  modules: Module[];
  /** Título para el navbar */
  navbarTitle?: string;
  /** Callback al continuar */
  onContinue?: () => void;
  /** Callback al seleccionar módulo */
  onModuleSelect?: (moduleId: string) => void;
  /** Callback al escuchar audio */
  onListenAudio?: () => void;
  /** Callback al ir atrás */
  onBack?: () => void;
  /** Clase adicional */
  className?: string;
}

export function LearningPathScreen({
  lessonNumber,
  totalLessons,
  content,
  modules,
  navbarTitle,
  onContinue,
  onModuleSelect,
  onListenAudio,
  onBack,
  className,
}: LearningPathScreenProps) {
  return (
    <CourseLayout
      headerProps={{
        lessonNumber,
        totalLessons,
        progressPercentage: (lessonNumber / totalLessons) * 100,
        navbarTitle,
        onBack,
      }}
      className={className}
    >
      <div className="px-6 py-4 bg-[#FBF9F4]">
        {/* Title */}
        <div className="mb-6">
          <CourseTitle variant="highlight">
            {content.title}
          </CourseTitle>
          <CourseParagraph className="mt-2">
            {content.description}
          </CourseParagraph>
        </div>

        {/* Modules List */}
        <div className="space-y-4 mb-6">
          {modules.slice(0, 3).map((module) => (
            <button
              key={module.id}
              onClick={() => module.status === "active" && onModuleSelect?.(module.id)}
              disabled={module.status === "locked"}
              className={cn(
                "w-full flex items-center gap-4 p-4 rounded-[24px] border transition-all text-left",
                module.status === "active"
                  ? "border-l-4 border-l-[#765A02] border-[#E7E3DB] bg-white shadow-[0px_12px_20px_rgba(27,28,25,0.06)]"
                  : "border-[#E7E3DB] bg-[#F5F3EE] opacity-60"
              )}
            >
              {/* Thumbnail */}
              <div className="relative h-20 w-20 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={module.thumbnail}
                  alt={module.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn("text-[10px] font-bold uppercase tracking-[1px]", module.status === "active" ? "text-course-gold" : "text-course-text-muted")}>
                    Módulo {String(module.number).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-course-text-muted uppercase font-bold tracking-[1px]">
                    • {module.status === "active" ? "Active" : "Locked"}
                  </span>
                </div>
                <CourseSubtitle bold className="text-course-text-primary text-[18px] leading-[1.25]">
                  {module.title}
                </CourseSubtitle>
              </div>

              {/* Lock Icon */}
              {module.status === "locked" && (
                <Lock className="h-5 w-5 text-course-text-muted flex-shrink-0" />
              )}
            </button>
          ))}
        </div>

        {/* Info Card - Tip */}
        <div className="bg-[#D3E5CE] rounded-[24px] p-6 mb-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 size-24 rounded-full bg-[#052A0B]/10" />
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <Lightbulb className="h-5 w-5 text-[#576755]" />
            </div>
            <CourseParagraph className="text-[16px] text-[#576755] font-medium">
              Al finalizar cada tema podrás aplicar lo aprendido con una actividad de
              refuerzo, y reto de la semana.
            </CourseParagraph>
          </div>
        </div>

        <div className="pb-4">
          {/* AudioPlayer */}
          <AudioPlayer
            src=""
            duration={content.preparationSection.audioDuration}
            variant="card"
          />
        </div>

        {/* Audio CTA Button */}
        {/* {content.audioCta && (
          <>
            <button
              onClick={onListenAudio}
              className="w-full flex items-center justify-center gap-3 px-6 py-5 bg-transparent border-2 border-[#052A0B] rounded-full transition-colors mb-2"
            >
              <Volume2 className="h-5 w-5 text-course-text-primary" />
              <span className="text-lg font-bold uppercase tracking-wide text-course-text-primary leading-[1.1]">
                {content.audioCta.label}
              </span>
            </button>
            <div className="border-b border-gray-200 mb-6" />
          </>
        )} */}

        {/* Preparation Section */}
        {/* <div className="mb-8">
          <div className="bg-[#F5F3EE] rounded-[24px] border-t-4 border-[#052A0B] p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-[#052A0B] flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[1.2px] text-[#052A0B]">
                {content.preparationSection.badge}
              </span>
            </div>

            <CourseParagraph className="text-[16px] mb-5">
              {content.preparationSection.description}
            </CourseParagraph>

            <CourseSubtitle bold className="text-sm text-[#052A0B] mb-3">
              {content.preparationSection.audioLabel}
            </CourseSubtitle>

            <AudioPlayer
              src=""
              duration={content.preparationSection.audioDuration}
              variant="card"
            />
          </div>
        </div> */}

        {/* Navigation Buttons */}
        <div className="grid grid-cols-2 gap-3 pb-2">
          <BackButton onClick={onBack} fullWidth />
          <ContinueButton onClick={onContinue} fullWidth />
        </div>
      </div>
    </CourseLayout>
  );
}

export default LearningPathScreen;
