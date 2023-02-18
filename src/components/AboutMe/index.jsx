import React from "react";
// import Pic from "../../assets/images/FullAvatar.jpeg";
import "./style.scss";

export default function AboutMe() {
  return (
    <section className="aboutSection">
        <h3 className="title">
            About Me
        </h3>
        <div className="aboutDescription">
            {/* <img src={Pic} alt="Full Avatar" /> */}
            <p className="text">
              ThingsbyLily is a portfolio website that shows the hand-works of a B.Ed degree holder who is currently a Frontend Developer aspiring to further her studies in industrial or product design.
              She enjoys the pursuit of craft, solving complex problems, and mentoring others.
              <br/><br/>
              She's also inquisitive by nature and love exploring this beautiful world. I also enjoy volunteering and meeting new people.
              Outside of work, she enjoys travelling, working out, photography, and painting.
            </p>
        </div>
    </section>
  );
}
