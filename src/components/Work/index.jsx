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
        <div className="workWrap eight">
          <div className="projectDescription">
            <a href="https://github-repo-display.netlify.app/" className="projectName">GitHub API Project</a>
            <p className="projectLang">React/CSS</p>
          </div>
        </div>

        <div className="workWrap nine">
          <div className="projectDescription">
            <a href="https://lily-react-calculator.vercel.app/" className="projectName">React Calculator </a>
            <p className="projectLang">React/CSS</p>
          </div>
        </div>

        <div className="workWrap six">
          <div className="projectDescription">
            <a href="https://github-user-profile-search.netlify.app/" className="projectName">Github User Search </a>
            <p className="projectLang">React/Styled-components</p>
          </div>
        </div>
      </div>
    </section>
  );
}
