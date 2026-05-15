"use client";

import type { CourseStructure, SlideStructure, LessonStructure } from "@/lib/course/course-structure";
import { getSlideById, getSlidePosition, getModulesForDisplay, flattenSlides } from "@/lib/course/course-structure";
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
  completedSlides: Set<string>;
}

export function SlideRenderer({
  course,
  currentSlideId,
  onNext,
  onBack,
  onGoToSlide,
  onComplete,
  completedSlides,
}: SlideRendererProps) {
  console.log("SlideRenderer rendering slide:", currentSlideId);
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
    // INTRODUCCIÓN - PANTALLA 1: Portada
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
          backgroundImage={data.backgroundImage || course.meta.coverImage}
          backgroundVideo={data.backgroundVideo}
          videoOpacity={data.videoOpacity}
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

    // INTRODUCCIÓN - PANTALLA 2: Ruta de Aprendizaje (intro-learning-path)
    case "learning-path": {
      const data = slideInfo.data as LearningPathSlideData;

      const handleModuleSelect = (selectedId: string) => {
        if (!onGoToSlide) {
          return;
        }

        if (selectedId === "intro") {
          onGoToSlide(course.introduction.welcome.slideId);
          return;
        }

        const normalizedModuleId = selectedId.replace(/^module-/, "modulo-");
        const selectedModule = course.modules.find((module) => module.id === selectedId || module.id === normalizedModuleId);

        if (selectedModule) {
          if (selectedModule.learningPathCheckpoint) {
            onGoToSlide(selectedModule.learningPathCheckpoint.slideId);
            return;
          }

          const moduleStartSlide = flattenSlides(course).find(
            (slide) => (slide.moduleId === selectedId || slide.moduleId === normalizedModuleId) && slide.lessonId
          )?.id;
          if (moduleStartSlide) {
            onGoToSlide(moduleStartSlide);
            return;
          }

          const firstSlideId = selectedModule.lessons?.[0]?.slides?.[0]?.id;
          if (firstSlideId) {
            onGoToSlide(firstSlideId);
            return;
          }
        }

        const directSlide = flattenSlides(course).find((slide) => slide.id === selectedId)?.id;
        if (directSlide) {
          onGoToSlide(directSlide);
          return;
        }

        onGoToSlide(selectedId);
      };

      const handleLearningPathContinue = () => {
        // Checkpoint de módulo → avanzar al siguiente slide normalmente
        if (slideInfo.moduleId) {
          onNext();
          return;
        }
        // Ruta de aprendizaje intro → si ya completó el intro, ir al primer módulo pendiente
        const introCompleted = completedSlides.has(course.introduction.methodology.slideId);
        if (introCompleted) {
          const nextModule = course.modules.find((m) => !completedSlides.has(m.completion.slideId));
          if (nextModule) {
            handleModuleSelect(nextModule.id);
            return;
          }
        }
        onNext();
      };

      return (
        <LearningPathScreen
          lessonNumber={position.lessonCurrent}
          totalLessons={position.lessonTotal}
          content={data.content}
          modules={modules}
          completedSlides={completedSlides}
          onContinue={handleLearningPathContinue}
          onBack={onBack}
          onModuleSelect={handleModuleSelect}
        />
      );
    }

    // INTRODUCCIÓN - PANTALLA 3: Bienvenida
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

    // INTRODUCCIÓN - PANTALLA 4: Metodología
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

    // MÓDULOS - PANTALLA GLOSARIO
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

    // MÓDULO 1 - PANTALLA 1: Partes del Caballo (module-1-horse-parts)
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

    // MÓDULO 1 - PANTALLA 2: Intro a Zonas (module-1-zone-intro)
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
                onGoToSlide("module-1-case-study");
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

    // MÓDULO 1 - PANTALLA 3-5: Zonas Verde/Amarilla/Roja (module-1-zone-green/yellow/red)
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

    // MÓDULO 1 - PANTALLA 6: Caso de Estudio (module-1-case-study)
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

    // MÓDULO 1 - PANTALLA 7: Actividad Práctica (module-1-activity)
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

    // MÓDULO 1 - PANTALLA 8: Evaluación/Quiz (module-1-quiz)
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
          }}
          onContinue={onNext}
          onBack={onBack}
        />
      );
    }

    // MÓDULOS - PANTALLA DE COMPLETACIÓN
    case "completion": {
      const data = slideInfo.data as CompletionSlideData;
      return (
        <CompletionScreen
          content={data.content}
          onContinue={() => onGoToSlide?.(course.introduction.learningPath.slideId)}
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
