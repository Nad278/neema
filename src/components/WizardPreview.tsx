"use client";

import { useEffect, useState } from "react";

const scenarios = [
  {
    idea: "I want to sell cakes",
    name: "Sweet Crumbs",
    items: [["Vanilla cake", "$28"], ["Cupcakes ×6", "$12"], ["Birthday cake", "$45"]],
  },
  {
    idea: "I'm opening a barber shop",
    name: "Fresh Cut",
    items: [["Haircut", "$18"], ["Beard trim", "$10"], ["Cut + beard", "$25"]],
  },
  {
    idea: "I sell clothes online",
    name: "Thread & Co",
    items: [["Linen shirt", "$34"], ["Everyday tee", "$16"], ["Denim jacket", "$62"]],
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
      t = setTimeout(() => setTyped(typed + 1), 50);
    } else if (!done) {
      t = setTimeout(() => setDone(true), 500);
    } else {
      t = setTimeout(() => {
        setI((i + 1) % scenarios.length);
        setTyped(0);
        setDone(false);
      }, 4500);
    }
    return () => clearTimeout(t);
  }, [typed, done, i, s.idea.length]);

  return (
    <div>
      <p className="text-[11px] font-semibold tracking-widest text-foreground/50 uppercase">
        Your business
      </p>
      <p className="mt-2 min-h-11 rounded-xl border border-foreground/25 px-3 py-2.5 text-sm">
        {s.idea.slice(0, typed)}
        <span className="caret ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-foreground" />
      </p>

      <div className="mt-5 h-[19rem]">
        {done && (
          <div key={i} className="animate-pop">
            <div className="rounded-2xl bg-accent p-4">
              <p className="text-[11px] font-semibold tracking-widest uppercase">Your shop</p>
              <p className="font-display text-3xl font-extrabold leading-none">{s.name}</p>
            </div>
            <ul className="mt-3 divide-y divide-foreground/15 text-sm">
              {s.items.map(([n, p]) => (
                <li key={n} className="flex justify-between py-2.5">
                  <span>{n}</span>
                  <span className="font-bold">{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 rounded-xl bg-foreground px-3 py-2.5 text-center text-sm font-semibold text-background">
              30-day plan ready →
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
