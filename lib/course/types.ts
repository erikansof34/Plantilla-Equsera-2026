// ============================================
// PLANTILLA DE CURSOS INTERACTIVOS - TIPOS
// ============================================

// Configuración general del curso
export interface CourseConfig {
  id: string;
  branding: BrandingConfig;
  language: "es" | "en";
  navigation: NavigationConfig;
}

export interface BrandingConfig {
  logo: string;
  logoAlt: string;
  companyName: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface NavigationConfig {
  items: NavigationItem[];
  showProgress: boolean;
  showLessonCount: boolean;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: NavigationIcon;
  href: string;
}

export type NavigationIcon =
  | "home"
  | "progress"
  | "resources"
  | "help"
  | "courses"
  | "community"
  | "profile";

// ============================================
// ESTRUCTURA DEL CURSO
// ============================================

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  features: Feature[];
  modules: Module[];
  welcomeContent: WelcomeContent;
  methodologyContent: MethodologyContent;
  learningPathContent: LearningPathContent;
}

export interface Feature {
  id: string;
  icon: string;
  label: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  thumbnail: string;
  status: ModuleStatus;
  lessons: Lesson[];
  glossary: GlossaryTerm[];
  objectives: LearningObjective[];
  completion?: CompletionContent;
  completionSlideId?: string;
}

export type ModuleStatus = "active" | "locked" | "completed";

export interface Lesson {
  id: string;
  number: number;
  title: string;
  slides: Slide[];
}

// ============================================
// CONTENIDOS ESPECIALES
// ============================================

export interface WelcomeContent {
  title: string;
  courseTitle: string;
  heroImage: string;
  /** Video principal de bienvenida */
  heroVideoSrc?: string;
  /** Overlay opcional para el video principal */
  heroVideoOverlayText?: string;
  paragraphs: ContentParagraph[];
  audioSections: AudioSection[];
}

export interface MethodologyContent {
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  editorialNote: EditorialNote;
  videoCta?: VideoCta;
  weeklyFeatures: WeeklyFeature[];
}

export interface EditorialNote {
  badge: string;
  text: string;
}

export interface VideoCta {
  label: string;
  icon?: string;
  overlayText?: string;
}

export interface WeeklyFeature {
  id: string;
  icon: string;
  title: string;
}

export interface LearningPathModuleItem {
  id: string;
  title: string;
  thumbnail: string;
  status: ModuleStatus;
  isIntro?: boolean;
  sectionLabel?: string;
}

export interface LearningPathContent {
  title: string;
  subtitle: string;
  description: string;
  audioCta?: AudioCta;
  preparationSection: PreparationSection;
  moduleItems?: LearningPathModuleItem[];
}

export interface AudioCta {
  label: string;
  icon: string;
}

export interface PreparationSection {
  badge: string;
  title: string;
  description: string;
  audioLabel: string;
  audioDuration: string;
}

// ============================================
// SLIDES
// ============================================

export interface Slide {
  id: string;
  type: SlideType;
  content: SlideContent;
}

export type SlideType =
  | "cover"
  | "welcome"
  | "methodology"
  | "learning-path"
  | "glossary"
  | "content"
  | "horse-parts"
  | "zone-intro"
  | "zone-detail"
  | "case-study"
  | "activity"
  | "quiz"
  | "completion";

export interface SlideContent {
  // Header
  topLabel?: string;
  title?: string;
  subtitle?: string;
  zoneName?: string;
  zoneColor?: ZoneColor;

  // Text content
  paragraphs?: ContentParagraph[];
  expandableText?: ExpandableText;

  // Media
  media?: MediaItem[];
  imageCarousel?: ImageCarouselItem[];

  // Quotes and tips
  quotes?: Quote[];
  tips?: Tip[];
  infoCards?: InfoCard[];

  // Learning components
  keyComponents?: KeyComponent[];
  objectives?: LearningObjective[];
  zoneIndicators?: ZoneIndicator[];

  // Glossary
  glossaryTerms?: GlossaryTerm[];

  // Interactive
  questions?: Question[];
  scenario?: Scenario;
  checklist?: ChecklistItem[];
  imageMatching?: ImageMatchingExercise;

  // Completion
  completionData?: CompletionContent;
}

// ============================================
// CONTENT COMPONENTS
// ============================================

