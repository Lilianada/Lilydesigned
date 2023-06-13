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
      exit={{ opacity: 0 }}
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
                As a dedicated Frontend Developer specializing in both Web and Mobile Development, my primary goal is to seamlessly blend form and function in order to create immersive user experiences that align with business goals.
              </p>
              <p className="text">
                I am proficient in utilizing cutting-edge technologies such as React.js, Vue.js for web development, and Flutter/dart for mobile applications. In addition to my core skills, my proficiency extends to HTML5, CSS3, JavaScript, TypeScript, and other associated tools.
              </p>
              <p className="text">
                With over two years of hands-on experience, I have developed and shipped innovative products to clients worldwide, ranging from startups to established corporations. Currently, I am furthering my expertise as the Lead Frontend Engineer with Supreme Marketing Limited, where I continue to enhance and refine my skills in user interface design and development.
              </p>
              <p className="text">
                I maintain a fervent passion for frontend development, consistently seeking out opportunities to leverage modern frameworks and libraries to deliver aesthetically pleasing, performant, and user-centric applications. I am always eager to learn and adapt to new technologies and best practices, ensuring that the digital products I create are not only functional, but also intuitive, accessible, and visually captivating.
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
