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
  videoSrc: string; // swap with real .mp4 / YouTube embed
  accentColor: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// Thumbnails use picsum photos in portrait ratio as stand-ins.
// Replace `videoSrc` with your real video URLs or YouTube/Vimeo embeds.
const videos: VideoTestimonial[] = [
  {
    id: 1,
    name: "Abraham Shankar",
    designation: "Founder & CEO",
    company: "Reholife",
    quote: "Incresed our Brand value with a clean and professional website for a leadership training 🚀",
    result: "100%",
    resultLabel: "More Trust",
    thumbnail: reholifeLogo.src,
    videoSrc: "https://youtube.com/shorts/ev3j1n7jXEg?si=uG7fq4oq8iSr6Ey-",
    accentColor: "#01A959",
  },
  {
    id: 2,
    name: "Sanjith",
    designation: "Founder & CEO",
    company: "Velz Flow",
    quote: "",
    result: "",
    resultLabel: "",
    thumbnail: sanjithThumbnail.src,
    videoSrc: "https://youtube.com/shorts/0WioC-LPgzs",
    accentColor: "#00c97a",
  },
//   {
//     id: 3,
//     name: "Amara Okafor",
//     designation: "Marketing Director",
//     company: "Prestige Health",
//     quote: "Every partner called within a week of launch.",
//     result: "#1",
//     resultLabel: "Brand Rank",
//     thumbnail: "https://picsum.photos/seed/amara2024/400/711",
//     videoSrc: "",
//     accentColor: "#01A959",
//   },
//   {
//     id: 4,
//     name: "James Whitmore",
//     designation: "Co-Founder",
//     company: "Venture Scout",
//     quote: "From zero to live in 3 weeks. Process was seamless.",
//     result: "3 wks",
//     resultLabel: "Full Launch",
//     thumbnail: "https://picsum.photos/seed/jwhitmore/400/711",
//     videoSrc: "",
//     accentColor: "#00c97a",
//   },
//   {
//     id: 5,
//     name: "Priya Sharma",
//     designation: "E-commerce Lead",
//     company: "StyleForward",
//     quote: "Organic revenue jumped 78% — storytelling that sells.",
//     result: "+78%",
//     resultLabel: "Revenue",
//     thumbnail: "https://picsum.photos/seed/priya99/400/711",
//     videoSrc: "",
//     accentColor: "#01A959",
//   },
];

