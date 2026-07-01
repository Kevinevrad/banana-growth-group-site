import { Link } from "@tanstack/react-router";
import { MailOpen, MapPin, Phone } from "lucide-react";

import { Button, Container } from "@/components/ui";
import Logo from "@/assets/logos/nav_logo_yellow.svg";

export function Footer() {
  return (
    <footer className="border-t bg-brand-dark text-white">
      <Container>
        <div className="grid gap-14 py-20 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Banana Growth Group"
                className="h-20 w-auto"
              />
            </div>

            <p className="mt-8 leading-8 text-brand-muted">
              Nous accompagnons les entreprises dans leur croissance grâce à des
              stratégies concrètes, mesurables et durables.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="transition text-amber hover:text-brand-yellow"
              >
                {/* <Linkedin size={20}/> */}
                {/* <FontAwesomeIcon icon={byPrefixAndName.fab['linkedin']} /> */}
                Facebook
              </a>

              <a href="#" className="transition hover:text-brand-yellow">
                {/* <FontAwesomeIcon icon={byPrefixAndName.fab['facebook']} /> */}
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation */}

          <div className="space-y-6">
            <h3 className="font-bold ">Navigation</h3>

            <div className="mt-6 flex flex-col gap-4 text-amber-100">
              <Link to="/" className="transition hover:text-brand-yellow">
                Accueil
              </Link>

              <Link to="/about" className="transition hover:text-brand-yellow">
                À propos
              </Link>

              <Link
                to="/services"
                className="transition hover:text-brand-yellow"
              >
                Services
              </Link>

              <Link
                to="/methodology"
                className="transition hover:text-brand-yellow"
              >
                Méthodologie
              </Link>

              <Link
                to="/projects"
                className="transition hover:text-brand-yellow"
              >
                Réalisations
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-brand-yellow"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Expertises */}

          <div>
            <h3 className="font-bold">Nos expertises</h3>

            <div className="mt-6 flex flex-col gap-4 text-brand-muted">
              <span>Growth Strategy</span>

              <span>Marketing Digital</span>

              <span>Développement Commercial</span>

              <span>Transformation Digitale</span>

              <span>Formation</span>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="font-bold">Contact</h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 text-brand-yellow" size={18} />

                <span className="text-brand-muted">Abidjan, Côte d'Ivoire</span>
              </div>

              <div className="flex gap-3">
                <MailOpen className="mt-1 text-brand-yellow" size={18} />

                <span className="text-brand-muted">
                  contact@bananagrowthgroup.com
                </span>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-1 text-brand-yellow" size={18} />

                <span className="text-brand-muted">+225 XX XX XX XX XX</span>
              </div>
            </div>

            <Button asChild variant="secondary" size="sm" className="mt-8">
              <Link to="/contact">Prendre contact</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <p className="text-center text-sm text-brand-muted">
            © {new Date().getFullYear()} Banana Growth Group. Tous droits
            réservés.
          </p>
        </div>
      </Container>
    </footer>
  );
}
