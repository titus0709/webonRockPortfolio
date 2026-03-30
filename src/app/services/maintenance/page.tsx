"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Shield, Zap, RefreshCw, AlertTriangle, CheckCircle, Clock, ChevronDown, ArrowRight, Star } from "lucide-react";


import Footer from "@/components/Footer";
import Header from "@/components/Header";
// ─── Data ─────────────────────────────────────────────────────────────────────

const problems = [
  { icon: AlertTriangle, title: "Unexpected Downtime", description: "Site crashes cost you customers and revenue every hour they go unresolved.", stat: "~$5,600/min" },
  { icon: RefreshCw, title: "Outdated Plugins", description: "Stale plugins are the #1 vector for WordPress breaches worldwide.", stat: "97% of breaches" },
  { icon: Zap, title: "Slow Page Speed", description: "Each extra second of load time slashes conversions and tanks your SEO rankings.", stat: "7% fewer conversions" },
];

const included = [
  { icon: Shield, title: "Security Monitoring", description: "24/7 malware scanning, firewall rules, and threat response." },
  { icon: RefreshCw, title: "Regular Updates", description: "WordPress core, themes, and plugins kept current and tested." },
  { icon: Zap, title: "Performance Optimization", description: "Continuous speed monitoring, caching, and image optimization." },
  { icon: Clock, title: "Daily Backups", description: "Automated off-site backups with one-click restore capability." },
];

const extras = [
  "Text & content updates", "Image replacements", "Form modifications",
  "Menu changes", "Plugin configuration", "Bug fixes", "CSS tweaks", "Email setup",
];

const plans = [
  {
    name: "Bronze",
    price: "₹1,500",
    period: "/month",
    description: "Essential maintenance for small sites",
    color: "#CD7F32",
    features: [
      "Weekly backups",
      "Monthly updates",
      "Security monitoring",
      "Uptime monitoring",
      "2 hours support/month",
      "48-hour response time",
    ],
  },
  {
    name: "Silver",
    price: "Custom",
    period: " pricing",
    description: "Complete peace of mind for growing businesses",
    color: "#01A959",
    popular: true,
    features: [
      "Daily backups",
      "Weekly updates",
      "Advanced security",
      "Performance optimization",
      "5 hours support/month",
      "24-hour response time",
      "Monthly reports",
    ],
  },
  {
    name: "Gold",
    price: "Custom",
    period: " pricing",
    description: "Priority support for mission-critical sites",
    color: "#D4AF37",
    features: [
      "Real-time backups",
      "Immediate updates",
      "Premium security suite",
      "Advanced optimization",
      "10 hours support/month",
      "4-hour response time",
      "Priority phone support",
    ],
  },
];

const steps = [
  { n: "01", title: "Site Audit", desc: "We review your current setup, flag vulnerabilities, and document the baseline." },
  { n: "02", title: "Backup & Secure", desc: "Full site backup taken, security hardening applied, and monitoring activated." },
  { n: "03", title: "Optimize", desc: "Speed tuning, caching layers, and image compression pushed live." },
  { n: "04", title: "Monitor", desc: "Ongoing uptime checks, automated reporting, and proactive alerting." },
];

const faqs = [
  { q: "What's included in 'support hours'?", a: "Support hours cover small changes like text updates, image swaps, form modifications, and bug fixes. Larger projects are quoted separately." },
  { q: "What if my site gets hacked?", a: "We'll restore from backup, remove malware, patch vulnerabilities, and implement additional security — all included in your plan." },
  { q: "Can I cancel anytime?", a: "Yes, all plans are month-to-month with no long-term contracts. We believe in earning your business every month." },
  { q: "Do you work with all platforms?", a: "We specialize in WordPress but also support custom PHP, React/Next.js, and most modern web platforms." },
  { q: "What's your response time?", a: "Response times vary: Bronze (48 hrs), Silver (24 hrs), Gold (4 hrs). Emergencies are prioritized across all plans." },
  { q: "Do you provide hosting?", a: "We can manage your existing hosting or recommend and configure reliable hosting optimized for your platform." },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return [ref, inView];
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#01A959] mb-3">
      {children}
    </span>
  );
}

