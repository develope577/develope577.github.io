import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu, LineChart } from "lucide-react";

export default function TechSection() {
  return (
    <section id="tech" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Tech Solutions for a Better Future
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            We specialize in developing cutting-edge technological solutions that bridge 
            innovation with practical applications, focusing on AI-driven systems and 
            automation platforms that transform industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h3 
                className="text-2xl font-bold mb-4 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Brain className="h-6 w-6 text-primary" />
                Mission & Goals
              </motion.h3>
              <ul className="space-y-4 text-foreground/80">
                <motion.li 
                  className="flex items-start gap-2"
                  whileHover={{ x: 10 }}
                >
                  Pioneering AI solutions that enhance business efficiency and innovation
                </motion.li>
                <motion.li 
                  className="flex items-start gap-2"
                  whileHover={{ x: 10 }}
                >
                  Developing automated systems that streamline complex operations
                </motion.li>
                <motion.li 
                  className="flex items-start gap-2"
                  whileHover={{ x: 10 }}
                >
                  Creating digital solutions that drive sustainable growth
                </motion.li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.h3 
                className="text-2xl font-bold mb-4 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Cpu className="h-6 w-6 text-primary" />
                Innovation Impact
              </motion.h3>
              <ul className="space-y-4 text-foreground/80">
                <motion.li 
                  className="flex items-start gap-2"
                  whileHover={{ x: 10 }}
                >
                  Solving complex industry challenges through advanced technology
                </motion.li>
                <motion.li 
                  className="flex items-start gap-2"
                  whileHover={{ x: 10 }}
                >
                  Reducing operational costs while increasing productivity
                </motion.li>
                <motion.li 
                  className="flex items-start gap-2"
                  whileHover={{ x: 10 }}
                >
                  Enabling data-driven decision making across organizations
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Explore Full Tech Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}