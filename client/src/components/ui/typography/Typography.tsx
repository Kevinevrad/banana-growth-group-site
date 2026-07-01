import { cn } from "@/lib/utils";

import type { HTMLAttributes, ElementType } from "react";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;

  variant: "display" | "h1" | "h2" | "h3" | "body" | "muted";
}

export function Typography({
  as: Component = "p",

  variant,

  className,

  children,

  ...props
}: TypographyProps) {
  const styles = {
    display: "text-7xl font-extrabold tracking-tight",

    h1: "text-5xl font-bold tracking-tight",

    h2: "text-4xl font-bold",

    h3: "text-2xl font-semibold",

    body: "text-base leading-relaxed",

    muted: "text-sm text-brand-muted",
  };

  return (
    <Component
      className={cn(
        styles[variant],

        className,
      )}

      {...props}
    >
      {children}
    </Component>
  );
}
