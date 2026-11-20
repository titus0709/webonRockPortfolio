
"use client";

import dynamic from "next/dynamic";
import {
  ArrowRight,
  Globe,
  Target,
  Megaphone,
  ShoppingBag,
  Bot,
  CheckCircle2,
} from "lucide-react";

import { useEffect, useState } from "react";

// Load CursorGrid separately
const CursorGrid = dynamic(
  () => import("@/components/CursorGrid"),
  {
    ssr: false,
    loading: () => null,
  }
);
const [showCursorGrid, setShowCursorGrid] = useState(false);

useEffect(() => {
  const media = window.matchMedia("(min-width: 640px)");

  const updateScreen = () => {
    setShowCursorGrid(media.matches);
  };

  updateScreen();

  media.addEventListener("change", updateScreen);

  return () => {
    media.removeEventListener("change", updateScreen);
  };
}, []);
// Services
const services = [
  { name: "Website Development", icon: Globe },
  { name: "Lead Generation", icon: Target },
  { name: "Meta & Google Ads", icon: Megaphone },
  { name: "Shopify & E-commerce", icon: ShoppingBag },
  { name: "AI Solutions & Automation", icon: Bot },
];

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in growing my business. I'd like to know how WebOnRock can help me get more customers and generate more sales."
  );

  const whatsappUrl = `https://wa.me/919566515735?text=${whatsappMessage}`;

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#090C0B] text-white">

     
     {/* CURSOR GRID - DESKTOP ONLY */}
{/* CURSOR GRID - DESKTOP ONLY */}
<div className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden sm:block">
  {showCursorGrid && (
    <CursorGrid
      cellSize={60}
      color="#ffffff"
      highlight="area"
      gridStyle="lines"
      radius={140}
      holdTime={400}
      fadeDuration={800}
      fillOpacity={0.12}
      gridOpacity={0.15}
      spotlight={0.8}
      clickPulse
    />
  )}
</div>


{/* GRID BACKGROUND - MOBILE ONLY */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-[1] sm:hidden"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
    maskImage:
      "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
  }}
/>


      {/* BACKGROUND EFFECTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      >

        {/* Green glow */}
        <div className="absolute -right-40 -top-40 hidden h-[500px] w-[500px] rounded-full bg-[#B7F36B]/[0.08] blur-[120px] sm:block" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#B7F36B]/[0.05] blur-[120px]" />

        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090C0B] to-transparent" />

      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* HERO CONTENT */}
        <div className="flex min-h-[85vh] flex-col justify-center pb-16 pt-32 sm:min-h-[88vh] lg:min-h-[90vh] lg:pb-20 lg:pt-36">

          <div className="max-w-5xl">

            {/* EYEBROW */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B7F36B] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B7F36B]" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs">
                Digital Growth for Your Business
              </span>

            </div>

            {/* MAIN HEADING */}
            <h1 className="max-w-5xl text-[clamp(2.8rem,7.2vw,6.5rem)] font-bold leading-[1.04] tracking-[-0.055em]">

              Get More Customers.
              <br />

              Generate More Sales.
              <br />

              <span className="text-[#B7F36B]">
                Grow Faster.
              </span>

            </h1>

           

            {/* CTA BUTTONS */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact WebOnRock on WhatsApp"
                className="group inline-flex h-14 items-center justify-center rounded-md bg-[#B7F36B] px-7 text-sm font-bold text-[#10150C] shadow-[0_0_30px_rgba(183,243,107,0.12)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#A5E65A] hover:shadow-[0_0_35px_rgba(183,243,107,0.2)] sm:text-base"
              >
                Let's Grow Your Business

                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Portfolio CTA */}
              <a
                href="#work"
                className="group inline-flex h-14 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] px-7 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:border-[#B7F36B]/50 hover:bg-white/[0.07] hover:text-[#B7F36B] sm:text-base"
              >
                Explore Our Work

                <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

            </div>

            {/* BENEFITS */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/50 sm:text-sm">

              {[
                "More Qualified Leads",
                "Higher Conversions",
                "Smarter Automation",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#B7F36B]" />
                  {item}
                </span>
              ))}

            </div>

          </div>
        </div>

        {/* SERVICES STRIP */}
        <div className="border-t border-white/10 py-8 sm:py-10">

          <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
            Everything You Need to Grow
          </p>

          <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 lg:grid-cols-5">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.name}
                  className="group flex items-center gap-3"
                >

                  <Icon className="h-5 w-5 shrink-0 text-[#B7F36B]/70 transition-all duration-200 group-hover:scale-110 group-hover:text-[#B7F36B]" />

                  <span className="text-xs font-medium text-white/55 transition-colors duration-200 group-hover:text-white sm:text-sm">
                    {service.name}
                  </span>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}