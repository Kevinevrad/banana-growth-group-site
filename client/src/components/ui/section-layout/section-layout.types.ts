import type { ReactNode } from "react";

export interface SectionLayoutProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children: ReactNode;
}
