import { cn } from "@/lib/utils";

import type { SectionProps } from "./section.types";

export function Section({
  spacing = "lg",
  className,
  children,
  ...props
}: SectionProps) {
  const spaces = {
    sm: "py-12",

    md: "py-20",

    lg: "py-32",
  };

  return (
    <section
      className={cn(
        spaces[spacing],

        className,
      )}

      {...props}
    >
      {children}
    </section>
  );
}
