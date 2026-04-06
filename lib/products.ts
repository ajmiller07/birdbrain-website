export type ProductCategory = "pedals" | "eurorack" | "plugins";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  specs: string[];
  status: "available" | "preorder" | "coming-soon";
}

export const products: Product[] = [
  // Guitar Pedals
  {
    id: "nn-drive",
    name: "NN-Drive",
    category: "pedals",
    tagline: "Neural overdrive. Trained on twelve tube amplifiers.",
    description:
      "The NN-Drive runs a lightweight recurrent neural network at 48 kHz, capturing the dynamic response of twelve classic tube amplifier preamp stages. Dial in from clean boost to full saturation. CV input modulates gain weight in real time.",
    specs: [
      "Neural inference at 48 kHz / 32-bit float",
      "12 embedded amp models (switchable)",
      "CV input: gain weight modulation (0–5V)",
      "True bypass / relay switching",
      "USB-C for model updates + agent control",
      "Compact 125B enclosure",
    ],
    status: "available",
  },
  {
    id: "spectral-bloom",
    name: "Spectral Bloom",
    category: "pedals",
    tagline: "Harmonic exciter via neural spice modeling.",
    description:
      "Spectral Bloom uses a differentiable spice model of transformer saturation to add even and odd harmonics with surgical precision. Unlike tape emulations, the harmonics track dynamically — louder notes bloom harder.",
    specs: [
      "Differentiable transformer spice model",
      "Independent even / odd harmonic controls",
      "Frequency-selective saturation (LF / HF)",
      "Expression pedal input",
      "Stereo I/O",
    ],
    status: "available",
  },
  {
    id: "latency-zero",
    name: "Latency Zero",
    category: "pedals",
    tagline: "Neural reverb at 0.8ms round-trip latency.",
    description:
      "A lightweight attention-based reverb running on a custom ASIC. No early reflections shortcuts — full impulse response convolution is synthesized by the network, not pre-loaded. Space changes with input dynamics.",
    specs: [
      "0.8ms round-trip latency (true zero-phase)",
      "Custom ASIC — no DSP board",
      "Dynamic IR synthesis (attention-based)",
      "12 space presets + open weight slot",
      "MIDI I/O",
    ],
    status: "preorder",
  },

  // Eurorack Modules
  {
    id: "neuron-vcf",
    name: "Neuron VCF",
    category: "eurorack",
    tagline: "Voltage-controlled neural filter — 3U, 14HP.",
    description:
      "Neuron VCF embeds a neural filter network that has learned the frequency-domain behavior of twelve classic analog filter topologies. CV inputs control cutoff, resonance, and topology blend — all learned by the model, not hardcoded.",
    specs: [
      "12 filter topologies (Moog, SVF, Sallen-Key, and more)",
      "CV: cutoff, resonance, topology blend",
      "14HP, 3U Eurorack",
      "52mm depth",
      "Neural bus connector (NSB-1)",
    ],
    status: "available",
  },
  {
    id: "weight-bus",
    name: "Weight Bus (NSB-1)",
    category: "eurorack",
    tagline: "Distribute neural weight tensors across your rack.",
    description:
      "The NSB-1 is the backbone of a Bird Brain Eurorack system. It connects up to eight neural modules and coordinates weight sharing, model updates, and agent communication over a daisy-chained bus.",
    specs: [
      "Up to 8 neural modules per bus",
      "1Gbps inter-module bandwidth",
      "USB host port for agent connection",
      "4HP, 3U",
      "Hot-swap capable",
    ],
    status: "available",
  },
  {
    id: "agent-cv",
    name: "Agent CV",
    category: "eurorack",
    tagline: "Language-to-CV via embedded agent interface.",
    description:
      "Receive parameter suggestions from a connected agent as CV voltage. Describe a patch state or target sound — Agent CV translates the agent's weight recommendations into eight channels of precision CV output.",
    specs: [
      "8× CV output, 16-bit DAC",
      "±5V or 0–10V (configurable per channel)",
      "USB-C agent input",
      "Wi-Fi / BLE for remote agent connection",
      "12HP, 3U",
    ],
    status: "coming-soon",
  },

  // Plugins
  {
    id: "bb-studio",
    name: "BB Studio",
    category: "plugins",
    tagline: "Full neural DSP suite — VST3, AU, AAX.",
    description:
      "BB Studio bundles all current Bird Brain neural models in a single plugin interface. Load hardware model weights directly, create hybrid patches, and automate every parameter with standard DAW automation or the agent control layer.",
    specs: [
      "All current hardware models included",
      "Open weight format — load community models",
      "VST3 / AU / AAX",
      "macOS 13+, Windows 10+",
      "Agent API over WebSocket (local or remote)",
      "M1/M2/M3 native + CUDA acceleration",
    ],
    status: "available",
  },
  {
    id: "spice-lab",
    name: "Spice Lab",
    category: "plugins",
    tagline: "Train your own analog circuit models.",
    description:
      "Spice Lab provides a visual interface for building differentiable spice models of analog circuits. Draw a schematic, attach training audio, and export a model file compatible with any Bird Brain device or BB Studio.",
    specs: [
      "Visual schematic editor",
      "Automatic differentiation backend",
      "GPU-accelerated training (CUDA / Metal)",
      "Export to .bbm (Bird Brain Model) format",
      "Community model registry integration",
    ],
    status: "preorder",
  },
];

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export const categoryMeta: Record<
  ProductCategory,
  { label: string; description: string; badge: string }
> = {
  pedals: {
    label: "Guitar Pedals",
    badge: "Hardware",
    description:
      "Compact neural processors in a rugged pedal format. Real-time weight inference at audio rates.",
  },
  eurorack: {
    label: "Eurorack Modules",
    badge: "Modular",
    description:
      "Neural DSP nodes for your modular system. CV-addressable, networked, and agent-ready.",
  },
  plugins: {
    label: "Audio Plugins",
    badge: "Software",
    description:
      "VST3 / AU / AAX plugins that expose the full Bird Brain neural architecture to your DAW.",
  },
};

export const statusLabel: Record<Product["status"], string> = {
  available: "Available",
  preorder: "Pre-Order",
  "coming-soon": "Coming Soon",
};
