/* eslint-disable react/style-prop-object */
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Pic1 from "../../assets/images/Journalsyourway.png";
import Pic2 from "../../assets/images/coloringcultures.png";
import Pic3 from "../../assets/images/C1oudnimi.png";
import Pic4 from "../../assets/images/BeBlended.png";
import Pic7 from "../../assets/images/BuildingBloques.png";
import Pic10 from "../../assets/images/Thevideogamevault.png";
import Pic11 from "../../assets/images/Funconnect.png";
import Pic12 from "../../assets/images/Firmco.png";
import Pic13 from "../../assets/images/Chatter.png";
import "./style.scss";

export default function Projects() {
  return (
    <section className="projectSection">
      <div className="head">
        <h3 className="title">Projects</h3>
        <p className="text">
          I am constantly exploring new technologies and creative designs to
          develop projects that build on and go beyond my existing knowledge.
        </p>
      </div>
      <div className="projectList">
        <div className="projectContainer">
          <div className="contentContainer">
            <img
              className="projectImage"
              src={Pic4}
              alt="Screenshot of the website of BeBlended"
            />
            <h3 className="contentTitle">
              BeBlended
              <a className="arrowContainer" href="https://www.beblended.ca/">
                {" "}
                <BsArrowUpRight size={18} fill="#F2CBF6" />{" "}
              </a>
            </h3>
            <div className="contentText">
              <span className="lang">REACT/SCSS</span>
              <p className="text">
                BeBlended is a web platform that connects Black clients with
                hairstylists specializing in their haircare needs. As a
                developer involved in this project, I focused on building core
                components that ensure a smooth user experience for both
                clients, stylists and the admin.
              </p>
            </div>
          </div>
        </div>

        <div className="projectContainer">
          <div className="contentContainer">
            <img
              className="projectImage"
              src={Pic12}
              alt="Screenshot of the website of Funconnect"
            />
            <h3 className="contentTitle">
              Firmco (Admin)
              <a
                className="arrowContainer"
                href="https://firmco-admin.vercel.app/"
              >
                {" "}
                <BsArrowUpRight size={18} fill="#718cfb" />{" "}
              </a>
            </h3>
            <div className="contentText">
              <span className="lang">REACT/TAILWIND/FIREBASE</span>
              <p className="text">
                Firmco online portfolio management admin app built with React
                on the frontend, Tailwind CSS for styling, and Firebase for
                authentication, database management, and stock API integration.
                It controls and oversees every aspect of the financial
                transactions and user management within the Firmco platform.
              </p>
            </div>
          </div>
        </div>

        <div className="projectContainer">
          <div className="contentContainer">
            <img
              className="projectImage"
              src={Pic12}
              alt="Screenshot of the website of Funconnect"
            />
            <h3 className="contentTitle">
              Chatter App
              <a
                className="arrowContainer"
                href="https://firmco-admin.vercel.app/"
              >
                {" "}
                <BsArrowUpRight size={18} fill="#718cfb" />{" "}
              </a>
            </h3>
            <div className="contentText">
              <span className="lang">REACT/TAILWIND/FIREBASE</span>
              <p className="text">
                The Chatter app is an engaging web app for writers to share their thoughts, stories, and expertise with a global audience. It's a web app similar to Medium, built with React.js, tailwind css for styling and firebase for authentication and database.
              </p>
            </div>
          </div>
        </div>

        <div className="projectContainer">
          <div className="contentContainer">
            <img
              className="projectImage"
              src={Pic11}
              alt="Screenshot of the website of Funconnect"
            />
            <h3 className="contentTitle">
              Funconnect
              <a className="arrowContainer" href="https://funconnect.app/">
                {" "}
                <BsArrowUpRight size={18} fill="#FFE285" />{" "}
              </a>
            </h3>
            <div className="contentText">
              <span className="lang">REACT/SCSS</span>
              <p className="text">
                Funconnect is a social platform that connects like-minds and
                facilitates connections between people who share similar
                interests. I worked closely with the ui/ux designer to create a
                platform that is both user friendly and visually appealing. 
                Also implemented the backend logic that ensures the platform
                functions as intended.
              </p>
            </div>
          </div>
        </div>

        <div className="projectContainer">
          <div className="contentContainer">
            <img
              className="projectImage"
              src={Pic3}
              alt="Screenshot of the website of Cloudnimi"
            />
            <h3 className="contentTitle">
              Cloudnimi
              <a
                className="arrowContainer"
                href="https://cloudnimi.netlify.app/"
              >
                {" "}
                <BsArrowUpRight size={18} fill="#c0cff7" />{" "}
              </a>
            </h3>
            <div className="contentText">
              <span className="lang">REACT/CSS</span>
              <p className="text">
                Cloudnimi is a single page B2B website for a Nigerian company that helps build businesses by
                designing & implementing production-grade business needs.
              </p>
            </div>
          </div>
        </div>

        <div className="projectContainer">
          <div className="contentContainer">
            <img
              className="projectImage"
              src={Pic7}
              alt="Screenshot of the website of BuilingBloques"
            />
            <h3 className="contentTitle">
              Building Bloques 
              <a className="arrowContainer" href="https://buildingbloques.com/">
                {" "}
                <BsArrowUpRight size={18} fill="#f7c0cf" />{" "}
              </a>
            </h3>
            <div className="contentText">
              <span className="lang">REACT/TAILWIND/</span>
              <p className="text">
                BuildingBloques is a 2 page B2B website built with React and tailwind. They offers businesses services that bring
                their creative visions to life. They offer a collaborative
                approach, working closely with clients to understand their goals
                and develop customized solutions. 
              </p>
            </div>
          </div>
        </div>

        <div className="projectContainer">
          <div className="contentContainer">
            <img
              className="projectImage"
              src={Pic2}
              alt="Screenshot of the website of Coloring Cultures"
            />
            <h3 className="contentTitle">
              Coloring Cultures
              <div className="arrowContainer">
                {" "}
                <BsArrowUpRight size={18} fill="#f7d8c0" />{" "}
              </div>
            </h3>
            <div className="contentText">
              <a href="https://coloringcultures.app" className="lang">
                REACT/SCSS
              </a>
              <p className="text">
                A simple website for a mobile game company based in the US that provides more
                information about the company as well as its terms and
                conditions.
              </p>
            </div>
          </div>
        </div>


        <div className="projectContainer">
          <div className="contentContainer">
            <img
              className="projectImage"
              src={Pic1}
              alt="Screenshot of the website of Cloudnimi"
            />
            <h3 className="contentTitle">
              Journals Your Way
              <a className="arrowContainer" href="https://journalsyourway.com">
                {" "}
                <BsArrowUpRight size={18} fill="#acf6f0" />{" "}
              </a>
            </h3>
            <div className="contentText">
              <span className="lang">WORDPRESS/ELEMENTOR</span>
              <p className="text">
                An eCommerce store owned by a US based event planner that focuses on selling journals and note
                books to people across the US.
              </p>
            </div>
          </div>
        </div>

        <div className="projectContainer">
          <div className="contentContainer">
            <img
              className="projectImage"
              src={Pic10}
              alt="Screenshot of the website of The Video Game Vault"
            />
            <h3 className="contentTitle">
              VideoGameVault
              <a
                className="arrowContainer"
                href="https://the-videogame-vault.netlify.app/"
              >
                {" "}
                <BsArrowUpRight size={18} fill="#acf6f0" />{" "}
              </a>
            </h3>
            <div className="contentText">
              <span className="lang">HTML/SCSS</span>
              <p className="text">
                The Video Game Vault is a simple website for a gamer where he
                has all his youtube videos linked as well as articles about the
                games he plays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
