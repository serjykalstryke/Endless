import React from "react";
import hero from "../images/photo-couch.jpg";

import HeroText from "./HeroText";

import "../index.css";

const Hero = () => {
  return (
    <div className="container">
      <main className="hero">
        <HeroText />
      </main>
    </div>
  );
};

export default Hero;
