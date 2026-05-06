"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ImageMatchingItem } from "@/lib/course/types";

export interface ImageMatchingProps {
  /** Instrucciones del ejercicio */
  instructions: string;
  /** Items para relacionar */
  items: ImageMatchingItem[];
  /** Callback cuando se completa */
  onComplete?: (answers: Record<string, string>) => void;
  /** Clase adicional */
  className?: string;
}

export function ImageMatching({
  instructions,
  items,
  onComplete,
  className,
}: ImageMatchingProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleSelect = (itemId: string, value: string) => {
    const newAnswers = { ...answers, [itemId]: value };
    setAnswers(newAnswers);
    setOpenDropdown(null);

    // Check if all items have answers
    if (Object.keys(newAnswers).length === items.length) {
      onComplete?.(newAnswers);
    }
  };

  return (
    <div className={cn("", className)}>
      {/* Instructions */}
      <div className="bg-course-cream rounded-[24px] p-5 mb-6 border border-[#E7E3DB]">
        <p className="text-[15px] text-course-text-primary leading-[1.65]">
          {instructions}
        </p>
      </div>

      {/* Items */}
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id}>
            {/* Image */}
            <div className="relative h-52 rounded-[22px] overflow-hidden mb-3">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            {/* Label */}
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-course-text-muted mb-2">
              {item.label}
            </p>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === item.id ? null : item.id)
                }
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3 rounded-[14px] border transition-all",
                  answers[item.id]
                    ? "border-course-green-dark bg-course-green-dark/5"
                    : "border-gray-200 bg-white hover:border-gray-300"
                )}
              >
                <span
                  className={cn(
                    "text-[15px]",
                    answers[item.id]
                      ? "text-course-text-primary"
                      : "text-course-text-muted"
                  )}
                >
                  {answers[item.id] || "Seleccionar zona..."}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-course-text-muted transition-transform",
                    openDropdown === item.id && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown Options */}
              {openDropdown === item.id && (
                <div className="absolute z-10 w-full mt-1 bg-white rounded-[14px] border border-gray-200 shadow-lg overflow-hidden">
                  {item.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(item.id, option)}
                      className={cn(
                        "w-full px-4 py-3 text-left text-[15px] hover:bg-gray-50 transition-colors",
                        answers[item.id] === option &&
                          "bg-course-green-dark/5 text-course-green-dark font-medium"
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageMatching;
