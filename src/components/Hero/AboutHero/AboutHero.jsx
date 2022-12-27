import React from "react";
import Pic from "../../../assets/images/LilyAvatar.jpg";
import Resume from "../../../assets/images/LilianResume.pdf";
import "./AboutHero.scss";

export default function AboutHero() {
  return (
    <section className="aboutHero">
      <div className="profilePicture">
        <img src={Pic} alt="Profile" className="img" />
      </div>
      <div className="profileDescription">
        <h3 className="title">
          Hi - I'm Lilian, a Frontend developer for high impact organizations.
        </h3>
        <p className="text">
          I am mostly interested in bridging the gap between organizations, businesses and their users by creating user friendly UI components and bringing products to life. 
        </p>
        <div className="buttonWrap">
          <a href={Resume} className="btnPrimary">Curriculum Vitae</a>
        </div>
      </div>
    </section>
  );
}
