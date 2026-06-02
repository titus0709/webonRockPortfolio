"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Search, FileText, MapPin, TrendingUp, CheckCircle, BarChart,
} from "lucide-react";
import seo from "@/assets/seo-1.jpg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StartProject from "@/components/StartProject";

// ─────────────────────────────────────────────
// Shared motion helpers
// ─────────────────────────────────────────────
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.11 } } };

const cardIn = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.52 } },
};

// Animated number counter
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

// 3-D tilt card
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
  { value: 68,  suffix: "%", label: "of clicks go to the top 5 results" },
  { value: 92,  suffix: "%", label: "of searchers never go to page 2" },
  { value: 14,  suffix: "×", label: "more leads vs outbound marketing" },
  { value: 200, suffix: "%", label: "average ROI on organic SEO" },
];

const auditAreas = [
  { icon: Search,     title: "Technical SEO",    description: "Site speed, mobile-friendliness, crawlability & indexing.",  accent: "#01A959", bg: "from-emerald-950/60 to-green-900/40",   border: "border-emerald-500/30" },
  { icon: FileText,   title: "On-Page SEO",      description: "Content, keywords, meta tags, headings & internal links.",   accent: "#0EA5E9", bg: "from-sky-950/60 to-cyan-900/40",       border: "border-sky-500/30" },
  { icon: MapPin,     title: "Local SEO",        description: "Google Business Profile, citations, reviews & geo-pages.",   accent: "#F59E0B", bg: "from-amber-950/60 to-yellow-900/40",   border: "border-amber-500/30" },
  { icon: TrendingUp, title: "Content Strategy", description: "Topic clusters, keyword gaps & content opportunity mapping.", accent: "#6366F1", bg: "from-indigo-950/60 to-violet-900/40", border: "border-indigo-500/30" },
];

const quickWins = [
  { text: "Fix broken links and 404 errors",                  time: "Day 1–3" },
  { text: "Optimise page titles and meta descriptions",       time: "Day 1–5" },
  { text: "Improve site speed — compress images, minify CSS", time: "Day 3–7" },
  { text: "Set up & optimise Google Business Profile",        time: "Day 5–10" },
  { text: "Create XML sitemap and submit to Google",          time: "Day 7" },
  { text: "Add schema markup for rich snippets",              time: "Day 10–14" },
  { text: "Ensure full mobile responsiveness",                time: "Day 14–20" },
  { text: "Resolve duplicate content issues",                 time: "Day 20–30" },
];

const packages = [
  {
    name: "Local SEO",
    price: "₹2,499",
    period: "/mo",
    description: "Perfect for local businesses",
    emoji: "📍",
    accent: "#0EA5E9",
    features: [
      "Google Business optimisation",
      "Local citation building",
      "Review management",
      "5 pages optimised",
      "Monthly reporting",
      "Keyword tracking (20)",
    ],
  },
  {
    name: "Growth SEO",
    price: "₹4,999",
    period: "/mo",
    description: "For growing businesses",
    emoji: "🚀",
    accent: "#01A959",
    popular: true,
    features: [
      "Everything in Local",
      "15 pages optimised",
      "Content creation (2/mo)",
      "Link building",
      "Technical SEO fixes",
      "Keyword tracking (50)",
      "Competitor analysis",
    ],
  },
  {
    name: "Enterprise SEO",
    price: "₹9,999",
    period: "/mo",
    description: "For established brands",
    emoji: "🏢",
    accent: "#6366F1",
    features: [
      "Everything in Growth",
      "Unlimited pages",
      "Content creation (4+/mo)",
      "Advanced link building",
      "Conversion optimisation",
      "Keyword tracking (100+)",
      "Dedicated SEO manager",
    ],
  },
];

const kpis = [
  { icon: TrendingUp, metric: "Organic Traffic",  description: "Visitors arriving from search engines each month.",        accent: "#01A959" },
  { icon: Search,     metric: "Keyword Rankings", description: "Your position for high-intent target keywords.",           accent: "#0EA5E9" },
  { icon: BarChart,   metric: "Domain Authority", description: "Overall site strength scored by link quality & age.",      accent: "#6366F1" },
  { icon: TrendingUp, metric: "Conversion Rate",  description: "The percentage of visitors who become qualified leads.",   accent: "#F59E0B" },
  { icon: FileText,   metric: "Backlinks",        description: "Authoritative sites linking to your pages.",               accent: "#FF6B6B" },
  { icon: BarChart,   metric: "Page Speed",       description: "Core Web Vitals load-time performance score.",             accent: "#0EA5E9" },
];

