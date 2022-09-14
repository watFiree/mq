import { Rules, Length } from "../types/rules";

export const sortByCustomOrder = <T>(arrayToSort: T[], arrayWithOrder: T[]): T[] => {
  return arrayWithOrder.filter((a) => arrayToSort.includes(a));
};

export const ObjectKeys = Object.keys as <T extends {}>(yourObject: T) => Array<keyof T>;

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
