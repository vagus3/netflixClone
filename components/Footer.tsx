// components/Footer.tsx
import { Button } from "@/components/ui/button";

const links = [
  ["FAQ", "Investor Relations", "Privacy Statement", "Speed Test"],
  ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
  ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
  ["Media Center", "Terms of Use", "Contact Us"],
];

export default function Footer() {
  return (
    <footer className="w-full bg-black px-10 py-12 text-zinc-400 sm:px-16">
      <div className="mx-auto max-w-7xl space-y-8">

        <p className="text-sm">
          <a href="#" className="underline">
            Questions? Contact us.
          </a>
        </p>

        <div className="grid grid-cols-2 gap-y-3 text-sm sm:grid-cols-4">
          {links.map((col, colIdx) => (
            <ul key={colIdx} className="space-y-3">
              {col.map((link) => (
                <li key={link}>
                  <a href="#" className="underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="border-zinc-600 bg-transparent text-zinc-300"
        >
          🌐 English ▾
        </Button>

        <p className="text-sm">Netflix South Korea</p>

        <div className="space-y-1 text-xs leading-relaxed text-zinc-500">
          <p>Netflix Services Korea Ltd. E-Commerce Registration Number: Je 2018-Seoul Jong-ro-0426 Ho. Phone:</p>
          <p>Representative: Reginald Shawn Thompson</p>
          <p>Email: korea@netflix.com</p>
          <p>Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro, Jongno-gu, Seoul, 03161 Republic of Korea</p>
          <p>Business registration number: 165-87-00119</p>
          <p>Hosted by: Amazon Web Services Inc.</p>
          <a href="#" className="underline">
            KFTC website
          </a>
        </div>

        <p className="border-t border-zinc-800 pt-6 text-xs text-zinc-500">
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.{" "}
          <a href="#" className="text-blue-400 underline">
            Learn more.
          </a>
        </p>

      </div>
    </footer>
  );
}
