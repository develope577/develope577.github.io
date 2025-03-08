import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Battery, Lightbulb } from "lucide-react";

const ventures = [
  {
    icon: Building2,
    title: "Real Estate",
    description: "Strategic investments in commercial and residential properties focused on sustainability and innovation.",
  },
  {
    icon: Battery,
    title: "Energy Solutions",
    description: "Exploring and investing in renewable energy technologies and sustainable power solutions.",
  },
  {
    icon: Lightbulb,
    title: "Future Initiatives",
    description: "Upcoming ventures in emerging technologies and sustainable development projects.",
  },
];

export default function VenturesSection() {
  return (
    <section id="ventures" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Additional Ventures</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Diversified investments across multiple sectors, focusing on
            sustainable growth and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <venture.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{venture.title}</h3>
                  <p className="text-foreground/80">{venture.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
