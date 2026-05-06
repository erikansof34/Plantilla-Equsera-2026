import type { CourseStructure } from "../../course-structure";
import { introductionCover } from "./cover";
import { introductionWelcome } from "./welcome";
import { introductionMethodology } from "./methodology";
import { introductionLearningPath } from "./learning-path";

export const courseIntroduction: CourseStructure["introduction"] = {
  cover: introductionCover,
  welcome: introductionWelcome,
  methodology: introductionMethodology,
  learningPath: introductionLearningPath,
};

