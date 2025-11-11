// ServiceHero.tsx (replace contents)
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import webDevelopment from "@/assets/websitePlan.jpg";

interface ServiceHeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA?: string;
  onPrimaryCTA?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  onSecondaryCTA?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  bgImage?: string; // optional override for the background image
}

export default function ServiceHero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  onPrimaryCTA,
  onSecondaryCTA,
  bgImage,
}: ServiceHeroProps) {
  const backgroundUrl = bgImage ?? webDevelopment.src;

  return (
    <section className="relative" aria-label="Service hero">
      {/* full-bleed background layer (spans entire viewport width) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${backgroundUrl})`,
          minHeight: "90vh",
        }}
        aria-hidden="true"
      />

      {/* Content aligned to main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[60vh] md:min-h-[75vh] flex items-center justify-center text-center py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {headline}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                type="button"
                onClick={onPrimaryCTA}
                className="bg-[#01A959] hover:bg-[#018f4d] text-white px-8 py-4 rounded-lg text-lg font-medium shadow-md transition-all"
                aria-label={primaryCTA}
              >
                {primaryCTA}
              </Button>

              {secondaryCTA && (
                <Button
                  variant="outline"
                  type="button"
                  onClick={onSecondaryCTA}
                  className="px-8 py-4 rounded-lg text-lg font-medium transition-all"
                  aria-label={secondaryCTA}
                >
                  {secondaryCTA}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
