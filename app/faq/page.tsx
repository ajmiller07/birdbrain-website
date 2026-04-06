import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about Bird Brain — neural DSP hardware, open weights, agent control, and compatibility.",
};

interface FaqEntry {
  q: string;
  a: string;
}

interface FaqGroup {
  id: string;
  label: string;
  entries: FaqEntry[];
}

const faqGroups: FaqGroup[] = [
  {
    id: "hardware",
    label: "Hardware & Pedals",
    entries: [
      {
        q: "Does neural DSP sound different from traditional digital modeling?",
        a: "In practice, yes — but the reason matters. Traditional modeling approximates a circuit's behavior from the outside, usually by fitting a network to audio recordings of a specific unit. Our approach trains on the circuit equations directly. The model learns the physics: the transconductance of a triode, the saturation knee of a transformer, the frequency-dependent nonlinearity of a capacitor. The result is a model that generalizes correctly to operating points, input levels, and signal conditions not present in the training data. You hear this as consistency — the behavior doesn't break down at the edges.",
      },
      {
        q: "What sample rates do Bird Brain pedals support?",
        a: "All current hardware runs at 48 kHz internally. The NN-Drive and Spectral Bloom accept input at any sample rate and convert internally. Latency Zero operates at 48 kHz with a 0.8ms round-trip; this is determined by the ASIC architecture and cannot be changed. Plugin equivalents (BB Studio) support any sample rate your DAW uses.",
      },
      {
        q: "Can I use Bird Brain pedals without connecting to an agent?",
        a: "Yes, completely. The agent control layer is optional. Every pedal has physical controls (knobs, switches, CV inputs) that work standalone. The USB-C and Wi-Fi agent ports are additive — they expose parameters to software control without removing hardware control. You never need a phone, computer, or running agent to use the hardware.",
      },
      {
        q: "Do the pedals work with standard 9V power supplies?",
        a: "Yes. All Bird Brain pedals are designed for standard 9V DC center-negative supplies at 300–500mA depending on the unit. Latency Zero draws 450mA due to the ASIC. A quality regulated supply (not switching supplies with high ripple) is recommended for lowest noise floor.",
      },
      {
        q: "What happens if I load a model that doesn't match my pedal's target?",
        a: "The device will reject models that don't match the inference profile for that hardware. Each .bbm file includes a target device field; if it doesn't match the connected device, the update will fail with a clear error message. We don't silently run mismatched models — inference behavior on wrong hardware is undefined.",
      },
    ],
  },
  {
    id: "eurorack",
    label: "Eurorack & Modular",
    entries: [
      {
        q: "Do I need the NSB-1 Weight Bus to use Bird Brain modules?",
        a: "No. Every Bird Brain eurorack module works standalone — audio in, audio out, CV in, standard Eurorack power. The NSB-1 Weight Bus adds inter-module neural communication: modules can share activation tensors and weight suggestions. It is useful if you want modules to condition their processing on what upstream modules have already computed, but it is not required for individual module operation.",
      },
      {
        q: "Are Bird Brain modules compatible with non-Bird-Brain modules?",
        a: "Fully compatible at the audio and CV level — standard Eurorack voltages, 3.5mm jacks, ±12V Eurorack power. The NSB-1 bus is a Bird Brain-specific protocol and only communicates between Bird Brain neural modules. Non-Bird-Brain modules connect to Bird Brain modules the same way any other Eurorack module would.",
      },
      {
        q: "What does Agent CV actually output — is it audio-rate CV?",
        a: "Agent CV outputs control-rate CV, not audio-rate. The 16-bit DAC updates at a rate appropriate for parameter control, not signal processing. It is designed for modulating filter cutoff, envelope parameters, oscillator pitch, and effect depth — the kind of musical parameters you'd otherwise automate in a DAW or control with a sequencer. Audio-rate modulation is handled by the audio processing modules themselves (like the Neuron VCF's CV inputs).",
      },
      {
        q: "Can the Neuron VCF self-oscillate?",
        a: "Yes. The Neuron VCF models include topologies (SVF, Moog-style) where resonance at maximum produces self-oscillation. Because the model learns the filter physics, self-oscillation behavior follows the character of each topology — not a generic digital resonance spike. The pitch tracking is musically usable.",
      },
    ],
  },
  {
    id: "plugins",
    label: "Plugins & Software",
    entries: [
      {
        q: "What DAWs does BB Studio support?",
        a: "BB Studio ships as VST3, AU, and AAX. This covers Ableton Live, Logic Pro, Pro Tools, Reaper, Cubase, Studio One, Bitwig, and any other DAW supporting these formats. There is no standalone application — BB Studio is a plugin only.",
      },
      {
        q: "Can I load hardware model files into BB Studio?",
        a: "Yes. The .bbm format is device-agnostic. A model trained on or loaded into an NN-Drive pedal can be opened directly in BB Studio and vice versa. The only constraint is the inference profile: if a model was trained for the Latency Zero ASIC profile, it will run in BB Studio but not on the NN-Drive hardware (different inference architecture). The plugin will display the model's target devices and flag mismatches.",
      },
      {
        q: "Does BB Studio use GPU acceleration?",
        a: "Yes, on macOS (Metal) and Windows (CUDA). The plugin detects available hardware at launch and selects the fastest available backend. On systems without a discrete GPU, inference runs on CPU — all current models are optimized to run at real-time on a modern CPU as a fallback. M1/M2/M3 Macs use the Neural Engine via Metal Performance Shaders.",
      },
      {
        q: "What is Spice Lab and how is it different from BB Studio?",
        a: "BB Studio is the performance plugin — you load models and process audio. Spice Lab is the training environment — you draw circuit schematics, attach training data, and export models. They are complementary: train in Spice Lab, perform in BB Studio. Spice Lab is a separate purchase, currently in pre-order.",
      },
    ],
  },
  {
    id: "open-weights",
    label: "Open Weights & Community",
    entries: [
      {
        q: "Can I share models I train in Spice Lab?",
        a: "Yes — that is the point. Models you train belong to you. You can keep them private, share them freely, publish them on the weight registry, or license them however you choose. The .bbm format is open and documented. Bird Brain does not claim ownership over models trained using our tools.",
      },
      {
        q: "What circuits can I model in Spice Lab?",
        a: "Any circuit you can describe as a schematic with known component values. Tube preamps, transformer saturation stages, solid-state clipping circuits, analog filters — if it can be represented as a network of resistors, capacitors, inductors, diodes, and active elements (triodes, BJTs, JFETs, op-amps), Spice Lab can model it. Complex digital circuits or circuits with programmable behavior are not supported — the system is designed for analog electronics.",
      },
      {
        q: "Do I need a Bird Brain device to use the weight registry?",
        a: "No. You can browse and download models from the registry without any hardware. You need a device or BB Studio to actually use the models. Publishing models requires a verified registry account; downloading is open.",
      },
      {
        q: "What is the difference between .bbm and ONNX or other model formats?",
        a: "ONNX is a general neural network interchange format designed for machine learning models trained on standard frameworks (PyTorch, TensorFlow). The .bbm format is specific to differentiable circuit models — it encodes the circuit graph topology, physical parameter semantics, training metadata, and hardware inference profiles. You cannot convert a generic ONNX model to .bbm; the formats solve different problems. You can export .bbm models to ONNX-compatible representations for use in other inference runtimes, but that strips the circuit-specific metadata.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3">
          FAQ
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Common questions.
        </h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Answers to the questions we hear most from musicians, engineers, and
          modular synthesizer users. If something is missing, the community
          forum is the right place to ask.
        </p>
      </section>

      <Separator />

      {/* FAQ groups */}
      <div className="mx-auto max-w-6xl px-6 divide-y divide-border">
        {faqGroups.map((group) => (
          <section key={group.id} id={group.id} className="py-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
              {/* Sticky group label */}
              <div className="md:sticky md:top-24">
                <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-2">
                  {group.label}
                </p>
              </div>

              {/* Q&A list */}
              <dl className="space-y-8">
                {group.entries.map((entry) => (
                  <div key={entry.q} className="space-y-3">
                    <dt className="font-mono text-sm font-semibold tracking-wide">
                      {entry.q}
                    </dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed">
                      {entry.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        ))}
      </div>

      <Separator />

      {/* Contact CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Still have questions?
            </p>
            <h2 className="text-2xl font-bold tracking-tight">
              The community forum
              <br />
              has the rest.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Technical questions about circuit modeling, SDK integration, and
              hardware compatibility are best answered by people who are
              actively building with the platform.
            </p>
            <Button
              render={<Link href="/community" />}
              variant="outline"
              className="font-mono"
            >
              Go to Community →
            </Button>
          </div>

          <div className="space-y-4">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Press &amp; media
            </p>
            <h2 className="text-2xl font-bold tracking-tight">
              Technical briefings
              <br />
              for journalists.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Detailed technical background on the neural spice modeling
              architecture, circuit differentiation methodology, and product
              roadmap is available to press on request.
            </p>
            <Button
              render={<Link href="/press" />}
              variant="outline"
              className="font-mono"
            >
              Press Resources →
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      <section className="mx-auto max-w-6xl px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Get early access
          </p>
          <p className="text-base font-semibold tracking-tight">
            Ready to order? Join the launch list for pre-order access and pricing.
          </p>
        </div>
        <Button render={<Link href="/#early-access" />} className="font-mono tracking-wide shrink-0">
          Join the Launch List →
        </Button>
      </section>
    </>
  );
}
