import type { LucideIcon } from "lucide-react";

export interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  title: string;
  description: string;
  icon: LucideIcon;
}
