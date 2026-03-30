"use client";

import React from "react";
import { motion, useMotionValue, useTransform, animate, cubicBezier } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Palette, Share2, CheckCircle, Sparkles, Layers, BookOpen } from "lucide-react";
import brandingBg from "@/assets/branding.jpg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

// ─────────────────────────────────────────────
// Motion helpers
// ─────────────────────────────────────────────
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const cardIn = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.52, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) } },
};

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
    const c = animate(0, target, { duration: 1.8, ease: "easeOut", onUpdate: (v) => setDisplay(Math.round(v)) });
    return c.stop;
  }, [started, target]);

  return <span ref={ref}>{display}{suffix}</span>;
}

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() { animate(x, 0, { duration: 0.4 }); animate(y, 0, { duration: 0.4 }); }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
const stats = [
  { value: 7,   suffix: "s",  label: "to make a first impression" },
  { value: 200, suffix: "%",  label: "more conversions with strong branding" },
  { value: 80,  suffix: "%",  label: "of consumers value brand consistency" },
  { value: 3,   suffix: "×",  label: "more revenue vs inconsistent brands" },
];

const whyBranding = [
  {
    icon: Sparkles,
    title: "First Impressions Matter",
    description: "You have 7 seconds to make an impression. Professional branding builds instant trust and credibility.",
    accent: "#F59E0B",
    bg: "from-amber-950/60 to-yellow-900/40",
    border: "border-amber-500/30",
  },
  {
    icon: Layers,
    title: "Stand Out from Competitors",
    description: "Consistent visual identity makes you memorable and instantly recognizable in a crowded market.",
    accent: "#6366F1",
    bg: "from-indigo-950/60 to-violet-900/40",
    border: "border-indigo-500/30",
  },
  {
    icon: CheckCircle,
    title: "Increase Conversions",
    description: "Professional branding can lift conversion rates by up to 200% — it signals quality before a word is read.",
    accent: "#01A959",
    bg: "from-emerald-950/60 to-green-900/40",
    border: "border-emerald-500/30",
  },
];

const packages = [
  {
    name: "Logo + Identity",
    price: "Contact us",
    description: "Essential brand foundation",
    emoji: "✏️",
    accent: "#0EA5E9",
    features: [
      "3 logo concepts",
      "2 revision rounds",
      "Colour palette",
      "Typography guide",
      "Logo files (all formats)",
      "Brand guidelines (basic)",
    ],
  },
  {
    name: "Social Starter",
    price: "Contact us",
    description: "Brand + social presence",
    emoji: "🚀",
    accent: "#01A959",
    popular: true,
    features: [
      "Everything in Logo + Identity",
      "Social media templates (10)",
      "Profile graphics",
      "Cover images",
      "Story templates",
      "1 month content calendar",
    ],
  },
  {
    name: "Full Brand Kit",
    price: "Contact us",
    description: "Complete brand system",
    emoji: "💎",
    accent: "#6366F1",
    features: [
      "Everything in Social Starter",
      "Business card design",
      "Letterhead & email signature",
      "Marketing materials",
      "Brand photography direction",
      "3 months content calendar",
      "Brand strategy session",
    ],
  },
];

const workExamples = [
  { icon: Palette,   title: "Logo Design",       desc: "Modern, memorable brand marks",      grad: "from-violet-600 to-purple-700",   glow: "#7c3aed" },
  { icon: Share2,    title: "Social Templates",  desc: "Consistent, on-brand posts",         grad: "from-[#01A959] to-[#0E8C4A]",    glow: "#01A959" },
  { icon: BookOpen,  title: "Brand Guidelines",  desc: "Complete usage documentation",       grad: "from-orange-500 to-red-600",     glow: "#f97316" },
];

const deliverables = [
  {
    category: "Logo Design",
    accent: "#01A959",
    items: ["Primary logo", "Secondary logo", "Icon / mark", "Black & white versions"],
  },
  {
    category: "Visual Identity",
    accent: "#0EA5E9",
    items: ["Colour palette (primary & secondary)", "Typography system", "Pattern / texture library", "Icon style guide"],
  },
  {
    category: "Social Assets",
    accent: "#6366F1",
    items: ["Profile pictures", "Cover images", "Post templates", "Story templates"],
  },
  {
    category: "Brand Guidelines",
    accent: "#F59E0B",
    items: ["Logo usage rules", "Colour specifications", "Typography guidelines", "Do's and don'ts"],
  },
];

const onboardingSteps = [
  { step: "01", title: "Discovery Call",      description: "We learn about your business, values, and target audience to set the strategic foundation.",  color: "#01A959" },
  { step: "02", title: "Concept Development", description: "We create initial logo concepts and mood boards aligned with your brand personality.",          color: "#0EA5E9" },
  { step: "03", title: "Refinement",          description: "You provide feedback and we sharpen your chosen direction until it feels exactly right.",       color: "#6366F1" },
  { step: "04", title: "Finalization",        description: "We deliver all production-ready files, brand guidelines, and onboarding support.",             color: "#F59E0B" },
];

