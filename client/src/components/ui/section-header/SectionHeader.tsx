import { cn } from "@/lib/utils";

import { Typography } from "@/components/ui";

import type { SectionHeaderProps } from "./section-header.type";

export function SectionHeader({
  eyebrow,

  title,

  description,

  align = "left",

  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",

        align === "center" && "mx-auto text-center",

        className,
      )}
    >
      {eyebrow && (
        <p
          className="
text-sm
font-semibold
uppercase
tracking-wider
text-brand-yellow
"
        >
          {eyebrow}
        </p>
      )}

      <Typography
        variant="h2"

        as="h2"

        className="mt-3 text-brand-dark"
      >
        {title}
      </Typography>

      {description && (
        <Typography
          variant="body"

          className="
mt-4
text-brand-muted
"
        >
          {description}
        </Typography>
      )}
    </div>
  );
}
