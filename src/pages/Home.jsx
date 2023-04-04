import { motion } from "framer-motion";
import React from "react";
import { Footer, Header } from "../components";
import Pic from "../assets/images/LilyAvatar.jpg";
import Resume from "../assets/images/LilianResume.pdf";
import { Helmet } from "react-helmet-async";
import "../components/Hero/style.scss";
import { BsDownload } from "react-icons/bs";

export default function Home() {
  return (
    <motion.main
      className="homeWrap"
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
        </div>
        <div className="aboutContent">
          <div className="grid">
            <div className="column">
              <h4 className="textTitle">Who I am</h4>
            </div>
            <div className="column">
              <p className="text">
                Pronouns: She/her
                <br />
                I am a Frontend Developer who is mostly interested in bridging the gap between organizations, businesses, and their users by creating user-friendly UI components and bringing products to life. {" "}
                I have over two years of experience building products for clients across the globe.

              </p>
              <p className="text">
                Currently, I work remotely as a Frontend engineer at Supreme Marketing Limited. I enjoy my work and have passion for everything related to it.
              </p>
              <a href={Resume} download className="btnPrimary">
                <BsDownload className="downloadBtn" /> Curriculum Vitae
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
                    <div className="labelTitle">Engineering</div>
                    <div className="labelValue">React.js, Vue.js, Flutter
                    </div>
                    <div className="labelValue">
                    </div>
                    <div className="labelValue">HTML, CSS, SCSS, Styled-components
                    </div>
                    <div className="labelValue">Firebase, Context API
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="labels">
                    <div className="labelTitle">
                      Others
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
          <div className="grid">
            <div className="column">
              <h4 className="textTitle">Say Hello</h4>
            </div>
            <div className="column">
              <div className="grid">
                <div className="column">
                  <div className="labels">
                    <div className="labelTitle">Email</div>
                    <div className="labelValue"><a href="mailto:Lilianokeke.ca@gmail.com">Lilianokeke.ca@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="labels">
                    <div className="labelTitle">
                      Others
                    </div>
                    <div className="labelValue">
                      <a href="http://instagram.com/defitcreative">@Defitcreative</a>
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
