import React from "react";
import FiverrSellerWidget from "../FiverWidget";
import "./style.scss";

export default function ContactPage() {
  return (
    <section className="contactSection">
        <h3 className="title coloredText">Contact Me</h3>
        <p className="text">
          For collaborations, job opportunities, or just to say hi, feel free to reach out to me using the email linked.
          You can also reach me on Fiverr for freelance projects or contracts using the badge below.
        </p>
        <br/>
        <u><a href="mailto:lilianokeke.ca@gmail.com">Lilianokeke.ca@gmail.com</a></u> 
      <FiverrSellerWidget/>
    </section>
  );
}
