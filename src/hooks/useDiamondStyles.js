import { useState } from "react";
export const useDiamondStyles = (props) => {
  for (let attribute in props) {
    const appendVhorVw = (attribute) => {
      const vhValues = ["mb", "height"];
      const vwValues = ["size", "width", "ml", "mr", "mt"];
      const varToString = (varObj) => Object.keys(varObj)[0];
      const vh = vhValues.find((query) => query == attribute);
      const vw = vwValues.find((query) => query == attribute);
      if (vh) {
        console.log(attribute);
        return varToString({ vh });
      } else {
        console.log(attribute);
        return varToString({ vw });
      }
    };
    switch (typeof props[attribute]) {
      case "string":
      case "boolean":
        // console.log(attribute);
        // console.log(props[attribute]);
        break;
      case "number":
        // console.log(attribute);
        // console.log(typeof props[attribute]);
        // console.log(props[attribute] + appendVhorVw(attribute));
        props[attribute] = props[attribute] + appendVhorVw(attribute);
    }
  }
  // console.log(props);
  const bind = {
    ...props,
  };

  return bind;
};
