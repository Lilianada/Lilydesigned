import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import { MdOutlineStorefront } from "react-icons/md";
import "./style.scss";

export default function Footer() {
  return (
    <footer>
      
      <ul className="footerLinks mobile">
        <li className="footerLink">
          <a href="https://linkedin.com/in/Lilianada" target="_blank" className="socialLink" rel="noreferrer">
            
            <FaLinkedin size={24} />
          </a>
        </li>
        <li className="footerLink">
          <a href="http://github.com/lilianada" className="socialLink" rel="noreferrer" target="_blank">
            <FaGithub size={24} />
          </a>
        </li>
        <li className="footerLink">
          <a href="https://medium.com/@theconfusedcreative" className="socialLink" rel="noreferrer" target="_blank">
            
            <FaMedium size={24} />
          </a>
        </li>
        <li className="footerLink">
          <a href="https://defitcreative-aliexpress.vercel.app/" className="socialLink" rel="noreferrer" target="_blank">
            
            <MdOutlineStorefront size={24} />
          </a>
        </li>
      </ul>

      <ul className="footerLinks desktop">
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
        <li className="footerLink">
          <a href="https://defitcreative-aliexpress.vercel.app/" className="socialLink" rel="noreferrer" target="_blank">
            Storefront
            <RiArrowRightUpLine size={18} style={{marginLeft: ".5rem"}} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
