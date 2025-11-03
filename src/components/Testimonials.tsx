import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mr.Ganesan",
    role: "Namma Ooru Tea Kadai",
    // avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "WebOnRock transformed our online presence completely. The website they built is not only beautiful but also drives real business results. Highly recommended!",
    rating: 5
  },
  {
    name: "Mr.Ganesan",
    role: "Namma Ooru Tea Kadai",
    // avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "WebOnRock transformed our online presence completely. The website they built is not only beautiful but also drives real business results. Highly recommended!",
    rating: 5
  },
  {
    name: "Mr.Ganesan",
    role: "Namma Ooru Tea Kadai",
    // avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "WebOnRock transformed our online presence completely. The website they built is not only beautiful but also drives real business results. Highly recommended!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-[#01A959] hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#01A959] text-[#01A959]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    {/* <AvatarImage src={testimonial.avatar} alt={testimonial.name} /> */}
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}