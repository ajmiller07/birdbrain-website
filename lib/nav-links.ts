export interface NavLink {
  href: string;
  label: string;
}

/**
 * Primary navigation — shown in the header nav and mobile menu.
 * Keep this to ≤5 items. Team and Press live in the footer only.
 */
export const primaryNavLinks: NavLink[] = [
  { href: "/products", label: "Products" },
  { href: "/technology", label: "Technology" },
  { href: "/community", label: "Community" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

/**
 * Footer navigation — superset of primaryNavLinks plus secondary pages.
 */
export const footerNavLinks: NavLink[] = [
  ...primaryNavLinks,
  { href: "/team", label: "Team" },
  { href: "/faq", label: "FAQ" },
  { href: "/press", label: "Press" },
  { href: "/privacy", label: "Privacy" },
];
