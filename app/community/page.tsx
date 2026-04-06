import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description:
    "The Bird Brain open weight ecosystem — share models, build on the SDK, and train your own circuits.",
};

const reasons = [
  {
    title: "Models should outlive devices",
    body: "Proprietary model formats die when the company does. An open format means a weight trained today runs on hardware that doesn't exist yet.",
  },
  {
    title: "The physics is shareable",
    body: "A spice model of a 12AX7 tube is not a trade secret — it is applied physics. We model the circuit, not the brand. That knowledge belongs to everyone.",
  },
  {
    title: "Better models come from more data",
    body: "No single lab has captured every circuit variant, every unit-to-unit spread, every aging behavior. Community training does. Shared weights improve everyone's rig.",
  },
];

const sdkHighlights = [
  {
    label: "Rust",
    detail: "Core inference runtime · embedded target",
  },
  {
    label: "Python",
    detail: "Training · Spice Lab integration · data pipelines",
  },
  {
    label: "C++ / JUCE",
    detail: "DAW plugin development · VST3 / AU / AAX",
  },
  {
    label: "JavaScript / Node",
    detail: "Agent control layer · WebSocket interface",
  },
];

const communityLinks = [
  {
    label: "Weight Registry",
    href: "#",
    description:
      "Browse, upload, and rate community-trained models in the .bbm format. Filter by circuit type, device target, or training dataset.",
  },
  {
    label: "Forum",
    href: "#",
    description:
      "Technical discussion: circuit modeling, training methodology, SDK questions, and hardware integration.",
  },
  {
    label: "Discord",
    href: "#",
    description:
      "Real-time conversation for quick questions, weight sharing announcements, and beta access coordination.",
  },
  {
    label: "GitHub",
    href: "#",
    description:
      "The Bird Brain SDK, .bbm format spec, and reference implementations — all open source.",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3">
          Open Weights
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          The model layer
          <br />
          belongs to everyone.
        </h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Every Bird Brain device ships with a documented weight format. Train
          your own circuit models, share them with the community, or load
          third-party weights onto any device. The ecosystem is open by design.
        </p>
      </section>

      <Separator />

      {/* Why open weights */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="md:sticky md:top-24">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-2">
              Philosophy
            </p>
            <h2 className="text-2xl font-bold tracking-tight">
              Why we keep weights open
            </h2>
          </div>
          <div className="grid sm:grid-cols-1 gap-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="p-5 rounded-lg border border-border bg-card space-y-2"
              >
                <h3 className="font-mono text-sm font-semibold tracking-wide">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* The .bbm format */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-5">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              The Format
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              .bbm — Bird Brain Model
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A .bbm file is a portable container for a differentiable circuit
              model. It stores the computation graph, trained weights, metadata
              (target device, sample rate range, training data provenance), and
              an optional inference profile for embedded targets.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The format is versioned, backward-compatible, and fully
              documented. Any device or plugin that speaks .bbm can load any
              community model — no vendor lock-in, no conversion step.
            </p>
            <div className="rounded-lg border border-border bg-card p-5 font-mono text-xs text-muted-foreground space-y-1">
              <p className="text-primary">$ bb model info ./my-circuit.bbm</p>
              <p>name: JTM45 Plexi Input Stage v2.1</p>
              <p>author: @torbjorn_k</p>
              <p>graph: 147 nodes · 92,304 params</p>
              <p>targets: nn-drive, spectral-bloom, bb-studio</p>
              <p>trained on: 4.2h at 48kHz · verified</p>
              <p className="text-primary/60 pt-2">
                community rating: 4.8 / 5 (312 installs)
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Spice Lab
            </p>
            <h2 className="text-2xl font-bold tracking-tight">
              Train your own models.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Spice Lab is the Bird Brain circuit modeling environment. Draw a
              schematic, wire up training audio from your target device, and run
              the differentiable solver. When training converges, export a .bbm
              and deploy to any Bird Brain hardware or plugin.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The modeling workflow is designed for engineers and seriously
              curious musicians alike. You don't need a PhD in autodiff — you
              need a circuit you care about and a recording of it.
            </p>
            <Button
              render={<Link href="/products/plugins" />}
              variant="outline"
              className="font-mono"
            >
              Spice Lab (Pre-Order) →
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* SDK */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 space-y-2">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Developer SDK
          </p>
          <h2 className="text-3xl font-bold tracking-tight">
            Build on the
            <br />
            Bird Brain stack.
          </h2>
          <p className="text-muted-foreground max-w-lg leading-relaxed">
            The Bird Brain SDK exposes the full model layer: load weights,
            run inference, hook into the agent control API, and integrate with
            any audio host. Available in four languages.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {sdkHighlights.map((lang) => (
            <Card key={lang.label} className="bg-card border-border">
              <CardHeader className="pb-2">
                <Badge variant="outline" className="font-mono text-[10px] w-fit">
                  {lang.label}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {lang.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-card p-6 font-mono text-xs text-muted-foreground space-y-1 max-w-2xl">
          <p className="text-muted-foreground/50"># Python — load and run inference</p>
          <p>
            <span className="text-[var(--bb-blue)]">from</span>{" "}
            <span className="text-primary">birdbrain</span>{" "}
            <span className="text-[var(--bb-blue)]">import</span> Model, AudioBuffer
          </p>
          <p className="pt-1">
            model = Model.<span className="text-primary">load</span>(
            <span className="text-muted-foreground">&quot;./jtm45-plexi.bbm&quot;</span>)
          </p>
          <p>
            out = model.<span className="text-primary">process</span>(
            AudioBuffer.<span className="text-primary">from_file</span>(
            <span className="text-muted-foreground">&quot;dry.wav&quot;</span>))
          </p>
          <p>
            out.<span className="text-primary">export</span>(
            <span className="text-muted-foreground">&quot;wet.wav&quot;</span>)
          </p>
        </div>
      </section>

      <Separator />

      {/* Community links */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-2">
            Find Your People
          </p>
          <h2 className="text-2xl font-bold tracking-tight">
            Where the community lives
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {communityLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group block"
            >
              <Card className="h-full bg-card border-border transition-colors group-hover:border-primary/40">
                <CardHeader className="pb-2">
                  <h3 className="font-mono text-sm font-semibold tracking-wide group-hover:text-primary transition-colors">
                    {link.label} →
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Separator />

      {/* Early access CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="p-8 rounded-lg border border-primary/20 bg-primary/5 max-w-2xl space-y-4">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Beta Access
          </p>
          <h2 className="text-xl font-bold tracking-tight">
            Get early access to Spice Lab and Agent CV.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We&apos;re onboarding a small cohort of circuit modelers and Eurorack
            developers ahead of general availability. If you have a circuit you
            want to model or a use case for Agent CV, get in touch.
          </p>
          <Button
            render={<Link href="mailto:community@birdbrain.audio" />}
            className="font-mono"
          >
            Apply for Beta Access →
          </Button>
        </div>
      </section>
    </>
  );
}
