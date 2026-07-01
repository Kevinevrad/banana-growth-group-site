import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button, Container } from "@/components/ui";
import { navigationCTA, navigationItems } from "@/data/navigation";

import Logo from "@/assets/logos/nav_logo.svg";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur-xl shadow-sm shadow-slate-900/5">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link to="/" className="group flex items-center gap-3 leading-none">
            <img src={Logo} alt="Banana Growth Group" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-semibold text-brand-dark transition-colors duration-200 hover:text-brand-yellow"
                activeProps={{
                  className: "text-brand-yellow",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}

          <Button
            asChild
            variant="default"
            size="sm"
            className="hidden lg:inline-flex"
          >
            <Link to={navigationCTA.to}>
              {navigationCTA.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          {/* Mobile CTA */}

          <Button
            asChild
            variant="default"
            size="sm"
            className="flex lg:hidden"
          >
            <Link
              to={navigationCTA.to}
              className="flex items-center gap-2 px-4"
            >
              {navigationCTA.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
