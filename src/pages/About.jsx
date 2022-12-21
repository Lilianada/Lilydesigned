import React from "react";
import { AboutHero, AboutMe, Header } from "../components";

export default function About() {
  return (
    <main className="mainWrapper">
        <Header />
        <AboutHero />
        <AboutMe/>
    </main>
  );
}
