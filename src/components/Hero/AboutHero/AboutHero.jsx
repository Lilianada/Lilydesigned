import React from "react";
import Pic from "../../../assets/images/Placeholder.png";
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
          I am passionate about web technologies and enjoys working at the
          intersection of creativity and user-friendly interfaces. 
        </p>
        <div className="buttonWrap">
            
        </div>
      </div>
    </section>
  );
}
