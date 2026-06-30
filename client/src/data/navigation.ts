import type { NavigationItem } from "@/components/navigation/navigation.types";

export const navigationItems: NavigationItem[] = [
  {
    label: "Accueil",
    to: "/",
  },
  {
    label: "À propos",
    to: "/about",
  },
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Réalisations",
    to: "/projects",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export const navigationCTA = {
  label: "Prendre rendez-vous",
  to: "/contact",
} as const;