function RevealBlock({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useReveal();
  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StatPill({ value }: { value: string }) {
  return (
    <span className="inline-block mt-3 text-xs font-bold tracking-wide px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-100">
      {value}
    </span>
  );
}

function ProblemCard({ icon: Icon, title, description, stat, delay }: { icon: any; title: string; description: string; stat: string; delay: number }) {
  return (
    <RevealBlock delay={delay}>
      <div
        className="relative group h-full rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/8 hover:-translate-y-1 overflow-hidden cursor-default"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        <div className="relative">
          <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
            <Icon className="w-5 h-5 text-red-500" />
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
          <StatPill value={stat} />
        </div>
      </div>
    </RevealBlock>
  );
}

function IncludedCard({ icon: Icon, title, description, delay }: { icon: any; title: string; description: string; delay: number }) {
  return (
    <RevealBlock delay={delay}>
      <div className="group h-full rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#01A959]/10 hover:-translate-y-1 hover:border-[#01A959]/20 cursor-default">
        <div className="w-11 h-11 rounded-xl bg-[#01A959]/10 flex items-center justify-center mb-4 group-hover:bg-[#01A959]/20 transition-colors">
          <Icon className="w-5 h-5 text-[#01A959]" />
        </div>
        <h3 className="text-sm font-bold text-gray-900 mb-1.5">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </RevealBlock>
  );
}

function PlanCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const [ref, inView] = useReveal();
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1 ${
        plan.popular
          ? "bg-[#01A959] text-white shadow-2xl shadow-[#01A959]/30 scale-[1.02]"
          : "bg-white border border-gray-100 hover:shadow-xl hover:shadow-gray-200/60"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white text-[#01A959] text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
          <Star className="w-3 h-3 fill-[#01A959]" /> Most Popular
        </div>
      )}
      <div className="mb-6">
        <div
          className="inline-block w-2 h-2 rounded-full mb-3"
          style={{ backgroundColor: plan.color }}
        />
        <h3 className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-gray-900"}`}>
          {plan.name}
        </h3>
        <p className={`text-xs ${plan.popular ? "text-white/70" : "text-gray-400"}`}>
          {plan.description}
        </p>
      </div>
      <div className="mb-6">
        <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"}`}>
          {plan.price}
        </span>
        <span className={`text-sm ${plan.popular ? "text-white/60" : "text-gray-400"}`}>
          {plan.period}
        </span>
      </div>
      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-2.5">
            <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? "text-white" : "text-[#01A959]"}`} />
            <span className={`text-sm ${plan.popular ? "text-white/90" : "text-gray-600"}`}>{f}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={scrollToContact}
        className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 group ${
          plan.popular
            ? "bg-white text-[#01A959] hover:bg-white/90"
            : "bg-[#01A959] text-white hover:bg-[#018f4d]"
        }`}
      >
        Get Started <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </motion.div>
  );
}

