import { motion } from "framer-motion";
import { Leaf, TrendingUp, Cpu } from "lucide-react";

export default function AgricultureSection() {
  return (
    <section id="agriculture" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Agriculture & Technology: Investing in the Future
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Transforming traditional agriculture through technological innovation,
            creating sustainable growth opportunities for investors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <Leaf className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Vision & Goals</h3>
            </motion.div>
            <motion.p 
              className="text-foreground/80"
              whileHover={{ x: 10 }}
            >
              Agriculture represents a key focus for investment due to increasing global 
              food demand and the need for sustainable farming practices.
            </motion.p>
            <motion.p 
              className="text-foreground/80"
              whileHover={{ x: 10 }}
            >
              Our vision combines cutting-edge technology with sustainable practices 
              to maximize efficiency and environmental stewardship.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <TrendingUp className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Investment Opportunities</h3>
            </motion.div>
            <ul className="space-y-4 text-foreground/80">
              <motion.li 
                whileHover={{ x: 10 }}
                className="flex items-start gap-2"
              >
                High-growth potential in AgTech innovations
              </motion.li>
              <motion.li 
                whileHover={{ x: 10 }}
                className="flex items-start gap-2"
              >
                Sustainable long-term returns through efficiency improvements
              </motion.li>
              <motion.li 
                whileHover={{ x: 10 }}
                className="flex items-start gap-2"
              >
                Impact investment opportunities in food security
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <Cpu className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Tech Integration</h3>
            </motion.div>
            <ul className="space-y-4">
              {[
                "AI-Powered Crop Analysis",
                "Smart Irrigation Systems",
                "Automated Harvest Planning",
                "Precision Agriculture",
                "IoT Sensor Networks"
              ].map((tech, index) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-foreground/80 p-2 rounded-lg bg-background/50"
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Discuss Investment Opportunities
          </button>
        </motion.div>
      </div>
    </section>
  );
}