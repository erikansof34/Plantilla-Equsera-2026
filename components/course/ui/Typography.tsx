"use client";

import { cn } from "@/lib/utils";

export interface CourseTitleProps {
  children: React.ReactNode;
  className?: string;
  uppercase?: boolean;
  variant?: "primary" | "highlight";
}

export interface CourseSubtitleProps {
  children: React.ReactNode;
  className?: string;
  uppercase?: boolean;
  bold?: boolean;
}

export interface CourseParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export interface CourseFeatureTextProps {
  children: React.ReactNode;
  className?: string;
}

export function CourseTitle({
  children,
  className,
  uppercase = false,
  variant = "primary",
}: CourseTitleProps) {
  return (
    <h1
      className={cn(
        variant === "highlight" ? "course-title-highlight" : "course-title-primary",
        uppercase && "uppercase",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function CourseSubtitle({
  children,
  className,
  uppercase = false,
  bold = false,
}: CourseSubtitleProps) {
  return (
    <h2
      className={cn(
        "course-subtitle-text",
        uppercase && "course-caps",
        bold && "font-black",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function CourseParagraph({ children, className }: CourseParagraphProps) {
  return <p className={cn("course-body-text", className)}>{children}</p>;
}

export function CourseFeatureText({ children, className }: CourseFeatureTextProps) {
  return <p className={cn("course-feature-text", className)}>{children}</p>;
}

