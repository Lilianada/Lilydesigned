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
      className="mainWrap"
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
          <div className="grid">
            <div className="column">
              <h4 className="textTitle">Who I am</h4>
            </div>
            <div className="column">
              <p className="text">
                Pronouns: She/her
                <br />
                I am a Frontend Developer who is mostly interested in bridging the gap between organizations, businesses, and their users by creating user-friendly UI components and bringing products to life. I am currently working remotely as a Frontend Developer at Supreme Marketing Limited.
                Creating clean interfaces and thoughtful user experiences are my strengths - bringing them to life is where I stand out.
              </p>
              <p className="text">
                I am an open-minded and communicative person who cares a lot about details. I enjoy my work and have passion for everything related to it.
              </p>
              <a href={Resume} download className="btnPrimary">
                Curriculum Vitae
              </a>
            </div>
          </div>

          <div className="grid">
            <div className="column">
              <h4 className="textTitle">What I Do</h4>
            </div>
            <div className="column">
              <div className="grid">
                <div className="column">
                  <div className="labels">
                    <div className="labelTitle">Frontend Development</div>
                    <div className="labelValue">React.js, Vue.js, Flutter, Typescript
                    </div>
                    <div className="labelValue">
                    </div>
                    <div className="labelValue">Firebase, Context API
                    </div>
                    <div className="labelValue">HTML, CSS, Tailwind, SCSS, Styled-components
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="labels">
                    <div className="labelTitle">
                      Other
                    </div>
                    <div className="labelValue">
                      Agile Software Development
                    </div>
                    <div className="labelValue">
                      Project Management
                    </div>
                    <div className="labelValue">
                      Heroku, Vercel, Netlify
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </motion.main >
  );
}
