"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";
import { CourseLayout } from "../layouts/CourseLayout";
import { BackButton } from "../ui/BackButton";
import { ContinueButton } from "../ui/ContinueButton";
import { ContentCard } from "../content/ContentCard";
import { AudioPlayer } from "../media/AudioPlayer";
import { VideoPlayer } from "../media/VideoPlayer";
import { MultipleChoice } from "../interactive/MultipleChoice";
import { CourseTitle } from "../ui/Typography";
import type { SlideContent } from "@/lib/course/types";

export interface CaseStudyScreenProps {
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
  /** Callback al responder pregunta */
  onAnswer?: (questionId: string, answer: string) => void;
  /** Respuestas seleccionadas */
  selectedAnswers?: Record<string, string>;
  /** Clase adicional */
  className?: string;
}

export function CaseStudyScreen({
  lessonNumber,
  totalLessons,
  progressPercentage,
  content,
  onContinue,
  onBack,
  onAnswer,
  className,
}: CaseStudyScreenProps) {
  const question = content.questions?.[0];
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const audio = content.media?.find((m) => m.type === "audio");
  const video = content.media?.find((m) => m.type === "video");
  const introText = content.quotes?.[0]?.text;

  const canConfirm = Boolean(selectedOptionId && question && !isConfirmed);
  const analysisLabel = question?.context || "ANALICEMOS...";

  const handleConfirmAnswer = () => {
    if (!question || !selectedOptionId || isConfirmed) return;
    setIsConfirmed(true);
    onAnswer?.(question.id, selectedOptionId);
  };

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
          <span className="mb-2 block text-[13px] font-black uppercase tracking-[0.08em] text-[#8B6A00]">
            {content.topLabel}
          </span>
        )}

        {/* Title */}
        {content.title && (
          <CourseTitle className="mb-6 text-[#051B0F]">
            {content.title}
          </CourseTitle>
        )}

        {/* Video Section */}
        {video && (
          <div className="mb-6">
            <VideoPlayer
              src={video.src}
              thumbnail={video.thumbnail}
              overlayText={video.overlay?.text}
              label={video.caption}
              className="overflow-hidden rounded-[18px]"
            />
          </div>
        )}

        {/* Párrafo del caso */}
        {introText && (
          <ContentCard
            variant="cream"
            className="mb-6 rounded-[18px] border border-[#E7E3DB] border-l-4 border-l-[#D0C4A5] bg-[#F2F2F2] p-6"
          >
            <p className="text-[17px] italic leading-[1.5] text-[#4C4F4E]">&ldquo;{introText}&rdquo;</p>
          </ContentCard>
        )}

        {/* Audio */}
        {audio && (
          <div className="mb-7">
            {audio.caption && (
              <div className="mb-3 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C9DFC8] text-course-green-dark">
                  <Volume2 className="h-6 w-6" />
                </div>
                <p className="text-center text-[16px] font-semibold leading-[1.25] text-[#122417] underline decoration-[#CFC5A8] decoration-2 underline-offset-6">
                  {audio.caption}
                </p>
              </div>
            )}
            <AudioPlayer src={audio.src} duration={audio.duration} variant="card" className="rounded-[14px] bg-[#ECEBE8]" />
          </div>
        )}

        {/* Analicemos + pregunta */}
        {question && (
          <section className="mb-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[1px] flex-1 bg-[#D9DAD7]" />
              <span className="text-[13px] font-black uppercase tracking-[0.16em] text-[#4C554E]">
                {analysisLabel}
              </span>
              <div className="h-[1px] flex-1 bg-[#D9DAD7]" />
            </div>

            <h3 className="mb-5 text-[22px] font-black leading-[1.22] text-[#051B0F]">
              {question.question}
            </h3>

            <MultipleChoice
              question={question.question}
              options={question.options}
              correctAnswer={String(question.correctAnswer)}
              selectedOptionId={selectedOptionId}
              isConfirmed={isConfirmed}
              onSelect={(optionId) => setSelectedOptionId(optionId)}
              showFeedback
              feedback={question.feedback}
              className="[&_h3]:hidden [&_.space-y-3_button]:rounded-[18px] [&_.space-y-3_button]:border [&_.space-y-3_button]:bg-[#F3F3F3] [&_.space-y-3_button]:p-5 [&_.space-y-3_button]:text-left [&_.space-y-3_button]:border-[#E5E5E3] [&_.space-y-3_button.border-course-green-dark]:border-2 [&_.space-y-3_button.border-course-green-dark]:border-course-green-dark [&_.space-y-3_button_span:first-child]:h-10 [&_.space-y-3_button_span:first-child]:w-10 [&_.space-y-3_button_span:first-child]:text-[28px] [&_.space-y-3_button_span:last-child]:text-[16px] [&_.space-y-3_button_span:last-child]:leading-[1.35] [&_.space-y-3_button_span:last-child]:text-[#212322]"
            />
          </section>
        )}

        {/* Navigation Buttons */}
        {!isConfirmed ? (
          <ContinueButton
            label="Confirmar respuesta"
            variant="confirm"
            onClick={handleConfirmAnswer}
            disabled={!canConfirm}
            fullWidth
          />
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <BackButton onClick={onBack} fullWidth />
            <ContinueButton onClick={onContinue} fullWidth />
          </div>
        )}
      </div>
    </CourseLayout>
  );
}

export default CaseStudyScreen;