function FAQItem({ faq }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50/60 transition-colors"
      >
        <span className="text-sm font-semibold text-gray-900">{faq.q}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── NavBar ───────────────────────────────────────────────────────────────────

function AnchorNav() {
  const links = [
    { label: "Overview", href: "#overview" },
    { label: "What's Included", href: "#included" },
    { label: "Plans", href: "#plans" },
    { label: "Process", href: "#onboarding" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];
  const [active, setActive] = useState("#overview");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 overflow-x-auto">
        <nav className="flex items-center gap-1 py-3 min-w-max">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActive(l.href)}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                active === l.href
                  ? "bg-[#01A959] text-white"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

// ─── Ticker ───────────────────────────────────────────────────────────────────

function Ticker() {
  const items = [
    "Security Monitoring", "Daily Backups", "Performance Tuning",
    "Plugin Updates", "Uptime Alerts", "Monthly Reports",
    "Bug Fixes", "24/7 Support", "Malware Removal",
  ];
  return (
    <div className="bg-[#01A959] overflow-hidden py-3">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-white/90 text-xs font-semibold tracking-widest uppercase flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-white/50 inline-block" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function HeroSection() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative md:-mt-[114px] -mt-[114px] h-dvh sm:h-[65vh] md:h-[72vh] lg:h-dvh flex flex-col items-center justify-center text-center overflow-hidden bg-gray-950 px-6 py-24">
      
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}

      />
      
      
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#01A959]/20 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#01A959]/15 border border-[#01A959]/30 text-[#01A959] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
        >
          
          <div className="w-2 h-2 rounded-full bg-[#01A959] animate-pulse" />
          Website Maintenance Plans
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
          Your site, <br className="hidden sm:block" />
          <span className="text-[#01A959]">always on.</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Proactive maintenance plans that keep your website secure, fast, and up-to-date — so you never have to think about it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="bg-[#01A959] hover:bg-[#018f4d] text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-[#01A959]/30 flex items-center justify-center gap-2 group"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#plans"
            className="bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl transition-colors border border-white/10 flex items-center justify-center"
          >
            View Plans
          </motion.a>
        </div>

        {/* Trust stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-14 pt-10 border-t border-white/10">
          {[
            { label: "Sites Maintained", value: "10+" },
            { label: "Avg Response Time", value: "<30 min" },
            { label: "Client Retention", value: "97%" },
            { label: "Years Experience", value: "3+" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-extrabold text-white">{s.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section id="overview" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <RevealBlock>
          <div className="text-center mb-14">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Don't let these issues cost you business
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Without regular maintenance, your website is a liability — not an asset.
            </p>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {problems.map((p, i) => (
            <ProblemCard key={i} {...p} delay={i * 0.08} />
          ))}
        </div>

        <RevealBlock delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl bg-[#01A959] px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-1">Our Solution</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                Proactive maintenance that prevents problems before they happen. We monitor, update, optimize, and secure your site so you can focus on running your business.
              </p>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}

function IncludedSection() {
  return (
    <section id="included" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <RevealBlock>
          <div className="text-center mb-14">
            <SectionLabel>What You Get</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Everything included, nothing hidden
            </h2>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {included.map((item, i) => (
            <IncludedCard key={i} {...item} delay={i * 0.07} />
          ))}
        </div>

        <RevealBlock delay={0.1}>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
              Plus small changes — covered in your support hours
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {extras.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-[#01A959]/30 hover:shadow-sm transition-all">
                  <CheckCircle className="w-4 h-4 text-[#01A959] flex-shrink-0" />
                  <span className="text-xs font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}

function PlansSection() {
  return (
    <section id="plans" className="py-20 lg:py-28 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <RevealBlock>
          <div className="text-center mb-14">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Choose your plan
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              All plans are month-to-month. No long-term contracts.
            </p>
          </div>
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OnboardingSection() {
  return (
    <section id="onboarding" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <RevealBlock>
          <div className="text-center mb-14">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Simple 4-step onboarding
            </h2>
            <p className="text-gray-500 text-sm">We're live and protecting your site in under 48 hours.</p>
          </div>
        </RevealBlock>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-[#01A959] via-[#01A959]/30 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <RevealBlock key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl bg-[#01A959] flex items-center justify-center shadow-lg shadow-[#01A959]/20 z-10">
                    <span className="text-white font-extrabold text-sm">{step.n}</span>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-2xl px-6 py-5 border border-gray-100 group-hover:border-[#01A959]/20 group-hover:shadow-md transition-all duration-300">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faqs" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <RevealBlock>
          <div className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
          </div>
        </RevealBlock>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <RevealBlock key={i} delay={i * 0.05}>
              <FAQItem faq={faq} index={i} />
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", website: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
        <RevealBlock>
          <div className="text-center mb-12">
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Protect your website today
            </h2>
            <p className="text-gray-500 text-sm">Sign up for a maintenance plan or get a custom quote.</p>
          </div>
        </RevealBlock>

        <RevealBlock delay={0.1}>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 rounded-2xl bg-[#01A959]/5 border border-[#01A959]/20"
              >
                <div className="w-16 h-16 rounded-full bg-[#01A959]/15 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#01A959]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message sent!</h3>
                <p className="text-gray-500 text-sm">We'll be in touch within one business day.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-4 bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "name" as const, label: "Your Name", type: "text", placeholder: "Jane Smith" },
                    { id: "email" as const, label: "Email Address", type: "email", placeholder: "jane@example.com" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.id]}
                        onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#01A959]/30 focus:border-[#01A959] transition-all placeholder-gray-300"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Website URL</label>
                  <input
                    type="url"
                    placeholder="https://yoursite.com"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#01A959]/30 focus:border-[#01A959] transition-all placeholder-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your site and what you need..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#01A959]/30 focus:border-[#01A959] transition-all resize-none placeholder-gray-300"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#01A959] hover:bg-[#018f4d] text-white font-semibold py-4 rounded-xl transition-colors shadow-md shadow-[#01A959]/20 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </RevealBlock>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MaintenancePage() {
  return (
    <>
      <Header />
    <div className="font-sans antialiased">
      <HeroSection />
      
      <Ticker />
      <AnchorNav />
      <ProblemsSection />
      <IncludedSection />
      <PlansSection />
      <OnboardingSection />
      <FAQSection />
      <ContactSection />
      <Footer/>
    </div>
    </>
  );
}