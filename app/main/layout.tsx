import { Navbar } from "@/components/navbar";

export default function SharedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 

  return (
      <div className="flex min-h-screen items-center flex-col bg-zinc-50 font-sans bg-transparent">
        <Navbar />
        {children}
    </div>
  );
}
