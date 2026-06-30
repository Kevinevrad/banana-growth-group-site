import { motion } from "motion/react";

import { TestimonialCard } from "@/components/cards";
import { SectionLayout } from "@/components/ui";

import type { TestimonialsSectionProps } from "./testimonials-section.types";

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <SectionLayout
      id="testimonials"
      eyebrow="Ils nous font confiance"
      title="Des collaborations fondées sur des résultats"
      description="La confiance de nos clients est notre meilleure référence."
      align="center"
    >
      <div
        className="
          grid
          gap-8
          lg:grid-cols-3
        "
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
