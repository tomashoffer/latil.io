"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Logo {
  name: string;
  image?: string; // Path to logo image
}

interface LogoCarouselProps {
  logos: Logo[];
  speed?: number; // Animation duration in seconds
}

const LogoCarousel = ({ logos, speed = 30 }: LogoCarouselProps) => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Duplicamos los logos para el efecto infinito
  const duplicatedLogos = [...logos, ...logos];

  const handleImageError = (idx: number) => {
    setImageErrors((prev) => new Set(prev).add(idx));
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex animate-scroll"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedLogos.map((logo, idx) => {
          const hasImage = logo.image && !imageErrors.has(idx);
          return (
            <div
              key={idx}
              className="flex items-center justify-center h-16 px-8 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              {hasImage ? (
                <Image
                  src={logo.image!}
                  alt={logo.name}
                  width={120}
                  height={48}
                  className="object-contain max-h-12"
                  onError={() => handleImageError(idx)}
                  unoptimized
                />
              ) : (
                <span className="text-lg font-semibold text-gray-700 whitespace-nowrap">
                  {logo.name}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoCarousel;

