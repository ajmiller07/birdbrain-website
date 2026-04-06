import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand color hex equivalents — oklch values from globals.css don't work
// inside ImageResponse (limited CSS subset: flexbox only, no oklch).
// oklch(0.08 0 0)   → #111111  (background)
// oklch(0.72 0.19 55) → #d97706  (amber primary)
// oklch(0.55 0 0)   → #888888  (muted foreground)

export default function Image() {
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
        {/* Top: wordmark */}
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
            Neural DSP
          </span>
        </div>

        {/* Center: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.25em",
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#f0f0f0" }}>Bird</span>
            <span style={{ color: "#d97706" }}>Brain</span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#888888",
              fontWeight: 400,
              maxWidth: 680,
              lineHeight: 1.4,
            }}
          >
            Guitar pedals, eurorack modules, and audio plugins powered by
            weight-based neural DSP.
          </div>
        </div>

        {/* Bottom: tagline pill */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#d97706",
              border: "1px solid rgba(217,119,6,0.3)",
              padding: "6px 16px",
            }}
          >
            Neural DSP · Analog Soul
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
