import { Breakpoints, BreakpointValues } from "./types/breakpoints";
import { RuleKeysEnum } from "./types/rules";

export const breakpointValues: BreakpointValues = {
  [Breakpoints.xs]: "375px",
  [Breakpoints.sm]: "425px",
  [Breakpoints.md]: "768px",
  [Breakpoints.lg]: "1024px",
  [Breakpoints.xl]: "1440px",
  [Breakpoints.xxl]: "2560px",
};

export const ruleKeys: Record<RuleKeysEnum, string> = {
  [RuleKeysEnum.mediaType]: "",
  [RuleKeysEnum.minWidth]: "min-width",
  [RuleKeysEnum.maxWidth]: "max-width",
  [RuleKeysEnum.orientation]: "orientation",
  [RuleKeysEnum.pointer]: "pointer",
  [RuleKeysEnum.hover]: "hover",
  [RuleKeysEnum.prefersColorScheme]: "prefers-color-scheme",
} as const;
