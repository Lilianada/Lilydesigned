import React from "react";
import { AboutHero, AboutMe, Header, Reviews } from "../components";

export default function About() {
  return (
    <main className="mainWrapper">
        <Header />
        <AboutHero />
        <AboutMe/>
        {/* <Reviews /> */}
    </main>
  );
}
