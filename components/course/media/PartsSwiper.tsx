"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageCarouselItem } from "@/lib/course/types";

export interface PartsSwiperProps {
  /** Tarjetas visuales (imagen + etiqueta). */
  items: ImageCarouselItem[];
  /** Cantidad de tarjetas visibles por página. */
  itemsPerPage?: number;
  /** Intervalo de autoplay en ms. */
  autoplayMs?: number;
  /** Clase adicional del wrapper */
  className?: string;
}

export function PartsSwiper({
  items,
  itemsPerPage = 2,
  autoplayMs = 3500,
  className,
}: PartsSwiperProps) {
  const pages = useMemo(() => {
    const chunks: ImageCarouselItem[][] = [];
    for (let idx = 0; idx < items.length; idx += itemsPerPage) {
      chunks.push(items.slice(idx, idx + itemsPerPage));
    }
    return chunks;
  }, [items, itemsPerPage]);

  const totalPages = Math.max(1, pages.length);
  const [page, setPage] = useState(0);
  const currentPage = Math.min(page, totalPages - 1);

  useEffect(() => {
    if (totalPages <= 1) return;
    const timer = window.setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, autoplayMs);
    return () => window.clearInterval(timer);
  }, [autoplayMs, totalPages]);

  return (
    <section className={cn("space-y-4", className)} aria-label="Partes del caballo">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {pages.map((pageItems, pageIdx) => (
            <div key={`page-${pageIdx}`} className="w-full shrink-0">
              <div className="grid grid-cols-2 gap-4">
                {pageItems.map((item) => (
                  <article
                    key={item.id}
                    className="overflow-hidden rounded-[16px] border border-[#E7E3DB] bg-[#F2F2F2]"
                  >
                    <div className="relative h-[160px] w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 220px"
                      />
                    </div>
                    <p className="px-3 py-4 text-center text-[20px] font-black leading-none text-[#062012]">
                      {item.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setPage(idx)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                currentPage === idx ? "w-8 bg-course-green-dark" : "w-2.5 bg-gray-300"
              )}
              aria-label={`Ver página ${idx + 1} del carrusel`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default PartsSwiper;
