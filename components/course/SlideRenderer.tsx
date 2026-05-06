"use client";

import type { CourseStructure, SlideStructure, LessonStructure } from "@/lib/course/course-structure";
import { getSlideById, getSlidePosition, getModulesForDisplay } from "@/lib/course/course-structure";
import { CoverScreen } from "./screens/CoverScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { MethodologyScreen } from "./screens/MethodologyScreen";
import { LearningPathScreen } from "./screens/LearningPathScreen";
import { GlossaryScreen } from "./screens/GlossaryScreen";
import { ContentSlide } from "./screens/ContentSlide";
import { HorsePartsScreen } from "./screens/HorsePartsScreen";
import { ZoneIntroScreen } from "./screens/ZoneIntroScreen";
import { Module1CaseStudyScreen } from "./modules/module-1";
import { Module1ZoneIntroScreen } from "./modules/module-1";
import { ActivityScreen } from "./screens/ActivityScreen";
import { QuizScreen } from "./screens/QuizScreen";
import { CompletionScreen } from "./screens/CompletionScreen";
import type {
  CoverSlideData,
  WelcomeSlideData,
  MethodologySlideData,
  LearningPathSlideData,
  GlossarySlideData,
  CompletionSlideData,
} from "@/lib/course/course-structure";

export interface SlideRendererProps {
  /** Estructura completa del curso */
  course: CourseStructure;
  /** ID del slide actual */
  currentSlideId: string;
  /** Callback al continuar */
  onNext: () => void;
  /** Callback al ir atrás */
  onBack: () => void;
  /** Callback para ir a un slide específico */
  onGoToSlide?: (slideId: string) => void;
  /** Callback al completar actividad/quiz */
  onComplete?: () => void;
}

