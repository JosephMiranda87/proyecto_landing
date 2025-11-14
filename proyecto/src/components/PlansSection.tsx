import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

/**
 * PLANS SECTION (Section B)
 * Pricing plans with features list
 * Responsive grid layout
 */

const PlansSection = () => {
  const plans = [
    {
      name: "Plan Básico",
      price: "$29",
      period: "/mes",
      description: "Perfecto para comenzar tu proyecto",
      features: [
        "Lorem ipsum dolor sit",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor",
        "Ut labore et dolore",
      ],
      highlighted: false,
    },
    {
      name: "Plan Pro",
      price: "$79",
      period: "/mes",
      description: "La opción más popular para negocios",
      features: [
        "Todo del Plan Básico",
        "Lorem ipsum dolor sit",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor",
        "Ut labore et dolore",
        "Magna aliqua enim",
      ],
      highlighted: true,
    },
    {
      name: "Plan Empresarial",
      price: "$149",
      period: "/mes",
      description: "Solución completa para grandes equipos",
      features: [
        "Todo del Plan Pro",
        "Lorem ipsum dolor sit",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor",
        "Ut labore et dolore",
        "Soporte prioritario 24/7",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="seccion" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Planes y Precios
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elige el plan que mejor se adapte a tus necesidades.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-lg transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary border-2 shadow-md scale-105"
                  : "border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {plan.description}
                </CardDescription>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground"
                  }`}
                >
                  Comenzar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
