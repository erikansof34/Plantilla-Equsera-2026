"use client";

import { useState, useMemo } from "react";
import {
  Search,
  AlertTriangle,
  Shield,
  Eye,
  MessageSquare,
  CircleX,
  PawPrint,
  EyeOff,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GlossaryTermCard, type GlossaryTermCardAccent } from "../content/GlossaryTermCard";
import type { GlossaryTerm, ZoneColor } from "@/lib/course/types";

export interface GlossarySearchProps {
  /** Lista de términos */
  terms: GlossaryTerm[];
  /** Placeholder del buscador */
  placeholder?: string;
  /** Clase adicional */
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  warning: AlertTriangle,
  eye: Eye,
  message: MessageSquare,
  "x-circle": CircleX,
  paw: PawPrint,
  "eye-off": EyeOff,
};

function termAccent(color?: ZoneColor): GlossaryTermCardAccent {
  if (!color) return "default";
  return color;
}

export function GlossarySearch({
  terms,
  placeholder = "Buscar términos...",
  className,
}: GlossarySearchProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTerms = useMemo(() => {
    if (!searchQuery.trim()) return terms;
    const query = searchQuery.toLowerCase();
    return terms.filter(
      (term) =>
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        term.category.toLowerCase().includes(query)
    );
  }, [terms, searchQuery]);

  return (
    <div className={cn("", className)}>
      {/* Search Header */}
      <div className="mb-4">
        <p className="course-label text-course-gold mb-2">Búsqueda rápida</p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-course-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3 bg-[#EEEAE4] border border-[#E2DDD6] rounded-[14px] text-sm text-course-text-primary placeholder:text-course-text-muted focus:outline-none focus:ring-2 focus:ring-course-gold/40"
          />
        </div>
      </div>

      {/* Terms List — temporalmente oculto */}
      {/* <div className="space-y-4">
        {filteredTerms.map((term) => {
          const Icon = iconMap[term.icon] || Shield;
          return (
            <GlossaryTermCard
              key={term.id}
              category={term.category}
              term={term.term}
              definition={term.definition}
              accent={termAccent(term.color)}
              icon={<Icon className="h-[18px] w-[18px] text-inherit" strokeWidth={2} aria-hidden />}
            />
          );
        })}
      </div>
      {filteredTerms.length === 0 && (
        <div className="text-center py-8">
          <p className="text-sm text-course-text-muted">No se encontraron términos para tu búsqueda.</p>
        </div>
      )} */}
    </div>
  );
}

export default GlossarySearch;
