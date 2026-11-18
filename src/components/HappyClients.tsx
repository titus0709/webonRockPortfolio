
"use client";

import reholife from "@/assets/reholifeLogo.jpg";
import nammaOoru from "@/assets/NammaOoru.png";
import lightzup from "@/assets/lightzupLogo.png";
import lignite from "@/assets/ligniteLogo.png";
import thirdeye from "@/assets/thirdEyeLogo.png";
import mercyLogo from "@/assets/mercy logo.png";
import judah from "@/assets/JudahFoodDeliveryLogo.png";

export default function HappyClientsSimple() {
  const logos = [
    { name: "Reholife", src: (reholife as any).src ?? reholife },
    { name: "Namma Ooru", src: (nammaOoru as any).src ?? nammaOoru },
    { name: "Lightzup", src: (lightzup as any).src ?? lightzup },
    { name: "Lignite", src: (lignite as any).src ?? lignite },
    { name: "Third Eye", src: (thirdeye as any).src ?? thirdeye },
    { name: "Mercy", src: (mercyLogo as any).src ?? mercyLogo },
    { name: "Judah Food Delivery", src: (judah as any).src ?? judah },
  ];

  const track = [...logos, ...logos];

  return (
    <section className="relative w-full overflow-hidden bg-[#090C0B] py-14 sm:py-16 lg:py-20 text-white">

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-[#B7F36B]/[0.055] blur-[110px]" />

        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#B7F36B]/[0.035] blur-[100px]" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B7F36B]/20 bg-[#B7F36B]/[0.07] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B7F36B] sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B7F36B] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B7F36B]" />
            </span>
            Trusted Partnerships
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Good Work.
            <span className="text-[#B7F36B]"> Great Partnerships.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/45 sm:text-base">
            Proud to work alongside businesses turning their ideas into reality.
          </p>
        </div>

        {/* Logo Marquee */}
        <div
          className="relative overflow-hidden"
          aria-label="Our client logos"
        >

          {/* Side Fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-10 bg-gradient-to-r from-[#090C0B] to-transparent sm:w-20 lg:w-28" />

          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-10 bg-gradient-to-l from-[#090C0B] to-transparent sm:w-20 lg:w-28" />

          <div className="marquee-track flex w-max items-center">

            {track.map((logo, i) => (
              <div
                key={i}
                className="logo-card group mx-2.5 flex h-20 w-28 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#B7F36B]/30 hover:bg-white/[0.07] hover:shadow-[0_10px_30px_rgba(183,243,107,0.07)] sm:mx-4 sm:h-24 sm:w-36 sm:rounded-2xl sm:px-5 lg:mx-5 lg:h-28 lg:w-40"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  draggable={false}
                  className="max-h-[65%] max-w-full object-contain grayscale opacity-50 transition-all duration-500 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ))}

          </div>
        </div>

        {/* Bottom Detail */}
        <div className="mt-9 flex items-center justify-center gap-3 sm:mt-11">
          <span className="h-px w-8 bg-white/10 sm:w-12" />

          <p className="text-center text-[10px] font-medium uppercase tracking-[0.18em] text-white/35 sm:text-xs">
            Building relationships. Creating results.
          </p>

          <span className="h-px w-8 bg-white/10 sm:w-12" />
        </div>

      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 28s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .marquee-track {
            animation-duration: 22s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>

    </section>
  );
}
