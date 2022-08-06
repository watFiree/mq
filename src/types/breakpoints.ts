import { Length } from "./rules";

export enum Breakpoint {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
}

export const BreakpointValues: Record<Breakpoint, Length> = {
  [Breakpoint.xs]: "375px",
  [Breakpoint.sm]: "425px",
  [Breakpoint.md]: "768px",
  [Breakpoint.lg]: "1024px",
  [Breakpoint.xl]: "1440px",
  [Breakpoint.xxl]: "2560px",
};
