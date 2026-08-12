"use client";

import React from "react";
import Image from "next/image";
import founder from "@/assets/founder.jpg";

const WA_URL =
  "https://wa.me/+919566515735?text=Hi%20Titus%2C%20I%20came%20across%20your%20profile%20and%20would%20like%20to%20learn%20more%20about%20your%20services.%20Could%20you%20please%20share%20more%20details%3F";

// ─── Icons ────────────────────────────────────────────────────────────────────
const WaIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.855L.057 23.928a.5.5 0 00.611.612l6.198-1.457A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.88 9.88 0 01-5.032-1.378l-.36-.214-3.733.878.899-3.638-.235-.374A9.837 9.837 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118c5.468 0 9.882 4.415 9.882 9.882 0 5.468-4.414 9.882-9.882 9.882z" />
  </svg>
);

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M9 1.5L11.09 6.26L16.5 6.93L12.75 10.57L13.68 16L9 13.27L4.32 16L5.25 10.57L1.5 6.93L6.91 6.26L9 1.5Z"
      fill="#F97316"
      stroke="#F97316"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Component ────────────────────────────────────────────────────────────────
export default function Founder() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28 border-t border-[#ede9dc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT — Photo ── */}
          <div className="relative">

            {/* Decorative green shape */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#0B1F3A] rounded-tr-[40px] opacity-[0.06] pointer-events-none z-0" />

            {/* Gold accent bar */}
            <div className="absolute top-8 -left-1.5 w-1 h-20 bg-[#F97316] rounded-full z-10" />

            {/* Photo frame */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-[#e8e4d8] shadow-[0_24px_64px_rgba(15,81,50,0.10)] aspect-[4/5] bg-[#f0f0ec]">
              <Image
                src={founder}
                alt="Titus Kirubakaran, Founder of WebonRock"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Fallback initials */}
              <div className="absolute inset-0 flex items-center justify-center text-[72px] font-extrabold text-[#0B1F3A] opacity-10 select-none">
                TK
              </div>
            </div>

            {/* Floating credential badge */}
            <div className="absolute bottom-6 sm:bottom-8 -right-3 sm:-right-5 z-20 bg-white border border-[#e8e4d8] rounded-xl px-3.5 sm:px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.10)] max-w-[185px]">
              <div className="flex gap-2.5 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#f0faf5] flex items-center justify-center flex-shrink-0">
                  <StarIcon />
                </div>
                <div>
                  <p className="text-[13px] font-extrabold text-[#0F1A0E] leading-tight mb-0.5">
                    10+ Projects
                  </p>
                  <p className="text-[11px] text-gray-400 leading-snug">
                    Delivered across India and USA
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT — Content ── */}
          <div>

            {/* Section pill */}
            <div className="inline-flex items-center gap-2 bg-[#f9f8f5] border border-[#e8e4d8] rounded-full px-3.5 py-1.5 text-xs font-semibold text-gray-500 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] inline-block" />
              The person behind the work
            </div>

            {/* Name + title */}
            <h2
              className="font-extrabold text-[#0F1A0E] leading-none tracking-tight mb-1.5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Titus
            </h2>
            <p className="text-xs sm:text-sm font-bold text-[#0B1F3A] tracking-[0.06em] uppercase mb-7">
              Founder — WebonRock
            </p>

            {/* Story paragraphs */}
            <div className="space-y-4 mb-8">
              {[
                "I'm a Digital growth specialist from India with 3+ years building conversion-focused websites, running Meta ads, Google Ads, and delivering SEO results for real businesses — not just mockups.",
                "I built WebonRock to serve Gulf businesses the way I'd want to be served — with direct communication, honest timelines, and measurable outcomes. No middlemen, no account managers you'll never meet. Just the person doing the work, answerable to you.",
                "The Gulf market deserves better than generic agencies. I'm here to close that gap.",
              ].map((para, i) => (
                <p key={i} className="text-sm sm:text-base text-gray-500 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Credential strip */}
            <div className="bg-[#f9f8f5] border border-[#e8e4d8] rounded-xl px-4 sm:px-5 py-4 mb-8 grid grid-cols-3 divide-x divide-[#e8e4d8]">
              {[
                { n: "10+", l: "Projects delivered" },
                { n: "1",   l: "App on Play Store"  },
                { n: "3+",  l: "Video testimonials"  },
              ].map(({ n, l }) => (
                <div key={l} className="px-3 sm:px-4 first:pl-0 last:pr-0 text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-extrabold text-[#0B1F3A] tracking-tight leading-none">
                    {n}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-gray-400 mt-1 leading-snug">{l}</p>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="flex flex-col gap-2.5">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#F97316] text-[#0a3d22] font-bold text-sm sm:text-[15px] px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl self-start hover:brightness-105 active:scale-95 transition-all duration-150 shadow-[0_4px_16px_rgba(212,175,55,0.30)]"
              >
                <WaIcon size={17} />
                Message me directly on WhatsApp
              </a>
              <p className="text-xs text-gray-400">
                You'll reach me personally — not a support inbox.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}