import { Card, IconBox, Typography } from "@/components/ui";

import type { ServiceCardProps } from "./services-card.types";

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card className=" h-full hover:shadow-xl">
      <IconBox icon={icon} />

      <Typography variant="h3" as="h3" className=" mt-6">
        {title}
      </Typography>

      <Typography variant="body" className="mt-4 text-slate-600">
        {description}
      </Typography>
    </Card>
  );
}
