import { SectionLayout } from "@/components/ui";

import { Timeline } from "@/components/common/timeline";

import type { MethodologySectionProps } from "./methodology.types";

export function MethodologySection({ items }: MethodologySectionProps) {
  return (
    // <Section id="methodology">
    //   <SectionHeader
    //     eyebrow="Notre méthode"

    //     title="Une approche structurée orientée résultats"

    //     description="Une méthodologie claire pour transformer vos objectifs en actions mesurables."

    //     align="center"
    //   />

    //   <div className="mt-16">
    //     <Timeline items={items} />
    //   </div>
    // </Section>

    <SectionLayout
      id="methodology"
      eyebrow="Notre méthode"
      title="Une approche structurée orientée résultats"
      description="Une méthodologie claire pour transformer vos objectifs en actions mesurables."
      align="center"
    >
      <Timeline items={items} />
    </SectionLayout>
  );
}
