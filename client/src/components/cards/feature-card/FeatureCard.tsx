import { Card } from "@/components/ui";

import type { FeatureCardProps } from "./feature-card.types";

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <Card
      className="
        group
        h-full
        rounded-2xl
        border
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
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
            transition-all
            duration-300
            group-hover:bg-brand-yellow
            group-hover:text-brand-dark
          "
        >
          <Icon className="h-7 w-7" />
        </div>

        <div className="space-y-3">
          <h3 className="text-xl leading-8 font-semibold text-brand-dark">
            {feature.title}
          </h3>

          <p className="leading-7 text-slate-600">{feature.description}</p>
        </div>
      </div>
    </Card>
  );
}
