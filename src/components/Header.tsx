"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, Mail, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLElement | null>(null);

  // measure and push page down so fixed header doesn't overlap content
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const setPadding = () => {
      const h = el.getBoundingClientRect().height;
      document.body.style.paddingTop = `${Math.ceil(h)}px`;
    };

    setPadding();
    window.addEventListener("resize", setPadding);
    return () => {
      window.removeEventListener("resize", setPadding);
      document.body.style.paddingTop = "";
    };
  }, []);

  // close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close mobile panel when clicking outside the header card
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(target)) setOpen(false);
    };
    if (open) document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  const navItems = [
    { href: "/#services", label: "Services" },
    { href: "/#work", label: "Our Work" },
    { href: "/#process", label: "Process" },
    { href: "/#testimonials", label: "Testimonials" },
  ];

  // helper: close mobile menu when a mobile nav is clicked
  const handleNavClick = () => setOpen(false);

  return (
    <header
      ref={wrapperRef}
      className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none"
      aria-label="Site header"
    >
      <div className="pointer-events-auto w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-6">
          <div
            className="bg-white/80 backdrop-blur-lg border border-gray-200 shadow-xl rounded-3xl py-3 transition-all"
            style={{ borderColor: "rgba(156,163,175,0.12)" }}
          >
            <div className="px-4">
              <div className="flex items-center justify-between h-16">
                {/* Logo + name - VISIBLE on all screens and responsive */}
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={() => {
                    setOpen(false);
                    // allow the link to navigate as normal
                  }}
                >
                  <Image
                    src={logo}
                    alt="WebonRock logo"
                    className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                      Webon
                      <span className="text-[#01A959]">Rock</span>
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-gray-500">
                      Design · Dev · Growth
                    </span>
                  </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-2 py-1 text-sm font-medium text-gray-800 rounded-lg transition-all duration-200 hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Right side */}
                <div className="flex items-center gap-4">
                  <div className="hidden lg:flex items-center gap-6 text-sm text-gray-600">
                    <a
                      href="tel:+919566515735"
                      className="flex items-center gap-2 hover:text-[#01A959]"
                    >
                      <Phone className="w-4 h-4" /> (+91) 95665-15735
                    </a>

                    <a
                      href="mailto:buildwithwebonrock@gmail.com"
                      className="flex items-center gap-2 hover:text-[#01A959]"
                    >
                      <Mail className="w-4 h-4" /> buildwithwebonrock@gmail.com
                    </a>
                  </div>

                  {/* mobile menu toggle */}
                  <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-label={open ? "Close menu" : "Open menu"}
                  >
                    {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* mobile menu panel */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
              aria-hidden={!open}
            >
              <div className="px-4 pb-4">
                <div className="bg-white/95 border border-gray-100 rounded-2xl shadow-lg p-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className="block py-3 text-gray-700"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="border-t mt-3 pt-3">
                    <a
                      href="tel:+919566515735"
                      className="flex items-center gap-2 py-2 text-gray-700"
                      onClick={() => setOpen(false)}
                    >
                      <Phone className="w-4 h-4" /> (+91) 95665-15735
                    </a>
                    <a
                      href="mailto:buildwithwebonrock@gmail.com"
                      className="flex items-center gap-2 py-2 text-gray-700"
                      onClick={() => setOpen(false)}
                    >
                      <Mail className="w-4 h-4" /> buildwithwebonrock@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
