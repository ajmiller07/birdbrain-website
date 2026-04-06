import type { VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
  buildCommand: "npm run build",
  outputDirectory: ".next",
  framework: "nextjs",
  headers: [
    {
      source: "/(.*)",
      headers: [
        // Prevent MIME-type sniffing attacks
        { key: "X-Content-Type-Options", value: "nosniff" },
        // Block all iframe embedding (prevents clickjacking)
        { key: "X-Frame-Options", value: "DENY" },
        // Limit referrer information to origin-only on cross-origin requests
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        // 2-year HSTS with subdomains; eligible for Chrome preload list
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        // Opt out of all browser APIs this marketing site does not use
        {
          key: "Permissions-Policy",
          value:
            "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
        },
      ],
    },
  ],
};