export function SlideRenderer({
  course,
  currentSlideId,
  onNext,
  onBack,
  onGoToSlide,
  onComplete,
}: SlideRendererProps) {
  const slideInfo = getSlideById(course, currentSlideId);
  
  if (!slideInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-course-text-muted">Slide no encontrado: {currentSlideId}</p>
      </div>
    );
  }

  const position = getSlidePosition(course, {
    moduleId: slideInfo.moduleId || null,
    lessonId: slideInfo.lessonId || null,
    slideId: currentSlideId,
    slideIndex: 0,
  });

  const modules = getModulesForDisplay(course);

  switch (slideInfo.type) {
    case "cover": {
      const data = slideInfo.data as CoverSlideData;
      return (
        <CoverScreen
          logo={course.meta.logo}
          logoAlt={course.meta.logoAlt}
          titleLine1={data.titleLine1}
          titleLine2={data.titleLine2}
          subtitle={data.subtitle}
          features={course.meta.features}
          backgroundImage={course.meta.coverImage}
          ctaLabel={data.ctaLabel}
          helperText={data.helperText}
          footerText={data.footerText}
          copyrightText={data.copyrightText}
          copyrightModalTitle={data.copyrightModalTitle}
          copyrightModalDescription={data.copyrightModalDescription}
          copyrightModalFooter={data.copyrightModalFooter}
          onStart={onNext}
        />
      );
    }

    case "welcome": {
      const data = slideInfo.data as WelcomeSlideData;
      return (
        <WelcomeScreen
          lessonNumber={1}
          totalLessons={position.lessonTotal}
          content={data.content}
          onContinue={onNext}
          onBack={onBack}
        />
      );
    }

    case "methodology": {
      const data = slideInfo.data as MethodologySlideData;
      return (
        <MethodologyScreen
          lessonNumber={position.lessonCurrent}
          totalLessons={position.lessonTotal}
          content={data.content}
          onContinue={onNext}
          onBack={onBack}
        />
      );
    }

    case "learning-path": {
      const data = slideInfo.data as LearningPathSlideData;
      return (
        <LearningPathScreen
          lessonNumber={position.lessonCurrent}
          totalLessons={position.lessonTotal}
          content={data.content}
          modules={modules}
          onContinue={onNext}
          onBack={onBack}
        />
      );
    }

    case "glossary": {
      const data = slideInfo.data as GlossarySlideData;
      return (
        <GlossaryScreen
          lessonNumber={position.lessonCurrent}
          totalLessons={position.lessonTotal}
          progressPercentage={(position.current / position.total) * 100}
          moduleTitle={data.title}
          subtitle={data.subtitle}
          glossaryImage={data.image}
          imageCaption={data.imageCaption}
          terms={data.terms}
          helperText={data.helperText}
          quote={data.quote}
          onContinue={onNext}
          onBack={onBack}
        />
      );
    }

    case "content":
    case "zone-detail": {
      const data = slideInfo.data as SlideStructure;
      return (
        <ContentSlide
          lessonNumber={position.lessonCurrent}
          totalLessons={position.lessonTotal}
          zoneName={data.content.zoneName}
          zoneColor={data.content.zoneColor}
          content={data.content}
          onContinue={onNext}
          onBack={onBack}
        />
      );
    }

    case "case-study": {
      const data = slideInfo.data as SlideStructure;
      return (
        <Module1CaseStudyScreen
          lessonNumber={position.lessonCurrent}
          totalLessons={position.lessonTotal}
          progressPercentage={(position.current / position.total) * 100}
          content={data.content}
          onContinue={onNext}
          onBack={onBack}
        />
      );
    }

    case "zone-intro": {
      const data = slideInfo.data as SlideStructure;
      const isModule1 = slideInfo.moduleId === "modulo-1";
      return (
        isModule1 ? (
          <Module1ZoneIntroScreen
            lessonNumber={position.lessonCurrent}
            totalLessons={position.lessonTotal}
            progressPercentage={(position.current / position.total) * 100}
            content={data.content}
            onContinue={() => {
              if (onGoToSlide) {
                onGoToSlide("m1-l6-s1");
                return;
              }
              onNext();
            }}
            onBack={onBack}
          />
        ) : (
          <ZoneIntroScreen
            lessonNumber={position.lessonCurrent}
            totalLessons={position.lessonTotal}
            progressPercentage={(position.current / position.total) * 100}
            content={data.content}
            onContinue={onNext}
            onBack={onBack}
          />
        )
      );
    }

    case "horse-parts": {
      const data = slideInfo.data as SlideStructure;
      return (
        <HorsePartsScreen
          lessonNumber={position.lessonCurrent}
          totalLessons={position.lessonTotal}
          progressPercentage={(position.current / position.total) * 100}
          content={data.content}
          onContinue={onNext}
          onBack={onBack}
        />
      );
    }

    case "activity": {
      const data = slideInfo.data as SlideStructure;
      return (
        <ActivityScreen
          title="¡Vamos a la aplicación práctica!"
          subtitle="Responde a los casos reales según lo aprendido."
          questions={data.content.questions || []}
          scenario={data.content.scenario}
          keyInsight="Tu rol es fundamental, y este curso te dará las herramientas para hacerlo aún mejor!"
          onFinish={() => {
            onComplete?.();
            onNext();
          }}
          onBack={onBack}
        />
      );
    }

    case "quiz": {
      const data = slideInfo.data as SlideStructure;
      if (!data.content.imageMatching) {
        return <div>Error: Quiz sin ejercicio de matching</div>;
      }
      return (
        <QuizScreen
          lessonNumber={position.lessonCurrent}
          totalLessons={position.lessonTotal}
          badge="REVISAR CONCEPTOS"
          moduleTitle="Evaluación del módulo"
          instructions={data.content.imageMatching.instructions}
          exercise={data.content.imageMatching}
          interestingFact={data.content.imageMatching.interestingFact}
          onComplete={() => {
            onComplete?.();
            onNext();
          }}
          onBack={onBack}
        />
      );
    }

    case "completion": {
      const data = slideInfo.data as CompletionSlideData;
      return (
        <CompletionScreen
          content={data.content}
          onContinue={onNext}
          onClose={onBack}
        />
      );
    }

    default:
      return (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-course-text-muted">
            Tipo de slide no soportado: {slideInfo.type}
          </p>
        </div>
      );
  }
}
