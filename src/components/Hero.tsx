"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Target,
  Megaphone,
  ShoppingBag,
  Bot,
  CheckCircle2,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import CursorGrid from "@/components/CursorGrid"

// Services
const services = [
  { name: "Website Development", icon: Globe },
  { name: "Lead Generation", icon: Target },
  { name: "Meta & Google Ads", icon: Megaphone },
  { name: "Shopify & E-commerce", icon: ShoppingBag },
  { name: "AI Solutions & Automation", icon: Bot },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in growing my business. I'd like to know how WebOnRock can help me get more customers and generate more sales."
  );

  const whatsappUrl = `https://wa.me/919566515735?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#090C0B] text-white">
       <CursorGrid
        cellSize={60}
        color="#ffffff"
        highlight="area"
        gridStyle="lines"
        radius={140}
        holdTime={400}
        fadeDuration={800}
        fillOpacity={0.06}
        gridOpacity={0.08}
        spotlight={0.6}
        clickPulse
      />

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 35, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-20 h-[550px] w-[550px] rounded-full bg-[#B7F36B]/[0.08] blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#B7F36B]/[0.05] blur-[130px]"
        />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Main Hero */}
        <div className="flex min-h-screen flex-col justify-center pb-12 pt-32 lg:pt-36">

          <motion.div
            className="max-w-5xl"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >

            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B7F36B] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B7F36L]" />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-xs">
                Digital Growth for Your Business
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeUp}
              className="max-w-5xl text-[clamp(2.8rem,7.2vw,6.5rem)] font-bold leading-[1.04] tracking-[-0.055em]"
            >
              Get More Customers.
              <br />
              Generate More Sales.
              <br />
              <motion.span
                className="inline-block text-[#B7F36B]"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(183,243,107,0)",
                    "0 0 25px rgba(183,243,107,0.18)",
                    "0 0 0px rgba(183,243,107,0)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Grow Faster.
              </motion.span>
            </motion.h1>

            {/* Description */}
            {/* <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg"
            >
              Turn your online presence into a consistent source
              of customers with conversion-focused websites,
              advertising, lead generation and smart automation.
            </motion.p> */}

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  className="group h-14 w-full rounded-md bg-[#B7F36B] px-8 text-base font-semibold text-[#10150C] shadow-[0_0_35px_rgba(183,243,107,0.12)] transition-all duration-300 hover:bg-[#A5E65A] hover:shadow-[0_0_40px_rgba(183,243,107,0.25)] sm:w-auto"
                >
                  Let's Grow Your Business

                  <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.a>

              <motion.a
                href="#work"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 w-full rounded-md border-white/15 bg-white/[0.03] px-8 text-base text-white transition-all duration-300 hover:border-[#B7F36B]/50 hover:bg-white/[0.07] hover:text-[#B7F36B] sm:w-auto"
                >
                  Explore Our Work
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Button>
              </motion.a>

            </motion.div>

            {/* Benefit Indicators */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/45"
            >
              {[
                "More Qualified Leads",
                "Higher Conversions",
                "Smarter Automation",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#B7F36B]" />
                  {item}
                </span>
              ))}
            </motion.div>

          </motion.div>

        </div>

        {/* Services Strip */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative border-t border-white/10 py-8"
        >

          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
            Everything You Need to Grow
          </p>

          <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className="group flex cursor-default items-center gap-3"
                >

                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-5 w-5 shrink-0 text-[#B7F36B]/70 transition-colors duration-300 group-hover:text-[#B7F36B]" />
                  </motion.div>

                  <span className="text-xs font-medium text-white/55 transition-colors duration-300 group-hover:text-white sm:text-sm">
                    {service.name}
                  </span>

                </motion.div>
              );
            })}

          </div>

        </motion.div>

      </div>

    </section>
  );
}
