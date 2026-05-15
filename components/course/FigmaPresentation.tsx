"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CoverScreen } from "./screens/CoverScreen";
import { WelcomeScreen } from "./screens/WelcomeScreen";
import { MethodologyScreen } from "./screens/MethodologyScreen";
import { LearningPathScreen } from "./screens/LearningPathScreen";
import { GlossaryScreen } from "./screens/GlossaryScreen";
import { HorsePartsScreen } from "./screens/HorsePartsScreen";
import { ZoneIntroScreen } from "./screens/ZoneIntroScreen";
import { ZoneDetailScreen } from "./screens/ZoneDetailScreen";
import { CaseStudyScreen } from "./screens/CaseStudyScreen";
import { ActivityScreen } from "./screens/ActivityScreen";
import { QuizScreen } from "./screens/QuizScreen";
import { CompletionScreen } from "./screens/CompletionScreen";
import type { WelcomeContent, MethodologyContent, LearningPathContent, SlideContent, ZoneColor, Module, GlossaryTerm } from "@/lib/course/types";
import { introductionWelcome } from "@/lib/course/content/introduction/welcome";
import { introductionMethodology } from "@/lib/course/content/introduction/methodology";
import { introductionLearningPath } from "@/lib/course/content/introduction/learning-path";
import { module1Glossary } from "@/lib/course/content/glossary";
import { module1Completion } from "@/lib/course/content/evaluation";

