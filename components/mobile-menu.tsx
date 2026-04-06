"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNavLinks } from "@/lib/nav-links";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex flex-col gap-1.5 p-1"
      >
        <span
          className={`block w-5 h-px bg-foreground transition-transform duration-200 ${
            open ? "translate-y-2.5 rotate-45" : ""
          }`}
        />
        <span
          className={`block w-5 h-px bg-foreground transition-opacity duration-200 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-px bg-foreground transition-transform duration-200 ${
            open ? "-translate-y-2.5 -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
          {primaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
