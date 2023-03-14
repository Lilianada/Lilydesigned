import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet-async";
import { ContactPage, Footer, Header } from "../components";

export default function Contact() {
  return (
    <motion.main
    className="mainWrap"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="To contact Lilian" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Header/>
      <ContactPage />
      <Footer/>
    </motion.main>
  );
}
