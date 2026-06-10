"use client";

import reholife from "@/assets/reholifeLogo.jpg";
import nammaOoru from "@/assets/NammaOoru.png";
import lightzup from "@/assets/lightzupLogo.png";
import lignite from "@/assets/ligniteLogo.png";
import thirdeye from "@/assets/thirdEyeLogo.jpg";
import mercyLogo from "@/assets/mercy logo.png";
import velz from "@/assets/velzflow.png";
import vform from "@/assets/vform.png";
import vimala from "@/assets/vimalaschool.jpeg";

const logos = [
  { name: "Reholife",   src: (reholife   as any).src ?? reholife,   industry: "Leadership Coaching · India" },
  { name: "Namma Ooru", src: (nammaOoru  as any).src ?? nammaOoru,  industry: "Bakery · India" },
  { name: "Lightzup",   src: (lightzup   as any).src ?? lightzup,   industry: "Media · USA" },
  { name: "Lignite",    src: (lignite    as any).src ?? lignite,    industry: "Clothing Brand · India" },
  { name: "Third Eye",  src: (thirdeye   as any).src ?? thirdeye,   industry: "Photography · India" },
  { name: "Mercy",      src: (mercyLogo  as any).src ?? mercyLogo,  industry: "Education · India" },
  { name: "Velz",       src: (velz       as any).src ?? velz,       industry: "AI Automation · USA" },
  { name: "Vform",      src: (vform      as any).src ?? vform,      industry: "Architecture · India" },
  { name: "Vimala",     src: (vimala     as any).src ?? vimala,     industry: "Education · India" },
];

const track = [...logos, ...logos, ...logos];

export default function GulfHappyClients() {
  return (
    <section className="w-full bg-[#0F5132] py-14 overflow-hidden relative">

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(212,175,55,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="text-center mb-8 px-4 relative z-10">
        <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mb-3">
          Trusted By
        </p>
        <h2
          className="text-white font-extrabold mb-3"
          style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", fontFamily: "'Georgia',serif" }}
        >
          Real Businesses. Real Results.
        </h2>
        <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">
          Every logo below is a client we've built and delivered for.
          Click any site and see the work live.
        </p>
      </div>

      {/* Track record sentence */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 mb-10">
        <p
          className="text-center text-sm leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.55)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "14px 0",
          }}
        >
          <span style={{ color: "rgba(212,175,55,0.9)", fontWeight: 700 }}>Our track record:</span>{" "}
          10 projects across coaching, education, food & beverage, and retail.
          New to the Gulf — bringing the same quality to your market.
        </p>
      </div>

      {/* Edge fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0F5132, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0F5132, transparent)" }}
        aria-hidden="true"
      />

      {/* Marquee */}
      <div className="overflow-hidden relative z-0" aria-label="Scrolling client logos">
        <div className="flex items-start gap-10 sm:gap-16 whitespace-nowrap animate-gulf-marquee will-change-transform">
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300"
              style={{ width: "clamp(80px, 12vw, 140px)" }}
              title={logo.name}
            >
              {/* Logo */}
              <div
                className="flex items-center justify-center"
                style={{ width: "100%", height: "clamp(56px, 8vw, 80px)" }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              {/* Industry label */}
              <p
                className="text-center leading-tight"
                style={{
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.38)",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  maxWidth: "100%",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {logo.industry}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider + footnote */}
      <div className="relative z-10 mt-10 flex items-center justify-center gap-4 px-6">
        <div className="flex-1 max-w-[120px] h-px bg-white/10" />
        <p className="text-white/30 text-xs text-center">
          Existing client base — bringing the same craft to Kuwait · Bahrain · Oman
        </p>
        <div className="flex-1 max-w-[120px] h-px bg-white/10" />
      </div>

      <style jsx>{`
        .animate-gulf-marquee {
          animation: gulf-marquee 8s linear infinite;
        }
        .animate-gulf-marquee:hover,
        .animate-gulf-marquee:active {
          animation-play-state: paused;
        }
        @keyframes gulf-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}