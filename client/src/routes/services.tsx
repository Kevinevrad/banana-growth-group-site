import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Megaphone, Monitor, Users } from "lucide-react";

import { Badge, Card, Container, Section, Typography } from "@/components/ui";

const services = [
  {
    title: "Stratégie de croissance",
    description:
      "Diagnostic, positionnement et plan d’action pour accélérer votre développement.",
    // icon: Bullseye,
  },
  {
    title: "Marketing digital",
    description:
      "Campagnes ciblées, acquisition de leads et performance sur les canaux clés.",
    icon: Megaphone,
  },
  {
    title: "Transformation digitale",
    description:
      "Outils, parcours clients et automatisations pour rendre votre organisation plus agile.",
    icon: Monitor,
  },
  {
    title: "Développement commercial",
    description:
      "Prospection intelligente, propositions impactantes et suivi des opportunités.",
    icon: Users,
  },
  {
    title: "Création de marque",
    description:
      "Identité, storytelling et contenus visuels pour renforcer votre prise de parole.",
    icon: BarChart3,
  },
];

export const Route = createFileRoute("/services")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Section className="bg-brand-surface/80">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Services</Badge>
          <Typography variant="h1" as="h1" className="mt-6 text-brand-dark">
            Des expertises pour faire grandir votre marque.
          </Typography>
          <Typography variant="body" className="mt-6 text-brand-muted">
            Nous opérons à l’intersection du marketing, de la communication et
            de la vente pour générer une croissance durable.
          </Typography>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="h-full border border-brand-border bg-white/95"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-yellow text-brand-dark">
                {/* <service.icon size={22} /> */}
              </div>
              <Typography variant="h3" as="h3" className="mt-6 text-brand-dark">
                {service.title}
              </Typography>
              <Typography variant="body" className="mt-4 text-brand-muted">
                {service.description}
              </Typography>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
