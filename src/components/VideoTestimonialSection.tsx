
"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Quote, Play } from "lucide-react";

const testimonials = [
  {
    id: "abraham",
    name: "Abraham Shankar",
    role: "Founder & CEO",
    company: "Reholife",
    quote:
      "",
    video: "https://www.youtube.com/embed/ev3j1n7jXEg",
  },
  {
    id: "sanjith",
    name: "Sanjith",
    role: "Founder & CEO",
    company: "Velz Flow",
    quote: "",
    video: "https://www.youtube.com/embed/0WioC-LPgzs",
  },
];

export default function VideoTestimonialsSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("video_testimonials");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="video_testimonials"
      className="relative overflow-hidden bg-[#080D0A] px-5 py-20 sm:px-8 lg:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#B7F36B]/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#B7F36B]/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-5xl">

        {/* Section Heading */}
        <div
          className={`mx-auto mb-12 max-w-2xl text-center transition-all duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B7F36B]/20 bg-[#B7F36B]/[0.07] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#B7F36B] animate-pulse" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B7F36B]">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Real people.
            <span className="text-[#B7F36B]"> Real results.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
            Don't just take our word for it. Hear what our clients
            have to say about working with WebOnRock.
          </p>
        </div>

        {/* Portrait Video Players */}
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 sm:gap-7 lg:gap-10">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/[0.09] bg-[#111813] p-3 shadow-xl transition-all duration-700 hover:-translate-y-2 hover:border-[#B7F36B]/40 hover:shadow-[0_20px_60px_rgba(183,243,107,0.08)] ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* 9:16 Video Player */}
              <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-black">
                <iframe
                  src={`${item.video}?rel=0`}
                  title={`${item.name} - Client Testimonial`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Client Information */}
              <div className="px-3 pb-3 pt-5">
                {item.quote && (
                  <div className="mb-5">
                    <Quote
                      size={21}
                      className="mb-3 text-[#B7F36B]"
                    />

                    <p className="text-sm leading-7 text-white/70">
                      "{item.quote}"
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
                  <div>
                    <h3 className="font-semibold text-white">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-xs text-white/45">
                      {item.role} · {item.company}
                    </p>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B7F36B]/20 bg-[#B7F36B]/10 text-[#B7F36B] transition-transform duration-300 group-hover:scale-110">
                    <Play size={14} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-14 text-center transition-all delay-300 duration-700 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <p className="mb-5 text-sm text-white/50">
            Want results like these for your business?
          </p>

          <a
            href="#start-project"
            className="group inline-flex items-center gap-3 rounded-full bg-[#B7F36B] px-7 py-3.5 text-sm font-bold text-[#101810] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c9ff80] hover:shadow-[0_10px_35px_rgba(183,243,107,0.2)]"
          >
            Let's Work Together

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}
