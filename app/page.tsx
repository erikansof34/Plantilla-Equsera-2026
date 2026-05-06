"use client";

import { SlideRenderer } from "@/components/course/SlideRenderer";
import { useCourseNavigation } from "@/hooks/use-course-navigation";
import { structuredCourse } from "@/lib/course/content/course";

export default function DemoPage() {
  const { currentSlideId, goToNext, goBack, goToSlide, reset } = useCourseNavigation({
    course: structuredCourse,
    initialSlideId: "m1-l2-s1",
    onCourseComplete: () => reset(),
  });

  return (
    <SlideRenderer
      course={structuredCourse}
      currentSlideId={currentSlideId}
      onNext={goToNext}
      onBack={goBack}
      onGoToSlide={goToSlide}
    />
  );
}
