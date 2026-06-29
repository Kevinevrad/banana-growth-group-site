import { motion } from "motion/react";

import { Container, Section, SectionHeader } from "@/components/ui";

import { ServiceCard } from "@/components/cards/services-cards";

import type { ServicesSectionProps } from "./services-section.types";

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <Section id="services">
      <Container>
        <SectionHeader
          eyebrow="Nos expertises"

          title="Des solutions pensées pour accélérer votre croissance"

          description="Nous combinons stratégie, technologie et exécution pour accompagner votre développement."
        />

        <div
          className="
mt-16
grid
sm:grid-cols-2
lg:grid-cols-4
gap-8
"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}

              initial={{
                opacity: 0,
                y: 20,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.1,
              }}

              viewport={{
                once: true,
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
