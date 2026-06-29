// src/components/sections/kpi-section/kpi-section.types.ts

import type { StatCardProps } from "@/components/common/stat-card";

export interface KPISectionProps {
  /** Titre principal de la section (optionnel, avec valeur par défaut) */
  title?: string;
  /** Sous-titre ou description de la section (optionnel, avec valeur par défaut) */
  subtitle?: string;
  /** Liste des indicateurs de performance provenant du fichier de données global */
  items: Omit<StatCardProps, "className">[];
}
