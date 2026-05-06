import type { CourseStructure, TemplateBrandIdentity, TemplateSlideBlueprint } from "./course-structure";
import { DEFAULT_TEMPLATE_SEQUENCE } from "./course-structure";

export const FIGMA_TEMPLATE_SOURCE = {
  fileKey: "WjflBQMYMasCutRRuHCRRs",
  url: "https://www.figma.com/design/WjflBQMYMasCutRRuHCRRs/Proyecto-Final-Equus---Plantilla",
};

export const FIGMA_NODE_MAP: Record<string, string> = {
  cover: "1:3",
  welcome: "1:64",
  methodology: "2:125",
  learningPath: "2:2",
  glossary: "3:208",
  horseParts: "6:331",
  zones: "10:541",
  cases: "10:433",
  bodySlides: "14:720",
};

export const DEFAULT_TEMPLATE_BRAND: TemplateBrandIdentity = {
  logo: "/images/logo-equsera.png",
  logoAlt: "EQUSERA",
  primaryColor: "#052A0B",
  secondaryColor: "#576755",
  accentColor: "#765A02",
  coverStyle: "dark",
};

export const equusTemplateSequence: TemplateSlideBlueprint[] = DEFAULT_TEMPLATE_SEQUENCE;

export const equusTemplateCourse: CourseStructure = {
  id: "equus-template",
  templateBrand: DEFAULT_TEMPLATE_BRAND,
  templateSequence: equusTemplateSequence,
  meta: {
    title: "{{COURSE_TITLE}}",
    subtitle: "{{COURSE_SUBTITLE}}",
    description: "{{COURSE_DESCRIPTION}}",
    coverImage: "{{COVER_IMAGE_URL}}",
    logo: DEFAULT_TEMPLATE_BRAND.logo,
    logoAlt: DEFAULT_TEMPLATE_BRAND.logoAlt,
    language: "es",
    features: [
      { id: "feature-1", icon: "clock", label: "{{FEATURE_1}}" },
      { id: "feature-2", icon: "graduation", label: "{{FEATURE_2}}" },
      { id: "feature-3", icon: "interactive", label: "{{FEATURE_3}}" },
    ],
  },
  introduction: {
    cover: {
      slideId: "intro-cover",
      titleLine1: "{{COVER_TITLE_LINE_1}}",
      titleLine2: "{{COVER_TITLE_LINE_2}}",
      subtitle: "{{COVER_SUBTITLE}}",
      ctaLabel: "{{COVER_CTA_LABEL}}",
      helperText: "{{COVER_HELPER_TEXT}}",
    },
    welcome: {
      slideId: "intro-welcome",
      content: {
        title: "{{WELCOME_TITLE}}",
        courseTitle: "{{WELCOME_COURSE_TITLE}}",
        heroImage: "{{WELCOME_HERO_IMAGE_URL}}",
        paragraphs: [
          { id: "welcome-p1", text: "{{WELCOME_PARAGRAPH_1}}" },
          { id: "welcome-p2", text: "{{WELCOME_PARAGRAPH_2}}" },
        ],
        audioSections: [
          {
            id: "welcome-a1",
            label: "{{WELCOME_AUDIO_LABEL}}",
            src: "{{WELCOME_AUDIO_1_SRC}}",
            duration: "{{WELCOME_AUDIO_1_DURATION}}",
          },
        ],
      },
    },
    methodology: {
      slideId: "intro-methodology",
      content: {
        badge: "{{METHODOLOGY_BADGE}}",
        title: "{{METHODOLOGY_TITLE}}",
        subtitle: "{{METHODOLOGY_SUBTITLE}}",
        image: "{{METHODOLOGY_IMAGE_URL}}",
        editorialNote: {
          badge: "{{METHODOLOGY_NOTE_BADGE}}",
          text: "{{METHODOLOGY_NOTE_TEXT}}",
        },
        videoCta: {
          label: "{{METHODOLOGY_VIDEO_CTA_LABEL}}",
          icon: "play",
        },
        weeklyFeatures: [
          { id: "methodology-f1", icon: "book", title: "{{METHODOLOGY_FEATURE_1}}" },
          { id: "methodology-f2", icon: "graduation", title: "{{METHODOLOGY_FEATURE_2}}" },
          { id: "methodology-f3", icon: "target", title: "{{METHODOLOGY_FEATURE_3}}" },
        ],
      },
    },
    learningPath: {
      slideId: "intro-learning-path",
      content: {
        title: "{{LEARNING_PATH_TITLE}}",
        subtitle: "{{LEARNING_PATH_SUBTITLE}}",
        description: "{{LEARNING_PATH_DESCRIPTION}}",
        audioCta: {
          label: "{{LEARNING_PATH_AUDIO_LABEL}}",
          icon: "volume",
        },
        preparationSection: {
          badge: "{{PREP_BADGE}}",
          title: "{{PREP_TITLE}}",
          description: "{{PREP_DESCRIPTION}}",
          audioLabel: "{{PREP_AUDIO_LABEL}}",
          audioDuration: "{{PREP_AUDIO_DURATION}}",
        },
      },
    },
  },
  modules: [
    {
      id: "module-1",
      number: 1,
      title: "{{MODULE_1_TITLE}}",
      subtitle: "{{MODULE_1_SUBTITLE}}",
      description: "{{MODULE_1_DESCRIPTION}}",
      thumbnail: "{{MODULE_1_THUMBNAIL_URL}}",
      status: "active",
      glossary: {
        slideId: "m1-glossary",
        title: "{{GLOSSARY_TITLE}}",
        subtitle: "{{GLOSSARY_SUBTITLE}}",
        image: "{{GLOSSARY_IMAGE_URL}}",
        imageCaption: "{{GLOSSARY_IMAGE_CAPTION}}",
        helperText: "{{GLOSSARY_HELPER_TEXT}}",
        quote: "{{GLOSSARY_QUOTE}}",
        terms: [
          {
            id: "term-1",
            term: "{{TERM_1}}",
            definition: "{{TERM_1_DEF}}",
            category: "{{TERM_1_CATEGORY}}",
            icon: "book",
          },
        ],
      },
      lessons: [
        {
          id: "m1-l1",
          number: 1,
          title: "{{LESSON_1_TITLE_HORSE_PARTS}}",
          slides: [
            {
              id: "m1-l1-s1",
              type: "horse-parts",
              order: 1,
              content: {
                topLabel: "{{HORSE_PARTS_TOP_LABEL}}",
                title: "{{HORSE_PARTS_TITLE}}",
                paragraphs: [{ id: "hp-p1", text: "{{HORSE_PARTS_TEXT}}" }],
                imageCarousel: [
                  {
                    id: "hp-i1",
                    src: "{{HORSE_PARTS_IMAGE_1}}",
                    label: "{{HORSE_PARTS_LABEL_1}}",
                    alt: "{{HORSE_PARTS_ALT_1}}",
                  },
                  {
                    id: "hp-i2",
                    src: "{{HORSE_PARTS_IMAGE_2}}",
                    label: "{{HORSE_PARTS_LABEL_2}}",
                    alt: "{{HORSE_PARTS_ALT_2}}",
                  },
                ],
                objectives: [
                  { id: "hp-o1", text: "{{HORSE_PARTS_OBJECTIVE_1}}" },
                  { id: "hp-o2", text: "{{HORSE_PARTS_OBJECTIVE_2}}" },
                ],
                quotes: [
                  {
                    id: "hp-q1",
                    text: "{{HORSE_PARTS_QUOTE}}",
                    variant: "highlight",
                  },
                ],
              },
            },
          ],
        },
        {
          id: "m1-l2",
          number: 2,
          title: "{{LESSON_2_TITLE_SAFE_ZONES}}",
          slides: [
            {
              id: "m1-l2-s1",
              type: "zone-intro",
              order: 1,
              content: {
                title: "{{ZONE_INTRO_TITLE}}",
                subtitle: "{{ZONE_INTRO_SUBTITLE}}",
                expandableText: {
                  preview: "{{ZONE_INTRO_PREVIEW}}",
                  fullText: "{{ZONE_INTRO_FULL_TEXT}}",
                },
                zoneIndicators: [
                  { zone: "green", title: "{{ZONE_GREEN_TITLE}}", description: "{{ZONE_GREEN_DESC}}" },
                  { zone: "yellow", title: "{{ZONE_YELLOW_TITLE}}", description: "{{ZONE_YELLOW_DESC}}" },
                  { zone: "red", title: "{{ZONE_RED_TITLE}}", description: "{{ZONE_RED_DESC}}" },
                ],
                keyComponents: [
                  { id: "zi-k1", icon: "book", title: "{{ZONE_COMPONENT_1}}" },
                  { id: "zi-k2", icon: "shield", title: "{{ZONE_COMPONENT_2}}" },
                  { id: "zi-k3", icon: "target", title: "{{ZONE_COMPONENT_3}}" },
                ],
              },
            },
            {
              id: "m1-l2-s2",
              type: "zone-detail",
              order: 2,
              content: {
                title: "{{ZONE_DETAIL_TITLE}}",
                zoneName: "{{ZONE_DETAIL_NAME}}",
                zoneColor: "green",
                media: [
                  {
                    id: "zd-i1",
                    type: "image",
                    src: "{{ZONE_DETAIL_IMAGE}}",
                    overlay: {
                      text: "{{ZONE_DETAIL_IMAGE_OVERLAY}}",
                      position: "bottom",
                    },
                  },
                  {
                    id: "zd-a1",
                    type: "audio",
                    src: "{{ZONE_DETAIL_AUDIO}}",
                    caption: "{{ZONE_DETAIL_AUDIO_CAPTION}}",
                    duration: "{{ZONE_DETAIL_AUDIO_DURATION}}",
                  },
                ],
                infoCards: [
                  {
                    id: "zd-card-1",
                    text: "{{ZONE_DETAIL_INFOCARD}}",
                    variant: "default",
                  },
                ],
                tips: [
                  {
                    id: "zd-tip-1",
                    text: "{{ZONE_DETAIL_TIP}}",
                    icon: "info",
                    variant: "info",
                  },
                ],
              },
            },
            {
              id: "m1-l2-s3",
              type: "zone-detail",
              order: 3,
              content: {
                title: "{{ZONE_YELLOW_TITLE_SLIDE}}",
                zoneName: "{{ZONE_YELLOW_NAME}}",
                zoneColor: "yellow",
                media: [
                  {
                    id: "zy-i1",
                    type: "image",
                    src: "{{ZONE_YELLOW_IMAGE}}",
                    labels: [
                      {
                        id: "zy-l1",
                        text: "{{ZONE_YELLOW_LABEL_1}}",
                        position: { x: 25, y: 35 },
                        color: "yellow",
                      },
                    ],
                  },
                  {
                    id: "zy-a1",
                    type: "audio",
                    src: "{{ZONE_YELLOW_AUDIO}}",
                    duration: "{{ZONE_YELLOW_AUDIO_DURATION}}",
                    caption: "{{ZONE_YELLOW_AUDIO_CAPTION}}",
                  },
                  {
                    id: "zy-v1",
                    type: "video",
                    src: "{{ZONE_YELLOW_VIDEO}}",
                    thumbnail: "{{ZONE_YELLOW_VIDEO_THUMBNAIL}}",
                    caption: "{{ZONE_YELLOW_VIDEO_CAPTION}}",
                  },
                ],
                infoCards: [
                  { id: "zy-card-1", title: "{{ZONE_YELLOW_CARD_1_TITLE}}", text: "{{ZONE_YELLOW_CARD_1_TEXT}}", variant: "yellow" },
                  { id: "zy-card-2", title: "{{ZONE_YELLOW_CARD_2_TITLE}}", text: "{{ZONE_YELLOW_CARD_2_TEXT}}", variant: "yellow" },
                ],
              },
            },
            {
              id: "m1-l2-s4",
              type: "zone-detail",
              order: 4,
              content: {
                title: "{{ZONE_RED_TITLE_SLIDE}}",
                zoneName: "{{ZONE_RED_NAME}}",
                zoneColor: "red",
                media: [
                  {
                    id: "zr-i1",
                    type: "image",
                    src: "{{ZONE_RED_IMAGE}}",
                    overlay: {
                      badge: "{{ZONE_RED_BADGE}}",
                      badgeColor: "red",
                      position: "top",
                      text: "{{ZONE_RED_OVERLAY_TEXT}}",
                    },
                  },
                  {
                    id: "zr-a1",
                    type: "audio",
                    src: "{{ZONE_RED_AUDIO}}",
                    duration: "{{ZONE_RED_AUDIO_DURATION}}",
                    caption: "{{ZONE_RED_AUDIO_CAPTION}}",
                  },
                ],
                infoCards: [
                  {
                    id: "zr-card-1",
                    title: "{{ZONE_RED_CARD_TITLE}}",
                    text: "{{ZONE_RED_CARD_TEXT}}",
                    variant: "red",
                  },
                ],
              },
            },
          ],
        },
        {
          id: "m1-l3",
          number: 3,
          title: "{{LESSON_3_TITLE_CASES_AND_PRACTICE}}",
          slides: [
            {
              id: "m1-l3-s1",
              type: "case-study",
              order: 1,
              content: {
                title: "{{CASE_TITLE}}",
                media: [
                  { id: "case-v1", type: "video", src: "{{CASE_VIDEO_URL}}", thumbnail: "{{CASE_VIDEO_THUMBNAIL}}" },
                  { id: "case-a1", type: "audio", src: "{{CASE_AUDIO_URL}}", duration: "{{CASE_AUDIO_DURATION}}" },
                ],
                quotes: [
                  {
                    id: "case-quote-1",
                    text: "{{CASE_QUOTE_1}}",
                    variant: "default",
                  },
                ],
                questions: [
                  {
                    id: "case-q1",
                    type: "multiple-choice",
                    question: "{{CASE_QUESTION}}",
                    options: [
                      { id: "case-a", label: "A", text: "{{CASE_OPTION_A}}" },
                      { id: "case-b", label: "B", text: "{{CASE_OPTION_B}}" },
                    ],
                    correctAnswer: "case-a",
                  },
                ],
              },
            },
            {
              id: "m1-l3-s2",
              type: "content",
              order: 2,
              content: {
                title: "{{BODY_SLIDE_TITLE}}",
                paragraphs: [{ id: "body-p1", text: "{{BODY_SLIDE_TEXT}}" }],
                media: [
                  {
                    id: "body-m1",
                    type: "image",
                    src: "{{BODY_SLIDE_IMAGE}}",
                    overlay: { text: "{{BODY_SLIDE_IMAGE_OVERLAY}}", position: "bottom" },
                  },
                ],
              },
            },
            {
              id: "m1-l3-s3",
              type: "content",
              order: 3,
              content: {
                title: "{{BODY_SLIDE_2_TITLE}}",
                paragraphs: [{ id: "body2-p1", text: "{{BODY_SLIDE_2_TEXT}}" }],
                media: [
                  { id: "body2-v1", type: "video", src: "{{BODY_SLIDE_2_VIDEO}}", thumbnail: "{{BODY_SLIDE_2_VIDEO_THUMB}}" },
                  { id: "body2-a1", type: "audio", src: "{{BODY_SLIDE_2_AUDIO}}", duration: "{{BODY_SLIDE_2_AUDIO_DURATION}}" },
                ],
                quotes: [
                  { id: "body2-q1", text: "{{BODY_SLIDE_2_QUOTE}}", variant: "tip" },
                ],
              },
            },
            {
              id: "m1-l3-s4",
              type: "activity",
              order: 4,
              isRequired: true,
              content: {
                questions: [
                  {
                    id: "activity-q1",
                    type: "multiple-choice",
                    question: "{{ACTIVITY_QUESTION}}",
                    options: [
                      { id: "act-a", label: "A", text: "{{ACTIVITY_OPTION_A}}" },
                      { id: "act-b", label: "B", text: "{{ACTIVITY_OPTION_B}}" },
                    ],
                    correctAnswer: "act-a",
                  },
                ],
                scenario: {
                  id: "scenario-1",
                  badge: "{{SCENARIO_BADGE}}",
                  title: "{{SCENARIO_TITLE}}",
                  description: "{{SCENARIO_DESCRIPTION}}",
                  question: "{{SCENARIO_QUESTION}}",
                  options: [
                    { id: "sc-a", label: "A", text: "{{SCENARIO_OPTION_A}}" },
                    { id: "sc-b", label: "B", text: "{{SCENARIO_OPTION_B}}" },
                  ],
                  correctAnswer: "sc-a",
                  keyInsight: "{{SCENARIO_KEY_INSIGHT}}",
                },
              },
            },
            {
              id: "m1-l3-s5",
              type: "quiz",
              order: 5,
              isRequired: true,
              content: {
                imageMatching: {
                  id: "quiz-1",
                  instructions: "{{QUIZ_INSTRUCTIONS}}",
                  items: [
                    {
                      id: "quiz-item-1",
                      image: "{{QUIZ_IMAGE_1}}",
                      label: "{{QUIZ_LABEL_1}}",
                      options: ["{{QUIZ_OPTION_1}}", "{{QUIZ_OPTION_2}}", "{{QUIZ_OPTION_3}}"],
                      correctAnswer: "{{QUIZ_OPTION_1}}",
                    },
                  ],
                  interestingFact: {
                    id: "quiz-fact-1",
                    text: "{{QUIZ_INTERESTING_FACT}}",
                    variant: "default",
                  },
                },
              },
            },
          ],
        },
      ],
      completion: {
        slideId: "m1-completion",
        content: {
          moduleNumber: 1,
          badge: "{{COMPLETION_BADGE}}",
          title: "{{COMPLETION_TITLE}}",
          subtitle: "{{COMPLETION_SUBTITLE}}",
          celebrationImage: "{{COMPLETION_IMAGE_URL}}",
          achievements: [
            { id: "achievement-1", text: "{{ACHIEVEMENT_1}}", completed: true },
            { id: "achievement-2", text: "{{ACHIEVEMENT_2}}", completed: true },
          ],
          challenge: {
            title: "{{CHALLENGE_TITLE}}",
            badge: "{{CHALLENGE_BADGE}}",
            description: "{{CHALLENGE_DESCRIPTION}}",
            items: [{ id: "challenge-1", text: "{{CHALLENGE_ITEM_1}}", completed: false }],
          },
        },
      },
    },
    {
      id: "module-2",
      number: 2,
      title: "{{MODULE_2_TITLE}}",
      subtitle: "{{MODULE_2_SUBTITLE}}",
      description: "{{MODULE_2_DESCRIPTION}}",
      thumbnail: "{{MODULE_2_THUMBNAIL_URL}}",
      status: "locked",
      glossary: {
        slideId: "m2-glossary",
        title: "{{MODULE_2_GLOSSARY_TITLE}}",
        subtitle: "{{MODULE_2_GLOSSARY_SUBTITLE}}",
        image: "{{MODULE_2_GLOSSARY_IMAGE}}",
        imageCaption: "{{MODULE_2_GLOSSARY_IMAGE_CAPTION}}",
        helperText: "{{MODULE_2_GLOSSARY_HELPER}}",
        quote: "{{MODULE_2_GLOSSARY_QUOTE}}",
        terms: [],
      },
      lessons: [],
      completion: {
        slideId: "m2-completion",
        content: {
          moduleNumber: 2,
          badge: "{{MODULE_2_COMPLETION_BADGE}}",
          title: "{{MODULE_2_COMPLETION_TITLE}}",
          subtitle: "{{MODULE_2_COMPLETION_SUBTITLE}}",
          celebrationImage: "{{MODULE_2_COMPLETION_IMAGE}}",
          achievements: [],
          challenge: {
            title: "{{MODULE_2_CHALLENGE_TITLE}}",
            badge: "{{MODULE_2_CHALLENGE_BADGE}}",
            description: "{{MODULE_2_CHALLENGE_DESC}}",
            items: [],
          },
        },
      },
    },
    {
      id: "module-3",
      number: 3,
      title: "{{MODULE_3_TITLE}}",
      subtitle: "{{MODULE_3_SUBTITLE}}",
      description: "{{MODULE_3_DESCRIPTION}}",
      thumbnail: "{{MODULE_3_THUMBNAIL_URL}}",
      status: "locked",
      glossary: {
        slideId: "m3-glossary",
        title: "{{MODULE_3_GLOSSARY_TITLE}}",
        subtitle: "{{MODULE_3_GLOSSARY_SUBTITLE}}",
        image: "{{MODULE_3_GLOSSARY_IMAGE}}",
        imageCaption: "{{MODULE_3_GLOSSARY_IMAGE_CAPTION}}",
        helperText: "{{MODULE_3_GLOSSARY_HELPER}}",
        quote: "{{MODULE_3_GLOSSARY_QUOTE}}",
        terms: [],
      },
      lessons: [],
      completion: {
        slideId: "m3-completion",
        content: {
          moduleNumber: 3,
          badge: "{{MODULE_3_COMPLETION_BADGE}}",
          title: "{{MODULE_3_COMPLETION_TITLE}}",
          subtitle: "{{MODULE_3_COMPLETION_SUBTITLE}}",
          celebrationImage: "{{MODULE_3_COMPLETION_IMAGE}}",
          achievements: [],
          challenge: {
            title: "{{MODULE_3_CHALLENGE_TITLE}}",
            badge: "{{MODULE_3_CHALLENGE_BADGE}}",
            description: "{{MODULE_3_CHALLENGE_DESC}}",
            items: [],
          },
        },
      },
    },
  ],
};

export const equusTemplateFlowIds = [
  "intro-cover",
  "intro-welcome",
  "intro-methodology",
  "intro-learning-path",
  "m1-glossary",
  "m1-l1-s1",
  "m1-l2-s1",
  "m1-l2-s2",
  "m1-l2-s3",
  "m1-l2-s4",
  "m1-l3-s1",
  "m1-l3-s2",
  "m1-l3-s3",
  "m1-l3-s4",
  "m1-l3-s5",
  "m1-completion",
] as const;

