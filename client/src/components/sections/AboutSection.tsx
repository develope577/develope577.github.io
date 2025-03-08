import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800"
                  alt="Professional portrait"
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold mb-6"
            >
              About Me
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-foreground/80"
            >
              <p>
                With over a decade of experience in technology and agriculture,
                I've dedicated my career to bridging these two vital sectors.
                My journey has been driven by a commitment to innovation,
                sustainability, and responsible business practices.
              </p>
              
              <p>
                I believe in leveraging cutting-edge technology to solve real-world
                problems, particularly in agricultural efficiency and sustainability.
                My approach combines technical expertise with practical business
                acumen to create meaningful impact.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Core Values</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Integrity in every decision</li>
                  <li>Responsible innovation</li>
                  <li>Sustainable development</li>
                  <li>Community impact</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
