import React from "react";
import Pic from "../../../assets/images/Placeholder.png";
import "./AboutHero.scss";

export default function AboutHero() {
  return (
    <section className="aboutHero">
        <div className="profilePicture">
            <img src={Pic} alt="Profile" className="img" />
        </div>
    </section>
  );
}
