import { Link, createFileRoute } from "@tanstack/react-router";
// import { ArrowRight } from "lucide-react";

import { Badge, Button, Container, Section, Typography } from "@/components/ui";
import { MethodologySection } from "@/components/sections/methodology";
import { methodologyData } from "@/data/methodology";

export const Route = createFileRoute("/methodology")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Section className="bg-brand-surface/80">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Badge>Méthodologie</Badge>
            <Typography variant="h1" as="h1" className="mt-6 text-brand-dark">
              Notre approche : structurée et durable
            </Typography>
            <Typography variant="body" className="mt-6 text-brand-muted">
              Nous ne croyons pas aux solutions magiques ou aux tendances
              éphémères. Nous croyons aux processus éprouvés.
            </Typography>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="mx-auto sm:mx-0">
                <Link to="/contact">Prendre rendez-vous</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="mx-auto sm:mx-0"
              >
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <MethodologySection items={methodologyData} />
    </>
  );
}
