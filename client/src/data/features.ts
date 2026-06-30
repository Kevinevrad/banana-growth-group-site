import { Target, TrendingUp, Handshake, Lightbulb } from "lucide-react";

import type { Feature } from "@/types";

export const featuresData: Feature[] = [
  {
    id: "strategy",

    title: "Vision stratégique",

    description:
      "Nous construisons des stratégies adaptées à vos ambitions de croissance et à votre marché.",

    icon: Target,
  },

  {
    id: "performance",

    title: "Résultats mesurables",

    description:
      "Chaque action est suivie à l'aide d'indicateurs de performance concrets.",

    icon: TrendingUp,
  },

  {
    id: "partnership",

    title: "Suivi durable",

    description:
      "Nous travaillons comme un véritable partenaire engagé dans votre réussite.",

    icon: Handshake,
  },

  {
    id: "innovation",

    title: "Innovation continue",

    description:
      "Nous faisons évoluer vos processus et vos outils afin de maintenir votre avantage concurrentiel.",

    icon: Lightbulb,
  },
];
