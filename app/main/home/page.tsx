import { Button } from "@/components/ui/button";

export function Home(){
    return (
        <div className="flex min-h-screen items-center flex-row bg-zinc-50 font-sans dark:bg-black">
            <main className="flex w-full flex-1 flex-col items-center justify-center bg-white px-6 py-24 dark:bg-black sm:py-32">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                <p>
                    Unlimited movies, TV 
                    shows, and more
                </p>
            </h1>
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Starts at KRW 7,000. Cancel anytime.
                </p>
            </div>
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
            </div>
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                <div>
                    <input type="text" placeholder="Email address" className="rounded-sm px-4 py-2 text-black" />
                    <Button className="h-12 w-full items-center justify-center gap-2 rounded-sm bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
                        Get Started
                    </Button>
                </div>
            </div>
            </main>


        </div>
    );
}