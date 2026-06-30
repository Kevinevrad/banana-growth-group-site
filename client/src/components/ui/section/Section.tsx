import { cn } from "@/lib/utils";

import { Container } from "../container";

import type { SectionProps } from "./section.types";

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-20", "lg:py-28", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
