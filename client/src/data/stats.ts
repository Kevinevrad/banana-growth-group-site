import { BriefcaseBusiness, TrendingUp, Building2, Smile } from "lucide-react";
import type { Stat } from "@/types";

export const statsData: Stat[] = [
  {
    value: 50,
    suffix: "+",
    title: "Projets accompagnés",
    description: "Des entreprises accompagnées dans leur croissance.",
    icon: BriefcaseBusiness,
  },

  {
    value: 30,
    suffix: "%",
    title: "Croissance moyenne",
    description: "Une progression mesurable des performances.",
    icon: TrendingUp,
  },

  {
    value: 10,
    suffix: "+",
    title: "Secteurs d'activité",
    description: "Une expertise multisectorielle.",
    icon: Building2,
  },

  {
    value: 95,
    suffix: "%",
    title: "Satisfaction client",
    description: "Des partenariats fondés sur la confiance.",
    icon: Smile,
  },
];
