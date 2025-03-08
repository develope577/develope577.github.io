import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TechSection from "@/components/sections/TechSection";
import AgricultureSection from "@/components/sections/AgricultureSection";
import VenturesSection from "@/components/sections/VenturesSection";
import ContactSection from "@/components/sections/ContactSection";
import Navigation from "@/components/Navigation";

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <HeroSection />
        <AboutSection />
        <TechSection />
        <AgricultureSection />
        <VenturesSection />
        <ContactSection />
      </motion.div>
    </div>
  );
}
