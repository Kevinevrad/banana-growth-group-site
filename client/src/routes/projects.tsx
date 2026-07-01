import { createFileRoute } from "@tanstack/react-router";

import { Badge, Container, Section, Typography } from "@/components/ui";
import { ProjectsSection } from "@/components/sections";
import { projectsData } from "@/data/project";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Section className="bg-brand-surface/80">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Badge>Réalisations</Badge>
            <Typography variant="h1" as="h1" className="mt-6 text-brand-dark">
              Des projets qui créent un impact durable
            </Typography>
            <Typography variant="body" className="mt-6 text-brand-muted">
              Découvrez quelques missions illustrant notre approche stratégique
              et notre capacité à générer des résultats mesurables.
            </Typography>
          </div>
        </Container>
      </Section>

      <ProjectsSection projects={projectsData} />
    </>
  );
}
