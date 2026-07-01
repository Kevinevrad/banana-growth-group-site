import { ArrowUpRight } from "lucide-react";

import { Badge, Card } from "@/components/ui";

import type { ProjectCardProps } from "./project-card.types";

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        p-0
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Image */}

      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}

      <div className="space-y-6 p-8">
        <div className="flex items-center justify-between">
          <Badge>{project.sector}</Badge>

          <ArrowUpRight
            className="
              h-5
              w-5
              transition-transform
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-brand-dark">
            {project.title}
          </h3>

          <p className="mt-2 text-brand-muted">{project.description}</p>

          <div className="grid grid-cols-3 gap-4">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-2xl font-bold">{metric.value}</p>

                <p className="text-sm text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
