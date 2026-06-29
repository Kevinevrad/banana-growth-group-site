export interface NavigationItem {
  label: string;

  href: string;
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Accueil",
    href: "#home",
  },

  {
    label: "Services",
    href: "#services",
  },

  {
    label: "Méthode",
    href: "#methodology",
  },

  {
    label: "Réalisations",
    href: "#projects",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];
