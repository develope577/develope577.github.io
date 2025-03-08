import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuAtSign } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.h2 
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-bold tracking-wider"
          >
            Find us here
          </motion.h2>

          <div className="flex space-x-6">
            {[
              { Icon: FaTwitter, href: "#", label: "Twitter" },
              { Icon: FaInstagram, href: "#", label: "Instagram" },
              { Icon: LuAtSign, href: "#", label: "Bluesky" },
              { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
            ].map(({ Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors"
                initial={{ x: "100%", opacity: 0, rotate: 0 }}
                animate={{ x: 0, opacity: 1, rotate: 360 }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.1,
                  rotate: { duration: 1 }
                }}
              >
                <Icon className="w-6 h-6" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}