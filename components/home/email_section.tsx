import { Button } from "@/components/ui/button";

export default function EmailSection() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row w-full justify-center">
      <input
        type="text"
        placeholder="Email address"
        className="h-12 w-full rounded-sm bg-zinc-900 px-4 text-white sm:w-72 border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-red-600"
      />
      <Button className="h-12 w-full items-center justify-center gap-2 rounded-sm bg-red-600 px-5 text-white transition-colors hover:bg-red-700 sm:w-[158px] font-semibold">
        Get Started &gt;
      </Button>
    </div>
  );
}
