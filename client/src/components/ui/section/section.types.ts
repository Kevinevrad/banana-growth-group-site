import type { HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg";
}
