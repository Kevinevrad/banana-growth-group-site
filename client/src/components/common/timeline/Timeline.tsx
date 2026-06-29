import { Container } from "@/components/ui";

import { TimelineItem } from "./TimelineItem";

import type { TimelineItemProps } from "./timeline.types";

interface TimelineProps {
  items: TimelineItemProps[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <Container>
      <div
        className="
grid
md:grid-cols-4
gap-8
"
      >
        {items.map((item) => (
          <TimelineItem
            key={item.step}

            {...item}
          />
        ))}
      </div>
    </Container>
  );
}
