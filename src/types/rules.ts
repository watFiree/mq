type MediaType = "screen" | "print" | "speech";
type Orientation = "landscape" | "portrait";
type Pointer = "coarse" | "fine" | "none";
type Hover = "hover" | "none";
type ColorScheme = "light" | "dark";
export type Length = `${number}${"px" | "%" | "rem" | "em" | "vw" | "vh"}`;

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
  [RuleKeysEnum.minWidth]?: Length;
  [RuleKeysEnum.maxWidth]?: Length;
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
} as const;
