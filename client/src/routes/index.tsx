import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/components/sections/hero";

import { heroData } from "@/data/hero";

import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";

import { servicesData } from "@/data/sevices";
import { aboutData } from "@/data/about";

import { MethodologySection } from "@/components/sections/methodology";

import { methodologyData } from "@/data/methodology";
import { KPISection } from "@/components/sections";
import { statsData } from "@/data/stats";

import { ProjectsSection } from "@/components/sections";

import { projectsData } from "@/data/project";

import { WhyChooseUsSection } from "@/components/sections";
import { featuresData } from "@/data/features";

import { TestimonialsSection } from "@/components/sections";
import { testimonialsData } from "@/data/testimonials";

import { FAQSection } from "@/components/sections";
import { faqData } from "@/data/faq";

import { CTASection } from "@/components/sections";
import { ctaData } from "@/data/cta";

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

      <KPISection items={statsData} />

      <ProjectsSection projects={projectsData} />

      <WhyChooseUsSection features={featuresData} />

      <TestimonialsSection testimonials={testimonialsData} />

      <FAQSection items={faqData} />

      <CTASection content={ctaData} />
    </>
  );
}
