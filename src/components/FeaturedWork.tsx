import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import nammaOoru from "@/assets/nammaKadai.png";
import foodDelivery from "@/assets/foodDelivery.jpg";
import mercy from "@/assets/mercy.png";

const projects = [
  {
    title: "Food Delivery App (Under Development) ",
    description: "A modern food delivery platform with real-time tracking, seamless ordering, and integrated payment processing.",
    image: foodDelivery,
    tags: ["Web App", "Mobile", "Real-time"],
    link: "/case-studies/judah-food-delivery"
  },
  {
    title: "Namma Ooru Tea Kadai",
    description: "Simple Food ordering website for a Bakery",
    image: nammaOoru,
    tags: ["Website", "SEO", "Ordering"],
    link: "https://nammaooruteakadai.in/"
  },
  {
    title: "Mercy School Website",
    description: "Landing page for a Matriculation school to showcase programs and facilitate enrollment.",
    image: mercy,
    tags: ["Website", "SEO"],
    link: "https://www.mercyschool.in/"
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses succeed
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#01A959]/10 text-[#01A959] text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>

                <a href={project.link} target="blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  className="border-2 border-[#01A959] text-[#01A959] hover:bg-[#01A959] hover:text-white group/btn"
                >
                  View Site
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
                </a>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}