// ─── Play Button ──────────────────────────────────────────────────────────────
function PlayButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Play video"
      className="
        group relative z-10
        w-16 h-16 rounded-full
        bg-white/15 backdrop-blur-md
        border border-white/30
        flex items-center justify-center
        hover:bg-[#01A959] hover:border-[#01A959]
        hover:shadow-[0_0_36px_rgba(1,169,89,0.6)]
        transition-all duration-300
      "
    >
      {/* ripple rings */}
      <span className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-60 group-hover:opacity-0" />
      <svg
        className="w-6 h-6 text-white translate-x-0.5"
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
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Video testimonial from ${video.name}`}
    >
      {/* Reel frame — 9:16 */}
      <div
        className="relative w-full max-w-xs"
        style={{ aspectRatio: "9/16" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 rounded-[28px] overflow-hidden border-2 border-white/20 shadow-[0_32px_80px_rgba(0,0,0,0.7)]">
         {video.videoSrc ? (
  video.videoSrc.includes("youtube") ? (
    <iframe
      src={`https://www.youtube.com/embed/${
        video.videoSrc.split("/shorts/")[1]?.split("?")[0]
      }?autoplay=1`}
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
  )
) : (
            /* Placeholder when no real video is provided */
            <div className="relative w-full h-full">
              <img
                src={video.thumbnail}
                alt={video.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-center gap-3">
                <p className="text-white/60 text-xs uppercase tracking-widest">Preview Mode</p>
                <p className="text-white font-semibold text-center px-8 text-sm">
                  Replace <code className="text-[#01A959]">videoSrc</code> with your real video URL
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors z-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Reel Card ─────────────────────────────────────────────────────────────────
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
        transition-all duration-500 ease-out
        ${isActive ? "scale-100 z-10" : "scale-[0.88] opacity-60 z-0"}
        
      `}
      style={{
        width: "clamp(180px, 22vw, 260px)",
        aspectRatio: "9/16",
        animationDelay: `${index * 80}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Play testimonial from ${video.name}`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
    >
      {/* Card shell */}
      <div className="absolute inset-0 rounded-[22px] overflow-hidden border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.5)]">

        {/* Thumbnail */}
        <img
          src={video.thumbnail}
          alt={video.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? "scale-105" : "scale-100"}`}
          loading="lazy"
          draggable={false}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />

        {/* Result badge — top */}
        <div className="absolute top-4 left-4 flex flex-col items-start">
          <span className="text-3xl font-black text-white leading-none" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
            {video.result}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#01A959]">
            {video.resultLabel}
          </span>
        </div>

        {/* Duration chip — top right */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm border border-white/15 rounded-full px-2.5 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-white text-[10px] font-semibold">LIVE</span>
        </div>

        {/* Play button — center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayButton onClick={onClick} />
        </div>

        {/* Author info — bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {/* Quote */}
          <p className={`text-white text-sm leading-snug mb-4 transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-80 translate-y-1"}`}>
            &ldquo;{video.quote}&rdquo;
          </p>

          {/* Divider */}
          <div className="h-px bg-white/15 mb-3" />

          {/* Profile row */}
          <div className="flex items-center gap-3">
            {/* <img
              src={`https://api.dicebear.com/7.x/personas/svg?seed=${video.name}&backgroundColor=b6e3f4`}
              alt={video.name}
              className="w-9 h-9 rounded-full border-2 flex-shrink-0"
              style={{ borderColor: video.accentColor }}
            /> */}
            <div className="min-w-0">
              <p className="text-white font-semibold text-sm truncate">{video.name}</p>
              <p className="text-white/50 text-xs truncate">{video.designation} · {video.company}</p>
            </div>
            {/* Verified tick */}
            <div className="ml-auto flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill={video.accentColor} aria-label="Verified">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Active glow border */}
        {isActive && (
          <div
            className="absolute inset-0 rounded-[22px] pointer-events-none"
            style={{ boxShadow: `inset 0 0 0 2px ${video.accentColor}55, 0 0 40px ${video.accentColor}30` }}
          />
        )}
      </div>
    </div>
  );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function VideoTestimonialsSection() {
  const [active, setActive] = useState(0);
  const [modalVideo, setModalVideo] = useState<VideoTestimonial | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const total = videos.length;

  const goTo = useCallback((i: number) => {
    setActive(((i % total) + total) % total);
  }, [total]);

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Auto-advance
  useEffect(() => {
    if (modalVideo) return;
    const t = setInterval(() => goTo(active + 1), 4500);
    return () => clearInterval(t);
  }, [active, modalVideo, goTo]);

  // Keyboard nav
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(active - 1);
      if (e.key === "ArrowRight") goTo(active + 1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [active, goTo]);

  // Touch / mouse drag
  const onDragStart = (clientX: number) => { dragStart.current = clientX; setIsDragging(true); };
  const onDragEnd = (clientX: number) => {
    if (!isDragging) return;
    const diff = dragStart.current - clientX;
    if (Math.abs(diff) > 25) goTo(active + (diff > 0 ? 1 : -1));
    setIsDragging(false);
  };

  return (
    <>
      <section
        ref={sectionRef}
        className={`
          relative min-h-screen w-full overflow-hidden
          bg-[#050810] text-white
          py-20 flex flex-col items-center
          transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
        aria-label="Video Testimonials"
        id="video_testimonials"
      >
        {/* ── Background ──────────────────────────────────────────────── */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#01A959]/8 blur-[130px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#01A959]/5 blur-[100px]" />
          {/* Noise grain */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "200px" }}
          />
        </div>

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="relative z-10 text-center px-4 mb-14">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 bg-[#01A959]/10 border border-[#01A959]/25 rounded-full px-5 py-2 mb-7">
            <svg className="w-3.5 h-3.5 text-[#01A959]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm12 2a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm0 4a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"/>
            </svg>
            <span className="text-[#01A959] text-xs font-semibold uppercase tracking-widest">
              Real Clients · Real Results
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 text-balance">
            <span className="text-white">Hear It From</span>{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #01A959, #00e87a)" }}
            >
              Them Directly
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Real Stories from founders and leaders
            who saw real growth after working with us.
          </p>
        </div>

        {/* ── Reel carousel ───────────────────────────────────────────── */}
        <div
          ref={trackRef}
          className="relative z-10 w-full flex items-center justify-center"
          style={{ perspective: "1200px" }}
          onMouseDown={(e) => onDragStart(e.clientX)}
          onMouseUp={(e) => onDragEnd(e.clientX)}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
        >
          <div className="flex items-center gap-4 sm:gap-5 px-4 py-8"
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
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

        {/* ── Hint text ───────────────────────────────────────────────── */}
        <p className="relative z-10 text-white/25 text-xs mt-1 mb-8 flex items-center gap-2">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
          </svg>
          Swipe or click to explore
        </p>

        {/* ── Dot navigation ──────────────────────────────────────────── */}
        <div className="relative z-10 flex items-center gap-2.5 mb-14" role="tablist">
          {videos.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A959] ${i === active ? "w-8 h-2.5 bg-[#01A959] shadow-[0_0_12px_rgba(1,169,89,0.7)]" : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>

        {/* ── Trust bar ───────────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-wrap justify-center items-center gap-6 sm:gap-10 mb-16 px-4">
          {[
            { icon: "👥", val: "10+", lbl: "Happy Clients" },
            { icon: "⭐", val: "4.9/5", lbl: "Average Rating" },
            { icon: "🚀", val: "3×", lbl: "Average ROI" },
            { icon: "🎬", val: "", lbl: "Video Reviews" },
          ].map((s) => (
            <div key={s.lbl} className="flex items-center gap-3 group">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <div className="text-[#01A959] font-bold text-xl leading-none">{s.val}</div>
                <div className="text-gray-500 text-xs mt-0.5">{s.lbl}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <div className="relative z-10 text-center px-4">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-5 font-medium">
            Ready to become our next success story?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#start-project"
              className="
                group relative inline-flex items-center gap-3
                bg-[#01A959] hover:bg-[#019e52]
                text-white font-semibold text-base
                px-9 py-4 rounded-xl
                shadow-[0_0_36px_rgba(1,169,89,0.4)]
                hover:shadow-[0_0_56px_rgba(1,169,89,0.65)]
                transition-all duration-300
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01A959] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050810]
              "
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Lets Build 
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#work"
              className="
                inline-flex items-center gap-2 text-gray-400 hover:text-white
                font-medium text-base px-6 py-4 rounded-xl
                border border-white/10 hover:border-white/25
                transition-all duration-200
              "
            >
              See Our Work
            </a>
          </div>
          <p className="mt-4 text-gray-600 text-xs">No commitment · Free 30-min consultation</p>
        </div>
      </section>

      {/* ── Modal ───────────────────────────────────────────────────────── */}
      {modalVideo && (
        <VideoModal video={modalVideo} onClose={() => setModalVideo(null)} />
      )}
    </>
  );
}