import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { sortedPosts, getPost, categoryLabel, formatDate } from "@/lib/posts";
import type { Metadata } from "next";
import type { Post } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sortedPosts.map((p) => ({ slug: p.slug }));
}

// Maps post category to the article:author OG field.
// Technical posts are authored by Axon (DSP Architect).
// Product and community posts are authored by Signal (CMO).
// Change these to "Bird Brain Audio" for brand-first attribution instead.
const categoryToAuthor: Record<Post["category"], string> = {
  technical: "Axon",
  product: "Signal",
  community: "Signal",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const canonicalUrl = `https://birdbrain.audio/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.tagline,
    alternates: {
      canonical: canonicalUrl,
    },
    // blog/[slug] overrides the root layout's openGraph entirely —
    // Next.js does not merge nested metadata objects, it replaces them.
    // Re-include siteName and locale so they are not silently dropped.
    openGraph: {
      title: post.title,
      description: post.tagline,
      type: "article",
      publishedTime: new Date(post.date + "T00:00:00Z").toISOString(),
      authors: [categoryToAuthor[post.category]],
      url: canonicalUrl,
      siteName: "Bird Brain",
      locale: "en_US",
    },
  };
}

const categoryAccent: Record<string, string> = {
  technical: "text-primary border-primary/30",
  product: "text-[var(--bb-blue)] border-[var(--bb-blue)]/30",
  community: "text-muted-foreground border-border",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const currentIndex = sortedPosts.findIndex((p) => p.slug === slug);
  const next = sortedPosts[currentIndex + 1] ?? null;

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-12">
        <Link
          href="/blog"
          className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Blog
        </Link>

        <div className="mt-8 space-y-4">
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

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {post.tagline}
          </p>
        </div>
      </section>

      <Separator />

      {/* Body */}
      <article className="mx-auto max-w-3xl px-6 py-16 space-y-6">
        {post.body.map((paragraph, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </article>

      <Separator />

      {/* Launch list CTA */}
      <section className="mx-auto max-w-3xl px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            Stay ahead of the signal
          </p>
          <p className="text-base font-semibold tracking-tight">
            Get launch announcements and early weight drops first.
          </p>
        </div>
        <Button render={<Link href="/#early-access" />} className="font-mono tracking-wide shrink-0">
          Join the Launch List →
        </Button>
      </section>

      <Separator />

      {/* Footer nav */}
      <section className="mx-auto max-w-3xl px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <Button render={<Link href="/blog" />} variant="outline" className="font-mono">
          ← All articles
        </Button>

        {next && (
          <div className="text-right space-y-1">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              Next
            </p>
            <Link
              href={`/blog/${next.slug}`}
              className="font-mono text-sm font-semibold hover:text-primary transition-colors"
            >
              {next.title} →
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
