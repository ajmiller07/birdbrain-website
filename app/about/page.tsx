import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Bird Brain — built for musicians who take tone seriously.",
};

const values = [
  {
    title: "Precision without compromise",
    body: "We don't approximate tone by ear. We compute it from first principles — differentiating through circuit equations, not guessing at transfer functions.",
  },
  {
    title: "Open weight architecture",
    body: "Every model we ship comes with a documented weight format. Train your own. Share them. Load third-party weights. The model layer belongs to the community.",
  },
  {
    title: "Language as interface",
    body: "An agent control layer is not a gimmick — it is the right interface for describing sound. We build everything to be addressable in natural language from day one.",
  },
  {
    title: "Hardware and software as one",
    body: "A weight trained on the plugin deploys to the pedal. A CV patch from the eurorack system maps directly to plugin automation. One architecture, everywhere.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3">
          About
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          We make tools for people who care too much about tone.
        </h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          That is not an insult. The best engineers, producers, and musicians we know
          are the ones who can hear the difference — and refuse to settle.
        </p>
      </section>

      <Separator />

      {/* Story */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="md:sticky md:top-24">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-2">
              Origin
            </p>
            <h2 className="text-2xl font-bold tracking-tight">The Story</h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Bird Brain started as a research project: could you train a neural network
              directly on the equations that describe an analog circuit, rather than on
              audio alone? The hypothesis was that a model built this way would generalize
              better — capturing not just the sound of a specific device, but the
              underlying physics that produces that sound at any operating point.
            </p>
            <p>
              The answer turned out to be yes — with caveats. Differentiating through a
              full SPICE simulation is computationally brutal. We spent two years developing
              a graph representation that is both physically faithful and differentiable
              at training time, while remaining fast enough to run at audio rates on
              embedded hardware.
            </p>
            <p>
              The first product, the NN-Drive pedal, was the proof of concept. It ran
              a model trained on twelve tube amplifier circuits on a custom DSP board
              small enough to fit in a standard 125B enclosure. The response from early
              testers was consistent: it didn&apos;t sound like a digital pedal. It sounded
              like the amplifier.
            </p>
            <p>
              Everything since has followed from that first result — expanding the
              architecture to eurorack, building the plugin suite, and adding the agent
              control layer so that the underlying model is not just accurate, but
              directly addressable.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-2">
            Principles
          </p>
          <h2 className="text-2xl font-bold tracking-tight">What we believe</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 rounded-lg border border-border bg-card space-y-3"
            >
              <h3 className="font-mono text-sm font-semibold tracking-wide">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
