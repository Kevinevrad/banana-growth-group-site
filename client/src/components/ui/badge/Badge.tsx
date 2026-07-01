import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary";
}

export function Badge({ children, variant = "default", className, ...props }: BadgeProps) {
  return (
    <span
      data-variant={variant}
      className={cn(
        "inline-flex",
        "items-center",
        "rounded-full",
        "px-4",
        "py-1",
        "text-xs",
        "font-semibold",
        variant === "secondary" ? "bg-brand-dark text-white" : "bg-brand-yellow/10 text-brand-dark",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
