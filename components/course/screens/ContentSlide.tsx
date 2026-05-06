"use client";

import { cn } from "@/lib/utils";
import { CourseLayout } from "../layouts/CourseLayout";
import { BackButton } from "../ui/BackButton";
import { ContinueButton } from "../ui/ContinueButton";
import { ContentCard } from "../content/ContentCard";
import { QuoteCard } from "../content/QuoteCard";
import { ExpandableText } from "../content/ExpandableText";
import { AudioPlayer } from "../media/AudioPlayer";
import { VideoPlayer } from "../media/VideoPlayer";
import { ImageWithOverlay } from "../media/ImageWithOverlay";
import { ZoneIndicator } from "../ui/ZoneIndicator";
import type { SlideContent, ZoneColor } from "@/lib/course/types";

export interface ContentSlideProps {
  /** Número de lección */
  lessonNumber: number;
  /** Total de lecciones */
  totalLessons: number;
  /** Progreso */
  progressPercentage?: number;
  /** Nombre de la zona (si aplica) */
  zoneName?: string;
  /** Color de la zona */
  zoneColor?: ZoneColor;
  /** Contenido del slide */
  content: SlideContent;
  /** Callback al continuar */
  onContinue?: () => void;
  /** Callback al ir atrás */
  onBack?: () => void;
  /** Clase adicional */
  className?: string;
}

export function ContentSlide({
  lessonNumber,
  totalLessons,
  progressPercentage,
  zoneName,
  zoneColor,
  content,
  onContinue,
  onBack,
  className,
}: ContentSlideProps) {
  return (
    <CourseLayout
      headerProps={{
        lessonNumber,
        totalLessons,
        progressPercentage: progressPercentage ?? (lessonNumber / totalLessons) * 100,
        zoneName,
        zoneColor,
        onBack,
      }}
      className={className}
    >
      <div className="px-6 py-4 bg-[#FBF9F4]">
        {/* Top Label */}
        {content.topLabel && (
          <span className="text-xs font-bold uppercase tracking-[1.4px] text-course-gold mb-2 block">
            {content.topLabel}
          </span>
        )}

        {/* Title */}
        {content.title && (
          <h1 className="course-title-primary mb-4">
            {content.title}
          </h1>
        )}

        {/* Subtitle */}
        {content.subtitle && (
          <p className="text-base text-course-text-secondary mb-4 italic leading-[1.55]">
            {content.subtitle}
          </p>
        )}

        {/* Main Image with Overlay */}
        {content.media?.[0]?.type === "image" && (
          <ImageWithOverlay
            src={content.media[0].src}
            alt={content.media[0].caption || "Imagen del contenido"}
            overlayText={content.media[0].overlay?.text}
            zoneBadge={
              content.media[0].overlay?.badgeColor
                ? {
                    text: content.media[0].overlay.badge || "",
                    color: content.media[0].overlay.badgeColor,
                  }
                : undefined
            }
            labels={content.media[0].labels?.map((label) => ({
              text: label.text,
              position: label.position,
              color: label.color,
            }))}
            className="mb-6"
          />
        )}

        {/* Video */}
        {content.media?.[0]?.type === "video" && (
          <VideoPlayer
            src={content.media[0].src}
            thumbnail={content.media[0].thumbnail}
            overlayText={content.media[0].overlay?.text}
            label={content.media[0].caption}
            className="mb-6"
          />
        )}

        {/* Paragraphs */}
        {content.paragraphs?.map((paragraph) => (
          <ContentCard key={paragraph.id} variant="cream" className="mb-4 rounded-[24px] border border-[#E7E3DB] bg-[#F5F3EE]">
            {paragraph.expandable ? (
              <ExpandableText
                preview={paragraph.text.slice(0, 100)}
                fullText={paragraph.text}
              />
            ) : (
              <p className="text-[15px] text-course-text-primary leading-[1.65]">
                {paragraph.text}
              </p>
            )}
          </ContentCard>
        ))}

        {/* Zone Indicators */}
        {content.zoneIndicators?.map((zone, index) => (
          <ZoneIndicator
            key={index}
            zone={zone.zone}
            title={zone.title}
            description={zone.description}
            variant="inline"
            className="mb-3 rounded-2xl"
          />
        ))}

        {/* Info Cards */}
        {content.infoCards?.map((card) => (
          <ContentCard
            key={card.id}
            variant={card.variant as any}
            badge={card.badge}
            className="mb-4"
          >
            {card.title && (
              <h4 className="font-bold text-course-text-primary mb-1 text-[15px]">
                {card.title}
              </h4>
            )}
            <p className="text-[15px] text-course-text-primary leading-[1.6]">
              {card.text}
            </p>
          </ContentCard>
        ))}

        {/* Audio Section */}
        {content.media?.filter((m) => m.type === "audio").map((audio) => (
          <div key={audio.id} className="mb-6">
            {audio.caption && (
              <p className="text-sm font-bold text-course-text-primary mb-3 uppercase tracking-[1px]">
                {audio.caption}
              </p>
            )}
            <AudioPlayer
              src={audio.src}
              duration={audio.duration}
              variant="card"
            />
          </div>
        ))}

        {/* Additional Video */}
        {content.media
          ?.filter((m) => m.type === "video")
          .slice(1)
          .map((video) => (
            <div key={video.id} className="mb-6">
              <p className="text-sm font-bold text-course-text-primary mb-3 uppercase tracking-[1px]">
                {video.caption || "¿Deseas profundizar?"}
              </p>
              <VideoPlayer
                src={video.src}
                thumbnail={video.thumbnail}
                overlayText={video.overlay?.text}
                height={180}
              />
            </div>
          ))}

        {/* Tips */}
        {content.tips?.map((tip) => (
          <ContentCard
            key={tip.id}
            variant="tip"
            icon={tip.variant as any}
            className="mb-4"
          >
            <p className="text-sm text-course-text-primary leading-relaxed">
              {tip.text}
            </p>
          </ContentCard>
        ))}

        {/* Quotes */}
        {content.quotes?.map((quote) => (
          <QuoteCard
            key={quote.id}
            text={quote.text}
            variant={quote.variant as any}
            icon={quote.icon as any}
            className="mb-4"
          />
        ))}

        {/* Navigation Buttons */}
        <div className="mt-8">
          <div className="flex items-center gap-3">
            <BackButton onClick={onBack} fullWidth />
            <ContinueButton onClick={onContinue} fullWidth />
          </div>
        </div>
      </div>
    </CourseLayout>
  );
}

export default ContentSlide;
