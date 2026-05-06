"use client";

import { Accessibility } from "lucide-react";
import { cn } from "@/lib/utils";
import { CourseLayout } from "../layouts/CourseLayout";
import { BackButton } from "../ui/BackButton";
import { ContinueButton } from "../ui/ContinueButton";
import { AudioPlayer } from "../media/AudioPlayer";
import { VideoPlayer } from "../media/VideoPlayer";
import { CourseParagraph, CourseTitle } from "../ui/Typography";
import type { WelcomeContent } from "@/lib/course/types";

export interface WelcomeScreenProps {
  /** Número de lección */
  lessonNumber: number;
  /** Total de lecciones */
  totalLessons: number;
  /** Contenido de bienvenida */
  content: WelcomeContent;
  /** Título para el navbar */
  navbarTitle?: string;
  /** Callback al continuar */
  onContinue?: () => void;
  /** Callback al ir atrás */
  onBack?: () => void;
  /** Clase adicional */
  className?: string;
}

export function WelcomeScreen({
  lessonNumber,
  totalLessons,
  content,
  navbarTitle,
  onContinue,
  onBack,
  className,
}: WelcomeScreenProps) {
  const maxBlocks = Math.max(content.paragraphs.length, content.audioSections.length);

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
      <div className="px-3.5 py-4 bg-[#FBF9F4]">
        {/* Title Section */}
        <div className="mb-4">
          <CourseTitle className="text-[color:var(--course-welcome-title-color)]">
            {content.title}
          </CourseTitle>
          <CourseTitle variant="highlight">{content.courseTitle}</CourseTitle>
        </div>

        {/* Hero Video */}
        <VideoPlayer
          src={content.heroVideoSrc || ""}
          thumbnail={content.heroImage}
          overlayText={content.heroVideoOverlayText}
          height={360}
          className="mb-5 rounded-[22px] overflow-hidden"
        />

        {/* Content + Audio Blocks (paired like Figma cards) */}
        {Array.from({ length: maxBlocks }).map((_, index) => {
          const paragraph = content.paragraphs[index];
          const audio = content.audioSections[index];

          return (
            <div
              key={`welcome-block-${index}`}
              className="mb-4 rounded-[24px] p-5"
              style={{
                border: "1px solid var(--course-welcome-card-border)",
                backgroundColor: "var(--course-welcome-card-bg)",
              }}
            >
              {paragraph && (
                <CourseParagraph className="mb-4 leading-[1.7]">
                  {paragraph.text}
                </CourseParagraph>
              )}

              {audio && (
                <div>
                  {audio.label && (
                    <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-course-text-muted mb-3">
                      {audio.label}
                    </p>
                  )}
                  <AudioPlayer
                    src={audio.src}
                    duration={audio.duration}
                    sublabel={audio.sublabel}
                    variant="compact"
                  />
                </div>
              )}
            </div>
          );
        })}

        {/* Navigation Buttons */}
        <div className="mt-8 pb-6">
          <div className="grid grid-cols-2 gap-3">
            <BackButton onClick={onBack} fullWidth />
            <ContinueButton onClick={onContinue} fullWidth />
          </div>
        </div>
      </div>

      {/* Accessibility Button */}
      <button
        className="fixed bottom-28 right-4 flex items-center justify-center h-12 w-12 bg-white shadow-lg rounded-full text-course-text-secondary hover:text-course-text-primary transition-all"
        aria-label="Accesibilidad"
      >
        <Accessibility className="h-5 w-5" />
      </button>
    </CourseLayout>
  );
}

export default WelcomeScreen;
