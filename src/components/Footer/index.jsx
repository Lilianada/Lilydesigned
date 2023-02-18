import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import "./style.scss";

export default function Footer() {
  return (
    <footer>
      <ul className="footerLinks">
        <li className="footerLink">
          <a href="https://linkedin.com/in/Lilianada" target="_blank" className="socialLink" rel="noreferrer">
            LinkedIn
            <RiArrowRightUpLine size={18} style={{marginLeft: ".5rem"}} />
          </a>
        </li>
        <li className="footerLink">
          <a href="http://github.com/lilianada" className="socialLink" rel="noreferrer" target="_blank">
            Github
            <RiArrowRightUpLine size={18} style={{marginLeft: ".5rem"}} />
          </a>
        </li>
        <li className="footerLink">
          <a href="https://medium.com/@theconfusedcreative" className="socialLink" rel="noreferrer" target="_blank">
            Medium
            <RiArrowRightUpLine size={18} style={{marginLeft: ".5rem"}} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
