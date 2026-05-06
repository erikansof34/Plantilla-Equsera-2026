"use client";

import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export interface WelcomeInfoCardProps {
  title: string;
  description: string;
  highlightText?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function WelcomeInfoCard({
  title,
  description,
  highlightText,
  icon,
  className,
}: WelcomeInfoCardProps) {
  return (
    <div
      className={cn(
        "rounded-[32px] border border-[#D8CFA7] bg-[#F5F3EE] p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.16)]",
        className
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7B620A] text-white">
          {icon ?? <Zap className="h-5 w-5" />}
        </div>
        <h3 className="text-sm font-black uppercase tracking-[0.24em] text-[#7B620A]">
          {title}
        </h3>
      </div>

      <div className="mb-5 h-px w-full bg-[#D8CFA7]" />

      <p className="text-base leading-8 text-[#202623]">{description}</p>

      {highlightText && (
        <p className="mt-4 text-base leading-8 font-semibold text-[#4E6A57]">
          {highlightText}
        </p>
      )}
    </div>
  );
}

export default WelcomeInfoCard;
