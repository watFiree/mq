import { Length } from "./rules";

export enum Breakpoints {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
}

export type BreakpointValues<T extends string = Breakpoints> = Record<T, Length>;

export type Breakpoint = `${Breakpoints}`;
