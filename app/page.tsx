import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { GallerySection } from "./components/gallery-section";
import { Hero } from "./components/hero";
import { MaterialsSection } from "./components/materials-section";
import { Navbar } from "./components/navbar";
import { ProcessSection } from "./components/process-section";
import { ServicesSection } from "./components/services-section";
import { TrustSection } from "./components/trust-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MaterialsSection />
        <ServicesSection />
        <TrustSection />
        <ProcessSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
