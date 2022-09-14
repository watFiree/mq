import { Rules, ruleKeys } from "../types/rules";
import { sortByCustomOrder, ObjectKeys, validateRules } from "./helpers";

const mediaRule = "@media";

const generateMediaQuery = (rules: Rules) => {
  validateRules(rules);
  const sortedRuleKeys = sortByCustomOrder(ObjectKeys(rules), ObjectKeys(ruleKeys));
  const query = sortedRuleKeys.reduce((condition, rule) => {
    const ruleKey = ruleKeys[rule];
    const ruleValue = rules[rule];
    const isFirstCondition = condition === mediaRule;

    const newCondition = ruleKey ? `(${ruleKey}: ${ruleValue})` : ruleValue;

    return `${condition} ${isFirstCondition ? "" : "and "}${newCondition}`;
  }, mediaRule);

  return query;
};

export default generateMediaQuery;
