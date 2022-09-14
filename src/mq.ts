import { BreakpointInput, BreakpointValues } from "./types/breakpoints";
import { Rules } from "./types/rules";
import generateMediaQuery from "./generateMediaQuery";
import * as additionalMethods from "./additionalMethods";

const mq = {
  from: (minWidthBreakpoint: BreakpointInput, additionalRules?: Rules) =>
    generateMediaQuery({ minWidth: BreakpointValues[minWidthBreakpoint], ...additionalRules }),
  to: (maxWidthBreakpoint: BreakpointInput, additionalRules?: Rules) =>
    generateMediaQuery({ maxWidth: BreakpointValues[maxWidthBreakpoint], ...additionalRules }),
  between: (minWidthBreakpoint: BreakpointInput, maxWidthBreakpoint: BreakpointInput, additionalRules?: Rules) =>
    generateMediaQuery({
      minWidth: BreakpointValues[minWidthBreakpoint],
      maxWidth: BreakpointValues[maxWidthBreakpoint],
      ...additionalRules,
    }),
  ...additionalMethods,
};

export default mq;
