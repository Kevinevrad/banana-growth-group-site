import { motion } from "motion/react";

import { ProjectCard } from "@/components/cards";
import { SectionLayout } from "@/components/ui";

import type { ProjectsSectionProps } from "./projects-section.types";

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionLayout
      id="projects"
      eyebrow="Réalisations"
      title="Des projets qui créent un impact durable"
      description="Découvrez quelques missions illustrant notre approche stratégique et notre capacité à générer des résultats mesurables."
      align="center"
    >
      <div
        className="
          grid
          gap-8
          lg:grid-cols-2
        "
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
