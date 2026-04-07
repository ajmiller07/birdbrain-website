import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductsByCategory, statusLabel } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eurorack Modules",
  description:
    "Neural DSP eurorack modules — CV-addressable weight parameters, networked processing, and agent-driven control.",
};

const statusVariant = {
  available: "default",
  preorder: "outline",
  "coming-soon": "secondary",
} as const;

export default function EurorackPage() {
  const modules = getProductsByCategory("eurorack");

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <Badge variant="outline" className="font-mono text-[10px] mb-4">
          Modular
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Eurorack Modules
        </h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Neural DSP nodes for your modular system. CV-addressable weight
          parameters, per-sample processing, and distributed DSP networking
          via the NSB-1 Weight Bus. Build an interconnected neural audio computer
          one module at a time.
        </p>
      </section>

      <Separator />

      <section className="mx-auto max-w-6xl px-6 py-16 space-y-6">
        {modules.map((product) => (
          <Card
            key={product.id}
            className="bg-card border-border hover:border-[var(--bb-blue)]/40 transition-colors"
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
                  Modular
                </Badge>
              </div>
              <h2 className="font-mono text-xl font-bold tracking-wide">
                {product.name}
              </h2>
              <p className="text-sm text-[var(--bb-blue)]">{product.tagline}</p>
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
                  {product.detailHref && (
                    <Button
                      render={<Link href={product.detailHref} />}
                      variant="outline"
                      className="font-mono tracking-wide mt-6 mr-2"
                      size="sm"
                    >
                      Full Specs →
                    </Button>
                  )}
                  {product.status === "preorder" && (
                    <Button
                      render={<Link href={product.detailHref ?? "/#early-access"} />}
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
