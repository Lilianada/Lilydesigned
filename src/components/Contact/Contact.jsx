import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub, SiInstagram } from "react-icons/si";
import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contactSection">
        <h3 className="title">Contact Me</h3>
        <p className="text">
            If you would like to work with me on a project, or invite me to
            an internship / placement at your company or studio, please get in touch.
        </p>
        <a href="mailto:lilianokeke.ca@gmail.com">Lilianokeke.ca@gmail.com</a>
        <div className="socialLinks">
            <CiLinkedin size={24} />
            <SiGithub size={24} />
            <SiInstagram size={24} />
        </div>
    </section>
  );
}
