import React, { useEffect, useState } from "react";
import { getSteps } from "../utils/API";

const Steps = () => {
  const [steps, setSteps] = useState([]);
  //useEffect hook is called every time the page is re-rendered, and in this case it is told to only render once so we don't generate an infinite loop
  useEffect(() => {
    //This function maps over the steps and sorts them by stepNumber
    const sortStepNumber = (steps) => {
      return steps.sort((a, b) =>
        parseInt(a.stepNumber > b.stepNumber ? 1 : -1)
      );
    };
    //this section maps over the steps that are passed to it and returns an array of objects with the stepNumber and most recent versionContent
    const mapStepsByDate = (steps) => {
      const mappedByDate = steps.map((step) => ({
        stepNumber: step.stepNumber,
        stepInfo: step.versionContent.reduce((a, b) =>
          a.effectiveDate > b.effectiveDate ? a : b
        ),
      }));
      //This section removes the extra data and puts all the needed data into one object that is saved as newSteps
      const newSteps = mappedByDate.map((step) => ({
        stepNumber: step.stepNumber,
        title: step.stepInfo.title,
        body: step.stepInfo.body,
      }));

      return newSteps;
    };
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
