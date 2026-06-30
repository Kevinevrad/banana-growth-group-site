import type { LinkProps } from "@tanstack/react-router";

export interface NavigationItem {
  label: string;
  to: LinkProps["to"];
}

export interface NavigationProps {
  items: NavigationItem[];
}

export interface NavigationLinkProps {
  item: NavigationItem;
  onNavigate?: () => void;
}
