import { motion } from "framer-motion";
import React from "react";
import { Footer, Header } from "../components";
import Pic from "../assets/images/LilyAvatar.jpg";
import Resume from "../assets/images/LilianOkeke.pdf";
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
            I'm Lilian, a <span className="colorText"> Software developer</span> for high impact organizations.
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
                <p />
                <p className="text">
                As a dedicated Software Developer specializing in frontend web development, my primary goal is to create user experiences that align with individuals, organizations, and business goals.
              </p>
              <p className="text">
              I am proficient in utilizing cutting-edge technologies such as React.js, Vue.js for web development. In addition to my core skills, my proficiency extends to HTML5, CSS3, JavaScript, TypeScript, and other associated tools.
              </p>
              <p className="text">
              With over four years of hands-on experience, I have developed and shipped innovative products and tools to clients, startups, and established corporation worldwide. I am furthering my expertise as the Lead Frontend Engineer with Supreme Marketing Limited, where I continue to enhance and refine my user interface design and development skills. I am also volunteering at She Code Africa as the Technical Lead of the frontend community where I manage the community activities, implement strategies like the Pair Learning Program which has over 200 participants and also mentor junior developers.
                </p>
              <p className="text">
              I am consistently seeking out opportunities to leverage modern frameworks and libraries to deliver aesthetically pleasing, performant, and user-centric applications. I am always eager to learn and adapt to new technologies and best practices, ensuring that the digital products I create are functional, intuitive, accessible, and visually captivating.
               </p>
               <p className="text">
                Looking forward to connecting with professionals and organizations passionate about transforming user experiences through state-of-the-art web solutions.
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
                    <div className="labelValue">React.js, Next.js, Typescript
                    </div>
                    <div className="labelValue">
                    </div>
                    <div className="labelValue">HTML, CSS, SCSS, Tailwind
                    </div>
                    <div className="labelValue">Firebase, Context API, Redux
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="labels">
                    <div className="labelTitle">
                      Others
                    </div>
                    <div className="labelValue">
                     Vercel, Netlify, Heroku, 
                    </div>
                    <div className="labelValue">
                      Agile Software Development
                    </div>
                    <div className="labelValue">
                      Project Management, Technical Lead
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
                      <a href="http://instagram.com/defitcreative">@defitcreative</a>
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
