import { motion } from "framer-motion";
import Globe from "../Globe";
import NetworkAnimation from "../NetworkAnimation";

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <NetworkAnimation />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Innovating for a Sustainable Future | Tech & Agriculture
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <motion.h2
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="text-xl md:text-2xl"
              >
                Transforming Ideas → Building Solutions → Creating Impact
              </motion.h2>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
            >
              Learn More
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Globe />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
