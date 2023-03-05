import { motion } from "framer-motion";
import React from "react";
import { Footer, Header } from "../components";
import Pic from "../assets/images/LilyAvatar.jpg";
import Resume from "../assets/images/LilianResume.pdf";
import { Helmet } from "react-helmet-async";
import "../components/Hero/style.scss";

export default function Home() {
  return (
    <motion.main
      className="mainWrapper"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Home</title>
        <meta name="description" content="About Lilian" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Header />
      <section className="aboutHero">
        <div className="profilePicture">
          <img src={Pic} alt="Profile" className="img" />
        </div>
        <div className="profileDescription">
          <h3 className="title">
            Oh Hey there <span className="wave">👋</span>
            <br />
            I'm Lilian, a <span className="colorText"> Frontend developer</span> for high impact organizations.
          </h3>
          <div class="intro grid">
            <div class="column">
              <h4 class="textTitle">Who I am</h4>
            </div>
            <div class="column bigger">
              <div class="text">
                <p>😊 Pronouns: She/her
                  As a Frontend Developer, I am mostly interested in bridging the gap between organizations,
                  businesses, and their users by creating user-friendly UI components
                  and bringing products to life. I am currently working remotely as a
                  Frontend Developer at Supreme Marketing Limited.
                </p>
                <p> Creating clean interfaces and thoughtful user experiences are my strengths - bringing them to life is where I stand out.</p>
                <p>I am an open-minded and communicative person who cares a lot about details. I enjoy my work and have passion for everything related to it.
                </p>
                <p>I enjoy my work and have passion for everything related to it.</p>
              </div>
            </div>
          </div>
        </div>
        <a href={Resume} download className="btnPrimary">
          Curriculum Vitae
        </a>
      </section>
      <Footer />
    </motion.main>
  );
}
