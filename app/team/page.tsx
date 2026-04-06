import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team — Bird Brain",
  description:
    "The departments and agents behind Bird Brain — specialized for neural DSP, audio engineering, design, and developer relations.",
};

const departments = [
  {
    id: "dsp-engineering",
    label: "DSP & Engineering",
    badge: "Core",
    description:
      "Owns the neural architecture, weight formats, and embedded runtime. Responsible for circuit differentiation pipelines, per-sample inference performance, and hardware bring-up.",
    accentClass: "text-primary",
    agents: [
      {
        name: "Axon",
        title: "Lead DSP Architect",
        focus: "Neural spice modeling · circuit differentiation · runtime optimization",
      },
      {
        name: "Gradient",
        title: "Embedded Systems Engineer",
        focus: "Custom DSP board firmware · latency budgeting · SIMD kernels",
      },
      {
        name: "Solder",
        title: "Hardware Integration Engineer",
        focus: "Eurorack CV interface · analog/digital boundary · prototyping",
      },
    ],
  },
  {
    id: "software",
    label: "Software & Plugins",
    badge: "Software",
    description:
      "Builds the VST3, AU, and AAX plugin suite, the agent control layer, and the cross-platform SDK that bridges hardware weights to DAW automation.",
    accentClass: "text-[var(--bb-blue)]",
    agents: [
      {
        name: "Wren",
        title: "Frontend Dev Agent",
        focus: "Plugin UI · parameter automation · WebView rendering",
      },
      {
        name: "Codec",
        title: "SDK Engineer",
        focus: "Open weight SDK · DAW bridging · agent control API",
      },
      {
        name: "Latch",
        title: "Backend Dev Agent",
        focus: "Weight server · model registry · OTA update pipeline",
      },
    ],
  },
  {
    id: "design",
    label: "Design & Creative",
    badge: "Creative",
    description:
      "Defines Bird Brain's visual language across hardware enclosures, plugin interfaces, and marketing materials. Obsessed with the intersection of technical precision and aesthetic restraint.",
    accentClass: "text-muted-foreground",
    agents: [
      {
        name: "Serif",
        title: "Art Dev Agent",
        focus: "Brand identity · hardware panel design · print collateral",
      },
      {
        name: "Raster",
        title: "UI/UX Designer",
        focus: "Plugin interface design · design system · motion",
      },
    ],
  },
  {
    id: "devrel",
    label: "Developer Relations",
    badge: "Community",
    description:
      "Grows the open weight ecosystem, maintains documentation, and supports third-party developers building on the Bird Brain SDK and weight format.",
    accentClass: "text-primary",
    agents: [
      {
        name: "Patch",
        title: "Developer Advocate",
        focus: "SDK docs · tutorials · community weight sharing",
      },
      {
        name: "Flux",
        title: "Integration Engineer",
        focus: "Third-party DAW integrations · Max/MSP · Reaktor",
      },
    ],
  },
  {
    id: "marketing",
    label: "Marketing & Growth",
    badge: "Growth",
    description:
      "Drives product positioning, content strategy, and customer acquisition. Translates deep DSP concepts into narratives that resonate with engineers and musicians alike.",
    accentClass: "text-[var(--bb-blue)]",
    agents: [
      {
        name: "Signal",
        title: "CMO",
        focus: "Brand strategy · product launches · developer community",
      },
      {
        name: "Boost",
        title: "Content Agent",
        focus: "Technical writing · demo production · SEO",
      },
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3">
          Team
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Specialized agents.
          <br />
          One coherent product.
        </h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Bird Brain runs on a team of highly specialized AI agents organized
          into focused departments. Each agent owns a domain — from circuit
          differentiation to brand identity — and operates with full context
          about the product they are building.
        </p>
      </section>

      <Separator />

      {/* Departments */}
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-16">
        {departments.map((dept) => (
          <div key={dept.id}>
            <div className="flex items-center gap-3 mb-6">
              <p className={`font-mono text-xs tracking-[0.3em] uppercase ${dept.accentClass}`}>
                {dept.label}
              </p>
              <Badge variant="outline" className="font-mono text-[10px]">
                {dept.badge}
              </Badge>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
              <p className="text-sm text-muted-foreground leading-relaxed md:pt-1">
                {dept.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {dept.agents.map((agent) => (
                  <div
                    key={agent.name}
                    className="p-5 rounded-lg border border-border bg-card space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-mono text-sm font-semibold tracking-wide">
                        {agent.name}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">
                      {agent.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-2 mt-2">
                      {agent.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="mt-16" />
          </div>
        ))}
      </section>

      {/* Closing note */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="max-w-2xl space-y-4">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Open Architecture
          </p>
          <h2 className="text-2xl font-bold tracking-tight">
            Built to grow.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            The team structure mirrors the product: modular, composable, and
            extensible. New departments and specialist agents are added as the
            product expands — the same way new modules join a eurorack system.
          </p>
        </div>
      </section>
    </>
  );
}
