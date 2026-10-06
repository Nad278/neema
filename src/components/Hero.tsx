"use client";

import { useState } from "react";
import { IDEA_EVENT } from "@/lib/events";
import ExistingPreview from "./ExistingPreview";
import { Phone } from "./Mockups";
import WizardPreview from "./WizardPreview";

type Mode = "start" | "existing";

const content = {
  start: {
    line1: "Open for",
    line2: "business.",
    sub: "Tell Origo what you want to sell. It builds your online shop, your till for taking payments, and a 30-day plan to your first sale.",
    placeholder: "e.g. I want to sell cakes",
    chips: ["Café", "Salon", "Online store", "Bakery"],
  },
  existing: {
    line1: "Your business,",
    line2: "one screen.",
    sub: "Origo puts your website, bookings, payments and daily numbers in one app, with an AI coach that suggests what to do next. You approve everything.",
    placeholder: "e.g. I run a 12-room guesthouse",
    chips: ["Shop", "Hotel", "Restaurant", "Clinic"],
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
    <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pb-16 pt-6 lg:grid-cols-[1.2fr_1fr] lg:pb-24">
      <div>
        <div
          role="tablist"
          aria-label="Who are you?"
          className="inline-flex rounded-full border border-foreground/30 p-1 text-sm font-semibold"
        >
          {(
            [
              ["start", "New business"],
              ["existing", "Existing business"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              role="tab"
              aria-selected={mode === id}
              onClick={() => setMode(id)}
              className={`rounded-full px-4 py-1.5 transition ${
                mode === id ? "bg-foreground text-background" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <h1
          key={mode}
          className="animate-pop mt-8 text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]"
        >
          {c.line1}
          <br />
          <span className="text-accent">{c.line2}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/70">{c.sub}</p>

        <form onSubmit={submit} className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder={c.placeholder}
            aria-label="Describe your business"
            suppressHydrationWarning
            className="flex-1 rounded-full border border-foreground/30 bg-transparent px-5 py-3 outline-none focus:border-foreground"
          />
          <button
            type="submit"
            className="rounded-full bg-foreground px-6 py-3 font-semibold text-background transition hover:bg-accent hover:text-foreground"
          >
            Get early access
          </button>
        </form>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {c.chips.map((e) => (
            <button
              key={e}
              type="button"
              onClick={() => setIdea(e)}
              className="rounded-full border border-foreground/25 px-3 py-1 transition hover:border-foreground hover:bg-foreground hover:text-background"
            >
              {e}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="animate-float">
          <Phone>{mode === "start" ? <WizardPreview /> : <ExistingPreview />}</Phone>
        </div>
        <div
          className="animate-float absolute -left-2 top-24 hidden rounded-2xl bg-accent px-4 py-2 text-sm font-bold shadow-lg sm:block lg:-left-10"
          style={{ animationDelay: "-2s" }}
        >
          Sale +$28
        </div>
        <div
          className="animate-float absolute -right-2 bottom-8 hidden rounded-2xl bg-foreground px-4 py-2 text-sm font-bold text-background shadow-lg sm:block lg:-right-6"
          style={{ animationDelay: "-4s" }}
        >
          New booking · Room 104
        </div>
        <p className="mt-6 text-center text-xs text-foreground/40">Preview · sample data</p>
      </div>
    </div>
  );
}
