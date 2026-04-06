import Link from "next/link";
import { Separator } from "@/components/ui/separator";

// Hoisted outside component — static data, no re-computation
const footerLinks = [
  { href: "/products", label: "Products" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="mt-24">
      <Separator />
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="space-y-1">
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase font-semibold">
            Bird Brain
          </p>
          <p className="text-xs text-muted-foreground">
            Neural DSP. Analog Soul.
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Bird Brain Audio
        </p>
      </div>
    </footer>
  );
}