const faqs = [
  { question: "How long does branding take?",              answer: "Logo + Identity takes 2–3 weeks. Full Brand Kit takes 4–6 weeks. Timeline depends on feedback speed and revision rounds." },
  { question: "What if I don't like the initial concepts?",answer: "All packages include revision rounds. We'll keep refining until you're proud to show the world." },
  { question: "Do you provide source files?",              answer: "Yes — you receive all files in PNG, JPG, SVG, and PDF formats plus source files for future edits." },
  { question: "Can you match my existing brand colours?",  answer: "Absolutely. We work with your current palette or refine it for better digital and print performance." },
  { question: "Do you create social media content?",       answer: "We provide templates and a content calendar. We also offer ongoing content creation as an add-on." },
  { question: "What about trademark registration?",        answer: "We design your logo — trademark registration is separate. We can recommend specialists if needed." },
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function BrandingPage() {
  return (
    <>
      <Header />

      {/* ── Hero ─────────────────────────────────── */}
      <section
        className="relative md:-mt-[114px] -mt-[114px] h-dvh sm:h-[68vh] md:h-[75vh] lg:h-dvh bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.45)), url(${brandingBg.src})` }}
      >
        <div className="relative z-10 lg:mt-24 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center">
              <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/20 text-[#4ade80] border border-[#01A959]/30 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Branding & Identity
                </motion.span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-tight tracking-tight">
                  Build a brand that's{" "}
                  <span className="text-[#4ade80]">unforgettable</span>
                </h1>
                <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10">
                  Logo, colour system, social assets and brand guidelines — everything you need to look professional from day one.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-7 py-3.5 rounded-xl bg-[#01A959] hover:bg-[#018f4d] text-white font-semibold text-base shadow-lg shadow-[#01A959]/30 transition-all"
                  >
                    Get Free Brand Audit
                  </button>
                  <button
                    onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-7 py-3.5 rounded-xl border-2 border-white/25 hover:bg-white/10 backdrop-blur-sm text-base font-medium transition-all"
                  >
                    View Packages
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────── */}
      <motion.section
        className="py-12 bg-gray-950 border-y border-white/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="text-center"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } } }}
              >
                <div className="text-4xl sm:text-5xl font-black text-[#4ade80] tabular-nums">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-[150px] mx-auto leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Why Branding Matters ─────────────────── */}
      <motion.section
        id="overview"
        className="relative py-16 sm:py-24 bg-gray-950 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff15 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-[#01A959]/10 blur-3xl rounded-full" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/15 text-[#4ade80] border border-[#01A959]/25">
              Why It Matters
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Why Branding Drives Conversions
            </h2>
            <p className="mt-3 text-gray-400 max-w-lg mx-auto">The numbers are clear — a strong brand isn't a luxury, it's a growth lever.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12" variants={stagger}>
            {whyBranding.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={cardIn}>
                  <TiltCard className="h-full">
                    <div
                      className={`h-full rounded-2xl border ${item.border} bg-gradient-to-br ${item.bg} p-6 flex flex-col gap-4 backdrop-blur-sm hover:brightness-110 transition-all duration-300 cursor-default`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${item.accent}20`, border: `1.5px solid ${item.accent}50` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: item.accent }} />
                      </div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                      <div className="mt-auto h-0.5 rounded-full" style={{ background: `linear-gradient(to right, ${item.accent}60, transparent)` }} />
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Promise banner */}
          <motion.div
            className="relative max-w-3xl mx-auto"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
          >
            <div className="relative overflow-hidden rounded-2xl p-[1.5px] bg-[#01A959]">
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{ background: "conic-gradient(from 0deg, transparent 70%, rgba(255,255,255,0.35) 80%, transparent 90%)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative rounded-2xl bg-gradient-to-br from-[#01A959] to-[#017a40] px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-2xl backdrop-blur-sm">
                  ✨
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-0.5">The WebOnRock Difference</h3>
                  <p className="text-green-100 text-sm leading-relaxed">
                    We don't just design logos — we create <strong className="text-white">complete brand systems</strong> that work across every touchpoint, from your website to social media, building trust at every interaction.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Work Examples ────────────────────────── */}
      <motion.section
        className="relative py-16 sm:py-24 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 bg-violet-100/40 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 bg-green-50 blur-3xl rounded-full" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/10 text-[#01A959] border border-[#01A959]/20">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Brand Work Examples</h2>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" variants={stagger}>
            {workExamples.map((ex, i) => {
              const Icon = ex.icon;
              return (
                <motion.div key={i} variants={cardIn}>
                  <TiltCard className="h-full">
                    <div
                      className="h-full rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-default group"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Visual area */}
                      <div
                        className={`aspect-video bg-gradient-to-br ${ex.grad} flex items-center justify-center relative overflow-hidden`}
                      >
                        {/* Subtle radial glow */}
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{ background: `radial-gradient(ellipse at center, ${ex.glow}60, transparent 70%)` }}
                        />
                        <Icon className="w-16 h-16 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="p-5 bg-white">
                        <h3 className="text-base font-bold text-gray-900">{ex.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{ex.desc}</p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* ── Packages ─────────────────────────────── */}
      <motion.section
        id="packages"
        className="relative py-16 sm:py-24 bg-gray-950 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff15 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-[#01A959]/12 blur-3xl rounded-full" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/15 text-[#4ade80] border border-[#01A959]/25">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Branding Packages</h2>
            <p className="mt-3 text-gray-400 max-w-lg mx-auto">Pick your starting point — everything is built to grow with you.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" variants={stagger}>
            {packages.map((pkg, i) => (
              <motion.div key={i} variants={cardIn} className="relative">
                {pkg.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                    style={{ background: pkg.accent }}
                  >
                    Most Popular
                  </div>
                )}
                <TiltCard className="h-full">
                  <div
                    className={`h-full rounded-2xl border p-6 flex flex-col gap-5 transition-all duration-300 cursor-default ${
                      pkg.popular
                        ? "border-[#01A959]/50 bg-[#01A959]/8 hover:bg-[#01A959]/12 shadow-xl shadow-[#01A959]/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div>
                      <div
                        className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-xl"
                        style={{ background: `${pkg.accent}25`, border: `1.5px solid ${pkg.accent}45` }}
                      >
                        {pkg.emoji}
                      </div>
                      <h3 className="text-xl font-extrabold text-white">{pkg.name}</h3>
                      <p className="text-sm text-gray-400 mt-1">{pkg.description}</p>
                      <p className="mt-3 text-sm font-medium" style={{ color: pkg.accent }}>{pkg.price}</p>
                    </div>

                    <ul className="flex flex-col gap-2.5 flex-1">
                      {pkg.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: pkg.accent }} />
                          <span className="text-sm text-gray-300">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      className="w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 mt-2"
                      style={
                        pkg.popular
                          ? { background: pkg.accent, color: "#fff" }
                          : { background: `${pkg.accent}20`, color: pkg.accent, border: `1px solid ${pkg.accent}40` }
                      }
                    >
                      Get Started
                    </button>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── Deliverables ─────────────────────────── */}
      <motion.section
        id="deliverables"
        className="relative py-16 sm:py-24 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div className="pointer-events-none absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-gray-50 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/10 text-[#01A959] border border-[#01A959]/20">
              Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">What You'll Receive</h2>
            <p className="mt-3 text-gray-500 max-w-lg mx-auto">Every asset you need to show up professionally, everywhere.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto" variants={stagger}>
            {deliverables.map((d, i) => (
              <motion.div key={i} variants={cardIn}>
                <TiltCard className="h-full">
                  <div
                    className="h-full rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-gray-200 transition-all duration-300 p-6 flex flex-col gap-4 cursor-default group"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Category header with accent bar */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-1 h-6 rounded-full"
                        style={{ background: d.accent }}
                      />
                      <h3 className="text-base font-bold text-gray-900">{d.category}</h3>
                    </div>

                    <ul className="flex flex-col gap-2.5">
                      {d.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 shrink-0" style={{ color: d.accent }} />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="mt-auto h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(to right, ${d.accent}, ${d.accent}44)` }}
                    />
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── Process ──────────────────────────────── */}
      <motion.section
        id="process"
        className="relative py-16 sm:py-24 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div className="pointer-events-none absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-green-50 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/10 text-[#01A959] border border-[#01A959]/20">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Our Branding Process</h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#01A959] via-gray-200 to-transparent hidden sm:block" />
            <div className="flex flex-col gap-8">
              {onboardingSteps.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative flex gap-5 sm:gap-8 items-start group"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 } },
                  }}
                >
                  <div
                    className="shrink-0 z-10 w-10 h-10 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-sm sm:text-xl font-extrabold shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}bb)` }}
                  >
                    {item.step}
                  </div>
                  <div className="flex-1 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:border-gray-200 transition-all duration-300 px-5 sm:px-7 py-5">
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── FAQs ─────────────────────────────────── */}
      <motion.section
        id="faqs"
        className="relative py-16 sm:py-24 bg-gray-950 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-[#01A959]/10 blur-3xl rounded-full" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/15 text-[#4ade80] border border-[#01A959]/25">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Common Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-white/8 bg-white/5 px-5 sm:px-6 hover:border-[#01A959]/30 hover:bg-[#01A959]/5 transition-colors duration-200"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-white hover:text-[#4ade80] py-4 [&>svg]:text-[#01A959]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-sm sm:text-base pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.section>

      {/* ── Contact ──────────────────────────────── */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <ContactForm
              title="Ready to Build Your Brand?"
              description="Tell us about your business and we'll create a brand that stands out."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}