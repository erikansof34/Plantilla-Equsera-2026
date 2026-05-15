"use client";

// import Image from "next/image";
import { Check, Star, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { BackButton } from "../ui/BackButton";
import { ContinueButton } from "../ui/ContinueButton";
import { Checklist } from "../interactive/Checklist";
import { LearningObjectiveItem } from "../content/LearningObjectiveItem";
import { CourseTitle } from "../ui/Typography";
import type { CompletionContent, ChecklistItem, Achievement } from "@/lib/course/types";
import { defaultNavItems, BottomNavigation, progressNavItems } from "../navigation/BottomNavigation";

export interface CompletionScreenProps {
  /** Contenido de la pantalla de completación */
  content: CompletionContent;
  /** Título para el navbar */
  navbarTitle?: string;
  /** Callback al continuar */
  onContinue?: () => void;
  /** Callback al cerrar */
  onClose?: () => void;
  /** Callback cuando cambia el checklist */
  onChecklistChange?: (items: ChecklistItem[]) => void;
  /** Clase adicional */
  className?: string;
}

export function CompletionScreen({
  content,
  navbarTitle,
  onContinue,
  onClose,
  onChecklistChange,
  className,
}: CompletionScreenProps) {
  return (
    <div className={cn("course-theme min-h-screen flex flex-col max-w-md mx-auto bg-[#FBF9F4]", className)}>
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-[#E7E3DB] bg-[#FBF9F4]/90 backdrop-blur-md">
        <button
          onClick={onClose}
          className="p-2 -ml-2 text-course-text-primary hover:opacity-70"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <span className="text-sm font-semibold text-course-text-primary uppercase">
          {navbarTitle || `Módulo ${content.moduleNumber} completado`}
        </span>
        <button className="p-2 -mr-2 text-course-text-primary hover:opacity-70">
          <Check className="h-5 w-5" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 pb-24">
        {/* Celebration Image */}
        <div className="flex justify-center mb-6">
          <div className="relative h-40 w-40 flex items-center justify-center">
            <Trophy className="h-24 w-24 text-course-gold" />
          </div>
          {/*
          <div className="relative h-40 w-40">
            <Image
              src={content.celebrationImage}
              alt="Felicitaciones"
              fill
              className="object-contain"
            />
          </div>
          */}
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-base font-bold text-course-gold uppercase tracking-[1.2px]">
            {content.badge}
          </h2>
          <CourseTitle className="mt-1 text-[#051B0F]">
            {content.title}
          </CourseTitle>
          <p className="text-base text-course-text-secondary mt-2 leading-[1.55]">
            {content.subtitle}
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-course-gold uppercase tracking-[1.3px]">
              Logros del Módulo
            </h3>
            <Star className="h-5 w-5 text-course-gold" />
          </div>
          
          <div className="space-y-3">
            {content.achievements.map((achievement) => (
              <LearningObjectiveItem
                key={achievement.id}
                text={achievement.text}
                completed={achievement.completed}
              />
            ))}
          </div>
        </div>

        {/* Challenge Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Check className="h-5 w-5 text-course-green-dark" />
            <h3 className="text-xs font-bold text-course-text-primary uppercase tracking-[1.2px]">
              {content.challenge.title}
            </h3>
          </div>

          <div className="bg-course-cream rounded-[24px] p-5 border border-[#E7E3DB]">
            <span className="text-xs font-bold uppercase tracking-[1.3px] text-course-gold">
              {content.challenge.badge}
            </span>
            <p className="text-[15px] text-course-text-primary mt-2 mb-4 leading-[1.6]">
              {content.challenge.description}
            </p>

            <Checklist
              items={content.challenge.items}
              variant="zone"
              onChange={onChecklistChange}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="pb-2">
          <div className="grid grid-cols-2 gap-3">
            <BackButton onClick={onClose} fullWidth />
            <ContinueButton onClick={onContinue} fullWidth />
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation
        items={progressNavItems}
        activeItemId="progreso"
      />
    </div>
  );
}

export default CompletionScreen;
