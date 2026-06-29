import { motion } from "motion/react";

import { Container, Section, Typography, Button, Badge } from "@/components/ui";

import type { HeroSectionProps } from "./hero.types";

export function HeroSection({
  badge,

  title,

  description,

  primaryAction,

  secondaryAction,
}: HeroSectionProps) {
  return (
    <Section
      className="
relative
overflow-hidden
"
    >
      <Container>
        <div
          className="
grid
lg:grid-cols-2
gap-16
items-center
"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
            }}
          >
            {badge && <Badge>{badge}</Badge>}

            <Typography
              variant="h1"

              as="h1"

              className="
mt-6
max-w-3xl
"
            >
              {title}
            </Typography>

            <Typography
              variant="body"

              className="
mt-6
max-w-xl
text-slate-600
"
            >
              {description}
            </Typography>

            <div
              className="
mt-10
flex
flex-wrap
gap-4
"
            >
              <Button size="lg">{primaryAction.label}</Button>

              {secondaryAction && (
                <Button
                  variant="secondary"

                  size="lg"
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.7,
            }}

            className="
relative
"
          >
            <div
              className="
aspect-square
rounded-3xl
bg-black
flex
items-center
justify-center
"
            >
              <div
                className="
text-center
text-white
p-10
"
              >
                <Typography
                  variant="h2"

                  as="h2"
                >
                  Growth
                </Typography>

                <Typography
                  variant="body"

                  className="
text-slate-300
"
                >
                  Strategy. Execution. Results.
                </Typography>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
