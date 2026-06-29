// src/components/sections/kpi-section/kpi-section.constants.ts

import { TrendingUp, Users, Zap, Award } from "lucide-react";
import type { StatCardProps } from "@/components/common/stat-card";

export const KPI_DATA: Omit<StatCardProps, "className">[] = [
  {
    title: "Croissance Moyenne",
    description:
      "Augmentation moyenne du chiffre d'affaires constatée chez nos partenaires après 12 mois.",
    icon: TrendingUp,
    counter: {
      value: 142,
      suffix: "%",
      decimals: 0,
    },
  },
  {
    title: "Entreprises Accompagnées",
    description:
      "Startups et PME qui font confiance à notre écosystème pour scaler leur activité.",
    icon: Users,
    counter: {
      value: 48,
      prefix: "+",
    },
  },
  {
    title: "Vitesse d'Exécution",
    description:
      "Temps moyen de déploiement des premières stratégies opérationnelles.",
    icon: Zap,
    counter: {
      value: 14,
      suffix: "j",
    },
  },
  {
    title: "Satisfaction Partenaires",
    description:
      "Note globale attribuée par les dirigeants sur l'impact de nos interventions.",
    icon: Award,
    counter: {
      value: 4.9,
      suffix: "/5",
      decimals: 1,
    },
  },
];
