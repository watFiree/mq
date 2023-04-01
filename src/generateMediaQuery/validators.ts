import { Length, Rules } from "../types/rules";

const validateMinAndMax = (minValue: Length, maxValue: Length) => {
  if (parseFloat(minValue) > parseFloat(maxValue)) {
    throw new Error(`Max width must be greater than min width - ${minValue} is greater than ${maxValue}`);
  }

  return null;
};

export const validateRules = (rules: Rules) => {
  if (rules.minWidth && rules.maxWidth) {
    return validateMinAndMax(rules.minWidth, rules.maxWidth);
  }

  return null;
};
