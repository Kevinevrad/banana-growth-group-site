import { Card } from "@/components/ui";
import { AnimatedCounter } from "@/components/common";
import { cn } from "@/lib/utils";

import type { StatCardProps } from "./stat-card.types";

export function StatCard({
  value,
  suffix,
  prefix,
  title,
  description,
  icon: Icon,
}: StatCardProps) {
  return (
    <Card
      className={cn(
        "group",
        "h-full",
        "rounded-2xl",
        "border",
        "transition-all",
        "duration-300",
        "hover:-translate-y-1",
        "hover:shadow-xl",
      )}
    >
      <div className="space-y-6">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-brand-yellow/10
            text-brand-yellow-700
            transition-colors
            group-hover:bg-brand-yellow
            group-hover:text-brand-dark
          "
        >
          <Icon className="h-7 w-7" />
        </div>

        <div>
          <AnimatedCounter
            value={value}
            prefix={prefix}
            suffix={suffix}
            className="
              text-5xl
              font-extrabold
              tracking-tight
            "
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-brand-dark">{title}</h3>

          <p className="text-sm leading-7 text-brand-muted">{description}</p>
        </div>
      </div>
    </Card>
  );
}
