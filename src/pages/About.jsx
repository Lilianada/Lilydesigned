import React from "react";
import { AboutHero, AboutMe, Contact, Header, Reviews } from "../components";

export default function About() {
  return (
    <main className="mainWrapper">
        <AboutHero />
        <AboutMe/>
        {/* <Reviews /> */}
        <Contact/>
    </main>
  );
}
