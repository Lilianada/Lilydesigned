/* eslint-disable react/style-prop-object */
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Pic1 from "../../assets/images/Journalsyourway.png";
import Pic2 from "../../assets/images/coloringcultures.png";
import Pic3 from "../../assets/images/C1oudnimi.png";
import Pic4 from "../../assets/images/BeBlended.png";
import Pic5 from "../../assets/images/FreedomAction.png";
import Pic6 from "../../assets/images/GithubUserSearch.png";
import Pic7 from "../../assets/images/Fatbossgambling.png";
import Pic8 from "../../assets/images/Github-repo-display.png";
import Pic9 from "../../assets/images/React-Calculator.png";
import Pic10 from "../../assets/images/Thevideogamevault.png";
import Pic11 from "../../assets/images/Funconnect.png";
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
                Funconnect is a modern way of exploring fun places, a social way
                to connect like-minds, and a space to share experiences.Discover
                new activities and places to visit. Unlock a world of
                possibilities with the app.
              </p>
            </div>
          </div>
        </div>

        <div className="projectContainer">
          <div className="contentContainer">
            <img
              className="projectImage"
              src={Pic7}
              alt="Screenshot of the website of FatBossGambling"
            />
            <h3 className="contentTitle">
              FatBossGambling
              <a className="arrowContainer" href="https://fatbosskgasyno.pl/">
                {" "}
                <BsArrowUpRight size={18} fill="#f7c0cf" />{" "}
              </a>
            </h3>
            <div className="contentText">
              <span className="lang">HTML/CSS/AMP</span>
              <p className="text">
                FatBossGambling is an online Casino. State-of-the-art platform
                that offers a wide selection of exciting casino games, all
                powered by top-notch software. They've got all your favourites,
                from classic slots and table games to the latest releases.
              </p>
            </div>
          </div>
        </div>

        <div className="projectContainer">
          <div className="contentContainer">
            <img
              className="projectImage"
              src={Pic4}
              alt="Screenshot of the website of BeBlended"
            />
            <h3 className="contentTitle">
              BeBlended
              <a
                className="arrowContainer"
                href="https://github.com/lilianada/BeBlended"
              >
                {" "}
                <BsArrowUpRight size={18} fill="#F2CBF6" />{" "}
              </a>
            </h3>
            <div className="contentText">
              <span className="lang">REACT/SCSS</span>
              <p className="text">
                Whether you’re looking for a new hairstylist or want to become one yourself, BeBlended provides you with both options fast and easy within Canada.
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
                A simple website for a mobile game company that provides more information about the company as well as its terms and conditions.
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
                A company's website that helps their clients build businesses by
                designing & implementing production-grade business needs.
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
              <a
                className="arrowContainer"
                href="https://journalsyourway.com"
              >
                {" "}
                <BsArrowUpRight size={18} fill="#c0cff7" />{" "}
              </a>
            </h3>
            <div className="contentText">
              <span className="lang">WordPress/Elementor</span>
              <p className="text">
              An eCommerce store that focuses on selling journals and note books to people across the US.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
