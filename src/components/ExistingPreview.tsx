"use client";

import { useEffect, useState } from "react";
import { Window } from "./Mockups";

const steps = [
  "Tell us about your business",
  "Add your menu, rooms or price list",
  "Origo builds your site, booking and payments",
];

export default function ExistingPreview() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 5), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <Window title="Bring your business online">
      <ol className="space-y-2.5 text-sm">
        {steps.map((label, idx) => {
          const state = step > idx ? "done" : step === idx ? "active" : "todo";
          return (
            <li key={label} className="flex items-center gap-3">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                  state === "done"
                    ? "bg-emerald-600 text-white"
                    : state === "active"
                      ? "border-2 border-emerald-600 text-emerald-600"
                      : "border border-foreground/20 text-foreground/40"
                }`}
              >
                {state === "done" ? "✓" : idx + 1}
              </span>
              <span className={state === "todo" ? "text-foreground/40" : ""}>{label}</span>
            </li>
          );
        })}
      </ol>

      <div className="mt-5 min-h-[13rem]">
        {step >= 3 && (
          <div key={step === 4 ? "ready" : "building"} className="animate-pop">
            <p className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {step === 4 ? "Your website is live" : "Building…"}
            </p>
            <div className="mt-3 overflow-hidden rounded-xl border border-foreground/10">
              <div className="bg-emerald-600/15 px-4 py-6">
                <p className="text-lg font-extrabold">Palm View Guesthouse</p>
                <p className="mt-1 text-xs text-foreground/60">12 rooms · Sea view · Breakfast included</p>
                <span className="mt-3 inline-block rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">
                  Book a room
                </span>
              </div>
              <div className="grid grid-cols-3 divide-x divide-foreground/10 text-center text-xs">
                <div className="p-3">
                  <p className="font-bold">From $45</p>
                  <p className="text-foreground/50">per night</p>
                </div>
                <div className="p-3">
                  <p className="font-bold">Pay online</p>
                  <p className="text-foreground/50">card or mobile</p>
                </div>
                <div className="p-3">
                  <p className="font-bold">Live calendar</p>
                  <p className="text-foreground/50">no double booking</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Window>
  );
}
