"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ChecklistItem as ChecklistItemType, ZoneColor } from "@/lib/course/types";

export interface ChecklistProps {
  /** Items del checklist */
  items: ChecklistItemType[];
  /** Callback cuando cambia un item */
  onChange?: (items: ChecklistItemType[]) => void;
  /** Variante visual */
  variant?: "default" | "zone";
  /** Clase adicional */
  className?: string;
}

const zoneColorClasses = {
  green: "border-l-zone-green",
  yellow: "border-l-zone-yellow",
  red: "border-l-zone-red",
};

export function Checklist({
  items: initialItems,
  onChange,
  variant = "default",
  className,
}: ChecklistProps) {
  const [items, setItems] = useState(initialItems);

  const handleToggle = (itemId: string) => {
    const newItems = items.map((item) =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    );
    setItems(newItems);
    onChange?.(newItems);
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => (
        <label
          key={item.id}
          className={cn(
            "flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all",
            variant === "default"
              ? "bg-white border border-gray-100 hover:bg-gray-50"
              : cn(
                  "bg-white border-l-4",
                  item.color
                    ? zoneColorClasses[item.color]
                    : "border-l-gray-300"
                ),
            item.completed && "bg-course-cream"
          )}
        >
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => handleToggle(item.id)}
            className="sr-only"
          />
          <div
            className={cn(
              "flex-shrink-0 h-5 w-5 rounded border-2 flex items-center justify-center transition-all",
              item.completed
                ? "bg-course-green-dark border-course-green-dark"
                : "border-gray-300 bg-white"
            )}
          >
            {item.completed && (
              <svg
                className="h-3 w-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <span className="text-sm text-course-text-primary">{item.text}</span>
        </label>
      ))}
    </div>
  );
}

export default Checklist;
