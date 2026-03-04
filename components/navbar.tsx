import Image from "next/image";
export function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-transparent p-4 absolute w-full z-10">
            <div className="flex items-center gap-4">
        <Image
          className="dark:invert"
          src="/netflixlogo.jpg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
            </div>
            <div className="flex items-center gap-4">
                
                <button className="text-white">Sign In</button>
            </div>
        </nav>
    );
}