import type { HTMLAttributes } from "react";

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;

  title: string;

  description?: string;

  align?: "left" | "center";
}