// Datos de ejemplo para todas las pantallas
const exampleData = {
  cover: {
    logo: "/img/logo_blanco_sin_fondo.png",
    logoAlt: "EQUSERA",
    titleLine1: "CURSO DE",
    titleLine2: "EQUITACIÓN",
    subtitle: "APRENDE A MONTAR Y CUIDAR CABALLOS DESDE CERO",
    features: [
      { id: "feature-1", icon: "clock", label: "TIEMPO DE FORMACIÓN" },
      { id: "feature-2", icon: "graduation", label: "CERTIFICACIÓN OFICIAL" },
      { id: "feature-3", icon: "interactive", label: "PRÁCTICA INTENSIVA" },
    ],
    backgroundImage: "/placeholder.jpg",
    ctaLabel: "COMENZAR",
    helperText: "CURSO 100% ONLINE",
  },
  
  welcome: {
    title: "Bienvenido al Curso",
    courseTitle: "Equitación Fundamental",
    heroImage: "/placeholder.jpg",
    paragraphs: [
      { id: "welcome-p1", text: "Este curso te guiará paso a paso en el fascinante mundo de la equitación." },
      { id: "welcome-p2", text: "Nuestro método práctico combina teoría con ejercicios hands-on." },
    ],
    audioSections: [
      {
        id: "welcome-a1",
        label: "Introducción al curso",
        src: "/audio/sld_bievenidos_nos_alegra.mp3",
        duration: "02:45",
      },
    ],
  } as WelcomeContent,

  methodology: {
    badge: "METODOLOGÍA",
    title: "Nuestro Enfoque",
    subtitle: "Aprendizaje progresivo y seguro",
    image: "/placeholder.jpg",
    editorialNote: {
      badge: "IMPORTANTE",
      text: "Cada lección está diseñada para construir sobre la anterior.",
    },
    videoCta: {
      label: "VER MÉTODO EN ACCIÓN",
      icon: "play",
    },
    weeklyFeatures: [
      { id: "methodology-f1", icon: "book", title: "Teoría fundamentada" },
      { id: "methodology-f2", icon: "graduation", title: "Práctica guiada" },
      { id: "methodology-f3", icon: "target", title: "Evaluación continua" },
    ],
  } as MethodologyContent,

  learningPath: {
    title: "Tu Ruta de Aprendizaje",
    subtitle: "Un camino estructurado hacia el dominio",
    description: "Sigue nuestra secuencia optimizada para desarrollar tus habilidades.",
    audioCta: {
      label: "ESCUCHA LA GUÍA",
      icon: "volume",
    },
    preparationSection: {
      badge: "PREPARACIÓN",
      title: "¿Qué necesitas empezar?",
      description: "Reúne estos elementos antes de comenzar tu primera lección.",
      audioLabel: "Lista de materiales",
      audioDuration: "01:30",
    },
  } as LearningPathContent,

  modules: [
    {
      id: "module-1",
      number: 1,
      title: "Módulo 1: Fundamentos",
      subtitle: "Conceptos básicos de equitación",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cbecf99b9e8?w=300&h=200&fit=crop",
      status: "completed" as const,
      lessons: [
        { id: "lesson-1", number: 1, title: "Introducción", slides: [] },
        { id: "lesson-2", number: 2, title: "Anatomía básica", slides: [] },
      ],
      glossary: [
        {
          id: "term-1",
          term: "Monta",
          definition: "Acto de subirse y cabalgar un caballo",
          category: "Básico",
          icon: "book",
        },
        {
          id: "term-2",
          term: "Rienda",
          definition: "Cuerda o tira usada para guiar al caballo",
          category: "Equipamiento",
          icon: "shield",
        },
      ],
      objectives: [
        { id: "obj-1", text: "Identificar partes principales del caballo" },
        { id: "obj-2", text: "Comprender zonas de seguridad" },
      ],
    },
    {
      id: "module-2", 
      number: 2,
      title: "Módulo 2: Zonas de Seguridad",
      subtitle: "Áreas de interacción segura",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cbecf99b9e8?w=300&h=200&fit=crop",
      status: "active" as const,
      lessons: [
        { id: "lesson-3", number: 3, title: "Zonas verdes", slides: [] },
        { id: "lesson-4", number: 4, title: "Zonas amarillas", slides: [] },
      ],
      glossary: [],
      objectives: [
        { id: "obj-3", text: "Dominar navegación por zonas" },
      ],
    },
  ],

  glossary: {
    title: "Glosario Equitación",
    subtitle: "Términos esenciales",
    glossaryImage: "/placeholder.jpg",
    imageCaption: "Conceptos fundamentales",
    helperText: "Consulta estos términos cuando los encuentres en las lecciones",
    quote: "El conocimiento del vocabulario es el primer paso hacia el dominio.",
    terms: [
      {
        id: "term-1",
        term: "Monta",
        definition: "Acto de subirse y cabalgar un caballo",
        category: "Básico",
        icon: "book",
      },
      {
        id: "term-2",
        term: "Rienda",
        definition: "Cuerda o tira usada para guiar al caballo",
        category: "Equipamiento",
        icon: "shield",
      },
    ],
  },

  horseParts: {
    topLabel: "MÓDULO 1",
    title: "Partes del Caballo",
    paragraphs: [
      { id: "hp-p1", text: "Conocer la anatomía del caballo es fundamental para su cuidado." },
    ],
    imageCarousel: [
      {
        id: "hp-i1",
        src: "/placeholder.jpg",
        label: "Anatomía externa",
        alt: "Partes externas del caballo",
      },
      {
        id: "hp-i2",
        src: "/placeholder.jpg",
        label: "Patas y cascos",
        alt: "Extremidades del caballo",
      },
    ],
    objectives: [
      { id: "hp-o1", text: "Identificar las partes principales del caballo" },
      { id: "hp-o2", text: "Comprender la función de cada parte" },
    ],
    quotes: [
      {
        id: "hp-q1",
        text: "Conocer la anatomía del caballo es fundamental para su cuidado y manejo adecuado.",
        variant: "highlight",
      },
    ],
  } as SlideContent,

  zoneIntro: {
    title: "Zonas de Seguridad",
    subtitle: "Áreas de interacción segura con el caballo",
    expandableText: {
      preview: "Los caballos tienen zonas específicas donde el contacto es más seguro...",
      fullText: "Los caballos tienen zonas específicas donde el contacto es más seguro y otras donde debes tener precaución. Entender estas zonas es crucial para tu seguridad y el bienestar del animal.",
    },
    zoneIndicators: [
      { zone: "green", title: "Zona Segura", description: "Contacto directo sin riesgo" },
      { zone: "yellow", title: "Zona Precaución", description: "Manejo cuidadoso requerido" },
      { zone: "red", title: "Zona Riesgo", description: "Solo expertos" },
    ],
    keyComponents: [
      { id: "zi-k1", icon: "book", title: "Conocimiento" },
      { id: "zi-k2", icon: "shield", title: "Seguridad" },
      { id: "zi-k3", icon: "target", title: "Precisión" },
    ],
  } as SlideContent,

  zones: [
    {
      title: "Zona Verde - Máxima Seguridad",
      zoneName: "Zona Segura",
      zoneColor: "green" as ZoneColor,
      paragraphs: [
        { id: "zg-p1", text: "Esta zona permite contacto directo y seguro con el caballo." },
      ],
      media: [
        {
          id: "zd-i1",
          type: "image",
          src: "/placeholder.jpg",
          overlay: {
            text: "Zona de contacto seguro",
            position: "bottom",
          },
        },
      ],
      infoCards: [
        {
          id: "zd-card-1",
          text: "Esta zona permite contacto directo y seguro con el caballo. Ideal para principiantes.",
          variant: "default",
        },
      ],
    },
    {
      title: "Zona Amarilla - Precaución",
      zoneName: "Zona Precaución",
      zoneColor: "yellow" as ZoneColor,
      paragraphs: [
        { id: "zy-p1", text: "Esta zona requiere precaución y supervisión constante." },
      ],
      media: [
        {
          id: "zy-i1",
          type: "image",
          src: "/placeholder.jpg",
          overlay: {
            text: "Cuidado al acercarse",
            position: "bottom",
          },
        },
      ],
      infoCards: [
        {
          id: "zd-card-2",
          text: "En esta zona, el caballo puede no verte claramente. Siempre habla antes de entrar.",
          variant: "warning",
        },
      ],
    },
    {
      title: "Zona Roja - Peligro",
      zoneName: "Zona de Riesgo",
      zoneColor: "red" as ZoneColor,
      paragraphs: [
        { id: "zr-p1", text: "Evita permanecer en esta zona sin supervisión." },
      ],
      media: [
        {
          id: "zd-i3",
          type: "image",
          src: "/placeholder.jpg",
          overlay: {
            text: "Zona de alto riesgo",
            position: "bottom",
          },
        },
      ],
      infoCards: [
        {
          id: "zd-card-3",
          text: "Peligro de coces. Nunca te sitúes directamente detrás del caballo.",
          variant: "error",
        },
      ],
    },
  ] as SlideContent[],

  caseStudy: {
    title: "Caso de Estudio: El establo",
    subtitle: "Analiza la situación y decide",
    image: "/placeholder.jpg",
    description: "Un caballo se muestra inquieto al entrar en su box. ¿Qué harías?",
    media: [
      { id: "case-v1", type: "video", src: "/video/portada/portada_video.mp4", thumbnail: "/placeholder.jpg" },
    ],
  } as SlideContent,

  activity: {
    title: "Actividad de Refuerzo",
    description: "Arrastra las zonas a su lugar correspondiente en el caballo.",
  } as SlideContent,

  quiz: {
    title: "Evaluación Final",
    description: "Demuestra lo aprendido en este módulo.",
    questions: [
      {
        id: "q1",
        question: "¿Cuál es la zona más segura?",
        options: [
          { id: "o1", label: "Verde", isCorrect: true },
          { id: "o2", label: "Roja", isCorrect: false },
        ],
        image: "/placeholder.jpg",
      },
    ],
  } as SlideContent,

  completion: {
    moduleNumber: 1,
    badge: "¡COMPLETADO!",
    title: "¡Módulo Completado!",
    subtitle: "Has dominado las zonas de seguridad",
    celebrationImage: "/placeholder.jpg",
    achievements: [
      { id: "achievement-1", text: "Anatomía básica dominada", completed: true },
      { id: "achievement-2", text: "Zonas de seguridad identificadas", completed: true },
    ],
    challenge: {
      title: "Práctica Recomendada",
      badge: "PRÓXIMO PASO",
      description: "Aplica estos conocimientos en un entorno controlado",
      items: [{ id: "challenge-1", text: "Practicar identificación de zonas en 5 caballos diferentes", completed: false }],
    },
  },
};

