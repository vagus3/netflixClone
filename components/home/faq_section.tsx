// components/home/faq-section.tsx
"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What can I watch on Netflix?", a: "You can watch a wide variety of shows, movies, anime, and more." },
  { q: "What is Netflix?", a: "Netflix is a streaming service for TV shows and movies." },
  { q: "How much does Netflix cost?", a: "Plans start at KRW 7,000 a month." },
  { q: "Where can I watch?", a: "Watch on your phone, tablet, laptop, TV, and more." },
  { q: "How do I cancel?", a: "You can cancel anytime online in your account settings." },
  { q: "Is Netflix good for kids?", a: "Yes, there are profiles and content made just for kids." },
];

export default function FaqSection() {
  return (
    <section className="bg-black px-10 pb-24 pt-16 text-white sm:px-16">
  <div className="mx-auto max-w-7xl">
    <h2 className="mb-8 text-2xl font-bold sm:text-3xl">
      Frequently Asked Questions
    </h2>

    <Accordion
      type="single"
      collapsible
      className="overflow-hidden rounded-md bg-zinc-900 text-white"
    >
      {faqs.map((item, idx) => (
        <AccordionItem
          key={item.q}
          value={`item-${idx}`}
          className="border-b border-zinc-800 transition-colors last:border-0 hover:bg-zinc-700"
        >
          <AccordionTrigger className="px-8 py-6 text-left text-base no-underline hover:no-underline sm:text-lg [&>svg]:text-white">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="px-8 pb-6 text-base text-zinc-300">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
</section>

  );
}
