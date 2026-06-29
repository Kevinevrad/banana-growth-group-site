// src/components/sections/kpi-section/KPISection.tsx

import { StatCard } from "../../common/stat-card";
import { KPI_DATA } from "@/data/kpi";

export function KPISection() {
  return (
    <section className="py-20 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* En-tête de la section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            L'impact BANANA GROWTH GROUP en chiffres
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Des résultats tangibles, une méthodologie rigoureuse et une
            exécution millimétrée au service de votre accélération commerciale.
          </p>
        </div>

        {/* Grille des cartes de statistiques */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {KPI_DATA.map((kpi, index) => (
            <StatCard
              key={`${kpi.title}-${index}`}
              title={kpi.title}
              description={kpi.description}
              icon={kpi.icon}
              counter={kpi.counter}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
