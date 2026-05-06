"use client";

import { CaseStudyScreen, type CaseStudyScreenProps } from "../../screens/CaseStudyScreen";

/**
 * Entrada explícita para casos de estudio del Módulo 1.
 * Permite organizar por módulo sin duplicar la implementación base.
 */
export function Module1CaseStudyScreen(props: CaseStudyScreenProps) {
  return <CaseStudyScreen {...props} />;
}

export default Module1CaseStudyScreen;
