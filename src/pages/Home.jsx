import { motion } from "framer-motion";
import React from "react";
import { Hero } from "../components";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
    </motion.div>
  );
}
