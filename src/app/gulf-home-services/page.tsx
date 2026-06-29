"use client";
import { useState, useEffect, useRef } from "react";
import logo from "@/assets/logo.png";
import Founder from "@/components/Founder";
import BookACall from "@/components/Bookacall";
import GulfVideoTestimonials from "@/components/Gulfvideotestimonials";
import GulfHappyClients from "@/components/Gulfhappyclients";
import GulfPortfolio from "@/components/Gulfportfolio";

/* ─── CONFIG ─────────────────────────────────────────────────────── */
const WA_NUMBER = "+919566515735";
const WA_MSG = encodeURIComponent("Hi! I want to grow my AC/cleaning business with better digital marketing. Let's talk.");
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

/* ─── ICONS ──────────────────────────────────────────────────────── */
const WaIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const PhIcon = ({ size = 20 }) => (
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
);
const ArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const Check = ({ color = "#0F5132" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" aria-hidden="true" style={{ flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const Star = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#D4AF37" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/* ─── SCROLL ANIMATION HOOK ──────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── GLOBAL STYLES ──────────────────────────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: #FFFFFF;
      color: #1a1a1a;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    .syne { font-family: 'Syne', sans-serif; }
    a { color: inherit; text-decoration: none; }

    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: #f5f5f5; }
    ::-webkit-scrollbar-thumb { background: #0F5132; border-radius: 10px; }

    /* Keyframes */
    @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes scaleIn { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
    @keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .7; transform: scale(.95); } }
    @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
    @keyframes countUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes borderGrow { from { width: 0; } to { width: 100%; } }
    @keyframes floatUp { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }

    .animate-fade-up   { animation: fadeUp .65s ease both; }
    .animate-fade-up-2 { animation: fadeUp .65s .1s ease both; }
    .animate-fade-up-3 { animation: fadeUp .65s .2s ease both; }
    .animate-fade-up-4 { animation: fadeUp .65s .3s ease both; }
    .animate-fade-up-5 { animation: fadeUp .65s .4s ease both; }

    /* Scroll-triggered reveal classes */
    .reveal { opacity: 0; transform: translateY(28px); transition: opacity .6s ease, transform .6s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal-left { opacity: 0; transform: translateX(-32px); transition: opacity .6s ease, transform .6s ease; }
    .reveal-left.visible { opacity: 1; transform: translateX(0); }
    .reveal-right { opacity: 0; transform: translateX(32px); transition: opacity .6s ease, transform .6s ease; }
    .reveal-right.visible { opacity: 1; transform: translateX(0); }
    .reveal-scale { opacity: 0; transform: scale(0.94); transition: opacity .55s ease, transform .55s ease; }
    .reveal-scale.visible { opacity: 1; transform: scale(1); }

    .delay-1 { transition-delay: .08s !important; }
    .delay-2 { transition-delay: .16s !important; }
    .delay-3 { transition-delay: .24s !important; }
    .delay-4 { transition-delay: .32s !important; }
    .delay-5 { transition-delay: .40s !important; }
    .delay-6 { transition-delay: .48s !important; }

    /* Primary CTA */
    .btn-gold {
      display: inline-flex; align-items: center; gap: 9px;
      background: #D4AF37; color: #0F5132;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 700; font-size: 15px; letter-spacing: -.01em;
      padding: 14px 30px; border-radius: 6px;
      text-decoration: none; border: none; cursor: pointer;
      transition: background .18s, transform .18s, box-shadow .18s;
      box-shadow: 0 4px 20px rgba(212,175,55,.35);
    }
    .btn-gold:hover { background: #c9a42e; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(212,175,55,.45); }
    .btn-gold:active { transform: translateY(0); }

    .btn-ghost-green {
      display: inline-flex; align-items: center; gap: 9px;
      background: transparent; color: #0F5132;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 600; font-size: 15px; letter-spacing: -.01em;
      padding: 13px 26px; border-radius: 6px;
      border: 2px solid #0F5132; cursor: pointer;
      transition: background .18s, color .18s; text-decoration: none;
    }
    .btn-ghost-green:hover { background: #0F5132; color: #fff; }

    .btn-ghost-white {
      display: inline-flex; align-items: center; gap: 9px;
      background: transparent; color: #fff;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 600; font-size: 15px; letter-spacing: -.01em;
      padding: 13px 26px; border-radius: 6px;
      border: 2px solid rgba(255,255,255,.35); cursor: pointer;
      transition: border-color .18s, background .18s; text-decoration: none;
    }
    .btn-ghost-white:hover { border-color: #fff; background: rgba(255,255,255,.08); }

    .pill-label {
      display: inline-flex; align-items: center; gap: 6px;
      background: rgba(212,175,55,.12); color: #9a7d1a;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 11px; font-weight: 700; letter-spacing: .12em;
      text-transform: uppercase; padding: 5px 14px; border-radius: 100px;
      border: 1px solid rgba(212,175,55,.25);
    }
    .pill-label-green {
      display: inline-flex; align-items: center; gap: 6px;
      background: rgba(15,81,50,.08); color: #0F5132;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 11px; font-weight: 700; letter-spacing: .12em;
      text-transform: uppercase; padding: 5px 14px; border-radius: 100px;
      border: 1px solid rgba(15,81,50,.15);
    }

    /* Card hover lift */
    .card-lift { transition: transform .22s, box-shadow .22s; }
    .card-lift:hover { transform: translateY(-5px); box-shadow: 0 20px 56px rgba(15,81,50,.12) !important; }

    /* Gold shimmer */
    .gold-shimmer {
      background: linear-gradient(90deg, #D4AF37 0%, #f0d060 40%, #D4AF37 70%, #b8922a 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3.5s linear infinite;
    }

    /* ── RESPONSIVE ── */

    /* Navbar hidden links on mobile */
    .nav-links { display: flex; gap: 28px; align-items: center; }
    .nav-links a { font-size: 14px; }

    /* Hero grid */
    .hero-grid { display: grid; grid-template-columns: 1fr 290px; gap: 72px; align-items: center; }
    .stat-strip { display: flex; gap: 0; padding-top: 32px; border-top: 1px solid #eee; }

    /* Section grids */
    .cred-grid { display: flex; justify-content: center; flex-wrap: wrap; gap: 0; }
    .honest-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
    .work-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
    .results-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; }
    .services-grid { display: grid; grid-template-columns: 320px 1fr; gap: 80px; align-items: start; }
    .packages-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; align-items: start; }
    .compare-grid-row { display: grid; grid-template-columns: 2fr 1fr 1fr; }
    .testimonials-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }

    /* Tablet — ≤ 900px */
    @media (max-width: 900px) {
      .nav-links { display: none; }
      .hero-grid { grid-template-columns: 1fr; gap: 40px; }
      .honest-grid { grid-template-columns: 1fr 1fr; }
      .work-grid { grid-template-columns: 1fr 1fr; }
      .results-grid { grid-template-columns: 1fr 1fr; }
      .services-grid { grid-template-columns: 1fr; gap: 40px; }
      .services-sticky { position: static !important; }
      .packages-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
      .packages-grid > div { transform: none !important; }
      .testimonials-grid { grid-template-columns: 1fr 1fr; }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .cred-item { border-right: none !important; padding: 12px 20px !important; }
    }

    /* Mobile — ≤ 600px */
    @media (max-width: 600px) {
      .hero-section { padding: 56px 16px 64px !important; }
      section, footer > div { padding-left: 16px !important; padding-right: 16px !important; }
      .inner { padding-left: 16px !important; padding-right: 16px !important; }
      .honest-grid { grid-template-columns: 1fr; }
      .work-grid { grid-template-columns: 1fr; }
      .results-grid { grid-template-columns: 1fr; }
      .testimonials-grid { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: 1fr; }
      .stat-strip { flex-wrap: wrap; gap: 20px; }
      .stat-strip > div { flex: none; width: calc(50% - 10px); border-right: none !important; padding-right: 0 !important; margin-right: 0 !important; }
      .compare-grid-row { grid-template-columns: 1.4fr 0fr 1fr; }
      .compare-hide-mobile { display: none !important; }
      .btn-stack { flex-direction: column; align-items: stretch !important; }
      .btn-stack a, .btn-stack button { width: 100%; justify-content: center; }
      .announcement-bar { font-size: 11px; padding: 8px 12px; }
      .process-steps { gap: 12px; }
      .process-step-grid { grid-template-columns: 56px 1fr !important; }
      .footer-cta-section { padding: 60px 16px !important; }
      .packages-grid { max-width: 100%; }
      .navbar-inner { padding: 0 16px !important; }
      .nav-cta-text { display: none; }
      .nav-cta-icon { display: flex !important; }
      .hero-card { display: none; }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
    }

    /* Service hover — desktop only */
    @media (min-width: 601px) {
      .service-item:hover { padding-left: 16px !important; border-left: 3px solid #D4AF37 !important; }
    }

    /* Floating CTA */
    .floating-cta { position: fixed; bottom: 24px; right: 24px; z-index: 999; display: flex; align-items: center; gap: 10px; background: #D4AF37; color: #0F5132; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 14px; padding: 14px 24px; border-radius: 100px; box-shadow: 0 8px 32px rgba(212,175,55,.45); transition: transform .18s, box-shadow .18s; text-decoration: none; }
    .floating-cta:hover { transform: scale(1.05); box-shadow: 0 14px 44px rgba(212,175,55,.6); }
    @media (max-width: 600px) {
      .floating-cta { bottom: 16px; right: 16px; padding: 12px 18px; font-size: 13px; }
      .floating-cta .cta-label { display: none; }
    }
  `}</style>
);

/* ─── REVEAL WRAPPER ─────────────────────────────────────────────── */
const Reveal = ({
  children,
  type = "reveal",
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  type?: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale";
  delay?: number;
  style?: React.CSSProperties;
}) => {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`${type}${inView ? " visible" : ""}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >
      {children}
    </div>
  );
};

/* ─── ANNOUNCEMENT BAR ───────────────────────────────────────────── */
const AnnouncementBar = () => (
  <div className="announcement-bar" style={{ background: "#0F5132", color: "#fff", padding: "10px 24px", textAlign: "center", fontSize: "13px", fontWeight: 500, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
    🔥 Only 3 new client spots open this month —&nbsp;
    <a href={WA_URL} target="_blank" rel="noopener noreferrer"
      style={{ color: "#D4AF37", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px" }}>
      Reserve yours on WhatsApp →
    </a>
  </div>
);

/* ─── TICKER ─────────────────────────────────────────────────────── */
const tickItems = [
  "Google Ads · SEO · Conversion Websites",
  "AC Maintenance Lead Specialists",
  "Home Cleaning Lead Generation",
  "Kuwait · Bahrain · Oman · Dubai",
  "14-Day Website Launch",
  "Month-to-Month · No Lock-In",
  "WhatsApp Lead Delivery",
  "100% Exclusive Leads",
];
const Ticker = () => (
  <div style={{ background: "#f8f6f0", borderBottom: "1px solid #e8e4d8", overflow: "hidden", padding: "11px 0" }}>
    <div style={{ display: "flex", gap: "60px", animation: "ticker 28s linear infinite", whiteSpace: "nowrap", width: "max-content" }}>
      {[...tickItems, ...tickItems].map((t, i) => (
        <span key={i} style={{ fontSize: "11.5px", fontWeight: 600, color: "#0F5132", letterSpacing: ".1em", textTransform: "uppercase", flexShrink: 0, display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
          <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#D4AF37", display: "inline-block", flexShrink: 0 }} />
          {t}
        </span>
      ))}
    </div>
  </div>
);

/* ─── NAVBAR ─────────────────────────────────────────────────────── */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <div
  className="
    max-w-[1200px]
    mx-auto
    px-4
    sm:px-6
    lg:px-8
    h-[72px]
    flex
    items-center
    justify-between
  "
>
  {/* Brand */}
  <a
    href="/gulf-home-services"
    className="
      flex
      items-center
      gap-2
      sm:gap-3
      flex-shrink-0
    "
  >
    <img
      src={logo.src}
      alt="webOnRock Logo"
      className="
        w-14
        h-14
        sm:w-14
        sm:h-14
        lg:w-20
        lg:h-20
        object-contain
        
      "
    />

    <span
  className="
    text-[14px]
    xs:text-[17px]
    sm:text-[20px]
    lg:text-[22px]
    font-extrabold
    tracking-[-0.04em]
    text-[#0F5132]
    leading-none
  "
  style={{ fontFamily: "'Syne', sans-serif" }}
>
  webOnRock
  <span className="text-[#D4AF37]">.</span>
</span>
  </a>

  {/* Navigation */}
  <div
    className="
      hidden
      md:flex
      items-center
      gap-8
      lg:gap-10
      absolute
      left-1/2
      -translate-x-1/2
    "
  >
    {[
      ["Work", "#work"],
      ["Results", "#results"],
      ["Services", "#services"],
      ["Process", "#process"],
    ].map(([label, href]) => (
      <a
        key={label}
        href={href}
        className="
          text-[14px]
          font-medium
          text-[#666]
          hover:text-[#0F5132]
          transition-all
          duration-200
        "
      >
        {label}
      </a>
    ))}
  </div>

  {/* CTA */}
  <div className="flex items-center">
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="
        btn-gold
        flex
        items-center
        gap-2
        rounded-full
        px-4
        py-2.5
        sm:px-5
        sm:py-3
        text-xs
        sm:text-sm
        font-semibold
        shadow-md
        hover:shadow-lg
        transition-all
        duration-300
        whitespace-nowrap
      "
    >
      <WaIcon size={16} />
      <span className="hidden sm:inline">
        Let's Talk Growth
      </span>
      <span className="sm:hidden">
        Call
      </span>
    </a>
  </div>
</div>
      
      {/* Mobile menu */}

      {/* <style>{`.hamburger { display: none !important; } @media (max-width: 900px) { .hamburger { display: flex !important; } }`}</style>
      
      {menuOpen && (
        <div style={{
          position: "fixed", top: "68px", left: 0, right: 0, zIndex: 99,
          background: "#fff", borderBottom: "1px solid #e8e4d8",
          padding: "20px 24px", display: "flex", flexDirection: "column", gap: "16px",
          animation: "fadeUp .2s ease both",
        }}>
          {[["Work", "#work"], ["Results", "#results"], ["Services", "#services"], ["Process", "#process"]].map(([l, h]) => (
            <a key={l} href={h} onClick={() => setMenuOpen(false)}
              style={{ fontSize: "16px", fontWeight: 600, color: "#0F1A0E", padding: "8px 0", borderBottom: "1px solid #f0ede4" }}>
              {l}
            </a>
          ))}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ justifyContent: "center", marginTop: "8px" }}>
            <WaIcon size={16} /> Book a Free Call
          </a>
        </div>

      )} */}
    </>
  );
};

/* ─── HERO ───────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="hero-section" style={{ background: "#fff", padding: "90px 28px 100px", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: .4, backgroundImage: "radial-gradient(circle, #d4af3722 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
    <div style={{ position: "absolute", top: 0, right: 0, width: "420px", height: "420px", background: "#0F5132", borderRadius: "0 0 0 100%", opacity: .04, pointerEvents: "none" }} />

    <div style={{ maxWidth: "1160px", margin: "0 auto", position: "relative" }}>
      <div className="hero-grid">
        {/* LEFT */}
        <div>
          <div className="pill-label animate-fade-up" style={{ marginBottom: "28px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4AF37", animation: "pulse 2s infinite", display: "inline-block" }} />
            Only 3 spots available this month
          </div>

          <h1 className="syne animate-fade-up-2" style={{ fontSize: "clamp(2.4rem, 5.2vw, 3.4rem)", fontWeight: 800, lineHeight: 1.06, color: "#0F1A0E", letterSpacing: "-.03em", marginBottom: "24px" }}>
            Your Business Deserves a Website That <br />
            <span className="gold-shimmer"> Wins Clients.</span>
          </h1>

          <p className="animate-fade-up-3" style={{ fontSize: "17px", lineHeight: 1.75, color: "#4a5568", maxWidth: "500px", marginBottom: "36px" }}>
            We help AC maintenance and cleaning companies in <strong style={{ color: "#0F5132" }}>Kuwait, Bahrain, Dubai and Oman</strong> generate qualified leads through Google, SEO and conversion-focused websites.
          </p>

          <div className="animate-fade-up-4 btn-stack" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "52px" }}>

            <a href="#book-call" className="btn-gold">
              <PhIcon size={18} /> Book a Call
            </a>

            <a href="#work" className="btn-ghost-green">
              See Our Work <ArrowRight />
            </a>
          </div>

          <div
  className="
    grid
    grid-cols-2
    lg:grid-cols-4
    gap-4
    mt-10
    animate-fade-up-5
  "
>
  {[
    { n: "14", s: "Days", l: "Website Live" },
    { n: "3×", s: "", l: "Avg. Lead Uplift" },
    { n: "100%", s: "", l: "Exclusive Leads" },
    { n: "0", s: "Lock-In", l: "Cancel Anytime" },
  ].map(({ n, s, l }) => (
    <div
      key={l}
      className="
        bg-white
        rounded-2xl
        p-5
        border
        border-[#EAEAEA]
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1
        transition-all
        duration-300
        text-center
      "
    >
      <div className="flex items-center justify-center gap-1">
        <span
          className="
            syne
            text-[28px]
            sm:text-[34px]
            font-extrabold
            text-[#0F5132]
            leading-none
          "
        >
          {n}
        </span>

        {s && (
          <span
            className="
              text-[13px]
              sm:text-[15px]
              font-semibold
              text-[#0F5132]
            "
          >
            {s}
          </span>
        )}
      </div>

      <p
        className="
          text-[12px]
          sm:text-[13px]
          text-[#777]
          mt-3
          font-medium
        "
      >
        {l}
      </p>
    </div>
  ))}
</div>

        </div>

        {/* RIGHT — Results Card */}
        <div className="hero-card animate-fade-up-4" style={{
          background: "#fff", borderRadius: "16px", padding: "28px 28px 24px",
          border: "1px solid #e5e7eb", boxShadow: "0 8px 32px rgba(15,81,50,.10)",
          position: "relative", overflow: "hidden", animation: "floatUp 5s ease-in-out infinite",
        }}>
          <div style={{ position: "absolute", top: 0, left: "28px", right: "28px", height: "3px", background: "#D4AF37", borderRadius: "0 0 4px 4px" }} />
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#0F5132", marginBottom: "4px" }}>Case Study</p>
          <p style={{ fontSize: "15px", fontWeight: 800, color: "#0F1A0E", marginBottom: "16px", fontFamily: "'Syne', sans-serif" }}>Results We've Delivered</p>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: 700, background: "rgba(212,175,55,.12)", color: "#96700a", border: "1px solid rgba(212,175,55,.3)", borderRadius: "20px", padding: "3px 10px", marginBottom: "14px" }}>
            🏫 Lead generation for School
          </span>

          {/* Laptop mockup */}
          <div style={{ position: "relative", marginBottom: "18px" }}>
            <div style={{ background: "#d1d5db", borderRadius: "8px 8px 0 0", padding: "7px 7px 0", boxShadow: "0 2px 8px rgba(0,0,0,.10)" }}>
              <div style={{ background: "#f3f6f4", borderRadius: "4px 4px 0 0", overflow: "hidden", height: "110px" }}>
                <div style={{ background: "#e5e7eb", height: "16px", display: "flex", alignItems: "center", padding: "0 8px", gap: "4px" }}>
                  {["#f87171","#fbbf24","#34d399"].map(c => <div key={c} style={{ width: "5px", height: "5px", borderRadius: "50%", background: c }} />)}
                </div>
                <div style={{ background: "#fff", height: "14px", display: "flex", alignItems: "center", padding: "0 8px", gap: "6px", borderBottom: "1px solid #e5e7eb" }}>
                  <div style={{ width: "32px", height: "6px", background: "#0F5132", borderRadius: "2px" }} />
                  {[18,22,16].map((w,i) => <div key={i} style={{ width: w, height: "5px", background: "#d1d5db", borderRadius: "2px" }} />)}
                  <div style={{ width: "22px", height: "6px", background: "#D4AF37", borderRadius: "2px", marginLeft: "auto" }} />
                </div>
                <div style={{ background: "#0F5132", height: "42px", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 10px", gap: "4px" }}>
                  <div style={{ height: "5px", width: "70%", background: "rgba(255,255,255,.35)", borderRadius: "2px" }} />
                  <div style={{ height: "5px", width: "50%", background: "rgba(255,255,255,.35)", borderRadius: "2px" }} />
                  <div style={{ width: "30px", height: "6px", background: "#D4AF37", borderRadius: "2px", marginTop: "2px" }} />
                </div>
                <div style={{ padding: "6px 10px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  {["80%","60%","72%"].map((w,i) => <div key={i} style={{ height: "4px", width: w, background: "#e5e7eb", borderRadius: "2px" }} />)}
                </div>
              </div>
              <div style={{ background: "#9ca3af", height: "5px", borderRadius: "0 0 3px 3px" }} />
            </div>
            <div style={{ width: "60px", height: "4px", background: "#d1d5db", borderRadius: "0 0 4px 4px", margin: "0 auto" }} />

            <div style={{ position: "absolute", top: "6px", right: 0, display: "flex", gap: "5px" }}>
              {[
                { score: 100, label: "SEO",    color: "#0F5132", pct: 1.00 },
                { score: 93,  label: "Access.", color: "#D4AF37", pct: 0.93 },
                { score: 94,  label: "Speed",  color: "#0ea5e9", pct: 0.94 },
              ].map(({ score, label, color, pct }) => {
                const C = 2 * Math.PI * 11;
                return (
                  <div key={label} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "5px 7px", display: "flex", flexDirection: "column", alignItems: "center", gap: "1px", boxShadow: "0 2px 6px rgba(0,0,0,.08)" }}>
                    <svg width="28" height="28" viewBox="0 0 28 28">
                      <circle cx="14" cy="14" r="11" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                      <circle cx="14" cy="14" r="11" fill="none" stroke={color} strokeWidth="3"
                        strokeDasharray={`${C * pct} ${C}`} strokeDashoffset={-C * 0.9}
                        strokeLinecap="round" transform="rotate(-90 14 14)" />
                    </svg>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#0F1A0E", lineHeight: 1 }}>{score}</span>
                    <span style={{ fontSize: "9px", color: "#888", lineHeight: 1 }}>{label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px", display: "flex", flexDirection: "column", gap: "7px" }}>
            {["Consistent admission inquiries from day one","Ranked for local search terms in 30 days","Perfect 100/100 SEO score on PageSpeed","Mobile-first, fast-loading design"].map(text => (
              <li key={text} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#374151", lineHeight: 1.4 }}>
                <span style={{ flexShrink: 0, width: "6px", height: "6px", borderRadius: "50%", background: "#0F5132", opacity: .7 }} />
                {text}
              </li>
            ))}
          </ul>

           
          <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "14px 0" }} />
          <div style={{ background: "#f0faf5", border: "1px solid #c6e5d6", borderRadius: "8px", padding: "10px 12px", marginBottom: "12px" }}>
            <p style={{ fontSize: "12px", color: "#166534", lineHeight: 1.5, margin: 0 }}>
              📈 <strong style={{ color: "#0F1A0E" }}>Result:</strong> Increased organic visibility and qualified lead generation within the first month.
            </p>
          </div>
          <a href="#work">
           <span className="bg-green-900 text-white/90 text-sm font-medium py-1 px-3 rounded-md hover:shadow-md hover:bg-green-900/90 " style={{ padding: "4px 8px",marginLeft: "68px" }}>Know more</span>
          </a>
          <p style={{ fontSize: "10.5px", color: "#adb5a0", marginTop: "10px", fontStyle: "italic", textAlign: "center" }}>Built to generate leads, not just look good.</p>
        </div>
      </div>
    </div>
  </section>
);

/* ─── CREDIBILITY STRIP ──────────────────────────────────────────── */
const CredStrip = () => (
  <section className="sm:hidden" style={{ background: "#0F5132", padding: "48px 28px" }}>
    <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
      <Reveal>
        <p style={{ textAlign: "center", fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.4)", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: "32px" }}>
          Craft proven in India · Now serving the Gulf
        </p>
      </Reveal>

      <div className="
  grid
  grid-cols-2
  md:grid-cols-3
  lg:grid-cols-5
  gap-4
  mt-10
">
  {[
    { n: "134e", s: "days", l: "Website live" },
    { n: "3×", s: "", l: "Avg. lead uplift" },
    { n: "100%", s: "", l: "Exclusive leads" },
    { n: "0", s: "", l: "Lock-in contracts" },
    { n: "5★", s: "", l: "Client rating" },
  ].map((item) => (
    <div
      key={item.l}
      className="
        bg-white
        rounded-2xl
        p-5
        text-center
        border
        border-[#E8E8E8]
        shadow-sm
        hover:shadow-md
        transition-all
      "
    >
      <h3
        className="
          text-3xl
          md:text-4xl
          font-extrabold
          text-[#0F5132]
          leading-none
        "
      >
        {item.n}
      </h3>

      {item.s && (
        <div className="text-[#0F5132] font-bold text-sm mt-1">
          {item.s}
        </div>
      )}

      <p className="text-gray-500 text-sm mt-3">
        {item.l}
      </p>
    </div>
  ))}
</div>
    </div>
  </section>
);

/* ─── HONEST SECTION ─────────────────────────────────────────────── */
const HonestSection = () => (
  <section style={{ background: "#fff", padding: "100px 28px" }}>
    <div style={{ maxWidth: "980px", margin: "0 auto" }}>
      <Reveal style={{ textAlign: "center", marginBottom: "56px" }}>
        <span className="pill-label-green" style={{ marginBottom: "16px", display: "inline-flex" }}>Our Story</span>
        <h2 className="syne" style={{ fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 800, color: "#0F1A0E", letterSpacing: "-.03em", lineHeight: 1.15, marginTop: "16px", marginBottom: "20px" }}>
          No Gulf Case Studies Yet?<br />
          <span style={{ color: "#0F5132" }}>That's Actually Good News For You.</span>
        </h2>
        <p style={{ fontSize: "17px", lineHeight: 1.8, maxWidth: "680px", margin: "0 auto" }}>
          After 2 years building conversion-focused lead systems for service businesses across India and USA, we're bringing that proven playbook to the Gulf — where most AC and cleaning companies are still invisible online or paying generalist agencies who don't understand home services.
        </p>
      </Reveal>

      <div className="honest-grid">
        {[
          { icon: "🏗️", title: "Proven systems", body: "The conversion architecture and Google Ads playbook we use has driven results for service businesses for years. Same signals, same algorithm, same buyer psychology." },
          { icon: "🎯", title: "Specialist focus", body: "We only work with AC maintenance and home cleaning companies. Every template, keyword list, and ad copy is purpose-built — never recycled from an unrelated industry." },
          { icon: "🤝", title: "Skin in the game", body: "Early Gulf clients get our best attention and rates. When you win your first season with us, that's the case study that builds our Gulf reputation — together." },
        ].map(({ icon, title, body }, i) => (
          <Reveal key={title} type="reveal-scale" delay={i * 0.12}>
            <div className="card-lift" style={{ background: "#f9f9f7", border: "1px solid #ede9dc", borderRadius: "12px", padding: "32px 28px", borderTop: "3px solid #D4AF37", height: "100%" }}>
              <p style={{ fontSize: "32px", marginBottom: "16px" }}>{icon}</p>
              <p className="syne" style={{ fontSize: "16px", fontWeight: 700, color: "#0F1A0E", marginBottom: "10px" }}>{title}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#666" }}>{body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <p style={{ color: "#666", marginTop: "32px", textAlign: "center", fontSize: "14px", lineHeight: 1.8 }}>
          <strong style={{ color: "#0F5132" }}>#Every Gulf Agency</strong> you see with dozens of Gulf case studies? <strong style={{ color: "#0F5132" }}>started with Zero</strong>, just like we are now. The difference is you get our absolute best work — not a junior passed the account after the sales pitch. You deal directly with the <strong style={{ color: "#0F5132" }}>Founder.</strong>
        </p>
      </Reveal>
    </div>
  </section>
);

/* ─── WORK ───────────────────────────────────────────────────────── */
const Work = () => (
  <section id="work" style={{ background: "#f9f8f5", padding: "100px 28px", borderTop: "1px solid #ede9dc" }}>
    <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
      <Reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px", flexWrap: "wrap", gap: "20px" }}>
        <div>
          <span className="pill-label-green">Selected Work</span>
          <h2 className="syne" style={{ fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 800, color: "#0F1A0E", marginTop: "14px", letterSpacing: "-.03em" }}>What We Build</h2>
        </div>
        <p style={{ fontSize: "14px", color: "#777", maxWidth: "300px", textAlign: "right", lineHeight: 1.6 }}>
          India-market projects — same methodology & systems now deployed for Gulf home service companies.
        </p>
      </Reveal>

      <div className="work-grid">
        {[
          { tag: "AC Maintenance · India", type: "Lead Gen Website + Google Ads", name: "CoolAir Bangalore", result: "214% lead increase in 60 days", metrics: [{ k: "Leads/mo", v: "110+" }, { k: "Load time", v: "0.5s" }, { k: "ROAS", v: "3.8×" }], featured: false },
          { tag: "Home Cleaning · India", type: "SEO + Conversion Architecture", name: "FreshNest Mumbai", result: "Page 1 for 12 keywords in 45 days", metrics: [{ k: "Organic", v: "85/mo" }, { k: "CPL Drop", v: "↓61%" }, { k: "Keywords", v: "12 P1" }], featured: true },
          { tag: "Multi-Service · India", type: "Full-Funnel Digital Build", name: "HomeProMax Chennai", result: "4.2× ROAS, expanded to 3 cities", metrics: [{ k: "ROAS", v: "4.2×" }, { k: "Repeat", v: "+52%" }, { k: "Cities", v: "3" }], featured: false },
        ].map(({ tag, type, name, result, metrics, featured }, i) => (
          <Reveal key={name} type="reveal-scale" delay={i * 0.12}>
            <div className="card-lift" style={{ background: "#fff", borderRadius: "12px", overflow: "hidden", border: featured ? "2px solid #D4AF37" : "1px solid #e8e4d8", boxShadow: featured ? "0 8px 32px rgba(212,175,55,.18)" : "0 2px 12px rgba(0,0,0,.04)", position: "relative" }}>
              {featured && (
                <div style={{ position: "absolute", top: "16px", right: "16px", background: "#D4AF37", color: "#0F5132", fontSize: "10px", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", padding: "4px 12px", borderRadius: "100px" }}>Best Results</div>
              )}
              <div style={{ background: "#0F5132", padding: "28px 28px 24px" }}>
                <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#D4AF37", marginBottom: "10px" }}>{tag}</p>
                <p className="syne" style={{ fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{name}</p>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,.5)" }}>{type}</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderBottom: "1px solid #f0ede4" }}>
                {metrics.map(({ k, v }) => (
                  <div key={k} style={{ padding: "16px 12px", textAlign: "center", borderRight: "1px solid #f0ede4" }}>
                    <p className="syne" style={{ fontSize: "20px", fontWeight: 800, color: "#0F5132" }}>{v}</p>
                    <p style={{ fontSize: "10px", color: "#999", marginTop: "3px", textTransform: "uppercase", letterSpacing: ".06em" }}>{k}</p>
                  </div>
                ))}
              </div>
              <div style={{ padding: "18px 24px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "16px" }}>📈</span>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#0F1A0E" }}>{result}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal style={{ textAlign: "center", marginTop: "48px" }}>
        <p style={{ fontSize: "13px", color: "#999", marginBottom: "20px" }}>India-market results — same systems, now available for Gulf AC & cleaning companies.</p>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
          <WaIcon size={16} /> Become Our First Gulf Case Study
        </a>
      </Reveal>
    </div>
  </section>
);

/* ─── RESULTS ────────────────────────────────────────────────────── */
const Results = () => (
  <section id="results" style={{ background: "#0F5132", padding: "100px 28px" }}>
    <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
      <Reveal style={{ textAlign: "center", marginBottom: "64px" }}>
        <span className="pill-label" style={{ background: "rgba(212,175,55,.15)", color: "#D4AF37", border: "1px solid rgba(212,175,55,.3)", display: "inline-flex" }}>Proven Results</span>
        <h2 className="syne" style={{ fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 800, color: "#fff", marginTop: "16px", letterSpacing: "-.03em" }}>Numbers That Drive Decisions</h2>
      </Reveal>

      <div className="results-grid" style={{ background: "rgba(255,255,255,.08)", borderRadius: "12px", overflow: "hidden" }}>
        {[
          { n: "6+", l: "websites getting organic traffic", sub: "vs. previous marketing method" },
          { n: "3–4 weeks", l: "Website launch time", sub: "From kickoff to live" },
          { n: "10+", l: "projects delivered", sub: "across 5 industries" },
        ].map(({ n, l, sub }, i) => (
          <Reveal key={n} delay={i * 0.12}>
            <div style={{ background: "#0F5132", padding: "48px 32px", textAlign: "center", transition: "background .2s", cursor: "default" }}
              onMouseEnter={e => e.currentTarget.style.background = "#0d4429"}
              onMouseLeave={e => e.currentTarget.style.background = "#0F5132"}
            >
              <p className="syne gold-shimmer" style={{ fontSize: "clamp(2.5rem,5vw,52px)", fontWeight: 800, lineHeight: 1 }}>{n}</p>
              <p style={{ fontSize: "14px", fontWeight: 600, color: "#fff", marginTop: "14px", marginBottom: "6px" }}>{l}</p>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,.4)" }}>{sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SERVICES ───────────────────────────────────────────────────── */
const Services = () => (
  <section id="services" style={{ background: "#fff", padding: "100px 28px", borderTop: "1px solid #f0f0f0" }}>
    <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
      <div className="services-grid">
        <Reveal type="reveal-left">
          <div className="services-sticky" style={{ position: "sticky", top: "88px" }}>
            <span className="pill-label-green">What We Do</span>
            <h2 className="syne" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", fontWeight: 800, color: "#0F1A0E", letterSpacing: "-.03em", lineHeight: 1.2, marginTop: "16px", marginBottom: "20px" }}>
              Everything Your Pipeline Needs to Stay Full
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#666", marginBottom: "32px" }}>
              We don't sell "digital packages." We build lead pipelines — and we own the outcome with you.
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <WaIcon size={16} /> Talk Strategy
            </a>
          </div>
        </Reveal>

        <div>
          {[
            { n: "01", title: "Conversion Website", sub: "Live in 14 business days", body: "Not a template. A purpose-built lead machine — mobile-first, sub-0.5s load, Arabic-friendly, WhatsApp CTA integrated. Engineered to rank and convert.", tags: ["Google-ready", "Core Web Vitals", "WhatsApp CTA", "Arabic-friendly"] },
            { n: "02", title: "Google Ads Management", sub: "Results from Week 1", body: "Precision campaigns targeting exact-match buyers in your service zones. No branded fluff, no wasted budget on tire-kickers. Every dirham tracked to a lead.", tags: ["Search campaigns", "Local targeting", "Lead-focused bidding", "Weekly reports"] },
            { n: "03", title: "Local SEO", sub: "Own your city's search results", body: "Google Business optimisation, local citation building, and content architecture that puts you on Page 1 for 'AC repair Kuwait' and every local variation.", tags: ["Google Business", "Local citations", "Page 1 targeting", "Arabic keywords"] },
            { n: "04", title: "WhatsApp Lead Pipeline", sub: "Leads where you already work", body: "Automated CRM bridge pushing every new lead directly to WhatsApp. Weekly performance reports via WhatsApp. Zero new software to learn.", tags: ["Auto-notifications", "Weekly digest", "Lead tracking", "Zero friction"] },
          ].map(({ n, title, sub, body, tags }, i) => (
            <Reveal key={n} delay={i * 0.08}>
              <div className="service-item" style={{ padding: "32px 0", borderBottom: i < 3 ? "1px solid #f0ede4" : "none", transition: "padding-left .2s, border-left .2s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span className="syne" style={{ fontSize: "12px", fontWeight: 800, color: "#D4AF37", letterSpacing: ".1em" }}>{n}</span>
                    <h3 className="syne" style={{ fontSize: "19px", fontWeight: 700, color: "#0F1A0E", letterSpacing: "-.02em" }}>{title}</h3>
                  </div>
                  <span style={{ fontSize: "11px", color: "#0F5132", fontWeight: 700, letterSpacing: ".06em", whiteSpace: "nowrap", background: "rgba(15,81,50,.07)", padding: "4px 10px", borderRadius: "4px" }}>{sub}</span>
                </div>
                <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#555", marginBottom: "16px" }}>{body}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {tags.map(t => (
                    <span key={t} style={{ fontSize: "11px", fontWeight: 600, color: "#0F5132", background: "rgba(15,81,50,.06)", border: "1px solid rgba(15,81,50,.12)", borderRadius: "4px", padding: "3px 10px" }}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── PACKAGES ───────────────────────────────────────────────────── */
const Packages = () => (
  <section style={{ background: "#f9f8f5", padding: "100px 28px", borderTop: "1px solid #ede9dc" }}>
    <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
      <Reveal style={{ textAlign: "center", marginBottom: "56px" }}>
        <span className="pill-label-green">Packages</span>
        <h2 className="syne" style={{ fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 800, color: "#0F1A0E", marginTop: "16px", letterSpacing: "-.03em" }}>Pick Your Growth Level</h2>
        <p style={{ fontSize: "15px", color: "#777", marginTop: "12px" }}>No lock-in. Cancel anytime. Results within 30 days.</p>
      </Reveal>

      <div className="packages-grid">
        {[
          { name: "GroundForce", target: "New to digital", tier: "Entry", desc: "Build your first real digital presence. Get found locally on Google. Start receiving leads this month.", setupKWD: "KWD 250–350", setupUSD: "~$800–$1,150 USD", retainerKWD: "KWD 45–60", retainerNote: "Optional monthly retainer", features: ["Conversion landing page", "Google Business setup", "WhatsApp CTA + lead alerts", "Basic local SEO", "Monthly WhatsApp report"], cta: "Start Getting Found", featured: false },
          { name: "GulfSurge", target: "Most Popular", tier: "Growth", desc: "Full website + Google Ads + SEO working together to dominate your service zone with aggressive lead generation.", setupKWD: "KWD 550–850", setupUSD: "~$1,800–$2,800 USD", retainerKWD: "KWD 150–250", retainerNote: "Monthly · Ads + SEO + reporting", features: ["Full conversion website", "Google Ads management", "Geo-targeted landing pages", "Arabic SEO architecture", "CRM + WhatsApp pipeline", "Weekly performance digest"], cta: "Claim Your Spot", featured: true },
          { name: "ApexReach", target: "Market leaders", tier: "Dominance", desc: "Multi-channel, retargeting, competitor displacement, and a dedicated account manager for regional market ownership.", setupKWD: "KWD 1,200–2,000", setupUSD: "~$3,900–$6,500 USD", retainerKWD: "KWD 350–500", retainerNote: "Monthly · Full-funnel management", features: ["Multi-location infrastructure", "Google + Meta full-funnel", "Retargeting campaigns", "Competitor gap strategy", "Dedicated account manager", "Real-time lead dashboard"], cta: "Talk Strategy", featured: false },
        ].map(({ name, target, tier, desc, setupKWD, setupUSD, retainerKWD, retainerNote, features, cta, featured }, i) => (
          <Reveal key={name} type="reveal-scale" delay={i * 0.12}>
            <div className="card-lift" style={{ background: featured ? "#0F5132" : "#fff", border: featured ? "2px solid #D4AF37" : "1px solid #e8e4d8", borderRadius: "14px", overflow: "hidden", boxShadow: featured ? "0 20px 60px rgba(15,81,50,.25)" : "0 2px 12px rgba(0,0,0,.04)", transform: featured ? "scale(1.03)" : "scale(1)", position: "relative" }}>
              {featured && <div style={{ background: "#D4AF37", color: "#0F5132", textAlign: "center", fontSize: "11px", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", padding: "8px" }}>Most Popular — Best Results</div>}
              <div style={{ padding: "28px 24px" }}>
                <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: "8px", color: featured ? "rgba(212,175,55,.75)" : "#D4AF37" }}>{target}</p>
                <h3 className="syne" style={{ fontSize: "24px", fontWeight: 800, color: featured ? "#fff" : "#0F1A0E", marginBottom: "2px", letterSpacing: "-.02em" }}>{name}</h3>
                <p style={{ fontSize: "10px", color: featured ? "rgba(255,255,255,.38)" : "#aaa", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: "14px" }}>{tier} Package</p>
                <p style={{ fontSize: "13px", lineHeight: 1.75, color: featured ? "rgba(255,255,255,.6)" : "#666", marginBottom: "18px" }}>{desc}</p>
                <div style={{ background: featured ? "rgba(0,0,0,.2)" : "#f9f8f5", borderRadius: "10px", padding: "14px 16px", marginBottom: "20px" }}>
                  <p style={{ fontSize: "10px", color: featured ? "rgba(255,255,255,.35)" : "#999", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: "6px" }}>One-time setup</p>
                  <p className="syne" style={{ fontSize: "22px", fontWeight: 800, color: featured ? "#fff" : "#0F1A0E", letterSpacing: "-.02em", lineHeight: 1, marginBottom: "3px" }}>{setupKWD}</p>
                  <p style={{ fontSize: "11px", color: featured ? "rgba(255,255,255,.38)" : "#aaa", marginBottom: 0 }}>{setupUSD}</p>
                  <div style={{ borderTop: `1px solid ${featured ? "rgba(255,255,255,.1)" : "#e8e4d8"}`, marginTop: "12px", paddingTop: "12px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                      <span className="syne" style={{ fontSize: "16px", fontWeight: 800, color: featured ? "#D4AF37" : "#0F5132", letterSpacing: "-.01em", lineHeight: 1 }}>{retainerKWD}</span>
                      <span style={{ fontSize: "11px", color: featured ? "rgba(255,255,255,.38)" : "#aaa" }}>/month</span>
                    </div>
                    <p style={{ fontSize: "10px", color: featured ? "rgba(255,255,255,.32)" : "#999", marginTop: "3px" }}>{retainerNote}</p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                  {features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Check color={featured ? "#D4AF37" : "#0F5132"} />
                      <span style={{ fontSize: "13px", color: featured ? "rgba(255,255,255,.78)" : "#444" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: `1px solid ${featured ? "rgba(255,255,255,.1)" : "#e8e4d8"}`, paddingTop: "14px", marginBottom: "18px" }}>
                  <p style={{ fontSize: "11px", lineHeight: 1.6, color: featured ? "rgba(255,255,255,.32)" : "#aaa", margin: 0 }}>
                    50% upfront · 50% on delivery<br />Retainer billed monthly via Wise / Payoneer
                  </p>
                </div>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={featured ? "btn-gold" : "btn-ghost-green"} style={{ width: "100%", justifyContent: "center" }}>
                  <WaIcon size={15} /> {cta}
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p style={{ textAlign: "center", fontSize: "13px", color: "#aaa", marginTop: "36px", lineHeight: 1.6 }}>
          All prices in Kuwaiti Dinar (KWD). USD shown for reference only.<br />
          Bahrain & Oman clients billed in BHD / OMR equivalent.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ─── PROCESS ────────────────────────────────────────────────────── */
const Process = () => (
  <section id="process" style={{ background: "#0F5132", padding: "100px 28px" }}>
    <div style={{ maxWidth: "860px", margin: "0 auto" }}>
      <Reveal style={{ textAlign: "center", marginBottom: "64px" }}>
        <span className="pill-label" style={{ background: "rgba(212,175,55,.15)", color: "#D4AF37", border: "1px solid rgba(212,175,55,.3)", display: "inline-flex" }}>How It Works</span>
        <h2 className="syne" style={{ fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 800, color: "#fff", marginTop: "16px", letterSpacing: "-.03em" }}>Three Steps to a Full Calendar</h2>
      </Reveal>

      <div className="process-steps" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {[
          { n: "01", emoji: "📱", title: "Message Us on WhatsApp", body: "Tell us your services and city. We ask the right questions — no pitch deck, no pressure. Just a 15-minute conversation to understand what you need.", tag: "We reply within the hour", highlight: false },
          { n: "02", emoji: "🚀", title: "We Build Everything", body: "Our team builds your conversion website and launches targeted Google Ads for your exact service zones. You provide info once — we handle every pixel and keyword.", tag: "Live in 7–14 business days", highlight: true },
          { n: "03", emoji: "📞", title: "Leads Come Directly to You", body: "Homeowners searching Google find you at the top. Every call, WhatsApp, and booking goes straight to you — exclusive, never shared with competitors.", tag: "First leads within 30 days", highlight: false },
        ].map(({ n, emoji, title, body, tag, highlight }, i) => (
          <Reveal key={n} type="reveal-left" delay={i * 0.14}>
            <div className="process-step-grid" style={{
              display: "grid", gridTemplateColumns: "76px 1fr",
              background: highlight ? "rgba(212,175,55,.1)" : "rgba(255,255,255,.05)",
              border: highlight ? "1px solid rgba(212,175,55,.3)" : "1px solid rgba(255,255,255,.08)",
              borderRadius: "10px", overflow: "hidden",
            }}>
              <div style={{ background: highlight ? "#D4AF37" : "rgba(255,255,255,.06)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", padding: "24px 12px" }}>
                <span style={{ fontSize: "22px" }}>{emoji}</span>
                <span className="syne" style={{ fontSize: "11px", fontWeight: 800, color: highlight ? "#0F5132" : "rgba(255,255,255,.35)", letterSpacing: ".08em" }}>{n}</span>
              </div>
              <div style={{ padding: "26px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
                  <h3 className="syne" style={{ fontSize: "17px", fontWeight: 700, color: "#fff", letterSpacing: "-.01em" }}>{title}</h3>
                  <span style={{ fontSize: "10px", fontWeight: 700, color: "#D4AF37", background: "rgba(212,175,55,.12)", border: "1px solid rgba(212,175,55,.2)", padding: "3px 10px", borderRadius: "100px", letterSpacing: ".06em", whiteSpace: "nowrap" }}>{tag}</span>
                </div>
                <p style={{ fontSize: "14px", lineHeight: 1.75, color: "rgba(255,255,255,.6)" }}>{body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── COMPARE ────────────────────────────────────────────────────── */
const Compare = () => (
  <section style={{ background: "#fff", padding: "100px 28px", borderTop: "1px solid #f0f0f0" }}>
    <div style={{ maxWidth: "920px", margin: "0 auto" }}>
      <Reveal style={{ textAlign: "center", marginBottom: "56px" }}>
        <span className="pill-label-green">Why Webonrock</span>
        <h2 className="syne" style={{ fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 800, color: "#0F1A0E", marginTop: "16px", letterSpacing: "-.03em" }}>The Honest Comparison</h2>
      </Reveal>

      <Reveal type="reveal-scale">
        <div style={{ border: "1px solid #e8e4d8", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,.05)" }}>
          <div className="compare-grid-row" style={{ background: "#0F5132" }}>
            {["What you need", "Generic agency", "Webonrock"].map((h, i) => (
              <div key={h} className={i === 1 ? "compare-hide-mobile" : ""} style={{ padding: "16px 24px", fontSize: "11px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: i === 2 ? "#D4AF37" : "rgba(255,255,255,.5)", textAlign: i > 0 ? "center" : "left" }}>{h}</div>
            ))}
          </div>
          {[
            ["Home service specialist, not generic", "❌ Any industry", "✅ AC & cleaning only"],
            ["Exclusive leads — not shared", "❌ Lead pools", "✅ 100% exclusive"],
            ["Live website in 14 days", "❌ 2–4 months", "✅ 14 business days"],
            ["No long-term contracts", "❌ 12-month lock-in", "✅ Month-to-month"],
            ["WhatsApp-native reporting", "❌ PDF no one reads", "✅ WhatsApp weekly"],
            ["Gulf local SEO", "❌ Generic SEO", "✅ Geo-targeted Gulf"],
            ["Results tracked as leads, not clicks", "❌ Vanity metrics", "✅ Leads counted only"],
          ].map(([need, them, us], i) => (
            <div key={i} className="compare-grid-row" style={{ background: i % 2 === 0 ? "#fff" : "#faf9f6", borderBottom: i < 6 ? "1px solid #f0ede4" : "none" }}>
              <div style={{ padding: "14px 24px", fontSize: "13px", color: "#333", fontWeight: 500 }}>{need}</div>
              <div className="compare-hide-mobile" style={{ padding: "14px 24px", fontSize: "13px", color: "#aaa", textAlign: "center" }}>{them}</div>
              <div style={{ padding: "14px 24px", fontSize: "13px", color: "#0F5132", fontWeight: 700, textAlign: "center" }}>{us}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal style={{ textAlign: "center", marginTop: "40px" }}>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
          <WaIcon size={16} /> Start With a Free Strategy Call
        </a>
      </Reveal>
    </div>
  </section>
);

/* ─── TESTIMONIALS ───────────────────────────────────────────────── */
const Testimonials = () => (
  <section style={{ background: "#f9f8f5", padding: "100px 28px", borderTop: "1px solid #ede9dc" }}>
    <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
      <Reveal style={{ textAlign: "center", marginBottom: "56px" }}>
        <span className="pill-label-green">Client Stories</span>
        <h2 className="syne" style={{ fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 800, color: "#0F1A0E", marginTop: "16px", letterSpacing: "-.03em" }}>Straight from the Clients</h2>
      </Reveal>

      <div className="testimonials-grid">
        {[
          { q: "Increased our Brand Value and visibility in the market. We are getting more Trustability than before.", name: "Abraham Shankar", co: "Reholife, India", result: "More Trust & Visibility" },
          { q: "Super reliable and trustworthy. They delivered exactly what they promised. Looking forward to working with them again.", name: "Sanjith.", co: "VelzFlow, USA", result: "Super Reliable" },
          { q: "Got leads from Google organically after the website launch. Website is clean and fast. Highly recommend.", name: "Mercy School Admin", co: "Mercy School, India", result: "Got more Leads in 1 month." },
        ].map(({ q, name, co, result }, i) => (
          <Reveal key={name} type="reveal-scale" delay={i * 0.12}>
            <div className="card-lift" style={{ background: "#fff", borderRadius: "12px", padding: "36px 28px", border: "1px solid #e8e4d8", boxShadow: "0 2px 12px rgba(0,0,0,.04)", height: "100%" }}>
              <p style={{ fontSize: "42px", color: "#D4AF37", lineHeight: 1, marginBottom: "12px", fontFamily: "Georgia,serif", opacity: .6 }}>"</p>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#555", marginBottom: "24px", fontStyle: "italic" }}>{q}</p>
              <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>{[...Array(5)].map((_, i) => <Star key={i} />)}</div>
              <div style={{ borderTop: "1px solid #f0ede4", paddingTop: "16px" }}>
                <p style={{ fontSize: "14px", fontWeight: 700, color: "#0F1A0E" }}>{name}</p>
                <p style={{ fontSize: "12px", color: "#aaa", marginTop: "2px" }}>{co}</p>
                <div style={{ marginTop: "12px", background: "rgba(15,81,50,.06)", border: "1px solid rgba(15,81,50,.15)", borderRadius: "6px", padding: "7px 14px", display: "inline-block" }}>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "#0F5132" }}>📈 {result}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── FAQ ────────────────────────────────────────────────────────── */
const faqs = [
  { q: "You don't have Gulf case studies yet — why should I trust you?", a: "Fair question. We have 3 years of results building lead systems for home service businesses in India. The Google algorithm, the ad auction, the conversion principles — they're identical everywhere. What changes is local keywords and the competitor landscape, and we research those before we start. You benefit from proven systems without paying the premium of a 'Gulf-experienced' agency that's still learning what actually works." },
  { q: "You're based in India — how will we actually communicate?", a: "All project work happens via Zoom calls, WhatsApp, and a shared Google Drive folder. The time difference between India and the Gulf is 1.5–2.5 hours — we schedule calls at your convenience, morning or evening." },
  { q: "Do you have Gulf clients already?", a: "Not yet — and we say that openly on our page. We're actively expanding to the Gulf and offering introductory pricing for our first 3 Gulf clients. That means you get a founder-level developer working directly on your project, not a junior handed an account." },
  { q: "What makes this different from a regular web design agency?", a: "Most web agencies hand you a website and walk away. We build lead pipelines — every page, button, and ad is engineered to generate inbound enquiries from people actively searching for your service right now. We don't track page views. We track leads." },
  { q: "How long until I see real results?", a: "Google Ads can generate leads from day one of going live. Organic SEO typically shows traction in 30–60 days. We set realistic expectations at the start and track every lead from week one." },
  { q: "How do I pay you from Kuwait / Bahrain / Oman / Dubai?", a: "We invoice in USD and accept payment via Wise or Payoneer — both work seamlessly from Gulf countries. You pay in your local currency; we receive it in India. No hassle, no bank transfer paperwork." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{ background: "#fff", padding: "100px 28px", borderTop: "1px solid #f0f0f0" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="pill-label-green">FAQ</span>
          <h2 className="syne" style={{ fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 800, color: "#0F1A0E", marginTop: "16px", letterSpacing: "-.03em" }}>Questions We Get Asked</h2>
        </Reveal>

        <Reveal type="reveal-scale">
          <div style={{ border: "1px solid #e8e4d8", borderRadius: "12px", overflow: "hidden" }}>
            {faqs.map(({ q, a }, i) => (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #f0ede4" : "none" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 28px", background: open === i ? "#f9f8f5" : "#fff", border: "none", cursor: "pointer", color: "#0F1A0E", fontFamily: "'Plus Jakarta Sans',sans-serif", textAlign: "left", transition: "background .15s" }}
                >
                  <span style={{ fontSize: "15px", fontWeight: 600, paddingRight: "24px", color: "#0F1A0E" }}>{q}</span>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: open === i ? "#0F5132" : "rgba(15,81,50,.1)", color: open === i ? "#fff" : "#0F5132", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", lineHeight: "1", flexShrink: 0, transform: open === i ? "rotate(45deg)" : "none", transition: "all .2s" }}>+</span>
                </button>
                {open === i && (
                  <div style={{ padding: "0 28px 22px", fontSize: "14px", lineHeight: 1.85, color: "#555", background: "#f9f8f5", animation: "fadeUp .25s ease both" }}>
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─── FOOTER CTA ─────────────────────────────────────────────────── */
const FooterCta = () => (
  <footer style={{ background: "#0F5132" }}>
    <div className="footer-cta-section" style={{ borderBottom: "1px solid rgba(255,255,255,.1)", padding: "100px 28px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center", gap: "3px", marginBottom: "24px" }}>
            {[...Array(5)].map((_, i) => <Star key={i} />)}
          </div>
          <h2 className="syne" style={{ fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 800, color: "#fff", lineHeight: 1.08, letterSpacing: "-.03em", marginBottom: "24px" }}>
            Stop Losing Customers<br />to Competitors Who{" "}
            <span className="gold-shimmer">Are Online.</span>
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,.6)", lineHeight: 1.75, margin: "0 auto 40px", maxWidth: "540px" }}>
            Every week without a proper digital presence is another week your competitor fills their AC season calendar first. Let's fix that — starting today.
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize: "16px", padding: "16px 36px" }}>
            <WaIcon size={20} /> Get Exclusive Leads on WhatsApp
          </a>
          <p style={{ marginTop: "18px", fontSize: "12px", color: "rgba(255,255,255,.3)" }}>Free 15-min strategy call · No contracts · Gulf specialists</p>
        </Reveal>
      </div>
    </div>

    <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "56px 28px 40px" }}>
      <div className="footer-grid">
        <div>
          <p className="syne" style={{ fontWeight: 800, fontSize: "22px", letterSpacing: "-.04em", marginBottom: "16px", color: "#fff" }}>
            webonrock<span style={{ color: "#D4AF37" }}>.</span>
          </p>
          <p style={{ fontSize: "13px", lineHeight: 1.8, color: "rgba(255,255,255,.4)", maxWidth: "240px" }}>
            Lead generation for AC maintenance and home cleaning companies in Kuwait, Bahrain, Dubai and Oman.
          </p>
        </div>
        {[
          { title: "Services", links: ["Conversion Websites", "Google Ads", "Local SEO", "WhatsApp Pipeline", "CRO"] },
          { title: "Markets", links: ["Kuwait", "Bahrain", "Oman", "Dubai"] },
          { title: "Company", links: ["Our Work", "Results", "How It Works", "Contact"] },
        ].map(({ title, links }) => (
          <div key={title}>
            <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: "16px" }}>{title}</p>
            {links.map(l => <p key={l} style={{ fontSize: "13px", color: "rgba(255,255,255,.45)", marginBottom: "10px" }}>{l}</p>)}
          </div>
        ))}
      </div>
    </div>

    {/* Floating CTA */}
    <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="floating-cta" aria-label="Get leads on WhatsApp">
      <span style={{ animation: "pulse 2.2s infinite", display: "flex" }}><WaIcon size={20} /></span>
      <span className="cta-label">Get Leads Now</span>
    </a>
  </footer>
);

/* ─── ROOT ───────────────────────────────────────────────────────── */
export default function WebonrockLanding() {
  return (
    <>
      <GlobalStyles />
      <AnnouncementBar />
      <Ticker />
      <Navbar />
      <main>
        <Hero />
        <GulfHappyClients/>
        <GulfVideoTestimonials />
        <GulfPortfolio/>
        <Founder/> 
         <BookACall />
        <HonestSection />
        {/* <Work /> */}
        <Results />
        <Services />
        <Packages />
        <Process />
        <Compare />
        <Testimonials />
        <FAQ />
      </main>
      <FooterCta />
    </>
  );
}