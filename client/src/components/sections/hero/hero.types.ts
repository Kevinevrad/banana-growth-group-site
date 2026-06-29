import type { ReactNode } from "react";

export interface HeroSectionProps {
  badge?: string;

  title: string;

  description: string;

  primaryAction: {
    label: string;
    href: string;
  };

  secondaryAction?: {
    label: string;
    href: string;
  };

  children?: ReactNode;
}
