"use client";
import reholife from "@/assets/reholifeLogo.jpg";
import nammaOoru from "@/assets/NammaOoru.png";
import lightzup from "@/assets/lightzupLogo.png";
import lignite from "@/assets/ligniteLogo.png";
import thirdeye from "@/assets/thirdEyeLogo.png";

export default function HappyClientsSimple() {
  const logos = [
    { name: "Reholife", src: (reholife as any).src ?? reholife },
    { name: "Namma Ooru", src: (nammaOoru as any).src ?? nammaOoru },
    { name: "Lightzup", src: (lightzup as any).src ?? lightzup },
    { name: "Lignite", src: (lignite as any).src ?? lignite },
    { name: "Third Eye", src: (thirdeye as any).src ?? thirdeye },
  ];

  // Duplicate once to create seamless loop
  const track = [...logos, ...logos];

  return (
    <section className="w-full py-12 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Clients</h2>

        <div
          className="overflow-hidden"
          aria-label="Scrolling client logos (hover or tap to pause)"
        >
          <div
            className="flex items-center gap-4 sm:gap-8 whitespace-nowrap animate-marquee will-change-transform"
            // hover/tap pauses animation
            style={{ animationPlayState: "running", touchAction: "pan-y" }}
          >
            {track.map((l, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-28 h-16 sm:w-40 sm:h-24 flex items-center justify-center"
                title={l.name}
              >
                <img
                  src={l.src}
                  alt={l.name}
                  className="max-h-full max-w-full object-contain rounded-full shadow-md"
                  onError={(e) => {
                    // fallback to hide broken images gracefully
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          /* desktop: a bit slower */
          animation: marquee 22s linear infinite;
        }

        /* faster on small screens so motion feels natural */
        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 14s linear infinite;
          }
        }

        /* pause on hover (desktop) and on active (tap) for touch */
        .animate-marquee:hover,
        .animate-marquee:focus-within,
        .animate-marquee:active {
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

        /* small helper to hide scrollbar in WebKit browsers (optional) */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
