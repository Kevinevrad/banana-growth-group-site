import type { HTMLAttributes, ElementType } from "react";

export type TypographyVariant =
  "display" | "h1" | "h2" | "h3" | "body" | "muted";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant: TypographyVariant;
}
