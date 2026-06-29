import { Typography, Card } from "@/components/ui";

import type { TimelineItemProps } from "./timeline.types";

export function TimelineItem({
  step,

  title,

  description,
}: TimelineItemProps) {
  return (
    <Card
      className="
relative
h-full
"
    >
      <div
        className="
text-yellow-500
font-bold
text-xl
"
      >
        {step}
      </div>

      <Typography
        variant="h3"

        as="h3"

        className="mt-4"
      >
        {title}
      </Typography>

      <Typography
        variant="body"

        className="
mt-3
text-slate-600
"
      >
        {description}
      </Typography>
    </Card>
  );
}
