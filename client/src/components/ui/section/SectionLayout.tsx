import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";

interface SectionLayoutProps {
  id?: string;

  eyebrow?: string;

  title: string;

  description?: string;

  align?: "left" | "center";

  children: React.ReactNode;

  className?: string;
}

export function SectionLayout({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
}: SectionLayoutProps) {
  return (
    <Section id={id} className={className}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        align={align}
      />

      {children}
    </Section>
  );
}
