import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: string;
}

export function Badge({ children, variant }: BadgeProps) {
  return (
    <span
      Variant={variant}
      className={cn(
        "inline-flex",

        "items-center",

        "rounded-full",

        "px-4",

        "py-1",

        "text-xs",

        "font-semibold",

        "bg-yellow-100",

        "text-black",
      )}
    >
      {children}
    </span>
  );
}
