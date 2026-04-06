import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { sortedPosts, categoryLabel, formatDate } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical writing from Bird Brain — neural spice modeling, open weight formats, and the engineering behind our hardware.",
};

const categoryAccent: Record<string, string> = {
  technical: "text-primary border-primary/30",
  product: "text-[var(--bb-blue)] border-[var(--bb-blue)]/30",
  community: "text-muted-foreground border-border",
};

export default function BlogPage() {
  const [featured, ...rest] = sortedPosts;

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3">
          Blog
        </p>
        <div className="flex items-start justify-between gap-4 mb-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Under the hood.
          </h1>
          <Link
            href="/feed.xml"
            className="shrink-0 mt-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary/40 rounded px-2.5 py-1"
            aria-label="RSS feed"
          >
            RSS
          </Link>
        </div>
        <p className="text-muted-foreground max-w-xl leading-relaxed">
          Technical deep dives, product engineering stories, and notes on building
          an open neural DSP ecosystem.
        </p>
      </section>

      <Separator />

      {/* Featured post */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase mb-8">
          Latest
        </p>
        <Link href={`/blog/${featured.slug}`} className="group block">
          <article className="p-8 rounded-lg border border-border bg-card group-hover:border-primary/40 transition-colors space-y-4">
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className={`font-mono text-[10px] ${categoryAccent[featured.category]}`}
              >
                {categoryLabel[featured.category]}
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">
                {formatDate(featured.date)} · {featured.readingTime} read
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
              {featured.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              {featured.tagline}
            </p>
            <p className="font-mono text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Read article →
            </p>
          </article>
        </Link>
      </section>

      <Separator />

      {/* Post list */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase mb-8">
          Archive
        </p>
        <div className="space-y-4">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="p-6 rounded-lg border border-border bg-card group-hover:border-primary/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className={`font-mono text-[10px] ${categoryAccent[post.category]}`}
                      >
                        {categoryLabel[post.category]}
                      </Badge>
                      <span className="font-mono text-xs text-muted-foreground">
                        {formatDate(post.date)} · {post.readingTime} read
                      </span>
                    </div>
                    <h3 className="font-mono text-base font-semibold tracking-wide group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.tagline}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Read →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Separator />

      <section className="mx-auto max-w-6xl px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Stay in the loop
          </p>
          <p className="text-base font-semibold tracking-tight">
            New posts, product launches, and weight drops — first.
          </p>
        </div>
        <Button render={<Link href="/#early-access" />} className="font-mono tracking-wide shrink-0">
          Join the Launch List →
        </Button>
      </section>
    </>
  );
}
