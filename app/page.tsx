"use client";

import { useEffect } from "react";
import { SlideRenderer } from "@/components/course/SlideRenderer";
import { useCourseNavigation } from "@/hooks/use-course-navigation";
import { structuredCourse } from "@/lib/course/content/course";

export default function DemoPage() {
  useEffect(() => {
    console.log("DemoPage client effect mounted");
  }, []);

  const { currentSlideId, goToNext, goBack, goToSlide, reset, completedSlides } = useCourseNavigation({
    course: structuredCourse,
    initialSlideId: "intro-cover",
    onCourseComplete: () => reset(),
  });

  return (
    <SlideRenderer
      course={structuredCourse}
      currentSlideId={currentSlideId}
      onNext={goToNext}
      onBack={goBack}
      onGoToSlide={goToSlide}
      completedSlides={completedSlides}
    />
  );
}
