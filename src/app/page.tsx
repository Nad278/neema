import HeroForm from "@/components/HeroForm";
import Navbar from "@/components/Navbar";

const promises = [
  "Your shop and website, built for you",
  "A point of sale for cash, card and mobile payments",
  "A 30-day plan to your first paying customer",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
        <p className="inline-block rounded-full bg-emerald-600/10 px-4 py-1 text-sm font-medium text-emerald-700">
          For first-time and small business owners, anywhere in the world
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          From idea to your first sale in 10 minutes.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/70">
          Tell Origo the business you want to start. It sets everything up,
          shows you what to do next, and then helps you run and grow it.
        </p>

        <ul className="mt-8 space-y-2 text-foreground/80">
          {promises.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className="mt-1 text-emerald-600">✓</span>
              {p}
            </li>
          ))}
        </ul>

        <HeroForm />

        <p className="mt-6 text-sm text-foreground/50">
          Free to start. No credit card needed.
        </p>
      </main>
    </>
  );
}
