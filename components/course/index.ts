// ============================================
// PLANTILLA DE CURSOS INTERACTIVOS
// Exportaciones centralizadas de componentes
// ============================================

// Layouts
export { CourseLayout } from "./layouts/CourseLayout";

// Navigation
export { CourseHeader } from "./navigation/CourseHeader";
export { BottomNavigation, defaultNavItems, courseNavItems, progressNavItems } from "./navigation/BottomNavigation";

// UI Components
export { ContinueButton } from "./ui/ContinueButton";
export { BackButton } from "./ui/BackButton";
export { ZoneIndicator } from "./ui/ZoneIndicator";
export { FeatureBadge } from "./ui/FeatureBadge";
export { CourseTitle, CourseSubtitle, CourseParagraph, CourseFeatureText } from "./ui/Typography";

// Content Components
export { ContentCard } from "./content/ContentCard";
export { QuoteCard } from "./content/QuoteCard";
export { CitationCard } from "./content/CitationCard";
export { GlossaryTermCard } from "./content/GlossaryTermCard";
export type { GlossaryTermCardAccent } from "./content/GlossaryTermCard";
export { ExpandableText } from "./content/ExpandableText";
export { KeyComponentCard } from "./content/KeyComponentCard";
export { LearningObjectiveItem } from "./content/LearningObjectiveItem";

// Media Components
export { AudioPlayer } from "./media/AudioPlayer";
export { VideoPlayer } from "./media/VideoPlayer";
export { ImageWithOverlay } from "./media/ImageWithOverlay";
export { ImageCarousel } from "./media/ImageCarousel";
export { PartsSwiper } from "./media/PartsSwiper";

// Interactive Components
export { MultipleChoice } from "./interactive/MultipleChoice";
export { ImageMatching } from "./interactive/ImageMatching";
export { Checklist } from "./interactive/Checklist";
export { ScenarioQuestion } from "./interactive/ScenarioQuestion";
export { GlossarySearch } from "./interactive/GlossarySearch";

// Module-scoped Screens
export { Module1CaseStudyScreen } from "./modules/module-1";

// Screens
export { CoverScreen } from "./screens/CoverScreen";
export { WelcomeScreen } from "./screens/WelcomeScreen";
export { MethodologyScreen } from "./screens/MethodologyScreen";
export { LearningPathScreen } from "./screens/LearningPathScreen";
export { GlossaryScreen } from "./screens/GlossaryScreen";
export { ContentSlide } from "./screens/ContentSlide";
export { HorsePartsScreen } from "./screens/HorsePartsScreen";
export { ZoneIntroScreen } from "./screens/ZoneIntroScreen";
export { ZoneDetailScreen } from "./screens/ZoneDetailScreen";
export { CaseStudyScreen } from "./screens/CaseStudyScreen";
export { ActivityScreen } from "./screens/ActivityScreen";
export { QuizScreen } from "./screens/QuizScreen";
export { CompletionScreen } from "./screens/CompletionScreen";

// Types
export type * from "@/lib/course/types";
