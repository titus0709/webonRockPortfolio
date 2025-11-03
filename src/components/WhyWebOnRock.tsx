import { Card, CardContent } from "@/components/ui/card";
import { Zap, Users, Award, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that keeps your users engaged and search engines happy."
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Beautiful interfaces designed with your users' needs and behaviors in mind."
  },
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Years of experience delivering successful projects across various industries."
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Solutions built to scale with your business and drive measurable results."
  }
];

export default function WhyWebOnRock() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose WebOnRock?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine technical excellence with creative innovation to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="text-center border-2 hover:border-[#01A959] hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-[#01A959]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#01A959]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}