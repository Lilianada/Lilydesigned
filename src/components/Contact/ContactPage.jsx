import React from "react";
import { Helmet } from "react-helmet-async";
import "./Contact.scss";

export default function ContactPage() {
  return (
    <section className="contactSection">
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="To contact Lilian" />
      </Helmet>
        <h3 className="title">Contact Me</h3>
        <p className="text">
          I am very much open to Full-time Frontend Developer roles or Product Manager roles both remote and on-site.
          If you would like to work with me on a project, or invite me to
            an internship / placement at your company or studio, please get in touch.
        </p>
        <br/>
        <u><a href="mailto:lilianokeke.ca@gmail.com">Lilianokeke.ca@gmail.com</a></u>
    </section>
  );
}
