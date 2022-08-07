import { BreakpointInput, BreakpointValues } from "./types/breakpoints";
import { Rules } from "./types/rules";
import generateMediaQuery from "./generateMediaQuery";
import * as additionalMethods from "./additionalMethods";

const mq = {
  from: (minWidthBreakpoint: BreakpointInput, additionalRules?: Rules) =>
    generateMediaQuery({ minWidth: BreakpointValues[minWidthBreakpoint], ...additionalRules }),
  to: (maxWidthBreakpoint: BreakpointInput, additionalRules?: Rules) =>
    generateMediaQuery({ maxWidth: BreakpointValues[maxWidthBreakpoint], ...additionalRules }),
  // TODO: add check for breakpoints to not allow min width be greater than max
  between: (minWidthBreakpoint: BreakpointInput, maxWidthBreakpoint: BreakpointInput, additionalRules?: Rules) =>
    generateMediaQuery({
      minWidth: BreakpointValues[minWidthBreakpoint],
      maxWidth: BreakpointValues[maxWidthBreakpoint],
      ...additionalRules,
    }),
  ...additionalMethods,
};

export default mq;
