import { Children, useState, isValidElement, cloneElement } from "react";

const OnboardingForm = ({ children, currentIndex, onNext }) => {
  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < children.length) {
      onNext(stepData);
    } else {
      alert("I have finished what i need to do");
    }
  };

  const currentChild = Children.toArray(children)[currentIndex];

  if (isValidElement(currentChild)) {
    return cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};

export default OnboardingForm;
