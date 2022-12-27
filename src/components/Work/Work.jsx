import React from "react";
import Pic1 from "../../assets/images/Journalsyourway.png";
import Pic2 from "../../assets/images/coloringcultures.png";
import Pic3 from "../../assets/images/C1oudnimi.png";
import Pic4 from "../../assets/images/Web2.png";
import "./Work.scss";

export default function Work() {
  return (
    <section className="workSection">
        <h3 className="title">Portfolio</h3>
        <p className="text">
            Here are some of my most recent projects from the past year:
        </p>

        <div className="workList">
            <div className="workWrap">
                <div className="project">
                    <p className="projectName">Journals Your Way | 2022 </p>
                    <p className="projectTitle">Understanding Business</p>
                    <p className="projectDetails">
                        An eCommerce store that focuses on selling journals and note books to people across the US.
                    </p>
                    <a className="btnPrimary" href="https://journalsyourway.com" target="_blank" >View Site</a>
                </div>
                <div className="projectImage">
                    <img src={Pic1} alt="Project Screenshot" />
                </div>
            </div>
            <div className="workWrap">
                <div className="project">
                    <p className="projectName">Coloring Cultures | 2022 </p>
                    <p className="projectTitle">Understanding Business</p>
                    <p className="projectDetails">
                        A simple website for a mobile games company that provides more information about the company as well as its terms and conditions.
                    </p>
                    <a className="btnPrimary" href="https://coloringcultures.app" target="_blank" >View Site</a>
                </div>
                <div className="projectImage">
                    <img src={Pic2} alt="Project Screenshot" />
                </div>
            </div>
            <div className="workWrap">
                <div className="project">
                    <p className="projectName">Cloudnimi | 2022 </p>
                    <p className="projectTitle">Understanding Business</p>
                    <p className="projectDetails">
                        A company's website that helps their clients build businesses by designing & implementing production-grade business needs.
                    </p>
                    <a className="btnPrimary" href="https://cloudnimi.netlify.app/" target="_blank"  >View Site</a>
                </div>
                <div className="projectImage">
                    <img src={Pic3} alt="Project Screenshot" />
                </div>
            </div>
            <div className="workWrap">
                <div className="project">
                    <p className="projectName">BeBlended | 2022 </p>
                    <p className="projectTitle">Understanding Business</p>
                    <p className="projectDetails">
                        Whether you’re looking for a new hairstylist or want to become one yourself, BeBlended provides you with both options fast and easy within Canada.
                    </p>
                    <a className="btnPrimary" href="https://journalsyourway.com" target="_blank" >View Site</a>
                </div>
                <div className="projectImage">
                    <img src={Pic4} alt="Project Screenshot" />
                </div>
            </div>
        </div>
    </section>
  );
}
