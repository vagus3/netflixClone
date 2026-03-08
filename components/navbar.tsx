"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/dist/client/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="absolute z-10 w-full bg-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:max-w-7xl sm:px-12">
        <Image
          className="dark:invert"
          src="/netflixlogo.jpg"
          alt="Netflix logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="rounded border border-white/40 bg-black/40 px-3 py-1 text-xs text-white sm:px-4 sm:text-sm"
              >
                English ▾
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>English</DropdownMenuLabel>
                <DropdownMenuItem>한국어</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

        <Link href="/login">
          <Button className="rounded bg-red-600 px-4 py-1 text-xs text-white hover:bg-red-700 sm:text-sm">
            Sign In
          </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
