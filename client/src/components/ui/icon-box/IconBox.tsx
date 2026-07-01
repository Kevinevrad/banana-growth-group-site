import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface IconBoxProps {
  icon: LucideIcon;
}

export function IconBox({ icon: Icon }: IconBoxProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center",

        "size-12",

        "rounded-xl",

        "bg-brand-yellow",

        "text-brand-dark",

        "shadow-[0_18px_50px_-32px_rgba(255,214,0,0.9)]",
      )}
    >
      <Icon size={22} />
    </div>
  );
}
