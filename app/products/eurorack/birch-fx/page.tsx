import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import WaitlistForm from "@/components/waitlist-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Birch FX Module — Eurorack NAM Processor",
  description:
    "NAM inference in a Eurorack panel — the same four Birch FX circuits with CV-addressable Drive and Tone, gate bypass, and ±10V audio I/O.",
};

const circuits = [
  {
    id: "owl",
    species: "OWL",
    circuit: "Big Muff Style Fuzz",
    character:
      "Dense fuzz with vowel-like resonance. CV-sweep the Drive for slow-attack swell or gated stutter effects.",
    color: "text-primary",
    borderColor: "border-primary/30 hover:border-primary/60",
  },
  {
    id: "kingfisher",
    species: "KINGFISHER",
    circuit: "Klon Style Overdrive",
    character:
      "Transparent overdrive that adds sparkle without colour. Tone CV routes naturally from a filter envelope.",
    color: "text-[var(--bb-blue)]",
    borderColor: "border-[var(--bb-blue)]/30 hover:border-[var(--bb-blue)]/60",
  },
  {
    id: "finch",
    species: "FINCH",
    circuit: "Tube Screamer Style Overdrive",
    character:
      "Mid-forward push with a tight low end. Works as a subtle harmonic thickener or a full guitar-signal processor.",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/30 hover:border-emerald-400/60",
  },
  {
    id: "osprey",
    species: "OSPREY",
    circuit: "RAT Style Distortion",
    character:
      "Wide gain range from crunch to wall-of-sound. Gate input enables hard-gated distortion without a separate VCA.",
    color: "text-orange-400",
    borderColor: "border-orange-400/30 hover:border-orange-400/60",
  },
];

const specs = [
  "Electrosmith Patch.Init() (Daisy Seed core, ARM Cortex-M7 480 MHz)",
  "NAM neural inference at 48 kHz / 32-bit float",
  "4 circuits: OWL · KINGFISHER · FINCH · OSPREY",
  "CV inputs: Drive (0–5V), Tone (0–5V)",
  "Gate input: momentary bypass (3.3V–5V gate, Eurorack standard)",
  "Audio I/O: ±10V, DC-coupled (Eurorack standard)",
  "3U, 10HP, 35mm depth",
  "Neural Bus connector (NSB-1 compatible for Weight Bus chaining)",
  "USB-C: model updates, firmware, agent control",
  "Power: +12V / 80mA, –12V / 5mA (Eurorack standard header)",
];

