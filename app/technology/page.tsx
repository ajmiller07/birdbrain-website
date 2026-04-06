import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The neural DSP technology behind Bird Brain — spice modeling, DSP networking, and agent-driven control.",
};

// Hoisted static content
const sections = [
  {
    id: "spice",
    badge: "01 — Modeling",
    title: "Neural Spice Modeling",
    body: [
      "Classical circuit simulation (SPICE) treats components as equations to be solved at each time step. It is accurate, but expensive — unsuitable for real-time audio at 48 kHz.",
      "Bird Brain's approach turns the circuit into a training problem. We represent every component — resistors, capacitors, inductors, and active elements like triodes — as a node in a differentiable computational graph. Audio is fed through the graph, loss is computed against a reference recording, and gradients flow backward through the circuit to tune node parameters.",
      "The result is not a neural net that approximates a circuit from the outside. It is a circuit whose every parameter has been learned. Harmonic structure, transient response, and frequency-dependent saturation all emerge from the model's internal structure — not from hand-tuned transfer functions.",
    ],
  },
  {
    id: "network",
    badge: "02 — Architecture",
    title: "DSP Network Architecture",
    body: [
      "A single processing unit — whether a pedal, eurorack module, or plugin instance — runs one trained model. But individual models can be networked.",
      "The Neural Signal Bus (NSB-1) provides a high-bandwidth channel between modules. Instead of audio, the bus carries weight tensors and activation maps. A downstream module can condition its behavior on what an upstream module has already computed — without re-processing the audio itself.",
      "This architecture makes it possible to build composite processing chains that share latent representations. An overdrive module's learned harmonic structure can inform an EQ module's frequency shaping. A reverb module can read the dynamic envelope from a compressor. The network computes together.",
    ],
  },
  {
    id: "agent",
    badge: "03 — Control",
    title: "Agent-Driven Interface",
    body: [
      "Every Bird Brain device exposes a control API over USB-C or Wi-Fi. The API accepts natural language instructions, parameter diffs, or direct weight updates.",
      "Connect a Bird Brain device to a host agent (Claude, a local LLM, or a custom agent via the open SDK) and describe what you want: 'more mid-range grit', 'less fizz on the top end', 'closer to the sound on this reference clip'. The agent translates the instruction into a weight update and applies it live — no menus, no knob hunting.",
      "For musicians, this means dialing in a sound the way you describe music: in language. For engineers, it means the processing layer is a first-class API — automatable, scriptable, and integrable into any audio pipeline.",
    ],
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3">
          Technical Overview
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          How Bird Brain works.
        </h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Three interlocking systems: neural spice models that learn analog circuits,
          a DSP networking layer that lets modules share computation, and an agent
          control interface that makes every parameter addressable in natural language.
        </p>
      </section>

      <Separator />

      {/* Tech sections */}
      <div className="mx-auto max-w-6xl px-6 divide-y divide-border">
        {sections.map((section) => (
          <section key={section.id} className="py-20">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              <div className="space-y-3 md:sticky md:top-24">
                <Badge variant="outline" className="font-mono text-[10px]">
                  {section.badge}
                </Badge>
                <h2 className="text-2xl font-bold tracking-tight text-primary">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-5">
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <Separator />

      {/* Open Architecture callout */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="p-8 rounded-lg border border-primary/20 bg-primary/5 space-y-4 max-w-2xl">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Open Architecture
          </p>
          <h2 className="text-xl font-bold tracking-tight">
            The weight format is open.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Bird Brain model files (.bbm) are documented and open. Train your own
            models in Spice Lab, share them with the community, or load
            third-party weights onto any Bird Brain device. We believe the model
            layer should be as open as the audio format.
          </p>
        </div>
      </section>
    </>
  );
}
