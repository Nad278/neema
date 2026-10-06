"use client";

import { useEffect, useState } from "react";
import { IDEA_EVENT } from "@/lib/events";

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
      <p className="rounded-2xl bg-accent px-5 py-4 text-lg font-bold">
        You&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="mx-auto flex max-w-xl flex-col gap-3">
      <input
        type="text"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Your business (optional)"
        aria-label="Your business idea"
        maxLength={500}
        suppressHydrationWarning
        className="rounded-full border border-background/30 bg-transparent px-5 py-3 outline-none focus:border-background"
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
          className="flex-1 rounded-full border border-background/30 bg-transparent px-5 py-3 outline-none focus:border-background"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-accent px-6 py-3 font-bold text-foreground hover:brightness-110 disabled:opacity-60"
        >
          {status === "sending" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm text-accent">
          {message}
        </p>
      )}
    </form>
  );
}
