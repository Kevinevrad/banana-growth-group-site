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
bg-brand-surface/80
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

            <Typography variant="h1" as="h1" className="mt-6 max-w-3xl text-brand-dark">
              {title}
            </Typography>

            <Typography
              variant="body"

              className="
mt-6
max-w-xl
text-brand-muted
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
overflow-hidden
rounded-[2rem]
border
border-brand-border
bg-white/90
p-10
shadow-[0_40px_100px_-56px_rgba(15,23,42,0.16)]
"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,214,0,0.18),transparent_30%)]" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-yellow text-brand-dark">
                      <span className="text-xl font-black">B</span>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-brand-yellow">
                        Banana Growth
                      </p>
                      <p className="text-sm text-slate-500">
                        Agence communication & croissance
                      </p>
                    </div>
                  </div>

                  <Typography variant="h2" as="h2" className="text-brand-dark">
                    Growth Strategy. Execution. Results.
                  </Typography>

                  <Typography variant="body" className="mt-4 text-slate-600">
                    {description}
                  </Typography>
                </div>

                <div className="mt-4 rounded-3xl bg-brand-dark px-6 py-8 text-white shadow-[0_24px_70px_-40px_rgba(15,23,42,0.4)]">
                  <p className="text-sm uppercase tracking-[0.35em] text-brand-yellow-100">
                    Stratégies sur mesure
                  </p>
                  <p className="mt-4 text-xl font-semibold leading-snug">
                    Ensemble, nous construisons des campagnes qui convertissent et inspirent.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
