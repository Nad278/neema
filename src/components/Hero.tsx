"use client";

import { useState } from "react";
import { IDEA_EVENT } from "@/lib/events";
import ExistingPreview from "./ExistingPreview";
import WizardPreview from "./WizardPreview";

type Mode = "start" | "existing";

const content = {
  start: {
    eyebrow: "For first-time and small business owners, anywhere in the world",
    before: "From idea to your first sale in ",
    accent: "10 minutes.",
    sub: "Tell Origo the business you want to start. It sets everything up, shows you what to do next, and then helps you run and grow it.",
    promises: [
      "Your shop and website, built for you",
      "A point of sale for cash, card and mobile payments",
      "A 30-day plan to your first paying customer",
    ],
    placeholder: "e.g. I want to sell cakes",
    examples: ["A café", "A hair salon", "An online clothing store", "A bakery", "A tailoring shop"],
  },
  existing: {
    eyebrow: "For shops, hotels, restaurants, salons and more",
    before: "Already have a business? Put it online and ",
    accent: "run it from one screen.",
    sub: "Get a professional website, online booking and payments, and one dashboard for sales, stock, bookings and staff. Keep what works. Origo connects the rest.",
    promises: [
      "A website built from your existing details, in minutes",
      "Online booking, ordering and payments",
      "One dashboard to see and control the whole business",
    ],
    placeholder: "e.g. I run a 12-room guesthouse",
    examples: ["A shop", "A hotel or guesthouse", "A restaurant", "A salon", "A clinic"],
  },
} as const;

export default function Hero() {
  const [mode, setMode] = useState<Mode>("start");
  const [idea, setIdea] = useState("");
  const c = content[mode];

  function submit(e: React.FormEvent) {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent(IDEA_EVENT, { detail: idea }));
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-12 sm:py-20 lg:grid-cols-2">
        <div>
          <div
            role="tablist"
            aria-label="Who are you?"
            className="inline-flex rounded-full border border-foreground/15 p-1 text-sm font-semibold"
          >
            {(
              [
                ["start", "I'm starting a business"],
                ["existing", "I already have one"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                role="tab"
                aria-selected={mode === id}
                onClick={() => setMode(id)}
                className={`rounded-full px-4 py-1.5 transition ${
                  mode === id ? "bg-emerald-600 text-white" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div key={mode} className="animate-pop">
            <p className="mt-6 text-sm font-semibold text-emerald-600">{c.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {c.before}
              <span className="text-emerald-500">{c.accent}</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/70">{c.sub}</p>
            <ul className="mt-6 space-y-2 text-foreground/80">
              {c.promises.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs text-white">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 max-w-2xl">
            <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder={c.placeholder}
                aria-label="Describe your business"
                suppressHydrationWarning
                className="flex-1 rounded-xl border border-foreground/20 bg-transparent px-4 py-3 outline-none focus:border-emerald-600"
              />
              <button
                type="submit"
                className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Get early access
              </button>
            </form>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-foreground/60">Try:</span>
              {c.examples.map((e) => (
                <button
                  key={e}
                  type="button"
                  onClick={() => setIdea(e)}
                  className="rounded-full border border-foreground/15 px-3 py-1 text-foreground/80 transition hover:border-emerald-600 hover:text-emerald-700"
                >
                  {e}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm text-foreground/50">
            Origo is in development. Join the waitlist for early access.
          </p>
        </div>

        <div className="animate-float">
          {mode === "start" ? <WizardPreview /> : <ExistingPreview />}
          <p className="mt-3 text-center text-xs text-foreground/40">
            Preview of a planned screen, with sample data.
          </p>
        </div>
      </div>
    </div>
  );
}
