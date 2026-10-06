"use client";

import { useEffect, useState } from "react";
import { IDEA_EVENT } from "./HeroForm";

type Status = "idle" | "sending" | "done" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const onIdea = (e: Event) => setIdea((e as CustomEvent<string>).detail ?? "");
    window.addEventListener(IDEA_EVENT, onIdea);
    return () => window.removeEventListener(IDEA_EVENT, onIdea);
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, idea }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network problem. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <p className="rounded-xl bg-emerald-600/10 px-5 py-4 font-medium text-emerald-700">
        You&apos;re on the list. We&apos;ll email you when Origo opens.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="mx-auto flex max-w-xl flex-col gap-3">
      <input
        type="text"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Your business idea (optional)"
        aria-label="Your business idea"
        maxLength={500}
        suppressHydrationWarning
        className="rounded-xl border border-foreground/20 bg-transparent px-4 py-3 outline-none focus:border-emerald-600"
      />
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Your email"
          suppressHydrationWarning
          className="flex-1 rounded-xl border border-foreground/20 bg-transparent px-4 py-3 outline-none focus:border-emerald-600"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
        >
          {status === "sending" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-500">
          {message}
        </p>
      )}
    </form>
  );
}
