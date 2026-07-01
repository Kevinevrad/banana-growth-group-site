import { motion } from "motion/react";

import {
  Container,
  Section,
  SectionHeader,
  Card,
  Typography,
} from "@/components/ui";

import type { AboutSectionProps } from "./about.types";

export function AboutSection({
  eyebrow,

  title,

  description,

  values,
}: AboutSectionProps) {
  return (
    <Section id="about" className="vision-section">
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}

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
              <Card className="border border-brand-border bg-white/90">
                <Typography
                  variant="h3"

                  as="h3"
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body"

                  className="
mt-4
text-brand-muted
"
                >
                  {item.description}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