export interface FigmaPresentationProps {
  /** Clase adicional */
  className?: string;
}

export function FigmaPresentation({ className }: FigmaPresentationProps) {
  const [currentScreen, setCurrentScreen] = useState(0);
  
  const screens = [
    { id: 'cover', label: 'Portada' },
    { id: 'welcome', label: 'Bienvenida' },
    { id: 'methodology', label: 'Metodología' },
    { id: 'learning-path', label: 'Ruta' },
    { id: 'glossary', label: 'Glosario' },
    { id: 'horse-parts', label: 'Partes' },
    { id: 'zone-intro', label: 'Zonas Intro' },
    { id: 'zone-green', label: 'Zona Verde' },
    { id: 'zone-yellow', label: 'Zona Amarilla' },
    { id: 'zone-red', label: 'Zona Roja' },
    { id: 'case-study', label: 'Caso' },
    { id: 'activity', label: 'Actividad' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'completion', label: 'Completado' },
  ];

  const totalScreens = screens.length;
  const progressPercentage = ((currentScreen + 1) / totalScreens) * 100;

  const handleNext = () => {
    if (currentScreen < totalScreens - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const handlePrevious = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 0:
        return (
          <CoverScreen
            {...exampleData.cover}
            onStart={handleNext}
          />
        );
      
      case 1:
        return (
          <WelcomeScreen
            lessonNumber={1}
            totalLessons={totalScreens}
            content={exampleData.welcome}
            navbarTitle={introductionWelcome.navbarTitle}
            onContinue={handleNext}
            onBack={handlePrevious}
          />
        );
      
      case 2:
        return (
          <MethodologyScreen
            lessonNumber={2}
            totalLessons={totalScreens}
            content={exampleData.methodology}
            navbarTitle={introductionMethodology.navbarTitle}
            onContinue={handleNext}
            onBack={handlePrevious}
          />
        );
      
      case 3:
        return (
          <LearningPathScreen
            lessonNumber={3}
            totalLessons={totalScreens}
            content={exampleData.learningPath}
            modules={exampleData.modules}
            completedSlides={new Set()}
            navbarTitle={introductionLearningPath.navbarTitle}
            onContinue={handleNext}
            onBack={handlePrevious}
          />
        );
      
      case 4:
        return (
          <GlossaryScreen
            lessonNumber={4}
            totalLessons={totalScreens}
            moduleTitle={exampleData.glossary.title}
            subtitle={exampleData.glossary.subtitle}
            glossaryImage={exampleData.glossary.glossaryImage}
            imageCaption={exampleData.glossary.imageCaption}
            terms={exampleData.glossary.terms}
            helperText={exampleData.glossary.helperText}
            quote={exampleData.glossary.quote}
            navbarTitle={module1Glossary.navbarTitle}
            onContinue={handleNext}
            onBack={handlePrevious}
          />
        );
      
      case 5:
        return (
          <HorsePartsScreen
            lessonNumber={5}
            totalLessons={totalScreens}
            content={exampleData.horseParts}
            onContinue={handleNext}
            onBack={handlePrevious}
          />
        );
      
      case 6:
        return (
          <ZoneIntroScreen
            lessonNumber={6}
            totalLessons={totalScreens}
            content={exampleData.zoneIntro}
            onContinue={handleNext}
            onBack={handlePrevious}
          />
        );
      
      case 7:
        return (
          <ZoneDetailScreen
            lessonNumber={7}
            totalLessons={totalScreens}
            zoneName="Zona Segura"
            zoneColor="green"
            content={exampleData.zones[0]}
            onContinue={handleNext}
            onBack={handlePrevious}
          />
        );
      
      case 8:
        return (
          <ZoneDetailScreen
            lessonNumber={8}
            totalLessons={totalScreens}
            zoneName="Zona Precaución"
            zoneColor="yellow"
            content={exampleData.zones[1]}
            onContinue={handleNext}
            onBack={handlePrevious}
          />
        );
      
      case 9:
        return (
          <ZoneDetailScreen
            lessonNumber={9}
            totalLessons={totalScreens}
            zoneName="Zona Riesgo"
            zoneColor="red"
            content={exampleData.zones[2]}
            onContinue={handleNext}
            onBack={handlePrevious}
          />
        );
      
      case 10:
        return (
          <CaseStudyScreen
            lessonNumber={10}
            totalLessons={totalScreens}
            content={exampleData.caseStudy}
            onContinue={handleNext}
            onBack={handlePrevious}
          />
        );
      
      case 11:
        return (
          <ActivityScreen
            title="Actividad Práctica"
            subtitle="Aplica lo aprendido sobre zonas de seguridad"
            progressPercentage={progressPercentage}
            questions={exampleData.activity.questions || []}
            onFinish={handleNext}
            onBack={handlePrevious}
          />
        );
      
      case 12:
        return (
          <QuizScreen
            lessonNumber={12}
            totalLessons={totalScreens}
            badge="QUIZ"
            moduleTitle="Zonas de Seguridad"
            instructions="Relaciona cada imagen con su zona correcta"
            exercise={exampleData.quiz.imageMatching!}
            interestingFact={exampleData.quiz.imageMatching?.interestingFact}
            onComplete={handleNext}
            onBack={handlePrevious}
          />
        );
      
      case 13:
        return (
          <CompletionScreen
            content={exampleData.completion}
            navbarTitle={module1Completion.navbarTitle}
            onContinue={() => setCurrentScreen(0)} // Volver al inicio
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={cn("min-h-screen bg-gray-50", className)}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="px-4 py-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-600">
              {screens[currentScreen]?.label} - Pantalla {currentScreen + 1} de {totalScreens}
            </span>
            <span className="text-xs font-medium text-gray-600">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-course-gold h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 bg-white rounded-full shadow-lg border border-gray-200 px-4 py-2">
        <button
          onClick={handlePrevious}
          disabled={currentScreen === 0}
          className={cn(
            "p-2 rounded-full transition-colors",
            currentScreen === 0 
              ? "text-gray-300 cursor-not-allowed" 
              : "text-gray-600 hover:text-course-gold hover:bg-gray-100"
          )}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        
        <div className="flex items-center gap-1 px-2">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentScreen(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === currentScreen
                  ? "bg-course-gold"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>
        
        <button
          onClick={handleNext}
          disabled={currentScreen === totalScreens - 1}
          className={cn(
            "p-2 rounded-full transition-colors",
            currentScreen === totalScreens - 1 
              ? "text-gray-300 cursor-not-allowed" 
              : "text-gray-600 hover:text-course-gold hover:bg-gray-100"
          )}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Current Screen */}
      <div className="pt-16">
        {renderCurrentScreen()}
      </div>
    </div>
  );
}

export default FigmaPresentation;
