import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Footer, Header, Work } from "../components";
import BackToTop from "../components/BackToTop";
import Projects from "../components/Projects";

export default function Portfolio() {
  return (
    <motion.main
      className="mainWrapper"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Lilian's portfolio" />
        <link rel="canonical" href="/portfolio" />
      </Helmet>
      <Header/>
      {/* <Work /> */}
      <Projects/>
      <Footer/>
      <BackToTop/>
    </motion.main>
  );
}
