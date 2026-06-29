import type { SectionLayoutProps } from "./section-layout.types";

import { Container, Section, SectionHeader } from "@/components/ui";

export function SectionLayout({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: SectionLayoutProps) {
  return (
    <Section id={id}>
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          align={align}
        />

        <div className="mt-16">{children}</div>
      </Container>
    </Section>
  );
}
