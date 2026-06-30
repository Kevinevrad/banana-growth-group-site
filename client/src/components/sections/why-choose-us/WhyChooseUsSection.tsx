import { motion } from "motion/react";

import { FeatureCard } from "@/components/cards";
import { SectionLayout } from "@/components/ui";

import type { WhyChooseUsSectionProps } from "./why-choose-us.types";

export function WhyChooseUsSection({ features }: WhyChooseUsSectionProps) {
  return (
    <SectionLayout
      id="why-us"
      eyebrow="Pourquoi nous choisir"
      title="Une expertise pensée pour accélérer votre croissance"
      description="Nous accompagnons les entreprises avec une approche stratégique, des méthodes éprouvées et un engagement constant envers les résultats."
      align="center"
    >
      <div
        className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <FeatureCard feature={feature} />
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
