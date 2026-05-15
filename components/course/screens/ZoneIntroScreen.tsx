"use client";

import { CourseLayout } from "../layouts/CourseLayout";
import { BackButton } from "../ui/BackButton";
import { ContinueButton } from "../ui/ContinueButton";
import { ContentCard } from "../content/ContentCard";
import { ExpandableText } from "../content/ExpandableText";
import { ZoneIndicator } from "../ui/ZoneIndicator";
import { KeyComponentCard } from "../content/KeyComponentCard";
import { ImageWithOverlay } from "../media/ImageWithOverlay";
import { CitationCard } from "../content/CitationCard";
import { CourseTitle, CourseParagraph } from "../ui/Typography";
import type { SlideContent } from "@/lib/course/types";

export interface ZoneIntroScreenProps {
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

export function ZoneIntroScreen({
  lessonNumber,
  totalLessons,
  progressPercentage,
  content,
  onContinue,
  onBack,
  className,
}: ZoneIntroScreenProps) {
  const componentIcon = (icon: string): "book" | "shield" | "file" | "sparkle" => {
    if (icon === "book") return "book";
    if (icon === "shield") return "shield";
    if (icon === "sparkle") return "sparkle";
    return "file";
  };

  const classificationImage = content.media?.find((m) => m.type === "image");
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
        {/* Title */}
        {content.title && (
          <CourseTitle className="mb-3 text-[#051B0F]">
            {content.title}
          </CourseTitle>
        )}

        {/* Subtitle */}
        {content.subtitle && (
          <CourseParagraph className="mb-7 text-[24px] italic leading-[1.25] text-[#6C706E]">
            {content.subtitle}
          </CourseParagraph>
        )}

        {/* Párrafo introductorio */}
        {content.expandableText && (
          <ContentCard
            variant="cream"
            className="mb-8 rounded-[20px] border border-[#E7E3DB] bg-[#F2F2F2] p-7"
          >
            <ExpandableText
              preview={content.expandableText.preview}
              fullText={content.expandableText.fullText}
              expandLabel="Ver más"
              collapseLabel="Ver menos"
              className="[&_button]:font-bold [&_button]:text-[#0A3A1C] [&_p]:text-[16px] [&_p]:leading-[1.55] [&_p]:text-[#2A2C2D]"
            />
          </ContentCard>
        )}

        {/* 3 componentes clave */}
        {content.keyComponents && content.keyComponents.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-4 text-[13px] font-black uppercase tracking-[0.06em] text-[#8B6A00]">
              EN ESTA APRENDERÁS 3 COMPONENTES CLAVE:
            </h2>
            <div className="space-y-3">
              {content.keyComponents.map((component) => (
                <KeyComponentCard
                  key={component.id}
                  icon={componentIcon(component.icon)}
                  title={component.title}
                  className="rounded-[18px] border border-[#E7E3DB] bg-[#F2F2F2] py-5 [&_span]:text-[16px] [&_span]:font-medium [&_span]:text-[#1F2020]"
                />
              ))}
            </div>
          </section>
        )}

        {/* Imagen de clasificación */}
        {classificationImage && (
          <ImageWithOverlay
            src={classificationImage.src}
            alt={classificationImage.caption || "Clasificación de zonas del caballo"}
            labels={classificationImage.labels?.map((label) => ({
              text: label.text,
              position: label.position,
              color: label.color,
            }))}
            height={340}
            className="mb-7 rounded-[18px]"
          />
        )}

        {/* Tipos de zonas */}
        {content.zoneIndicators && content.zoneIndicators.length > 0 && (
          <section className="mb-8 space-y-3">
            {content.zoneIndicators.map((zone, index) => (
              <ZoneIndicator
                key={index}
                zone={zone.zone}
                title={zone.title}
                description={zone.description}
                variant="inline"
                className="rounded-[14px] p-5 [&_p]:text-[16px] [&_p]:leading-[1.4] [&_p]:text-[#1E2421]"
              />
            ))}
          </section>
        )}

        {/* CitationCard */}
        {quoteText && <CitationCard text={quoteText} className="mb-8" />}

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

export default ZoneIntroScreen;
