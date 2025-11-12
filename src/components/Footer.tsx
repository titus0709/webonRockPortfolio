import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              Webon<span className="text-[#01A959]">Rock</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building digital experiences that drive results for local businesses.
              Digital solutions for web, apps, SEO, and branding.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-1 hover:text-[#01A959] transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-1 hover:text-[#01A959] transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-1 hover:text-[#01A959] transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-1 hover:text-[#01A959] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/website-development"
                  className="block hover:text-[#01A959] transition-colors truncate"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-development"
                  className="block hover:text-[#01A959] transition-colors truncate"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo-optimization"
                  className="block hover:text-[#01A959] transition-colors truncate"
                >
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/maintenance"
                  className="block hover:text-[#01A959] transition-colors truncate"
                >
                  Website Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="block hover:text-[#01A959] transition-colors truncate"
                >
                  Branding &amp; Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#work" className="block hover:text-[#01A959] transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/#process" className="block hover:text-[#01A959] transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="block hover:text-[#01A959] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/about" className="block hover:text-[#01A959] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block hover:text-[#01A959] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#01A959] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+919566515735"
                  className="hover:text-[#01A959] transition-colors break-words"
                >
                  (+91) 95665-15735
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#01A959] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:buildwithwebonrock@gmail.com"
                  className="hover:text-[#01A959] transition-colors break-words"
                >
                  buildwithwebonrock@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#01A959] flex-shrink-0 mt-0.5" />
                <address className="not-italic text-sm text-gray-300 break-words">
                  Tiruppur<br />
                  Tamil Nadu, India
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} WebOnRock. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="hover:text-[#01A959] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#01A959] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
