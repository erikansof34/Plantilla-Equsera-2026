import type { CourseStructure } from "../../course-structure";
import { module1 } from "./module-1";
import { module2 } from "./module-2";
import { module3 } from "./module-3";

export const courseModules: CourseStructure["modules"] = [module1, module2, module3];

