import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Briefcase, Users } from "lucide-react";

/**
 * SERVICES SECTION (Section A)
 * Three service cards with name, description, and price
 * Responsive grid layout
 */

const ServicesSection = () => {
  const services = [
    {
      icon: ShoppingCart,
      name: "Servicio Premium",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      price: "$99.00",
    },
    {
      icon: Briefcase,
      name: "Servicio Empresarial",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      price: "$149.00",
    },
    {
      icon: Users,
      name: "Servicio Personalizado",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      price: "$199.00",
    },
  ];

  return (
    <section id="menu" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-border bg-card"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  {service.name}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge className="text-lg px-4 py-2 bg-primary text-primary-foreground">
                    {service.price}
                  </Badge>
                  <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
                    Ver más →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
