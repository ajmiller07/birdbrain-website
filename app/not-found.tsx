import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "This page doesn't exist, but Bird Brain does.",
};

const quickLinks = [
  { href: "/products", label: "Products", desc: "Pedals, eurorack, plugins" },
  { href: "/blog", label: "Blog", desc: "Technical writing and announcements" },
  { href: "/community", label: "Community", desc: "Open weights and the .bbm format" },
  { href: "/faq", label: "FAQ", desc: "Common questions answered" },
];

export default function NotFound() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-6">
          Error 404
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
          Signal not found.
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-10">
          This page doesn&apos;t exist — but the rest of the rack is live.
          Try one of these instead, or join the launch list while you&apos;re here.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button render={<Link href="/" />} className="font-mono tracking-wide">
            ← Back to home
          </Button>
          <Button
            render={<Link href="/#early-access" />}
            variant="outline"
            className="font-mono tracking-wide"
          >
            Join the Launch List
          </Button>
        </div>
      </section>

      <Separator />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase mb-8">
          Where to go
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group p-5 rounded-lg border border-border hover:border-primary/40 transition-colors"
            >
              <p className="font-mono font-semibold text-sm group-hover:text-primary transition-colors mb-1">
                {link.label} →
              </p>
              <p className="text-xs text-muted-foreground">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
