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
  /** Acciones personalizadas para el footer (reemplaza BottomNavigation) */
  footerActions?: ReactNode;
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
  footerActions,
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
          (!hideBottomNav || footerActions) && "pb-24", // Padding para el nav inferior o botones
          contentClassName
        )}
      >
        {children}
      </main>

      {/* Bottom Navigation or Footer Actions */}
      {footerActions ? (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#FBF9F4]/90 backdrop-blur-md border-t border-[#E7E3DB] max-w-md mx-auto rounded-t-3xl shadow-[0px_-12px_20px_rgba(27,28,25,0.06)] px-6 py-4 flex items-center justify-between gap-4">
          {footerActions}
        </div>
      ) : (
        !hideBottomNav && (
          <BottomNavigation
            items={navItems}
            activeItemId={activeNavItem}
            onItemClick={onNavItemClick}
          />
        )
      )}
    </div>
  );
}

export default CourseLayout;
