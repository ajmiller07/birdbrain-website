import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { products, categoryMeta, statusLabel } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Guitar pedals, eurorack modules, and audio plugins — all powered by neural net DSP.",
};

const statusVariant: Record<
  "available" | "preorder" | "coming-soon",
  "default" | "outline" | "secondary"
> = {
  available: "default",
  preorder: "outline",
  "coming-soon": "secondary",
};

const categories = ["pedals", "eurorack", "plugins"] as const;

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3">
          All Products
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          The Bird Brain lineup.
        </h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Every product runs the same neural DSP core. Hardware and software share
          weight formats, so a patch trained on the plugin deploys to the pedal.
        </p>
      </section>

      <Separator />

      {/* Category sections */}
      {categories.map((cat) => {
        const meta = categoryMeta[cat];
        const catProducts = products.filter((p) => p.category === cat);

        return (
          <section key={cat} className="mx-auto max-w-6xl px-6 py-16">
            <div className="flex items-baseline gap-4 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Badge variant="outline" className="font-mono text-[10px]">
                    {meta.badge}
                  </Badge>
                </div>
                <h2 className="text-2xl font-bold tracking-tight">{meta.label}</h2>
                <p className="text-sm text-muted-foreground mt-1 max-w-lg">
                  {meta.description}
                </p>
              </div>
              <Link
                href={`/products/${cat}`}
                className="ml-auto text-xs font-mono text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                View all {meta.label} →
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {catProducts.map((product) => (
                <Card
                  key={product.id}
                  className="bg-card border-border hover:border-primary/40 transition-colors"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant={statusVariant[product.status]}
                        className="font-mono text-[10px]"
                      >
                        {statusLabel[product.status]}
                      </Badge>
                    </div>
                    <h3 className="font-mono text-base font-semibold tracking-wide">
                      {product.name}
                    </h3>
                    <p className="text-xs text-primary leading-snug">
                      {product.tagline}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mt-4 space-y-1">
                      {product.specs.slice(0, 3).map((spec) => (
                        <p key={spec} className="text-xs font-mono text-muted-foreground">
                          · {spec}
                        </p>
                      ))}
                      {product.specs.length > 3 ? (
                        <p className="text-xs font-mono text-muted-foreground">
                          · +{product.specs.length - 3} more specs
                        </p>
                      ) : null}
                    </div>
                    {product.status === "preorder" && (
                      <Button
                        render={<Link href="/#early-access" />}
                        className="font-mono tracking-wide mt-5 w-full"
                        size="sm"
                      >
                        Pre-Order · Join the Launch List →
                      </Button>
                    )}
                    {product.status === "coming-soon" && (
                      <Button
                        render={<Link href="/#early-access" />}
                        variant="outline"
                        className="font-mono tracking-wide mt-5 w-full"
                        size="sm"
                      >
                        Get Notified →
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
