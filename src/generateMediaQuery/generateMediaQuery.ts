import { Rules, ruleKeys, RuleKeysEnum } from "../types/rules";

const mediaRule = "@media";

const generateMediaQuery = (rules: Rules) => {
  const query = (Object.keys(rules) as Array<RuleKeysEnum>).reduce((condition, rule) => {
    const ruleKey = ruleKeys[rule];
    const ruleValue = rules[rule];
    const isFirstCondition = condition === mediaRule;

    if (rule === RuleKeysEnum.mediaType) {
      return `${condition} ${ruleValue}`;
    }

    if (isFirstCondition) {
      return `${condition} (${ruleKey}: ${ruleValue})`;
    }

    return `${condition} and (${ruleKey}: ${ruleValue})`;
  }, mediaRule);

  return query;
};

export default generateMediaQuery;
