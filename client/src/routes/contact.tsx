import { createFileRoute } from '@tanstack/react-router'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

import { Badge, Button, Container, Section, Typography } from '@/components/ui'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Section className="bg-brand-surface/80">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <Badge>Contact</Badge>
            <Typography variant="h1" as="h1" className="mt-6 text-brand-dark">
              Parlons de votre prochain projet.
            </Typography>
            <Typography variant="body" className="mt-6 text-brand-muted">
              Besoin d’un accompagnement sur une campagne, une transformation digitale ou un développement commercial ? Notre équipe est prête à échanger.
            </Typography>
            <div className="mt-10 space-y-6 rounded-3xl bg-white/95 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)]">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-brand-yellow" size={20} />
                <div>
                  <p className="font-semibold text-brand-dark">Notre bureau</p>
                  <p className="text-brand-muted">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-brand-yellow" size={20} />
                <div>
                  <p className="font-semibold text-brand-dark">Email</p>
                  <a href="mailto:contact@bananagrowthgroup.com" className="text-brand-muted hover:text-brand-dark">contact@bananagrowthgroup.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-brand-yellow" size={20} />
                <div>
                  <p className="font-semibold text-brand-dark">Téléphone</p>
                  <a href="tel:+225000000000" className="text-brand-muted hover:text-brand-dark">+225 XX XX XX XX XX</a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-brand-dark p-10 text-white shadow-[0_40px_100px_-56px_rgba(15,23,42,0.26)]">
            <div className="flex items-center gap-3 text-brand-yellow">
              <Send size={24} />
              <span className="uppercase tracking-[0.35em] text-xs font-semibold">Restez connectés</span>
            </div>
            <Typography variant="h2" as="h2" className="mt-6 text-white">
              Écrivez-nous et obtenez une proposition sous 24h.
            </Typography>
            <Typography variant="body" className="mt-4 text-white/80">
              Notre équipe s’engage à répondre rapidement à vos demandes et à construire une proposition adaptée à vos enjeux.
            </Typography>
            <Button size="lg" className="mt-8 bg-brand-yellow text-brand-dark hover:bg-brand-yellow-700">
              Envoyer une demande
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
