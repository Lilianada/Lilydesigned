import { motion } from "framer-motion";
import React from "react";
import { Work } from "../components";

export default function Portfolio() {
  return (
    <motion.main
      className="mainWrapper"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Work />
    </motion.main>
  );
}
