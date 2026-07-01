import { cn } from "@/lib/utils";

import type { CardProps } from "./card.type";

export function Card({
  variant = "default",

  className,

  children,

  ...props
}: CardProps) {
  const variants = {
    default: "bg-white/95 shadow-[var(--shadow-card)]",

    bordered: "border border-brand-border bg-white/90",
  };

  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)]",

        "p-6",

        "transition-all",

        "duration-300",

        "hover:-translate-y-1",

        variants[variant],

        className,
      )}

      {...props}
    >
      {children}
    </div>
  );
}
