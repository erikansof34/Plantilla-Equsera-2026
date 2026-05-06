"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CourseHeader, type CourseHeaderProps } from "../navigation/CourseHeader";
import {
  BottomNavigation,
  type BottomNavItem,
  defaultNavItems,
} from "../navigation/BottomNavigation";

export interface CourseLayoutProps {
  children: ReactNode;
  /** Props del header */
  headerProps?: CourseHeaderProps;
  /** Items de navegación inferior */
  navItems?: BottomNavItem[];
  /** ID del item activo en nav */
  activeNavItem?: string;
  /** Callback de navegación */
  onNavItemClick?: (item: BottomNavItem) => void;
  /** Ocultar header */
  hideHeader?: boolean;
  /** Ocultar navegación inferior */
  hideBottomNav?: boolean;
  /** Fondo personalizado */
  backgroundColor?: string;
  /** Clase adicional para el contenedor */
  className?: string;
  /** Clase adicional para el contenido */
  contentClassName?: string;
}

export function CourseLayout({
  children,
  headerProps,
  navItems = defaultNavItems,
  activeNavItem = "inicio",
  onNavItemClick,
  hideHeader = false,
  hideBottomNav = false,
  backgroundColor,
  className,
  contentClassName,
}: CourseLayoutProps) {
  return (
    <div
      className={cn(
        "course-theme min-h-screen flex flex-col max-w-md mx-auto bg-[#FBF9F4]",
        className
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {/* Header */}
      {!hideHeader && headerProps && <CourseHeader {...headerProps} />}

      {/* Main Content */}
      <main
        className={cn(
          "flex-1 overflow-y-auto",
          !hideBottomNav && "pb-20", // Padding para el nav inferior
          contentClassName
        )}
      >
        {children}
      </main>

      {/* Bottom Navigation */}
      {!hideBottomNav && (
        <BottomNavigation
          items={navItems}
          activeItemId={activeNavItem}
          onItemClick={onNavItemClick}
        />
      )}
    </div>
  );
}

export default CourseLayout;
