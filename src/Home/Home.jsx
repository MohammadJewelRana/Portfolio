import React from "react";

import HeroSection from "./HeroSection";
import About from "./About";
import Skills from "./Skills";

import Contact from "./Contact";
import Thanks from "./Thanks";
import Project from "./Project/Project";

const Home = () => {
  return (
    <div id="home" className="bg-white text-black" name="home">
      <HeroSection></HeroSection>

      <Project></Project>
      <About></About>
      <Skills></Skills>

      <Contact></Contact>
      <Thanks></Thanks>
    </div>
  );
};

export default Home;
