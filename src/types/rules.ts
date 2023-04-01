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
