/* eslint-disable react/style-prop-object */
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Pic1 from "../../assets/images/Journalsyourway.png";
import Pic2 from "../../assets/images/coloringcultures.png";
import Pic3 from "../../assets/images/C1oudnimi.png";
import Pic4 from "../../assets/images/BeBlended.png";
import pic5 from "../../assets/images/BuildingBloques.png";
import Pic6 from "../../assets/images/EasyFind.png";
import Pic7 from "../../assets/images/Funconnect.png";
import Pic8 from "../../assets/images/Firmco.png";
import Pic9 from "../../assets/images/Chatter.png";
import Pic10 from "../../assets/images/Firmco-Client.png";
import { Link } from "react-router-dom";
import "./style.scss";

const AllProjects = [
  {
    id: 1,
    title: "BeBlended",
    image: Pic4,
    link: "https://www.beblended.ca/",
    lang: "REACT/SCSS",
    text:
      "BeBlended is a web platform that connects Black clients with hairstylists specializing in their haircare needs. As a developer involved in this project, I focused on building core components that ensure a smooth user experience for both clients, stylists and the admin.",
  },
  {
    id: 2,
    title: "Firmco (Admin)",
    image: Pic8,
    link: "https://firmco-admin.vercel.app/",
    lang: "REACT/TAILWIND/FIREBASE",
    text:
      "Firmco online portfolio management admin app built with React on the frontend, Tailwind CSS for styling, and Firebase for authentication, database management, and stock API integration. It controls and oversees every aspect of the financial transactions and user management within the Firmco platform.",
  },
  {
    id: 3,
    title: "Firmco (Client)",
    image: Pic10,
    link: "https://firmco-client.vercel.app/",
    lang: "REACT/TAILWIND/FIREBASE",
    text:
      "Firmco online portfolio management client app built with React on the frontend, Tailwind CSS for styling, and Firebase for authentication, database management, and stock API integration. It is controlled by the Firmco Admin Platform.",
  },
  {
    id: 4,
    title: "Funconnect",
    image: Pic7,
    link: "https://funconnect.app/",
    lang: "REACT/SCSS",
    text:
      "Funconnect is a social platform that connects like-minds and facilitates connections between people who share similar interests. I worked closely with the ui/ux designer to create a platform that is both user friendly and visually appealing. Also implemented the backend logic that ensures the platform functions as intended.",
  },
  {
    id: 5,
    title: "Cloudnimi",
    image: Pic3,
    link: "https://cloudnimi.netlify.app/",
    lang: "REACT/CSS",
    text:
      "Cloudnimi is a single page B2B website for a Nigerian company that helps build businesses by designing & implementing production-grade business needs. The website was built with React.js and styled with CSS. It's a simple website that provides information about the company and its services.",
  },
  {
    id: 6,
    title: "Building Bloques",
    image: pic5,
    link: "https://buildingbloques.com/",
    lang: "REACT/TAILWIND/",
    text:
      "BuildingBloques is a 2 page B2B website built with React and tailwind. They offers businesses services that bring their creative visions to life. They offer a collaborative approach, working closely with clients to understand their goals and develop customized solutions.",
  },
  {
    id: 7,
    title: "Coloring Cultures",
    image: Pic2,
    link: "https://coloringcultures.app",
    lang: "REACT/SCSS",
    text:
      "A simple website for a mobile game company based in the US that provides more information about the company as well as its terms and conditions. The website was built with React.js and styled with SCSS.",
  },
  {
    id: 8,
    title: "Journals Your Way",
    image: Pic1,
    link: "https://journalsyourway.com",
    lang: "WORDPRESS/ELEMENTOR",
    text:
      "An eCommerce store owned by a US based event planner that focuses on selling journals and note books to people across the US. The website was built with Wordpress and Elementor.",
  },
  {
    id: 9,
    title: "Chatter App",
    image: Pic9,
    link: "/",
    lang: "REACT/TAILWIND/FIREBASE",
    text:
      "The Chatter app is an engaging web app for writers to share their thoughts, stories, and expertise with a global audience. It's a web app similar to Medium, built with React.js, tailwind css for styling and firebase for authentication and database.",
  },
  {
    id: 10,
    title: "Easy Find",
    image: Pic6,
    link: "/",
    lang: "NEXT/SCSS/TAILWIND/FIREBASE",
    text:
      "EasyFind is a web platform that streamlines the recruitment process for both job seekers and companies. It's built with Next.js, tailwind css for styling and firebase for authentication and database.",
  },
]

export default function Projects() {
  return (
    <section className="projectSection">
      <div className="head">
        <h3 className="title">Projects</h3>
        <p className="text">
          I am constantly exploring new technologies and creative designs to
          develop projects that build on and go beyond my existing knowledge.
        </p>
      </div>

      <div className="projectList">
        {AllProjects.map((project) => (
        <div className="projectContainer" key={
          project.id
        }>
          <Link to={project.link} className="contentContainer">
            <img
              className="projectImage"
              src={project.image}
              alt="Screenshot of the website of BeBlended"
            />
            <h3 className="contentTitle">
              {project.title}
              <Link className="arrowContainer" to={project.link}>
                {" "}
                <BsArrowUpRight size={18} fill="#F2CBF6" />{" "}
              </Link>
            </h3>
            <div className="contentText">
              <span className="lang">{project.lang}</span>
              <p className="text">
               {project.text}
              </p>
            </div>
          </Link>
        </div>
        ))}
      </div>
    </section>
  );
}
