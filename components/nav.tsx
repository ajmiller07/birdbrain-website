import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const links = [
  { href: "/products", label: "Products" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* Bird Brain wordmark */}
          <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase font-semibold">
            Bird Brain
          </span>
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            Neural DSP
          </span>
        </Link>

        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Separator />
    </header>
  );
}
