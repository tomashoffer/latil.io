"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const FadeIn = ({ children, delay = 0, direction = "up", className }: FadeInProps) => {
  const getInitialProps = () => {
    switch (direction) {
      case "up": return { y: 30, opacity: 0 };
      case "down": return { y: -30, opacity: 0 };
      case "left": return { x: 30, opacity: 0 };
      case "right": return { x: -30, opacity: 0 };
      default: return { y: 30, opacity: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialProps()}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

