"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type State = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || state === "submitting") return;

    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setState("success");
      setEmail("");
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "success") {
    return (
      <div className="p-4 rounded-lg border border-primary/30 bg-primary/5 space-y-1">
        <p className="font-mono text-sm text-primary">You&apos;re on the list.</p>
        <p className="text-xs text-muted-foreground">
          We&apos;ll email you when Latency Zero and Agent CV are ready to ship.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={state === "submitting"}
          className="flex-1 h-10 px-3 rounded-md border border-border bg-input text-sm font-mono placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/60 disabled:opacity-50"
        />
        <Button
          type="submit"
          disabled={state === "submitting"}
          className="font-mono tracking-wide shrink-0"
        >
          {state === "submitting" ? "Joining…" : "Join the Launch List →"}
        </Button>
      </div>

      {state === "error" && (
        <p className="text-xs text-destructive font-mono">{errorMsg}</p>
      )}

      <p className="text-xs text-muted-foreground">
        One email per product launch. No noise.
      </p>
    </form>
  );
}
