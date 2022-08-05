type MediaType = "screen" | "print" | "speech";
type Orientation = "landscape" | "portrait";
type Pointer = "coarse" | "fine" | "none";
type Hover = "hover" | "none";
type ColorScheme = "light" | "dark";

export enum RuleKeysEnum {
  mediaType = "mediaType",
  minWidth = "minWidth",
  maxWidth = "maxWidth",
  orientation = "orientation",
  pointer = "pointer",
  hover = "hover",
  prefersColorScheme = "prefersColorScheme",
}

export interface Rules {
  [RuleKeysEnum.mediaType]?: MediaType;
  [RuleKeysEnum.minWidth]?: string;
  [RuleKeysEnum.maxWidth]?: string;
  [RuleKeysEnum.orientation]?: Orientation;
  [RuleKeysEnum.pointer]?: Pointer;
  [RuleKeysEnum.hover]?: Hover;
  [RuleKeysEnum.prefersColorScheme]?: ColorScheme;
}

export const ruleKeys: Record<RuleKeysEnum, string> = {
  [RuleKeysEnum.mediaType]: "",
  [RuleKeysEnum.minWidth]: "min-width",
  [RuleKeysEnum.maxWidth]: "max-width",
  [RuleKeysEnum.orientation]: "orientation",
  [RuleKeysEnum.pointer]: "pointer",
  [RuleKeysEnum.hover]: "hover",
  [RuleKeysEnum.prefersColorScheme]: "prefers-color-scheme",
};

export const pointerFine = "@media (pointer: fine)";
export const pointerCoarse = "@media (pointer: coarse)";
export const pointerNone = "@media (pointer: none)";

export const availableHover = "@media (hover: hover)";
export const disabledHover = "@media (hover: none)";

export const portrait = "@media (orientation: portrait)";
export const landscape = "@media (orientation: landscape)";
