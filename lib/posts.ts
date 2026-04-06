export interface Post {
  slug: string;
  title: string;
  date: string;
  category: "technical" | "product" | "community";
  tagline: string;
  readingTime: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: "bbm-format-specification",
    title: "Inside the .bbm Format: How Bird Brain Model Files Work",
    date: "2026-04-06",
    category: "technical",
    tagline: "A walkthrough of the four sections inside every .bbm file — circuit graph, parameter semantics, inference profiles, and training metadata — and why we designed it the way we did.",
    readingTime: "7 min",
    body: [
      "Every Bird Brain device and plugin shares one file format: .bbm. A model trained in Spice Lab exports to .bbm. The NN-Drive pedal flashes .bbm files over USB-C. The community weight registry hosts .bbm files. BB Studio loads them. The format is the connective tissue between all of it, and this post explains what is actually inside one.",
      "The most common question we get from developers is: why not ONNX? ONNX is a general neural network interchange format. It describes the graph of tensor operations that make up a model — matrix multiplications, activations, normalizations — in a way that is portable across inference runtimes. It does not describe circuits. A .bbm file does not contain matrix multiplications in the abstract. It contains a resistor with a resistance parameter, a diode with a knee voltage and forward drop, a triode with transconductance and plate resistance. These are not arbitrary weights; they are physical parameters with units and physical meanings. You cannot express those semantics in ONNX without losing the thing that makes the model useful.",
      "A .bbm file has four sections. The header comes first and contains format version, a UUID for the model, a human-readable name, a list of target devices, and a SHA-256 hash of the payload for integrity verification. The target device list is what the device checks on load: if the loaded device is not in the list, the firmware rejects the model with an explicit error. We do not silently run mismatched models. Inference behavior on wrong hardware is undefined, and undefined behavior on audio hardware is noise.",
      "The second section is the circuit graph. The graph is a directed acyclic representation of the schematic, stored as a node list and an adjacency list. Each node is typed — resistor, capacitor, inductor, diode, BJT, JFET, triode, op-amp — and carries the learned parameter tensor for that component. Edges carry signal flow direction and parameter coupling information. The graph topology is fixed at export time; you cannot change the circuit structure by editing a .bbm file, only the learned parameter values. If you want a different topology, you train a new model.",
      "The third section is the inference profile. An inference profile specifies the compute requirements for running the model: the sample rate the model was trained at, the block size it expects, the precision (float32 or bfloat16), and the hardware-specific execution flags needed for the target device. The Latency Zero ASIC profile, for example, specifies that models must be trained at 48 kHz, must fit in the attention head memory budget of the ASIC, and must not use certain node types the chip's fixed logic cannot express. When you run bb model validate --target latency-zero ./model.bbm before flashing, the validator checks the profile requirements and tells you specifically what, if anything, the model does not satisfy.",
      "The fourth section is training metadata: the Spice Lab version used to train, the training dataset description (a free-text field, typically a description of the reference hardware), the loss curve summary, and an optional provenance block if the model was derived from another .bbm. This metadata is not used during inference — the firmware strips it before loading into embedded memory to save space — but it is preserved in the file for registry display, auditing, and scientific reproducibility. When you look at a registry entry and see the training notes from the person who modeled a specific piece of hardware, that is this section.",
      "The full format specification is published on the Bird Brain GitHub repository as a versioned Markdown document with an accompanying JSON Schema for the header and metadata sections. The circuit graph and inference profile use a binary encoding; the reference decoder is published in C and Python. If you are building a loader, a converter, or an alternative training pipeline that exports .bbm, the spec and the reference implementation are the starting point. Version 1.0 is what ships with the current hardware. We do not plan breaking changes — future extensions will be additive.",
      "One design decision worth explaining: we chose to make the circuit graph section human-inspectable via the bb CLI (bb model info, bb model graph) rather than purely binary. You can pipe the graph output and see the node list, the parameter values, and the signal paths. For a format that is supposed to be open and owned by the people who trained the models, it felt wrong to make it opaque. The binary payload is there for size efficiency in embedded loading; the CLI tools make the human-readable representation available without a separate export step.",
    ],
  },
  {
    slug: "agent-cv-introducing",
    title: "Introducing Agent CV: Natural Language as a Modular Control Source",
    date: "2026-04-06",
    category: "product",
    tagline: "Agent CV converts natural language instructions into eight channels of precision CV. Here is what that means for how you compose with a modular system.",
    readingTime: "5 min",
    body: [
      "Agent CV is a eurorack module that translates natural language instructions into eight channels of precision control voltage. Connect it to a host agent over USB-C or Wi-Fi, describe what you want your patch to do, and Agent CV outputs the CV values needed to get there — 16-bit resolution, ±5V or 0–10V per channel, configurable independently.",
      "The straightforward use case is parameter control: 'increase the filter cutoff on the Neuron VCF', 'reduce the reverb send', 'push the oscillator into the next harmonic range'. Each instruction translates to one or more CV movements across the eight outputs. This is not a macro recorder or a preset system — the agent understands the instruction in context and generates CV values that reflect the semantic meaning of what you asked for.",
      "The less obvious use case is generative composition. Describe a process — 'slowly drift the patch toward dissonance over the next four bars', 'introduce rhythmic variation in the CV envelope every sixteen steps', 'respond to the amplitude of the input signal by opening the filter' — and the agent maintains that behavioral state across outputs. The CV channels become a real-time expression of an ongoing instruction, not a snapshot of a single command.",
      "This is different from automation in a DAW. DAW automation is a recording of specific parameter values at specific times. Agent CV outputs are computed from intent. The agent interprets what you described — accounting for the current state of the patch, the signal the module receives via the audio input, and the constraints you have set — and produces CV values that express that intent at each moment. The same instruction will behave differently in different patch contexts, because the behavior is semantic, not positional.",
      "The eight outputs are designed to address a typical patch: two or three melodic or harmonic parameters (pitch transposition, chord voicing, interval width), two or three timbral parameters (filter cutoff, resonance, waveshaper drive), and one or two macro parameters (overall dynamics, effects depth). The specific assignment is yours to configure. The module makes no assumptions about what the outputs control — it just outputs CV on each channel according to the agent's inference.",
      "Agent CV ships with the open Bird Brain SDK agent interface. Any compatible agent — Claude, a local LLM via the SDK, or a custom agent you build — can drive it. The module is also compatible with the NSB-1 Weight Bus, allowing it to communicate weight suggestions to other Bird Brain modules in the same rack. We are shipping a reference agent configuration as part of the SDK documentation. Agent CV is currently listed as coming soon. Get on the early access list via the community page.",
    ],
  },
  {
    slug: "latency-zero-preorder",
    title: "Latency Zero Is Available to Pre-Order",
    date: "2026-04-06",
    category: "product",
    tagline: "A sub-millisecond neural reverb built on custom silicon. What it is, how we built it, and why the latency number matters more than it sounds.",
    readingTime: "6 min",
    body: [
      "Latency Zero is now available to pre-order. This post explains what it is, what we had to build to make it work, and why — if you play live — the latency specification is the thing you should actually care about.",
      "Reverberation is acoustic space. When sound leaves a guitar string and reflects off a room, the first reflections reach your ears in under 10 milliseconds. The diffuse tail builds over hundreds of milliseconds. Your auditory system uses those early arrival times to locate yourself inside a space. If a reverb device introduces latency above roughly 1 millisecond, the psychoacoustic cue is wrong — the effect processes your sound before it has time to exist spatially. It doesn't sound like a room. It sounds like a plug-in.",
      "This is the problem that Latency Zero was designed to solve. The specification — 0.8ms round-trip latency — is not a marketing number. It is the threshold below which the reverb behaves as acoustic space rather than signal processing. At 0.8ms, the effect arrives at your ears before the brain has resolved it as separate from the source. The guitar and the room fuse. That is what we were after.",
      "Getting there required building custom silicon. A conventional DSP board running a full attention-based reverb model — the kind that synthesizes a space dynamically rather than replaying a stored impulse response — cannot hit 0.8ms. The computation required exceeds what off-the-shelf embedded processors can deliver at that latency budget while running on standard 9V pedal power. We looked at FPGAs, neural inference accelerators, and GPU-assisted approaches. None of them satisfied all four constraints simultaneously: the latency target, the compute requirement, the power budget, and the enclosure size.",
      "The Latency Zero ASIC implements the attention architecture in dedicated logic. The attention heads, the weight memory, and the synthesis stage are all hardwired. This trades flexibility for efficiency in a way that only makes sense when you know exactly what you are building. The chip runs one thing extremely well. What it sounds like — the reverb character, the space, the decay — is determined by the loaded model weights, which can be updated over USB-C. When we train better models, users flash the weights. The silicon stays the same.",
      "The inference profile for the Latency Zero ASIC is being published as part of the .bbm specification. Any model trained to conform to the profile will run on the chip. We expect community-trained reverb models to be available on the weight registry shortly after units ship. A reverb that sounds like a specific studio, a specific room, a specific physical space — trained on recordings of that space, running at sub-millisecond latency in a pedal — is the use case we designed the hardware to enable.",
      "Latency Zero ships Q3 2026. Pre-orders are open now. Units will be allocated in pre-order order. If you play live and you have wanted a reverb that does not feel digital, this is what we built.",
    ],
  },
  {
    slug: "differentiating-through-circuits",
    title: "Differentiating Through Circuits",
    date: "2026-03-18",
    category: "technical",
    tagline: "How we train neural networks on analog circuit equations — not audio recordings.",
    readingTime: "8 min",
    body: [
      "The standard approach to analog circuit modeling in DSP is empirical: record a device, then train a network to approximate the recording. It works. The problem is that what the network learns is a highly specific function — the response of one unit, at one temperature, with one set of tubes, through one interface. Generalization to different operating points, different hardware revisions, or different signal levels is not guaranteed. You are fitting audio, not physics.",
      "Bird Brain's approach starts from the equations that describe the circuit, not from audio recordings of it. We represent every component — resistors, capacitors, inductors, diodes, triodes — as a differentiable node in a computational graph. The graph topology mirrors the schematic. Current flows through the graph the same way it flows through the circuit.",
      "Training works like any other neural network: audio is fed through the graph, a loss is computed against a reference measurement, and gradients flow backward through the network to update node parameters. The difference is that the 'weights' being learned correspond to physical parameters — the transconductance of a triode, the knee voltage of a diode, the parasitic capacitance of a transformer winding. The model learns the physics, not the sound.",
      "This matters for generalization. A model trained on circuit equations captures the behavior of the device at any operating point — not just the specific conditions of the training recording. Drive the model into heavy saturation and the harmonic structure still follows the physical laws of tube clipping. Back off the input and the clean headroom behaves like the real circuit. You don't get these properties from a black-box audio fitting.",
      "The engineering challenge is that differentiating through a full SPICE simulation is computationally prohibitive at real-time audio rates. We spent two years developing a graph representation that maintains physical fidelity while remaining differentiable and fast enough for per-sample inference at 48 kHz. The key insight was that many circuit elements can be approximated by low-rank tensor decompositions without sacrificing the qualitative behavior that gives analog circuits their character.",
      "The result is the .bbm format — a portable container for a differentiable circuit model. The file stores the computation graph, the learned parameters, training metadata, and an optional inference profile for embedded targets. Load it on the NN-Drive pedal, BB Studio, or the Neuron VCF module. The same physics runs everywhere.",
    ],
  },
  {
    slug: "opening-the-weight-format",
    title: "Why We Opened the Weight Format",
    date: "2026-02-27",
    category: "community",
    tagline: "On model portability, community ownership, and why proprietary formats fail musicians.",
    readingTime: "5 min",
    body: [
      "When we started designing the .bbm format, we had a choice: keep it proprietary and maintain platform control, or document it fully and let anyone build on it. The decision took about ten minutes.",
      "The history of audio hardware is full of proprietary model formats that died with the company. IRs that only load in specific software. Preset formats that need a dongle. Plugin licenses tied to a machine ID. Every one of these was a reasonable business decision at the time. Every one of them eventually stranded someone's workflow.",
      "We model circuits. A circuit model trained on the equations of a 12AX7 triode is not a trade secret — it is applied physics. The equations are in every electronics textbook. What we bring is the training infrastructure, the embedded runtime, and the schematic representations. Those are our competitive assets. The resulting weight file — the learned parameters of a circuit — belongs to the musician who trained it.",
      "The practical consequence of keeping weights open is that the ecosystem compounds. A circuit modeler in Germany trains a faithful model of a rare vintage preamp and publishes it to the registry. A musician in Tokyo loads it onto their NN-Drive. Another engineer uses it as a starting point for a variant model. None of that happens in a closed format.",
      "Open weights also create an incentive alignment we think is important: we have to keep making better hardware and better software, because the models themselves can move. If someone builds a device that runs .bbm better than we do, users can migrate. That keeps us honest. We believe the pressure to compete on merit — not on lock-in — produces better products.",
      "The .bbm spec is versioned, backward-compatible, and fully documented in the Bird Brain GitHub repository. We welcome implementations. Build a loader, a converter, a training pipeline, a hardware target. If you need help, the community forum and Discord are the right places to start.",
    ],
  },
  {
    slug: "weight-registry-launch",
    title: "The Weight Registry Is Open",
    date: "2026-04-02",
    category: "community",
    tagline: "Anyone can now publish, browse, and install community-trained circuit models. Here is what that means in practice.",
    readingTime: "4 min",
    body: [
      "Today we are opening the Bird Brain Weight Registry to the public. If you have trained a circuit model in Spice Lab — or written a loader for the .bbm format — you can publish it now. If you are a musician looking for a faithful model of a specific preamp, transformer, or filter topology, you can browse what the community has already built and install it directly to any Bird Brain device or BB Studio.",
      "The registry is not a curated marketplace. We do not approve models before they appear. Anyone with a verified account can publish, and any published model can receive ratings and installs. The community determines what rises to the top. We provide the infrastructure, the format spec, and the tooling — but the models belong to the people who trained them.",
      "In the first week of beta access, thirty-seven models were published. The most-installed is a model of the preamp stage of a 1963 Fender Vibroverb, trained on a unit owned by a session guitarist in Nashville who spent two weeks capturing it at every operating point. The second most-installed is a Neve 1073 input transformer model built from a combination of schematic equations and measurement data contributed by five separate users. Neither of those models would exist without community effort, and neither would be available on any closed platform.",
      "We want to be direct about what the registry is for: it is for people who care more about the specific behavior of a specific circuit than about the name on the front panel. The goal is not to replace hardware. It is to make the knowledge encoded in rare, expensive, or irreplaceable hardware portable and shareable.",
      "If you have a circuit you care about — one that shapes your sound in a way you have never been able to replicate elsewhere — we want you to model it. The Spice Lab beta is open to registry members. The tooling is not finished, but it works. We would rather have imperfect models in the registry than a polished tool that ships after the circuits it is trying to capture have been lost.",
      "Find the registry at the community link in the nav. The format specification and reference implementation are on GitHub. If you run into problems, the forum and Discord are where we track issues and ship fixes. We are building this in the open, and we are glad you are here.",
    ],
  },
  {
    slug: "latency-zero-asic",
    title: "0.8ms: Designing the Latency Zero ASIC",
    date: "2026-01-14",
    category: "product",
    tagline: "Why a custom silicon die was the only path to sub-millisecond neural reverb.",
    readingTime: "7 min",
    body: [
      "The requirement that drove the Latency Zero ASIC design was simple to state and extremely hard to meet: a neural reverb with a round-trip latency under 1 millisecond. For reference, the speed of sound travels roughly 34 centimeters in 1ms. That is the distance from a guitar string to the player's ear. Anything above that threshold is perceptible as a discrete echo, not reverberation. Sub-millisecond reverb is not a marketing specification — it is the threshold below which the effect behaves as acoustic space rather than signal processing.",
      "A conventional DSP board cannot meet this threshold for a neural reverb. The computation required for a full attention-based reverb model — the kind that synthesizes a space dynamically rather than loading a pre-baked impulse response — exceeds what off-the-shelf embedded DSPs can deliver at the required latency budget. We looked hard at GPU inference, FPGAs, and existing neural inference accelerators. None of them hit the target within our power and form factor constraints for a 9V pedal.",
      "The decision to design custom silicon came from the constraint analysis. We needed a chip that could run a specific attention-based model at 48 kHz with less than 800 microseconds of algorithmic delay, fit in a 125B enclosure, and run on standard pedal power. No existing chip met all four constraints simultaneously.",
      "The ASIC implements a fixed neural architecture in dedicated logic: the attention heads, the weight memory, and the output synthesis stage are all hardwired. This trades flexibility for efficiency. The architecture cannot be updated post-manufacture — but the trained weights loaded into it can be. The chip runs any .bbm model that conforms to the Latency Zero inference profile. When we train better reverb models, users flash the weights, not the silicon.",
      "Designing around fixed-weight updatability was the key architectural decision. The silicon runs one thing extremely well; the model parameters that determine what it sounds like are the updatable component. This mirrors the broader Bird Brain design philosophy: the physics compute layer is stable, the learned layer evolves.",
      "We are making the Latency Zero inference profile public as part of the .bbm specification. Third-party models that conform to the profile will run on the ASIC. We expect this to become a development target for the circuit modeling community. A reverb that sounds like a specific studio space, trained on recordings of that space, running at sub-millisecond latency on pedal hardware — that is the kind of use case we designed the chip to enable.",
    ],
  },
];

export const categoryLabel: Record<Post["category"], string> = {
  technical: "Technical",
  product: "Product",
  community: "Community",
};

// Sorted newest-first — use this everywhere posts are displayed.
// Computing once at module level avoids re-sorting on every render/page build.
export const sortedPosts: Post[] = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
