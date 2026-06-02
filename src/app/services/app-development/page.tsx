"use client";

import { motion, useMotionValue, useTransform, animate, cubicBezier } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Smartphone, Bell, CreditCard, MapPin, Shield, Zap, CheckCircle,
} from "lucide-react";
import mobileAppDev from "@/assets/mobileAppDev.jpg";
import StartProject from "@/components/StartProject";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // ← fixed: was imported from "react-day-picker"
import HappyClients from "@/components/HappyClients";

// ─────────────────────────────────────────────
// Shared helpers
// ─────────────────────────────────────────────
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const cardIn = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.52, ease: cubicBezier(0.22, 1, 0.36, 1) } },
};

// 3-D tilt
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
  function onLeave() {
    animate(x, 0, { duration: 0.4 });
    animate(y, 0, { duration: 0.4 });
  }

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
const problems = [
  { icon: Smartphone, title: "Low Adoption",     description: "Users download but don't engage",    accent: "#FF6B6B", bg: "from-red-950/60 to-rose-900/40",       border: "border-red-500/30" },
  { icon: Bell,       title: "Poor Onboarding",  description: "Complex signup flows lose users",    accent: "#F59E0B", bg: "from-amber-950/60 to-yellow-900/40",   border: "border-amber-500/30" },
  { icon: MapPin,     title: "No Offline Mode",  description: "App breaks without internet",        accent: "#6366F1", bg: "from-indigo-950/60 to-violet-900/40",  border: "border-indigo-500/30" },
  { icon: Shield,     title: "Tracking Issues",  description: "Can't monitor deliveries or orders", accent: "#0EA5E9", bg: "from-sky-950/60 to-cyan-900/40",       border: "border-sky-500/30" },
];

const features = [
  { icon: Shield,     title: "Authentication",       description: "Secure login with social auth",     accent: "#01A959" },
  { icon: Bell,       title: "Push Notifications",   description: "Real-time updates and alerts",      accent: "#F59E0B" },
  { icon: CreditCard, title: "Payment Integration",  description: "Stripe, PayPal, and more",          accent: "#6366F1" },
  { icon: MapPin,     title: "Real-time Tracking",   description: "Live GPS and status updates",       accent: "#0EA5E9" },
  { icon: Zap,        title: "Admin Dashboard",      description: "Manage everything in one place",    accent: "#FF6B6B" },
];

const techStack = [
  { name: "Figma",           role: "Design & Prototyping",           logo: "🎨" },
  { name: "Flutter",         role: "Cross-platform Mobile Dev",       logo: "📱" },
  { name: "Node.js",         role: "Backend & REST APIs",             logo: "⚙️" },
  { name: "AWS",             role: "Cloud Infrastructure",            logo: "☁️" },
  { name: "Google Maps API", role: "Location & Routing Services",     logo: "🗺️" },
  { name: "Stripe",          role: "Payment Processing",              logo: "💳" },
];

const process = [
  { step: "01", title: "Discovery & Planning",   duration: "1–2 weeks", description: "Understand your business, target audience, and app goals. Define user flows and technical requirements.", color: "#01A959" },
  { step: "02", title: "MVP Development",        duration: "6–8 weeks", description: "Build core features and basic UI. Set up backend, database, and third-party integrations.",              color: "#0EA5E9" },
  { step: "03", title: "Testing & Refinement",   duration: "2–3 weeks", description: "Conduct user testing, squash bugs, and sharpen UX based on real feedback.",                              color: "#6366F1" },
  { step: "04", title: "Launch & Support",       duration: "1 week",    description: "Deploy to App Store and Google Play. Provide training and dedicated post-launch support.",               color: "#F59E0B" },
];

const pricingModels = [
  {
    name: "MVP Package",
    price: "₹50,000",
    suffix: "+",
    description: "Launch your idea fast",
    features: ["User & partner apps", "Basic features only", "iOS + Android", "1–2 months support", "App store submission"],
    accent: "#6366F1",
  },
  {
    name: "Feature-Based",
    price: "₹75,000",
    suffix: "+",
    description: "Full-featured solution",
    features: ["All MVP features", "Advanced functionality", "Admin dashboard", "Payment integration", "2 months support", "Analytics setup"],
    popular: true,
    accent: "#01A959",
  },
  {
    name: "Enterprise",
    price: "Custom",
    suffix: "",
    description: "Scale with confidence",
    features: ["Unlimited features", "Custom integrations", "White-label options", "Dedicated team", "3–5 months support", "Priority updates"],
    accent: "#0EA5E9",
  },
];

