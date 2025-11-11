import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Webon<span className="text-[#01A959]">Rock</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building digital experiences that drive results for local businesses and providing Digital Solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#01A959] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#01A959] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#01A959] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#01A959] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/website-development" className="hover:text-[#01A959] transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/app-development" className="hover:text-[#01A959] transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services/seo-optimization" className="hover:text-[#01A959] transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="hover:text-[#01A959] transition-colors">
                  Website Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/branding" className="hover:text-[#01A959] transition-colors">
                  Branding & Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#work" className="hover:text-[#01A959] transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-[#01A959] transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-[#01A959] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#01A959] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#01A959] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#01A959] flex-shrink-0 mt-0.5" />
                <a href="tel:+919566515735" className="hover:text-[#01A959] transition-colors">
                  (+91) 95665-15735
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#01A959] flex-shrink-0 mt-0.5" />
                <a href="mailto:buildwithwebonrock@gmail.com" className="hover:text-[#01A959] transition-colors">
                 buildwithwebonrock@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#01A959] flex-shrink-0 mt-0.5" />
                <span>Tiruppur<br />Tamilnadu,IN</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} WebOnRock. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
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