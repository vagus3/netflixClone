"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const trending = [
  { id: 1, title: "The Art of Sarah" },
  { id: 2, title: "Single's Inferno" },
  { id: 3, title: "Show 3" },
  { id: 4, title: "Show 4" },
  { id: 5, title: "Show 5" },
  { id: 6, title: "Show 6" },
  { id: 7, title: "Show 7" },
  { id: 8, title: "Show 8" },
  { id: 9, title: "Show 9" },
  { id: 10, title: "Show 10" },
];

export default function TrendingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 700;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black px-10 py-16 text-white sm:px-16">
  <div className="mx-auto max-w-7xl">
    <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Trending Now</h2>

    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute -left-5 top-1/2 z-10 h-12 w-12 -translate-y-1/2 bg-black/60 hover:bg-black/80"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-8 w-8 text-white" />
      </Button>

      <div ref={scrollRef} className="flex gap-4 overflow-x-hidden">
        {trending.map((item) => (
          <Card
            key={item.id}
            className="relative h-52 w-36 flex-shrink-0 overflow-hidden rounded-md border-0 bg-zinc-800 sm:h-64 sm:w-44"
          >
            <CardContent className="h-full w-full p-0">
              <div className="h-full w-full bg-zinc-700" />
            </CardContent>
            <span className="pointer-events-none absolute bottom-2 left-2 text-5xl font-extrabold text-white drop-shadow">
              {item.id}
            </span>
          </Card>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-5 top-1/2 z-10 h-12 w-12 -translate-y-1/2 bg-black/60 hover:bg-black/80"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-8 w-8 text-white" />
      </Button>
    </div>
  </div>
</section>

  );
}
