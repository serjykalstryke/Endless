//This function maps over the steps and sorts them by stepNumber. It works via the .sort method. It goes through the array comparing the numbers one against the other and returns either 1, meaning the step a comes before step b, or it returns -1 and that means b should come before step a.
export const sortStepNumber = (steps) => {
  return steps.sort((a, b) => parseInt(a.stepNumber > b.stepNumber ? 1 : -1));
};
//this section maps over the steps that are passed to it and returns an array of objects with the stepNumber and most recent versionContent
export const mapStepsByDate = (steps) => {
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
