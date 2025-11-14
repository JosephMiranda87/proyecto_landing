import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * NAVBAR COMPONENT
 * Responsive navigation bar with logo, menu links, and CTA button
 * Mobile: Hamburger menu
 * Desktop: Horizontal navigation
 */

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navigation links
  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Menú", href: "#menu" },
    { name: "Sección", href: "#seccion" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="text-2xl md:text-3xl font-bold text-primary">
              TuNegocio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Mensajes recientes
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Mensajes recientes
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
