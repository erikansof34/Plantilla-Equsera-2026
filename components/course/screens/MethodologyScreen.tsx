"use client";

import Image from "next/image";
import { Play, BookOpen, GraduationCap, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { CourseLayout } from "../layouts/CourseLayout";
import { BackButton } from "../ui/BackButton";
import { ContinueButton } from "../ui/ContinueButton";
import { CourseTitle, CourseSubtitle, CourseParagraph, CourseFeatureText } from "../ui/Typography";
import { ContentCard } from "../content/ContentCard";
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

        {/* Main Image */}
        <div className="relative h-[170px] rounded-[14px] overflow-hidden mb-5">
          <Image
            src={content.image}
            alt="Metodología del curso"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        {/* Editorial Note */}
        <ContentCard
          variant="editorial"
          badge={content.editorialNote.badge}
          className="mb-6 rounded-[12px] course-card px-4 py-5"
        >
          <CourseParagraph className="italic text-[16px]">
            {`"${content.editorialNote.text}"`}
          </CourseParagraph>
        </ContentCard>

        {/* Video CTA */}
        {content.videoCta && (
          <button
            onClick={onWatchVideo}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#D3E5CE] border border-[#C3D9BD] rounded-xl transition-colors mb-8"
          >
            <div className="flex items-center justify-center h-5 w-5 border border-[#1b1c19]/60 rounded-full">
              <Play className="h-2.5 w-2.5 text-[#1b1c19] ml-0.5" />
            </div>
            <span className="text-[12px] font-black text-course-text-primary uppercase tracking-[0.6px]">
              {content.videoCta.label}
            </span>
          </button>
        )}

        {/* Weekly Features */}
        <div className="mb-8">
          <CourseSubtitle
            bold
            className="mb-2 text-[color:var(--course-welcome-highlight-color)]"
          >
            Así avanzarás cada semana:
          </CourseSubtitle>
          <CourseParagraph className="mb-4">
            Cada semana se activará una microlección que contendrá:
          </CourseParagraph>

          <div className="space-y-4">
            {content.weeklyFeatures.map((feature) => {
              const Icon = featureIconMap[feature.icon] || BookOpen;

              return (
                <div
                  key={feature.id}
                  className="flex flex-col items-center text-center p-5 bg-white border border-[#E7E3DB] rounded-[12px]"
                >
                  <div className="flex items-center justify-center h-12 w-12 bg-[#D3E5CE] rounded-full mb-3">
                    <Icon className="h-5 w-5 text-course-gold" />
                  </div>
                  <CourseFeatureText>
                    {feature.title}
                  </CourseFeatureText>
                </div>
              );
            })}
          </div>
        </div>

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
