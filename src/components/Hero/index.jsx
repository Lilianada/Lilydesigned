import React from "react";
import Pic from "../../../src/assets/images/LilyAvatar.jpg";
import Resume from "../../../src/assets/images/LilianOkeke.pdf";
import "./style.scss";

export default function Hero() {
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
          I am mostly interested in bridging the gap between organizations,
          businesses and their users by creating user friendly UI components and
          bringing products to life.
        </p>
      </div>
      <a href={Resume} download className="btnPrimary">
        Curriculum Vitae
      </a>
    </section>
  );
}