const faqs = [
  { question: "How long does SEO take to show results?",         answer: "Most businesses see initial improvements in 3–4 months, with significant results in 6–12 months. SEO is a long-term investment that compounds over time." },
  { question: "What's the difference between local and national SEO?", answer: "Local SEO targets customers in your geographic area (e.g. 'plumber in Chennai'). National SEO targets broader keywords across the country. We recommend local SEO for service businesses." },
  { question: "Do you guarantee first-page rankings?",           answer: "No one can guarantee rankings — beware of those who do. We use proven strategies to improve your visibility, but Google's algorithm changes constantly." },
  { question: "What if I already have a website?",               answer: "Perfect! We'll audit your existing site, identify issues, and create a roadmap to improve your rankings without rebuilding from scratch." },
  { question: "Do you write content for my website?",            answer: "Yes — our Growth and Enterprise packages include monthly content creation optimised for your target keywords and audience." },
  { question: "How do you measure success?",                     answer: "We track organic traffic, keyword rankings, leads generated, and conversion rates. You'll receive clear monthly reports showing progress and ROI." },
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function SEOOptimizationPage() {
  const [website, setWebsite] = useState("");

  const handleMiniAudit = (e: React.FormEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />

      {/* ── Hero ─────────────────────────────────── */}
      <section
        className="relative md:-mt-[114px] -mt-[114px] h-dvh sm:h-[65vh] md:h-[72vh] lg:h-dvh bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.45)), url(${seo.src})` }}
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
                  SEO Optimisation
                </motion.span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
                  Get found.{" "}
                  <span className="text-[#4ade80]">Get customers.</span>
                </h1>
                <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10">
                  Technical and local SEO that moves the needle — measurably, sustainably.
                </p>

                {/* Mini audit form */}
                <form
                  onSubmit={handleMiniAudit}
                  className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6"
                >
                  <input
                    type="url"
                    placeholder="yourwebsite.com"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 backdrop-blur-sm focus:outline-none focus:border-[#01A959] text-sm"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#01A959] hover:bg-[#018f4d] text-white font-semibold text-sm shadow-lg shadow-[#01A959]/30 transition-all whitespace-nowrap"
                  >
                    Get Free Audit →
                  </button>
                </form>
                <p className="text-xs text-white/40">No credit card · No spam · Results in 48 hrs</p>
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
                <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-[160px] mx-auto leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── What We Audit ────────────────────────── */}
      <motion.section
        id="audit"
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
              Audit Scope
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">What We Audit</h2>
            <p className="mt-3 text-gray-400 max-w-lg mx-auto">A 360° scan of every factor that determines your Google visibility.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto" variants={stagger}>
            {auditAreas.map((area) => {
              const Icon = area.icon;
              return (
                <motion.div key={area.title} variants={cardIn}>
                  <TiltCard className="h-full">
                    <div
                      className={`h-full rounded-2xl border ${area.border} bg-gradient-to-br ${area.bg} p-6 flex flex-col gap-4 backdrop-blur-sm hover:brightness-110 transition-all duration-300 cursor-default`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${area.accent}20`, border: `1.5px solid ${area.accent}50` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: area.accent }} />
                      </div>
                      <h3 className="text-base font-bold text-white">{area.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed flex-1">{area.description}</p>
                      <div className="h-0.5 rounded-full" style={{ background: `linear-gradient(to right, ${area.accent}60, transparent)` }} />
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* ── Quick Wins ───────────────────────────── */}
      <motion.section
        id="quick-wins"
        className="relative py-16 sm:py-24 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 bg-[#01A959]/6 blur-3xl rounded-full" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/10 text-[#01A959] border border-[#01A959]/20">
              First 30 Days
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Typical Quick Wins</h2>
            <p className="mt-3 text-gray-500 max-w-lg mx-auto">Common issues we find and fix in the first month — with real impact.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto" variants={stagger}>
            {quickWins.map((win, i) => (
              <motion.div key={i} variants={cardIn}>
                <div className="flex items-center gap-4 bg-gray-50 hover:bg-white hover:shadow-md border border-gray-100 hover:border-[#01A959]/25 rounded-2xl px-5 py-4 transition-all duration-200 group cursor-default">
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-[#01A959]/10 border border-[#01A959]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <CheckCircle className="w-4 h-4 text-[#01A959]" />
                  </div>
                  <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-gray-900">{win.text}</span>
                  <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#01A959]/8 text-[#01A959]">
                    {win.time}
                  </span>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Monthly SEO Packages</h2>
            <p className="mt-3 text-gray-400 max-w-lg mx-auto">Transparent retainers. Cancel anytime.</p>
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
                        className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-lg"
                        style={{ background: `${pkg.accent}25`, border: `1.5px solid ${pkg.accent}45` }}
                      >
                        {pkg.emoji}
                      </div>
                      <h3 className="text-xl font-extrabold text-white">{pkg.name}</h3>
                      <p className="text-sm text-gray-400 mt-1">{pkg.description}</p>
                      <div className="mt-4 flex items-end gap-1">
                        <span className="text-4xl font-black text-white">{pkg.price}</span>
                        <span className="text-lg font-bold mb-1" style={{ color: pkg.accent }}>{pkg.period}</span>
                      </div>
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

      {/* ── Reporting & KPIs ─────────────────────── */}
      <motion.section
        id="reporting"
        className="relative py-16 sm:py-24 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 bg-green-50 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-indigo-50/60 blur-3xl rounded-full" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/10 text-[#01A959] border border-[#01A959]/20">
              Reporting
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Reporting & KPIs</h2>
            <p className="mt-3 text-gray-500 max-w-lg mx-auto">We track what matters — traffic, rankings, and leads. No vanity metrics.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto" variants={stagger}>
            {kpis.map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <motion.div key={i} variants={cardIn}>
                  <TiltCard className="h-full">
                    <div
                      className="h-full rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-gray-200 transition-all duration-300 p-6 flex flex-col gap-3 cursor-default group"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${kpi.accent}15`, border: `1.5px solid ${kpi.accent}35` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: kpi.accent }} />
                      </div>
                      <h3 className="text-base font-bold text-gray-900">{kpi.metric}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{kpi.description}</p>
                      <div
                        className="mt-auto h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(to right, ${kpi.accent}, ${kpi.accent}44)` }}
                      />
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>


      <StartProject />

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

      
      <Footer />
    </>
  );
}