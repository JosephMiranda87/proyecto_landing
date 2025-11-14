import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

/**
 * HERO SECTION
 * Full-width hero section with background image and call-to-action
 * Responsive layout for mobile and desktop
 */

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-foreground/60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
          Transforma Tu Negocio
          <br />
          <span className="text-secondary">Con Nuestra Solución</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-background/90 mb-8 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
          >
            Comenzar Ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-background text-background hover:bg-background hover:text-foreground text-lg px-8 py-6"
          >
            Conocer Más
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
