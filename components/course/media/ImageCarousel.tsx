"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageCarouselItem } from "@/lib/course/types";

export interface ImageCarouselProps {
  /** Items del carrusel */
  items: ImageCarouselItem[];
  /** Altura de las imágenes */
  imageHeight?: number;
  /** Mostrar indicadores de página */
  showIndicators?: boolean;
  /** Clase adicional */
  className?: string;
}

export function ImageCarousel({
  items,
  imageHeight = 180,
  showIndicators = true,
  className,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calcular items visibles (2 por página)
  const itemsPerPage = 2;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  const visibleItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className={cn("", className)}>
      {/* Images Grid */}
      <div className="grid grid-cols-2 gap-3">
        {visibleItems.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div
              className="relative rounded-xl overflow-hidden bg-gray-100"
              style={{ height: imageHeight }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <p className="mt-2 text-sm text-center text-course-text-primary font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Page Indicators */}
      {showIndicators && totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
              className={cn(
                "h-2 rounded-full transition-all",
                currentPage === index
                  ? "w-6 bg-course-green-dark"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Ir a página ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;
