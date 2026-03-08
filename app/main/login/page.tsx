// app/login/page.tsx  (또는 app/main/login/page.tsx)
"use client";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* 상단 네비게이션 */}
      <Navbar />

      {/* 중앙 로그인 영역 */}
      <main className="flex min-h-[70vh] w-full items-center justify-center bg-gradient-to-b from-[#3b0000] via-[#190000] to-black px-6">
        <div className="mx-auto flex w-full max-w-md flex-col gap-6 text-white">
          {/* 제목/설명 */}
          <div>
            <h1 className="text-2xl font-bold sm:text-3xl">
              Enter your info to sign in
            </h1>
            <p className="mt-2 text-sm text-zinc-300">
              Or get started with a new account.
            </p>
          </div>

          {/* 입력 + 버튼 */}
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email or mobile number"
              className="h-11 w-full rounded-sm border border-zinc-700 bg-black/80 px-3 text-sm text-white outline-none focus:border-white"
            />
            <Button className="h-11 w-full rounded-sm bg-red-600 text-sm font-semibold hover:bg-red-700">
              Continue
            </Button>
          </div>

          {/* 도움말/recaptcha */}
          <div className="space-y-2 text-xs text-zinc-400">
            <button className="text-left text-zinc-300 underline">
              Get Help
            </button>
            <p className="text-[11px] leading-relaxed">
              This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.
              <button className="ml-1 text-[11px] text-blue-400 underline">
                Learn more.
              </button>
            </p>
          </div>
        </div>
      </main>

      {/* 하단 푸터 */}
      <Footer />
    </div>
  );
}
