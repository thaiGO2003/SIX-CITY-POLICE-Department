import type { MetadataRoute } from "next";
import { laws } from "@/content/laws";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://scpd.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/laws", "/rules", "/roster", "/join-us", "/donate", "/support"];
  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...laws.map((law) => ({ url: `${baseUrl}/laws/${law.slug}`, lastModified: new Date() })),
  ];
}
