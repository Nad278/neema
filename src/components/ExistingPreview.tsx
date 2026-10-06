"use client";

import { useEffect, useState } from "react";

const steps = ["Your details", "Your rooms or menu", "Site live"];

export default function ExistingPreview() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 5), 1700);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <ol className="space-y-2.5 text-sm">
        {steps.map((label, idx) => {
          const state = step > idx ? "done" : step === idx ? "active" : "todo";
          return (
            <li key={label} className="flex items-center gap-3">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                  state === "done"
                    ? "bg-foreground text-background"
                    : state === "active"
                      ? "border-2 border-accent text-accent"
                      : "border border-foreground/25 text-foreground/40"
                }`}
              >
                {state === "done" ? "✓" : idx + 1}
              </span>
              <span className={state === "todo" ? "text-foreground/40" : "font-medium"}>{label}</span>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 h-[20rem]">
        {step >= 3 && (
          <div key={step === 4 ? "live" : "building"} className="animate-pop">
            <p className="mb-2 text-[11px] font-semibold tracking-widest uppercase text-foreground/50">
              {step === 4 ? "Live" : "Building…"}
            </p>
            <div className="overflow-hidden rounded-2xl border border-foreground/20">
              <div className="bg-accent px-4 py-8">
                <p className="font-display text-3xl font-extrabold leading-none">Palm View Guesthouse</p>
                <p className="mt-2 text-xs">12 rooms · Sea view</p>
                <span className="mt-4 inline-block rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background">
                  Book a room
                </span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-foreground/15 text-center text-xs">
                <div className="p-3">
                  <p className="text-base font-bold">$45</p>
                  <p className="text-foreground/50">per night</p>
                </div>
                <div className="p-3">
                  <p className="text-base font-bold">Pay online</p>
                  <p className="text-foreground/50">card · mobile</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
