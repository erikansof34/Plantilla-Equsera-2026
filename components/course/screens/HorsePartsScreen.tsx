"use client";

import { cn } from "@/lib/utils";
import { CourseLayout } from "../layouts/CourseLayout";
import { BackButton } from "../ui/BackButton";
import { ContinueButton } from "../ui/ContinueButton";
import { ContentCard } from "../content/ContentCard";
import { CitationCard } from "../content/CitationCard";
import { LearningObjectiveItem } from "../content/LearningObjectiveItem";
import { PartsSwiper } from "../media/PartsSwiper";
import type { SlideContent } from "@/lib/course/types";

export interface HorsePartsScreenProps {
  /** Número de lección */
  lessonNumber: number;
  /** Total de lecciones */
  totalLessons: number;
  /** Progreso */
  progressPercentage?: number;
  /** Contenido del slide */
  content: SlideContent;
  /** Callback al continuar */
  onContinue?: () => void;
  /** Callback al ir atrás */
  onBack?: () => void;
  /** Clase adicional */
  className?: string;
}

export function HorsePartsScreen({
  lessonNumber,
  totalLessons,
  progressPercentage,
  content,
  onContinue,
  onBack,
  className,
}: HorsePartsScreenProps) {
  const quoteText = content.quotes?.[0]?.text;

  return (
    <CourseLayout
      headerProps={{
        lessonNumber,
        totalLessons,
        progressPercentage: progressPercentage ?? (lessonNumber / totalLessons) * 100,
        onBack,
      }}
      className={className}
    >
      <div className="bg-[#FBF9F4] px-6 py-4">
        {/* Top Label */}
        {content.topLabel && (
          <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.08em] text-[#697068]">
            {content.topLabel}
          </span>
        )}

        {/* Title */}
        {content.title && (
          <h1 className="mb-6 text-[44px] font-black leading-[1.05] tracking-[-0.5px] text-[#051B0F]">
            {content.title}
          </h1>
        )}

        {/* Intro Paragraph */}
        {content.paragraphs?.map((paragraph) => (
          <ContentCard
            key={paragraph.id}
            variant="cream"
            className="mb-6 rounded-[20px] border border-[#E7E3DB] bg-[#F2F2F2] p-7"
          >
            <p className="text-[16px] leading-[1.55] text-[#2A2C2D]">
              {paragraph.text}
            </p>
          </ContentCard>
        ))}

        {/* Swiper reutilizable para partes */}
        {content.imageCarousel && content.imageCarousel.length > 0 && (
          <PartsSwiper items={content.imageCarousel} className="mb-8" />
        )}

        {/* Learning Objectives */}
        {content.objectives && content.objectives.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-5 text-[22px] font-black leading-tight text-[#051B0F]">
              Conocer y nombrar correctamente las partes del caballo te permite:
            </h2>
            <div className="space-y-3.5">
              {content.objectives.map((objective) => (
                <LearningObjectiveItem
                  key={objective.id}
                  text={objective.text}
                  completed
                  className="[&_span]:text-[15px] [&_span]:leading-[1.45]"
                />
              ))}
            </div>
          </div>
        )}

        {/* Cita */}
        {quoteText && (
          <CitationCard
            text={quoteText}
            className="mb-8"
          />
        )}

        {/* Navigation Buttons */}
        <div className="pb-2">
          <div className="grid grid-cols-2 gap-3">
            <BackButton onClick={onBack} fullWidth />
            <ContinueButton onClick={onContinue} fullWidth />
          </div>
        </div>
      </div>
    </CourseLayout>
  );
}

export default HorsePartsScreen;
