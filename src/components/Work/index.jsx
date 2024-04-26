import React from "react";
import "./style.scss";

export default function Work() {
  return (
    <section className="workSection">
      <div className="head">
        <h3 className="title">Personal Tryouts</h3>
        <p className="text">
          GitHub is my playground. I'm always experimenting with new
          technologies.
        </p>
      </div>
      <div className="workList">
        <div className="workWrap">
          <div className="projectDescription">
            <a href="/" className="projectName">
              Lilian's Portfolio
            </a>
            <p className="projectLang">REACT/SCSS</p>
          </div>
        </div>

        <div className="workWrap">
          <div className="projectDescription">
            <a href="/" className="projectName">
              VideoGameVault
            </a>
            <p className="projectLang">HTML/CSS</p>
          </div>
        </div>

        <div className="workWrap">
          <div className="projectDescription">
            <a
              href="https://github-user-profile-search.netlify.app/"
              className="projectName"
            >
              Aliexpress Storefront{" "}
            </a>
            <p className="projectLang">REACT/CSS</p>
          </div>
        </div>

        <div className="workWrap">
          <div className="projectDescription">
            <a
              href="https://github-repo-display.netlify.app/"
              className="projectName"
            >
              GitHub API Project
            </a>
            <p className="projectLang">REACT/CSS</p>
          </div>
        </div>

        <div className="workWrap">
          <div className="projectDescription">
            <a
              href="https://github-user-profile-search.netlify.app/"
              className="projectName"
            >
              Github User Search{" "}
            </a>
            <p className="projectLang">REACT/STYLED-COMPONENTS</p>
          </div>
        </div>

        <div className="workWrap">
          <div className="projectDescription">
            <a
              href="https://lily-react-calculator.vercel.app/"
              className="projectName"
            >
              React Calculator{" "}
            </a>
            <p className="projectLang">REACT/CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
