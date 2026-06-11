"use client";

import { useState } from "react";
import { InlineWidget } from "react-calendly";

const CALENDLY_URL = "https://calendly.com/buildwithwebonrock/30min";

// ─── Icons ────────────────────────────────────────────────────────────────────
const ClockIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const VideoIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const WaIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

// ─── Calendly embed ───────────────────────────────────────────────────────────
function CalendlyEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/20 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
      <InlineWidget
        url={CALENDLY_URL}
        styles={{ height: "660px" }}
      />
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function BookACall() {
  return (
    <section
      id="book-call"
      className="bg-white py-16 sm:py-20 lg:py-28 border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[#D4AF37] font-bold text-[10px] sm:text-xs uppercase tracking-[0.18em] mb-3">
            Book a Free Strategy Call
          </p>
          <h2
            className="text-[#0F5132] font-extrabold mb-4 leading-tight"
            style={{ fontSize: "clamp(1.75rem, 5vw, 2.9rem)", fontFamily: "'Georgia', serif" }}
          >
            Let's Talk About{" "}
            <span className="text-[#D4AF37]">Your Leads.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed px-2">
            Pick a time that works for you. 30 minutes. No pitch deck, no pressure —
            just a straight conversation about what your AC or cleaning business needs
            to start generating leads in Kuwait, Bahrain, or Oman.
          </p>
        </div>

        {/* ── Two-column layout: stacks on mobile, side-by-side on lg ── */}
        <div className="flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-7 lg:gap-10 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="w-full space-y-5 sm:space-y-6">

            {/* Call details card */}
            <div className="bg-[#0F5132] rounded-2xl p-6 sm:p-8 text-white shadow-[0_4px_24px_rgba(15,81,50,0.18)]">
              <p className="text-[#D4AF37] text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] mb-5 sm:mb-6">
                What's Included
              </p>
              <div className="space-y-4 sm:space-y-5">
                {[
                  {
                    icon: <ClockIcon />,
                    title: "30 minutes, your time zone",
                    desc: "We work with Gulf time — AST/GST. Pick any slot that suits you.",
                  },
                  {
                    icon: <VideoIcon />,
                    title: "Google Meet or WhatsApp",
                    desc: "Whatever you're comfortable with. We'll send the link on confirmation.",
                  },
                  {
                    icon: <ShieldIcon />,
                    title: "Zero obligation",
                    desc: "No contract, no deposit, no follow-up pressure. Just honest advice.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] flex-shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{title}</p>
                      <p className="text-white/55 text-xs mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What we'll cover */}
            <div className="border border-gray-100 rounded-2xl p-5 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
              <p className="text-[#0F5132] font-bold text-sm mb-4">
                What we'll cover in the call
              </p>
              <ul className="space-y-3">
                {[
                  "Your current lead situation — what's working, what isn't",
                  "Which Gulf keywords your competitors are ranking for",
                  "Whether a website, ads, or both makes sense for your stage",
                  "A realistic timeline and what results to expect",
                  "Honest answer if we're not the right fit for you",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                      <CheckIcon />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prefer WhatsApp */}
            <div className="border border-[#D4AF37]/30 bg-[#D4AF37]/6 rounded-2xl p-5 sm:p-6">
              <p className="text-[#0a3d22] font-semibold text-sm mb-1">
                Prefer to message first?
              </p>
              <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                Totally fine. Send us a WhatsApp and we'll reply within the hour.
              </p>
              <a
                href={`https://wa.me/919566515735?text=${encodeURIComponent(
                  "Hi! I'd like to schedule a strategy call about getting leads for my Gulf business."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0a3d22] font-bold text-sm px-5 py-2.5 rounded-xl hover:brightness-105 active:scale-95 transition-all duration-150 shadow-[0_2px_12px_rgba(212,175,55,0.3)]"
              >
                <WaIcon />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Calendly ── */}
          <div className="w-full">
            <CalendlyEmbed />
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-gray-300">
                <CalendarIcon />
              </span>
              <p className="text-gray-400 text-xs text-center">
                Powered by{" "}
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F5132] font-medium hover:underline underline-offset-2"
                >
                  Calendly
                </a>
                {" "}· Confirmation sent to your email instantly
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}