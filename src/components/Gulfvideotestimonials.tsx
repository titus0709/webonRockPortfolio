"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import reholifeLogo from "../assets/abrahamThumbnail.png";
import sanjithThumbnail from "../assets/sanjithThumbnail.png";

// ─── Types ────────────────────────────────────────────────────────────────────
interface VideoTestimonial {
  id: number;
  name: string;
  designation: string;
  company: string;
  quote: string;
  result: string;
  resultLabel: string;
  thumbnail: string;
  videoSrc: string;
}

// ─── Data — REAL clients only, nothing fabricated ─────────────────────────────
const videos: VideoTestimonial[] = [
  {
    id: 1,
    name: "Abraham Shankar",
    designation: "Founder & CEO",
    company: "Reholife",
    quote: "Increased our brand value🚀",
    result: "",
    resultLabel: "More Trust",
    thumbnail: reholifeLogo.src,
    videoSrc: "https://youtube.com/shorts/ev3j1n7jXEg?si=uG7fq4oq8iSr6Ey-",
  },
  {
    id: 2,
    name: "Sanjith",
    designation: "Founder & CEO",
    company: "Velz Flow",
    quote: "Responsive & Reliable",
    result: "",
    resultLabel: "",
    thumbnail: sanjithThumbnail.src,
    videoSrc: "https://youtube.com/shorts/0WioC-LPgzs",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getYouTubeId(url: string): string | null {
  const match = url.match(/shorts\/([^?]+)/);
  return match ? match[1] : null;
}

// ─── Play Button ──────────────────────────────────────────────────────────────
function PlayButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Play video"
      className="
        group relative z-10
       w-12 h-12
        sm:w-14 sm:h-14
        lg:w-16 lg:h-16  rounded-full
        bg-white/15 backdrop-blur-md
        border border-white/30
        flex items-center justify-center
        hover:bg-[#D4AF37] hover:border-[#D4AF37]
        hover:shadow-[0_0_36px_rgba(212,175,55,0.55)]
        transition-all duration-300
      "
    >
      <span className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-60 group-hover:opacity-0" />
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-white translate-x-0.5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  );
}

// ─── Video Modal ──────────────────────────────────────────────────────────────
function VideoModal({
  video,
  onClose,
}: {
  video: VideoTestimonial;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const ytId = getYouTubeId(video.videoSrc);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Video testimonial from ${video.name}`}
    >
      <div
        className="
          relative
          w-full
          max-w-[280px]
          sm:max-w-[320px]
          md:max-w-[380px]
          "
        style={{ aspectRatio: "9/16" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 rounded-[28px] overflow-hidden border-2 border-[#D4AF37]/30 shadow-[0_32px_80px_rgba(0,0,0,0.7)]">
          {ytId ? (
            <iframe
              src={`https://www.youtube.com/embed/${ytId}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <video
              src={video.videoSrc}
              autoPlay
              controls
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0a3d22] hover:border-[#D4AF37] transition-all z-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Reel Card ────────────────────────────────────────────────────────────────
function ReelCard({
  video,
  index,
  isActive,
  onClick,
}: {
  video: VideoTestimonial;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`
        relative flex-shrink-0 cursor-pointer select-none
        w-[160px]
        sm:w-[190px]
        md:w-[220px]
        lg:w-[260px]
        transition-all duration-500 ease-out
        ${isActive ? "scale-100 z-10" : "scale-[0.88] opacity-55 z-0"}
      `}
      style={{
  aspectRatio: "9/16",
  animationDelay: `${index * 80}ms`,
}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Play testimonial from ${video.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <div className="absolute inset-0 rounded-[22px] overflow-hidden border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.5)]">

        <img
          src={video.thumbnail}
          alt={video.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? "scale-105" : "scale-100"}`}
          loading="lazy"
          draggable={false}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />

        {/* Result badge — only shown when there's real data */}
        {video.result && (
          <div className="absolute top-4 left-4 flex flex-col items-start">
            <span
              className="text-3xl font-black leading-none"
              style={{ color: "#D4AF37", textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
            >
              {video.result}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]/80">
              {video.resultLabel}
            </span>
          </div>
        )}

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayButton onClick={onClick} />
        </div>

        {/* Author — bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {video.quote && (
            <p
              className={`text-white text-xs sm:text-sm leading-snug mb-4 transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-80 translate-y-1"}`}
            >
              &ldquo;{video.quote}&rdquo;
            </p>
          )}

          <div className="h-px bg-white/15 mb-3" />

          <div className="flex items-center gap-3">
            <div className="min-w-0">
              <p className="text-white font-semibold text-sm truncate">{video.name}</p>
              <p className="text-white/50 text-xs truncate">
                {video.designation} · {video.company}
              </p>
            </div>
            <div className="ml-auto flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="#D4AF37" aria-label="Verified client">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {isActive && (
          <div
            className="absolute inset-0 rounded-[22px] pointer-events-none"
            style={{
              boxShadow: "inset 0 0 0 2px rgba(212,175,55,0.5), 0 0 40px rgba(212,175,55,0.2)",
            }}
          />
        )}
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function GulfVideoTestimonials() {
  const [active, setActive]           = useState(0);
  const [modalVideo, setModalVideo]   = useState<VideoTestimonial | null>(null);
  const [isVisible, setIsVisible]     = useState(false);
  const [isDragging, setIsDragging]   = useState(false);
  const dragStart  = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);

  const total = videos.length;
  const goTo  = useCallback(
    (i: number) => setActive(((i % total) + total) % total),
    [total]
  );

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (modalVideo) return;
    const t = setInterval(() => goTo(active + 1), 4500);
    return () => clearInterval(t);
  }, [active, modalVideo, goTo]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  goTo(active - 1);
      if (e.key === "ArrowRight") goTo(active + 1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [active, goTo]);

  const onDragStart = (clientX: number) => { dragStart.current = clientX; setIsDragging(true); };
  const onDragEnd   = (clientX: number) => {
    if (!isDragging) return;
    const diff = dragStart.current - clientX;
    if (Math.abs(diff) > 25) goTo(active + (diff > 0 ? 1 : -1));
    setIsDragging(false);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="client-stories"
        aria-label="Client video testimonials"
        className={`
          relative w-full overflow-hidden
          bg-[#071a10] text-white
          py-14 sm:py-16 lg:py-20 flex flex-col items-center
          transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {/* Background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#D4AF37]/6 blur-[130px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#0F5132]/40 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,#fff 0,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,transparent 1px,transparent 60px)",
            }}
          />
        </div>

        {/* Header */}
        <div className="relative z-10 text-center px-4 sm:px-6 mb-10 sm:mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/25 rounded-full px-5 py-2 mb-7">
            <svg className="w-3.5 h-3.5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm12 2a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm0 4a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z" />
            </svg>
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
              Verified Client Stories
            </span>
          </div>

          <h2
            className="
              font-extrabold
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              leading-tight
              mb-4
              sm:mb-5
              "
            style={{ fontFamily: "'Georgia', serif" }}
          >
            <span className="text-white">Real Clients.</span>{" "}
            <span className="text-[#D4AF37]">Real Words.</span>
          </h2>

          {/* Honest framing for a Gulf audience — no fake Gulf clients claimed */}
          <p className="
            text-white/55
            text-sm
            sm:text-base
            leading-relaxed
            max-w-2xl
            mx-auto
            ">
            We're new to the Gulf market — and we believe in earning trust through
            transparency, not empty promises. Watch what our existing clients say about
            working with us, and{" "}
            <span className="text-white/80 font-medium">
              judge the quality of the work for yourself.
            </span>
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative z-10 w-full flex items-center justify-center"
          style={{ perspective: "1200px" }}
          onMouseDown={(e) => onDragStart(e.clientX)}
          onMouseUp={(e) => onDragEnd(e.clientX)}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
        >
          <div
              className="
                flex
                items-center
                gap-3
                sm:gap-5
                px-2
                sm:px-4
                py-6
                sm:py-8
                overflow-x-auto
                scrollbar-hide
              "
            >
            {videos.map((v, i) => (
              <ReelCard
                key={v.id}
                video={v}
                index={i}
                isActive={i === active}
                onClick={() => {
                  if (i === active) setModalVideo(v);
                  else goTo(i);
                }}
              />
            ))}
          </div>
        </div>

        <p className="relative z-10 text-white/25 text-xs mt-1 mb-8 flex items-center gap-2">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          Tap the active card to watch the full video
        </p>

        {/* Dot nav */}
        <div className="relative z-10 flex items-center gap-2.5 mb-14" role="tablist">
          {videos.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className={`
                rounded-full transition-all duration-300
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]
                ${i === active
                  ? "w-8 h-2.5 bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.7)]"
                  : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"}
              `}
            />
          ))}
        </div>

        {/* Honest "first Gulf pitch" trust block */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 mb-14">
          <div
            className="
            border border-[#D4AF37]/20
            rounded-2xl
            p-5
            sm:p-7
            bg-white/4
            text-center
            "
          >
            <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">
              A Note for Gulf Business Owners
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              We haven't worked with a Gulf company yet — this is our first step into Kuwait,
              Bahrain, and Oman. What we bring is a{" "}
              <span className="text-white font-medium">
                proven system for turning websites into lead machines
              </span>
              , a track record of happy clients, and the commitment to earn your trust through
              results — not just words. We'd rather be honest with you upfront than oversell.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="relative z-10 text-center px-4">
          <p className="text-white/30 text-xs uppercase tracking-widest mb-5 font-medium">
            Be among the first Gulf companies to work with us
          </p>
          <div
              className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  w-full
                  sm:w-auto
                  gap-3
                  ...
                  "
            >
            <a
              href={`https://wa.me/96500000000?text=${encodeURIComponent("Hi! I watched your client videos and I'm interested in getting leads for my AC/cleaning business.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group inline-flex items-center gap-3
                bg-[#D4AF37] hover:brightness-105
                text-[#0a3d22] font-bold text-sm
                  sm:text-base
                  px-5
                  sm:px-8
                  py-3
                  sm:py-4 rounded-xl
                shadow-[0_0_36px_rgba(212,175,55,0.4)]
                hover:shadow-[0_0_56px_rgba(212,175,55,0.65)]
                transition-all duration-300
              "
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Let's Talk on WhatsApp
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#results"
              className="
                inline-flex items-center gap-2 text-white/50 hover:text-white
                font-medium text-sm
                  sm:text-base
                  px-5
                  sm:px-6
                  py-3
                  sm:py-4 rounded-xl
                border border-white/10 hover:border-[#D4AF37]/30
                transition-all duration-200
              "
            >
              See Our Work
            </a>
          </div>
          <p className="mt-4 text-white/25 text-xs">No commitment · Free 15-min call · We'll be straight with you</p>
        </div>
      </section>

      {modalVideo && (
        <VideoModal video={modalVideo} onClose={() => setModalVideo(null)} />
      )}
    </>
  );
}