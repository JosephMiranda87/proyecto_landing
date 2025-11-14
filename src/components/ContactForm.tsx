import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

/**
 * CONTACT FORM SECTION
 * Contact form with validation (template for future Firebase integration)
 * Fields: Name, Company, Email, Phone, Message
 * 
 * NOTE: This is a template. Form submission will be integrated with Firebase
 * using fetch GET/POST methods in the future.
 */

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Integrate with Firebase
    // This will use fetch GET/POST methods to send data to Firebase
    console.log("Form data to be sent to Firebase:", formData);
    
    // Reset form after submission
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
    
    // Show success message (temporal)
    alert("¡Mensaje enviado! (Integración con Firebase pendiente)");
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contáctanos
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estamos aquí para ayudarte.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <Label htmlFor="name" className="text-foreground font-medium">
                Nombre *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tu nombre completo"
                className="mt-2 bg-background border-input focus:border-primary focus:ring-primary"
              />
            </div>

            {/* Company Field */}
            <div>
              <Label htmlFor="company" className="text-foreground font-medium">
                Empresa *
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Nombre de tu empresa"
                className="mt-2 bg-background border-input focus:border-primary focus:ring-primary"
              />
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Field */}
              <div>
                <Label htmlFor="email" className="text-foreground font-medium">
                  Correo Electrónico *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@email.com"
                  className="mt-2 bg-background border-input focus:border-primary focus:ring-primary"
                />
              </div>

              {/* Phone Field */}
              <div>
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Teléfono *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+52 123 456 7890"
                  className="mt-2 bg-background border-input focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <Label htmlFor="message" className="text-foreground font-medium">
                Mensaje *
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Cuéntanos cómo podemos ayudarte..."
                rows={6}
                className="mt-2 bg-background border-input focus:border-primary focus:ring-primary resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
            >
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
