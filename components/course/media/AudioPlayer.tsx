"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AudioPlayerProps {
  /** URL del archivo de audio */
  src: string;
  /** Duración del audio (formato "mm:ss") */
  duration?: string;
  /** Etiqueta superior */
  label?: string;
  /** Sub-etiqueta */
  sublabel?: string;
  /** Variante visual */
  variant?: "default" | "compact" | "card";
  /** Mostrar ícono de volumen */
  showVolumeIcon?: boolean;
  /** Clase adicional */
  className?: string;
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function AudioPlayer({
  src,
  duration,
  label,
  sublabel,
  variant = "default",
  showVolumeIcon = false,
  className,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasValidSrc = Boolean(src && src.trim().length > 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleLoadedMetadata = () => {
      setAudioDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || !hasValidSrc) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !hasValidSrc || !audio.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * audio.duration;

    audio.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(percentage * 100);
  };

  const displayDuration = duration || (audioDuration ? formatTime(audioDuration) : "0:00");
  const remainingTime = audioDuration ? `-${formatTime(audioDuration - currentTime)}` : displayDuration;

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <audio ref={audioRef} src={hasValidSrc ? src : undefined} preload="metadata" />
        
        <button
          onClick={togglePlay}
            disabled={!hasValidSrc}
          className="flex items-center justify-center h-10 w-10 bg-course-green-dark rounded-full text-white hover:bg-course-green-dark/90 transition-colors"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4 ml-0.5" />
          )}
        </button>

        <div className="flex-1">
          <div
            className="h-1 bg-gray-200 rounded-full cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-course-green-dark rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <span className="text-xs text-course-text-muted min-w-[40px] text-right">
          {displayDuration}
        </span>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className={cn("bg-white rounded-xl p-4 border border-gray-100", className)}>
        <audio ref={audioRef} src={hasValidSrc ? src : undefined} preload="metadata" />

        {label && (
          <div className="flex items-center gap-2 mb-3">
            <Volume2 className="h-4 w-4 text-course-text-muted" />
            <span className="text-xs text-course-text-muted uppercase tracking-wide">
              {label}
            </span>
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            disabled={!hasValidSrc}
            className="flex items-center justify-center h-12 w-12 bg-course-green-dark rounded-full text-white hover:bg-course-green-dark/90 transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 ml-0.5" />
            )}
          </button>

          <div className="flex-1">
            {sublabel && (
              <p className="text-xs text-course-text-muted mb-2 uppercase tracking-wide">
                {sublabel}
              </p>
            )}
            <div
              className="h-1.5 bg-gray-200 rounded-full cursor-pointer"
              onClick={handleProgressClick}
            >
              <div
                className="h-full bg-course-gold rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-course-text-muted">
                {formatTime(currentTime)}
              </span>
              <span className="text-xs text-course-text-muted">
                {remainingTime}
              </span>
            </div>
          </div>

          {showVolumeIcon && (
            <button className="p-2 text-course-text-muted hover:text-course-text-primary">
              <Volume2 className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn("bg-course-cream rounded-xl p-4", className)}>
      <audio ref={audioRef} src={hasValidSrc ? src : undefined} preload="metadata" />

      {label && (
        <p className="text-xs text-course-text-muted mb-2 uppercase tracking-wide">
          {label}
        </p>
      )}

      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          disabled={!hasValidSrc}
          className="flex items-center justify-center h-12 w-12 bg-course-green-dark rounded-full text-white hover:bg-course-green-dark/90 transition-colors"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5 ml-0.5" />
          )}
        </button>

        <div className="flex-1">
          <div
            className="h-1.5 bg-gray-300 rounded-full cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-course-gold rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-course-text-muted">
              {formatTime(currentTime)}
            </span>
            <span className="text-xs text-course-text-muted">
              {displayDuration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
