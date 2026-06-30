import type { LucideIcon } from "lucide-react";

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
