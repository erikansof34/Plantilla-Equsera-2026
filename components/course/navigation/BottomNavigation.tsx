"use client";

import {
  Home,
  BarChart3,
  Grid3X3,
  HelpCircle,
  BookOpen,
  Users,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavigationIcon } from "@/lib/course/types";

export interface BottomNavItem {
  id: string;
  label: string;
  icon: NavigationIcon;
  href?: string;
  isActive?: boolean;
}

export interface BottomNavigationProps {
  /** Items de navegación */
  items: BottomNavItem[];
  /** ID del item activo */
  activeItemId?: string;
  /** Callback al seleccionar item */
  onItemClick?: (item: BottomNavItem) => void;
  /** Clase adicional */
  className?: string;
}

const iconMap: Record<NavigationIcon, React.ComponentType<{ className?: string }>> = {
  home: Home,
  progress: BarChart3,
  resources: Grid3X3,
  help: HelpCircle,
  courses: BookOpen,
  community: Users,
  profile: User,
};

export function BottomNavigation({
  items,
  activeItemId,
  onItemClick,
  className,
}: BottomNavigationProps) {
  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 bg-[#FBF9F4]/90 backdrop-blur-md border-t border-[#E7E3DB]",
        "max-w-md mx-auto rounded-t-3xl shadow-[0px_-12px_20px_rgba(27,28,25,0.06)]",
        className
      )}
    >
      <div className="flex items-center justify-between py-3 px-4">
        {items.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = item.isActive || item.id === activeItemId;

          return (
            <button
              key={item.id}
              onClick={() => onItemClick?.(item)}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all min-w-[72px]",
                isActive
                  ? "bg-course-green-dark text-white"
                  : "text-course-text-secondary hover:text-course-text-primary"
              )}
            >
              <Icon className="h-[18px] w-[18px]" />
              <span className="text-[9px] leading-none font-bold uppercase tracking-[0.35px] whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Safe area padding for iOS */}
      <div className="h-safe-area-inset-bottom" />
    </nav>
  );
}

// Configuraciones predefinidas de navegación
export const defaultNavItems: BottomNavItem[] = [
  { id: "inicio", label: "Inicio", icon: "home" },
  { id: "progreso", label: "Mi Progreso", icon: "progress" },
  { id: "recursos", label: "Recursos", icon: "resources" },
  { id: "ayuda", label: "Ayuda", icon: "help" },
];

export const courseNavItems: BottomNavItem[] = [
  { id: "inicio", label: "Inicio", icon: "home" },
  { id: "cursos", label: "Cursos", icon: "courses" },
  { id: "comunidad", label: "Comunidad", icon: "community" },
  { id: "perfil", label: "Perfil", icon: "profile" },
];

export const progressNavItems: BottomNavItem[] = [
  { id: "inicio", label: "Inicio", icon: "home" },
  { id: "progreso", label: "Progreso", icon: "progress" },
  { id: "ayuda", label: "Ayuda", icon: "help" },
];

export default BottomNavigation;