export default function BirchFxEurorackPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Badge variant="outline" className="font-mono text-[10px]">
            Modular
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
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-3">
                Birch FX{" "}
                <span className="font-mono text-[var(--bb-blue)]">Module</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                NAM inference in a Eurorack panel. Four circuits — CV-addressable,
                gate-bypassable, Weight Bus ready.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The Birch FX Module brings the same NAM circuit models as the OWL pedal
              into a 10HP Eurorack format. Built on the Electrosmith Patch.Init(), it
              adds CV control over Drive and Tone, a gate input for momentary bypass,
              and ±10V audio I/O — all with the same neural inference engine that
              powers the pedal.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                render={<Link href="#early-access" />}
                className="font-mono tracking-wide"
              >
                Join the Early Access List →
              </Button>
              <Button
                render={<Link href="/products/eurorack" />}
                variant="outline"
                className="font-mono tracking-wide"
              >
                ← All Modules
              </Button>
            </div>
          </div>

          {/* Panel artwork placeholder — to be replaced with Birch FX panel design from BIR-68 */}
          <div className="flex items-center justify-center border border-dashed border-border rounded-xl h-64 bg-card/50">
            <div className="text-center space-y-3">
              {/* Simplified Eurorack panel representation */}
              <div className="mx-auto w-20 border border-[var(--bb-blue)]/40 rounded bg-card/80 px-3 py-4 space-y-2">
                <div className="w-6 h-6 rounded-full border border-[var(--bb-blue)]/60 mx-auto" />
                <div className="w-6 h-6 rounded-full border border-[var(--bb-blue)]/60 mx-auto" />
                <div className="h-px bg-[var(--bb-blue)]/20" />
                <div className="w-4 h-4 rounded-full border border-[var(--bb-blue)]/40 mx-auto" />
                <div className="w-4 h-4 rounded-full border border-[var(--bb-blue)]/40 mx-auto" />
                <div className="font-mono text-[8px] text-[var(--bb-blue)]/60 text-center pt-1">
                  10HP
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                Panel Design · BIR-68
              </p>
              <p className="font-mono text-[10px] text-muted-foreground/50">
                Final layout in progress
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Circuit Lineup */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 space-y-2">
          <p className="font-mono text-xs tracking-[0.3em] text-[var(--bb-blue)] uppercase">
            Circuit Lineup
          </p>
          <h2 className="text-3xl font-bold tracking-tight">
            Same circuits. New control surface.
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            The Birch FX Module runs identical NAM models to the OWL pedal — but with
            CV and gate replacing the knob-and-footswitch interface. Patch it like any
            signal processor; it behaves like a finely tuned analog circuit.
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
          WREN (warm boost/EQ) and future circuits deployable via USB-C firmware update.
        </p>
      </section>

      <Separator />

      {/* CV Routing */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="font-mono text-xs tracking-[0.3em] text-[var(--bb-blue)] uppercase">
              CV &amp; Gate Routing
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Patch-native control.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              CV inputs feed directly into the NAM weight inference — modulating
              Drive sweeps the model&apos;s saturation threshold; Tone adjusts the
              trained spectral shaping. The gate input enables hard momentary bypass
              without a separate VCA, making gated distortion effects trivial to patch.
            </p>
            <Link
              href="/products/pedals/owl"
              className="font-mono text-sm text-[var(--bb-blue)] hover:underline inline-block"
            >
              Compare with the OWL pedal →
            </Link>
          </div>
          <div className="space-y-3">
            {[
              { jack: "AUDIO IN", type: "Input", detail: "±10V, DC-coupled, Eurorack standard" },
              { jack: "AUDIO OUT", type: "Output", detail: "±10V, DC-coupled, Eurorack standard" },
              { jack: "CV DRIVE", type: "CV Input", detail: "0–5V → Drive parameter" },
              { jack: "CV TONE", type: "CV Input", detail: "0–5V → Tone parameter" },
              { jack: "GATE", type: "Gate Input", detail: "3.3–5V gate → momentary bypass" },
            ].map((j) => (
              <div
                key={j.jack}
                className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card"
              >
                <div className="shrink-0">
                  <p className="font-mono text-xs font-bold text-[var(--bb-blue)] tracking-wide">
                    {j.jack}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground">{j.type}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{j.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Full Specs */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="font-mono text-xs tracking-[0.3em] text-[var(--bb-blue)] uppercase">
              Specifications
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Patch.Init() at the core.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Electrosmith Patch.Init() is the Daisy Seed in Eurorack form —
              same ARM Cortex-M7 at 480 MHz, same floating-point unit, with
              Eurorack-native I/O, CV, and gate built in. NSB-1 Weight Bus connector
              means this module can be coordinated with other Bird Brain hardware.
            </p>
          </div>
          <div>
            <ul className="space-y-2">
              {specs.map((spec) => (
                <li key={spec} className="flex items-start gap-3 text-sm font-mono text-muted-foreground">
                  <span className="text-[var(--bb-blue)] mt-0.5">·</span>
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
            <p className="font-mono text-xs tracking-[0.3em] text-[var(--bb-blue)] uppercase">
              Pricing
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Panel design in progress.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The panel layout and UX design are underway (
              <span className="font-mono text-xs">BIR-68</span>).
              Production pricing will be announced when the panel design is finalised.
              Waitlist members get first access and launch pricing.
            </p>
          </div>

          <div className="space-y-3">
            <Card className="bg-card border-[var(--bb-blue)]/20">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-sm font-semibold tracking-wide">Birch FX Module</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      NAM Eurorack processor · 10HP · Patch.Init()
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-2xl font-bold text-[var(--bb-blue)]">TBC</p>
                    <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                      Announced at launch
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-sm font-semibold tracking-wide">OWL + Module Bundle</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Pedal + Eurorack · unified ecosystem
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-lg font-bold text-muted-foreground">TBC</p>
                    <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                      Waitlist pricing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Early Access */}
      <section id="early-access" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="font-mono text-xs tracking-[0.3em] text-[var(--bb-blue)] uppercase">
              Early Access
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Be first when
              <br />
              the panel ships.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We&apos;ll email you when the Birch FX Module pre-orders open —
              and only then. Waitlist members get first access and launch pricing.
              One email. No noise.
            </p>
            <WaitlistForm />
          </div>
          <div className="space-y-3">
            {[
              { label: "Panel design", status: "In progress", detail: "BIR-68 · layout + UX" },
              { label: "Firmware & CV routing", status: "Done", detail: "NAM inference + CV confirmed" },
              { label: "Production run", status: "Planned", detail: "Post panel design sign-off" },
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
                <span
                  className={`shrink-0 font-mono text-[10px] border rounded px-2 py-0.5 ${
                    item.status === "Done"
                      ? "text-emerald-400 border-emerald-400/30"
                      : "text-[var(--bb-blue)] border-[var(--bb-blue)]/30"
                  }`}
                >
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
