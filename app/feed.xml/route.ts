import { sortedPosts } from "@/lib/posts";

// Posts are static in-memory data — prerender at build time, serve from CDN edge.
export const dynamic = "force-static";

const BASE = "https://birdbrain.audio";

function rssDate(dateStr: string): string {
  // RSS 2.0 requires RFC 822 format: "Sun, 06 Apr 2026 00:00:00 +0000"
  const d = new Date(dateStr + "T00:00:00Z");
  return d.toUTCString();
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(): Promise<Response> {
  const items = sortedPosts
    .map((post) => {
      const link = `${BASE}/blog/${post.slug}`;
      const description = escapeXml(post.tagline);
      const firstParagraph = escapeXml(post.body[0] ?? "");

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${description} ${firstParagraph}</description>
      <pubDate>${rssDate(post.date)}</pubDate>
      <category>${escapeXml(post.category)}</category>
    </item>`.trim();
    })
    .join("\n    ");

  const lastBuildDate = rssDate(sortedPosts[0]?.date ?? new Date().toISOString().slice(0, 10));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bird Brain Audio</title>
    <link>${BASE}</link>
    <description>Neural DSP hardware and software — technical writing, product announcements, and open weight releases.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE}/icon.png</url>
      <title>Bird Brain Audio</title>
      <link>${BASE}</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
