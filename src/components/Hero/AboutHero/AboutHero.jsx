import React from "react";
import Pic from "../../../assets/images/Placeholder.png";
import {HiArrowLongDown} from "react-icons/hi2";
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
          I am passionate about web technologies and creating user-friendly interfaces
          that poses as a solution for different high-end problems.
        </p>
        <div className="buttonWrap">
          <button className="btnPrimary">Curriculum Vitae</button>
          <button className="btnSecondary">Cover Letter</button>
        </div>
      </div>
    </section>
  );
}
