import { createFileRoute } from '@tanstack/react-router'
import { Briefcase, Compass, Sparkles } from 'lucide-react'

import { Badge, Button, Card, Container, Section, Typography } from '@/components/ui'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Section className="bg-brand-surface/80">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <Badge>À propos</Badge>
              <Typography variant="h1" as="h1" className="mt-6 text-brand-dark">
                Une agence communication dédiée à la croissance.
              </Typography>
              <Typography variant="body" className="mt-6 max-w-2xl text-brand-muted">
                Banana Growth Group accompagne les marques ambitieuses dans leur transformation digitale, la génération de leads et la création de campagnes commerciales à forte valeur ajoutée.
              </Typography>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg">Découvrir nos services</Button>
                <Button variant="outline" size="lg">Rencontrons-nous</Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border border-brand-border bg-white/95">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow text-brand-dark">
                  <Sparkles size={20} />
                </div>
                <Typography variant="h3" as="h3" className="mt-6 text-brand-dark">
                  Créativité stratégique
                </Typography>
                <Typography variant="body" className="mt-3 text-brand-muted">
                  Des dispositifs de communication sur mesure qui parlent à vos cibles.
                </Typography>
              </Card>

              <Card className="border border-brand-border bg-white/95">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow text-brand-dark">
                  <Compass size={20} />
                </div>
                <Typography variant="h3" as="h3" className="mt-6 text-brand-dark">
                  Pilotage opérationnel
                </Typography>
                <Typography variant="body" className="mt-3 text-brand-muted">
                  Une approche rigoureuse pour transformer la stratégie en résultats tangibles.
                </Typography>
              </Card>

              <Card className="border border-brand-border bg-white/95">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow text-brand-dark">
                  <Briefcase size={20} />
                </div>
                <Typography variant="h3" as="h3" className="mt-6 text-brand-dark">
                  Accompagnement commercial
                </Typography>
                <Typography variant="body" className="mt-3 text-brand-muted">
                  Mise en place de plans d’action pour booster l’acquisition et la fidélisation.
                </Typography>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
