import { motion } from "motion/react";

import { Container, Section, Typography, Button, Badge } from "@/components/ui";

import type { HeroSectionProps } from "./hero.types";

import heroImage from "@/assets/heroBg.jpg";

export function HeroSection({
  badge,

  title,

  description,

  primaryAction,

  secondaryAction,
}: HeroSectionProps) {
  return (
    <Section className="relative overflow-hidden bg-brand-surface">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16items-center">
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
            {badge && <Badge variant="secondary">{badge}</Badge>}

            <Typography
              variant="h1"
              as="h1"
              className="mt-6 max-w-3xl text-brand-dark"
            >
              {title}
            </Typography>

            <Typography
              variant="body"
              className=" mt-6 max-w-xl text-brand-muted"
            >
              {description}
            </Typography>

            <div
              style={{ display: "flex", gap: "1rem", marginTop: "4rem" }}
              className="mt-10 flex flex-wrapgap-4"
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

            className="relative"
          >
            <div
              className="aspect-square overflow-hidden rounded-4xl border border-brand-border  p-10 shadow-[0_40px_100px_-56px_rgba(15,23,42,0.16)]"
              style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "left center",
              }}
            ></div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
