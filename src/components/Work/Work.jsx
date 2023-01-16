import React from "react";
import Pic1 from "../../assets/images/Journalsyourway.png";
import Pic2 from "../../assets/images/coloringcultures.png";
import Pic3 from "../../assets/images/C1oudnimi.png";
import Pic4 from "../../assets/images/BeBlended.png";
import Pic5 from "../../assets/images/FreedomAction.png";
import Pic6 from "../../assets/images/GithubUserSearch.png";
import Pic7 from "../../assets/images/Fatbossgambling.png";
import Pic8 from "../../assets/images/Github-repo-display.png";
import Pic9 from "../../assets/images/React-Calculator.png";
import "./Work.scss";

export default function Work() {
  return (
    <section className="workSection">
        <div className="head">
            <h3 className="title">Portfolio</h3>
            <p className="text">
                Here are some of my most recent projects from the past year:
            </p>
        </div>

      <div className="workList">
        <div className="workWrap">
          <div className="project">
            <p className="projectName">FatBossGambling | January 2023 </p>
            <p className="projectLang">HTML/CSS</p>
            <p className="projectDetails">
              FatBossGambling is an online Casino. State-of-the-art platform that offers a wide selection of exciting casino games, all powered by top-notch software. They've got all your favourites, from classic slots and
              table games to the latest releases. With top-rated graphics and smooth gameplay, you'll feel right in the middle of the action. Plus, withnew games added all the time, you'll always have options.
            </p>
            <a
              className="btnPrimary"
              href="https://fatboss-gamma.vercel.app/"
              target="_blank"
              rel="noreferrer"
              aria-disabled
            >
              View
            </a>
          </div>
          <div className="projectImage">
            <img src={Pic7} alt="Project Screenshot" />
          </div>
        </div>

        <div className="workWrap">
          <div className="project">
            <p className="projectName">BeBlended | July 2022 </p>
            <p className="projectLang">React/SCSS</p>
            <p className="projectDetails">
              Whether you’re looking for a new hairstylist or want to become one
              yourself, BeBlended provides you with both options fast and easy
              within Canada.
            </p>
            <a
              className="btnPrimary"
              href="https://journalsyourway.com"
              target="_blank"
              rel="noreferrer"
              aria-disabled
            >
              No View
            </a>
          </div>
          <div className="projectImage">
            <img src={Pic4} alt="Project Screenshot" />
          </div>
        </div>

        <div className="workWrap">
          <div className="project">
            <p className="projectName">Coloring Cultures | May 2022 </p>
            <p className="projectLang">React/CSS</p>
            <p className="projectDetails">
              A simple website for a mobile games company that provides more
              information about the company as well as its terms and conditions.
            </p>
            <a
              className="btnPrimary"
              href="https://coloringcultures.app"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
          </div>
          <div className="projectImage">
            <img src={Pic2} alt="Project Screenshot" />
          </div>
        </div>
        
        <div className="workWrap">
          <div className="project">
            <p className="projectName">Cloudnimi | March 2022 </p>
            <p className="projectLang">React/CSS</p>
            <p className="projectDetails">
              A company's website that helps their clients build businesses by
              designing & implementing production-grade business needs.
            </p>
            <a
              className="btnPrimary"
              href="https://cloudnimi.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
          </div>
          <div className="projectImage">
            <img src={Pic3} alt="Project Screenshot" />
          </div>
        </div>

        <div className="workWrap">
          <div className="project">
            <p className="projectName">Journals Your Way | Feb 2022 </p>
            <p className="projectLang">WordPress/Elementor</p>
            <p className="projectDetails">
              An eCommerce store that focuses on selling journals and note books
              to people across the US.
            </p>
            <a
              className="btnPrimary"
              href="https://journalsyourway.com"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
          </div>
          <div className="projectImage">
            <img src={Pic1} alt="Project Screenshot" />
          </div>
        </div>

        <div className="workWrap">
          <div className="project">
            <p className="projectName">Freedom Action Now | 2021 </p>
            <p className="projectLang">CMS Made Simple</p>
            <p className="projectDetails">
              Voter Education. Leadership Development. Community Organizing.
              Policy Advocacy.
            </p>
            <a
              className="btnPrimary"
              href="https://freedomactionnow.org/"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
          </div>
          <div className="projectImage">
            <img src={Pic5} alt="Project Screenshot" />
          </div>
        </div>
      </div>
    
        <div className="subhead">
            <p className="text">
                Here are some of my most recent <span className="purpleColor">personal</span> projects:
            </p>
        </div>
      <div className="workList">
        <div className="workWrap">
          <div className="project">
            <p className="projectName">GitHub API Project | January 2023 </p>
            <p className="projectLang">React/CSS</p>
            <p className="projectDetails">
              This is a personal project that consumes the GitHub API and returns the list of repositories in my GitHub portfolio as well as my GitHub profile. The project is built with React and uses ContextAPI so that we are able to reuse the reponses from the API globally.
            </p>
            <a
              className="btnPrimary"
              href="https://github-repo-display.netlify.app/"
              target="_blank"
              rel="noreferrer"
              aria-disabled
            >
              View Site
            </a>
          </div>
          <div className="projectImage">
            <img src={Pic8} alt="Project Screenshot" />
          </div>
        </div>

        <div className="workWrap">
          <div className="project">
            <p className="projectName">React Calculator | October 2022 </p>
            <p className="projectLang">React/CSS</p>
            <p className="projectDetails">
              This is a simple calculator built with React. It is a personal project that I built to help me go over certain concepts that I had learnt.
            </p>
            <a
              className="btnPrimary"
              href="https://lily-react-calculator.vercel.app/"
              target="_blank"
              rel="noreferrer"
              aria-disabled
            >
              View Site
            </a>
          </div>
          <div className="projectImage">
            <img src={Pic9} alt="Project Screenshot" />
          </div>
        </div>

        <div className="workWrap">
          <div className="project">
            <p className="projectName">Github User Search | March 2022 </p>
            <p className="projectLang">React/Styled-components</p>
            <p className="projectDetails">
              A simple project that consumes a page of the github's Api and
              returns a list of users when a name is searched.
            </p>
            <a
              className="btnPrimary"
              href="https://github-user-profile-search.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
          </div>
          <div className="projectImage">
            <img src={Pic6} alt="Project Screenshot" />
          </div>
        </div>
      </div>
    </section>
  );
}
