import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/components/sections/hero";

import { heroData } from "@/data/hero";

import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";

import { servicesData } from "@/data/sevices";
import { aboutData } from "@/data/about";

import { MethodologySection } from "@/components/sections/methodology";

import { methodologyData } from "@/data/methodology";
import { KPISection } from "@/components/sections/kpi-section/KPISection";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection
        badge={heroData.badge}

        title={heroData.title}

        description={heroData.description}

        primaryAction={heroData.primaryAction}

        secondaryAction={heroData.secondaryAction}
      />

      <AboutSection
        eyebrow={aboutData.eyebrow}

        title={aboutData.title}

        description={aboutData.description}

        values={aboutData.values}
      />

      <ServicesSection services={servicesData} />

      <MethodologySection items={methodologyData} />

      <KPISection />
    </>
  );
}
