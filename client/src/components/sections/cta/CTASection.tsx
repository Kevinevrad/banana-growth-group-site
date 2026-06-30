import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui";
import { Section } from "@/components/ui";

import type { CTASectionProps } from "./cta-section.types";

export function CTASection({ content }: CTASectionProps) {
  return (
    <Section id="cta">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          overflow-hidden
          rounded-3xl
          bg-brand-dark
          px-8
          py-20
          text-center
          lg:px-16
        "
      >
        <div className="mx-auto max-w-3xl">
          <h2
            className="
              text-4xl
              font-bold
              leading-tight
              text-white
              lg:text-5xl
            "
          >
            {content.title}
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-300
            "
          >
            {content.description}
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              justify-center
              gap-4
              sm:flex-row
            "
          >
            <Button size="lg" className="group">
              {content.primaryAction.label}

              <ArrowRight
                className="
                  ml-2
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Button>

            <Button variant="outline" size="lg">
              {content.secondaryAction.label}
            </Button>
          </div>
        </div>
      </motion.section>
    </Section>
  );
}