const faqs = [
  { question: "How long does it take to build a mobile app?",          answer: "An MVP typically takes 8–12 weeks. Full-featured apps can take 3–6 months depending on complexity and integrations." },
  { question: "Do you build for both iOS and Android?",                answer: "Yes — we use Flutter to ship cross-platform from a single codebase, saving you time and budget." },
  { question: "Can you integrate with my existing systems?",           answer: "Yes. We integrate with CRM platforms, payment systems, databases, and virtually any third-party API." },
  { question: "What happens after the app launches?",                  answer: "We provide post-launch support, performance monitoring, bug fixes, and incremental updates." },
  { question: "Do you handle app store submissions?",                  answer: "Yes — we handle submission, creative assets, and compliance for both Apple and Google stores." },
  { question: "Can you build a food delivery app like Judah?",         answer: "Yes — real-time tracking, partner management and payment flows are core to what we do." },
];

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function AppDevelopmentPage() {
  return (
    <>
      <Header />

      {/* ── Hero ───────────────────────────────── */}
      <section
        className="relative md:-mt-[114px] -mt-[114px] h-dvh sm:h-[65vh] md:h-[72vh] lg:h-dvh bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.45)), url(${mobileAppDev.src})` }}
      >
        <div className="relative z-10 lg:mt-24 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center">
              <motion.div
                className="mx-auto max-w-3xl"
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
                  Mobile App Development
                </motion.span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Mobile Apps That{" "}
                  <span className="text-[#4ade80]">Power Your Business</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
                  From delivery tracking to customer engagement — we build powerful, scalable apps your users will love.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={() => document.getElementById("start-project")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-[#01A959] hover:bg-[#018f4d] text-white text-base sm:text-lg shadow-lg shadow-[#01A959]/30 transition-all px-6 py-3 rounded-xl font-semibold"
                  >
                    Let's Talk Project
                  </button>
                  <button
                    onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                    className="border-2 border-white/25 hover:bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl text-base sm:text-lg font-medium transition-all"
                  >
                    See Features
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problems ───────────────────────────── */}
      <motion.section
        id="overview"
        className="relative py-16 sm:py-24 bg-gray-950 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff18 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-red-500/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-red-500/15 text-red-400 border border-red-500/25">
              Pain Points
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Key Problems We Solve</h2>
            <p className="mt-3 text-gray-400 max-w-lg mx-auto">Real challenges that hurt your retention and revenue — solved.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" variants={stagger}>
            {problems.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title} variants={cardIn}>
                  <TiltCard className="h-full">
                    <div
                      className={`h-full rounded-2xl border ${p.border} bg-gradient-to-br ${p.bg} p-6 flex flex-col gap-4 backdrop-blur-sm hover:brightness-110 transition-all duration-300 cursor-default`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                        style={{ background: `${p.accent}20`, border: `1.5px solid ${p.accent}50` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: p.accent }} />
                      </div>
                      <h3 className="text-base font-bold text-white">{p.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
                      <div className="mt-auto h-0.5 rounded-full" style={{ background: `linear-gradient(to right, ${p.accent}60, transparent)` }} />
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* ── Features ───────────────────────────── */}
      <motion.section
        id="features"
        className="relative py-16 sm:py-24 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 bg-[#01A959]/8 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/60 blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/10 text-[#01A959] border border-[#01A959]/20">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Features We Build</h2>
            <p className="mt-3 text-gray-500 max-w-lg mx-auto">Battle-tested building blocks that ship in every app we make.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={stagger}>
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} variants={cardIn}>
                  <TiltCard className="h-full">
                    <div
                      className="h-full rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-gray-200 transition-all duration-300 p-6 flex flex-col gap-4 cursor-default group"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div
                        className="w-13 h-13 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${f.accent}18`, border: `1.5px solid ${f.accent}40` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: f.accent }} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 mb-1">{f.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                      </div>
                      <div
                        className="mt-auto h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(to right, ${f.accent}, ${f.accent}44)` }}
                      />
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* ── Tech Stack ─────────────────────────── */}
      <motion.section
        className="relative py-16 sm:py-24 bg-gray-950 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)", backgroundSize: "48px 48px" }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#01A959]/10 blur-3xl rounded-full" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/15 text-[#4ade80] border border-[#01A959]/25">
              Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Technology & Integrations</h2>
            <p className="mt-3 text-gray-400 max-w-lg mx-auto">Best-in-class tools chosen for reliability and scale.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5" variants={stagger}>
            {techStack.map((t, i) => (
              <motion.div key={i} variants={cardIn}>
                <TiltCard className="h-full">
                  <div
                    className="h-full rounded-2xl border border-white/8 bg-white/5 hover:bg-white/10 hover:border-white/15 transition-all duration-300 p-5 flex items-center gap-4 cursor-default group"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {t.logo}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{t.name}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

            <HappyClients/>

             <StartProject />

      {/* ── Process ────────────────────────────── */}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Our Process & Timeline</h2>
            <p className="mt-2 text-gray-400 text-sm sm:text-base">May vary with requirements</p>
          </motion.div>


           

          {/* Timeline */}
          <div className="relative">
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
                  <div
                    className="shrink-0 z-10 w-10 h-10 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-sm sm:text-xl font-extrabold shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}bb)` }}
                  >
                    {item.step}
                  </div>
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

      {/* ── Pricing ────────────────────────────── */}
      <motion.section
        id="pricing"
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
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-48 bg-[#01A959]/15 blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/15 text-[#4ade80] border border-[#01A959]/25">
              Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">Transparent Pricing</h2>
            <p className="mt-3 text-gray-400 max-w-lg mx-auto">Pick the plan that fits your stage. Scale anytime.</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" variants={stagger}>
            {pricingModels.map((model, i) => (
              <motion.div key={i} variants={cardIn} className="relative">
                {model.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                    style={{ background: model.accent }}
                  >
                    Most Popular
                  </div>
                )}
                <TiltCard className="h-full">
                  <div
                    className={`h-full rounded-2xl border p-6 flex flex-col gap-5 transition-all duration-300 cursor-default ${
                      model.popular
                        ? "border-[#01A959]/50 bg-[#01A959]/8 hover:bg-[#01A959]/12 shadow-xl shadow-[#01A959]/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Header */}
                    <div>
                      <div
                        className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-lg font-bold text-white"
                        style={{ background: `${model.accent}30`, border: `1.5px solid ${model.accent}50` }}
                      >
                        {i === 0 ? "🚀" : i === 1 ? "⚡" : "🏢"}
                      </div>
                      <h3 className="text-xl font-extrabold text-white">{model.name}</h3>
                      <p className="text-sm text-gray-400 mt-1">{model.description}</p>
                      <div className="mt-4 flex items-end gap-1">
                        <span className="text-4xl font-black text-white">{model.price}</span>
                        {model.suffix && <span className="text-xl font-bold mb-1" style={{ color: model.accent }}>{model.suffix}</span>}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="flex flex-col gap-2.5 flex-1">
                      {model.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: model.accent }} />
                          <span className="text-sm text-gray-300">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      onClick={() => document.getElementById("startproject")?.scrollIntoView({ behavior: "smooth" })}
                      className="w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 mt-2"
                      style={
                        model.popular
                          ? { background: model.accent, color: "#fff" }
                          : { background: `${model.accent}20`, color: model.accent, border: `1px solid ${model.accent}40` }
                      }
                    >
                      Book a Demo
                    </button>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── FAQs ───────────────────────────────── */}
      <motion.section
        id="faqs"
        className="relative py-16 sm:py-24 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
      >
        <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 bg-green-50 blur-3xl rounded-full" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#01A959]/10 text-[#01A959] border border-[#01A959]/20">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Common Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-gray-100 bg-gray-50 px-5 sm:px-6 hover:border-[#01A959]/30 hover:bg-[#01A959]/4 transition-colors duration-200"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-gray-900 hover:text-[#01A959] py-4 [&>svg]:text-[#01A959]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm sm:text-base pb-4 leading-relaxed">
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