"use client";

import { useState } from "react";

const examples = [
  "A café",
  "A hair salon",
  "An online clothing store",
  "A bakery",
  "A tailoring shop",
  "A phone repair shop",
];

export const IDEA_EVENT = "origo:idea";

export default function HeroForm() {
  const [idea, setIdea] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent(IDEA_EVENT, { detail: idea }));
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="mt-10 max-w-2xl">
      <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="e.g. I want to sell cakes"
          aria-label="Describe your business"
          suppressHydrationWarning
          className="flex-1 rounded-xl border border-foreground/20 bg-transparent px-4 py-3 outline-none focus:border-emerald-600"
        />
        <button
          type="submit"
          className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          Get early access
        </button>
      </form>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
        <span className="text-foreground/60">Try:</span>
        {examples.map((e) => (
          <button
            key={e}
            type="button"
            onClick={() => setIdea(e)}
            className="rounded-full border border-foreground/15 px-3 py-1 text-foreground/80 hover:border-emerald-600 hover:text-emerald-700"
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
}
