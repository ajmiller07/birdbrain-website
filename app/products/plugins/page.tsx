import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductsByCategory, statusLabel } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audio Plugins",
  description:
    "Bird Brain audio plugins — VST3, AU, and AAX with neural DSP, agent control, and open weight formats.",
};

const statusVariant = {
  available: "default",
  preorder: "outline",
  "coming-soon": "secondary",
} as const;

export default function PluginsPage() {
  const plugins = getProductsByCategory("plugins");

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <Badge variant="outline" className="font-mono text-[10px] mb-4">
          Software
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Audio Plugins
        </h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          VST3 / AU / AAX plugins that bring the full Bird Brain neural
          architecture to your DAW. Weights are open format — train in Spice Lab,
          deploy anywhere.
        </p>
      </section>

      <Separator />

      <section className="mx-auto max-w-6xl px-6 py-16 space-y-6">
        {plugins.map((product) => (
          <Card
            key={product.id}
            className="bg-card border-border hover:border-primary/30 transition-colors"
          >
            <CardHeader className="pb-3">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Badge
                  variant={statusVariant[product.status]}
                  className="font-mono text-[10px]"
                >
                  {statusLabel[product.status]}
                </Badge>
                <Badge variant="outline" className="font-mono text-[10px]">
                  Software
                </Badge>
              </div>
              <h2 className="font-mono text-xl font-bold tracking-wide">
                {product.name}
              </h2>
              <p className="text-sm text-muted-foreground">{product.tagline}</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wider">
                    Specifications
                  </p>
                  <ul className="space-y-1">
                    {product.specs.map((spec) => (
                      <li
                        key={spec}
                        className="text-xs font-mono text-muted-foreground"
                      >
                        · {spec}
                      </li>
                    ))}
                  </ul>
                  {product.status === "preorder" && (
                    <Button
                      render={<Link href="/#early-access" />}
                      className="font-mono tracking-wide mt-6"
                      size="sm"
                    >
                      Pre-Order · Join the Launch List →
                    </Button>
                  )}
                  {product.status === "coming-soon" && (
                    <Button
                      render={<Link href="/#early-access" />}
                      variant="outline"
                      className="font-mono tracking-wide mt-6"
                      size="sm"
                    >
                      Get Notified →
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
