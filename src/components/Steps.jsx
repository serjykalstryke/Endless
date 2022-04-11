import React, { useEffect, useState } from "react";
import { getSteps } from "../utils/API";

import { sortStepNumber, mapStepsByDate } from "../utils/stepSorter.js";

const Steps = () => {
  const [steps, setSteps] = useState([]);
  //useEffect hook is called every time the page is re-rendered, and in this case it is told to only render once so we don't generate an infinite loop
  useEffect(() => {
    //This section calls the getSteps() function, and then executes a function that uses the above defined functions to set steps in State
    getSteps().then((steps) => {
      const sortedSteps = sortStepNumber(steps);
      setSteps(mapStepsByDate(sortedSteps));
    });
  }, []);

  //in the return below, we map over the steps state object, and this takes in a step param and returns JSX with the sorted step data
  return (
    <div className="steps">
      <h3 className="stepHeader">How it Works</h3>
      <section className="stepWrapper" id="stepWrapper">
        {steps &&
          steps.map((step) => (
            <div className="stepContainer">
              <h1 className="stepContent stepNumber">{step.stepNumber}</h1>
              <h4 className="stepContent stepTitle">{step.title}</h4>
              <p className="stepText">{step.body}</p>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Steps;
