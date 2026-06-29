import { cn } from "@/lib/utils";

import type { ButtonProps } from "./button.types";

export function Button({
  variant = "primary",

  size = "md",

  className,

  children,

  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-500",

    secondary: "bg-black text-white hover:bg-neutral-800",

    ghost: "bg-transparent hover:bg-slate-100",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",

    md: "h-11 px-6",

    lg: "h-14 px-8 text-lg",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center",

        "rounded-full",

        "font-semibold",

        "transition-all",

        "duration-300",

        "focus:outline-none",

        "focus:ring-2",

        "focus:ring-yellow-400",

        variants[variant],

        sizes[size],

        className,
      )}

      {...props}
    >
      {children}
    </button>
  );
}
