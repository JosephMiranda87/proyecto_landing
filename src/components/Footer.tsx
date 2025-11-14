import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

/**
 * FOOTER COMPONENT
 * Footer with contact information, social media links, and copyright
 * Responsive layout
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">TuNegocio</h3>
            <p className="text-background/80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-background/80 hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#menu" className="text-background/80 hover:text-primary transition-colors">
                  Menú
                </a>
              </li>
              <li>
                <a href="#seccion" className="text-background/80 hover:text-primary transition-colors">
                  Sección
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/80 hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-1 text-primary" />
                <span className="text-background/80">
                  Calle Principal #123, Ciudad, CP 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-primary" />
                <a href="tel:+521234567890" className="text-background/80 hover:text-primary transition-colors">
                  +52 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-primary" />
                <a href="mailto:contacto@tunegocio.com" className="text-background/80 hover:text-primary transition-colors">
                  contacto@tunegocio.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <p className="text-background/80 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80">
            © {currentYear} TuNegocio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
