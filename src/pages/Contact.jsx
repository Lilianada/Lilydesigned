import { motion } from "framer-motion";
import React from "react";
import { ContactPage, Footer, Header } from "../components";

export default function Contact() {
  return (
    <motion.main
    className="mainWrapper"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header/>
      <ContactPage />
      <Footer/>
    </motion.main>
  );
}
