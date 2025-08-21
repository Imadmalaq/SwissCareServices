import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import WhyUs from "@/components/sections/why-us";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

const Index = () => {
  return (
    <div className="min-h-screen mobile-container">
      <Navigation />
      <Hero />
      <Services />
      <WhyUs />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
