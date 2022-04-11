import React from "react";

import Button from "./Button";

//Added animation for a little flair
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const HeroText = () => {
  return (
    <main className="heroText">
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
        initiallyVisible={false}
        duration={4}
      >
        <h4>New Games & Accessories</h4>
        <h1>
          <span>Monthly Packages.</span>
          <span>Excitement delivered daily.</span>
        </h1>
        <section className="paragraph">
          <p>
            What's the best way to shop for the latest video games and
            peripherals? How about never shopping at all? You'll get new stuff
            on your doorstep - every month.
          </p>
        </section>
        <Button />
      </ScrollAnimation>
    </main>
  );
};

export default HeroText;
