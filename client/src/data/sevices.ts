import { TrendingUp, Megaphone, Cpu, GraduationCap } from "lucide-react";

import type { Service } from "@/types";

export const servicesData: Service[] = [
  {
    title: "Growth Strategy",

    description:
      "Identification des leviers de croissance et construction d'une stratégie orientée résultats.",

    icon: TrendingUp,
  },

  {
    title: "Marketing Digital",

    description:
      "Déploiement de stratégies digitales performantes adaptées aux objectifs business.",

    icon: Megaphone,
  },

  {
    title: "Transformation Digitale",

    description:
      "Optimisation des processus et intégration des solutions numériques adaptées.",

    icon: Cpu,
  },

  {
    title: "Formation",

    description:
      "Développement des compétences internes pour accélérer la performance.",

    icon: GraduationCap,
  },
];