export interface ContentParagraph {
  id: string;
  text: string;
  highlighted?: HighlightedText[];
  expandable?: boolean;
  variant?: "default" | "bold" | "italic";
}

export interface HighlightedText {
  text: string;
  color?: "green" | "yellow" | "red" | "gold";
  bold?: boolean;
}

export interface ExpandableText {
  preview: string;
  fullText: string;
}

export interface Quote {
  id: string;
  text: string;
  icon?: string;
  variant: "default" | "highlight" | "tip" | "warning";
  backgroundColor?: string;
}

export interface Tip {
  id: string;
  text: string;
  icon: string;
  variant: "heart" | "star" | "sparkle" | "info";
}

export interface InfoCard {
  id: string;
  icon?: string;
  title?: string;
  text: string;
  variant: "default" | "green" | "yellow" | "red" | "cream" | "editorial";
  badge?: string;
}

// ============================================
// MEDIA COMPONENTS
// ============================================

export interface MediaItem {
  id: string;
  type: "image" | "video" | "audio";
  src: string;
  caption?: string;
  duration?: string;
  thumbnail?: string;
  overlay?: MediaOverlay;
  labels?: ImageLabel[];
}

export interface MediaOverlay {
  text: string;
  position?: "top" | "center" | "bottom";
  badge?: string;
  badgeColor?: ZoneColor;
}

export interface ImageLabel {
  id: string;
  text: string;
  position: { x: number; y: number };
  color?: ZoneColor;
}

export interface ImageCarouselItem {
  id: string;
  src: string;
  label: string;
  alt: string;
}

export interface AudioSection {
  id: string;
  label?: string;
  sublabel?: string;
  src: string;
  duration: string;
}

// ============================================
// LEARNING COMPONENTS
// ============================================

export interface KeyComponent {
  id: string;
  icon: string;
  title: string;
}

export interface LearningObjective {
  id: string;
  text: string;
  completed?: boolean;
  icon?: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: string;
  icon: string;
  color?: ZoneColor;
}

export interface ZoneIndicator {
  zone: ZoneColor;
  title: string;
  description: string;
}

export type ZoneColor = "green" | "yellow" | "red";

// ============================================
// INTERACTIVE COMPONENTS
// ============================================

export interface Question {
  id: string;
  type: "multiple-choice" | "image-matching" | "scenario";
  question: string;
  context?: string;
  image?: string;
  imageLabel?: string;
  options: QuestionOption[];
  correctAnswer: string | string[];
  feedback?: QuestionFeedback;
}

export interface QuestionOption {
  id: string;
  label: string;
  text: string;
  image?: string;
}

export interface QuestionFeedback {
  correct: string;
  incorrect: string;
}

export interface Scenario {
  id: string;
  badge: string;
  title: string;
  description: string;
  image?: string;
  question: string;
  options: QuestionOption[];
  correctAnswer: string;
  keyInsight: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  color?: ZoneColor;
}

export interface ImageMatchingExercise {
  id: string;
  instructions: string;
  items: ImageMatchingItem[];
  interestingFact?: InfoCard;
}

export interface ImageMatchingItem {
  id: string;
  image: string;
  label: string;
  options: string[];
  correctAnswer: string;
}

// ============================================
// COMPLETION
// ============================================

export interface CompletionContent {
  moduleNumber: number;
  badge: string;
  title: string;
  subtitle: string;
  celebrationImage: string;
  achievements: Achievement[];
  challenge: Challenge;
}

export interface Achievement {
  id: string;
  text: string;
  completed: boolean;
}

export interface Challenge {
  title: string;
  badge: string;
  description: string;
  items: ChecklistItem[];
}

// ============================================
// PROGRESS STATE
// ============================================

export interface CourseProgress {
  courseId: string;
  currentModuleId: string;
  currentLessonId: string;
  currentSlideIndex: number;
  completedSlides: string[];
  completedLessons: string[];
  completedModules: string[];
  progressPercentage: number;
  lastAccessedAt: string;
}

// ============================================
// UI STATE
// ============================================

export interface SlideNavigationState {
  canGoBack: boolean;
  canGoForward: boolean;
  currentSlide: number;
  totalSlides: number;
  lessonNumber: number;
  totalLessons: number;
}

export interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  progress: number;
}

export interface VideoPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  progress: number;
  isMuted: boolean;
  isFullscreen: boolean;
}
