"use client";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import eventplanner from "@/assets/EventPlanner.png";
import matrimony from "@/assets/Matrimony.png";
import clinic from "@/assets/Clinic.png";
import makeup from "@/assets/MakeupArtist.png";

export default function GalleryCarousel() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div id="custom-controls-gallery" className="relative w-2/3 h-1/2 mt-10 mb-16  " data-carousel="slide">

      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

        {/* Item 1 */}
        <div className="hidden duration-700 rounded-lg   ease-in-out" data-carousel-item>
          <img
            src={eventplanner.src}
            className="absolute block w-full h-full object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="eventPlanner"
          />
        </div>

        {/* Item 2 */}
        <div className="hidden duration-700 rounded-lg shadow-lg shadow-yellow-300/50 ease-in-out" data-carousel-item="active">
          <img
            src={matrimony.src}
            className="absolute block w-full h-full object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="matrimony"
          />
        </div>

        {/* Item 3 */}
        <div className="hidden duration-700 rounded-lg shadow-lg shadow-yellow-300/50 ease-in-out" data-carousel-item>
          <img
            src={clinic.src}
            className="absolute block w-full h-full object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="clinic"
          />
        </div>

        {/* Item 4 */}
        <div className="hidden duration-700 rounded-lg shadow-lg shadow-yellow-300/50 ease-in-out" data-carousel-item>
          <img
            src={makeup.src}
            className="absolute block w-full h-full object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="makeup"
          />
        </div>

      </div>

      {/* Controls */}
      <div className="flex justify-center items-center pt-4">
        <button
          type="button"
          className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="text-gray-400 hover:text-gray-900 group-focus:text-gray-900">
            <svg className="rtl:rotate-180 w-5 h-5" viewBox="0 0 14 10" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="text-gray-400 hover:text-gray-900 group-focus:text-gray-900">
            <svg className="rtl:rotate-180 w-5 h-5" viewBox="0 0 14 10" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

    </div>
  );
}
