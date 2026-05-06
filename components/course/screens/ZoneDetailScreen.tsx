"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { CourseLayout } from "../layouts/CourseLayout";
import { BackButton } from "../ui/BackButton";
import { ContinueButton } from "../ui/ContinueButton";
import { ContentCard } from "../content/ContentCard";
import { AudioPlayer } from "../media/AudioPlayer";
import { VideoPlayer } from "../media/VideoPlayer";
import { ImageWithOverlay } from "../media/ImageWithOverlay";
import { ZoneIndicator } from "../ui/ZoneIndicator";
import type { SlideContent, ZoneColor } from "@/lib/course/types";

export interface ZoneDetailScreenProps {
  /** Número de lección */
  lessonNumber: number;
  /** Total de lecciones */
  totalLessons: number;
  /** Progreso */
  progressPercentage?: number;
  /** Nombre de la zona */
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

export function ZoneDetailScreen({
  lessonNumber,
  totalLessons,
  progressPercentage,
  zoneName,
  zoneColor,
  content,
  onContinue,
  onBack,
  className,
}: ZoneDetailScreenProps) {
  const mainImage = content.media?.find((m) => m.type === "image");
  const audioItems = content.media?.filter((m) => m.type === "audio") || [];
  const extraVideos = content.media?.filter((m) => m.type === "video") || [];

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
      <div className="bg-[#FBF9F4] px-6 py-4">
        {/* Top label */}
        {content.topLabel && (
          <span className="mb-2 block text-[13px] font-black uppercase tracking-[0.08em] text-[#8B6A00]">
            {content.topLabel}
          </span>
        )}

        {/* Title */}
        {content.title && (
          <h1 className="mb-5 text-[44px] font-black leading-[1.05] tracking-[-0.5px] text-[#051B0F]">
            {content.title}
          </h1>
        )}

        {/* Zone Badge */}
        {zoneName && zoneColor && (
          <div className="mb-5">
            <ZoneIndicator
              zone={zoneColor}
              title={zoneName}
              description=""
              variant="badge"
              className="inline-block rounded-full px-3 py-1"
            />
          </div>
        )}

        {/* Main Image with Overlay */}
        {mainImage && (
          <ImageWithOverlay
            src={mainImage.src}
            alt={mainImage.caption || "Imagen de la zona"}
            overlayText={mainImage.overlay?.text}
            zoneBadge={
              mainImage.overlay?.badgeColor
                ? {
                    text: mainImage.overlay.badge || "",
                    color: mainImage.overlay.badgeColor,
                  }
                : undefined
            }
            labels={mainImage.labels?.map((label) => ({
              text: label.text,
              position: label.position,
              color: label.color,
            }))}
            className="mb-6 overflow-hidden rounded-[18px]"
          />
        )}

        {/* Content Paragraphs */}
        {content.paragraphs?.map((paragraph) => (
          <ContentCard
            key={paragraph.id}
            variant="cream"
            className="mb-4 rounded-[18px] border border-[#E7E3DB] bg-[#F2F2F2] p-6"
          >
            <p className="text-[16px] leading-[1.5] text-[#2A2C2D]">
              {paragraph.text}
            </p>
          </ContentCard>
        ))}

        {/* Info Cards */}
        {content.infoCards?.map((card) => (
          <ContentCard
            key={card.id}
            variant={card.variant as any}
            badge={card.badge}
            className="mb-4 rounded-[16px]"
          >
            {card.title && (
              <h4 className="mb-1 text-[16px] font-semibold text-course-text-primary">
                {card.title}
              </h4>
            )}
            <p className="text-[15px] leading-[1.45] text-course-text-primary">
              {card.text}
            </p>
          </ContentCard>
        ))}

        {/* Audio Section */}
        {audioItems.map((audio) => (
          <div key={audio.id} className="mb-6">
            {audio.caption && (
              <p className="mb-3 text-[15px] font-semibold text-course-text-primary">
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

        {/* Additional Videos */}
        {extraVideos.map((video) => (
            <div key={video.id} className="mb-6">
              <p className="mb-3 text-[15px] font-semibold text-course-text-primary">
                {video.caption || "¿Deseas profundizar?"}
              </p>
              <VideoPlayer
                src={video.src}
                thumbnail={video.thumbnail}
                overlayText={video.overlay?.text}
                height={180}
                className="overflow-hidden rounded-[16px]"
              />
            </div>
          ))}

        {/* Tips */}
        {content.tips?.map((tip) => (
          <ContentCard
            key={tip.id}
            variant="tip"
            icon={tip.variant as any}
            className="mb-4 rounded-[16px]"
          >
            <p className="text-[15px] leading-[1.45] text-course-text-primary">
              {tip.text}
            </p>
          </ContentCard>
        ))}

        {/* Zone-specific content */}
        {zoneColor && (
          <ContentCard
            variant="cream"
            className="mb-4 rounded-[16px]"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-3 h-3 rounded-full ${
                zoneColor === "green" ? "bg-zone-green" :
                zoneColor === "yellow" ? "bg-zone-yellow" :
                "bg-zone-red"
              }`} />
              <h4 className="font-semibold text-course-text-primary">
                {zoneColor === "green" && "Zona Segura"}
                {zoneColor === "yellow" && "Zona Precaución"}
                {zoneColor === "red" && "Zona Riesgo"}
              </h4>
            </div>
            <div className="space-y-2 text-[15px] text-course-text-primary">
              {zoneColor === "green" && (
                <>
                  <p>• Contacto directo y seguro con el caballo</p>
                  <p>• Ideal para principiantes</p>
                  <p>• Punto de referencia para guiar al animal</p>
                </>
              )}
              {zoneColor === "yellow" && (
                <>
                  <p>• Zona de precaución requerida</p>
                  <p>• Movimientos limitados del caballo</p>
                  <p>• Necesita supervisión constante</p>
                </>
              )}
              {zoneColor === "red" && (
                <>
                  <p>• Zona de alto riesgo</p>
                  <p>• Posible patada o mordida</p>
                  <p>• Solo para personal experimentado</p>
                </>
              )}
            </div>
          </ContentCard>
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

export default ZoneDetailScreen;
