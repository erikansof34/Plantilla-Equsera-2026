"use client";

import { BookOpen, GraduationCap, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { CourseLayout } from "../layouts/CourseLayout";
import { BackButton } from "../ui/BackButton";
import { ContinueButton } from "../ui/ContinueButton";
import { CourseTitle, CourseSubtitle, CourseParagraph, CourseFeatureText } from "../ui/Typography";
import { ContentCard } from "../content/ContentCard";
import { VideoPlayer } from "../media/VideoPlayer";
import type { MethodologyContent, WeeklyFeature } from "@/lib/course/types";

export interface MethodologyScreenProps {
  /** Número de lección */
  lessonNumber: number;
  /** Total de lecciones */
  totalLessons: number;
  /** Progreso */
  progressPercentage?: number;
  /** Contenido de metodología */
  content: MethodologyContent;
  /** Título para el navbar */
  navbarTitle?: string;
  /** Callback al continuar */
  onContinue?: () => void;
  /** Callback al ver video */
  onWatchVideo?: () => void;
  /** Callback al ir atrás */
  onBack?: () => void;
  /** Clase adicional */
  className?: string;
}

const featureIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  book: BookOpen,
  graduation: GraduationCap,
  target: Target,
};

export function MethodologyScreen({
  lessonNumber,
  totalLessons,
  progressPercentage,
  content,
  navbarTitle,
  onContinue,
  onWatchVideo,
  onBack,
  className,
}: MethodologyScreenProps) {
  return (
    <CourseLayout
      headerProps={{
        lessonNumber,
        totalLessons,
        progressPercentage: progressPercentage ?? (lessonNumber / totalLessons) * 100,
        navbarTitle,
        onBack,
      }}
      className={className}
    >
      <div className="px-5 py-4 bg-[#FBF9F4]">
        {/* Badge & Title */}
        <div className="mb-5">
          <span className="course-label text-course-gold">
            {content.badge}
          </span>
          <CourseTitle className="mt-1" variant="highlight">
            {content.title}
          </CourseTitle>
          <CourseParagraph className="mt-2">{content.subtitle}</CourseParagraph>
        </div>

        {/* Editorial Note */}
        <ContentCard
          variant="editorial"
          badge={content.editorialNote.badge}
          className="mb-6 rounded-[12px] course-card px-4 py-5"
        >
          <CourseParagraph className="text-[16px]">
            {content.editorialNote.text}
          </CourseParagraph>
        </ContentCard>

        {/* Video Player */}
        {content.videoCta && (
          <div className="mb-8">
            <VideoPlayer
              src=""
              thumbnail={content.image}
              overlayText={content.videoCta.overlayText || "Haz clic para ver el vídeo"}
              height={280}
              className="rounded-[14px] overflow-hidden"
            />
          </div>
        )}

        {/* Weekly Features */}
        <div className="mb-8">
          <CourseSubtitle
            bold
            className="mb-2 text-[color:var(--course-welcome-highlight-color)]"
          >
            Así avanzarás:
          </CourseSubtitle>
          <CourseParagraph className="mb-4 text-[16px]">
            Se activará una microlección que contendrá:
          </CourseParagraph>

          <div className="space-y-3">
            {content.weeklyFeatures.map((feature) => {
              const Icon = featureIconMap[feature.icon] || BookOpen;

              return (
                <div
                  key={feature.id}
                  className="flex flex-col items-center text-center p-6 bg-white border border-[#E7E3DB] rounded-[16px] shadow-sm"
                >
                  <div className="flex items-center justify-center h-14 w-14 bg-[#D3E5CE] rounded-full mb-4">
                    <Icon className="h-6 w-6 text-[#7B620A]" />
                  </div>
                  <p className="text-[14px] font-semibold text-course-text-primary leading-[1.5]">
                    {feature.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Disclaimer Button */}
        <button className="w-full px-5 py-3 mb-3 border-2 border-[#1b1c19] text-[#1b1c19] font-black rounded-[20px] text-[14px] uppercase tracking-[0.5px] hover:bg-gray-50 transition-colors">
          Disclaimer del Experto
        </button>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-2 gap-3 pb-2">
          <BackButton onClick={onBack} fullWidth />
          <ContinueButton onClick={onContinue} fullWidth />
        </div>
      </div>
    </CourseLayout>
  );
}

export default MethodologyScreen;
