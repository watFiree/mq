import { Breakpoint, BreakpointValues } from "./types/breakpoints";
import { Rules } from "./types/rules";
import generateMediaQuery from "./generateMediaQuery";
import * as additionalMethods from "./additionalMethods";

const mq = {
  from: (minWidthBreakpoint: Breakpoint, additionalRules?: Rules) =>
    generateMediaQuery({ minWidth: BreakpointValues[minWidthBreakpoint], ...additionalRules }),
  to: (maxWidthBreakpoint: Breakpoint, restRules?: Omit<Rules, "maxWidth">) =>
    generateMediaQuery({ ...restRules, maxWidth: BreakpointValues[maxWidthBreakpoint] }),
  between: (minWidthBreakpoint: Breakpoint, maxWidthBreakpoint: Breakpoint, restRules?: Omit<Rules, "minWidth" | "maxWidth">) =>
    generateMediaQuery({
      ...restRules,
      minWidth: BreakpointValues[minWidthBreakpoint],
      maxWidth: BreakpointValues[maxWidthBreakpoint],
    }),
  ...additionalMethods,
};

export default mq;
