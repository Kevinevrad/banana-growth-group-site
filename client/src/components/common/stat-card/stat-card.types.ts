// src/components/common/stat-card/stat-card.types.ts

import type { ComponentType, SVGProps } from "react";
import type { AnimatedCounterProps } from "../animated-counter";

export interface StatCardProps {
  /** Le titre ou label de la statistique (ex: "Clients Satissfaits") */
  title: string;
  /** Une description optionnelle pour apporter du contexte */
  description?: string;
  /** Un composant d'icône (généralement issu de lucide-react) */
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  /** Les propriétés requises pour faire tourner le compteur sous le capot */
  counter: Omit<AnimatedCounterProps, "className">;
  /** Pour d'éventuels ajustements de layout externes */
  className?: string;
}
