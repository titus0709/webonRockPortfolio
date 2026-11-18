
"use client";

import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const services = [
  "Website Development",
  "Lead Generation & Ads",
  "Shopify & E-commerce",
  "SEO Optimization",
  "CRM & AI Automation",
];

const companyLinks = [
  { label: "Our Work", href: "/#work" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Our Services", href: "/#services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/#start-project" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#090C0B] text-white">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:55px_55px]" />
        <div className="absolute bottom-0 left-[-100px] w-[350px] h-[250px] rounded-full bg-[#B7F36B]/[0.05] blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8">

        {/* Top CTA */}
        <div className="py-12 sm:py-16 border-b border-white/[0.08]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-7">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 text-xs font-medium tracking-wider text-[#B7F36B] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#B7F36B] shadow-[0_0_10px_#B7F36B]" />
                Have a project in mind?
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Let's build something
                <span className="text-[#B7F36B]"> that grows.</span>
              </h2>

              <p className="mt-3 text-sm sm:text-base text-white/45">
                Tell us your goals. We'll help you find the right solution.
              </p>
            </div>

            <a
              href="https://wa.me/919566515735"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 shrink-0 rounded-full bg-[#B7F36B] px-6 py-3.5 text-sm font-semibold text-[#090C0B] transition-all duration-300 hover:bg-[#c9ff82] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(183,243,107,0.18)]"
            >
              <MessageCircle className="w-4 h-4" />
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-12 sm:py-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center text-2xl font-bold tracking-tight">
              Webon<span className="text-[#B7F36B]">Rock</span>
              <span className="ml-1.5 w-2 h-2 rounded-full bg-[#B7F36B] mt-3" />
            </Link>

            <p className="mt-5 text-sm text-white/45 leading-relaxed max-w-xs">
              We help businesses attract customers, generate leads, and grow
              through websites, digital marketing, and automation.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://www.instagram.com/webonrock/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/55 transition-all duration-300 hover:text-[#090C0B] hover:bg-[#B7F36B] hover:border-[#B7F36B]"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/titus-kirubakaran/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/55 transition-all duration-300 hover:text-[#090C0B] hover:bg-[#B7F36B] hover:border-[#B7F36B]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6">
              What We Do
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-2 text-sm text-white/45 hover:text-[#B7F36B] transition-colors"
                  >
                    <span>{service}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6">
              Explore
            </h3>

            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/45 hover:text-[#B7F36B] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6">
              Get in Touch
            </h3>

            <div className="space-y-5">
              <a
                href="tel:+919566515735"
                className="group flex items-start gap-3"
              >
                <div className="w-9 h-9 shrink-0 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center group-hover:border-[#B7F36B]/30 group-hover:bg-[#B7F36B]/[0.08] transition-all">
                  <Phone className="w-4 h-4 text-[#B7F36B]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-white/35 mb-1">Call us</p>
                  <p className="text-sm text-white/70 group-hover:text-[#B7F36B] transition-colors break-words">
                    +91 95665 15735
                  </p>
                </div>
              </a>

              <a
                href="mailto:buildwithwebonrock@gmail.com"
                className="group flex items-start gap-3"
              >
                <div className="w-9 h-9 shrink-0 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center group-hover:border-[#B7F36B]/30 group-hover:bg-[#B7F36B]/[0.08] transition-all">
                  <Mail className="w-4 h-4 text-[#B7F36B]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-white/35 mb-1">Email us</p>
                  <p className="text-sm text-white/70 group-hover:text-[#B7F36B] transition-colors break-all">
                    buildwithwebonrock@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 shrink-0 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#B7F36B]" />
                </div>
                <div>
                  <p className="text-xs text-white/35 mb-1">Location</p>
                  <p className="text-sm text-white/70">
                    Working Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <p className="text-xs sm:text-sm text-white/35 text-center md:text-left">
              © {new Date().getFullYear()} WebOnRock. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-xs sm:text-sm">
              <Link
                href="/privacy"
                className="text-white/35 hover:text-[#B7F36B] transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-white/35 hover:text-[#B7F36B] transition-colors"
              >
                Terms of Service
              </Link>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs text-white/35 hover:text-[#B7F36B] transition-colors"
            >
              Back to top
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
