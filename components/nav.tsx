import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import MobileMenu from "@/components/mobile-menu";
import { primaryNavLinks } from "@/lib/nav-links";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav className="relative mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* Bird Brain wordmark */}
          <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase font-semibold">
            Bird Brain
          </span>
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            Neural DSP
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {primaryNavLinks.map((link) => (
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

        {/* Mobile nav — client component owns toggle state */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
      <Separator />
    </header>
  );
}
