/**
 * Site Configuration - EDIT THIS FILE to customize your site
 * All metadata, OG images, and branding read from here automatically.
 */

export const siteConfig = {
  // Basic Info
  name: "FlameSwap",
  tagline: "Swap Style, Spread Warmth",
  description:
    "A clothing exchange platform for HW High School students. Swap stylish pieces with classmates, save money, and reduce textile waste. Built with Kleap.",

  // Site URL (replaced automatically on deploy)
  url: process.env.NEXT_PUBLIC_URL || "https://your-app.kleap.io",

  // Layout: navbar is hidden by default. Set to true for marketing/landing sites.
  showNavbar: false,

  // Navigation links (only used when showNavbar is true)
  showNavbar: true,
  navLinks: [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
  ] as { title: string; link: string }[],

  // SEO Keywords
  keywords: ["keyword1", "keyword2", "keyword3"],

  // Author/Company
  author: "Your Name",
  company: "Your Company",

  // Social
  twitter: "@yourtwitter",

  // OG Image: set to a generated image URL for rich link previews
  ogImage: "",

  // Theme colors for OG image (fallback when ogImage is empty)
  ogBackground: "#020022",
  ogAccent1: "#1a1a4e",
  ogAccent2: "#2d1b4e",
};

export type SiteConfig = typeof siteConfig;
