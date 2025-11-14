import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PlansSection from "@/components/PlansSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import MessagesSection from "@/components/MessagesSection";
import Footer from "@/components/Footer";

/**
 * MAIN LANDING PAGE
 * Complete landing page template with all sections
 * Fully responsive and ready for customization
 * 
 * Structure:
 * - Navbar (fixed top navigation)
 * - Hero (full-screen hero section)
 * - Services Section (3 service cards)
 * - Plans Section (pricing plans)
 * - Testimonials Section (customer reviews)
 * - Contact Form (template for Firebase integration)
 * - Messages Section (recent messages table)
 * - Footer (contact info and links)
 */

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section (Section A) */}
      <ServicesSection />

      {/* Plans Section (Section B) */}
      <PlansSection />

      {/* Testimonials Section (Section C) */}
      <TestimonialsSection />

      {/* Contact Form */}
      <ContactForm />

      {/* Messages Section - Recent messages from contact form */}
      <MessagesSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
