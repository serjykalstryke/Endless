import React from "react";
import hero from "../images/photo-couch.jpg";

import HeroText from "./HeroText";

import "../index.css";

const Hero = () => {
  return (
    <div className="heroContainer">
      <main className="hero">
        <image src={hero} alt="" />
        <HeroText />
      </main>
    </div>
  );
};

export default Hero;
