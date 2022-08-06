import { Breakpoint, BreakpointValues } from "./types/breakpoints";
import { Rules } from "./types/rules";
import generateMediaQuery from "./generateMediaQuery/generateMediaQuery";
import * as additionalMethods from "./additionalMethods";

const mq = {
  from: (minWidthBreakpoint: Breakpoint, restRules?: Omit<Rules, "minWidth">) =>
    generateMediaQuery({ ...restRules, minWidth: BreakpointValues[minWidthBreakpoint] }),
  to: (maxWidthBreakpoint: Breakpoint, restRules?: Omit<Rules, "maxWidth">) =>
    generateMediaQuery({ ...restRules, maxWidth: BreakpointValues[maxWidthBreakpoint] }),
  between: (
    minWidthBreakpoint: Breakpoint,
    maxWidthBreakpoint: Breakpoint,
    restRules?: Omit<Rules, "minWidth" | "maxWidth">
  ) =>
    generateMediaQuery({
      ...restRules,
      minWidth: BreakpointValues[minWidthBreakpoint],
      maxWidth: BreakpointValues[maxWidthBreakpoint],
    }),
  ...additionalMethods,
};

export default mq;
