import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press resources for Bird Brain — boilerplate, product facts, founding story, and media contact.",
};

const productFacts = [
  {
    category: "Guitar Pedals",
    badge: "Hardware",
    items: [
      "NN-Drive — neural overdrive, 12 tube amp models, 48 kHz / 32-bit float inference, available now",
      "Spectral Bloom — transformer spice model harmonic exciter, stereo I/O, available now",
      "Latency Zero — attention-based neural reverb, 0.8ms round-trip, custom ASIC, pre-order",
    ],
  },
  {
    category: "Eurorack Modules",
    badge: "Modular",
    items: [
      "Neuron VCF — neural filter with 12 learned topologies (Moog, SVF, Sallen-Key), 14HP, available now",
      "Weight Bus (NSB-1) — inter-module neural weight bus, up to 8 modules, 1Gbps, available now",
      "Agent CV — language-to-CV via embedded agent interface, 8× 16-bit outputs, coming soon",
    ],
  },
  {
    category: "Audio Plugins",
    badge: "Software",
    items: [
      "BB Studio — full neural DSP suite, VST3 / AU / AAX, open weight format, macOS + Windows, available now",
      "Spice Lab — visual circuit modeling environment, GPU-accelerated, .bbm export, pre-order",
    ],
  },
];

const keyFacts = [
  "Founded as a research project: training neural networks on circuit equations, not audio alone",
  "Core technology: differentiable spice modeling — circuits represented as trainable computational graphs",
  "Open weight format (.bbm) — documented, versioned, cross-device compatible",
  "Agent control layer — every parameter addressable via natural language over USB-C or Wi-Fi",
  "Hardware and software share weight formats — a patch trained on the plugin deploys to the pedal",
  "Neural Signal Bus (NSB-1) enables distributed DSP networking across eurorack modules",
];

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3">
          Press & Media
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Press resources.
        </h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Boilerplate copy, product facts, founding story, and media contact for
          journalists, analysts, and content creators covering Bird Brain.
        </p>
      </section>

      <Separator />

      {/* Company boilerplate */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="md:sticky md:top-24">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-2">
              Boilerplate
            </p>
            <h2 className="text-2xl font-bold tracking-tight">
              About Bird Brain
            </h2>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Approved for use in press coverage without modification.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-border bg-card space-y-4">
              <p className="text-sm leading-relaxed">
                Bird Brain is an audio hardware and software company building
                guitar pedals, eurorack modules, and DAW plugins powered by
                neural net DSP. Its core technology — differentiable spice
                modeling — trains neural networks directly on the equations that
                describe analog circuits, rather than on audio recordings of
                them. The result is DSP that captures the harmonic structure,
                transient response, and frequency-dependent saturation of tube
                amplifiers, transformers, and analog filters from first
                principles.
              </p>
              <p className="text-sm leading-relaxed">
                All Bird Brain products ship with an open weight format (.bbm),
                allowing users to train custom circuit models in Spice Lab,
                share them with the community, and load them onto any Bird Brain
                device or plugin. An embedded agent control layer exposes every
                parameter to natural language instructions over USB-C or Wi-Fi.
              </p>
              <Button
                variant="outline"
                className="font-mono text-xs"
                render={
                  <a
                    href="/birdbrain-boilerplate.txt"
                    download="birdbrain-boilerplate.txt"
                  />
                }
              >
                Download boilerplate (.txt)
              </Button>
            </div>

            {/* Short version */}
            <div className="p-6 rounded-lg border border-border bg-card space-y-3">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                Short version (one sentence)
              </p>
              <p className="text-sm leading-relaxed">
                Bird Brain makes neural DSP audio hardware and plugins that
                model analog circuits by differentiating through their equations
                — not by ear.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Key facts */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-2">
            Key Facts
          </p>
          <h2 className="text-2xl font-bold tracking-tight">
            What to know about Bird Brain
          </h2>
        </div>

        <ul className="space-y-3 max-w-3xl">
          {keyFacts.map((fact) => (
            <li
              key={fact}
              className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card"
            >
              <span className="text-primary font-mono text-xs mt-0.5 shrink-0">
                →
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {fact}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <Separator />

      {/* Products at a glance */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-2">
            Product Lines
          </p>
          <h2 className="text-2xl font-bold tracking-tight">
            Current lineup
          </h2>
        </div>

        <div className="space-y-8">
          {productFacts.map((line) => (
            <div key={line.category}>
              <div className="flex items-center gap-3 mb-4">
                <p className="font-mono text-sm font-semibold tracking-wide">
                  {line.category}
                </p>
                <Badge variant="outline" className="font-mono text-[10px]">
                  {line.badge}
                </Badge>
              </div>
              <ul className="space-y-2">
                {line.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground font-mono flex items-start gap-2"
                  >
                    <span className="text-primary shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Founding story — condensed */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="md:sticky md:top-24">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-2">
              Background
            </p>
            <h2 className="text-2xl font-bold tracking-tight">
              Founding story
            </h2>
          </div>

          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Bird Brain began as a research question: could a neural network
              trained directly on the differential equations of an analog
              circuit generalize better than one trained on audio alone? The
              hypothesis — that a model built from physics would capture the
              underlying behavior of a device at any operating point, not just
              the sound of a particular recording — turned out to be correct,
              with significant engineering constraints.
            </p>
            <p>
              Differentiating through a full SPICE simulation is computationally
              prohibitive at real-time audio rates. The core technical
              contribution was developing a graph representation of analog
              circuits that remains both physically faithful and differentiable
              at training time, while running efficiently enough on embedded
              hardware for per-sample inference at 48 kHz.
            </p>
            <p>
              The first product, the NN-Drive pedal, ran a model trained on
              twelve tube amplifier circuits on a custom DSP board in a standard
              125B enclosure. Early testers consistently reported that it did
              not sound like a digital pedal — it sounded like the amplifier.
              That result defined the subsequent product direction: expand the
              architecture to eurorack, build the plugin layer, and add the
              agent control interface so the model is not just accurate but
              directly addressable.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Media contact */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-5">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Media Contact
            </p>
            <h2 className="text-2xl font-bold tracking-tight">
              Get in touch.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              For review units, interview requests, press images, technical
              briefings, or background on the neural spice modeling technology,
              contact the Bird Brain press team directly.
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-lg border border-border bg-card space-y-1">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Press inquiries
                </p>
                <p className="font-mono text-sm text-primary">
                  press@birdbrain.audio
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card space-y-1">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Response time
                </p>
                <p className="text-sm text-muted-foreground">
                  Within 1 business day for review unit requests and briefings.
                </p>
              </div>
            </div>
            <Button
              render={<Link href="mailto:press@birdbrain.audio" />}
              className="font-mono"
            >
              Email Press Team →
            </Button>
          </div>

          <div className="space-y-5">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Brand Assets
            </p>
            <h2 className="text-2xl font-bold tracking-tight">
              Logos and imagery.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Brand assets — including logo lockups, product photography, and
              the Bird Brain design system guidelines — are available to press
              on request. Please do not modify the wordmark or use unofficial
              color variants.
            </p>
            <div className="p-4 rounded-lg border border-primary/20 bg-primary/5 space-y-2">
              <p className="font-mono text-xs text-primary uppercase tracking-wider">
                Brand colors
              </p>
              <div className="flex items-center gap-4 pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-[var(--bb-amber)]" />
                  <span className="font-mono text-xs text-muted-foreground">
                    Amber — primary
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-[var(--bb-blue)]" />
                  <span className="font-mono text-xs text-muted-foreground">
                    Neural Blue
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-[oklch(0.08_0_0)] border border-border" />
                  <span className="font-mono text-xs text-muted-foreground">
                    Near Black
                  </span>
                </div>
              </div>
            </div>
            <Button
              render={<Link href="mailto:press@birdbrain.audio?subject=Brand%20Assets%20Request" />}
              variant="outline"
              className="font-mono"
            >
              Request Brand Assets →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
