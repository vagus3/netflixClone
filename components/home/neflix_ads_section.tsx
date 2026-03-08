import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NetflixAdsSection() {
  return (
    <section className="bg-black px-10 py-6 sm:px-50">
      <div className="flex w-full items-center gap-6 rounded-xl bg-indigo-950 px-8 py-5 sm:py-1">
        <div className="flex-shrink-0">
          <Image
            src="/images/plan-mockup.png"
            alt="Netflix plan mockup"
            width={60}
            height={60}
          />
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <p className="text-base font-bold text-white sm:text-lg">
            The Netflix you love for just KRW 7,000.
          </p>
          <p className="text-sm text-zinc-300">
            Get our most affordable, ad-supported plan.
          </p>
        </div>

        <Button className="flex-shrink-0 rounded-sm bg-zinc-600 px-6 py-2 text-sm font-bold text-white hover:bg-zinc-500">
          Learn More
        </Button>
      </div>
    </section>
  );
}
