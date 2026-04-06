import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { sortedPosts, categoryLabel, formatDate } from "@/lib/posts";
import WaitlistForm from "@/components/waitlist-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bird Brain — Neural DSP Audio",
  description:
    "Guitar pedals, eurorack modules, and audio plugins powered by weight-based neural DSP. The warmth of tube circuits — computed.",
};

// Hoisted — static data, not re-allocated each render
const productLines = [
  {
    id: "pedals",
    label: "Guitar Pedals",
    badge: "Hardware",
    description:
      "Compact neural processors in a rugged pedal format. Real-time weight inference at audio rates — the warmth of analog, the precision of digital.",
    href: "/products/pedals",
    accentClass: "text-primary",
  },
  {
    id: "eurorack",
    label: "Eurorack Modules",
    badge: "Modular",
    description:
      "Neural DSP nodes for your modular system. CV-addressable weight parameters, per-sample processing, and distributed DSP networking across modules.",
    href: "/products/eurorack",
    accentClass: "text-[var(--bb-blue)]",
  },
  {
    id: "plugins",
    label: "Audio Plugins",
    badge: "Software",
    description:
      "VST3 / AU / AAX plugins that expose the full neural architecture to your DAW. Agent-driven routing, live re-weighting, and neural spice model integration.",
    href: "/products/plugins",
    accentClass: "text-muted-foreground",
  },
];

const techPillars = [
  {
    title: "Neural Spice Modeling",
    body: "We model analog circuits as trainable graphs — resistors, capacitors, and nonlinearities become differentiable nodes. The result: faithful tube saturation and transformer coloration at any sample rate.",
  },
  {
    title: "DSP Network Architecture",
    body: "Processing units communicate over a lightweight message bus. Modules share weight tensors and route signal dynamically — turning a signal chain into a distributed audio computer.",
  },
  {
    title: "Agent-Driven Control",
    body: "An embedded agent layer exposes every parameter as a learnable endpoint. Describe a sound in natural language and watch the weights converge in real time.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[92vh] px-6 overflow-hidden">
        {/* CSS-animated waveform — zero client JS */}
        <div className="absolute inset-0 flex items-center opacity-[0.05] pointer-events-none select-none overflow-hidden">
          <svg
            className="w-[200%] h-48 animate-wave"
            viewBox="0 0 1440 96"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48 C60 10, 120 86, 180 48 C240 10, 300 86, 360 48 C420 10, 480 86, 540 48 C600 10, 660 86, 720 48 C780 10, 840 86, 900 48 C960 10, 1020 86, 1080 48 C1140 10, 1200 86, 1260 48 C1320 10, 1380 86, 1440 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M0 48 C40 28, 80 68, 120 48 C160 28, 200 68, 240 48 C280 28, 320 68, 360 48 C400 28, 440 68, 480 48 C520 28, 560 68, 600 48 C640 28, 680 68, 720 48 C760 28, 800 68, 840 48 C880 28, 920 68, 960 48 C1000 28, 1040 68, 1080 48 C1120 28, 1160 68, 1200 48 C1240 28, 1280 68, 1320 48 C1360 28, 1400 68, 1440 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <Badge
            variant="outline"
            className="font-mono text-[10px] tracking-widest text-primary border-primary/30"
          >
            Neural DSP · Analog Soul
          </Badge>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.9]">
            Bird <span className="text-primary">Brain</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Guitar pedals, eurorack modules, and audio plugins powered by
            weight-based neural DSP. The warmth of tube circuits — computed.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button
              render={<Link href="/products" />}
              size="lg"
              className="font-mono tracking-wide"
            >
              Explore Products
            </Button>
            <Button
              render={<Link href="/technology" />}
              variant="outline"
              size="lg"
              className="font-mono tracking-wide"
            >
              How It Works
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <div className="w-px h-12 bg-foreground animate-pulse" />
        </div>
      </section>

      <Separator />

      {/* Product Lines */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 space-y-2">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Product Lines
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            One architecture.
            <br />
            Three form factors.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {productLines.map((line) => (
            <Link key={line.id} href={line.href} className="group block">
              <Card className="h-full bg-card border-border transition-colors group-hover:border-primary/40">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="font-mono text-[10px]">
                      {line.badge}
                    </Badge>
                  </div>
                  <h3
                    className={`text-xl font-semibold tracking-tight ${line.accentClass}`}
                  >
                    {line.label}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {line.description}
                  </p>
                  <p className="mt-4 text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View {line.label} →
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Separator />

      {/* Technology */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              The Technology
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Neural nets trained
              <br />
              on analog circuits.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We don&apos;t model circuits by ear. We differentiate through them —
              treating every resistor, capacitor, and transformer as a trainable
              node in a computational graph. The result is DSP that responds like
              hardware, at any sample rate, with zero drift.
            </p>
            <Button
              render={<Link href="/technology" />}
              variant="outline"
              className="font-mono"
            >
              Read the Technical Overview →
            </Button>
          </div>

          <div className="space-y-3">
            {techPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-lg border border-border bg-card space-y-2"
              >
                <h3 className="text-sm font-semibold font-mono tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* About CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl space-y-6">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            About Bird Brain
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built for the obsessive.
            <br />
            Designed for the stage.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Bird Brain is an audio hardware and software studio focused on one
            thing: making neural net DSP accessible to musicians who care deeply
            about tone. Every product ships with open weight formats, full CV
            integration, and an agent control layer — because serious tools deserve
            serious interfaces.
          </p>
          <Button render={<Link href="/about" />} className="font-mono">
            Our Story →
          </Button>
        </div>
      </section>

      <Separator />

      {/* Launch list */}
      <section id="early-access" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              Early Access
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Latency Zero and Agent CV
              <br />
              are shipping soon.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Get on the launch list for hardware pre-orders, beta plugin access,
              and early entry to the open weight registry. We send one email per
              product — no noise.
            </p>
            <WaitlistForm />
            <Button
              render={<Link href="/community" />}
              variant="outline"
              className="font-mono tracking-wide self-start"
            >
              Open Weight Ecosystem
            </Button>
          </div>

          <div className="space-y-3">
            {[
              {
                name: "Latency Zero",
                status: "Pre-Order",
                detail: "Neural reverb · 0.8ms round-trip · shipping Q3 2026",
              },
              {
                name: "Agent CV",
                status: "Coming Soon",
                detail: "Language-to-CV module · 8× precision outputs · Wi-Fi + BLE",
              },
              {
                name: "Spice Lab",
                status: "Pre-Order",
                detail: "Circuit modeling environment · GPU-accelerated · .bbm export",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-lg border border-border bg-card flex items-start justify-between gap-4"
              >
                <div>
                  <p className="font-mono text-sm font-semibold tracking-wide">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[10px] text-primary border border-primary/30 rounded px-2 py-0.5">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Latest from the blog */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-baseline justify-between mb-10">
          <div className="space-y-1">
            <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
              From the Blog
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Under the hood.
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            All articles →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {sortedPosts.slice(0, 2).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <Card className="h-full bg-card border-border transition-colors group-hover:border-primary/40">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" className="font-mono text-[10px]">
                      {categoryLabel[post.category]}
                    </Badge>
                    <span className="font-mono text-xs text-muted-foreground">
                      {formatDate(post.date)} · {post.readingTime} read
                    </span>
                  </div>
                  <h3 className="font-mono text-base font-semibold tracking-wide group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.tagline}
                  </p>
                  <p className="mt-4 text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read article →
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
