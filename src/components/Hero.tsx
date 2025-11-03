import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/heroBg.jpg"; // ✅ Add your image import

export default function Hero() {
  return (
    <section className="relative md:py-32 min-h-screen -top-32" style={{
          backgroundImage: `url(${heroBg.src})`,
        }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl lg:mt-14 font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Digital Presence with{" "}
            <span className="text-[#01A959]">Expert Web Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            We build high-performance websites and applications that drive results. 
            From concept to launch, we're your partner in digital success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services">
            <Button 
              size="lg" 
              className="bg-[#01A959] hover:bg-[#018f4d] text-white px-8 py-6 text-lg group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>

            <a href="#work">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-300 hover:border-[#01A959] hover:text-[#01A959] px-8 py-6 text-lg group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              See Our Work
            </Button>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 md:grid-cols-3 gap-8 max-w-3xl mx-auto">

            {/* <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#01A959] mb-2">150+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div> */}

            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-[#01A959] mb-2   ">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-[#01A959] mb-2 ">2+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-[#01A959] mb-2 ">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}