import { Quote } from "lucide-react";

import { Card } from "@/components/ui";

import type { TestimonialCardProps } from "./testimonial-card.types";

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card
      className="
        h-full
        rounded-3xl
        border
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="flex h-full flex-col justify-between gap-8">
        <Quote className="h-10 w-10 text-brand-yellow" />

        <blockquote className="text-lg leading-8 text-slate-700">
          “{testimonial.quote}”
        </blockquote>

        <div className="border-t pt-6">
          <p className="font-semibold text-brand-dark">{testimonial.author}</p>

          <p className="text-sm text-slate-500">{testimonial.position}</p>

          <p className="text-sm font-medium text-brand-yellow-700">
            {testimonial.company}
          </p>
        </div>
      </div>
    </Card>
  );
}
