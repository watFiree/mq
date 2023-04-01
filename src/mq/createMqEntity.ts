import { BreakpointValues } from "../types/breakpoints";
import { Rules } from "../types/rules";
import generateMediaQuery from "../generateMediaQuery/generateMediaQuery";
import * as prebuildRules from "./prebuildRules";

export const createMqEntity = <T extends string>(config: BreakpointValues<T>) => ({
  from: (minWidthBreakpoint: `${T}`, additionalRules?: Rules) =>
    generateMediaQuery({ minWidth: config[minWidthBreakpoint], ...additionalRules }),
  to: (maxWidthBreakpoint: `${T}`, additionalRules?: Rules) =>
    generateMediaQuery({ maxWidth: config[maxWidthBreakpoint], ...additionalRules }),
  between: (minWidthBreakpoint: `${T}`, maxWidthBreakpoint: `${T}`, additionalRules?: Rules) =>
    generateMediaQuery({
      minWidth: config[minWidthBreakpoint],
      maxWidth: config[maxWidthBreakpoint],
      ...additionalRules,
    }),
  ...prebuildRules,
});
