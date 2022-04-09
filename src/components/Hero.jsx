import React from "react";
import hero from "../images/photo-couch.jpg";

import HeroText from "./HeroText";

import "../index.css";

const Hero = () => {
  return (
    <div className="container">
      <main
        className="hero"
        style={{
          background: `url(${hero}) no-repeat center center`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "visible",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <HeroText />
      </main>
    </div>
  );
};

export default Hero;
