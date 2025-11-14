import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

/**
 * TESTIMONIALS SECTION (Section C)
 * Customer testimonials with ratings
 * Responsive grid layout
 */

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      role: "CEO, Empresa Tech",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Director, Innovación SA",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Fundadora, StartUp Pro",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Descubre por qué confían en nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-border bg-card"
            >
              <CardContent className="pt-6">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
