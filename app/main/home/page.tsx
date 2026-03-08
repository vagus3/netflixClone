import Footer from "@/components/Footer";
import EmailSection from "@/components/home/email_section";
import FaqSection from "@/components/home/faq_section";
import MoreReasonsSection from "@/components/home/more_reasons_section";
import NetflixAdsSection from "@/components/home/neflix_ads_section";
import TrendingSection from "@/components/home/trending_section";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">

      <section className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-6 text-center">
        <h1 className="max-w-screen-lg text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-6xl">
          Unlimited movies, TV
          <br />
          shows, and more
        </h1>

        <div className="flex flex-col gap-4">
          <p className="text-center text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Starts at KRW 7,000. Cancel anytime.
          </p>
          <p className="text-center text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Ready to watch? Enter your email to create or restart membership.
          </p>
        </div>

        <EmailSection />
      </section>

      <main className="flex w-full flex-col">
        <NetflixAdsSection />
        <TrendingSection />
        <MoreReasonsSection />
        <FaqSection />
        <EmailSection />
      </main>

      <Footer />
    </div>
  );
}
