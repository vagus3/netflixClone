// components/home/more-reasons-section.tsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const reasons = [
  {
    title: "Enjoy on your TV",
    body: "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    gradient: "from-[#1A2A6C] via-[#B21F1F] to-[#FDBB2D]",
  },
  {
    title: "Download your shows to watch offline",
    body: "Save your favorites easily and always have something to watch.",
    gradient: "from-[#4e1f7a] via-[#a83279] to-[#ff5f6d]",
  },
  {
    title: "Watch everywhere",
    body: "Stream on your phone, tablet, laptop, and TV.",
    gradient: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
  },
  {
    title: "Create profiles for kids",
    body: "Kids get their own space with characters they love.",
    gradient: "from-[#42275a] via-[#734b6d] to-[#ff7e5f]",
  },
];

export default function MoreReasonsSection() {
  return (
 <section className="bg-black px-10 pb-24 pt-16 text-white sm:px-16">
  <div className="mx-auto max-w-7xl">
    <h2 className="mb-8 text-2xl font-bold sm:text-3xl">More Reasons to Join</h2>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {reasons.map((r) => (
        <Card
          key={r.title}
          className={cn(
            "flex h-full flex-col justify-between overflow-hidden border-0 bg-gradient-to-br",
            r.gradient,
          )}
        >
          <CardHeader className="space-y-3 p-7">
            <CardTitle className="text-xl font-bold text-white">
              {r.title}
            </CardTitle>
            <CardDescription className="text-base text-zinc-100">
              {r.body}
            </CardDescription>
          </CardHeader>

          <div className="flex items-center justify-end p-7">
            <div className="h-12 w-12 rounded-xl bg-black/30 shadow-lg" />
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>
  );
}
