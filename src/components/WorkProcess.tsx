import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Planning",
    description: "We start by understanding your goals, target audience, and project requirements through detailed consultation."
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design & Development",
    description: "Our team creates stunning designs and develops robust solutions using cutting-edge technologies."
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Support",
    description: "We ensure a smooth launch and provide ongoing support to help your digital presence thrive."
  }
];

export default function WorkProcess() {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="h-full border-2 hover:border-[#01A959] hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-6xl font-bold text-[#01A959]/10 mb-4">
                      {step.number}
                    </div>
                    <div className="w-14 h-14 bg-[#01A959] rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#01A959]/30 z-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}