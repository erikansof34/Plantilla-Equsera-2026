"use client";

import { useState, useCallback, useMemo } from "react";
import type { CourseStructure } from "@/lib/course/course-structure";
import {
  flattenSlides,
  getSlidePosition,
  getNextSlide,
  getPreviousSlide,
} from "@/lib/course/course-structure";

export interface UseCourseNavigationOptions {
  course: CourseStructure;
  initialSlideId?: string;
  onSlideChange?: (slideId: string) => void;
  onCourseComplete?: () => void;
}

export interface UseCourseNavigationReturn {
  /** ID del slide actual */
  currentSlideId: string;
  /** Ir al siguiente slide */
  goToNext: () => void;
  /** Ir al slide anterior */
  goBack: () => void;
  /** Ir a un slide específico */
  goToSlide: (slideId: string) => void;
  /** Marcar slide como completado */
  markAsCompleted: (slideId: string) => void;
  /** Set de slides completados */
  completedSlides: Set<string>;
  /** Porcentaje de progreso */
  progressPercentage: number;
  /** Posición actual */
  position: {
    current: number;
    total: number;
    lessonCurrent: number;
    lessonTotal: number;
  };
  /** ¿Puede ir atrás? */
  canGoBack: boolean;
  /** ¿Puede ir adelante? */
  canGoNext: boolean;
  /** ¿Es el último slide? */
  isLastSlide: boolean;
  /** ¿Es el primer slide? */
  isFirstSlide: boolean;
  /** Reiniciar el curso */
  reset: () => void;
}

export function useCourseNavigation({
  course,
  initialSlideId,
  onSlideChange,
  onCourseComplete,
}: UseCourseNavigationOptions): UseCourseNavigationReturn {
  // Obtener todos los slides en orden
  const allSlides = useMemo(() => flattenSlides(course), [course]);
  
  // Estado del slide actual
  const [currentSlideId, setCurrentSlideId] = useState<string>(() => {
    if (initialSlideId && allSlides.some(s => s.id === initialSlideId)) {
      return initialSlideId;
    }
    return allSlides[0]?.id || "";
  });

  // Estado de slides completados
  const [completedSlides, setCompletedSlides] = useState<Set<string>>(new Set());

  // Calcular posición actual
  const currentIndex = useMemo(
    () => allSlides.findIndex(s => s.id === currentSlideId),
    [allSlides, currentSlideId]
  );

  const position = useMemo(
    () => getSlidePosition(course, {
      moduleId: allSlides[currentIndex]?.moduleId || null,
      lessonId: allSlides[currentIndex]?.lessonId || null,
      slideId: currentSlideId,
      slideIndex: currentIndex,
    }),
    [course, allSlides, currentIndex, currentSlideId]
  );

  // Calcular progreso
  const progressPercentage = useMemo(
    () => (completedSlides.size / allSlides.length) * 100,
    [completedSlides.size, allSlides.length]
  );

  // Flags de navegación
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === allSlides.length - 1;
  const canGoBack = !isFirstSlide;
  const canGoNext = !isLastSlide;

  // Navegar al siguiente
  const goToNext = useCallback(() => {
    console.log("LLAMADA A goToNext - Slide actual:", currentSlideId);
    const nextId = getNextSlide(course, currentSlideId);
    console.log("Resultado de getNextSlide:", nextId);
    
    if (nextId) {
      console.log("Actualizando estado a:", nextId);
      // Marcar el actual como completado
      setCompletedSlides(prev => {
        const nextSet = new Set(prev);
        nextSet.add(currentSlideId);
        return nextSet;
      });
      setCurrentSlideId(nextId);
      onSlideChange?.(nextId);
    } else {
      console.log("No hay siguiente slide, curso completado.");
      // Último slide - marcar como completado y notificar
      setCompletedSlides(prev => new Set(prev).add(currentSlideId));
      onCourseComplete?.();
    }
  }, [course, currentSlideId, onSlideChange, onCourseComplete]);

  // Navegar al anterior
  const goBack = useCallback(() => {
    const prevId = getPreviousSlide(course, currentSlideId);

    if (prevId) {
      setCurrentSlideId(prevId);
      onSlideChange?.(prevId);
    }
  }, [course, currentSlideId, onSlideChange]);

  // Ir a un slide específico
  const goToSlide = useCallback((slideId: string) => {
    if (allSlides.some(s => s.id === slideId)) {
      setCurrentSlideId(slideId);
      onSlideChange?.(slideId);
    }
  }, [allSlides, onSlideChange]);

  // Marcar slide como completado
  const markAsCompleted = useCallback((slideId: string) => {
    setCompletedSlides(prev => new Set(prev).add(slideId));
  }, []);

  // Reiniciar el curso
  const reset = useCallback(() => {
    setCurrentSlideId(allSlides[0]?.id || "");
    setCompletedSlides(new Set());
  }, [allSlides]);

  return {
    currentSlideId,
    goToNext,
    goBack,
    goToSlide,
    markAsCompleted,
    completedSlides,
    progressPercentage,
    position,
    canGoBack,
    canGoNext,
    isLastSlide,
    isFirstSlide,
    reset,
  };
}
