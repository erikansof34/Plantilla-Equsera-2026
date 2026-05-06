"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface VideoPlayerProps {
  /** URL del video */
  src: string;
  /** URL del thumbnail/poster */
  thumbnail?: string;
  /** Texto de overlay sobre el video */
  overlayText?: string;
  /** Caption debajo del video */
  caption?: string;
  /** Etiqueta superior */
  label?: string;
  /** Altura del video */
  height?: number;
  /** Modo móvil (ancho limitado, botón grande) */
  mobileMode?: boolean;
  /** Clase adicional */
  className?: string;
}

export function VideoPlayer({
  src,
  thumbnail,
  overlayText,
  caption,
  label,
  height = 220,
  mobileMode = false,
  className,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasValidSrc = Boolean(src && src.trim().length > 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video || !hasValidSrc) return;

    if (isPlaying) {
      video.pause();
      setShowOverlay(true);
    } else {
      video.play();
      setShowOverlay(false);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <div className={cn(mobileMode ? "flex justify-center" : "", className)}>
      {mobileMode ? (
        <div className="w-[280px]">
          <div
            className="relative rounded-[24px] overflow-hidden bg-gray-900 shadow-lg"
            style={{ height: height || 420 }}
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              src={hasValidSrc ? src : undefined}
              poster={thumbnail}
              className="w-full h-full object-cover"
              onEnded={() => {
                setIsPlaying(false);
                setShowOverlay(true);
              }}
              onClick={togglePlay}
            />

            {/* Overlay - Mobile */}
            {showOverlay && (
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                {/* Play Button */}
                <button
                  onClick={togglePlay}
                  disabled={!hasValidSrc}
                  className="flex items-center justify-center h-20 w-20 bg-white rounded-full text-[#1b1c19] hover:bg-gray-100 transition-colors mb-4 shadow-lg"
                >
                  <Play className="h-10 w-10 ml-1 fill-current" />
                </button>

                {/* Overlay Text */}
                {overlayText && (
                  <p className="text-white text-center text-sm font-semibold px-6 max-w-[90%]">
                    {overlayText}
                  </p>
                )}
              </div>
            )}

            {/* Controls (visible when playing) */}
            {!showOverlay && (
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex items-center justify-between">
                  <button
                    onClick={togglePlay}
                    className="p-2 text-white hover:bg-white/20 rounded-full"
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5" />
                    )}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="p-2 text-white hover:bg-white/20 rounded-full"
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5" />
                      ) : (
                        <Volume2 className="h-5 w-5" />
                      )}
                    </button>

                    <button
                      onClick={handleFullscreen}
                      className="p-2 text-white hover:bg-white/20 rounded-full"
                    >
                      <Maximize className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          {label && (
            <p className="text-sm font-semibold text-course-text-primary mb-3 uppercase tracking-wide">
              {label}
            </p>
          )}

          <div
            className="relative rounded-xl overflow-hidden bg-gray-900"
            style={{ height }}
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              src={hasValidSrc ? src : undefined}
              poster={thumbnail}
              className="w-full h-full object-cover"
              onEnded={() => {
                setIsPlaying(false);
                setShowOverlay(true);
              }}
              onClick={togglePlay}
            />

            {/* Overlay */}
            {showOverlay && (
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                {/* Play Button */}
                <button
                  onClick={togglePlay}
                  disabled={!hasValidSrc}
                  className="flex items-center justify-center h-20 w-20 bg-white rounded-full text-[#1b1c19] hover:bg-gray-100 transition-colors mb-4 shadow-lg"
                >
                  <Play className="h-10 w-10 ml-1 fill-current" />
                </button>

                {/* Overlay Text */}
                {overlayText && (
                  <p className="text-white text-center text-sm font-semibold px-6 max-w-[90%]">
                    {overlayText}
                  </p>
                )}
              </div>
            )}

            {/* Controls (visible when playing) */}
            {!showOverlay && (
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex items-center justify-between">
                  <button
                    onClick={togglePlay}
                    className="p-2 text-white hover:bg-white/20 rounded-full"
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5" />
                    )}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="p-2 text-white hover:bg-white/20 rounded-full"
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5" />
                      ) : (
                        <Volume2 className="h-5 w-5" />
                      )}
                    </button>

                    <button
                      onClick={handleFullscreen}
                      className="p-2 text-white hover:bg-white/20 rounded-full"
                    >
                      <Maximize className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {caption && (
            <p className="mt-2 text-xs text-course-text-muted">{caption}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
