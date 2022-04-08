import React, { useEffect, useState } from "react";
import { getSteps } from "../utils/API";

const Steps = () => {
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    //This function maps over the steps and sorts them by stepNumber
    const sortFunction = (steps) => {
      return steps.sort((a, b) =>
        parseInt(a.stepNumber > b.stepNumber ? 1 : -1)
      );
    };
    //this section maps over the steps that are passed to it and returns an object with the stepNumber and most recent versionContent
    const getDateFunction = (steps) => {
      const extractUsefulDataFunction = steps.map((step) => ({
        stepNumber: step.stepNumber,
        stepInfo: step.versionContent.reduce((a, b) =>
          a.effectiveDate > b.effectiveDate ? a : b
        ),
      }));
      //This section removes the extra data and puts all the needed data into one object that is saved in State
      const newSteps = extractUsefulDataFunction.map((step) => ({
        stepNumber: step.stepNumber,
        title: step.stepInfo.title,
        body: step.stepInfo.body,
      }));

      return newSteps;
    };

    getSteps().then((steps) => {
      const sortedSteps = sortFunction(steps);
      setSteps(getDateFunction(sortedSteps));
    });
  }, []);

  //in the return below, we map over the steps state object, and this takes in a step param and returns JSX with the sorted step data
  return (
    <div className="steps">
      <h3 className="stepHeader">How it Works</h3>
      <div className="stepWrapper" id="stepWrapper">
        {steps &&
          steps.map((step) => (
            <div className="stepContainer">
              <h1 className="stepContent stepNumber">{step.stepNumber}</h1>
              <h4 className="stepContent stepTitle">{step.title}</h4>
              <p className="stepText">{step.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Steps;
