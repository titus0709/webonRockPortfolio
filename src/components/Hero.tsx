"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/heroBg.jpg";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in your web design and development services. I'd like to discuss how you can help grow my business."
  );
  const whatsappUrl = `https://wa.me/919566515735?text=${whatsappMessage}`;

  return (
    <section 
      className="relative md:py-32 min-h-screen lg:-top-40 -top-28 overflow-hidden" 
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90"></div>
      
      {/* Animated circles in background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#01A959]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading with enhanced styling */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl lg:mt-14 font-bold text-gray-900 mb-6 leading-tight pt-36 animate-fade-in">
            Websites & Apps That Turn Visitors Into{" "}
            <span className="text-[#01A959] relative inline-block">
              Paying Customers
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C80 3 220 3 298 10" stroke="#01A959" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Design, build and SEO that grows revenue for small businesses.
          </p>
          
          {/* CTA Buttons with enhanced hover effects */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-[#01A959] hover:bg-[#018f4d] text-white px-8 py-6 text-lg group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <a href="#work">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-[#01A959] hover:text-[#01A959] hover:bg-[#01A959]/5 px-8 py-6 text-lg group shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                See Our Work
              </Button>
            </a>
          </div>

          {/* Stats Section with animated counters */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto pb-6">
            <div className="text-center group hover:scale-105 transition-transform duration-300 p-6 rounded-2xl  ">
              <div className="text-3xl md:text-5xl font-bold text-[#01A959] mb-2 tabular-nums">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
              <div className="w-16 h-1 bg-[#01A959] mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300 p-6 rounded-2xl ">
              <div className="text-3xl md:text-5xl font-bold text-[#01A959] mb-2 tabular-nums">
                <AnimatedCounter end={2} suffix="+" />
              </div>
              <div className="text-sm text-gray-600 font-medium">Years Experience in the Field</div>
              <div className="w-16 h-1 bg-[#01A959] mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300 p-6 rounded-2xl ">
              <div className="text-3xl md:text-5xl font-bold text-[#01A959] mb-2 tabular-nums">
                <AnimatedCounter end={24} suffix="/7" />
              </div>
              <div className="text-sm text-gray-600 font-medium">Support Available</div>
              <div className="w-16 h-1 bg-[#01A959] mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}