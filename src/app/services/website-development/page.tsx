"use client";

import { motion, useMotionValue, useTransform, animate, cubicBezier } from "framer-motion";
import { Monitor, ShoppingCart, Layers, FileText, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import StartProject from "@/components/StartProject";
import FeaturedWork from "@/components/FeaturedWork";
import GalleryCarousel from "@/components/Gallery";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import web from "@/assets/websitePlan.jpg";

// ─────────────────────────────────────────────
// Animated Counter
// ─────────────────────────────────────────────
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [started, target]);

  return <span ref={ref}>{display}{suffix}</span>;
}

// ─────────────────────────────────────────────
// 3-D Tilt Card
// ─────────────────────────────────────────────
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function reset() {
    animate(x, 0, { duration: 0.4 });
    animate(y, 0, { duration: 0.4 });
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
const problems = [
  {
    icon: "⚡",
    title: "Slow Loading",
    stat: 53,
    statSuffix: "%",
    statLabel: "of visitors leave if a site takes over 3s to load.",
    accent: "#FF6B6B",
    bg: "from-red-50 to-orange-50",
    border: "border-red-200",
  },
  {
    icon: "📱",
    title: "Not Mobile-Friendly",
    stat: 60,
    statSuffix: "%",
    statLabel: "of searches happen on mobile. Is your site ready?",
    accent: "#F59E0B",
    bg: "from-amber-50 to-yellow-50",
    border: "border-amber-200",
  },
  {
    icon: "🔍",
    title: "Poor SEO",
    stat: 91,
    statSuffix: "%",
    statLabel: "of pages get zero traffic from Google. Don't be one of them.",
    accent: "#6366F1",
    bg: "from-indigo-50 to-purple-50",
    border: "border-indigo-200",
  },
];

const features = [
  { icon: Monitor,      title: "Responsive Design", description: "Perfect on all devices",       accent: "#01A959" },
  { icon: ShoppingCart, title: "E-commerce",         description: "Sell online seamlessly",       accent: "#F59E0B" },
  { icon: Layers,       title: "Headless CMS",       description: "Flexible management",          accent: "#6366F1" },
  { icon: FileText,     title: "CMS Integration",    description: "Easy content updates",         accent: "#FF6B6B" },
  { icon: Zap,          title: "Landing Pages",      description: "High-converting pages",        accent: "#0EA5E9" },
];

const process = [
  { step: "01", title: "Discovery", description: "We learn your business, goals, and target audience.", duration: "1 week",   color: "#01A959" },
  { step: "02", title: "Design",    description: "Wireframes and mockups crafted for your approval.",   duration: "2 weeks",  color: "#0EA5E9" },
  { step: "03", title: "Build",     description: "Development with regular progress check-ins.",        duration: "4 weeks",  color: "#6366F1" },
  { step: "04", title: "Launch",    description: "Testing, deployment, and team training.",             duration: "1 week",   color: "#F59E0B" },
  { step: "05", title: "Grow",      description: "Ongoing optimisation and dedicated support.",         duration: "Ongoing",  color: "#FF6B6B" },
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function ClientWebsiteDevelopmentPage() {

  const cardVariants = {
    hidden:   { opacity: 0, y: 40, scale: 0.95 },
    visible:  { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.55, ease: cubicBezier(0.22, 1, 0.36, 1) } },
  };
  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

  return (
    <>
      <Header />

      {/* ── Hero ─────────────────────────────────── */}
      <section
        className="relative md:-mt-[114px] -mt-[114px] h-dvh sm:h-[65vh] md:h-[72vh] lg:h-dvh bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.4)), url(${web.src})`,
        }}
      >
        <div className="relative z-10 lg:mt-24">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center text-center text-white">
              <div className="mx-auto max-w-3xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                  Websites that turn visitors into customers
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8">
                  Fast, secure, SEO-ready sites for local businesses and startups to Boost Growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={() => document.getElementById("start-project")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-[#01A959] hover:bg-[#018f4d] text-white text-base sm:text-lg shadow-md transition-all px-5 sm:px-6 py-2.5 rounded-lg"
                  >
                    Let's Get Started
                  </button>
                  <button
                    onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                    className="border-2 border-white/20 hover:bg-white hover:text-black px-5 sm:px-6 py-2.5 rounded-lg text-base sm:text-lg font-medium transition-all"
                  >
                    See Works
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────── */}
      <motion.section
        id="overview"
        className="relative py-20 sm:py-28 overflow-hidden bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-green-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-indigo-200/20 blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <motion.div
            className="text-center mb-14 sm:mb-20"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/10 text-[#01A959] border border-[#01A959]/20">
              Website Audit
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Is Your Website{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#01A959]">Costing You</span>
                <motion.span
                  className="absolute bottom-1 left-0 w-full h-3 bg-[#01A959]/15 rounded-sm -z-0"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </span>{" "}
              Customers?
            </h2>
            <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto font-light">
              Most business websites look fine but <strong className="text-gray-700 font-semibold">fail to convert</strong>. We fix that.
            </p>
          </motion.div>

          {/* Problem cards */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-14 sm:mb-20" variants={stagger}>
            {problems.map((p) => (
              <motion.div key={p.title} variants={cardVariants}>
                <TiltCard className="h-full">
                  <div
                    className={`h-full rounded-2xl border ${p.border} bg-gradient-to-br ${p.bg} p-6 flex flex-col gap-4 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm"
                      style={{ background: `${p.accent}18`, border: `1.5px solid ${p.accent}40` }}
                    >
                      {p.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-5xl font-black leading-none tabular-nums" style={{ color: p.accent }}>
                        <AnimatedCounter target={p.stat} suffix={p.statSuffix} />
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">{p.statLabel}</p>
                    <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden mt-auto">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: p.accent }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${p.stat}%` }}
                        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Promise banner */}
          <motion.div
            className="relative max-w-3xl mx-auto"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <div className="relative overflow-hidden rounded-2xl p-[1.5px] bg-[#01A959]">
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{ background: "conic-gradient(from 0deg, transparent 70%, rgba(255,255,255,0.4) 80%, transparent 90%)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative rounded-2xl bg-gradient-to-br from-[#01A959] to-[#017a40] px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-3xl backdrop-blur-sm">
                  ✅
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Our Promise</h3>
                  <p className="text-green-100 text-sm sm:text-base leading-relaxed">
                    We build <strong className="text-white">conversion-focused websites</strong> that load fast, rank well, and turn visitors into paying customers — mobile-optimized, SEO-ready, and built to grow with your business.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── What We Build ─────────────────────────── */}
      <motion.section
        className="relative py-16 sm:py-24 bg-gray-950 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {/* Subtle dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff22 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#01A959]/20 blur-3xl rounded-full" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/15 text-[#01A959] border border-[#01A959]/25">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">What We Build</h2>
            <p className="mt-3 text-gray-400 max-w-lg mx-auto">Every type of web presence, crafted to perform.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto"
            variants={stagger}
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={i} variants={cardVariants}>
                  <TiltCard className="h-full">
                    <div
                      className="h-full rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-6 flex flex-col items-center text-center gap-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default group"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${f.accent}22`, border: `1.5px solid ${f.accent}44` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: f.accent }} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white mb-1">{f.title}</h3>
                        <p className="text-xs text-gray-400">{f.description}</p>
                      </div>
                      {/* Accent dot */}
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-auto opacity-60"
                        style={{ background: f.accent }}
                      />
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      <FeaturedWork />
      <GalleryCarousel />
      <StartProject />

      {/* ── Process ──────────────────────────────── */}
      <motion.section
        id="process"
        className="relative py-16 sm:py-24 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {/* Top green wash */}
        <div className="pointer-events-none absolute top-0 inset-x-0 h-56 bg-gradient-to-b from-green-50 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/10 text-[#01A959] border border-[#01A959]/20">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              Our Process & Timeline
            </h2>
            <p className="mt-2 text-gray-400 text-sm sm:text-base">May vary with requirements</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical spine */}
            <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#01A959] via-gray-200 to-transparent hidden sm:block" />

            <div className="flex flex-col gap-8">
              {process.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative flex gap-5 sm:gap-8 items-start group"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 } },
                  }}
                >
                  {/* Step bubble */}
                  <div
                    className="shrink-0 z-10 w-10 h-10 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-sm sm:text-xl font-extrabold shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}bb)` }}
                  >
                    {item.step}
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:border-gray-200 transition-all duration-300 px-5 sm:px-7 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                    <span
                      className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap"
                      style={{ background: `${item.color}15`, color: item.color }}
                    >
                      {item.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}