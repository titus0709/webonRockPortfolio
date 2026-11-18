
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, Mail, Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/webonrock-white.png";
import { Button } from "./ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLElement | null>(null);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("click", onDocClick);
    }

    return () => {
      document.removeEventListener("click", onDocClick);
    };
  }, [open]);

  const navItems = [
    { href: "/#services", label: "Services" },
    { href: "/#case-studies", label: "Results" },
    { href: "/#video_testimonials", label: "Testimonials" },
    { href: "/#work", label: "Our Work" },
  ];

  const handleNavClick = () => setOpen(false);

  return (
    <header
      ref={wrapperRef}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-2 sm:px-6 sm:pt-3"
      aria-label="Site header"
    >
      <div className="w-full max-w-7xl">

        {/* Main Navigation */}
        <div className="relative rounded-2xl border border-white/10 bg-[#101512]/90 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300">

          <div className="flex h-[68px] items-center justify-between px-4 sm:px-6">

            {/* Logo */}
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-2.5"
              onClick={handleNavClick}
            >
              <Image
                src={logo}
                alt="WebOnRock logo"
                className="h-16 w-10 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11"
              />

              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
                  Webon<span className="text-[#B7F36B]">Rock</span>
                </span>

                <span className="mt-0.5 text-[9px] font-medium tracking-[0.16em] text-white/45 sm:text-[10px]">
                  Plan · DEV · GROWTH
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden items-center gap-1 md:flex"
              aria-label="Primary navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/65 transition-all duration-200 hover:bg-white/[0.05] hover:text-[#B7F36B] lg:px-4"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">

              {/* Desktop CTA */}
              <a href="#start-project" className="hidden lg:block">
                <Button
                  size="lg"
                  className="group h-11 rounded-xl bg-[#B7F36B] px-5 text-sm font-semibold text-[#10150C] shadow-[0_0_25px_rgba(183,243,107,0.10)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#A5E65A]"
                >
                  Let's talk Growth

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>

              {/* Mobile CTA */}
              <a
                href="#start-project"
                className="hidden sm:block lg:hidden"
              >
                <Button
                  size="sm"
                  className="h-10 rounded-lg bg-[#B7F36B] px-4 text-sm font-semibold text-[#10150C] hover:bg-[#A5E65A]"
                >
                  Let's Talk
                </Button>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="rounded-lg p-2.5 text-white transition-colors hover:bg-white/10 hover:text-[#B7F36B] focus:outline-none focus:ring-2 focus:ring-[#B7F36B]/50 md:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>

            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`grid transition-all duration-300 ease-in-out md:hidden ${
              open
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
            aria-hidden={!open}
          >
            <div className="overflow-hidden">
              <div className="border-t border-white/10 px-4 pb-4 pt-3">

                {/* Mobile Links */}
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className="rounded-lg px-3 py-3 text-sm font-medium text-white/75 transition-colors hover:bg-white/[0.05] hover:text-[#B7F36B]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Contact Details */}
                <div className="mt-3 space-y-1 border-t border-white/10 pt-3">

                  <a
                    href="tel:+919566515735"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/55 transition-colors hover:text-[#B7F36B]"
                    onClick={handleNavClick}
                  >
                    <Phone className="h-4 w-4 text-[#B7F36B]" />
                    (+91) 95665-15735
                  </a>

                  <a
                    href="mailto:buildwithwebonrock@gmail.com"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/55 transition-colors hover:text-[#B7F36B]"
                    onClick={handleNavClick}
                  >
                    <Mail className="h-4 w-4 text-[#B7F36B]" />
                    buildwithwebonrock@gmail.com
                  </a>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
