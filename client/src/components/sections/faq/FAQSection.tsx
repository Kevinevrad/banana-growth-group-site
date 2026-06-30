import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SectionLayout } from "@/components/ui";

import type { FAQSectionProps } from "./faq-section.types";

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <SectionLayout
      id="faq"
      eyebrow="FAQ"
      title="Les questions les plus fréquentes"
      description="Retrouvez les réponses aux interrogations les plus courantes concernant nos prestations et notre accompagnement."
      align="center"
    >
      <div className="mx-auto w-full max-w-4xl">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="text-base leading-7 text-slate-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionLayout>
  );
}
