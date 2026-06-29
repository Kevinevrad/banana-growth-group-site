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

        "bg-yellow-400",
      )}
    >
      <Icon size={22} />
    </div>
  );
}
