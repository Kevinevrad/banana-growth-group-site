import { SectionLayout } from "@/components/ui";
import { StatCard } from "@/components/cards";

import type { KPISectionProps } from "./kpi-section.types";

export function KPISection({ items }: KPISectionProps) {
  return (
    <SectionLayout
      id="stats"
      eyebrow="Nos résultats"
      title="Des résultats qui parlent d'eux-mêmes"
      description="Des indicateurs qui reflètent notre engagement auprès des entreprises que nous accompagnons."
      align="center"
    >
      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {items.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>
    </SectionLayout>
  );
}
