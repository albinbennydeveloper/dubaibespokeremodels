import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dubaibespokeremodels.ae";

  // Core pages
  const routes = [
    "",
    "/portfolio",
    "/services",
    "/process",
    "/about",
    "/blog",
    "/renovation-guide-dubai-2025",
    "/luxury-apartment-renovation-dubai", // New High-Value Landing Page
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic blog posts
  const posts = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...posts];
}
