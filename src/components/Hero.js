import React from "react";
import hero from "../images/photo-couch.jpg";

import "../index.css";

const Hero = () => {
  return (
    <main
      style={{
        background: `url(${hero}) no-repeat center center fixed`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    ></main>
  );
};

export default Hero;
