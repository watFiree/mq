import { Rules } from "../types/rules";
import { ruleKeys } from "../constants";
import { validateRules } from "./validators";
import { sortByCustomOrder, ObjectKeys } from "./helpers";

const mediaRule = "@media";

const generateMediaQuery = (rules: Rules) => {
  validateRules(rules);
  const sortedRuleKeys = sortByCustomOrder(ObjectKeys(rules), ObjectKeys(ruleKeys));

  const query = sortedRuleKeys.reduce((condition, rule) => {
    const ruleKey = ruleKeys[rule];
    const ruleValue = rules[rule];
    const isFirstCondition = condition === mediaRule;
    const coupler = isFirstCondition ? " " : " and ";

    const newCondition = ruleKey ? `(${ruleKey}: ${ruleValue})` : ruleValue;

    return `${condition}${coupler}${newCondition}`;
  }, mediaRule);

  return query;
};

export default generateMediaQuery;
