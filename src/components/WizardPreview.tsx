"use client";

import { useEffect, useState } from "react";
import { Window } from "./Mockups";

const scenarios = [
  {
    idea: "I want to sell homemade cakes",
    name: "Sweet Crumbs Bakery",
    items: [
      ["Vanilla celebration cake", "$28"],
      ["Chocolate cupcakes (6)", "$12"],
      ["Custom birthday cake", "$45"],
    ],
    plan: [
      "Week 1: Photograph 3 products, set your prices",
      "Week 2: Share your shop link with 20 people you know",
      "Week 3: Run a first-order discount",
      "Week 4: Ask your first customers for reviews",
    ],
  },
  {
    idea: "I'm opening a barber shop",
    name: "Fresh Cut Barbers",
    items: [
      ["Classic haircut", "$18"],
      ["Beard trim", "$10"],
      ["Cut + beard", "$25"],
    ],
    plan: [
      "Week 1: Add your services and opening hours",
      "Week 2: Turn on online booking",
      "Week 3: Offer a first-visit discount",
      "Week 4: Ask clients for reviews",
    ],
  },
  {
    idea: "I sell clothes on Instagram",
    name: "Thread & Co",
    items: [
      ["Linen shirt", "$34"],
      ["Everyday tee", "$16"],
      ["Denim jacket", "$62"],
    ],
    plan: [
      "Week 1: Build your shop from your best posts",
      "Week 2: Add a Pay link to your bio",
      "Week 3: Launch a limited drop",
      "Week 4: Bring back first-time buyers",
    ],
  },
];

export default function WizardPreview() {
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState(0);
  const [done, setDone] = useState(false);
  const s = scenarios[i];

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (typed < s.idea.length) {
      t = setTimeout(() => setTyped(typed + 1), 45);
    } else if (!done) {
      t = setTimeout(() => setDone(true), 500);
    } else {
      t = setTimeout(() => {
        setI((i + 1) % scenarios.length);
        setTyped(0);
        setDone(false);
      }, 5000);
    }
    return () => clearTimeout(t);
  }, [typed, done, i, s.idea.length]);

  return (
    <Window title="Setup Wizard">
      <p className="text-xs font-medium text-foreground/50">You typed</p>
      <p className="mt-1 min-h-9 rounded-lg bg-foreground/[0.05] px-3 py-2 text-sm">
        {s.idea.slice(0, typed)}
        <span className="caret ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-foreground" />
      </p>

      <div className="mt-4 min-h-[19rem]">
        {done && (
          <div key={i} className="animate-pop">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Origo set this up for you
            </div>

            <div className="mt-3 rounded-xl border border-foreground/10 p-3">
              <p className="text-xs text-foreground/50">Shop name suggestion</p>
              <p className="font-bold">{s.name}</p>
              <ul className="mt-3 divide-y divide-foreground/10 text-sm">
                {s.items.map(([n, p]) => (
                  <li key={n} className="flex justify-between py-1.5">
                    <span>{n}</span>
                    <span className="font-semibold">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-3 rounded-xl border border-foreground/10 p-3">
              <p className="text-xs font-semibold text-foreground/50">Your 30-day plan</p>
              <ul className="mt-2 space-y-1.5 text-sm">
                {s.plan.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-emerald-600">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Window>
  );
}
