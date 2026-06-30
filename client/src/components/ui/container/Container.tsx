import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

import type { ContainerProps } from "./container.types";

export function Container({
  asChild = false,
  className,
  ...props
}: ContainerProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(
        "mx-auto",
        "w-full",
        "max-w-7xl",
        "px-4",
        "sm:px-6",
        "lg:px-8",
        className,
      )}
      {...props}
    />
  );
}
