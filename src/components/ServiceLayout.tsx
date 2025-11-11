// components/ServiceLayout.tsx
"use client";

import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceLayoutProps {
  children: ReactNode;
  /**
   * If true, the layout will treat the first child as full-bleed hero.
   * Default: true
   */
  fullBleedHero?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, when: "beforeChildren" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ServiceLayout({ children, fullBleedHero = true }: ServiceLayoutProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    // Use min-h-screen rather than h-dvh and avoid large negative margins
    <div className="min-h-screen bg-white selection:bg-[#01A959]/20 selection:text-[#034022] antialiased">
      <Header />

      <motion.main
        className="relative"
        initial="hidden"
        animate="show"
        variants={containerVariants}
        aria-live="polite"
      >
        {/* 1) Full-bleed hero (if present and enabled) */}
        {fullBleedHero && childrenArray.length > 0 && (
          <div className="w-full overflow-hidden">
            <motion.div variants={fadeUp} className="w-full mt-0">
              {childrenArray[0]}
            </motion.div>
          </div>
        )}

        {/* 2) Remaining children - wrap them in a centered container so gutters align with header */}
        <motion.div variants={fadeUp}>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {fullBleedHero ? childrenArray.slice(1) : childrenArray}
          </div>
        </motion.div>
      </motion.main>

      <Footer />

      {/* Floating WhatsApp - tucked in a safe area, slightly smaller on tiny screens */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <motion.a
          href="https://wa.me/+919566515735"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, duration: 0.6 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#25D366] to-[#1DA851]" />
          <div className="absolute -inset-0.5 rounded-full opacity-10 blur-sm" />
          <span className="relative z-10 flex items-center justify-center w-full h-full text-white">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </span>
        </motion.a>
      </div>

      {/* Mobile CTA - safe-area aware, doesn't block content, hides at very small widths if needed */}
      <motion.div
        className="md:hidden fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-gray-200 z-30"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        {/* Use env(safe-area-inset-bottom) so the button sits above device gesture/home bar */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            className="w-full bg-[#01A959] hover:bg-[#018f4d] text-white py-3 text-base shadow-lg flex items-center justify-center gap-3"
            onClick={() => {
              const el = document.getElementById("startproject");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            style={{ paddingBottom: "env(safe-area-inset-bottom, 12px)" }}
          >
            Get a Free Audit
          </Button>
        </div> */}
      </motion.div>
    </div>
  );
}
