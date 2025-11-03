// ServiceHero.tsx (replace contents)
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import webDevelopment from "@/assets/websitePlan.jpg";

interface ServiceHeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  secondaryCTA?: string;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
}

export function ServiceHero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  onPrimaryCTA,
  onSecondaryCTA,
}: ServiceHeroProps) {
  return (
    <section className="relative">
      {/* full-bleed background layer (spans entire viewport width) */}
      <div
        className="absolute inset-0  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${webDevelopment.src})`,
          minHeight: "90vh",
        }}
      />

      {/* Content aligned to your main container widths */}
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
              <button
                onClick={onPrimaryCTA}
                className="bg-[#01A959] hover:bg-[#018f4d] text-white px-8 py-4 rounded-lg text-lg font-medium shadow-md transition-all"
              >
                {primaryCTA}
              </button>

              {secondaryCTA && (
                <button
                  onClick={onSecondaryCTA}
                  className="border-2 border-gray-300 hover:border-[#01A959] hover:text-[#01A959] px-8 py-4 rounded-lg text-lg font-medium transition-all"
                >
                  {secondaryCTA}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
