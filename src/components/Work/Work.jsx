import React from "react";
import Pic from "../../assets/images/Web2.png";
import "./Work.scss";

export default function Work() {
  return (
    <section className="workSection">
        <h3 className="title">Portfolio</h3>
        <p className="text">
            I am most interested in Design for change – work that takes on a ‘wicked problem’ and provides a solution to it. Here are some projects that I have worked on in this area:
        </p>

        <div className="workList">
            <div className="workWrap">
                <div className="project">
                    <p className="projectName">Name of Client | 2017 </p>
                    <p className="projectTitle">Understanding Business</p>
                    <p className="projectDetails">
                        And provides a solution to it. Here are some projects that I have worked on in this area:
                    </p>
                    <div className="btnPrimary">View Site</div>
                </div>
                <div className="projectImage">
                    <img src={Pic} alt="Project Screenshot" />
                </div>
            </div>
        </div>
    </section>
  );
}
