import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import WaitlistForm from "@/components/waitlist-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OWL — Birch FX Guitar Pedal",
  description:
    "NAM-powered fuzz, overdrive, and distortion in one 125B enclosure. Four classic circuits, one Daisy Seed, zero compromises.",
};

const circuits = [
  {
    id: "owl",
    species: "OWL",
    circuit: "Big Muff Style Fuzz",
    character:
      "Thick, vowel-rich fuzz with a scooped mid profile. Sustain that blooms and sags with pick attack.",
    color: "text-primary",
    borderColor: "border-primary/30 hover:border-primary/60",
  },
  {
    id: "kingfisher",
    species: "KINGFISHER",
    circuit: "Klon Style Overdrive",
    character:
      "Clean headroom with a whisker of clipping. Adds sparkle and touch sensitivity without masking the amp.",
    color: "text-[var(--bb-blue)]",
    borderColor: "border-[var(--bb-blue)]/30 hover:border-[var(--bb-blue)]/60",
  },
  {
    id: "finch",
    species: "FINCH",
    circuit: "Tube Screamer Style Overdrive",
    character:
      "Warm, mid-forward push. Tightens the low end while adding creamy sustain that sits in the mix.",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/30 hover:border-emerald-400/60",
  },
  {
    id: "osprey",
    species: "OSPREY",
    circuit: "RAT Style Distortion",
    character:
      "Aggressive clipping with a wide gain range — from crunchy edge-of-breakup to full wall-of-sound distortion.",
    color: "text-orange-400",
    borderColor: "border-orange-400/30 hover:border-orange-400/60",
  },
];

const specs = [
  "Electrosmith Daisy Seed (ARM Cortex-M7, 480 MHz)",
  "NAM neural inference at 48 kHz / 32-bit float",
  "4 onboard circuits: OWL · KINGFISHER · FINCH · OSPREY",
  "Controls: Drive · Tone · Mix + circuit selector",
  "True bypass via relay switching",
  "1/4\" mono input and output (instrument level)",
  "USB-C: model updates, firmware, future agent control",
  "9V DC centre-negative, 200mA",
  "Hammond 125B enclosure (112 × 60 × 31mm)",
  "OWL species artwork on faceplate (Birch FX edition)",
];

export default function OwlPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Badge variant="outline" className="font-mono text-[10px]">
            Hardware
          </Badge>
          <Badge className="font-mono text-[10px]">
            Pre-Order
          </Badge>
          <Badge variant="outline" className="font-mono text-[10px]">
            Birch FX
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h1 className="text-6xl sm:text-7xl font-bold tracking-tight font-mono text-primary leading-none mb-3">
                OWL
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                NAM-powered fuzz, overdrive, and distortion in one 125B enclosure.
                Four classic circuits. One Daisy Seed.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The OWL runs Neural Audio Models at 48 kHz on an Electrosmith Daisy Seed,
              capturing the exact transfer function of four classic analog circuits.
              Switch between them mid-performance. No amp sims, no IR convolution —
              direct weight inference from a circuit-trained model.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                render={<Link href="#early-access" />}
                className="font-mono tracking-wide"
              >
                Join the Early Access List →
              </Button>
              <Button
                render={<Link href="/products/pedals" />}
                variant="outline"
                className="font-mono tracking-wide"
              >
                ← All Pedals
              </Button>
            </div>
          </div>

          {/* Artwork placeholder — to be replaced with OWL species illustration from BIR-55 */}
          <div className="flex items-center justify-center border border-dashed border-border rounded-xl h-64 bg-card/50">
            <div className="text-center space-y-3">
              <svg
                viewBox="0 0 120 120"
                className="w-24 h-24 mx-auto text-primary opacity-60"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified owl silhouette */}
                <ellipse cx="60" cy="68" rx="28" ry="34" />
                <ellipse cx="60" cy="36" rx="22" ry="22" />
                {/* Ear tufts */}
                <polygon points="44,18 40,4 50,16" />
                <polygon points="76,18 80,4 70,16" />
                {/* Eyes */}
                <circle cx="51" cy="34" r="7" fill="var(--background)" />
                <circle cx="69" cy="34" r="7" fill="var(--background)" />
                <circle cx="51" cy="34" r="4" fill="currentColor" />
                <circle cx="69" cy="34" r="4" fill="currentColor" />
                {/* Wing marks */}
                <path d="M35 60 Q20 72 32 88" stroke="var(--background)" strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M85 60 Q100 72 88 88" stroke="var(--background)" strokeWidth="2" fill="none" opacity="0.5" />
              </svg>
              <p className="font-mono text-xs text-muted-foreground">
                OWL — Species Artwork
              </p>
              <p className="font-mono text-[10px] text-muted-foreground/50">
                Illustration: Birch FX / BIR-55
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Circuit Lineup */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 space-y-2">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Circuit Lineup
          </p>
          <h2 className="text-3xl font-bold tracking-tight">
            Four circuits. One pedal.
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Each circuit is a NAM model trained directly on the analog target —
            not approximated, not resampled. Named for the bird species on its faceplate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {circuits.map((c) => (
            <Card
              key={c.id}
              className={`bg-card border transition-colors ${c.borderColor}`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-baseline gap-3">
                  <span className={`font-mono text-xl font-bold tracking-widest ${c.color}`}>
                    {c.species}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {c.circuit}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {c.character}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-6 font-mono text-xs text-muted-foreground">
          Future circuits (WREN — warm boost/EQ) deployable via USB-C firmware update.
        </p>
      </section>

      <Separator />

      {/* Full Specs */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Specifications
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Built on the Daisy Seed.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Electrosmith Daisy Seed gives the OWL a 480 MHz ARM Cortex-M7
              with a floating-point unit — enough headroom to run NAM inference
              at full audio rates with deterministic latency.
            </p>
          </div>
          <div>
            <ul className="space-y-2">
              {specs.map((spec) => (
                <li key={spec} className="flex items-start gap-3 text-sm font-mono text-muted-foreground">
                  <span className="text-primary mt-0.5">·</span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Separator />

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Pricing
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Phase 1 — Prototype Units
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The first 5 prototype units are being evaluated by guitarists now.
              Production pricing and pre-order window will be announced when
              prototype feedback is in. Join the list to be first.
            </p>
          </div>

          <div className="space-y-3">
            <Card className="bg-card border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-sm font-semibold tracking-wide">OWL</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      NAM guitar pedal · 125B · Daisy Seed
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-2xl font-bold text-primary">~$249</p>
                    <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                      Target retail · TBC
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-sm font-semibold tracking-wide">OWL + Birch FX Bundle</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Pedal + Eurorack module · waitlist pricing
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-lg font-bold text-muted-foreground">TBC</p>
                    <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                      Announced with pre-order
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Early Access signup */}
      <section id="early-access" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Early Access
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Be first when
              <br />
              pre-orders open.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We&apos;ll email you when OWL pre-orders open — and only then.
              Waitlist members get first access and launch pricing.
              One email. No noise.
            </p>
            <WaitlistForm />
          </div>
          <div className="space-y-3">
            {[
              { label: "Prototype evaluation", status: "In progress", detail: "5 units · guitarist feedback" },
              { label: "Production run", status: "Planned", detail: "Target: Q3 2026" },
              { label: "Pre-orders open", status: "Waitlist", detail: "List members first" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-lg border border-border bg-card flex items-start justify-between gap-4"
              >
                <div>
                  <p className="font-mono text-sm font-semibold tracking-wide">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                </div>
                <span className="shrink-0 font-mono text-[10px] text-primary border border-primary/30 rounded px-2 py-0.5">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
