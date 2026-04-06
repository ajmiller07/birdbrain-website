import { ImageResponse } from "next/og";
import { getPost, categoryLabel, posts } from "@/lib/posts";
import { notFound } from "next/navigation";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// Category accent colors (hex — no oklch inside ImageResponse)
const categoryColor: Record<string, string> = {
  technical: "#d97706",
  product: "#4b7bc4",
  community: "#888888",
};

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const accentColor = categoryColor[post.category] ?? "#d97706";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#111111",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "monospace",
        }}
      >
        {/* Top: wordmark + category */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span
              style={{
                fontSize: 14,
                letterSpacing: "0.3em",
                color: "#d97706",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Bird Brain
            </span>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.25em",
                color: "#888888",
                textTransform: "uppercase",
              }}
            >
              Blog
            </span>
          </div>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: accentColor,
              border: `1px solid ${accentColor}55`,
              padding: "5px 14px",
            }}
          >
            {categoryLabel[post.category]}
          </div>
        </div>

        {/* Center: post title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: post.title.length > 40 ? 52 : 64,
              fontWeight: 800,
              color: "#f0f0f0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            {post.title}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#888888",
              lineHeight: 1.5,
              maxWidth: 800,
            }}
          >
            {post.tagline}
          </div>
        </div>

        {/* Bottom: reading time */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <span
            style={{
              fontSize: 13,
              color: "#555555",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            {post.readingTime} read
          </span>
          <span style={{ color: "#333333", fontSize: 13 }}>·</span>
          <span
            style={{
              fontSize: 13,
              color: "#555555",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            birdbrain.audio
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
