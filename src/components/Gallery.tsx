"use client";
import { useEffect, useState } from "react";
import eventplanner from "@/assets/EventPlanner.png";
import matrimony from "@/assets/Matrimony.png";
import clinic from "@/assets/Clinic.png";
import makeup from "@/assets/MakeupArtist.png";

const slides = [
  { src: (eventplanner as any).src ?? eventplanner, alt: "Event Planner" },
  { src: (matrimony as any).src ?? matrimony, alt: "Matrimony" },
  { src: (clinic as any).src ?? clinic, alt: "Clinic" },
  { src: (makeup as any).src ?? makeup, alt: "Makeup Artist" },
];

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // keyboard navigation: ArrowLeft / ArrowRight
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="bg-gradient-to-tr from-green-200 via-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">Recent Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          A quick look at a few projects we recently designed — focused on clarity,
          friendly navigation, and solid functionality.
        </p>

        <div className="relative">
          {/* slide area */}
          <div className="relative h-56 md:h-96 overflow-hidden rounded-lg ">
            {slides.map((s, i) => (
              <img
                key={i}
                src={s.src}
                alt={s.alt}
                className={`absolute inset-0 m-auto w-full h-full object-contain transition-opacity duration-500 ease-in-out shadow-lg
                  ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                draggable={false}
                onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
              />
            ))}
          </div>

          {/* controls */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="inline-flex items-center justify-center rounded-full px-3 py-2 bg-white/40 shadow-sm border  focus:outline-none"
            >
              ‹ 
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2 h-2 rounded-full ${i === index ? "bg-blue-600" : "bg-gray-300"}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next slide"
              className="inline-flex items-center justify-center px-3 py-2 bg-white/40 shadow-sm border  focus:outline-none rounded-full"
            >
               ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
